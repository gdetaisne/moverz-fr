import { env } from "@/lib/env";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

export function GET() {
  const baseUrl = env.SITE_URL;

  const urls = [
    {
      loc: absoluteUrl(baseUrl, "/blog"),
      changefreq: "weekly" as const,
      priority: 0.8,
    },
    ...PUBLISHED_BLOG_POSTS.map((post) => ({
      loc: absoluteUrl(baseUrl, `/blog/${post.slug}`),
      lastmod: toIsoDate(post.updatedAt) || toIsoDate(post.publishedAt),
      changefreq: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


