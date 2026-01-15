import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const BASE_URL = "https://moverz.fr";

function slugifyCityName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, " et ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function withTrailingSlash(p) {
  if (p === "/") return "/";
  return p.endsWith("/") ? p : `${p}/`;
}

function abs(p) {
  const pathname = p.startsWith("/") ? p : `/${p}`;
  return `${BASE_URL}${withTrailingSlash(pathname)}`;
}

function readText(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function parseExtraCities(tsText) {
  const re = /\{\s*nameCapitalized:\s*"([^"]+)"\s*,\s*region:\s*"([^"]+)"\s*\}/g;
  const out = [];
  let m;
  while ((m = re.exec(tsText))) out.push({ nameCapitalized: m[1], region: m[2] });
  return out;
}

function parseCoreSlugs(tsText) {
  const re = /slug:\s*'([^']+)'/g;
  const coreStart = tsText.indexOf("const CORE_CITIES");
  if (coreStart === -1) return [];
  const slice = tsText.slice(coreStart, tsText.indexOf("];", coreStart) + 2);
  const out = [];
  let m;
  while ((m = re.exec(slice))) out.push(m[1]);
  return out;
}

function buildCitySlugs() {
  const citiesText = readText("lib/cities.ts");
  const extraText = readText("lib/cities-extra.ts");

  const core = parseCoreSlugs(citiesText);
  const extras = parseExtraCities(extraText).map((c) => slugifyCityName(c.nameCapitalized));

  const set = new Set([...core, ...extras]);
  return Array.from(set).sort();
}

const SERVICE_SLUGS = [
  "pas-cher",
  "garde-meuble",
  "location-camion",
  "petit-demenagement",
  "aide-demenagement",
  "entreprise",
  "piano",
  "international",
];

function cityTitle(cityCap) {
  return `Déménagement ${cityCap} : 3 à 5 devis en 3 min | Moverz`;
}
function cityMeta(cityCap) {
  return `3 min · IA fiabilise le volume · 3 à 5 devis comparables · Déménageurs contrôlés à ${cityCap} · 0€ · Sans démarchage.`;
}
function serviceTitle(service, cityCap) {
  return `${service} ${cityCap}`; // placeholder for audit (we only need duplicate detection)
}
function serviceMeta(service, cityCap) {
  return `${service} à ${cityCap} : 3 à 5 devis comparables.`;
}

function csvEscape(v) {
  const s = String(v ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function normalizeForDup(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[0-9]+/g, "#")
    .trim();
}

function main() {
  const citySlugs = buildCitySlugs();
  const rows = [];

  // Pages (money/hubs)
  const pages = [
    { path: "/", type: "page", title: "Moverz | Devis déménagement", meta: "" },
    { path: "/villes", type: "hub", title: "Déménagement partout en France | Moverz", meta: "" },
    { path: "/comment-ca-marche", type: "page", title: "Comment ça marche | Moverz", meta: "" },
    { path: "/corridor", type: "hub", title: "Corridors déménagement | Moverz", meta: "" },
    { path: "/blog", type: "hub", title: "Blog déménagement | Moverz", meta: "" },
  ];
  for (const p of pages) {
    rows.push({
      loc: abs(p.path),
      type: p.type,
      title: p.title,
      meta: p.meta,
      h1: "",
      canonical: abs(p.path),
      status: "",
      lastmod: "",
    });
  }

  // Cities
  for (const slug of citySlugs) {
    const cap = slug
      .split("-")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");

    const path = `/demenagement/${slug}`;
    rows.push({
      loc: abs(path),
      type: "city",
      title: cityTitle(cap),
      meta: cityMeta(cap),
      h1: `Déménagement ${cap}`,
      canonical: abs(path),
      status: "",
      lastmod: "",
    });

    for (const service of SERVICE_SLUGS) {
      const sp = `/demenagement/${slug}/${service}`;
      rows.push({
        loc: abs(sp),
        type: "service",
        title: serviceTitle(service, cap),
        meta: serviceMeta(service, cap),
        h1: "",
        canonical: abs(sp),
        status: "",
        lastmod: "",
      });
    }
  }

  // Checks
  const byLoc = new Map();
  const locDups = [];
  for (const r of rows) {
    const key = r.loc;
    if (byLoc.has(key)) locDups.push(key);
    byLoc.set(key, true);
  }

  const badTrailing = rows.filter((r) => !r.loc.endsWith("/"));
  const emptyTitles = rows.filter((r) => !r.title || !String(r.title).trim());
  const emptyMetas = rows.filter((r) => !r.meta || !String(r.meta).trim());

  const titleCounts = new Map();
  const metaCounts = new Map();
  for (const r of rows) {
    const t = normalizeForDup(r.title);
    const m = normalizeForDup(r.meta);
    titleCounts.set(t, (titleCounts.get(t) || 0) + 1);
    metaCounts.set(m, (metaCounts.get(m) || 0) + 1);
  }
  const titleDupKeys = Array.from(titleCounts.entries()).filter(([, c]) => c > 1).length;
  const metaDupKeys = Array.from(metaCounts.entries()).filter(([, c]) => c > 1).length;

  // Output report (stderr so CSV stays clean)
  console.error("=== SEO inventory (offline) ===");
  console.error(`URLs: ${rows.length}`);
  console.error(`Duplicate loc: ${locDups.length}`);
  console.error(`Bad trailing slash: ${badTrailing.length}`);
  console.error(`Empty titles: ${emptyTitles.length}`);
  console.error(`Empty metas: ${emptyMetas.length}`);
  console.error(`Exact/normalized duplicate title groups: ${titleDupKeys}`);
  console.error(`Exact/normalized duplicate meta groups: ${metaDupKeys}`);

  // CSV
  const header = ["loc", "type", "title", "meta", "h1", "canonical", "status", "lastmod"];
  console.log(header.join(","));
  for (const r of rows) {
    console.log(
      header
        .map((k) => csvEscape(r[k]))
        .join(",")
    );
  }
}

main();


