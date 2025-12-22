#!/usr/bin/env node

/**
 * Génère des redirections 301 pour les slugs blog présents dans blog-data.ts
 * mais sans contenu canonique dans blog-canonique.ts.
 *
 * Sorties :
 * - redirects/blog-missing-301.mjs (module importable par next.config.mjs)
 * - redirects/blog-missing-301.csv (audit lisible)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DATA_PATH = path.join(__dirname, "..", "lib", "blog-data.ts");
const BLOG_CANON_PATH = path.join(__dirname, "..", "lib", "blog-canonique.ts");
const OUT_MODULE_PATH = path.join(__dirname, "..", "redirects", "blog-missing-301.mjs");
const OUT_CSV_PATH = path.join(__dirname, "..", "redirects", "blog-missing-301.csv");

function mustRead(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier introuvable : ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, "utf8");
}

function parseBlogDataEntries(tsContent) {
  const lines = tsContent.split(/\r?\n/);
  const entries = [];

  let inArray = false;
  let inObj = false;
  let current = null;

  for (const line of lines) {
    if (!inArray) {
      if (line.includes("export const BLOG_DATA")) inArray = true;
      continue;
    }

    // Stop at end of array
    if (inArray && !inObj && line.trim() === "];") break;

    if (!inObj) {
      if (line.trim().startsWith("{")) {
        inObj = true;
        current = { slug: "", category: "", citySlug: "" };
      }
      continue;
    }

    const slugMatch = line.match(/^\s*slug:\s*"([^"]+)"/);
    if (slugMatch) {
      current.slug = slugMatch[1];
      continue;
    }
    const categoryMatch = line.match(/^\s*category:\s*"([^"]+)"/);
    if (categoryMatch) {
      current.category = categoryMatch[1];
      continue;
    }
    const cityMatch = line.match(/^\s*citySlug:\s*"([^"]+)"/);
    if (cityMatch) {
      current.citySlug = cityMatch[1];
      continue;
    }

    if (line.trim().startsWith("},")) {
      if (current?.slug) entries.push(current);
      inObj = false;
      current = null;
    }
  }

  return entries;
}

function parseCanonicalPosts(tsContent) {
  // IMPORTANT: blog-canonique.ts contient de gros template literals (body markdown) avec des "{", "},"
  // On évite donc un parseur "ligne à ligne" naïf et on cible uniquement les vrais objets canoniques :
  // un bloc qui contient slug: "..." ET body: `...`
  const posts = [];

  const re =
    /\{\s*\n\s*slug:\s*"([^"]+)"[\s\S]*?(?:\n\s*citySlug:\s*"([^"]+)")?[\s\S]*?\n\s*body:\s*`/g;

  for (const m of tsContent.matchAll(re)) {
    const slug = m[1];
    const citySlug = m[2] || "";
    if (!slug) continue;
    posts.push({ slug, citySlug });
  }

  return posts;
}

function getDestination({ slug, category, citySlug }, cityToPriceSlug) {
  // Si on a une catégorie fiable, on redirige vers la bonne page hub (toujours existante)
  if (category === "prix-et-devis") {
    if (citySlug && cityToPriceSlug.has(citySlug)) {
      return `/blog/${cityToPriceSlug.get(citySlug)}/`;
    }
    return "/blog/prix-et-devis/";
  }
  if (category === "checklists-et-guides") return "/blog/checklists-et-guides/";
  if (category === "conseils-demenagement") return "/blog/conseils-demenagement/";
  if (category === "demenagement-par-ville") return "/blog/demenagement-par-ville/";

  // Heuristiques fallback (au cas où)
  const s = slug.toLowerCase();
  if (/(prix|tarif|cout|co[uû]t)/.test(s)) return "/blog/prix-et-devis/";
  if (/(checklist|check-list|liste)/.test(s)) return "/blog/checklists-et-guides/";
  if (/(conseil|astuce|erreur)/.test(s)) return "/blog/conseils-demenagement/";
  if (/demenagement/.test(s)) return "/blog/demenagement-par-ville/";

  return "/blog/";
}

function escapeCsv(value) {
  const str = value == null ? "" : String(value);
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

const blogDataContent = mustRead(BLOG_DATA_PATH);
const canonicalContent = mustRead(BLOG_CANON_PATH);

console.log("🔍 Parsing blog-data.ts ...");
const entries = parseBlogDataEntries(blogDataContent);
console.log(`➡️  ${entries.length} entrées trouvées dans BLOG_DATA.`);

console.log("🔍 Parsing blog-canonique.ts ...");
const canonicalPosts = parseCanonicalPosts(canonicalContent);
const canonicalSlugSet = new Set(canonicalPosts.map((p) => p.slug));
console.log(`➡️  ${canonicalPosts.length} posts canoniques trouvés.`);

// Map citySlug -> canonical "prix-demenagement..." slug (si existe)
const cityToPriceSlug = new Map();
for (const p of canonicalPosts) {
  if (!p.citySlug) continue;
  if (!p.slug.startsWith("prix-demenagement")) continue;
  if (!cityToPriceSlug.has(p.citySlug)) {
    cityToPriceSlug.set(p.citySlug, p.slug);
  }
}

const missing = entries.filter((e) => e.slug && !canonicalSlugSet.has(e.slug));
console.log(`➡️  ${missing.length} slugs sans contenu canonique (à rediriger).`);

// Dédup + tri
const uniqueMissing = Array.from(
  new Map(missing.map((e) => [e.slug, e])).values()
).sort((a, b) => a.slug.localeCompare(b.slug));

// Générer règles
const rules = [];
const csvLines = ["slug,category,citySlug,destination"];

for (const entry of uniqueMissing) {
  const dest = getDestination(entry, cityToPriceSlug);
  if (!dest || dest === `/blog/${entry.slug}/`) continue;

  // No-trailing and trailing source, destination avec trailing slash (project trailingSlash=true)
  rules.push({ source: `/blog/${entry.slug}`, destination: dest, permanent: true });
  rules.push({ source: `/blog/${entry.slug}/`, destination: dest, permanent: true });

  csvLines.push(
    [entry.slug, entry.category || "", entry.citySlug || "", dest].map(escapeCsv).join(",")
  );
}

// Écrire module
const header = `// AUTO-GENERATED FILE - ne pas éditer à la main
// Généré par scripts/generate-missing-blog-301-redirects.mjs
// ${new Date().toISOString()}
// Règles: ${rules.length}
`;

const moduleBody =
  header +
  "\nexport const BLOG_MISSING_301_REDIRECTS = " +
  JSON.stringify(rules, null, 2) +
  ";\n";

fs.mkdirSync(path.dirname(OUT_MODULE_PATH), { recursive: true });
fs.writeFileSync(OUT_MODULE_PATH, moduleBody, "utf8");
fs.writeFileSync(OUT_CSV_PATH, csvLines.join("\n"), "utf8");

console.log(`✅ Module généré : ${OUT_MODULE_PATH}`);
console.log(`✅ CSV généré : ${OUT_CSV_PATH}`);


