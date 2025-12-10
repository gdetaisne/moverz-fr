/**
 * Données centralisées par ville pour Moverz
 * Source unique de vérité pour métadonnées, schema.org, sitemaps, etc.
 */

export interface CityData {
  slug: string;
  name: string;
  nameCapitalized: string;
  region: string;
  siteUrl: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  areaServed: string[]; // Villes environnantes couvertes
  neighborhoods: Array<{
    slug: string;
    name: string;
  }>;
  corridors: Array<{
    slug: string;
    destination: string;
  }>;
}

export const cityData: Record<string, CityData> = {
  marseille: {
    slug: 'marseille',
    name: 'Marseille',
    nameCapitalized: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    siteUrl: 'https://devis-demenageur-marseille.fr',
    coordinates: {
      latitude: 43.2965,
      longitude: 5.3698
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Marseille', 'Aix-en-Provence', 'Aubagne', 'Martigues'],
    neighborhoods: [
      { slug: 'vieux-port', name: 'Vieux-Port' },
      { slug: 'panier', name: 'Le Panier' },
      { slug: 'joliette', name: 'Joliette' },
      { slug: 'endoume', name: 'Endoume' },
      { slug: 'plaine', name: 'La Plaine' }
    ],
    corridors: [
      { slug: 'marseille-vers-paris', destination: 'Paris' },
      { slug: 'marseille-vers-lyon', destination: 'Lyon' },
      { slug: 'marseille-vers-toulouse', destination: 'Toulouse' },
      { slug: 'marseille-vers-nantes', destination: 'Nantes' },
      { slug: 'marseille-vers-espagne', destination: 'Espagne' }
    ]
  },
  
  toulouse: {
    slug: 'toulouse',
    name: 'Toulouse',
    nameCapitalized: 'Toulouse',
    region: 'Occitanie',
    siteUrl: 'https://devis-demenageur-toulousain.fr',
    coordinates: {
      latitude: 43.6047,
      longitude: 1.4442
    },
    phone: '+33-5-XX-XX-XX-XX',
    areaServed: ['Toulouse', 'Blagnac', 'Colomiers', 'Tournefeuille'],
    neighborhoods: [
      { slug: 'capitole', name: 'Capitole' },
      { slug: 'saint-cyprien', name: 'Saint-Cyprien' },
      { slug: 'carmes', name: 'Carmes' },
      { slug: 'compans', name: 'Compans' },
      { slug: 'jean-jaures', name: 'Jean-Jaurès' }
    ],
    corridors: [
      { slug: 'toulouse-vers-paris', destination: 'Paris' },
      { slug: 'toulouse-vers-lyon', destination: 'Lyon' },
      { slug: 'toulouse-vers-marseille', destination: 'Marseille' },
      { slug: 'toulouse-vers-nantes', destination: 'Nantes' },
      { slug: 'toulouse-vers-espagne', destination: 'Espagne' }
    ]
  },
  
  lyon: {
    slug: 'lyon',
    name: 'Lyon',
    nameCapitalized: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    siteUrl: 'https://devis-demenageur-lyon.fr',
    coordinates: {
      latitude: 45.7640,
      longitude: 4.8357
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Lyon', 'Villeurbanne', 'Vénissieux', 'Caluire-et-Cuire'],
    neighborhoods: [
      { slug: 'presquile', name: 'Presqu\'île' },
      { slug: 'vieux-lyon', name: 'Vieux Lyon' },
      { slug: 'part-dieu', name: 'Part-Dieu' },
      { slug: 'croix-rousse', name: 'Croix-Rousse' },
      { slug: 'confluence', name: 'Confluence' }
    ],
    corridors: [
      { slug: 'lyon-vers-paris', destination: 'Paris' },
      { slug: 'lyon-vers-marseille', destination: 'Marseille' },
      { slug: 'lyon-vers-toulouse', destination: 'Toulouse' },
      { slug: 'lyon-vers-geneve', destination: 'Genève' },
      { slug: 'lyon-vers-grenoble', destination: 'Grenoble' }
    ]
  },
  
  bordeaux: {
    slug: 'bordeaux',
    name: 'Bordeaux',
    nameCapitalized: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    siteUrl: 'https://www.bordeaux-demenageur.fr',
    coordinates: {
      latitude: 44.8378,
      longitude: -0.5792
    },
    phone: '+33-5-XX-XX-XX-XX',
    areaServed: ['Bordeaux', 'Mérignac', 'Pessac', 'Talence'],
    neighborhoods: [
      { slug: 'chartrons', name: 'Chartrons' },
      { slug: 'saint-pierre', name: 'Saint-Pierre' },
      { slug: 'bastide', name: 'Bastide' },
      { slug: 'cauderan', name: 'Caudéran' },
      { slug: 'merignac', name: 'Mérignac' },
      { slug: 'pessac', name: 'Pessac' }
    ],
    corridors: [
      { slug: 'bordeaux-vers-paris', destination: 'Paris' },
      { slug: 'bordeaux-vers-toulouse', destination: 'Toulouse' },
      { slug: 'bordeaux-vers-lyon', destination: 'Lyon' },
      { slug: 'bordeaux-vers-nantes', destination: 'Nantes' },
      { slug: 'bordeaux-vers-espagne', destination: 'Espagne' }
    ]
  },
  
  nantes: {
    slug: 'nantes',
    name: 'Nantes',
    nameCapitalized: 'Nantes',
    region: 'Pays de la Loire',
    siteUrl: 'https://devis-demenageur-nantes.fr',
    coordinates: {
      latitude: 47.2184,
      longitude: -1.5536
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Nantes', 'Rezé', 'Saint-Herblain', 'Saint-Nazaire'],
    neighborhoods: [
      { slug: 'bouffay', name: 'Bouffay' },
      { slug: 'ile-de-nantes', name: 'Île de Nantes' },
      { slug: 'doulon', name: 'Doulon' },
      { slug: 'beaujoire', name: 'Beaujoire' },
      { slug: 'hauts-paves', name: 'Hauts-Pavés' }
    ],
    corridors: [
      { slug: 'nantes-vers-paris', destination: 'Paris' },
      { slug: 'nantes-vers-bordeaux', destination: 'Bordeaux' },
      { slug: 'nantes-vers-rennes', destination: 'Rennes' },
      { slug: 'nantes-vers-lyon', destination: 'Lyon' },
      { slug: 'nantes-vers-la-baule', destination: 'La Baule' }
    ]
  },
  
  lille: {
    slug: 'lille',
    name: 'Lille',
    nameCapitalized: 'Lille',
    region: 'Hauts-de-France',
    siteUrl: 'https://devis-demenageur-lille.fr',
    coordinates: {
      latitude: 50.6292,
      longitude: 3.0573
    },
    phone: '+33-3-XX-XX-XX-XX',
    areaServed: ['Lille', 'Roubaix', 'Tourcoing', 'Villeneuve-d\'Ascq'],
    neighborhoods: [
      { slug: 'vieux-lille', name: 'Vieux-Lille' },
      { slug: 'wazemmes', name: 'Wazemmes' },
      { slug: 'republique', name: 'République' },
      { slug: 'fives', name: 'Fives' },
      { slug: 'vauban', name: 'Vauban' }
    ],
    corridors: [
      { slug: 'lille-vers-paris', destination: 'Paris' },
      { slug: 'lille-vers-bruxelles', destination: 'Bruxelles' },
      { slug: 'lille-vers-lyon', destination: 'Lyon' },
      { slug: 'lille-vers-londres', destination: 'Londres' },
      { slug: 'lille-vers-gand', destination: 'Gand' }
    ]
  },
  
  nice: {
    slug: 'nice',
    name: 'Nice',
    nameCapitalized: 'Nice',
    region: 'Provence-Alpes-Côte d\'Azur',
    siteUrl: 'https://devis-demenageur-nice.fr',
    coordinates: {
      latitude: 43.7102,
      longitude: 7.2620
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Nice', 'Cannes', 'Antibes', 'Menton'],
    neighborhoods: [
      { slug: 'vieux-nice', name: 'Vieux-Nice' },
      { slug: 'port', name: 'Port' },
      { slug: 'liberation', name: 'Libération' },
      { slug: 'cimiez', name: 'Cimiez' },
      { slug: 'riquier', name: 'Riquier' }
    ],
    corridors: [
      { slug: 'nice-vers-paris', destination: 'Paris' },
      { slug: 'nice-vers-marseille', destination: 'Marseille' },
      { slug: 'nice-vers-lyon', destination: 'Lyon' },
      { slug: 'nice-vers-italie', destination: 'Italie' },
      { slug: 'nice-vers-monaco', destination: 'Monaco' }
    ]
  },
  
  rennes: {
    slug: 'rennes',
    name: 'Rennes',
    nameCapitalized: 'Rennes',
    region: 'Bretagne',
    siteUrl: 'https://devis-demenageur-rennes.fr',
    coordinates: {
      latitude: 48.1173,
      longitude: -1.6778
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Rennes', 'Saint-Grégoire', 'Cesson-Sévigné', 'Chantepie'],
    neighborhoods: [
      { slug: 'centre', name: 'Centre' },
      { slug: 'thabor', name: 'Thabor' },
      { slug: 'maurepas', name: 'Maurepas' },
      { slug: 'villejean', name: 'Villejean' },
      { slug: 'cleunay', name: 'Cleunay' }
    ],
    corridors: [
      { slug: 'rennes-vers-paris', destination: 'Paris' },
      { slug: 'rennes-vers-nantes', destination: 'Nantes' },
      { slug: 'rennes-vers-brest', destination: 'Brest' },
      { slug: 'rennes-vers-saint-malo', destination: 'Saint-Malo' },
      { slug: 'rennes-vers-angers', destination: 'Angers' }
    ]
  },
  
  rouen: {
    slug: 'rouen',
    name: 'Rouen',
    nameCapitalized: 'Rouen',
    region: 'Normandie',
    siteUrl: 'https://devis-demenageur-rouen.fr',
    coordinates: {
      latitude: 49.4432,
      longitude: 1.0993
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Rouen', 'Mont-Saint-Aignan', 'Sotteville-lès-Rouen', 'Le Havre'],
    neighborhoods: [
      { slug: 'centre-historique', name: 'Centre Historique' },
      { slug: 'saint-sever', name: 'Saint-Sever' },
      { slug: 'grammont', name: 'Grammont' },
      { slug: 'sapins', name: 'Sapins' },
      { slug: 'madrillet', name: 'Madrillet' }
    ],
    corridors: [
      { slug: 'rouen-vers-paris', destination: 'Paris' },
      { slug: 'rouen-vers-le-havre', destination: 'Le Havre' },
      { slug: 'rouen-vers-caen', destination: 'Caen' },
      { slug: 'rouen-vers-amiens', destination: 'Amiens' },
      { slug: 'rouen-vers-lille', destination: 'Lille' }
    ]
  },
  
  strasbourg: {
    slug: 'strasbourg',
    name: 'Strasbourg',
    nameCapitalized: 'Strasbourg',
    region: 'Grand Est',
    siteUrl: 'https://devis-demenageur-strasbourg.fr',
    coordinates: {
      latitude: 48.5734,
      longitude: 7.7521
    },
    phone: '+33-3-XX-XX-XX-XX',
    areaServed: ['Strasbourg', 'Schiltigheim', 'Illkirch-Graffenstaden', 'Haguenau'],
    neighborhoods: [
      { slug: 'grande-ile', name: 'Grande-Île' },
      { slug: 'neudorf', name: 'Neudorf' },
      { slug: 'cronenbourg', name: 'Cronenbourg' },
      { slug: 'koenigshoffen', name: 'Koenigshoffen' },
      { slug: 'robertsau', name: 'Robertsau' }
    ],
    corridors: [
      { slug: 'strasbourg-vers-paris', destination: 'Paris' },
      { slug: 'strasbourg-vers-lyon', destination: 'Lyon' },
      { slug: 'strasbourg-vers-mulhouse', destination: 'Mulhouse' },
      { slug: 'strasbourg-vers-allemagne', destination: 'Allemagne' },
      { slug: 'strasbourg-vers-suisse', destination: 'Suisse' }
    ]
  },
  
  montpellier: {
    slug: 'montpellier',
    name: 'Montpellier',
    nameCapitalized: 'Montpellier',
    region: 'Occitanie',
    siteUrl: 'https://devis-demenageur-montpellier.fr',
    coordinates: {
      latitude: 43.6108,
      longitude: 3.8767
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Montpellier', 'Lattes', 'Castelnau-le-Lez', 'Béziers'],
    neighborhoods: [
      { slug: 'ecusson', name: 'Écusson' },
      { slug: 'antigone', name: 'Antigone' },
      { slug: 'pres-arenes', name: 'Près d\'Arènes' },
      { slug: 'beaux-arts', name: 'Beaux-Arts' },
      { slug: 'port-marianne', name: 'Port-Marianne' }
    ],
    corridors: [
      { slug: 'montpellier-vers-paris', destination: 'Paris' },
      { slug: 'montpellier-vers-toulouse', destination: 'Toulouse' },
      { slug: 'montpellier-vers-marseille', destination: 'Marseille' },
      { slug: 'montpellier-vers-lyon', destination: 'Lyon' },
      { slug: 'montpellier-vers-espagne', destination: 'Espagne' }
    ]
  }
};

/**
 * Résoudre les données de ville à partir du SITE_SLUG
 */
export function getCityData(slug?: string): CityData {
  const citySlug = slug?.toLowerCase() || 'toulouse'; // Fallback par défaut
  
  if (!cityData[citySlug]) {
    console.warn(`⚠️ Ville inconnue: ${citySlug}, utilisation de toulouse par défaut`);
    return cityData.toulouse;
  }
  
  return cityData[citySlug];
}

/**
 * Obtenir le nom de ville depuis l'URL du site
 * Supporte les formats:
 *   - ville-demenageur.fr (marseille-demenageur.fr)
 *   - devis-demenageur-ville.fr (devis-demenageur-bordeaux.fr)
 */
export function getCityDataFromUrl(siteUrl: string): CityData {
  // Cas spéciaux d'abord
  if (siteUrl.includes('toulousain')) return cityData.toulouse;
  
  // Format: demenageur-ville (ex: devis-demenageur-bordeaux.fr)
  let match = siteUrl.match(/demenageur[s]?[-_]([a-z]+)/i);
  if (match && match[1] !== 'fr') {
    const citySlug = match[1];
    return getCityData(citySlug);
  }
  
  // Format: ville-demenageur (ex: marseille-demenageur.fr)
  match = siteUrl.match(/([a-z]+)[-_]demenageur/i);
  if (match) {
    const citySlug = match[1];
    // Exclure les mots qui ne sont pas des villes
    if (!['www', 'devis', 'http', 'https'].includes(citySlug)) {
      return getCityData(citySlug);
    }
  }
  
  // Fallback par défaut
  console.warn(`⚠️ Impossible d'extraire la ville depuis l'URL: ${siteUrl}, utilisation de toulouse par défaut`);
  return cityData.toulouse;
}

