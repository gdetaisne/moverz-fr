#!/usr/bin/env node

/**
 * Vérifie l'existence du contenu canonique pour chaque slug du rapport AI
 */

import { PUBLISHED_BLOG_POSTS, getCanonicalBodyBySlug } from '../lib/blog.ts';

const HIGH_PRIORITY_SLUGS = [
  'assurance-demenagement-international', // 21 citations
  'prix-demenagement-bordeaux-guide', // 18
  'prix-demenagement-lyon-guide-complet', // 13
  'prix-demenagement-lille-guide', // 8
  'combien-coute-garde-meuble-marseille', // 6
  'demenagement-m3-calcul-tarif-lille', // 6
  'prix-demenagement-montpellier', // 5
  'aide-financiere-demenagement-nice', // 5
  'aides-financieres-demenagement-lille', // 5
  'top-erreurs-a-eviter', // 5
  'tarifs-box-stockage-rennes-taille-duree', // 4
  'location-utilitaire-demenagement-rennes', // 4
  'tarifs-demenageur-lyon', // 4
  'prix-demenagement-rouen-guide-complet', // 4
  'comparatif-demenageurs-nice', // 4
  'assurance-garde-meuble-obligatoire', // 4
];

console.log('🔍 Vérification contenu canonique des top performers\n');

for (const slug of HIGH_PRIORITY_SLUGS) {
  const body = getCanonicalBodyBySlug(slug);
  const hasContent = body && body.length > 100;
  const status = hasContent ? '✅ HAS CONTENT' : '❌ NO CONTENT (404 or placeholder)';
  console.log(`${status} | ${slug}`);
}
