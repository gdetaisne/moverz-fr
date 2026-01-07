function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/$/, "");
}

export function withTrailingSlash(pathname: string): string {
  if (!pathname) return "/";
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return p.endsWith("/") ? p : `${p}/`;
}

export function absoluteUrl(baseUrl: string, pathname: string): string {
  const base = normalizeBaseUrl(baseUrl);
  return `${base}${withTrailingSlash(pathname)}`;
}

export type UrlEntry = {
  loc: string; // absolute
  lastmod?: string; // ISO date or dateTime
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export function buildUrlset(urls: UrlEntry[]): string {
  const body = urls
    .map((u) => {
      const parts = [
        `<loc>${escapeXml(u.loc)}</loc>`,
        u.lastmod ? `<lastmod>${escapeXml(u.lastmod)}</lastmod>` : "",
        u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : "",
        typeof u.priority === "number" ? `<priority>${u.priority.toFixed(1)}</priority>` : "",
      ]
        .filter(Boolean)
        .join("");
      return `<url>${parts}</url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;
}

export type SitemapIndexEntry = {
  loc: string; // absolute
  lastmod?: string; // ISO
};

export function buildSitemapIndex(sitemaps: SitemapIndexEntry[]): string {
  const body = sitemaps
    .map((s) => {
      const parts = [
        `<loc>${escapeXml(s.loc)}</loc>`,
        s.lastmod ? `<lastmod>${escapeXml(s.lastmod)}</lastmod>` : "",
      ]
        .filter(Boolean)
        .join("");
      return `<sitemap>${parts}</sitemap>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`;
}


