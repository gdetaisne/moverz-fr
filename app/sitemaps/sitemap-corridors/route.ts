import { env } from "@/lib/env";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

/**
 * SEO (2026-02-16): only include corridors with hardcoded unique content
 * (app/{from}-vers-{to}/page.tsx). Dynamic template corridors are noindex'd.
 *
 * Before: 55 corridors from cityData (21 template + 34 hardcoded)
 * After:  34 hardcoded corridors only
 */
const HARDCODED_CORRIDORS = [
  // Only corridors with their own app/{from}-vers-{to}/page.tsx (unique content)
  // bordeaux, lille, lyon, marseille corridors excluded — no hardcoded pages
  "montpellier-vers-lyon", "montpellier-vers-marseille",
  "montpellier-vers-paris", "montpellier-vers-toulouse",
  "nantes-vers-bordeaux", "nantes-vers-la-baule", "nantes-vers-lyon",
  "nantes-vers-paris", "nantes-vers-rennes",
  "nice-vers-italie", "nice-vers-lyon", "nice-vers-marseille",
  "nice-vers-monaco", "nice-vers-paris",
  "rennes-vers-angers", "rennes-vers-brest", "rennes-vers-nantes",
  "rennes-vers-paris", "rennes-vers-saint-malo",
  "rouen-vers-amiens", "rouen-vers-caen", "rouen-vers-le-havre",
  "rouen-vers-lille", "rouen-vers-paris",
  "strasbourg-vers-allemagne", "strasbourg-vers-lyon",
  "strasbourg-vers-mulhouse", "strasbourg-vers-paris", "strasbourg-vers-suisse",
  "toulouse-vers-espagne", "toulouse-vers-lyon", "toulouse-vers-marseille",
  "toulouse-vers-nantes", "toulouse-vers-paris",
];

export function GET() {
  const baseUrl = env.SITE_URL;

  const urls = HARDCODED_CORRIDORS.map((slug) => ({
    loc: absoluteUrl(baseUrl, `/${slug}`),
    changefreq: "monthly" as const,
    priority: 0.6,
  }));

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

