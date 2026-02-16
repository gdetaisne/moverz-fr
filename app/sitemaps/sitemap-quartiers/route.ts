import { env } from "@/lib/env";
import { cityData } from "@/lib/cityData";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

export function GET() {
  const baseUrl = env.SITE_URL;

  const now = new Date().toISOString();

  // Collecter toutes les URLs de quartiers depuis cityData
  const urls = Object.values(cityData).flatMap((city) =>
    city.neighborhoods.map((neighborhood) => ({
      loc: absoluteUrl(baseUrl, `/${city.slug}/${neighborhood.slug}`),
      lastmod: now,
      changefreq: "monthly" as const,
      priority: 0.5,
    })),
  );

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

