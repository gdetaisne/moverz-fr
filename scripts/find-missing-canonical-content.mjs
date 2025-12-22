#!/usr/bin/env node

/**
 * Script pour identifier les articles qui n'ont pas de contenu canonique
 * Compare blog-data.ts (1005 articles) avec blog-canonique.ts (364 articles)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importer les données
const blogDataPath = path.join(__dirname, '../lib/blog-data.ts');
const blogCanoniquePath = path.join(__dirname, '../lib/blog-canonique.ts');

console.log('🔍 Analyse des articles manquants...\n');

// Extraire les slugs de blog-data.ts
const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');
const blogDataSlugs = [...blogDataContent.matchAll(/slug:\s*['"](.*?)['"]/g)].map(m => m[1]);

// Extraire les slugs de blog-canonique.ts
const blogCanoniqueContent = fs.readFileSync(blogCanoniquePath, 'utf-8');
// blog-canonique.ts contient de gros template literals (body) : on cible uniquement les slugs des objets canoniques
const canonicalSlugs = [
  ...blogCanoniqueContent.matchAll(/\{\s*\n\s*slug:\s*"([^"]+)"/g)
].map((m) => m[1]);

// Identifier les manquants
const canonicalSet = new Set(canonicalSlugs);
const missingSlugs = blogDataSlugs.filter((slug) => !canonicalSet.has(slug));

console.log(`📊 Statistiques :`);
console.log(`  - Total articles blog-data : ${blogDataSlugs.length}`);
console.log(`  - Articles avec contenu canonique : ${canonicalSlugs.length}`);
console.log(`  - Articles MANQUANTS : ${missingSlugs.length}`);
console.log('');

// Analyser par catégorie/ville
const byCity = {};
const byCategory = {};

missingSlugs.forEach(slug => {
  // Détecter la ville
  const cities = ['marseille', 'lyon', 'bordeaux', 'lille', 'nice', 'toulouse', 
                  'strasbourg', 'nantes', 'rennes', 'rouen', 'montpellier'];
  const city = cities.find(c => slug.includes(c)) || 'autre';
  
  byCity[city] = (byCity[city] || 0) + 1;
  
  // Détecter le type
  let type = 'autre';
  if (slug.includes('prix') || slug.includes('tarif') || slug.includes('cout')) {
    type = 'prix';
  } else if (slug.includes('checklist') || slug.includes('guide') || slug.includes('conseils')) {
    type = 'guide';
  } else if (slug.includes('demenageur') || slug.includes('entreprise')) {
    type = 'annuaire';
  }
  
  byCategory[type] = (byCategory[type] || 0) + 1;
});

console.log('📍 Répartition par ville :');
Object.entries(byCity).sort((a, b) => b[1] - a[1]).forEach(([city, count]) => {
  console.log(`  - ${city.padEnd(15)} : ${count} articles`);
});

console.log('\n📂 Répartition par type :');
Object.entries(byCategory).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`  - ${type.padEnd(15)} : ${count} articles`);
});

// Générer le CSV pour export
const csvPath = path.join(__dirname, '../ARTICLES-MANQUANTS.csv');
const csvContent = [
  'slug,city,type',
  ...missingSlugs.map(slug => {
    const cities = ['marseille', 'lyon', 'bordeaux', 'lille', 'nice', 'toulouse', 
                    'strasbourg', 'nantes', 'rennes', 'rouen', 'montpellier'];
    const city = cities.find(c => slug.includes(c)) || 'autre';
    
    let type = 'autre';
    if (slug.includes('prix') || slug.includes('tarif') || slug.includes('cout')) {
      type = 'prix';
    } else if (slug.includes('checklist') || slug.includes('guide') || slug.includes('conseils')) {
      type = 'guide';
    } else if (slug.includes('demenageur') || slug.includes('entreprise')) {
      type = 'annuaire';
    }
    
    return `${slug},${city},${type}`;
  })
].join('\n');

fs.writeFileSync(csvPath, csvContent, 'utf-8');

console.log(`\n✅ Liste exportée : ${csvPath}`);
console.log('\n💡 Prochaines étapes :');
console.log('   1. Prioriser les articles stratégiques');
console.log('   2. Générer le contenu dans moverz_main');
console.log('   3. Synchroniser vers moverz-fr');

