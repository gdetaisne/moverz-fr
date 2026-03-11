/**
 * BFF — Données carte des déménageurs
 * GET /api/scoring-check/movers-map
 *
 * Récupère la liste des déménageurs actifs (id, nom, city, postalCode, isPrioritaire)
 * puis géocode chaque ville+cp via l'API Geocoding Google.
 * Cache 1h côté Next.js.
 */

import { NextRequest, NextResponse } from 'next/server';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';
const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_SERVER_KEY ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? '';

interface MoverRaw {
  id: string;
  companyName: string;
  city: string;
  postalCode: string;
  isPrioritaire: boolean;
}

interface MoverWithCoords extends MoverRaw {
  lat: number;
  lng: number;
}

// Cache en mémoire pour éviter de regéocoder à chaque requête durant le lifetime du process
const geocodeCache = new Map<string, { lat: number; lng: number } | null>();

async function geocode(city: string, postalCode: string): Promise<{ lat: number; lng: number } | null> {
  const key = `${postalCode}-${city}`.toLowerCase();
  if (geocodeCache.has(key)) return geocodeCache.get(key)!;

  try {
    const query = encodeURIComponent(`${postalCode} ${city}, France`);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GOOGLE_MAPS_KEY}&language=fr&region=fr`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) { geocodeCache.set(key, null); return null; }
    const data = await res.json() as {
      status: string;
      results: Array<{ geometry: { location: { lat: number; lng: number } } }>;
    };
    if (data.status !== 'OK' || !data.results[0]) { geocodeCache.set(key, null); return null; }
    const coords = data.results[0].geometry.location;
    geocodeCache.set(key, coords);
    return coords;
  } catch {
    geocodeCache.set(key, null);
    return null;
  }
}

export async function GET(_req: NextRequest) {
  if (!BACKOFFICE_URL) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 503 });
  }

  // Récupération de la liste des déménageurs (endpoint public, sans clé)
  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring-search/map-data`,
    { next: { revalidate: 3600 } },
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Erreur récupération données.' }, { status: upstream.status });
  }

  const { results: movers } = (await upstream.json()) as { results: MoverRaw[] };

  // Dédupliquer par city+postalCode pour limiter les appels Geocoding
  const uniqueLocations = new Map<string, { city: string; postalCode: string }>();
  for (const m of movers) {
    const k = `${m.postalCode}-${m.city}`.toLowerCase();
    if (!uniqueLocations.has(k)) uniqueLocations.set(k, { city: m.city, postalCode: m.postalCode });
  }

  // Géocoder en batch (max ~200 uniques en pratique — 1 requête/location)
  if (GOOGLE_MAPS_KEY) {
    const entries = Array.from(uniqueLocations.entries());
    // Paralléliser par lots de 10 pour ne pas saturer l'API
    for (let i = 0; i < entries.length; i += 10) {
      await Promise.all(
        entries.slice(i, i + 10).map(([, { city, postalCode }]) => geocode(city, postalCode)),
      );
    }
  }

  // Assembler la réponse finale avec coordonnées
  const withCoords: MoverWithCoords[] = [];
  for (const m of movers) {
    const coords = GOOGLE_MAPS_KEY ? await geocode(m.city, m.postalCode) : null;
    if (coords) {
      withCoords.push({ ...m, lat: coords.lat, lng: coords.lng });
    }
  }

  return NextResponse.json(
    { results: withCoords },
    { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=7200' } },
  );
}
