#!/usr/bin/env node
/**
 * Test du refactor corridors — Validation cohérence meta/contenu
 * 
 * Ce script teste que:
 * 1. Les metas se génèrent correctement (distance + prix)
 * 2. Le contenu affiché est cohérent avec les metas
 * 3. Les calculs sont identiques pour meta et contenu
 */

import { getCorridorPricesForMeta, getPrixIndicatifsForContent } from '../lib/pricing-corridors.js';
import { estimateRoadDistanceKm, formatDistance, formatDurationFromKm } from '../lib/corridors.js';

console.log('🧪 Test refactor corridors — Cohérence meta/contenu\n');
console.log('='.repeat(70));

const testCases = [
  { origin: 'nice', dest: 'paris', label: 'Nice → Paris (long)' },
  { origin: 'montpellier', dest: 'paris', label: 'Montpellier → Paris (long)' },
  { origin: 'rouen', dest: 'le-havre', label: 'Rouen → Le Havre (court)' },
  { origin: 'rennes', dest: 'nantes', label: 'Rennes → Nantes (moyen)' },
  { origin: 'nice', dest: 'monaco', label: 'Nice → Monaco (très court)' },
];

let allPass = true;

for (const testCase of testCases) {
  console.log(`\n📍 ${testCase.label}`);
  console.log('-'.repeat(70));
  
  const km = estimateRoadDistanceKm(testCase.origin, testCase.dest);
  if (!km) {
    console.log('❌ Impossible de calculer la distance');
    allPass = false;
    continue;
  }
  
  const metaPrices = getCorridorPricesForMeta(testCase.origin, testCase.dest);
  const contentPrices = getPrixIndicatifsForContent(km);
  const distance = formatDistance(km);
  const temps = formatDurationFromKm(km);
  
  console.log(`   Distance: ${distance} (${temps})`);
  console.log(`   Meta T1: ${metaPrices?.t1 || 'N/A'}`);
  console.log(`   Content T1: ${contentPrices[0].prix}`);
  console.log(`   Meta T2: ${metaPrices?.t2 || 'N/A'}`);
  console.log(`   Content T2: ${contentPrices[1].prix}`);
  console.log(`   Meta Maison: ${metaPrices?.house || 'N/A'}`);
  console.log(`   Content Maison: ${contentPrices[2].prix}`);
  
  // Vérifier cohérence
  if (metaPrices) {
    const t1Match = metaPrices.t1 === contentPrices[0].prix;
    const t2Match = metaPrices.t2 === contentPrices[1].prix;
    const houseMatch = metaPrices.house === contentPrices[2].prix;
    
    if (t1Match && t2Match && houseMatch) {
      console.log('   ✅ Meta = Contenu (cohérence parfaite)');
    } else {
      console.log('   ❌ INCOHÉRENCE meta ≠ contenu !');
      allPass = false;
    }
  } else {
    console.log('   ❌ Meta prices NULL');
    allPass = false;
  }
}

console.log('\n' + '='.repeat(70));
if (allPass) {
  console.log('✅ Tous les tests passent — Refactor réussi');
  process.exit(0);
} else {
  console.log('❌ Certains tests échouent — Vérifier le code');
  process.exit(1);
}
