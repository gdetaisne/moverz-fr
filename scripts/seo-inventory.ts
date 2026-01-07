import { CITIES } from "@/lib/cities";
import { SERVICE_SLUGS, SERVICE_DEFINITIONS, type ServiceSlug } from "@/lib/service-pages";
import { getCityPageMetadata, getCityServiceMetadata } from "@/lib/seo/metadata";
import { getCanonicalUrl } from "@/lib/canonical-helper";

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
    rows.push({
      loc: getCanonicalUrl(h.path),
      type: h.type,
      title: "",
      meta: "",
      h1: h.h1,
      canonical: getCanonicalUrl(h.path),
      status: "",
      lastmod: "",
    });
  }

  // Cities + services
  for (const city of CITIES) {
    const cityMeta = getCityPageMetadata(city);
    rows.push({
      loc: getCanonicalUrl(`demenagement/${city.slug}`),
      type: "city",
      title: String(cityMeta.title ?? ""),
      meta: String(cityMeta.description ?? ""),
      h1: `Déménagement ${city.nameCapitalized}`,
      canonical: String(cityMeta.alternates?.canonical ?? getCanonicalUrl(`demenagement/${city.slug}`)),
      status: "",
      lastmod: "",
    });

    for (const service of SERVICE_SLUGS) {
      const serviceMeta = getCityServiceMetadata({ city, service: service as ServiceSlug });
      const h1 = SERVICE_DEFINITIONS[service].h1(city.nameCapitalized);
      rows.push({
        loc: getCanonicalUrl(`demenagement/${city.slug}/${service}`),
        type: "service",
        title: String(serviceMeta.title ?? ""),
        meta: String(serviceMeta.description ?? ""),
        h1,
        canonical: String(
          serviceMeta.alternates?.canonical ?? getCanonicalUrl(`demenagement/${city.slug}/${service}`)
        ),
        status: "",
        lastmod: "",
      });
    }
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


