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
  // Nouveaux sites qui seront progressivement redirigés vers moverz.fr
  {
    slug: 'paris',
    name: 'paris',
    nameCapitalized: 'Paris',
    url: 'https://devis-demenageur-parisien.fr',
    description: 'Comparez 5+ devis de déménageurs à Paris',
    region: 'Île-de-France',
  },
  {
    slug: 'ile-de-france',
    name: 'ile-de-france',
    nameCapitalized: 'Île-de-France',
    url: 'https://devis-demenageur-ile-de-france.fr',
    description: 'Comparez 5+ devis de déménageurs en Île-de-France',
    region: 'Île-de-France',
  },
  {
    slug: 'grenoble',
    name: 'grenoble',
    nameCapitalized: 'Grenoble',
    url: 'https://devis-demenageur-grenoble.fr',
    description: 'Comparez 5+ devis de déménageurs à Grenoble',
    region: 'Auvergne-Rhône-Alpes',
  },
  {
    slug: 'toulon',
    name: 'toulon',
    nameCapitalized: 'Toulon',
    url: 'https://devis-demenageur-toulon.fr',
    description: 'Comparez 5+ devis de déménageurs à Toulon',
    region: 'Provence-Alpes-Côte d\'Azur',
  },
  {
    slug: 'dijon',
    name: 'dijon',
    nameCapitalized: 'Dijon',
    url: 'https://devis-demenageur-dijon.fr',
    description: 'Comparez 5+ devis de déménageurs à Dijon',
    region: 'Bourgogne-Franche-Comté',
  },
  {
    slug: 'angers',
    name: 'angers',
    nameCapitalized: 'Angers',
    url: 'https://devis-demenageur-angers.fr',
    description: 'Comparez 5+ devis de déménageurs à Angers',
    region: 'Pays de la Loire',
  },
  {
    slug: 'clermont-ferrand',
    name: 'clermont-ferrand',
    nameCapitalized: 'Clermont-Ferrand',
    url: 'https://devis-demenageur-clermont-ferrand.fr',
    description: 'Comparez 5+ devis de déménageurs à Clermont-Ferrand',
    region: 'Auvergne-Rhône-Alpes',
  },
  {
    slug: 'tours',
    name: 'tours',
    nameCapitalized: 'Tours',
    url: 'https://devis-demenageur-tours.fr',
    description: 'Comparez 5+ devis de déménageurs à Tours',
    region: 'Centre-Val de Loire',
  },
  {
    slug: 'reims',
    name: 'reims',
    nameCapitalized: 'Reims',
    url: 'https://devis-demenageur-reims.fr',
    description: 'Comparez 5+ devis de déménageurs à Reims',
    region: 'Grand Est',
  },
  {
    slug: 'le-havre',
    name: 'le-havre',
    nameCapitalized: 'Le Havre',
    url: 'https://devis-demenageur-le-havre.fr',
    description: 'Comparez 5+ devis de déménageurs au Havre',
    region: 'Normandie',
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

