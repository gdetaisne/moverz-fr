/**
 * Liste des 11 villes couvertes par Moverz
 * Chaque ville a son propre site local
 */

export interface CityInfo {
  slug: string;
  name: string;
  nameCapitalized: string;
  url: string;
  description: string;
  region: string;
}

export const CITIES: CityInfo[] = [
  {
    slug: 'nice',
    name: 'nice',
    nameCapitalized: 'Nice',
    url: 'https://devis-demenageur-nice.fr',
    description: 'Comparez 5+ devis de déménageurs à Nice',
    region: 'Provence-Alpes-Côte d\'Azur',
  },
  {
    slug: 'lyon',
    name: 'lyon',
    nameCapitalized: 'Lyon',
    url: 'https://devis-demenageur-lyon.fr',
    description: 'Comparez 5+ devis de déménageurs à Lyon',
    region: 'Auvergne-Rhône-Alpes',
  },
  {
    slug: 'marseille',
    name: 'marseille',
    nameCapitalized: 'Marseille',
    url: 'https://devis-demenageur-marseille.fr',
    description: 'Comparez 5+ devis de déménageurs à Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
  },
  {
    slug: 'toulouse',
    name: 'toulouse',
    nameCapitalized: 'Toulouse',
    url: 'https://devis-demenageur-toulousain.fr', // ⚠️ Exception: -toulousain
    description: 'Comparez 5+ devis de déménageurs à Toulouse',
    region: 'Occitanie',
  },
  {
    slug: 'bordeaux',
    name: 'bordeaux',
    nameCapitalized: 'Bordeaux',
    url: 'https://www.bordeaux-demenageur.fr', // ⚠️ Exception: ordre inversé + www
    description: 'Comparez 5+ devis de déménageurs à Bordeaux',
    region: 'Nouvelle-Aquitaine',
  },
  {
    slug: 'lille',
    name: 'lille',
    nameCapitalized: 'Lille',
    url: 'https://devis-demenageur-lille.fr',
    description: 'Comparez 5+ devis de déménageurs à Lille',
    region: 'Hauts-de-France',
  },
  {
    slug: 'strasbourg',
    name: 'strasbourg',
    nameCapitalized: 'Strasbourg',
    url: 'https://devis-demenageur-strasbourg.fr',
    description: 'Comparez 5+ devis de déménageurs à Strasbourg',
    region: 'Grand Est',
  },
  {
    slug: 'nantes',
    name: 'nantes',
    nameCapitalized: 'Nantes',
    url: 'https://devis-demenageur-nantes.fr',
    description: 'Comparez 5+ devis de déménageurs à Nantes',
    region: 'Pays de la Loire',
  },
  {
    slug: 'rennes',
    name: 'rennes',
    nameCapitalized: 'Rennes',
    url: 'https://devis-demenageur-rennes.fr',
    description: 'Comparez 5+ devis de déménageurs à Rennes',
    region: 'Bretagne',
  },
  {
    slug: 'rouen',
    name: 'rouen',
    nameCapitalized: 'Rouen',
    url: 'https://devis-demenageur-rouen.fr',
    description: 'Comparez 5+ devis de déménageurs à Rouen',
    region: 'Normandie',
  },
  {
    slug: 'montpellier',
    name: 'montpellier',
    nameCapitalized: 'Montpellier',
    url: 'https://devis-demenageur-montpellier.fr',
    description: 'Comparez 5+ devis de déménageurs à Montpellier',
    region: 'Occitanie',
  },
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find(city => city.slug === slug);
}

export function getUniqueRegions(): string[] {
  const regions = CITIES.map(city => city.region);
  return Array.from(new Set(regions)).sort();
}

export function getCitiesByRegion(): Record<string, CityInfo[]> {
  const result: Record<string, CityInfo[]> = {};
  
  CITIES.forEach(city => {
    if (!result[city.region]) {
      result[city.region] = [];
    }
    result[city.region].push(city);
  });
  
  return result;
}

