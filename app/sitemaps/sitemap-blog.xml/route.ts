import { env } from "@/lib/env";
import { PUBLISHED_BLOG_POSTS, getCanonicalBodyBySlug } from "@/lib/blog";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

/**
 * SEO (2026-02-16): exclude thin articles (<500 words) from sitemap.
 * These articles are also noindex'd in app/blog/[slug]/page.tsx.
 *
 * Before: 1 153 posts in sitemap
 * After:  ~746 posts (>= 500 words only)
 */
const THIN_CONTENT_THRESHOLD = 500;

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

export function GET() {
  const baseUrl = env.SITE_URL;

  const qualityPosts = PUBLISHED_BLOG_POSTS.filter((post) => {
    if (!post || !post.slug) return false;
    const body = getCanonicalBodyBySlug(post.slug);
    const wordCount = body ? body.split(/\s+/).length : 0;
    return wordCount >= THIN_CONTENT_THRESHOLD;
  });

  const urls = [
    {
      loc: absoluteUrl(baseUrl, "/blog"),
      changefreq: "weekly" as const,
      priority: 0.8,
    },
    ...qualityPosts.map((post) => ({
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


