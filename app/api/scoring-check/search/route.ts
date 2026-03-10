/**
 * BFF — Recherche de déménageurs
 * GET /api/scoring-check/search?q=<nom|siret>
 *
 * Proxifie vers le backend Back_Office sans exposer la clé API au browser.
 * Pas de quota consommé sur cette route (lecture seule).
 * Rate limit : 10 req/min par IP.
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '../rate-limit.js';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';
const SCORING_KEY = process.env.SCORING_API_KEY_PUBLIC ?? '';

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const rl = checkRateLimit('search', ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans quelques secondes.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(rl.resetIn / 1000)) },
      },
    );
  }

  const q = req.nextUrl.searchParams.get('q');
  if (!q || q.length < 2) {
    return NextResponse.json({ error: 'Paramètre q requis (min 2 chars).' }, { status: 400 });
  }

  if (!BACKOFFICE_URL || !SCORING_KEY) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 503 });
  }

  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring-search?q=${encodeURIComponent(q)}`,
    {
      headers: { 'X-Moverz-Key': SCORING_KEY },
      next: { revalidate: 0 },
    },
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Erreur recherche.' }, { status: upstream.status });
  }

  const data = await upstream.json();
  return NextResponse.json(data);
}
