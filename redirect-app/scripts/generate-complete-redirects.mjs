#!/usr/bin/env node

/**
 * Script pour générer TOUTES les redirections 301 pour les 7 villes
 * Lit cityData et génère le code complet pour next.config.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import cityData depuis moverz-fr
const cityDataPath = path.join(__dirname, '../../lib/cityData.ts');
if (!fs.existsSync(cityDataPath)) {
  console.error('❌ cityData.ts introuvable. Assure-toi que moverz-fr est au même niveau.');
  process.exit(1);
}

// Mapping des villes → domaines
const CITY_DOMAINS = {
  'nice': 'devis-demenageur-nice.fr',
  'toulouse': 'devis-demenageur-toulousain.fr',
  'strasbourg': 'devis-demenageur-strasbourg.fr',
  'nantes': 'devis-demenageur-nantes.fr',
  'rennes': 'devis-demenageur-rennes.fr',
  'rouen': 'devis-demenageur-rouen.fr',
  'montpellier': 'devis-demenageur-montpellier.fr',
};

// Parse cityData.ts (très basique, on extrait juste les slugs)
const cityDataContent = fs.readFileSync(cityDataPath, 'utf-8');

// Extraire cityData object (regex simple pour démo)
const cityDataMatch = cityDataContent.match(/export const cityData: Record<string, CityData> = ({[\s\S]*?});/);
if (!cityDataMatch) {
  console.error('❌ Impossible de parser cityData.ts');
  process.exit(1);
}

// Pour simplifier, on va hardcoder les données qu'on connaît déjà
const CITIES_DATA = {
  'nantes': {
    domain: 'devis-demenageur-nantes.fr',
    neighborhoods: ['bouffay', 'ile-de-nantes', 'doulon', 'beaujoire', 'hauts-paves'],
    corridors: ['nantes-vers-paris', 'nantes-vers-bordeaux', 'nantes-vers-rennes', 'nantes-vers-lyon', 'nantes-vers-la-baule'],
  },
  'rennes': {
    domain: 'devis-demenageur-rennes.fr',
    neighborhoods: ['centre', 'thabor', 'maurepas', 'villejean', 'cleunay'],
    corridors: ['rennes-vers-paris', 'rennes-vers-nantes', 'rennes-vers-brest', 'rennes-vers-saint-malo', 'rennes-vers-angers'],
  },
  'rouen': {
    domain: 'devis-demenageur-rouen.fr',
    neighborhoods: ['centre-historique', 'saint-sever', 'grammont', 'sapins', 'madrillet'],
    corridors: ['rouen-vers-paris', 'rouen-vers-le-havre', 'rouen-vers-caen', 'rouen-vers-amiens', 'rouen-vers-lille'],
  },
  'montpellier': {
    domain: 'devis-demenageur-montpellier.fr',
    neighborhoods: ['ecusson', 'antigone', 'pres-arenes', 'beaux-arts', 'port-marianne'],
    corridors: ['montpellier-vers-paris', 'montpellier-vers-lyon', 'montpellier-vers-marseille', 'montpellier-vers-toulouse'],
  },
};

function generateRedirectsForCity(citySlug, cityData) {
  const { domain, neighborhoods, corridors } = cityData;
  const lines = [];

  lines.push(`      // ============================================`);
  lines.push(`      // ${citySlug.toUpperCase()} (${domain})`);
  lines.push(`      // ============================================`);
  
  // Home
  lines.push(`      {`);
  lines.push(`        source: '/',`);
  lines.push(`        destination: 'https://moverz.fr/demenagement/${citySlug}/',`);
  lines.push(`        permanent: true,`);
  lines.push(`        has: [{ type: 'host', value: '${domain}' }],`);
  lines.push(`      },`);
  
  // Hub quartiers
  lines.push(`      { source: '/quartiers-${citySlug}', destination: 'https://moverz.fr/quartiers-${citySlug}/', permanent: true, has: [{ type: 'host', value: '${domain}' }] },`);
  lines.push(`      { source: '/quartiers-${citySlug}/', destination: 'https://moverz.fr/quartiers-${citySlug}/', permanent: true, has: [{ type: 'host', value: '${domain}' }] },`);
  
  // Quartiers
  neighborhoods.forEach(n => {
    lines.push(`      { source: '/${n}', destination: 'https://moverz.fr/${citySlug}/${n}/', permanent: true, has: [{ type: 'host', value: '${domain}' }] },`);
    lines.push(`      { source: '/${n}/', destination: 'https://moverz.fr/${citySlug}/${n}/', permanent: true, has: [{ type: 'host', value: '${domain}' }] },`);
  });
  
  // Corridors
  corridors.forEach(c => {
    lines.push(`      { source: '/${c}', destination: 'https://moverz.fr/${c}/', permanent: true, has: [{ type: 'host', value: '${domain}' }] },`);
    lines.push(`      { source: '/${c}/', destination: 'https://moverz.fr/${c}/', permanent: true, has: [{ type: 'host', value: '${domain}' }] },`);
  });
  
  // Blog
  lines.push(`      {`);
  lines.push(`        source: '/blog/:path*',`);
  lines.push(`        destination: 'https://moverz.fr/blog/:path*/',`);
  lines.push(`        permanent: true,`);
  lines.push(`        has: [{ type: 'host', value: '${domain}' }],`);
  lines.push(`      },`);
  lines.push(``);

  return lines.join('\n');
}

console.log('🚀 Génération des redirections complètes pour Nantes, Rennes, Rouen, Montpellier...\n');

let output = '';

Object.entries(CITIES_DATA).forEach(([citySlug, cityData]) => {
  output += generateRedirectsForCity(citySlug, cityData);
});

console.log('📋 Code généré (à copier dans next.config.mjs) :\n');
console.log('---\n');
console.log(output);
console.log('---\n');

// Optionnel : écrire dans un fichier
const outputPath = path.join(__dirname, '../generated-redirects.txt');
fs.writeFileSync(outputPath, output, 'utf-8');
console.log(`✅ Fichier généré : ${outputPath}`);
console.log('\n💡 Copie ce code dans next.config.mjs après les redirections de Strasbourg.');


