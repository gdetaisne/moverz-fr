/**
 * BFF — Récupération du scoring (avec contrôle quota)
 * GET /api/scoring-check/score?moverId=<id>
 *
 * Quota : max 3 déménageurs distincts consultés / 30 jours (cookie JWT signé).
 * Rate limit : 2 req/min par IP (protection scraping).
 * La clé API backend n'est jamais exposée au browser.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  readQuota,
  buildQuotaCookie,
  setQuotaCookieOnResponse,
  QUOTA_MAX,
} from '../quota';
import { checkRateLimit, getClientIp } from '../rate-limit';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';
const SCORING_KEY = process.env.SCORING_API_KEY_PUBLIC ?? '';

export async function GET(req: NextRequest) {
  // ── Rate limit : 2 req/min par IP ───────────────────────────
  const ip = getClientIp(req);
  const rl = checkRateLimit('score', ip);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'rate_limit', message: 'Trop de requêtes. Maximum 2 scores par minute.' },
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

  // ── Lecture du quota ────────────────────────────────────────
  const quota = await readQuota();

  const alreadyChecked = quota.used.includes(moverId);
  const usageCount = quota.used.length;

  if (!alreadyChecked && usageCount >= QUOTA_MAX) {
    return NextResponse.json(
      {
        error: 'quota_exceeded',
        message: `Vous avez atteint la limite de ${QUOTA_MAX} déménageurs consultés.`,
        used: usageCount,
        max: QUOTA_MAX,
      },
      { status: 429 },
    );
  }

  // ── Appel backend scoring ───────────────────────────────────
  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring/${encodeURIComponent(moverId)}`,
    {
      headers: { 'X-Moverz-Key': SCORING_KEY },
      next: { revalidate: 0 },
    },
  );

  if (!upstream.ok) {
    const body = await upstream.json().catch(() => ({}));
    return NextResponse.json(
      { error: body.error ?? 'Erreur scoring.' },
      { status: upstream.status },
    );
  }

  const scoring = await upstream.json();

  // ── Mise à jour du quota ────────────────────────────────────
  const newUsed = alreadyChecked ? quota.used : [...quota.used, moverId];
  const token = await buildQuotaCookie({ used: newUsed });

  const res = NextResponse.json({
    ...scoring,
    _quota: { used: newUsed.length, max: QUOTA_MAX, remaining: QUOTA_MAX - newUsed.length },
  });

  setQuotaCookieOnResponse(res, token);
  return res;
}
