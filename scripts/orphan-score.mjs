#!/usr/bin/env node

/**
 * Orphan score (maillage interne) :
 * - Construit un set de pages "cibles" (routes importantes) à partir de :
 *   - app/sitemap.ts (pages statiques)
 *   - lib/cities.ts (villes)
 *   - lib/cityData.ts (quartiers)
 *   - lib/blog-canonique.ts (posts publiés)
 * - Scanne app/ + components/ pour trouver des liens (href) :
 *   - href="/..." (littéral)
 *   - href={`/...`} (template) avec expansion sur patterns connus
 * - Calcule le nombre de liens entrants (inlinks) par page cible.
 *
 * Usage:
 *   node scripts/orphan-score.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const EXCLUDED_CORRIDOR_SLUGS = new Set(["ile-de-france"]);

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function listFiles(dir, exts, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".next") continue;
      listFiles(full, exts, out);
    } else if (exts.some((ext) => e.name.endsWith(ext))) {
      out.push(full);
    }
  }
  return out;
}

function normalizeInternalPath(p) {
  if (!p || !p.startsWith("/")) return null;
  const clean = p.split("#")[0].split("?")[0];
  // Force trailing slash for consistency (site has trailingSlash: true)
  if (clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

function extractCitySlugsFromCitiesTs(tsContent) {
  const slugs = new Set();
  for (const m of tsContent.matchAll(/slug:\s*'([^']+)'/g)) slugs.add(m[1]);
  return slugs;
}

function extractStaticRoutesFromSitemapTs(tsContent) {
  // Extract strings inside the staticPages array literal in app/sitemap.ts
  // It contains: ["", "/comment-ca-marche", ...]
  const routes = new Set();
  const m = tsContent.match(/const\s+staticPages[\s\S]*?=\s*\[([\s\S]*?)\]\.map/s);
  if (!m) return routes;
  const arr = m[1];
  for (const sm of arr.matchAll(/["'](\/[^"']*|)["']/g)) {
    const route = sm[1];
    if (route === "") routes.add("/");
    else routes.add(normalizeInternalPath(route) ?? route);
  }
  return routes;
}

function extractNeighborhoodsFromCityDataTs(tsContent) {
  const cityToNeighborhoods = new Map();
  // Top-level keys in cityData.ts are indented by 2 spaces, e.g. "  marseille: {"
  // Avoid matching nested keys like "    coordinates: {"
  const reCityStart = /^\s{2}([a-z0-9-]+):\s*\{/gm;
  const starts = [];
  for (const m of tsContent.matchAll(reCityStart)) starts.push({ city: m[1], idx: m.index });
  starts.push({ city: "__END__", idx: tsContent.length });

  for (let i = 0; i < starts.length - 1; i++) {
    const { city, idx } = starts[i];
    const end = starts[i + 1].idx;
    const chunk = tsContent.slice(idx, end);
    const neighborhoods = new Set();
    const listMatch = chunk.match(/neighborhoods:\s*\[[\s\S]*?\]/);
    if (listMatch) {
      for (const sm of listMatch[0].matchAll(/slug:\s*'([^']+)'/g)) neighborhoods.add(sm[1]);
    }
    if (neighborhoods.size > 0) cityToNeighborhoods.set(city, neighborhoods);
  }
  return cityToNeighborhoods;
}

function extractCanonicalBlogSlugs(tsContent) {
  // Robust: only match objects that contain slug: "..." and body: `
  const slugs = new Set();
  const re = /\{\s*\n\s*slug:\s*"([^"]+)"[\s\S]*?\n\s*body:\s*`/g;
  for (const m of tsContent.matchAll(re)) slugs.add(m[1]);
  return slugs;
}

function extractLinksFromFile(content) {
  const literals = [];
  const templates = [];

  // href="/path"
  for (const m of content.matchAll(/href\s*=\s*["'](\/[^"']*)["']/g)) literals.push(m[1]);

  // href={`/path/${x}/`} or href={"/path"} variants
  for (const m of content.matchAll(/href\s*=\s*\{`([^`]+)`\}/g)) templates.push(m[1]);
  for (const m of content.matchAll(/href\s*=\s*\{["'](\/[^"']*)["']\}/g)) literals.push(m[1]);

  return { literals, templates };
}

function expandTemplate(tpl, { citySlugs, corridorCitySlugs, blogSlugs, cityToNeighborhoods }) {
  // Return array of internal paths (normalized) expanded from known templates, else [].
  const out = [];

  // /demenagement/${city.slug}/ or /demenagement/${citySlug}/
  if (/^\/demenagement\/\$\{[^}]+\}\/?$/.test(tpl)) {
    for (const slug of citySlugs) out.push(`/demenagement/${slug}/`);
    return out;
  }

  // /quartiers-${city.slug}/
  if (/^\/quartiers-\$\{[^}]+\}\/?$/.test(tpl)) {
    for (const slug of citySlugs) out.push(`/quartiers-${slug}/`);
    return out;
  }

  // /corridor/${city.slug}/
  if (/^\/corridor\/\$\{[^}]+\}\/?$/.test(tpl)) {
    for (const slug of corridorCitySlugs) out.push(`/corridor/${slug}/`);
    return out;
  }

  // /blog/${post.slug}/
  if (/^\/blog\/\$\{[^}]+\}\/?$/.test(tpl)) {
    for (const slug of blogSlugs) out.push(`/blog/${slug}/`);
    return out;
  }

  // /${from.slug}-vers-${to.slug}/
  if (/^\/\$\{[^}]+\}-vers-\$\{[^}]+\}\/?$/.test(tpl)) {
    const cities = Array.from(corridorCitySlugs);
    for (const from of cities) {
      for (const to of cities) {
        if (from === to) continue;
        out.push(`/${from}-vers-${to}/`);
      }
    }
    return out;
  }

  // /${citySlug}/${neighborhood.slug}/ or /${city.slug}/${neighborhood.slug}/
  if (/^\/\$\{[^}]+\}\/\$\{[^}]+\}\/?$/.test(tpl)) {
    // Try to expand with cityData neighborhoods
    for (const [city, neighborhoods] of cityToNeighborhoods.entries()) {
      for (const q of neighborhoods) out.push(`/${city}/${q}/`);
    }
    return out;
  }

  return out;
}

function main() {
  const citiesPath = path.join(ROOT, "lib", "cities.ts");
  const cityDataPath = path.join(ROOT, "lib", "cityData.ts");
  const sitemapPath = path.join(ROOT, "app", "sitemap.ts");
  const blogCanonPath = path.join(ROOT, "lib", "blog-canonique.ts");

  if (![citiesPath, cityDataPath, sitemapPath, blogCanonPath].every(exists)) {
    console.error("❌ Fichiers requis manquants (cities.ts, cityData.ts, sitemap.ts, blog-canonique.ts).");
    process.exit(1);
  }

  const CITY_SLUGS = extractCitySlugsFromCitiesTs(read(citiesPath));
  const CORRIDOR_CITY_SLUGS = new Set(Array.from(CITY_SLUGS).filter((s) => !EXCLUDED_CORRIDOR_SLUGS.has(s)));
  const CITY_TO_NEIGHBORHOODS = extractNeighborhoodsFromCityDataTs(read(cityDataPath));
  const BLOG_SLUGS = extractCanonicalBlogSlugs(read(blogCanonPath));
  const STATIC_ROUTES = extractStaticRoutesFromSitemapTs(read(sitemapPath));

  // Target pages set
  const targets = new Set();
  for (const r of STATIC_ROUTES) if (r) targets.add(r);

  // Cities
  for (const c of CITY_SLUGS) targets.add(`/demenagement/${c}/`);
  // Quartiers hubs
  for (const c of CITY_SLUGS) targets.add(`/quartiers-${c}/`);
  // Corridor hubs
  for (const c of CORRIDOR_CITY_SLUGS) targets.add(`/corridor/${c}/`);
  // Corridor pages
  for (const from of CORRIDOR_CITY_SLUGS) {
    for (const to of CORRIDOR_CITY_SLUGS) {
      if (from === to) continue;
      targets.add(`/${from}-vers-${to}/`);
    }
  }
  // Neighborhood pages from cityData
  for (const [city, qs] of CITY_TO_NEIGHBORHOODS.entries()) {
    // Only include neighborhoods for cities that actually have pages under app/{city}/...
    // (Some cities exist in cityData for legacy reasons but don't have routes in this repo.)
    const cityDir = path.join(ROOT, "app", city);
    if (!exists(cityDir)) continue;
    for (const q of qs) targets.add(`/${city}/${q}/`);
  }
  // Blog category hubs (explicit)
  ["/blog/prix-et-devis/", "/blog/checklists-et-guides/", "/blog/conseils-demenagement/", "/blog/demenagement-par-ville/"].forEach((p) =>
    targets.add(p)
  );
  // Blog posts (published)
  for (const slug of BLOG_SLUGS) targets.add(`/blog/${slug}/`);

  // Scan links
  const files = [
    ...listFiles(path.join(ROOT, "app"), [".ts", ".tsx"]),
    ...listFiles(path.join(ROOT, "components"), [".ts", ".tsx"]),
  ];

  const inlinks = new Map(); // target -> count
  const sources = new Map(); // target -> Set(file)

  function addEdge(filePath, href) {
    const norm = normalizeInternalPath(href);
    if (!norm) return;
    if (!targets.has(norm)) return;
    inlinks.set(norm, (inlinks.get(norm) || 0) + 1);
    const rel = path.relative(ROOT, filePath);
    if (!sources.has(norm)) sources.set(norm, new Set());
    sources.get(norm).add(rel);
  }

  for (const filePath of files) {
    const content = read(filePath);
    const { literals, templates } = extractLinksFromFile(content);
    for (const href of literals) addEdge(filePath, href);
    for (const tpl of templates) {
      const expanded = expandTemplate(tpl, {
        citySlugs: CITY_SLUGS,
        corridorCitySlugs: CORRIDOR_CITY_SLUGS,
        blogSlugs: BLOG_SLUGS,
        cityToNeighborhoods: CITY_TO_NEIGHBORHOODS,
      });
      for (const href of expanded) addEdge(filePath, href);
    }
  }

  const rows = Array.from(targets).map((t) => ({
    path: t,
    inlinks: inlinks.get(t) || 0,
    sourcesCount: sources.get(t)?.size || 0,
  }));

  rows.sort((a, b) => a.inlinks - b.inlinks || a.path.localeCompare(b.path));

  const top = rows.slice(0, 30);
  console.log("📌 Top pages (faible maillage) — inlinks croissant:\n");
  for (const r of top) {
    console.log(`- ${r.path}  inlinks=${r.inlinks}  sources=${r.sourcesCount}`);
  }

  const orphans = rows.filter((r) => r.inlinks === 0);
  console.log(`\n🧭 Orphans (inlinks=0): ${orphans.length} / ${rows.length}`);

  // Write CSV for analysis
  const outPath = path.join(ROOT, "redirects", "orphan-score.csv");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const csv = ["path,inlinks,sourcesCount"]
    .concat(rows.map((r) => `${r.path},${r.inlinks},${r.sourcesCount}`))
    .join("\n");
  fs.writeFileSync(outPath, csv, "utf8");
  console.log(`\n✅ CSV écrit: ${path.relative(ROOT, outPath)}`);
}

main();


