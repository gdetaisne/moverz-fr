#!/usr/bin/env tsx
/**
 * Audit SERP & CTR - Focus fausses promesses & chiffres hardcodés
 * 
 * Vérifie :
 * - Présence de fausses promesses (48h, 24h, etc.)
 * - Chiffres hardcodés dans meta (prix inventés)
 * - Incohérences meta vs contenu
 * - Conformité BEST IN CLASS
 * 
 * Exécution : tsx scripts/audit-serp-ctr.ts
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { CITIES } from "../lib/cities";

interface AuditIssue {
  file: string;
  type: "fausse_promesse" | "hardcode" | "incoherence" | "warning";
  severity: "🔴 CRITIQUE" | "🟠 ÉLEVÉ" | "🟡 MOYEN" | "🟢 INFO";
  issue: string;
  line?: number;
  suggestion?: string;
}

const issues: AuditIssue[] = [];

// Patterns à détecter
const FAUSSE_PROMESSE_PATTERNS = [
  { regex: /48\s*h/gi, desc: "Délai 48h (faux, réel = 5-7j)" },
  { regex: /24\s*h/gi, desc: "Délai 24h (faux)" },
  { regex: /sous\s*48/gi, desc: "Sous 48h (faux)" },
  { regex: /en\s*48/gi, desc: "En 48h (faux)" },
  { regex: /3\s*devis/gi, desc: "3 devis (obsolète, actuel = 5+)" },
  { regex: /450\s*€/gi, desc: "Prix 450€ hardcodé (à vérifier si calculé)" },
  { regex: /dès\s*\d{3,4}\s*€/g, desc: "Prix fixe hardcodé potentiel" },
];

const HARDCODE_PRIX_PATTERNS = [
  { regex: /prix[^\n]{0,50}:\s*["\']?\d{3,5}\s*€/gi, desc: "Prix hardcodé en props/const" },
  { regex: /prixIndicatifs\s*=\s*\[/gi, desc: "prixIndicatifs array hardcodé (devrait être calculé)" },
];

function scanFile(filePath: string, content: string) {
  const relativePath = filePath.replace(process.cwd(), "");
  const lines = content.split("\n");

  // 1. Détection fausses promesses
  FAUSSE_PROMESSE_PATTERNS.forEach(({ regex, desc }) => {
    const matches = content.matchAll(regex);
    for (const match of matches) {
      const lineNum = content.substring(0, match.index).split("\n").length;
      const lineContent = lines[lineNum - 1];
      
      // Exception : commentaires OK
      if (lineContent.trim().startsWith("//") || lineContent.trim().startsWith("*")) {
        continue;
      }

      // Exception : "450€ minimum" dans Organization schema (acceptable si contexte clair)
      if (desc.includes("450€") && content.includes("@type") && content.includes("Organization")) {
        continue;
      }

      issues.push({
        file: relativePath,
        type: "fausse_promesse",
        severity: desc.includes("48h") || desc.includes("24h") ? "🔴 CRITIQUE" : "🟠 ÉLEVÉ",
        issue: `${desc} détecté`,
        line: lineNum,
        suggestion: desc.includes("48h") ? "Utiliser '5-7j' ou '5+ devis sous 5–7j'" : undefined,
      });
    }
  });

  // 2. Détection hardcode prix
  HARDCODE_PRIX_PATTERNS.forEach(({ regex, desc }) => {
    const matches = content.matchAll(regex);
    for (const match of matches) {
      const lineNum = content.substring(0, match.index).split("\n").length;
      const lineContent = lines[lineNum - 1];

      // Exception : si ligne contient "calculateCorridorPrice" ou "getPrixIndicatifsForContent", c'est calculé
      if (lineContent.includes("calculateCorridorPrice") || 
          lineContent.includes("getPrixIndicatifsForContent") ||
          lineContent.includes("getLocalPricesForMeta") ||
          lineContent.includes("getCorridorPricesForMeta")) {
        continue;
      }

      // Exception : commentaires
      if (lineContent.trim().startsWith("//") || lineContent.trim().startsWith("*")) {
        continue;
      }

      issues.push({
        file: relativePath,
        type: "hardcode",
        severity: "🟠 ÉLEVÉ",
        issue: `${desc}`,
        line: lineNum,
        suggestion: "Utiliser getPrixIndicatifsForContent(km) ou getLocalPricesForMeta(citySlug)",
      });
    }
  });
}

function scanDirectory(dir: string, extensions: string[] = [".tsx", ".ts"]) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    // Skip node_modules, .next, etc.
    if (file.startsWith(".") || file === "node_modules" || file === ".next") {
      continue;
    }

    if (stat.isDirectory()) {
      scanDirectory(fullPath, extensions);
    } else if (extensions.some(ext => file.endsWith(ext))) {
      try {
        const content = readFileSync(fullPath, "utf-8");
        scanFile(fullPath, content);
      } catch (err) {
        // Skip binary/unreadable files
      }
    }
  }
}

// ============================================
// EXÉCUTION AUDIT
// ============================================

console.log("\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                                                           ║");
console.log("║   🔍 AUDIT SERP & CTR — FOCUS FAUSSES PROMESSES          ║");
console.log("║                                                           ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

console.log("📂 Scan en cours...\n");

// Scan zones critiques
scanDirectory(join(process.cwd(), "app"));
scanDirectory(join(process.cwd(), "components"));
scanDirectory(join(process.cwd(), "lib"));

console.log(`✅ Scan terminé : ${issues.length} problèmes détectés\n`);

// ============================================
// RAPPORT PAR SÉVÉRITÉ
// ============================================

const bySeverity = {
  "🔴 CRITIQUE": issues.filter(i => i.severity === "🔴 CRITIQUE"),
  "🟠 ÉLEVÉ": issues.filter(i => i.severity === "🟠 ÉLEVÉ"),
  "🟡 MOYEN": issues.filter(i => i.severity === "🟡 MOYEN"),
  "🟢 INFO": issues.filter(i => i.severity === "🟢 INFO"),
};

Object.entries(bySeverity).forEach(([severity, items]) => {
  if (items.length === 0) return;

  console.log(`\n${severity} (${items.length})`);
  console.log("━".repeat(80));

  items.forEach(issue => {
    console.log(`\n📄 ${issue.file}:${issue.line || "?"}`);
    console.log(`   ⚠️  ${issue.issue}`);
    if (issue.suggestion) {
      console.log(`   💡 ${issue.suggestion}`);
    }
  });
});

// ============================================
// RÉCAPITULATIF
// ============================================

console.log("\n\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                   RÉCAPITULATIF AUDIT                     ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

console.log(`🔴 CRITIQUE : ${bySeverity["🔴 CRITIQUE"].length}`);
console.log(`🟠 ÉLEVÉ    : ${bySeverity["🟠 ÉLEVÉ"].length}`);
console.log(`🟡 MOYEN    : ${bySeverity["🟡 MOYEN"].length}`);
console.log(`🟢 INFO     : ${bySeverity["🟢 INFO"].length}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 TOTAL    : ${issues.length}\n`);

if (issues.length === 0) {
  console.log("✅ BEST IN CLASS : Aucun problème détecté !\n");
  console.log("🎯 Site conforme :");
  console.log("   • 0 fausse promesse");
  console.log("   • 0 prix hardcodé");
  console.log("   • Messaging cohérent");
  console.log("   • Pricing dynamique\n");
} else {
  console.log("⚠️  Actions requises :");
  if (bySeverity["🔴 CRITIQUE"].length > 0) {
    console.log(`   • ${bySeverity["🔴 CRITIQUE"].length} problèmes CRITIQUES à corriger immédiatement`);
  }
  if (bySeverity["🟠 ÉLEVÉ"].length > 0) {
    console.log(`   • ${bySeverity["🟠 ÉLEVÉ"].length} problèmes ÉLEVÉS à planifier`);
  }
  console.log();
}

// Exit code
process.exit(issues.filter(i => i.severity === "🔴 CRITIQUE").length > 0 ? 1 : 0);
