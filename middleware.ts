import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CITIES } from "@/lib/cities";

// NOTE: exclude "ile-de-france" from corridors because it's a region, not a city-to-city route.
const CITY_SLUGS = new Set(CITIES.map((c) => c.slug).filter((s) => s !== "ile-de-france"));

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Incident hardening (2026-01-12):
  // The Next.js image optimizer endpoint (`/_next/image`) can become CPU-heavy under crawl/bot traffic
  // and was observed to correlate with 504s + CPU saturation in production.
  // We disable it at the edge to prevent direct hits even if a client tries to call it explicitly.
  if (pathname.startsWith("/_next/image")) {
    return new NextResponse(null, { status: 404 });
  }

  // Fast path: only care about "-vers-"
  if (!pathname.includes("-vers-")) return NextResponse.next();

  // Match "/from-vers-to" with optional trailing slash
  const match = pathname.match(/^\/([a-z0-9-]+)-vers-([a-z0-9-]+)\/?$/);
  if (!match) return NextResponse.next();

  const from = match[1];
  const to = match[2];

  if (!CITY_SLUGS.has(from) || !CITY_SLUGS.has(to) || from === to) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/corridor/${from}/${to}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};


