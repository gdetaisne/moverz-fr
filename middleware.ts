import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CITIES } from "@/lib/cities";
import { QUARTIER_HUB_SLUGS } from "@/lib/quartiers";

// NOTE: exclude "ile-de-france" from corridors because it's a region, not a city-to-city route.
const CITY_SLUGS = new Set(CITIES.map((c) => c.slug).filter((s) => s !== "ile-de-france"));
const QUARTIERS_SLUGS = new Set<string>(QUARTIER_HUB_SLUGS as unknown as string[]);

// Pages quartiers "riches" (liées aux pages /{ville}/{quartier}/) déjà implémentées en dur.
// IMPORTANT: ne pas les écraser via rewrite, sinon on perd le maillage interne.
const DEDICATED_QUARTIERS_HUB_CITIES = new Set([
  "nice",
  "toulouse",
  "strasbourg",
  "nantes",
  "rennes",
  "rouen",
  "montpellier",
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Incident hardening (2026-01-12):
  // The Next.js image optimizer endpoint (`/_next/image`) can become CPU-heavy under crawl/bot traffic
  // and was observed to correlate with 504s + CPU saturation in production.
  // We disable it at the edge to prevent direct hits even if a client tries to call it explicitly.
  if (pathname.startsWith("/_next/image")) {
    return new NextResponse(null, { status: 404 });
  }

  // Quartiers hubs: serve "/quartiers-<slug>/" via a dynamic route "/quartiers/<slug>/" (implementation detail).
  // This prevents 404s while keeping the public URL stable (SEO) and avoids adding 20+ nearly-identical files.
  const quartiersHub = pathname.match(/^\/quartiers-([a-z0-9-]+)\/?$/);
  if (quartiersHub) {
    const citySlug = quartiersHub[1];
    if (QUARTIERS_SLUGS.has(citySlug) && !DEDICATED_QUARTIERS_HUB_CITIES.has(citySlug)) {
      const url = req.nextUrl.clone();
      url.pathname = `/quartiers/${citySlug}`;
      return NextResponse.rewrite(url);
    }
  }

  // SEO: reduce duplicate URLs for corridor pages.
  // The internal corridor detail URL (/corridor/{from}/{to}) is an implementation detail used by middleware rewrites.
  // If someone hits it directly, permanently redirect to the public "{from}-vers-{to}" URL.
  const corridorDetail = pathname.match(/^\/corridor\/([a-z0-9-]+)\/([a-z0-9-]+)\/?$/);
  if (corridorDetail) {
    const from = corridorDetail[1];
    const to = corridorDetail[2];

    if (CITY_SLUGS.has(from) && CITY_SLUGS.has(to) && from !== to) {
      const url = req.nextUrl.clone();
      url.pathname = `/${from}-vers-${to}/`;
      return NextResponse.redirect(url, 308);
    }
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


