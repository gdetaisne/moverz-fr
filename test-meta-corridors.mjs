import { generateCorridorMetadata } from './components/templates/CorridorPage.tsx';

// Test Nice → Paris
const niceParis = generateCorridorMetadata('nice', 'Nice', 'Paris');
console.log('\n✅ Nice → Paris Metadata:');
console.log('Title:', niceParis.title);
console.log('Description:', niceParis.description);

// Test Lyon → Marseille  
const lyonMarseille = generateCorridorMetadata('lyon', 'Lyon', 'Marseille');
console.log('\n✅ Lyon → Marseille Metadata:');
console.log('Title:', lyonMarseille.title);
console.log('Description:', lyonMarseille.description);
