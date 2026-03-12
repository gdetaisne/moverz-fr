/**
 * Helper pour générer les URLs et métadonnées des photos de villes (SEO)
 * Utilisé pour ImageObject schema et sitemap images
 */

// Mapping des slugs de ville vers les noms de fichiers photos
const CITY_PHOTO_FILENAMES: Record<string, string> = {
  bordeaux: 'bordeaux-miroir-eau-quais.jpg',
  lyon: 'lyon-basilique-fourviere-toits.jpg',
  marseille: 'marseille-vieux-port.jpg',
  paris: 'paris-tour-eiffel-toits.jpg',
  toulouse: 'toulouse-place-capitole.jpg',
  lille: 'lille-grand-place.jpg',
  nice: 'nice-promenade-anglais.jpg',
  nantes: 'nantes-chateau-ducs-bretagne.jpg',
  strasbourg: 'strasbourg-petite-france.jpg',
  rennes: 'rennes-parlement-bretagne.jpg',
  montpellier: 'montpellier-place-comedie.jpg',
  grenoble: 'grenoble-bastille-panorama.jpg',
  rouen: 'rouen-cathedrale-notre-dame.jpg',
};

const CITY_PHOTO_DESCRIPTIONS: Record<string, string> = {
  bordeaux: "Miroir d'eau et quais accessibles pour déménageurs",
  lyon: 'Basilique Fourvière et toits, vue panoramique de la ville',
  marseille: 'Vieux-Port et quartiers accessibles du centre-ville',
  paris: 'Tour Eiffel et toits parisiens caractéristiques',
  toulouse: 'Place du Capitole, cœur du centre-ville',
  lille: 'Grand-Place et centre historique',
  nice: 'Promenade des Anglais et bord de mer accessible',
  nantes: 'Château des Ducs de Bretagne, monument historique',
  strasbourg: 'La Petite France, quartier historique avec ruelles',
  rennes: 'Place du Parlement de Bretagne, centre-ville',
  montpellier: 'Place de la Comédie, centre névralgique',
  grenoble: 'Bastille et vue panoramique sur les Alpes',
  rouen: 'Cathédrale Notre-Dame, centre historique',
};

// Photos déménageurs génériques
const MOVER_PHOTOS = [
  {
    filename: 'demenageur-professionnel-cartons-transport.jpg',
    alt: 'Déménageurs professionnels transportant des cartons',
  },
  {
    filename: 'demenageur-camion-equipe-action.jpg',
    alt: 'Camion de déménagement et équipe de déménageurs professionnels',
  },
  {
    filename: 'demenageur-transport-carton-professionnel.jpg',
    alt: 'Déménageur professionnel transportant un carton',
  },
];

export function getCityPhotoUrl(citySlug: string): string {
  const filename = CITY_PHOTO_FILENAMES[citySlug] || 'paris-tour-eiffel-toits.jpg';
  return `https://moverz.fr/images/cities/${filename}`;
}

export function getCityPhotoDescription(citySlug: string, cityName: string): string {
  const description = CITY_PHOTO_DESCRIPTIONS[citySlug] || 'Vue de la ville';
  return `Photo de ${cityName} montrant ${description}. Zone couverte par les déménageurs professionnels Moverz.`;
}

export function getMoverPhotoUrl(citySlug: string): string {
  // Rotation basée sur le slug pour cohérence
  const index = citySlug.length % MOVER_PHOTOS.length;
  return `https://moverz.fr/images/cities/${MOVER_PHOTOS[index].filename}`;
}

export function getMoverPhotoAlt(citySlug: string): string {
  const index = citySlug.length % MOVER_PHOTOS.length;
  return MOVER_PHOTOS[index].alt;
}

/**
 * Génère les données ImageObject pour une page ville
 * Utilisé dans le schema structured data
 */
export function getCityImageSchemaData(citySlug: string, cityName: string) {
  return [
    {
      url: getCityPhotoUrl(citySlug),
      name: `Déménagement ${cityName} - Landmark de la ville`,
      description: getCityPhotoDescription(citySlug, cityName),
      caption: `Déménager à ${cityName} avec Moverz - Déménageurs vérifiés`,
    },
    {
      url: getMoverPhotoUrl(citySlug),
      name: `Déménageur professionnel ${cityName} en action`,
      description: `Déménageurs professionnels vérifiés par Moverz intervenant à ${cityName}. Score de fiabilité /100, santé financière contrôlée, 0 faillite depuis jan. 2026.`,
      caption: `Déménageurs vérifiés Moverz - Service professionnel ${cityName}`,
    },
  ];
}
