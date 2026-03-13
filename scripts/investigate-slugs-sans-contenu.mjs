#!/usr/bin/env node

/**
 * Enquête : slugs dans blog-data.ts SANS contenu canonique
 *
 * Un slug "sans contenu canonique" = présent dans BLOG_DATA (métadonnées)
 * mais absent des sources de contenu (blog-canonique, blog-nouveaux-2026,
 * blog-markdown-posts, blog-longtail, etc.)
 *
 * Conséquence : /blog/[slug] → 404 (getPublishedPostBySlug retourne undefined)
 */

import { readFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Extraire les slugs des fichiers sources
function extractSlugsFromFile(filePath, slugPattern = /slug:\s*["']([^"']+)["']/g) {
  let content;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return new Set();
  }
  const slugs = new Set();
  let m;
  while ((m = slugPattern.exec(content)) !== null) slugs.add(m[1]);
  return slugs;
}

// BLOG_DATA : slug: "xxx"
const blogDataPath = join(root, "lib/blog-data.ts");
const blogDataContent = readFileSync(blogDataPath, "utf-8");
const blogDataSlugs = new Set();
const slugRe = /slug:\s*["']([^"']+)["']/g;
let match;
while ((match = slugRe.exec(blogDataContent)) !== null) {
  blogDataSlugs.add(match[1]);
}

// Canonical sources : slug dans l'interface/objet
const canonicalFiles = [
  "lib/blog-canonique.ts",
  "lib/blog-nouveaux-2026.ts",
  "lib/blog-markdown-posts.ts",
  "lib/blog-longtail.ts",
  "lib/blog-longtail-pack2.ts",
  "lib/blog-arnaques.ts",
];

const canonicalSlugs = new Set();
for (const rel of canonicalFiles) {
  const path = join(root, rel);
  const s = extractSlugsFromFile(path);
  s.forEach((slug) => canonicalSlugs.add(slug));
}

// blog-extra.ts a des métadonnées mais pas de body → pas canonique
// Vérifier aussi content/blog/*.md
const contentBlogDir = join(root, "content/blog");
let markdownSlugs = new Set();
try {
  const files = readdirSync(contentBlogDir, { withFileTypes: true });
  for (const f of files) {
    if (f.isFile() && f.name.endsWith(".md")) {
      const p = join(contentBlogDir, f.name);
      const c = readFileSync(p, "utf-8");
      const fm = c.match(/slug:\s*["']?([^\s"'\n]+)["']?/m);
      if (fm) markdownSlugs.add(fm[1]);
    }
  }
} catch {
  // pas de content/blog
}
markdownSlugs.forEach((s) => canonicalSlugs.add(s));

// blog-pro-canonique
const proCanonical = extractSlugsFromFile(join(root, "lib/blog-pro-canonique.ts"));
proCanonical.forEach((s) => canonicalSlugs.add(s));

// Slugs en BLOG_DATA mais SANS contenu canonique
const sansContenu = [...blogDataSlugs].filter((s) => !canonicalSlugs.has(s));

// URLs du rapport Bing AI (blog uniquement) — pour priorisation
const AI_BLOG_SLUGS = [
  "assurance-demenagement-international",
  "prix-demenagement-bordeaux-guide",
  "prix-demenagement-lyon-guide-complet",
  "prix-demenagement-lille-guide",
  "combien-coute-garde-meuble-marseille",
  "demenagement-m3-calcul-tarif-lille",
  "prix-demenagement-montpellier",
  "aide-financiere-demenagement-nice",
  "aides-financieres-demenagement-lille",
  "top-erreurs-a-eviter",
  "aide-financiere-demenagement-lyon",
  "comment-choisir-demenageur-marseille",
  "assurance-piano-demenagement-lille",
  "prix-demenagement-nantes-guide",
  "demenagement-rue-etroite-impasse",
  "prix-demenagement-nice-guide",
  "eviter-arnaques-demenagement",
  "prix-demenagement-toulouse",
  "prix-demenagement-strasbourg",
  "faq-garde-meuble-strasbourg",
];

const sansContenuEtTraficAI = sansContenu.filter((s) => AI_BLOG_SLUGS.includes(s));

console.log("═══════════════════════════════════════════════════════════");
console.log("  ENQUÊTE : Slugs dans blog-data.ts SANS contenu canonique");
console.log("═══════════════════════════════════════════════════════════\n");

console.log("📊 RÉSUMÉ");
console.log("─────────");
console.log(`  • Slugs dans BLOG_DATA          : ${blogDataSlugs.size}`);
console.log(`  • Slugs avec contenu canonique   : ${canonicalSlugs.size}`);
console.log(`  • Slugs SANS contenu canonique   : ${sansContenu.length}`);
console.log(`  • Dont avec trafic Bing AI       : ${sansContenuEtTraficAI.length}`);
console.log("");

if (sansContenuEtTraficAI.length > 0) {
  console.log("🚨 PRIORITÉ : Sans contenu MAIS avec trafic Bing AI");
  console.log("─────────────────────────────────────────────────────");
  sansContenuEtTraficAI.forEach((s) => console.log(`  • ${s}`));
  console.log("");
}

console.log("📋 Exemples de slugs sans contenu (20 premiers)");
console.log("───────────────────────────────────────────────");
sansContenu.slice(0, 20).forEach((s) => console.log(`  • ${s}`));
console.log(`  ... et ${Math.max(0, sansContenu.length - 20)} autres`);
console.log("");

console.log("💡 INTERPRÉTATION");
console.log("─────────────────");
console.log("  Ces slugs ont des métadonnées (titre, description) dans blog-data.ts");
console.log("  mais aucun fichier ne fournit le 'body' (contenu markdown).");
console.log("  → /blog/[slug] retourne 404 (notFound)");
console.log("  → Ils viennent souvent du CSV auto-généré (moverz_clean_articles.csv)");
console.log("  → Pour les publier : ajouter le body dans blog-canonique.ts,");
console.log("    blog-nouveaux-2026.ts ou un fichier .md dans content/blog/");
console.log("");
