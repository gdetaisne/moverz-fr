#!/usr/bin/env tsx
/**
 * Audit CTR MAX - Opportunités d'optimisation SERP
 * 
 * Vérifie si on a fait TOUT pour maximiser les clics :
 * - Longueur optimale title/desc
 * - Présence de chiffres (CTR +20%)
 * - Call-to-action
 * - Social proof visible
 * - Année/fraîcheur visible
 * - Rich snippets (FAQ, Review, etc.)
 * 
 * Exécution : npx tsx scripts/audit-ctr-max.ts
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

interface CTROpportunity {
  page: string;
  file: string;
  type: "🟢 Excellent" | "🟡 Bon" | "🟠 Améliorable" | "🔴 Opportunité manquée";
  category: "Title" | "Description" | "Rich Snippets" | "URL" | "Structured Data";
  current: string;
  score: number; // 0-100
  opportunities: string[];
  bestPractice?: string;
}

const opportunities: CTROpportunity[] = [];

// Best practices CTR-optimized
const TITLE_BEST_LENGTH = { min: 50, max: 60 }; // Google coupe à ~600px (60 car)
const DESC_BEST_LENGTH = { min: 145, max: 160 }; // Sweet spot pour visibilité complète

const CTR_TRIGGERS = {
  chiffres: /\d+/g, // Chiffres (CTR +20-30% prouvé)
  prix: /\d+\s*€|dès\s+\d+|à\s+partir\s+de/gi,
  quantite: /\d+\s*devis|\d+\+/gi,
  annee: /202\d/g, // Fraîcheur
  pourcentage: /\d+%/g,
  cta: /gratuit|comparez|recevez|découvrez|obtenez/gi,
  urgence: /rapide|aujourd'hui|maintenant|immédiat/gi,
  social_proof: /avis|note|⭐|★|témoignages|\d+\/5/gi,
  garantie: /garantie|assuré|contrôlé|vérifié/gi,
  benefice: /sans|0\s|zéro/gi,
};

function analyzeTitleCTR(title: string): { score: number; opportunities: string[] } {
  const opportunities: string[] = [];
  let score = 70; // Base score

  // Longueur
  if (title.length < TITLE_BEST_LENGTH.min) {
    opportunities.push(`📏 Title court (${title.length} car) → Espace SERP sous-utilisé (idéal: 50-60)`);
    score -= 10;
  } else if (title.length > TITLE_BEST_LENGTH.max) {
    opportunities.push(`📏 Title trop long (${title.length} car) → Risque de troncature Google`);
    score -= 5;
  } else {
    score += 10; // Longueur optimale
  }

  // Chiffres (CTR boost majeur)
  const chiffresCount = (title.match(CTR_TRIGGERS.chiffres) || []).length;
  if (chiffresCount === 0) {
    opportunities.push("🔢 Aucun chiffre → Manque de concret (-20% CTR potentiel)");
    score -= 15;
  } else if (chiffresCount >= 2) {
    score += 10; // Excellent
  }

  // Prix visible
  if (!CTR_TRIGGERS.prix.test(title)) {
    opportunities.push("💰 Prix absent du title → Opportunité manquée (intent transactionnel)");
    score -= 10;
  } else {
    score += 10;
  }

  // Année (fraîcheur)
  if (!CTR_TRIGGERS.annee.test(title)) {
    opportunities.push("📅 Année absente → Signal de fraîcheur manqué");
    score -= 5;
  } else {
    score += 5;
  }

  // Symboles/séparateurs
  if (!title.includes("|") && !title.includes("→") && !title.includes("·")) {
    opportunities.push("➡️ Pas de séparateur visuel → Lisibilité réduite");
    score -= 5;
  } else {
    score += 5;
  }

  return { score: Math.max(0, Math.min(100, score)), opportunities };
}

function analyzeDescriptionCTR(desc: string): { score: number; opportunities: string[] } {
  const opportunities: string[] = [];
  let score = 70;

  // Longueur
  if (desc.length < DESC_BEST_LENGTH.min) {
    opportunities.push(`📏 Description courte (${desc.length} car) → Espace SERP perdu (idéal: 145-160)`);
    score -= 10;
  } else if (desc.length > 160) {
    opportunities.push(`📏 Description trop longue (${desc.length} car) → Troncature assurée mobile`);
    score -= 5;
  } else {
    score += 10;
  }

  // Call-to-action
  const ctaMatches = desc.match(CTR_TRIGGERS.cta) || [];
  if (ctaMatches.length === 0) {
    opportunities.push("🎯 Aucun CTA → Pas d'appel à l'action explicite");
    score -= 10;
  } else if (ctaMatches.length >= 2) {
    score += 10;
  }

  // Chiffres/données concrètes
  const chiffresCount = (desc.match(CTR_TRIGGERS.chiffres) || []).length;
  if (chiffresCount < 3) {
    opportunities.push(`🔢 Peu de chiffres (${chiffresCount}) → Manque de concret/preuves`);
    score -= 10;
  } else if (chiffresCount >= 5) {
    score += 10;
  }

  // Social proof
  if (!CTR_TRIGGERS.social_proof.test(desc)) {
    opportunities.push("⭐ Pas de social proof → Note/avis absents");
    score -= 10;
  } else {
    score += 10;
  }

  // Garanties/réassurance
  const garanties = desc.match(CTR_TRIGGERS.garantie) || [];
  if (garanties.length === 0) {
    opportunities.push("🛡️ Pas de garantie visible → Manque de réassurance");
    score -= 5;
  }

  // Bénéfices "0/sans"
  const benefices = desc.match(CTR_TRIGGERS.benefice) || [];
  if (benefices.length === 0) {
    opportunities.push("✨ Pas de bénéfice 'zéro' → Friction non adressée");
    score -= 5;
  }

  return { score: Math.max(0, Math.min(100, score)), opportunities };
}

function scanMetadataForCTR(filePath: string, content: string) {
  const relativePath = filePath.replace(process.cwd(), "");
  const lines = content.split("\n");

  // Extraire metadata
  const metadataRegex = /export\s+const\s+metadata[^=]*=\s*{([^}]+(?:{[^}]+}[^}]+)*?)}/gs;
  const matches = content.matchAll(metadataRegex);

  for (const match of matches) {
    const metaBlock = match[1];
    
    // Extraire title et description
    const titleMatch = metaBlock.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const descMatch = metaBlock.match(/description:\s*["'`]([^"'`]+)["'`]/);

    if (titleMatch && descMatch) {
      const title = titleMatch[1];
      const desc = descMatch[1];

      const titleAnalysis = analyzeTitleCTR(title);
      const descAnalysis = analyzeDescriptionCTR(desc);

      const avgScore = Math.round((titleAnalysis.score + descAnalysis.score) / 2);
      
      let type: CTROpportunity["type"];
      if (avgScore >= 85) type = "🟢 Excellent";
      else if (avgScore >= 70) type = "🟡 Bon";
      else if (avgScore >= 50) type = "🟠 Améliorable";
      else type = "🔴 Opportunité manquée";

      if (titleAnalysis.opportunities.length > 0 || descAnalysis.opportunities.length > 0) {
        opportunities.push({
          page: relativePath.replace("/app/", "").replace("/page.tsx", "").replace(/^\//, "") || "Homepage",
          file: relativePath,
          type,
          category: "Title",
          current: `Title: "${title.substring(0, 80)}${title.length > 80 ? "..." : ""}"\nDesc: "${desc.substring(0, 80)}${desc.length > 80 ? "..." : ""}"`,
          score: avgScore,
          opportunities: [
            ...titleAnalysis.opportunities.map(o => `[Title] ${o}`),
            ...descAnalysis.opportunities.map(o => `[Desc] ${o}`)
          ],
        });
      }
    }
  }
}

function scanDirectory(dir: string) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (file.startsWith(".") || file === "node_modules" || file === ".next" || file === "lib") {
      continue;
    }

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      try {
        const content = readFileSync(fullPath, "utf-8");
        scanMetadataForCTR(fullPath, content);
      } catch (err) {
        // Skip
      }
    }
  }
}

// ============================================
// EXÉCUTION
// ============================================

console.log("\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                                                           ║");
console.log("║   🚀 AUDIT CTR MAX — OPTIMISATION SERP                   ║");
console.log("║                                                           ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

console.log("🔍 Analyse opportunités CTR sur pages clés...\n");

scanDirectory(join(process.cwd(), "app"));

console.log(`✅ Analyse terminée : ${opportunities.length} pages auditées\n`);

// ============================================
// RAPPORT PAR SCORE
// ============================================

const excellent = opportunities.filter(o => o.type === "🟢 Excellent");
const bon = opportunities.filter(o => o.type === "🟡 Bon");
const ameliorable = opportunities.filter(o => o.type === "🟠 Améliorable");
const manque = opportunities.filter(o => o.type === "🔴 Opportunité manquée");

console.log("\n╔═══════════════════════════════════════════════════════════╗");
console.log("║              RÉSULTATS PAR NIVEAU CTR                     ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

console.log(`🟢 Excellent (85-100)        : ${excellent.length} pages`);
console.log(`🟡 Bon (70-84)               : ${bon.length} pages`);
console.log(`🟠 Améliorable (50-69)       : ${ameliorable.length} pages`);
console.log(`🔴 Opportunité manquée (<50) : ${manque.length} pages`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 TOTAL                     : ${opportunities.length} pages\n`);

// Afficher opportunités
[
  { label: "🔴 OPPORTUNITÉS MANQUÉES", items: manque },
  { label: "🟠 AMÉLIORABLE", items: ameliorable },
  { label: "🟡 BON (peut mieux faire)", items: bon.slice(0, 3) }, // Top 3 seulement
].forEach(({ label, items }) => {
  if (items.length === 0) return;

  console.log(`\n${label} (${items.length})`);
  console.log("━".repeat(80));

  items.slice(0, 5).forEach(opp => {
    console.log(`\n📄 ${opp.page} (Score: ${opp.score}/100)`);
    console.log(`   ${opp.type}`);
    console.log();
    opp.opportunities.forEach(o => {
      console.log(`   ${o}`);
    });
  });

  if (items.length > 5) {
    console.log(`\n   ... et ${items.length - 5} autres pages\n`);
  }
});

// ============================================
// RECOMMANDATIONS PRIORITAIRES
// ============================================

console.log("\n\n╔═══════════════════════════════════════════════════════════╗");
console.log("║           RECOMMANDATIONS PRIORITAIRES CTR                ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

// Compter les opportunités par type
const oppCounts: Record<string, number> = {};
opportunities.forEach(opp => {
  opp.opportunities.forEach(o => {
    const key = o.split("→")[0].trim();
    oppCounts[key] = (oppCounts[key] || 0) + 1;
  });
});

const topOpps = Object.entries(oppCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

console.log("🎯 Top 5 opportunités (impact × fréquence) :\n");
topOpps.forEach(([opp, count], i) => {
  console.log(`   ${i + 1}. ${opp} (${count} pages)`);
});

console.log("\n💡 Quick wins recommandés :\n");
console.log("   1. Ajouter année dynamique dans titles manquants");
console.log("   2. Optimiser longueur descriptions (viser 150-160 car)");
console.log("   3. Ajouter social proof dans descriptions (note 4.9/5)");
console.log("   4. Renforcer CTAs (verbes d'action forts)");
console.log("   5. Ajouter chiffres concrets où manquants\n");

// Score moyen global
const avgGlobalScore = Math.round(
  opportunities.reduce((sum, o) => sum + o.score, 0) / opportunities.length
);

console.log("\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                  SCORE CTR GLOBAL                         ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

console.log(`📊 Score moyen CTR : ${avgGlobalScore}/100`);
console.log();

if (avgGlobalScore >= 85) {
  console.log("🎉 EXCELLENT ! Site très bien optimisé pour CTR.");
  console.log("   Monitoring recommandé J+7/J+14 pour valider impact.");
} else if (avgGlobalScore >= 70) {
  console.log("✅ BON niveau CTR. Opportunités d'amélioration identifiées.");
  console.log("   Gain potentiel CTR : +10-20% en appliquant recommandations.");
} else {
  console.log("⚠️  POTENTIEL CTR SOUS-EXPLOITÉ.");
  console.log("   Gain potentiel CTR : +30-50% en optimisant titles/descriptions.");
}

console.log();
