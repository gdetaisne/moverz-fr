import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type CitySuggestion = {
  label: string;
  city: string;
  postcode: string;
};

type CacheEntry = {
  value: CitySuggestion[];
  expiresAt: number;
  staleUntil: number;
};

const CACHE_TTL_MS = 5 * 60 * 1000;
const STALE_TTL_MS = 30 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 1200;

const cache = new Map<string, CacheEntry>();

const querySchema = z.object({
  q: z.string().trim().min(3).max(80),
  limit: z.coerce.number().int().min(1).max(10).default(5),
});

const FALLBACK_CITIES: Array<{ city: string; postcode: string }> = [
  { city: "Paris", postcode: "75001" },
  { city: "Lyon", postcode: "69001" },
  { city: "Marseille", postcode: "13001" },
  { city: "Toulouse", postcode: "31000" },
  { city: "Nice", postcode: "06000" },
  { city: "Nantes", postcode: "44000" },
  { city: "Strasbourg", postcode: "67000" },
  { city: "Montpellier", postcode: "34000" },
  { city: "Bordeaux", postcode: "33000" },
  { city: "Lille", postcode: "59000" },
  { city: "Rennes", postcode: "35000" },
  { city: "Rouen", postcode: "76000" },
];

function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function localFallback(q: string, limit: number): CitySuggestion[] {
  const nq = normalize(q);
  return FALLBACK_CITIES.filter(({ city }) => normalize(city).startsWith(nq))
    .slice(0, limit)
    .map(({ city, postcode }) => ({
      label: `${city} (${postcode})`,
      city,
      postcode,
    }));
}

function parseRemotePayload(payload: unknown): CitySuggestion[] {
  const features = Array.isArray((payload as { features?: unknown[] })?.features)
    ? (payload as { features: unknown[] }).features
    : [];

  const out: CitySuggestion[] = [];
  const seen = new Set<string>();

  for (const feature of features) {
    const properties = (feature as { properties?: Record<string, unknown> })?.properties;
    const city = typeof properties?.city === "string" ? properties.city.trim() : "";
    const postcode = typeof properties?.postcode === "string" ? properties.postcode.trim() : "";
    if (!city || !postcode) continue;

    const key = `${city}|${postcode}`;
    if (seen.has(key)) continue;
    seen.add(key);

    out.push({
      label: `${city} (${postcode})`,
      city,
      postcode,
    });
  }

  return out;
}

export async function GET(request: NextRequest) {
  const parsed = querySchema.safeParse({
    q: request.nextUrl.searchParams.get("q") ?? "",
    limit: request.nextUrl.searchParams.get("limit") ?? "5",
  });

  if (!parsed.success) {
    return NextResponse.json({ message: "Paramètres invalides." }, { status: 400 });
  }

  const { q, limit } = parsed.data;
  const cacheKey = `${normalize(q)}|${limit}`;
  const now = Date.now();
  const cached = cache.get(cacheKey);

  if (cached && cached.expiresAt > now) {
    return NextResponse.json(cached.value, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=1800",
        "X-Cities-Source": "edge-cache",
      },
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const params = new URLSearchParams({
      q,
      type: "municipality",
      limit: String(limit),
    });

    const upstream = await fetch(`https://api-adresse.data.gouv.fr/search/?${params.toString()}`, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (upstream.ok) {
      const payload = await upstream.json();
      const suggestions = parseRemotePayload(payload);
      const fallback = suggestions.length > 0 ? suggestions : localFallback(q, limit);

      cache.set(cacheKey, {
        value: fallback,
        expiresAt: now + CACHE_TTL_MS,
        staleUntil: now + STALE_TTL_MS,
      });

      return NextResponse.json(fallback, {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=1800",
          "X-Cities-Source": "upstream",
        },
      });
    }
  } catch {
    // Fallback handled below.
  } finally {
    clearTimeout(timeout);
  }

  if (cached && cached.staleUntil > now) {
    return NextResponse.json(cached.value, {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=1800",
        "X-Cities-Source": "stale-cache",
      },
    });
  }

  const fallback = localFallback(q, limit);
  return NextResponse.json(fallback, {
    headers: {
      "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=1800",
      "X-Cities-Source": "local-fallback",
    },
  });
}
