/**
 * BFF — 10 derniers déménageurs scorés
 * GET /api/scoring-check/recent-scores
 *
 * Proxifie vers le backend (clé API protégée).
 * Cache-Control: no-store — force le passage par le BFF (rate limit actif).
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '../rate-limit';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';
const SCORING_KEY = process.env.SCORING_API_KEY_PUBLIC ?? '';

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const rl = checkRateLimit('recent-scores', ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Trop de requêtes.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.resetIn / 1000)) } },
    );
  }

  if (!BACKOFFICE_URL || !SCORING_KEY) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 503 });
  }

  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring-search/recent-scores`,
    {
      headers: { 'X-Moverz-Key': SCORING_KEY },
      next: { revalidate: 0 },
    },
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Erreur récupération scores.' }, { status: upstream.status });
  }

  const data = await upstream.json();
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
