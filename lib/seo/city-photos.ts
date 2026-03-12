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
  // Phase 1 — 7 villes premium supplémentaires (20 total)
  reims: 'reims-cathedrale-notre-dame.jpg',
  'saint-etienne': 'saint-etienne-centre-ville.jpg',
  toulon: 'toulon-rade-port.jpg',
  dijon: 'dijon-place-liberation.jpg',
  angers: 'angers-chateau-ducs.jpg',
  nimes: 'nimes-arenes.jpg',
  'le-havre': 'le-havre-port-architecture.jpg',
  // Phase 2 — 35 villes supplémentaires (55 total)
  'clermont-ferrand': 'clermont-ferrand-puy-dome.jpg',
  tours: 'tours-val-de-loire.jpg',
  'aix-en-provence': 'aix-en-provence-cours-mirabeau.jpg',
  avignon: 'avignon-palais-papes.jpg',
  cannes: 'cannes-croisette.jpg',
  annecy: 'annecy-lac-vieille-ville.jpg',
  chambery: 'chambery-chateaux-savoie.jpg',
  valence: 'valence-centre-ville.jpg',
  perpignan: 'perpignan-castillet.jpg',
  beziers: 'beziers-canal-midi.jpg',
  narbonne: 'narbonne-cathedrale.jpg',
  carcassonne: 'carcassonne-cite-medievale.jpg',
  albi: 'albi-cathedrale.jpg',
  'la-rochelle': 'la-rochelle-vieux-port.jpg',
  poitiers: 'poitiers-centre-historique.jpg',
  limoges: 'limoges-porcelaine.jpg',
  pau: 'pau-chateau.jpg',
  bayonne: 'bayonne-vieux-bayonne.jpg',
  biarritz: 'biarritz-plage.jpg',
  amiens: 'amiens-cathedrale.jpg',
  dunkerque: 'dunkerque-port-plage.jpg',
  calais: 'calais-centre.jpg',
  roubaix: 'roubaix-piscine-musee.jpg',
  tourcoing: 'tourcoing-centre.jpg',
  metz: 'metz-cathedrale.jpg',
  nancy: 'nancy-place-stanislas.jpg',
  mulhouse: 'mulhouse-centre-alsace.jpg',
  colmar: 'colmar-petite-venise.jpg',
  troyes: 'troyes-centre-champagne.jpg',
  'le-mans': 'le-mans-vieille-ville.jpg',
  'saint-nazaire': 'saint-nazaire-port.jpg',
  brest: 'brest-port.jpg',
  quimper: 'quimper-cathedrale.jpg',
  lorient: 'lorient-port.jpg',
  vannes: 'vannes-intra-muros.jpg',
  'saint-malo': 'saint-malo-remparts.jpg',
  caen: 'caen-chateau.jpg',
  'cherbourg-en-cotentin': 'cherbourg-port.jpg',
  orleans: 'orleans-place-martroi.jpg',
  blois: 'blois-chateau.jpg',
  chartres: 'chartres-cathedrale.jpg',
  besancon: 'besancon-citadelle.jpg',
  belfort: 'belfort-lion.jpg',
  ajaccio: 'ajaccio-port-corse.jpg',
  bastia: 'bastia-port-corse.jpg',
  villeurbanne: 'lyon-basilique-fourviere-toits.jpg', // Agglomération lyonnaise
  // Phase 3 — 25 villes supplémentaires (80 total)
  versailles: 'versailles-chateau.jpg',
  'boulogne-billancourt': 'boulogne-billancourt-ile-de-france.jpg',
  antibes: 'antibes-cap.jpg',
  frejus: 'frejus-plage.jpg',
  arles: 'arles-arenes.jpg',
  sete: 'sete-port.jpg',
  montauban: 'montauban-place-nationale.jpg',
  tarbes: 'tarbes-pyrenees.jpg',
  niort: 'niort-centre.jpg',
  angouleme: 'angouleme-cathedrale.jpg',
  arcachon: 'arcachon-bassin.jpg',
  'villeneuve-dascq': 'villeneuve-dascq-metropole.jpg',
  arras: 'arras-place.jpg',
  lens: 'lens-centre.jpg',
  valenciennes: 'valenciennes-place.jpg',
  thionville: 'thionville-moselle.jpg',
  epinal: 'epinal-vosges.jpg',
  laval: 'laval-mayenne.jpg',
  'la-roche-sur-yon': 'la-roche-sur-yon-vendee.jpg',
  cholet: 'cholet-mauges.jpg',
  'saint-brieuc': 'saint-brieuc-baie.jpg',
  evreux: 'evreux-normandie.jpg',
  dieppe: 'dieppe-port.jpg',
  bourges: 'bourges-cathedrale.jpg',
  chateauroux: 'chateauroux-indre.jpg',
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
  reims: "Cathédrale Notre-Dame, cœur de la région Champagne",
  'saint-etienne': 'Centre-ville et quartiers accessibles',
  toulon: 'Rade et port méditerranéen',
  dijon: 'Place de la Libération, centre historique',
  angers: 'Château des Ducs et quartiers historiques',
  nimes: 'Arènes romaines et centre historique',
  'le-havre': 'Port et architecture Perret UNESCO',
  'villeurbanne': 'Agglomération lyonnaise, proche Lyon',
  // Phase 3 — descriptions SEO
  versailles: 'Château et ville royale des Yvelines',
  'boulogne-billancourt': 'Hauts-de-Seine, ville majeure Île-de-France',
  antibes: "Cap d'Antibes et Côte d'Azur",
  frejus: 'Plage et centre historique du Var',
  arles: 'Arènes et patrimoine romain UNESCO',
  sete: 'Port et canal de Sète, Méditerranée',
  montauban: 'Place Nationale et centre Tarn-et-Garonne',
  tarbes: 'Centre-ville et vue sur les Pyrénées',
  niort: 'Centre-ville et donjon des Deux-Sèvres',
  angouleme: 'Cathédrale et cité internationale de la BD',
  arcachon: 'Bassin d\'Arcachon et Dune du Pilat',
  'villeneuve-dascq': 'Ville majeure de la métropole lilloise',
  arras: 'Grand Place et centre historique',
  lens: 'Centre et bassin minier du Nord',
  valenciennes: "Place d'Armes et centre-ville",
  thionville: 'Centre-ville mosellan',
  epinal: 'Préfecture des Vosges',
  laval: 'Château et vieille ville mayennaise',
  'la-roche-sur-yon': 'Préfecture de la Vendée',
  cholet: 'Centre des Mauges',
  'saint-brieuc': 'Baie de Saint-Brieuc et Côtes-d\'Armor',
  evreux: 'Cathédrale et préfecture de l\'Eure',
  dieppe: 'Port et falaises normandes',
  bourges: 'Cathédrale et centre du Berry',
  chateauroux: 'Centre-ville et préfecture de l\'Indre',
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
