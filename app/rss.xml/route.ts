import { env } from "@/lib/env";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822Date(value?: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toUTCString();
}

export function GET() {
  const baseUrl = env.SITE_URL;
  const siteTitle = "Moverz — Blog";
  const siteLink = absoluteUrl(baseUrl, "/blog");
  const siteDescription = "Guides et ressources Moverz (particuliers + déménageurs).";

  const items = PUBLISHED_BLOG_POSTS.filter((post) => post && post.slug && post.title)
    .slice(0, 50)
    .map((post) => {
      const link = absoluteUrl(baseUrl, `/blog/${post.slug}`);
      const pubDate = toRfc822Date(post.updatedAt) || toRfc822Date(post.publishedAt);
      return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${escapeXml(link)}</link>
        <guid isPermaLink="true">${escapeXml(link)}</guid>
        ${pubDate ? `<pubDate>${escapeXml(pubDate)}</pubDate>` : ""}
        <description>${escapeXml(post.description || "")}</description>
      </item>
    `.trim();
    });

  const lastBuildDate = toRfc822Date(new Date().toISOString()) ?? new Date().toUTCString();

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<rss version="2.0">` +
    `<channel>` +
    `<title>${escapeXml(siteTitle)}</title>` +
    `<link>${escapeXml(siteLink)}</link>` +
    `<description>${escapeXml(siteDescription)}</description>` +
    `<lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>` +
    items.join("") +
    `</channel>` +
    `</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

