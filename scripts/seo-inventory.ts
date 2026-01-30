import { CITIES } from "@/lib/cities";
import { SERVICE_SLUGS, SERVICE_DEFINITIONS, type ServiceSlug } from "@/lib/service-pages";
import { getCityPageMetadata, getCityServiceMetadata } from "@/lib/seo/metadata";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import { PUBLISHED_BLOG_POSTS, type BlogPostMeta } from "@/lib/blog";

export type InventoryRow = {
  loc: string;
  type: "page" | "hub" | "city" | "service" | "blog";
  title: string;
  meta: string;
  h1: string;
  canonical: string;
  status: string;
  lastmod: string;
};

function csvEscape(v: string): string {
  const s = String(v ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function buildStatusFlags(row: Pick<InventoryRow, "type" | "loc" | "canonical" | "title" | "meta">): string {
  const flags: string[] = [];
  const title = String(row.title || "");
  const meta = String(row.meta || "");

  // For hubs/pages, empty title/meta often means "inherits app/layout.tsx metadata" in Next.js.
  // We mark it explicitly to avoid false positives in the inventory.
  if ((row.type === "page" || row.type === "hub") && (!title.trim() || !meta.trim())) {
    flags.push("inherits_layout_metadata");
  } else {
    if (!title.trim()) flags.push("empty_title");
    if (!meta.trim()) flags.push("empty_meta");
  }
  if (!String(row.loc || "").endsWith("/")) flags.push("loc_no_trailing_slash");
  if (row.canonical && row.loc && row.canonical !== row.loc) flags.push("canonical_mismatch");

  // Anti-regression: avoid double brand suffix like "... | Moverz | Moverz"
  if (/\|\s*moverz\s*\|\s*moverz\s*$/i.test(title)) flags.push("double_brand");

  // Anti-fausse promesse: avoid "48h" in metas (client engagement is 5–7 jours).
  if (/(^|[^0-9])48\s*h([^a-z]|$)/i.test(meta)) flags.push("meta_mentions_48h");

  return flags.join(";");
}

function getBlogTitle(post: BlogPostMeta): string {
  return post.category === "pro" ? `${post.title} | Blog déménageurs` : `${post.title} | Blog déménagement`;
}

export function buildInventoryRows(): InventoryRow[] {
  const rows: InventoryRow[] = [];

  // Pages / hubs (core discovery)
  const hubs: Array<{ path: string; type: "page" | "hub"; h1: string }> = [
    { path: "", type: "page", h1: "Moverz" },
    { path: "villes", type: "hub", h1: "Déménagement partout en France" },
    { path: "villes/page/1", type: "hub", h1: "Toutes les villes" },
    { path: "comment-ca-marche", type: "page", h1: "Comment ça marche" },
    { path: "corridor", type: "hub", h1: "Corridors" },
    { path: "faq", type: "page", h1: "FAQ" },
    { path: "blog", type: "hub", h1: "Blog déménagement" },
  ];

  for (const h of hubs) {
    const loc = getCanonicalUrl(h.path);
    rows.push({
      loc,
      type: h.type,
      title: "",
      meta: "",
      h1: h.h1,
      canonical: loc,
      status: buildStatusFlags({
        type: h.type,
        loc,
        canonical: loc,
        title: "",
        meta: "",
      }),
      lastmod: "",
    });
  }

  // Cities + services
  for (const city of CITIES) {
    const cityMeta = getCityPageMetadata(city);
    const cityLoc = getCanonicalUrl(`demenagement/${city.slug}`);
    rows.push({
      loc: cityLoc,
      type: "city",
      title: String(cityMeta.title ?? ""),
      meta: String(cityMeta.description ?? ""),
      h1: `Déménagement ${city.nameCapitalized}`,
      canonical: String(cityMeta.alternates?.canonical ?? cityLoc),
      status: buildStatusFlags({
        type: "city",
        loc: cityLoc,
        canonical: String(cityMeta.alternates?.canonical ?? cityLoc),
        title: String(cityMeta.title ?? ""),
        meta: String(cityMeta.description ?? ""),
      }),
      lastmod: "",
    });

    for (const service of SERVICE_SLUGS) {
      const serviceMeta = getCityServiceMetadata({ city, service: service as ServiceSlug });
      const h1 = SERVICE_DEFINITIONS[service].h1(city.nameCapitalized);
      const serviceLoc = getCanonicalUrl(`demenagement/${city.slug}/${service}`);
      const serviceCanonical = String(serviceMeta.alternates?.canonical ?? serviceLoc);
      rows.push({
        loc: serviceLoc,
        type: "service",
        title: String(serviceMeta.title ?? ""),
        meta: String(serviceMeta.description ?? ""),
        h1,
        canonical: serviceCanonical,
        status: buildStatusFlags({
          type: "service",
          loc: serviceLoc,
          canonical: serviceCanonical,
          title: String(serviceMeta.title ?? ""),
          meta: String(serviceMeta.description ?? ""),
        }),
        lastmod: "",
      });
    }
  }

  // Blog posts (published only)
  for (const post of PUBLISHED_BLOG_POSTS) {
    const path = `blog/${post.slug}`;
    const loc = getCanonicalUrl(path);
    const title = getBlogTitle(post);
    const meta = post.description;
    const canonical = loc;
    rows.push({
      loc,
      type: "blog",
      title,
      meta,
      h1: post.title,
      canonical,
      status: buildStatusFlags({ type: "blog", loc, canonical, title, meta }),
      lastmod: post.updatedAt || post.publishedAt || "",
    });
  }

  return rows;
}

export function rowsToCsv(rows: InventoryRow[]): string {
  const header = ["loc", "type", "title", "meta", "h1", "canonical", "status", "lastmod"] as const;
  const lines: string[] = [header.join(",")];
  for (const r of rows) {
    lines.push(
      header
        .map((k) => csvEscape(String(r[k] ?? "")))
        .join(",")
    );
  }
  return lines.join("\n");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const rows = buildInventoryRows();
  process.stdout.write(rowsToCsv(rows));
}


