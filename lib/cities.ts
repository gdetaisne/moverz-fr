/**
 * Liste des 11 villes couvertes par Moverz
 * Chaque ville a son propre site local
 */

import { EXTRA_CITIES } from "@/lib/cities-extra";
import { slugifyCityName } from "@/lib/slugify";

export interface CityInfo {
  slug: string;
  name: string;
  nameCapitalized: string;
  url: string;
  description: string;
  region: string;
}

const CORE_CITIES: CityInfo[] = [
  {
    slug: 'nice',
    name: 'nice',
    nameCapitalized: 'Nice',
    url: 'https://devis-demenageur-nice.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Nice',
    region: 'Provence-Alpes-Côte d\'Azur',
  },
  {
    slug: 'lyon',
    name: 'lyon',
    nameCapitalized: 'Lyon',
    url: 'https://devis-demenageur-lyon.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Lyon',
    region: 'Auvergne-Rhône-Alpes',
  },
  {
    slug: 'marseille',
    name: 'marseille',
    nameCapitalized: 'Marseille',
    url: 'https://devis-demenageur-marseille.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
  },
  {
    slug: 'toulouse',
    name: 'toulouse',
    nameCapitalized: 'Toulouse',
    url: 'https://devis-demenageur-toulousain.fr', // ⚠️ Exception: -toulousain
    description: 'Comparez des devis de déménageurs vérifiés à Toulouse',
    region: 'Occitanie',
  },
  {
    slug: 'bordeaux',
    name: 'bordeaux',
    nameCapitalized: 'Bordeaux',
    url: 'https://www.bordeaux-demenageur.fr', // ⚠️ Exception: ordre inversé + www
    description: 'Comparez des devis de déménageurs vérifiés à Bordeaux',
    region: 'Nouvelle-Aquitaine',
  },
  {
    slug: 'lille',
    name: 'lille',
    nameCapitalized: 'Lille',
    url: 'https://devis-demenageur-lille.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Lille',
    region: 'Hauts-de-France',
  },
  {
    slug: 'strasbourg',
    name: 'strasbourg',
    nameCapitalized: 'Strasbourg',
    url: 'https://devis-demenageur-strasbourg.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Strasbourg',
    region: 'Grand Est',
  },
  {
    slug: 'nantes',
    name: 'nantes',
    nameCapitalized: 'Nantes',
    url: 'https://devis-demenageur-nantes.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Nantes',
    region: 'Pays de la Loire',
  },
  {
    slug: 'rennes',
    name: 'rennes',
    nameCapitalized: 'Rennes',
    url: 'https://devis-demenageur-rennes.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Rennes',
    region: 'Bretagne',
  },
  {
    slug: 'rouen',
    name: 'rouen',
    nameCapitalized: 'Rouen',
    url: 'https://devis-demenageur-rouen.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Rouen',
    region: 'Normandie',
  },
  {
    slug: 'montpellier',
    name: 'montpellier',
    nameCapitalized: 'Montpellier',
    url: 'https://devis-demenageur-montpellier.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Montpellier',
    region: 'Occitanie',
  },
  // Nouveaux sites qui seront progressivement redirigés vers moverz.fr
  {
    slug: 'paris',
    name: 'paris',
    nameCapitalized: 'Paris',
    url: 'https://devis-demenageur-parisien.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Paris',
    region: 'Île-de-France',
  },
  {
    slug: 'ile-de-france',
    name: 'ile-de-france',
    nameCapitalized: 'Île-de-France',
    url: 'https://devis-demenageur-ile-de-france.fr',
    description: 'Comparez des devis de déménageurs vérifiés en Île-de-France',
    region: 'Île-de-France',
  },
  {
    slug: 'grenoble',
    name: 'grenoble',
    nameCapitalized: 'Grenoble',
    url: 'https://devis-demenageur-grenoble.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Grenoble',
    region: 'Auvergne-Rhône-Alpes',
  },
  {
    slug: 'toulon',
    name: 'toulon',
    nameCapitalized: 'Toulon',
    url: 'https://devis-demenageur-toulon.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Toulon',
    region: 'Provence-Alpes-Côte d\'Azur',
  },
  {
    slug: 'dijon',
    name: 'dijon',
    nameCapitalized: 'Dijon',
    url: 'https://devis-demenageur-dijon.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Dijon',
    region: 'Bourgogne-Franche-Comté',
  },
  {
    slug: 'angers',
    name: 'angers',
    nameCapitalized: 'Angers',
    url: 'https://devis-demenageur-angers.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Angers',
    region: 'Pays de la Loire',
  },
  {
    slug: 'clermont-ferrand',
    name: 'clermont-ferrand',
    nameCapitalized: 'Clermont-Ferrand',
    url: 'https://devis-demenageur-clermont-ferrand.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Clermont-Ferrand',
    region: 'Auvergne-Rhône-Alpes',
  },
  {
    slug: 'tours',
    name: 'tours',
    nameCapitalized: 'Tours',
    url: 'https://devis-demenageur-tours.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Tours',
    region: 'Centre-Val de Loire',
  },
  {
    slug: 'reims',
    name: 'reims',
    nameCapitalized: 'Reims',
    url: 'https://devis-demenageur-reims.fr',
    description: 'Comparez des devis de déménageurs vérifiés à Reims',
    region: 'Grand Est',
  },
  {
    slug: 'le-havre',
    name: 'le-havre',
    nameCapitalized: 'Le Havre',
    url: 'https://devis-demenageur-le-havre.fr',
    description: 'Comparez des devis de déménageurs vérifiés au Havre',
    region: 'Normandie',
  },
  {
    slug: 'saint-etienne',
    name: 'saint-etienne',
    nameCapitalized: 'Saint-Étienne',
    url: 'https://moverz.fr', // Pas de site dédié
    description: 'Comparez des devis de déménageurs vérifiés à Saint-Étienne',
    region: 'Auvergne-Rhône-Alpes',
  },
];

function buildExtraCities(): CityInfo[] {
  return EXTRA_CITIES.filter((city) => city && city.nameCapitalized && city.region).map(({ nameCapitalized, region }) => {
    const slug = slugifyCityName(nameCapitalized);
    return {
      slug,
      name: slug,
      nameCapitalized,
      url: "https://moverz.fr",
      description: `Comparez des devis de déménageurs vérifiés à ${nameCapitalized}`,
      region,
    };
  });
}

export const CITIES: CityInfo[] = (() => {
  const extras = buildExtraCities();
  const bySlug = new Map<string, CityInfo>();

  // CORE wins on duplicates (url exceptions etc.)
  for (const c of [...extras, ...CORE_CITIES]) {
    if (!bySlug.has(c.slug)) bySlug.set(c.slug, c);
  }

  // Keep insertion order stable: CORE first, then extras not already in CORE.
  const coreSlugs = new Set(CORE_CITIES.map((c) => c.slug));
  const merged = [...CORE_CITIES, ...extras.filter((c) => !coreSlugs.has(c.slug))];

  // Ensure uniqueness
  const seen = new Set<string>();
  return merged.filter((c) => {
    if (seen.has(c.slug)) return false;
    seen.add(c.slug);
    return true;
  });
})();

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find(city => city && city.slug === slug);
}

export function getUniqueRegions(): string[] {
  const regions = CITIES.filter(city => city && city.region).map(city => city.region);
  return Array.from(new Set(regions)).sort();
}

export function getCitiesByRegion(): Record<string, CityInfo[]> {
  const result: Record<string, CityInfo[]> = {};
  
  CITIES.filter(city => city && city.region).forEach(city => {
    if (!result[city.region]) {
      result[city.region] = [];
    }
    result[city.region].push(city);
  });
  
  return result;
}

