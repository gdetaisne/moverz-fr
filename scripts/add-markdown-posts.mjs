#!/usr/bin/env node
/**
 * Script pour ajouter automatiquement les articles markdown manquants dans blog-nouveaux-2026.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../content/blog');
const MISSING_SLUGS = [
  'demenager-piano-prix-contraintes-guide-2026',
  'top-10-demenageurs-france-2026',
  'checklist-demenagement-30-jours',
  'demenagement-sans-harcelement-protection-vie-privee',
  'choisir-demenageur-piano-7-criteres-2026',
  'case-study-marie-paris-lyon'
];

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error('No frontmatter found');
  }
  
  const frontmatter = {};
  const frontmatterLines = match[1].split('\n');
  
  for (const line of frontmatterLines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      // Remove quotes if present
      value = value.replace(/^["'](.*)["']$/, '$1');
      frontmatter[key.trim()] = value;
    }
  }
  
  const body = match[2].trim();
  
  return { frontmatter, body };
}

function escapeBackticks(str) {
  // Escape backticks for template literal
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function generateTypeScriptEntry(slug, frontmatter, body) {
  const title = frontmatter.title || slug;
  const description = frontmatter.description || '';
  const type = frontmatter.type || 'pilier';
  
  return `  {
    slug: "${slug}",
    title: "${title}",
    description: "${description}",
    type: "${type}",
    body: \`${escapeBackticks(body)}\`
  }`;
}

console.log('🔍 Recherche des articles markdown manquants...\n');

const entries = [];

for (const slug of MISSING_SLUGS) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier non trouvé: ${slug}.md`);
    continue;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    
    console.log(`✅ ${slug}`);
    console.log(`   Titre: ${frontmatter.title}`);
    console.log(`   Lignes: ${body.split('\n').length}\n`);
    
    entries.push(generateTypeScriptEntry(slug, frontmatter, body));
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${slug}:`, error.message);
  }
}

console.log('\n📝 Code TypeScript à ajouter dans lib/blog-nouveaux-2026.ts:\n');
console.log('// ============================================');
console.log('// ARTICLES AJOUTÉS AUTOMATIQUEMENT');
console.log('// ============================================');
console.log(entries.join(',\n\n'));
console.log('\n✨ Terminé!');
