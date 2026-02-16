import { env } from "@/lib/env";
import { CITIES } from "@/lib/cities";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

export function GET() {
  const baseUrl = env.SITE_URL;

  // SEO (2026-02-16): only include core cities in sitemap.
  // Non-core city + guide pages are noindexed (template thin content).
  const CORE_CITY_SLUGS = new Set([
    "bordeaux", "lille", "lyon", "marseille", "montpellier", "nantes",
    "nice", "paris", "rennes", "rouen", "strasbourg", "toulouse",
  ]);

  const urls = CITIES.filter(c => CORE_CITY_SLUGS.has(c.slug)).flatMap((city) => {
    const cityUrl = {
      loc: absoluteUrl(baseUrl, `/demenagement/${city.slug}`),
      changefreq: "weekly" as const,
      priority: 0.9,
    };

    const guideUrl = {
      loc: absoluteUrl(baseUrl, `/demenagement/${city.slug}/guide`),
      changefreq: "monthly" as const,
      priority: 0.7,
    };

    return [cityUrl, guideUrl];
  });

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


