/**
 * Script de test : calcul prix corridors pour meta descriptions
 * Usage: npx tsx scripts/test-pricing-corridors.ts
 */

import { getCorridorPricesForMeta } from '../lib/pricing-corridors';

console.log('\n🧪 Test calcul prix corridors (formules officielles tunnel)\n');
console.log('═'.repeat(70));

// Test Nice → Paris
const niceParis = getCorridorPricesForMeta('nice', 'paris');
console.log('\n✅ Nice → Paris:');
console.log(JSON.stringify(niceParis, null, 2));

// Test Lyon → Marseille
const lyonMarseille = getCorridorPricesForMeta('lyon', 'marseille');
console.log('\n✅ Lyon → Marseille:');
console.log(JSON.stringify(lyonMarseille, null, 2));

// Test Toulouse → Bordeaux
const toulouseBordeaux = getCorridorPricesForMeta('toulouse', 'bordeaux');
console.log('\n✅ Toulouse → Bordeaux:');
console.log(JSON.stringify(toulouseBordeaux, null, 2));

// Test Nantes → Rennes
const nantesRennes = getCorridorPricesForMeta('nantes', 'rennes');
console.log('\n✅ Nantes → Rennes:');
console.log(JSON.stringify(nantesRennes, null, 2));

// Test Strasbourg → Paris
const strasbourgParis = getCorridorPricesForMeta('strasbourg', 'paris');
console.log('\n✅ Strasbourg → Paris:');
console.log(JSON.stringify(strasbourgParis, null, 2));

console.log('\n' + '═'.repeat(70));
console.log('✅ Tests terminés\n');
