#!/usr/bin/env node

/**
 * Audit rapide des liens internes (statique) :
 * - href="/demenagement/{slug}/" => slug doit exister dans lib/cities.ts
 * - href="/quartiers-{slug}/"    => slug doit exister dans lib/cities.ts
 * - href="/{from}-vers-{to}/"    => from/to doivent exister dans lib/cities.ts (hors ile-de-france pour corridors)
 * - href="/{city}/{quartier}/"   => city/quartier doivent exister dans lib/cityData.ts (quand possible)
 *
 * NOTE: On scanne uniquement les href littéraux (href="/...") dans app/ et components/.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, "..");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function listFiles(dir, exts, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip huge dirs
      if (e.name === "node_modules" || e.name === ".next") continue;
      listFiles(full, exts, out);
    } else {
      if (exts.some((ext) => e.name.endsWith(ext))) out.push(full);
    }
  }
  return out;
}

function extractCitySlugsFromCitiesTs(tsContent) {
  const slugs = new Set();
  for (const m of tsContent.matchAll(/slug:\s*'([^']+)'/g)) {
    slugs.add(m[1]);
  }
  return slugs;
}

function extractCityNeighborhoodsFromCityDataTs(tsContent) {
  // Parse keys + neighborhoods list of { slug: '...', name: '...' }
  const cityToNeighborhoods = new Map();

  // Roughly split by top-level "  city: {"
  const reCityStart = /^\s*([a-z0-9-]+):\s*\{/gm;
  const starts = [];
  for (const m of tsContent.matchAll(reCityStart)) {
    starts.push({ city: m[1], idx: m.index });
  }
  // Add end sentinel
  starts.push({ city: "__END__", idx: tsContent.length });

  for (let i = 0; i < starts.length - 1; i++) {
    const { city, idx } = starts[i];
    const end = starts[i + 1].idx;
    const chunk = tsContent.slice(idx, end);
    const neighborhoods = new Set();
    for (const n of chunk.matchAll(/neighborhoods:\s*\[[\s\S]*?\]/g)) {
      const listChunk = n[0];
      for (const sm of listChunk.matchAll(/slug:\s*'([^']+)'/g)) {
        neighborhoods.add(sm[1]);
      }
    }
    if (neighborhoods.size > 0) cityToNeighborhoods.set(city, neighborhoods);
  }

  return cityToNeighborhoods;
}

function extractLiteralHrefs(fileContent) {
  const hrefs = [];
  for (const m of fileContent.matchAll(/href\s*=\s*["'](\/[^"']+)["']/g)) {
    hrefs.push(m[1]);
  }
  return hrefs;
}

function normalizePath(p) {
  // ignore query/hash
  return p.split("#")[0].split("?")[0];
}

const citiesTs = read(path.join(ROOT, "lib", "cities.ts"));
const cityDataTs = read(path.join(ROOT, "lib", "cityData.ts"));

const CITY_SLUGS = extractCitySlugsFromCitiesTs(citiesTs);
const CITY_TO_NEIGHBORHOODS = extractCityNeighborhoodsFromCityDataTs(cityDataTs);

const scanDirs = [path.join(ROOT, "app"), path.join(ROOT, "components")];
const files = scanDirs.flatMap((d) => listFiles(d, [".ts", ".tsx"]));

const issues = [];

function report(filePath, href, reason) {
  issues.push({ file: path.relative(ROOT, filePath), href, reason });
}

for (const filePath of files) {
  const content = read(filePath);
  const hrefs = extractLiteralHrefs(content);
  for (const raw of hrefs) {
    const href = normalizePath(raw);

    // Skip external
    if (!href.startsWith("/")) continue;

    // /demenagement/{slug}/
    const dem = href.match(/^\/demenagement\/([a-z0-9-]+)\/?$/);
    if (dem) {
      const slug = dem[1];
      if (!CITY_SLUGS.has(slug)) {
        report(filePath, href, `Ville inconnue pour /demenagement/: ${slug}`);
      }
      continue;
    }

    // /quartiers-{slug}/
    const qhub = href.match(/^\/quartiers-([a-z0-9-]+)\/?$/);
    if (qhub) {
      const slug = qhub[1];
      if (!CITY_SLUGS.has(slug)) {
        report(filePath, href, `Ville inconnue pour /quartiers-*: ${slug}`);
      }
      continue;
    }

    // /{from}-vers-{to}/
    const corr = href.match(/^\/([a-z0-9-]+)-vers-([a-z0-9-]+)\/?$/);
    if (corr) {
      const from = corr[1];
      const to = corr[2];
      if (!CITY_SLUGS.has(from)) report(filePath, href, `Ville origine inconnue: ${from}`);
      if (!CITY_SLUGS.has(to)) report(filePath, href, `Ville destination inconnue: ${to}`);
      if (to === "ile-de-france" || from === "ile-de-france") {
        report(filePath, href, `Corridor avec ile-de-france (à vérifier): ${from}→${to}`);
      }
      continue;
    }

    // /{city}/{quartier}/
    const quartier = href.match(/^\/([a-z0-9-]+)\/([a-z0-9-]+)\/?$/);
    if (quartier) {
      const city = quartier[1];
      const q = quartier[2];
      if (CITY_TO_NEIGHBORHOODS.has(city)) {
        const set = CITY_TO_NEIGHBORHOODS.get(city);
        if (set && !set.has(q)) {
          report(filePath, href, `Quartier inconnu pour ${city}: ${q}`);
        }
      }
      continue;
    }
  }
}

if (issues.length === 0) {
  console.log("✅ Audit liens internes: aucun problème détecté (href littéraux).");
  process.exit(0);
}

console.log(`⚠️ Audit liens internes: ${issues.length} problème(s) détecté(s).\n`);
for (const it of issues) {
  console.log(`- ${it.file}: ${it.href}  → ${it.reason}`);
}
process.exitCode = 1;


