import { buildInventoryRows } from "./seo-inventory";
import { CITIES } from "@/lib/cities";
import { getCityPageMetadata } from "@/lib/seo/metadata";
import { getCanonicalUrl } from "@/lib/canonical-helper";

import { GET as getSitemapIndex } from "@/app/sitemap.xml/route";
import { GET as getSitemapCities } from "@/app/sitemaps/sitemap-cities.xml/route";
import { GET as getSitemapServices } from "@/app/sitemaps/sitemap-services.xml/route";
import { GET as getSitemapPages } from "@/app/sitemaps/sitemap-pages.xml/route";
import { GET as getSitemapBlog } from "@/app/sitemaps/sitemap-blog.xml/route";

type Fail = { code: string; message: string; sample?: string };

function extractLocs(xml: string): string[] {
  const out: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) out.push(m[1]);
  return out;
}

async function responseText(r: Response): Promise<string> {
  const t = await r.text();
  return t;
}

function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

function normalizeForDup(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[0-9]+/g, "#")
    .trim();
}

export async function runSeoHealthcheck(opts?: { crawlBaseUrl?: string }) {
  const fails: Fail[] = [];

  // 1) Sitemaps: no params, trailing slash, and only our canonical convention
  const [indexXml, citiesXml, servicesXml, pagesXml, blogXml] = await Promise.all([
    responseText(getSitemapIndex()),
    responseText(getSitemapCities()),
    responseText(getSitemapServices()),
    responseText(getSitemapPages()),
    responseText(getSitemapBlog()),
  ]);

  const indexLocs = extractLocs(indexXml);
  const sitemapLocs = uniq([...extractLocs(citiesXml), ...extractLocs(servicesXml), ...extractLocs(pagesXml), ...extractLocs(blogXml)]);

  const hasQuery = sitemapLocs.find((u) => u.includes("?"));
  if (hasQuery) fails.push({ code: "sitemap.query", message: "Sitemap contains URL with query params", sample: hasQuery });

  const noTrailing = sitemapLocs.find((u) => !u.endsWith("/"));
  if (noTrailing) fails.push({ code: "sitemap.trailing", message: "Sitemap contains URL without trailing slash", sample: noTrailing });

  const baseUrl = getCanonicalUrl("").replace(/\/$/, "");
  const wrongBase = sitemapLocs.find((u) => !u.startsWith(`${baseUrl}/`));
  if (wrongBase) fails.push({ code: "sitemap.base", message: "Sitemap contains URL with unexpected base", sample: wrongBase });

  // Index includes the 4 expected children
  const expectedChildren = [
    getCanonicalUrl("sitemaps/sitemap-pages.xml"),
    getCanonicalUrl("sitemaps/sitemap-cities.xml"),
    getCanonicalUrl("sitemaps/sitemap-services.xml"),
    getCanonicalUrl("sitemaps/sitemap-blog.xml"),
  ];
  for (const e of expectedChildren) {
    if (!indexLocs.includes(e)) fails.push({ code: "sitemap.index.missing", message: "Sitemap index missing child sitemap", sample: e });
  }

  // 2) Metadata: non-empty title/description + uniqueness (Top 100 cities)
  const top100 = CITIES.slice(0, 100);
  const titles = top100.map((c) => String(getCityPageMetadata(c).title ?? ""));
  const metas = top100.map((c) => String(getCityPageMetadata(c).description ?? ""));

  const emptyTitle = titles.find((t) => !t || !t.trim());
  if (emptyTitle !== undefined) fails.push({ code: "meta.title.empty", message: "Empty title detected on Top 100 cities" });

  const emptyMeta = metas.find((m) => !m || !m.trim());
  if (emptyMeta !== undefined) fails.push({ code: "meta.description.empty", message: "Empty description detected on Top 100 cities" });

  const normTitleCounts = new Map<string, number>();
  for (const t of titles) normTitleCounts.set(normalizeForDup(t), (normTitleCounts.get(normalizeForDup(t)) || 0) + 1);
  const dupTitle = Array.from(normTitleCounts.entries()).find(([, c]) => c > 1);
  if (dupTitle) fails.push({ code: "meta.title.duplicate", message: "Duplicate city titles detected (normalized) in Top 100", sample: dupTitle[0] });

  // Canonical coherent with convention
  const canonicalMismatch = top100
    .map((c) => {
      const m = getCityPageMetadata(c);
      return { slug: c.slug, canonical: String(m.alternates?.canonical ?? ""), expected: getCanonicalUrl(`demenagement/${c.slug}`) };
    })
    .find((x) => x.canonical !== x.expected);
  if (canonicalMismatch) {
    fails.push({
      code: "meta.canonical.mismatch",
      message: "Canonical mismatch on city page metadata",
      sample: `${canonicalMismatch.slug}: ${canonicalMismatch.canonical} !== ${canonicalMismatch.expected}`,
    });
  }

  // 3) Inventory: basic sanity (no empty titles/metas for cities/services, no duplicates loc)
  const rows = buildInventoryRows();
  const locs = rows.map((r) => r.loc);
  const dupLoc = locs.find((u, i) => locs.indexOf(u) !== i);
  if (dupLoc) fails.push({ code: "inventory.dup.loc", message: "Duplicate loc in inventory", sample: dupLoc });

  const badLoc = rows.find((r) => r.loc.includes("?") || !r.loc.endsWith("/"));
  if (badLoc) fails.push({ code: "inventory.loc.bad", message: "Bad loc in inventory (query or missing trailing slash)", sample: badLoc.loc });

  const emptyCityOrServiceTitle = rows.find((r) => (r.type === "city" || r.type === "service") && (!r.title || !r.title.trim()));
  if (emptyCityOrServiceTitle) fails.push({ code: "inventory.title.empty", message: "Empty title in city/service inventory", sample: emptyCityOrServiceTitle.loc });

  const emptyCityOrServiceMeta = rows.find((r) => (r.type === "city" || r.type === "service") && (!r.meta || !r.meta.trim()));
  if (emptyCityOrServiceMeta) fails.push({ code: "inventory.meta.empty", message: "Empty meta in city/service inventory", sample: emptyCityOrServiceMeta.loc });

  // 4) Optional crawl checks (requires a running server / staging)
  if (opts?.crawlBaseUrl) {
    const base = opts.crawlBaseUrl.replace(/\/$/, "");
    const sampleUrls = [
      `${base}/villes/`,
      `${base}/demenagement/${CITIES[0]?.slug || "lyon"}/`,
      `${base}/demenagement/${CITIES[0]?.slug || "lyon"}/pas-cher/`,
    ];

    for (const url of sampleUrls) {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status >= 300 && res.status < 400) {
        fails.push({ code: "crawl.redirect", message: "Sample URL redirects (should be 200)", sample: `${url} -> ${res.status}` });
        continue;
      }
      if (res.status !== 200) {
        fails.push({ code: "crawl.status", message: "Sample URL not 200", sample: `${url} -> ${res.status}` });
        continue;
      }
      const html = await res.text();
      if (/noindex/i.test(html)) fails.push({ code: "crawl.noindex", message: "Sample page contains noindex", sample: url });
      if (!/rel="canonical"/i.test(html)) fails.push({ code: "crawl.canonical.missing", message: "Canonical link missing in HTML", sample: url });
      if (url.includes("/demenagement/") && !/Villes proches de/i.test(html)) {
        fails.push({ code: "crawl.internal-linking.missing", message: "City page missing 'Villes proches' block (HTML)", sample: url });
      }
    }
  }

  return { ok: fails.length === 0, fails };
}

function parseArgs(argv: string[]) {
  const crawlIdx = argv.indexOf("--crawl");
  if (crawlIdx !== -1) {
    const maybe = argv[crawlIdx + 1];
    return { crawlBaseUrl: maybe && !maybe.startsWith("--") ? maybe : "http://localhost:3040" };
  }
  return {};
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = parseArgs(process.argv.slice(2));
  runSeoHealthcheck(args)
    .then(({ ok, fails }) => {
      if (ok) {
        console.log("✅ SEO healthcheck OK");
        process.exit(0);
      }
      console.error("❌ SEO healthcheck FAILED");
      for (const f of fails) {
        console.error(`- [${f.code}] ${f.message}${f.sample ? ` — ${f.sample}` : ""}`);
      }
      process.exit(1);
    })
    .catch((err) => {
      console.error("❌ SEO healthcheck crashed:", err);
      process.exit(2);
    });
}


