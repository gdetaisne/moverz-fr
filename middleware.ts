import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CITIES } from "@/lib/cities";

// NOTE: exclude "ile-de-france" from corridors because it's a region, not a city-to-city route.
const CITY_SLUGS = new Set(CITIES.map((c) => c.slug).filter((s) => s !== "ile-de-france"));

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If someone hits the internal corridor detail URL directly, permanently redirect to the public
  // "{from}-vers-{to}" URL. This keeps "/corridor/{from}/{to}" as an internal implementation detail
  // used by middleware rewrites, and reduces duplicate URLs in Google Search Console.
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


