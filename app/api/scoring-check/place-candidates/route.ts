/**
 * BFF — Candidats Google Places pour un déménageur
 * GET /api/scoring-check/place-candidates?moverId=<id>
 *
 * Pas de quota consommé (étape de sélection, pas de scoring).
 * Rate limit : 5 req/min par IP.
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '../rate-limit';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';
const SCORING_KEY = process.env.SCORING_API_KEY_PUBLIC ?? '';

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const rl = checkRateLimit('place', ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans quelques secondes.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(rl.resetIn / 1000)) },
      },
    );
  }

  const moverId = req.nextUrl.searchParams.get('moverId');
  if (!moverId) {
    return NextResponse.json({ error: 'moverId requis.' }, { status: 400 });
  }

  if (!BACKOFFICE_URL || !SCORING_KEY) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 503 });
  }

  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring-search/${encodeURIComponent(moverId)}/place-candidates`,
    {
      headers: { 'X-Moverz-Key': SCORING_KEY },
      next: { revalidate: 0 },
    },
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Erreur candidats.' }, { status: upstream.status });
  }

  const data = await upstream.json();
  return NextResponse.json(data);
}
