import { env } from "@/lib/env";
import { CITIES } from "@/lib/cities";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

export function GET() {
  const baseUrl = env.SITE_URL;

  const urls = CITIES.map((city) => ({
    loc: absoluteUrl(baseUrl, `/demenagement/${city.slug}`),
    changefreq: "weekly" as const,
    priority: 0.9,
  }));

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


