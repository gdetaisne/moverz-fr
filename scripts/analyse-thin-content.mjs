#!/usr/bin/env node

/**
 * Analyse le fichier moverz_clean_articles.csv pour identifier :
 * - les contenus "thin" < 350 mots
 * - les contenus 350–700 mots
 *
 * Génère deux fichiers :
 * - BLOG-THIN-CONTENT.csv
 * - BLOG-MIDRANGE-CONTENT.csv
 *
 * Ces fichiers serviront de base aux tâches :
 * - P1-SEO-THIN-ANALYSE
 * - P1-SEO-MIDRANGE-OPTIM
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSV_PATH = path.join(__dirname, "..", "moverz_clean_articles.csv");
const THIN_OUT = path.join(__dirname, "..", "BLOG-THIN-CONTENT.csv");
const MID_OUT = path.join(__dirname, "..", "BLOG-MIDRANGE-CONTENT.csv");

if (!fs.existsSync(CSV_PATH)) {
  console.error(`❌ Fichier introuvable : ${CSV_PATH}`);
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

function readCleanCsv() {
  const raw = fs.readFileSync(CSV_PATH, "utf8");
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
  return rows;
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

console.log(`📄 Lecture de ${CSV_PATH}...`);
const rows = readCleanCsv();
console.log(`➡️  ${rows.length} articles dans moverz_clean_articles.csv.`);

const thin = [];
const mid = [];

rows.forEach((row) => {
  const wc = toNumber(row.word_count);
  if (!wc) return;
  if (wc < 350) {
    thin.push(row);
  } else if (wc >= 350 && wc <= 700) {
    mid.push(row);
  }
});

function escape(value) {
  const str = value == null ? "" : String(value);
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function writeCsv(targetPath, data) {
  if (data.length === 0) {
    fs.writeFileSync(targetPath, "title,new_slug,new_url,word_count,city_slug\n", "utf8");
    return;
  }

  const header = Object.keys(data[0]);
  const lines = [header.join(",")];

  data.forEach((row) => {
    lines.push(header.map((key) => escape(row[key])).join(","));
  });

  fs.writeFileSync(targetPath, lines.join("\n"), "utf8");
}

writeCsv(THIN_OUT, thin);
writeCsv(MID_OUT, mid);

console.log(
  `💾 Thin content (<350 mots) : ${thin.length} articles → ${THIN_OUT}`
);
console.log(
  `💾 Contenus 350–700 mots : ${mid.length} articles → ${MID_OUT}`
);


