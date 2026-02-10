import { buildSitemapIndex, absoluteUrl } from "@/lib/seo/sitemap-xml";
import { env } from "@/lib/env";

export const runtime = "nodejs";

export function GET() {
  const baseUrl = env.SITE_URL;

  const xml = buildSitemapIndex([
    { loc: absoluteUrl(baseUrl, "/sitemaps/sitemap-pages.xml") },
    { loc: absoluteUrl(baseUrl, "/sitemaps/sitemap-cities.xml") },
    { loc: absoluteUrl(baseUrl, "/sitemaps/sitemap-services.xml") },
    { loc: absoluteUrl(baseUrl, "/sitemaps/sitemap-blog.xml") },
    { loc: absoluteUrl(baseUrl, "/sitemaps/sitemap-corridors.xml") },
    { loc: absoluteUrl(baseUrl, "/sitemaps/sitemap-quartiers.xml") },
  ]);

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


