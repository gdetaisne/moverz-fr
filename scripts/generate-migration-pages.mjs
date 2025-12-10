#!/usr/bin/env node

/**
 * Script pour générer automatiquement toutes les pages de migration
 * - Hub quartiers (7 pages)
 * - Pages quartiers (~35 pages)
 * - Pages corridors (~42 pages)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Données des villes (simplifié depuis cityData.ts)
const CITIES = {
  nice: {
    name: 'Nice',
    neighborhoods: [
      { slug: 'vieux-nice', name: 'Vieux-Nice' },
      { slug: 'port', name: 'Port' },
      { slug: 'liberation', name: 'Libération' },
      { slug: 'cimiez', name: 'Cimiez' },
      { slug: 'riquier', name: 'Riquier' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Marseille' },
      { destination: 'Lyon' },
      { destination: 'Italie' },
      { destination: 'Monaco' }
    ]
  },
  toulouse: {
    name: 'Toulouse',
    neighborhoods: [
      { slug: 'capitole', name: 'Capitole' },
      { slug: 'saint-cyprien', name: 'Saint-Cyprien' },
      { slug: 'carmes', name: 'Carmes' },
      { slug: 'compans', name: 'Compans' },
      { slug: 'jean-jaures', name: 'Jean-Jaurès' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Lyon' },
      { destination: 'Marseille' },
      { destination: 'Nantes' },
      { destination: 'Espagne' }
    ]
  },
  strasbourg: {
    name: 'Strasbourg',
    neighborhoods: [
      { slug: 'grande-ile', name: 'Grande-Île' },
      { slug: 'neudorf', name: 'Neudorf' },
      { slug: 'cronenbourg', name: 'Cronenbourg' },
      { slug: 'koenigshoffen', name: 'Koenigshoffen' },
      { slug: 'robertsau', name: 'Robertsau' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Lyon' },
      { destination: 'Mulhouse' },
      { destination: 'Allemagne' },
      { destination: 'Suisse' }
    ]
  },
  nantes: {
    name: 'Nantes',
    neighborhoods: [
      { slug: 'bouffay', name: 'Bouffay' },
      { slug: 'ile-de-nantes', name: 'Île de Nantes' },
      { slug: 'doulon', name: 'Doulon' },
      { slug: 'beaujoire', name: 'Beaujoire' },
      { slug: 'hauts-paves', name: 'Hauts-Pavés' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Bordeaux' },
      { destination: 'Rennes' },
      { destination: 'Lyon' },
      { destination: 'La Baule' }
    ]
  },
  rennes: {
    name: 'Rennes',
    neighborhoods: [
      { slug: 'centre', name: 'Centre' },
      { slug: 'thabor', name: 'Thabor' },
      { slug: 'maurepas', name: 'Maurepas' },
      { slug: 'villejean', name: 'Villejean' },
      { slug: 'cleunay', name: 'Cleunay' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Nantes' },
      { destination: 'Brest' },
      { destination: 'Saint-Malo' },
      { destination: 'Angers' }
    ]
  },
  rouen: {
    name: 'Rouen',
    neighborhoods: [
      { slug: 'centre-historique', name: 'Centre Historique' },
      { slug: 'saint-sever', name: 'Saint-Sever' },
      { slug: 'grammont', name: 'Grammont' },
      { slug: 'sapins', name: 'Sapins' },
      { slug: 'madrillet', name: 'Madrillet' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Le Havre' },
      { destination: 'Caen' },
      { destination: 'Amiens' },
      { destination: 'Lille' }
    ]
  },
  montpellier: {
    name: 'Montpellier',
    neighborhoods: [
      { slug: 'ecusson', name: 'Écusson' },
      { slug: 'antigone', name: 'Antigone' },
      { slug: 'pres-arenes', name: 'Près d\'Arènes' },
      { slug: 'beaux-arts', name: 'Beaux-Arts' },
      { slug: 'port-marianne', name: 'Port-Marianne' }
    ],
    corridors: [
      { destination: 'Paris' },
      { destination: 'Lyon' },
      { destination: 'Marseille' },
      { destination: 'Toulouse' }
    ]
  }
};

// 1. Générer les hub quartiers
function generateHubQuartiers() {
  console.log('\\n📁 Génération des hub quartiers...');
  
  for (const [citySlug, cityData] of Object.entries(CITIES)) {
    const dir = path.join(ROOT, 'app', `quartiers-${citySlug}`);
    const file = path.join(dir, 'page.tsx');
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const content = `import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['${citySlug}'];

export const metadata = generateHubQuartiersMetadata('${citySlug}', '${cityData.name}');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="${citySlug}"
      cityName="${cityData.name}"
      neighborhoods={city.neighborhoods}
    />
  );
}
`;
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  ✅ ${file}`);
  }
}

// 2. Générer les pages quartiers
function generateQuartierPages() {
  console.log('\\n📁 Génération des pages quartiers...');
  
  let count = 0;
  for (const [citySlug, cityData] of Object.entries(CITIES)) {
    for (const neighborhood of cityData.neighborhoods) {
      const dir = path.join(ROOT, 'app', citySlug, neighborhood.slug);
      const file = path.join(dir, 'page.tsx');
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Échapper les apostrophes pour éviter les erreurs de syntaxe
      const escapedName = neighborhood.name.replace(/'/g, "\\'");
      
      const content = `import { QuartierPage, generateQuartierMetadata } from "@/components/templates/QuartierPage";

export const metadata = generateQuartierMetadata('${citySlug}', '${cityData.name}', '${neighborhood.slug}', '${escapedName}');

export default function Page() {
  return (
    <QuartierPage
      citySlug="${citySlug}"
      cityName="${cityData.name}"
      quartierSlug="${neighborhood.slug}"
      quartierName="${escapedName}"
      description="Service professionnel de déménagement dans le quartier ${escapedName}"
      stats={{
        dossiers: "+45",
        demenageurs: "15",
        delai: "3-5"
      }}
      pourquoiMoverz="${escapedName} est un quartier prisé de ${cityData.name}. Nos déménageurs spécialisés connaissent parfaitement les contraintes d'accès et s'adaptent aux particularités du quartier."
      accesStationnement="${escapedName} présente des contraintes d'accès spécifiques. Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement et optimisent les horaires."
      destinationsFrequentes={[
        {
          href: "/${citySlug}-vers-paris",
          title: "${escapedName} → Paris",
          description: "Flux régulier depuis ce quartier, accès livraison à anticiper."
        }
      ]}
      faq={[
        {
          question: "Comment gérer le stationnement à ${escapedName} ?",
          answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire."
        },
        {
          question: "Quels sont les tarifs pour ${escapedName} ?",
          answer: "Les tarifs dépendent du volume et des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
        }
      ]}
    />
  );
}
`;
      
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  }
  console.log(`  ✅ ${count} pages quartiers créées`);
}

// 3. Générer les pages corridors
function generateCorridorPages() {
  console.log('\\n📁 Génération des pages corridors...');
  
  let count = 0;
  for (const [citySlug, cityData] of Object.entries(CITIES)) {
    for (const corridor of cityData.corridors) {
      const destSlug = corridor.destination.toLowerCase().replace(/['\s]/g, '-');
      const dir = path.join(ROOT, 'app', `${citySlug}-vers-${destSlug}`);
      const file = path.join(dir, 'page.tsx');
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      const content = `import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('${citySlug}', '${cityData.name}', '${corridor.destination}');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="${citySlug}"
      originCityName="${cityData.name}"
      destination="${corridor.destination}"
      distance="500 km"
      tempsMoyen="6h00"
      periodeConseillee="Mai-Sept"
      prixIndicatifs={[
        {
          type: "Studio/T1",
          prix: "800-1200€",
          description: "Volume : 10-15 m³"
        },
        {
          type: "T2/T3",
          prix: "1200-1800€",
          description: "Volume : 20-35 m³"
        },
        {
          type: "Maison",
          prix: "1800-3000€",
          description: "Volume : 40-80 m³"
        }
      ]}
      accesArrivee="${corridor.destination} présente des défis spécifiques pour les déménagements. Nos partenaires déménageurs connaissent parfaitement les contraintes locales."
      conseils={[
        "Anticipez les créneaux de livraison",
        "Prévoyez des protections renforcées pour les objets fragiles",
        "Vérifiez les contraintes d'accès à l'arrivée",
        "Planifiez le stationnement temporaire avec votre déménageur"
      ]}
      faq={[
        {
          question: "Quels sont les délais pour un déménagement ${cityData.name} → ${corridor.destination} ?",
          answer: "Nos partenaires déménageurs peuvent généralement intervenir sous 7 jours. Pour les déménagements urgents, certains peuvent se libérer en 48h selon la période."
        },
        {
          question: "Quels sont les tarifs pour ${cityData.name} → ${corridor.destination} ?",
          answer: "Les tarifs varient selon le volume et les contraintes d'accès. Comptez 800-1200€ pour un studio, 1200-1800€ pour un T2/T3, 1800-3000€ pour une maison."
        }
      ]}
    />
  );
}
`;
      
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  }
  console.log(`  ✅ ${count} pages corridors créées`);
}

// Exécution
console.log('🚀 Génération des pages de migration...');
generateHubQuartiers();
generateQuartierPages();
generateCorridorPages();
console.log('\\n✅ Génération terminée !');

