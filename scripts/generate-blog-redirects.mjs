#!/usr/bin/env node

/**
 * À partir de BLOG-EXPORT-WITH-MAPPING.csv, génère :
 *
 * 1) moverz_301_redirects.csv
 *    - old_url → new_url (moverz.fr) pour tous les articles migrés
 *
 * 2) BLOG-DUPLICATES-ARCHIVE.csv
 *    - archive des doublons : anciennes URLs non canoniques + slug cible
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAPPING_PATH = path.join(__dirname, "..", "BLOG-EXPORT-WITH-MAPPING.csv");
const REDIRECTS_OUT = path.join(__dirname, "..", "moverz_301_redirects.csv");
const DUPLICATES_OUT = path.join(__dirname, "..", "BLOG-DUPLICATES-ARCHIVE.csv");

if (!fs.existsSync(MAPPING_PATH)) {
  console.error(`❌ Fichier introuvable : ${MAPPING_PATH}`);
  process.exit(1);
}

function parseCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function readMappingCsv() {
  const raw = fs.readFileSync(MAPPING_PATH, "utf8");
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const header = parseCsvLine(lines[0]);

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    if (cols.length === 0) continue;
    const row = {};
    header.forEach((h, idx) => {
      row[h] = cols[idx] ?? "";
    });
    rows.push(row);
  }
  return { header, rows };
}

console.log(`📄 Lecture de ${MAPPING_PATH}...`);
const { rows } = readMappingCsv();
console.log(`➡️  ${rows.length} lignes de mapping (old_url → new_url).`);

// 1) Fichier redirects : toutes les anciennes URLs qui pointent vers moverz.fr
const redirectLines = ["old_url,new_url"];

for (const row of rows) {
  const oldUrl = row.old_url;
  const newUrl = row.new_url;
  if (!oldUrl || !newUrl) continue;
  redirectLines.push(`${oldUrl},${newUrl}`);
}

fs.writeFileSync(REDIRECTS_OUT, redirectLines.join("\n"), "utf8");
console.log(`💾 Fichier de redirections généré : ${REDIRECTS_OUT}`);

// 2) Archive des doublons : lignes non canoniques (keep_as_is = FALSE)
const duplicateRows = rows.filter(
  (row) => (row.keep_as_is || "").toString().toUpperCase() === "FALSE"
);

const duplicateLines = [
  "source_domain,old_url,title,new_slug,merge_into_slug,new_url",
];

for (const row of duplicateRows) {
  duplicateLines.push(
    [
      row.source_domain || "",
      row.old_url || "",
      row.title || "",
      row.new_slug || "",
      row.merge_into_slug || "",
      row.new_url || "",
    ]
      .map((value) => {
        const str = value == null ? "" : String(value);
        return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
      })
      .join(",")
  );
}

fs.writeFileSync(DUPLICATES_OUT, duplicateLines.join("\n"), "utf8");
console.log(
  `💾 Archive des doublons générée : ${DUPLICATES_OUT} (${duplicateRows.length} lignes).`
);


