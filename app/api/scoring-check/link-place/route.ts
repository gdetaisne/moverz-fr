/**
 * BFF — Lier un googlePlaceId à un déménageur (sélection utilisateur)
 * POST /api/scoring-check/link-place
 * Body: { moverId, googlePlaceId, isMovingBusiness, relevanceScore }
 *
 * Sauvegarde le placeId en base. Passe en PRIORITY si pertinence ≥ 50 et secteur déménagement confirmé.
 * Rate limit : 5 req/min par IP (même bucket que place-candidates).
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '../rate-limit';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';
const SCORING_KEY = process.env.SCORING_API_KEY_PUBLIC ?? '';

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const rl = checkRateLimit('place', ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans quelques secondes.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.resetIn / 1000)) } },
    );
  }

  if (!BACKOFFICE_URL || !SCORING_KEY) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const { moverId, googlePlaceId, isMovingBusiness, relevanceScore } = body as Record<string, unknown>;
  if (!moverId || !googlePlaceId) {
    return NextResponse.json({ error: 'moverId et googlePlaceId requis.' }, { status: 400 });
  }

  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring-search/${encodeURIComponent(String(moverId))}/link-place`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Moverz-Key': SCORING_KEY,
      },
      body: JSON.stringify({ googlePlaceId, isMovingBusiness, relevanceScore }),
    },
  );

  const text = await upstream.text();
  const data = text ? JSON.parse(text) : {};

  return NextResponse.json(data, { status: upstream.ok ? 200 : upstream.status });
}
