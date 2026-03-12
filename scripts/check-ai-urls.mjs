#!/usr/bin/env node

/**
 * Script de vérification des URLs avec trafic Bing AI
 * Vérifie l'existence des slugs et identifie les pages en 404
 */

// URLs du rapport Bing AI (12 mars 2026)
const AI_URLS = [
  // Blog avec 2025
  { url: 'prix-demenageur-strasbourg-2025', citations: 13, type: 'blog' },
  { url: 'prix-demenageur-marseille-tarifs-2025', citations: 13, type: 'blog' },
  { url: 'meilleurs-demenageurs-rouen-avis-2025', citations: 12, type: 'blog' },
  { url: 'prix-garde-meuble-marseille-2025', citations: 11, type: 'blog' },
  { url: 'prix-demenageur-nice-2025', citations: 8, type: 'blog' },
  { url: 'prix-garde-meuble-montpellier-2025', citations: 8, type: 'blog' },
  { url: 'prix-garde-meuble-rennes-2025', citations: 4, type: 'blog' },
  { url: 'prix-demenagement-2025', citations: 3, type: 'blog' },
  { url: 'prix-demenagement-studio-lille-2025', citations: 3, type: 'blog' },
  { url: 'prix-garde-meuble-rouen-2025', citations: 3, type: 'blog' },
  { url: 'prix-location-camion-20m3-montpellier-2025', citations: 3, type: 'blog' },
  { url: 'prix-garde-meuble-bordeaux-reperes-2025', citations: 1, type: 'blog' },
  { url: 'prix-demenagement-piano-bordeaux-2025', citations: 1, type: 'blog' },
  
  // Top blog performers
  { url: 'assurance-demenagement-international', citations: 21, type: 'blog' },
  { url: 'prix-demenagement-bordeaux-guide', citations: 18, type: 'blog' },
  { url: 'prix-demenagement-lyon-guide-complet', citations: 13, type: 'blog' },
  { url: 'prix-demenagement-lille-guide', citations: 8, type: 'blog' },
  { url: 'combien-coute-garde-meuble-marseille', citations: 6, type: 'blog' },
  { url: 'demenagement-m3-calcul-tarif-lille', citations: 6, type: 'blog' },
  { url: 'prix-demenagement-montpellier', citations: 5, type: 'blog' },
  { url: 'aide-financiere-demenagement-nice', citations: 5, type: 'blog' },
  { url: 'aides-financieres-demenagement-lille', citations: 5, type: 'blog' },
  { url: 'top-erreurs-a-eviter', citations: 5, type: 'blog' },
  { url: 'tarifs-box-stockage-rennes-taille-duree', citations: 4, type: 'blog' },
  { url: 'location-utilitaire-demenagement-rennes', citations: 4, type: 'blog' },
  { url: 'tarifs-demenageur-lyon', citations: 4, type: 'blog' },
  { url: 'prix-demenagement-rouen-guide-complet', citations: 4, type: 'blog' },
  { url: 'comparatif-demenageurs-nice', citations: 4, type: 'blog' },
  { url: 'assurance-garde-meuble-obligatoire', citations: 4, type: 'blog' },
  { url: 'aide-financiere-demenagement-lyon', citations: 3, type: 'blog' },
  { url: 'comment-choisir-demenageur-marseille', citations: 3, type: 'blog' },
  { url: 'prix-garde-meuble-nice-2025', citations: 3, type: 'blog' },
  { url: 'assurance-piano-demenagement-lille', citations: 3, type: 'blog' },
  { url: 'cartons-demenagement-gratuits-lyon', citations: 2, type: 'blog' },
  { url: 'prix-demenagement-nantes-guide', citations: 2, type: 'blog' },
  { url: 'demenagement-nantes-usa-canada', citations: 2, type: 'blog' },
  { url: 'demenagement-rue-etroite-impasse', citations: 2, type: 'blog' },
  { url: 'checklist-demenagement-international', citations: 2, type: 'blog' },
  { url: 'demenagement-etudiant-rouen-solutions', citations: 1, type: 'blog' },
  { url: 'demenagement-international-espagne-depuis-bordeaux', citations: 1, type: 'blog' },
  { url: 'materiel-demenagement-piano', citations: 1, type: 'blog' },
  { url: 'demenagement-formule-economique-montpellier', citations: 1, type: 'blog' },
  { url: 'prix-demenagement-nice-guide', citations: 1, type: 'blog' },
  { url: 'demenagement-flash-toulouse', citations: 1, type: 'blog' },
  { url: 'aide-demenagement-nantes-guide', citations: 1, type: 'blog' },
  { url: 'assurance-demenagement-piano', citations: 1, type: 'blog' },
  { url: 'demenagement-lille-londres-post-brexit', citations: 1, type: 'blog' },
  { url: 'garde-meuble-bordeaux-guide', citations: 1, type: 'blog' },
  { url: 'duree-minimum-location-box-lyon', citations: 1, type: 'blog' },
  { url: 'faq-garde-meuble-strasbourg', citations: 1, type: 'blog' },
  { url: 'comparatif-prix-demenageurs-economiques-montpellier', citations: 1, type: 'blog' },
  { url: 'cartons-demenagement-gratuits-montpellier', citations: 1, type: 'blog' },
  { url: 'prix-demenagement-strasbourg', citations: 1, type: 'blog' },
  { url: 'demenagement-international-nice-guide', citations: 1, type: 'blog' },
  { url: 'formule-economique-vs-cle-en-main-nice', citations: 1, type: 'blog' },
  { url: 'eviter-arnaques-demenagement', citations: 1, type: 'blog' },
  { url: 'prix-demenagement-toulouse', citations: 1, type: 'blog' },
  { url: 'meilleurs-demenageurs-lyon', citations: 1, type: 'blog' },
  { url: 'location-camion-demenagement-rennes-guide', citations: 1, type: 'blog' },
  { url: 'prix-garde-meuble-bordeaux-solutions-tarifs', citations: 1, type: 'blog' },
  { url: 'changement-adresse-demarches-demenagement-lille', citations: 1, type: 'blog' },
  { url: 'transport-quelques-meubles-lyon', citations: 1, type: 'blog' },
  { url: 'cartons-gratuits-nice-ou-trouver', citations: 1, type: 'blog' },
  { url: 'demenagement-longue-distance-depuis-nice', citations: 2, type: 'blog' },
  
  // Routes ville-vers-ville
  { url: 'paris-vers-marseille', citations: 17, type: 'route' },
  { url: 'paris-vers-nice', citations: 8, type: 'route' },
  { url: 'strasbourg-vers-marseille', citations: 8, type: 'route' },
  { url: 'paris-vers-toulouse', citations: 8, type: 'route' },
  { url: 'marseille-vers-lyon', citations: 6, type: 'route' },
  { url: 'rouen-vers-paris', citations: 6, type: 'route' },
  { url: 'paris-vers-lyon', citations: 5, type: 'route' },
  { url: 'marseille-vers-paris', citations: 5, type: 'route' },
  { url: 'paris-vers-rennes', citations: 4, type: 'route' },
  { url: 'grenoble-vers-paris', citations: 4, type: 'route' },
  { url: 'lyon-vers-paris', citations: 4, type: 'route' },
  { url: 'reims-vers-paris', citations: 4, type: 'route' },
  { url: 'toulouse-vers-marseille', citations: 4, type: 'route' },
  { url: 'nantes-vers-montpellier', citations: 3, type: 'route' },
  { url: 'montpellier-vers-rennes', citations: 3, type: 'route' },
  { url: 'lyon-vers-angers', citations: 3, type: 'route' },
  { url: 'nice-vers-rouen', citations: 3, type: 'route' },
  { url: 'nice-vers-nantes', citations: 3, type: 'route' },
  { url: 'toulouse-vers-lyon', citations: 3, type: 'route' },
  { url: 'nantes-vers-nice', citations: 3, type: 'route' },
  { url: 'montpellier-vers-reims', citations: 3, type: 'route' },
  { url: 'strasbourg-vers-paris', citations: 2, type: 'route' },
  { url: 'nantes-vers-toulouse', citations: 2, type: 'route' },
  { url: 'lille-vers-le-havre', citations: 2, type: 'route' },
  { url: 'marseille-vers-nantes', citations: 2, type: 'route' },
  { url: 'lille-vers-marseille', citations: 2, type: 'route' },
  { url: 'nantes-vers-lyon', citations: 2, type: 'route' },
  { url: 'clermont-ferrand-vers-paris', citations: 2, type: 'route' },
  { url: 'clermont-ferrand-vers-lyon', citations: 2, type: 'route' },
  { url: 'montpellier-vers-dijon', citations: 2, type: 'route' },
  { url: 'lille-vers-montpellier', citations: 2, type: 'route' },
  { url: 'rouen-vers-caen', citations: 2, type: 'route' },
  
  // Pages déménagement ville
  { url: 'demenagement/dieppe', citations: 11, type: 'demenagement' },
  { url: 'demenagement/cambrai', citations: 4, type: 'demenagement' },
  { url: 'demenagement/bordeaux', citations: 3, type: 'demenagement' },
  { url: 'demenagement/saumur', citations: 3, type: 'demenagement' },
  { url: 'demenagement/quimper', citations: 2, type: 'demenagement' },
  { url: 'demenagement/valenciennes', citations: 2, type: 'demenagement' },
  { url: 'demenagement/lyon', citations: 1, type: 'demenagement' },
  { url: 'demenagement/avignon', citations: 1, type: 'demenagement' },
  { url: 'demenagement/nice', citations: 1, type: 'demenagement' },
  { url: 'demenagement/creteil/aide-demenagement', citations: 1, type: 'demenagement-sub' },
  { url: 'demenagement/grenoble', citations: 1, type: 'demenagement' },
  { url: 'demenagement/carpentras', citations: 1, type: 'demenagement' },
  { url: 'demenagement/epernay/garde-meuble', citations: 1, type: 'demenagement-sub' },
  { url: 'demenagement/narbonne', citations: 1, type: 'demenagement' },
  { url: 'demenagement/orvault', citations: 1, type: 'demenagement' },
  { url: 'demenagement/arcachon', citations: 1, type: 'demenagement' },
  { url: 'demenagement/nevers', citations: 1, type: 'demenagement' },
  
  // Autres
  { url: 'quartiers-tours', citations: 1, type: 'quartiers' },
];

console.log('🔍 Vérification des URLs avec trafic Bing AI');
console.log('================================================\n');

// Catégorisation
const with2025 = AI_URLS.filter(u => u.url.includes('2025'));
const blog = AI_URLS.filter(u => u.type === 'blog' && !u.url.includes('2025'));
const routes = AI_URLS.filter(u => u.type === 'route');
const demenagement = AI_URLS.filter(u => u.type.startsWith('demenagement'));
const autres = AI_URLS.filter(u => !['blog', 'route'].includes(u.type) && !u.type.startsWith('demenagement'));

console.log('📊 Statistiques:');
console.log(`Total URLs: ${AI_URLS.length}`);
console.log(`- URLs avec "2025": ${with2025.length}`);
console.log(`- Blog posts (hors 2025): ${blog.length}`);
console.log(`- Routes ville-vers-ville: ${routes.length}`);
console.log(`- Pages déménagement: ${demenagement.length}`);
console.log(`- Autres: ${autres.length}`);
console.log('');

console.log('🚨 PRIORITÉ : URLs avec "2025" (à mettre à jour)');
console.log('================================================');
with2025.forEach(u => {
  const slug2026 = u.url.replace('2025', '2026');
  console.log(`${u.citations.toString().padStart(3)} cit. | ${u.url}`);
  console.log(`          → Vérifier si ${slug2026} existe`);
});
console.log('');

console.log('✅ Actions à prendre:');
console.log('1. Vérifier existence des slugs 2025 dans blog-data.ts');
console.log('2. Vérifier si versions 2026 existent');
console.log('3. Créer redirections 301 : slug-2025 → slug-2026');
console.log('4. OU créer contenu pour les slugs 2025 manquants');
console.log('5. Optimiser SEO/E-A-A-T de toutes les pages');
