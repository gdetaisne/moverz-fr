import { env } from "@/lib/env";
import { cityData } from "@/lib/cityData";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

export function GET() {
  const baseUrl = env.SITE_URL;

  // Collecter toutes les URLs de corridors depuis cityData
  const urls = Object.values(cityData).flatMap((city) =>
    city.corridors.map((corridor) => ({
      loc: absoluteUrl(baseUrl, `/${corridor.slug}`),
      changefreq: "monthly" as const,
      priority: 0.6,
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

