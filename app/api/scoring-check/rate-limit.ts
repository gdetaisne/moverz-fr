/**
 * Rate limiter in-process partagé entre les API Routes du scoring checker.
 *
 * Limites par IP :
 *   - search        : 4 req / 30s  (autocomplete — debounce 350ms ok, scraping en boucle bloqué)
 *   - place-candidates : 5 req / 60s
 *   - score         : 2 req / 60s   (appel le plus sensible)
 *   - movers-map    : 3 req / 60s   (données carte)
 *   - recent-scores : 3 req / 60s   (données scores récents)
 *
 * Note : le store est en mémoire (Map). En cas de multi-instance Next.js,
 * chaque instance a son propre compteur — acceptable pour ce niveau de protection.
 * Pour un enforcement cross-instance, utiliser Redis/Upstash.
 */

type RateLimitStore = Map<string, { count: number; reset: number }>;

const stores: Record<string, RateLimitStore> = {
  search: new Map(),
  place: new Map(),
  score: new Map(),
  map: new Map(),
  "recent-scores": new Map(),
};

const LIMITS: Record<string, { max: number; windowMs: number }> = {
  search:         { max: 4,  windowMs: 30_000 },
  place:          { max: 5,  windowMs: 60_000 },
  score:          { max: 2,  windowMs: 60_000 },
  map:            { max: 3,  windowMs: 60_000 },
  "recent-scores": { max: 3, windowMs: 60_000 },
};

export function checkRateLimit(route: 'search' | 'place' | 'score' | 'map' | 'recent-scores', ip: string): {
  allowed: boolean;
  remaining: number;
  resetIn: number; // ms
} {
  const store = stores[route];
  const limit = LIMITS[route];
  const now = Date.now();

  let entry = store.get(ip);
  if (!entry || entry.reset < now) {
    entry = { count: 1, reset: now + limit.windowMs };
    store.set(ip, entry);
    return { allowed: true, remaining: limit.max - 1, resetIn: limit.windowMs };
  }

  if (entry.count >= limit.max) {
    return { allowed: false, remaining: 0, resetIn: entry.reset - now };
  }

  entry.count++;
  return { allowed: true, remaining: limit.max - entry.count, resetIn: entry.reset - now };
}

export function getClientIp(req: { headers: { get(name: string): string | null } }): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
}
