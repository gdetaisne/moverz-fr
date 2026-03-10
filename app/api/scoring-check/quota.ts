/**
 * Gestion du quota user : max 3 déménageurs consultés par période de 30 jours.
 * Stocké dans un cookie HttpOnly signé (JWT via jose).
 *
 * Le payload JWT contient : { used: string[] } — liste des moverId consultés.
 */

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const COOKIE_NAME = 'moverz_quota';
const MAX_USES = 3;
const EXPIRY_DAYS = 30;

function getSecret(): Uint8Array {
  const secret = process.env.SCORING_QUOTA_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('SCORING_QUOTA_SECRET manquant ou trop court (min 32 chars)');
  }
  return new TextEncoder().encode(secret);
}

export interface QuotaPayload {
  used: string[]; // liste de moverId consultés
}

export async function readQuota(): Promise<QuotaPayload> {
  try {
    const cookieStore = await cookies();
    const raw = cookieStore.get(COOKIE_NAME)?.value;
    if (!raw) return { used: [] };

    const { payload } = await jwtVerify(raw, getSecret());
    const used = Array.isArray((payload as any).used) ? (payload as any).used : [];
    return { used };
  } catch {
    return { used: [] };
  }
}

export async function buildQuotaCookie(payload: QuotaPayload): Promise<string> {
  const token = await new SignJWT({ used: payload.used })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRY_DAYS}d`)
    .sign(getSecret());
  return token;
}

export function setQuotaCookieOnResponse(res: NextResponse, token: string): void {
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * EXPIRY_DAYS,
    path: '/',
  });
}

export const QUOTA_MAX = MAX_USES;
