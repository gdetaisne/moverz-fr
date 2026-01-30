/**
 * Test : Validation meta corridors (après optimisation)
 * Vérifie que les nouvelles meta sont bien générées avec distance + prix
 */

import { generateCorridorMetadata } from '../components/templates/CorridorPage';

console.log('\n🧪 Validation Meta Corridors (après optimisation)\n');
console.log('═'.repeat(70));

// Test Nice → Paris
const niceParis = generateCorridorMetadata('nice', 'Nice', 'Paris');
console.log('\n✅ Nice → Paris:');
console.log('Title:', niceParis.title);
console.log('Description:', niceParis.description);

// Test Lyon → Marseille
const lyonMarseille = generateCorridorMetadata('lyon', 'Lyon', 'Marseille');
console.log('\n✅ Lyon → Marseille:');
console.log('Title:', lyonMarseille.title);
console.log('Description:', lyonMarseille.description);

// Test Toulouse → Bordeaux
const toulouseBordeaux = generateCorridorMetadata('toulouse', 'Toulouse', 'Bordeaux');
console.log('\n✅ Toulouse → Bordeaux:');
console.log('Title:', toulouseBordeaux.title);
console.log('Description:', toulouseBordeaux.description);

console.log('\n' + '═'.repeat(70));

// Vérifications
const checks = [
  { name: 'Nice→Paris contient distance', pass: niceParis.title?.includes('km') },
  { name: 'Nice→Paris contient prix', pass: niceParis.description?.includes('€') },
  { name: 'Lyon→Marseille contient distance', pass: lyonMarseille.title?.includes('km') },
  { name: 'Toulouse→Bordeaux contient prix', pass: toulouseBordeaux.description?.includes('€') },
];

console.log('\n✅ Checks:');
checks.forEach(check => {
  console.log(`  ${check.pass ? '✅' : '❌'} ${check.name}`);
});

const allPass = checks.every(c => c.pass);
console.log(`\n${allPass ? '🎉 Tous les checks passent !' : '❌ Certains checks échouent'}\n`);

process.exit(allPass ? 0 : 1);
