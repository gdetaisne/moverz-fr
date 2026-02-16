import { env } from "@/lib/env";
import { CITIES } from "@/lib/cities";
import { SERVICE_SLUGS } from "@/lib/service-pages";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

/**
 * SEO (2026-02-16): only include cities with hardcoded unique content.
 * Dynamic template pages (/demenagement/[slug]/[service]) are noindex'd
 * and excluded from sitemap to avoid crawl budget waste on 2 300+ thin pages.
 *
 * Before: 301 cities × 8 services = 2 408 URLs
 * After:  11 cities × 8 services  = 88 URLs
 */
const CORE_SERVICE_CITIES = new Set([
  "bordeaux", "lille", "lyon", "marseille", "montpellier",
  "nantes", "nice", "rennes", "rouen", "strasbourg", "toulouse",
]);

export function GET() {
  const baseUrl = env.SITE_URL;

  const urls = CITIES
    .filter((city) => CORE_SERVICE_CITIES.has(city.slug))
    .flatMap((city) =>
      SERVICE_SLUGS.map((service) => ({
        loc: absoluteUrl(baseUrl, `/demenagement/${city.slug}/${service}`),
        changefreq: "monthly" as const,
        priority: 0.7,
      }))
    );

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


