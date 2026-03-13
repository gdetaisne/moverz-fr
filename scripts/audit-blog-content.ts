#!/usr/bin/env npx tsx

/**
 * Audit global du contenu blog — identifie les articles à contenu fin / squelettique.
 *
 * Métriques :
 * - Mots : seuils TRÈS_FIN (<200), FIN (200-400), MOYEN (400-700), BON (700+)
 * - Structure : nb H2, H3, paragraphes (détection patterns squelettiques)
 * - Sitemap : présent ou non (isQualityPost)
 *
 * Usage: npx tsx scripts/audit-blog-content.ts
 */

import { writeFileSync } from "fs";
import { join } from "path";
import {
  PUBLISHED_BLOG_POSTS,
  getCanonicalBodyBySlug,
  isQualityPost,
} from "../lib/blog";

type QualityLevel = "TRÈS_FIN" | "FIN" | "MOYEN" | "BON" | "EXCELLENT";

interface AuditResult {
  slug: string;
  title: string;
  citySlug?: string;
  category?: string;
  wordCount: number;
  h2Count: number;
  h3Count: number;
  paragraphCount: number;
  qualityLevel: QualityLevel;
  inSitemap: boolean;
  redFlags: string[];
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countHeadings(text: string): { h2: number; h3: number } {
  let h2 = 0,
    h3 = 0;
  for (const line of text.split("\n")) {
    const t = line.trim();
    if (t.startsWith("## ") && !t.startsWith("### ")) h2++;
    if (t.startsWith("### ")) h3++;
  }
  return { h2, h3 };
}

function countParagraphs(text: string): number {
  // Paragraphes = blocs séparés par \n\n ou listes
  const blocks = text.split(/\n\s*\n/).filter((b) => b.trim().length > 0);
  let count = 0;
  for (const block of blocks) {
    const lines = block.trim().split("\n");
    const first = lines[0]?.trim() ?? "";
    if (!first.startsWith("#") && !first.startsWith("-") && !first.startsWith("*") && !first.startsWith("|")) {
      count++;
    } else if (first.startsWith("-") || first.startsWith("*")) {
      count += 1; // Une liste = 1 bloc
    }
  }
  return count;
}

function detectRedFlags(body: string): string[] {
  const flags: string[] = [];
  const wc = countWords(body);

  // Section ultra-courte = 1 seule ligne après un H2
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("## ") || line.trim().startsWith("### ")) {
      const rest = lines.slice(i + 1);
      const nextHIdx = rest.findIndex((l) => l.trim().startsWith("#"));
      const untilNext = nextHIdx >= 0 ? rest.slice(0, nextHIdx) : rest;
      const nextContent = untilNext.join(" ");
      const nextWords = countWords(nextContent);
      if (nextWords > 0 && nextWords < 15) {
        flags.push(`Section courte (${nextWords} mots après un titre)`);
      }
    }
  }

  // Pattern squelettique : "Vérifications", "Prix", "FAQ" avec 1 ligne chacun
  if (body.includes("## Vérifications") && body.includes("## Prix") && body.includes("## FAQ")) {
    const verifSection = body.match(/## Vérifications[\s\S]*?(?=##|$)/)?.[0] ?? "";
    if (countWords(verifSection) < 30) flags.push("Pattern template Vérifications/Prix/FAQ");
  }

  // Trop de tirets, peu de texte
  const bulletCount = (body.match(/^[\s]*[-*]\s/gm) ?? []).length;
  if (wc < 300 && bulletCount > 8) flags.push("Trop de bullets pour peu de texte");

  return [...new Set(flags)];
}

function getQualityLevel(wordCount: number): QualityLevel {
  if (wordCount < 200) return "TRÈS_FIN";
  if (wordCount < 400) return "FIN";
  if (wordCount < 700) return "MOYEN";
  if (wordCount < 1200) return "BON";
  return "EXCELLENT";
}

function main() {
  const results: AuditResult[] = [];
  const root = join(import.meta.dirname ?? __dirname, "..");

  for (const post of PUBLISHED_BLOG_POSTS) {
    if (!post?.slug) continue;
    const body = getCanonicalBodyBySlug(post.slug);
    if (!body) continue;

    const wordCount = countWords(body);
    const { h2, h3 } = countHeadings(body);
    const paragraphCount = countParagraphs(body);
    const qualityLevel = getQualityLevel(wordCount);
    const inSitemap = isQualityPost(post.slug);
    const redFlags = detectRedFlags(body);

    results.push({
      slug: post.slug,
      title: post.title ?? "",
      citySlug: post.citySlug,
      category: post.category,
      wordCount,
      h2Count: h2,
      h3Count: h3,
      paragraphCount,
      qualityLevel,
      inSitemap,
      redFlags,
    });
  }

  // Tri : plus fin en premier
  const byQuality = [...results].sort((a, b) => a.wordCount - b.wordCount);

  // Stats globales
  const stats = {
    total: results.length,
    tresFin: results.filter((r) => r.qualityLevel === "TRÈS_FIN").length,
    fin: results.filter((r) => r.qualityLevel === "FIN").length,
    moyen: results.filter((r) => r.qualityLevel === "MOYEN").length,
    bon: results.filter((r) => r.qualityLevel === "BON").length,
    excellent: results.filter((r) => r.qualityLevel === "EXCELLENT").length,
    inSitemap: results.filter((r) => r.inSitemap).length,
    withRedFlags: results.filter((r) => r.redFlags.length > 0).length,
  };

  // Exclure placeholders pour la section "contenu réel squelettique"
  const isPlaceholder = (slug: string) =>
    /placeholder|article-satellite-\d+|^BATCH-|^PILIER-\d+/i.test(slug);
  const squelettiqueReel = byQuality.filter(
    (r) =>
      !isPlaceholder(r.slug) &&
      (r.qualityLevel === "TRÈS_FIN" || r.qualityLevel === "FIN")
  );

  const output = {
    generatedAt: new Date().toISOString(),
    stats,
    squelettiqueReel: squelettiqueReel.slice(0, 60).map((r) => ({
      slug: r.slug,
      title: r.title,
      wordCount: r.wordCount,
      qualityLevel: r.qualityLevel,
      inSitemap: r.inSitemap,
      redFlags: r.redFlags,
      citySlug: r.citySlug,
    })),
    topThin: byQuality.slice(0, 80).map((r) => ({
      slug: r.slug,
      title: r.title,
      wordCount: r.wordCount,
      qualityLevel: r.qualityLevel,
      inSitemap: r.inSitemap,
      redFlags: r.redFlags,
      citySlug: r.citySlug,
    })),
    fullAudit: results,
  };

  const outPath = join(root, "docs/SEO/AUDIT-CONTENU-BLOG.json");
  writeFileSync(outPath, JSON.stringify(output, null, 2), "utf-8");

  // Rapport Markdown
  const md = `# Audit contenu blog

**Date** : ${new Date().toISOString().split("T")[0]}

## Synthèse

| Métrique | Valeur |
|----------|--------|
| Total articles publiés | ${stats.total} |
| Dans sitemap (qualité) | ${stats.inSitemap} |
| **TRÈS FIN** (<200 mots) | **${stats.tresFin}** |
| **FIN** (200-400 mots) | **${stats.fin}** |
| MOYEN (400-700 mots) | ${stats.moyen} |
| BON (700-1200 mots) | ${stats.bon} |
| EXCELLENT (1200+ mots) | ${stats.excellent} |
| Avec red flags (structure) | ${stats.withRedFlags} |

## Top 50 articles à réécrire (contenu le plus fin)

| Slug | Mots | Niveau | Sitemap | Red flags |
|------|------|--------|---------|-----------|
${byQuality
  .slice(0, 50)
  .map(
    (r) =>
      `| [${r.slug}](/blog/${r.slug}/) | ${r.wordCount} | ${r.qualityLevel} | ${r.inSitemap ? "oui" : "non"} | ${r.redFlags.join("; ") || "-"} |`
  )
  .join("\n")}

## Contenu squelettique (slugs SEO réels, hors placeholders)

Articles avec contenu fin mais slug à intention SEO (ex. meilleurs-demenageurs-lyon). **Priorité réécriture.**

| Slug | Mots | Sitemap | Red flags |
|------|------|---------|-----------|
${squelettiqueReel
  .slice(0, 60)
  .map(
    (r) =>
      `| [${r.slug}](/blog/${r.slug}/) | ${r.wordCount} | ${r.inSitemap ? "oui" : "non"} | ${r.redFlags.join("; ") || "-"} |`
  )
  .join("\n")}

## Priorisation suggérée

1. **P0 — TRÈS FIN en sitemap** : Retirer du sitemap ou réécrire
2. **P1 — FIN avec trafic GSC** : Réécrire en priorité
3. **P2 — FIN sans trafic** : Réécrire ou noindex
4. **P3 — MOYEN** : Enrichir progressivement
`;

  const mdPath = join(root, "docs/SEO/AUDIT-CONTENU-BLOG.md");
  writeFileSync(mdPath, md, "utf-8");

  console.log("✅ Audit terminé");
  console.log(`   JSON : ${outPath}`);
  console.log(`   MD   : ${mdPath}`);
  console.log("");
  console.log("Synthèse :");
  console.log(`   TRÈS FIN (<200 mots) : ${stats.tresFin}`);
  console.log(`   FIN (200-400)        : ${stats.fin}`);
  console.log(`   MOYEN (400-700)      : ${stats.moyen}`);
  console.log(`   BON (700+)           : ${stats.bon + stats.excellent}`);
  console.log(`   Dans sitemap         : ${stats.inSitemap}/${stats.total}`);
}

main();
