#!/usr/bin/env tsx
/**
 * Audit SERP & CTR - Focus META UNIQUEMENT (pas contenu)
 * 
 * Vérifie les metadata (title, description) pour:
 * - Fausses promesses (48h, 24h, etc.)
 * - Prix hardcodés
 * - Cohérence
 * 
 * Exclut: Contenu blog, props, etc.
 * 
 * Exécution : npx tsx scripts/audit-serp-meta-only.ts
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

interface AuditIssue {
  page: string;
  type: "Header" | "Villes" | "Corridors" | "Blog" | "Services" | "Autre";
  file: string;
  severity: "🔴 CRITIQUE" | "🟠 ÉLEVÉ" | "🟡 INFO";
  issue: string;
  line?: number;
  context?: string;
}

const issues: AuditIssue[] = [];

// Patterns à détecter UNIQUEMENT dans metadata
const META_FAUSSE_PROMESSE = [
  { regex: /(title|description)[^\n]{0,200}48\s*h/gi, desc: "Délai 48h dans meta (faux, réel = 5-7j)" },
  { regex: /(title|description)[^\n]{0,200}24\s*h/gi, desc: "Délai 24h dans meta (faux)" },
  { regex: /(title|description)[^\n]{0,200}3\s*devis/gi, desc: "3 devis dans meta (obsolète, actuel = 5+)" },
];

const PRIX_HARDCODE_META = [
  { regex: /(title|description)[^\n]{0,200}450\s*€/gi, desc: "Prix 450€ hardcodé dans meta" },
  { regex: /(title|description)[^\n]{0,200}dès\s*\d{3,4}\s*€/gi, desc: "Prix fixe hardcodé dans meta" },
];

function determinePageType(filePath: string): AuditIssue["type"] {
  if (filePath.includes("/app/page.tsx") || filePath.includes("/app/layout.tsx")) return "Header";
  if (filePath.includes("/app/demenagement/") && !filePath.includes("-vers-")) return "Villes";
  if (filePath.includes("-vers-") || filePath.includes("/corridor/")) return "Corridors";
  if (filePath.includes("/blog/")) return "Blog";
  if (filePath.includes("/lib/service-pages")) return "Services";
  return "Autre";
}

function scanMetadata(filePath: string, content: string) {
  const relativePath = filePath.replace(process.cwd(), "");
  const lines = content.split("\n");

  // Chercher uniquement exports metadata ou generateMetadata
  const metadataRegex = /export\s+(const\s+metadata|function\s+\w*[Mm]etadata)/g;
  const matches = content.matchAll(metadataRegex);
  
  const metadataBlocks: { start: number; end: number }[] = [];
  
  for (const match of matches) {
    const startIdx = match.index!;
    const startLine = content.substring(0, startIdx).split("\n").length;
    
    // Trouver la fin du bloc (}) ou return
    let endLine = startLine + 50; // Max 50 lignes de metadata
    for (let i = startLine; i < Math.min(startLine + 100, lines.length); i++) {
      if (lines[i].match(/^}\s*;?\s*$/) || lines[i].match(/^\s*return\s+getFullMetadata/)) {
        endLine = i + 1;
        break;
      }
    }
    
    metadataBlocks.push({ start: startLine, end: endLine });
  }

  // Si pas de bloc metadata trouvé, skip
  if (metadataBlocks.length === 0) return;

  // Scanner uniquement les blocs metadata
  metadataBlocks.forEach(({ start, end }) => {
    const metaContent = lines.slice(start - 1, end).join("\n");
    
    // Vérifier fausses promesses
    META_FAUSSE_PROMESSE.forEach(({ regex, desc }) => {
      const metaMatches = metaContent.matchAll(regex);
      for (const match of metaMatches) {
        const lineInBlock = metaContent.substring(0, match.index).split("\n").length;
        const absoluteLine = start + lineInBlock - 1;
        
        issues.push({
          page: determinePageType(filePath),
          type: determinePageType(filePath),
          file: relativePath,
          severity: desc.includes("48h") || desc.includes("24h") ? "🔴 CRITIQUE" : "🟠 ÉLEVÉ",
          issue: desc,
          line: absoluteLine,
          context: lines[absoluteLine - 1]?.trim().substring(0, 80),
        });
      }
    });

    // Vérifier prix hardcodés
    PRIX_HARDCODE_META.forEach(({ regex, desc }) => {
      const metaMatches = metaContent.matchAll(regex);
      for (const match of metaMatches) {
        // Exception : si contient "dès ${prices.t1}" ou "getLocalPricesForMeta", c'est calculé
        const matchContext = metaContent.substring(Math.max(0, match.index! - 100), match.index! + 100);
        if (matchContext.includes("${prices") || 
            matchContext.includes("getLocalPricesForMeta") ||
            matchContext.includes("getCorridorPricesForMeta")) {
          continue;
        }

        const lineInBlock = metaContent.substring(0, match.index).split("\n").length;
        const absoluteLine = start + lineInBlock - 1;

        issues.push({
          page: determinePageType(filePath),
          type: determinePageType(filePath),
          file: relativePath,
          severity: "🟠 ÉLEVÉ",
          issue: desc,
          line: absoluteLine,
          context: lines[absoluteLine - 1]?.trim().substring(0, 80),
        });
      }
    });
  });
}

function scanDirectory(dir: string, extensions: string[] = [".tsx", ".ts"]) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (file.startsWith(".") || file === "node_modules" || file === ".next" || file === "lib/blog-canonique.ts") {
      continue; // Skip blog content
    }

    if (stat.isDirectory()) {
      scanDirectory(fullPath, extensions);
    } else if (extensions.some(ext => file.endsWith(ext))) {
      try {
        const content = readFileSync(fullPath, "utf-8");
        scanMetadata(fullPath, content);
      } catch (err) {
        // Skip
      }
    }
  }
}

// ============================================
// EXÉCUTION AUDIT
// ============================================

console.log("\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                                                           ║");
console.log("║   🔍 AUDIT SERP — META UNIQUEMENT (FOCUS CTR)            ║");
console.log("║                                                           ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

console.log("📂 Scan pages header, villes, corridors, blog (meta only)...\n");

scanDirectory(join(process.cwd(), "app"));
scanDirectory(join(process.cwd(), "lib"));
scanDirectory(join(process.cwd(), "components/templates"));

console.log(`✅ Scan terminé : ${issues.length} problèmes META détectés\n`);

// ============================================
// RAPPORT PAR TYPE DE PAGE
// ============================================

const byType: Record<string, AuditIssue[]> = {
  "Header": [],
  "Villes": [],
  "Corridors": [],
  "Blog": [],
  "Services": [],
  "Autre": [],
};

issues.forEach(issue => {
  byType[issue.type].push(issue);
});

console.log("\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                RÉSULTATS PAR TYPE DE PAGE                 ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

Object.entries(byType).forEach(([type, items]) => {
  if (items.length === 0) {
    console.log(`✅ ${type.padEnd(15)} : 0 problème`);
    return;
  }

  const critiques = items.filter(i => i.severity === "🔴 CRITIQUE").length;
  const eleves = items.filter(i => i.severity === "🟠 ÉLEVÉ").length;
  
  console.log(`\n⚠️  ${type.toUpperCase()} (${items.length})`);
  console.log("━".repeat(80));
  console.log(`   🔴 Critiques : ${critiques}  |  🟠 Élevés : ${eleves}\n`);

  // Afficher max 5 exemples
  items.slice(0, 5).forEach(issue => {
    console.log(`   📄 ${issue.file}:${issue.line || "?"}`);
    console.log(`      ${issue.severity} ${issue.issue}`);
    if (issue.context) {
      console.log(`      💬 "${issue.context}"`);
    }
    console.log();
  });

  if (items.length > 5) {
    console.log(`   ... et ${items.length - 5} autres problèmes\n`);
  }
});

// ============================================
// RÉCAPITULATIF FINAL
// ============================================

console.log("\n\n╔═══════════════════════════════════════════════════════════╗");
console.log("║                   RÉCAPITULATIF FINAL                     ║");
console.log("╚═══════════════════════════════════════════════════════════╝\n");

const critiquesTotal = issues.filter(i => i.severity === "🔴 CRITIQUE").length;
const elevesTotal = issues.filter(i => i.severity === "🟠 ÉLEVÉ").length;

console.log(`🔴 CRITIQUE (Meta) : ${critiquesTotal}`);
console.log(`🟠 ÉLEVÉ (Meta)    : ${elevesTotal}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 TOTAL META      : ${issues.length}\n`);

if (issues.length === 0) {
  console.log("🎉 BEST IN CLASS : Toutes les META sont propres !\n");
  console.log("✅ Pages header    : 0 problème");
  console.log("✅ Pages villes    : 0 problème");
  console.log("✅ Pages corridors : 0 problème");
  console.log("✅ Pages blog      : 0 problème\n");
} else {
  console.log("📋 Actions prioritaires :\n");
  if (critiquesTotal > 0) {
    console.log(`   1. Corriger ${critiquesTotal} fausses promesses CRITIQUES (48h/24h)`);
  }
  if (elevesTotal > 0) {
    console.log(`   2. Remplacer ${elevesTotal} prix/messaging hardcodés ÉLEVÉS`);
  }
  console.log();
}

// Exit code
process.exit(critiquesTotal > 0 ? 1 : 0);
