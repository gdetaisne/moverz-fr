import Image from "next/image";

type CityPhotoProps = {
  citySlug: string;
  cityName: string;
};

// Photos locales hébergées — nommage SEO optimisé
// Format : { src, alt, title }
const CITY_PHOTOS: Record<string, { src: string; alt: string; title: string }> = {
  bordeaux: {
    src: "/images/cities/bordeaux-miroir-eau-quais.jpg",
    alt: "Déménagement Bordeaux - Miroir d'eau et quais accessibles pour déménageurs",
    title: "Déménager à Bordeaux avec Moverz - Pros vérifiés",
  },
  lyon: {
    src: "/images/cities/lyon-basilique-fourviere-toits.jpg",
    alt: "Déménagement Lyon - Basilique Fourvière et toits, vue panoramique",
    title: "Déménager à Lyon avec Moverz - Pros vérifiés",
  },
  marseille: {
    src: "/images/cities/marseille-vieux-port.jpg",
    alt: "Déménagement Marseille - Vieux-Port et quartiers accessibles",
    title: "Déménager à Marseille avec Moverz - Pros vérifiés",
  },
  paris: {
    src: "/images/cities/paris-tour-eiffel-toits.jpg",
    alt: "Déménagement Paris - Tour Eiffel et toits parisiens",
    title: "Déménager à Paris avec Moverz - Pros vérifiés",
  },
  toulouse: {
    src: "/images/cities/toulouse-place-capitole.jpg",
    alt: "Déménagement Toulouse - Place du Capitole centre-ville",
    title: "Déménager à Toulouse avec Moverz - Pros vérifiés",
  },
  lille: {
    src: "/images/cities/lille-grand-place.jpg",
    alt: "Déménagement Lille - Grand-Place et centre historique",
    title: "Déménager à Lille avec Moverz - Pros vérifiés",
  },
  nice: {
    src: "/images/cities/nice-promenade-anglais.jpg",
    alt: "Déménagement Nice - Promenade des Anglais et bord de mer",
    title: "Déménager à Nice avec Moverz - Pros vérifiés",
  },
  nantes: {
    src: "/images/cities/nantes-chateau-ducs-bretagne.jpg",
    alt: "Déménagement Nantes - Château des Ducs de Bretagne",
    title: "Déménager à Nantes avec Moverz - Pros vérifiés",
  },
  strasbourg: {
    src: "/images/cities/strasbourg-petite-france.jpg",
    alt: "Déménagement Strasbourg - La Petite France quartier historique",
    title: "Déménager à Strasbourg avec Moverz - Pros vérifiés",
  },
  rennes: {
    src: "/images/cities/rennes-parlement-bretagne.jpg",
    alt: "Déménagement Rennes - Place du Parlement de Bretagne",
    title: "Déménager à Rennes avec Moverz - Pros vérifiés",
  },
  montpellier: {
    src: "/images/cities/montpellier-place-comedie.jpg",
    alt: "Déménagement Montpellier - Place de la Comédie centre-ville",
    title: "Déménager à Montpellier avec Moverz - Pros vérifiés",
  },
  grenoble: {
    src: "/images/cities/grenoble-bastille-panorama.jpg",
    alt: "Déménagement Grenoble - Bastille et vue panoramique Alpes",
    title: "Déménager à Grenoble avec Moverz - Pros vérifiés",
  },
  rouen: {
    src: "/images/cities/rouen-cathedrale-notre-dame.jpg",
    alt: "Déménagement Rouen - Cathédrale Notre-Dame centre historique",
    title: "Déménager à Rouen avec Moverz - Pros vérifiés",
  },
  // Phase 1 — 7 villes premium supplémentaires (20 total)
  reims: {
    src: "/images/cities/reims-cathedrale-notre-dame.jpg",
    alt: "Déménagement Reims - Cathédrale Notre-Dame et centre Champagne",
    title: "Déménager à Reims avec Moverz - Pros vérifiés",
  },
  "saint-etienne": {
    src: "/images/cities/saint-etienne-centre-ville.jpg",
    alt: "Déménagement Saint-Étienne - Centre-ville et quartiers accessibles",
    title: "Déménager à Saint-Étienne avec Moverz - Pros vérifiés",
  },
  toulon: {
    src: "/images/cities/toulon-rade-port.jpg",
    alt: "Déménagement Toulon - Rade et port méditerranéen",
    title: "Déménager à Toulon avec Moverz - Pros vérifiés",
  },
  dijon: {
    src: "/images/cities/dijon-place-liberation.jpg",
    alt: "Déménagement Dijon - Place de la Libération et centre-ville",
    title: "Déménager à Dijon avec Moverz - Pros vérifiés",
  },
  angers: {
    src: "/images/cities/angers-chateau-ducs.jpg",
    alt: "Déménagement Angers - Château des Ducs et quartiers historiques",
    title: "Déménager à Angers avec Moverz - Pros vérifiés",
  },
  nimes: {
    src: "/images/cities/nimes-arenes.jpg",
    alt: "Déménagement Nîmes - Arènes romaines et centre historique",
    title: "Déménager à Nîmes avec Moverz - Pros vérifiés",
  },
  "le-havre": {
    src: "/images/cities/le-havre-port-architecture.jpg",
    alt: "Déménagement Le Havre - Port et architecture Perret UNESCO",
    title: "Déménager au Havre avec Moverz - Pros vérifiés",
  },
  // Villeurbanne (agglomération lyonnaise) — utilise photo Lyon
  villeurbanne: {
    src: "/images/cities/lyon-basilique-fourviere-toits.jpg",
    alt: "Déménagement Villeurbanne - Agglomération lyonnaise, Lyon à proximité",
    title: "Déménager à Villeurbanne avec Moverz - Pros vérifiés",
  },
  // Phase 2 — 35 villes supplémentaires (55 total)
  "clermont-ferrand": { src: "/images/cities/clermont-ferrand-puy-dome.jpg", alt: "Déménagement Clermont-Ferrand - Puy de Dôme et centre-ville", title: "Déménager à Clermont-Ferrand avec Moverz - Pros vérifiés" },
  tours: { src: "/images/cities/tours-val-de-loire.jpg", alt: "Déménagement Tours - Val de Loire et centre historique", title: "Déménager à Tours avec Moverz - Pros vérifiés" },
  "aix-en-provence": { src: "/images/cities/aix-en-provence-cours-mirabeau.jpg", alt: "Déménagement Aix-en-Provence - Cours Mirabeau et centre provençal", title: "Déménager à Aix-en-Provence avec Moverz - Pros vérifiés" },
  avignon: { src: "/images/cities/avignon-palais-papes.jpg", alt: "Déménagement Avignon - Palais des Papes et remparts", title: "Déménager à Avignon avec Moverz - Pros vérifiés" },
  cannes: { src: "/images/cities/cannes-croisette.jpg", alt: "Déménagement Cannes - Croisette et bord de mer", title: "Déménager à Cannes avec Moverz - Pros vérifiés" },
  annecy: { src: "/images/cities/annecy-lac-vieille-ville.jpg", alt: "Déménagement Annecy - Lac et vieille ville", title: "Déménager à Annecy avec Moverz - Pros vérifiés" },
  chambery: { src: "/images/cities/chambery-chateaux-savoie.jpg", alt: "Déménagement Chambéry - Châteaux des Ducs de Savoie", title: "Déménager à Chambéry avec Moverz - Pros vérifiés" },
  valence: { src: "/images/cities/valence-centre-ville.jpg", alt: "Déménagement Valence - Centre-ville Drôme", title: "Déménager à Valence avec Moverz - Pros vérifiés" },
  perpignan: { src: "/images/cities/perpignan-castillet.jpg", alt: "Déménagement Perpignan - Castillet et centre catalan", title: "Déménager à Perpignan avec Moverz - Pros vérifiés" },
  beziers: { src: "/images/cities/beziers-canal-midi.jpg", alt: "Déménagement Béziers - Canal du Midi et centre historique", title: "Déménager à Béziers avec Moverz - Pros vérifiés" },
  narbonne: { src: "/images/cities/narbonne-cathedrale.jpg", alt: "Déménagement Narbonne - Cathédrale et centre méditerranéen", title: "Déménager à Narbonne avec Moverz - Pros vérifiés" },
  carcassonne: { src: "/images/cities/carcassonne-cite-medievale.jpg", alt: "Déménagement Carcassonne - Cité médiévale classée UNESCO", title: "Déménager à Carcassonne avec Moverz - Pros vérifiés" },
  albi: { src: "/images/cities/albi-cathedrale.jpg", alt: "Déménagement Albi - Cathédrale Sainte-Cécile et briques rouges", title: "Déménager à Albi avec Moverz - Pros vérifiés" },
  "la-rochelle": { src: "/images/cities/la-rochelle-vieux-port.jpg", alt: "Déménagement La Rochelle - Vieux port et tour de la Chaîne", title: "Déménager à La Rochelle avec Moverz - Pros vérifiés" },
  poitiers: { src: "/images/cities/poitiers-centre-historique.jpg", alt: "Déménagement Poitiers - Centre historique et baptistère", title: "Déménager à Poitiers avec Moverz - Pros vérifiés" },
  limoges: { src: "/images/cities/limoges-porcelaine.jpg", alt: "Déménagement Limoges - Ville de la porcelaine et gare", title: "Déménager à Limoges avec Moverz - Pros vérifiés" },
  pau: { src: "/images/cities/pau-chateau.jpg", alt: "Déménagement Pau - Château et vue sur les Pyrénées", title: "Déménager à Pau avec Moverz - Pros vérifiés" },
  bayonne: { src: "/images/cities/bayonne-vieux-bayonne.jpg", alt: "Déménagement Bayonne - Vieux Bayonne et Pays basque", title: "Déménager à Bayonne avec Moverz - Pros vérifiés" },
  biarritz: { src: "/images/cities/biarritz-plage.jpg", alt: "Déménagement Biarritz - Grande Plage et Côte basque", title: "Déménager à Biarritz avec Moverz - Pros vérifiés" },
  amiens: { src: "/images/cities/amiens-cathedrale.jpg", alt: "Déménagement Amiens - Cathédrale et hortillonnages", title: "Déménager à Amiens avec Moverz - Pros vérifiés" },
  dunkerque: { src: "/images/cities/dunkerque-port-plage.jpg", alt: "Déménagement Dunkerque - Port et plage du nord", title: "Déménager à Dunkerque avec Moverz - Pros vérifiés" },
  calais: { src: "/images/cities/calais-centre.jpg", alt: "Déménagement Calais - Centre-ville et Côte d'Opale", title: "Déménager à Calais avec Moverz - Pros vérifiés" },
  roubaix: { src: "/images/cities/roubaix-piscine-musee.jpg", alt: "Déménagement Roubaix - La Piscine musée et métropole lilloise", title: "Déménager à Roubaix avec Moverz - Pros vérifiés" },
  tourcoing: { src: "/images/cities/tourcoing-centre.jpg", alt: "Déménagement Tourcoing - Centre métropole lilloise", title: "Déménager à Tourcoing avec Moverz - Pros vérifiés" },
  metz: { src: "/images/cities/metz-cathedrale.jpg", alt: "Déménagement Metz - Cathédrale Saint-Étienne et centre", title: "Déménager à Metz avec Moverz - Pros vérifiés" },
  nancy: { src: "/images/cities/nancy-place-stanislas.jpg", alt: "Déménagement Nancy - Place Stanislas classée UNESCO", title: "Déménager à Nancy avec Moverz - Pros vérifiés" },
  mulhouse: { src: "/images/cities/mulhouse-centre-alsace.jpg", alt: "Déménagement Mulhouse - Centre-ville alsacien", title: "Déménager à Mulhouse avec Moverz - Pros vérifiés" },
  colmar: { src: "/images/cities/colmar-petite-venise.jpg", alt: "Déménagement Colmar - Petite Venise alsacienne", title: "Déménager à Colmar avec Moverz - Pros vérifiés" },
  troyes: { src: "/images/cities/troyes-centre-champagne.jpg", alt: "Déménagement Troyes - Centre historique Champagne", title: "Déménager à Troyes avec Moverz - Pros vérifiés" },
  "le-mans": { src: "/images/cities/le-mans-vieille-ville.jpg", alt: "Déménagement Le Mans - Vieille ville et 24 Heures", title: "Déménager au Mans avec Moverz - Pros vérifiés" },
  "saint-nazaire": { src: "/images/cities/saint-nazaire-port.jpg", alt: "Déménagement Saint-Nazaire - Port et chantiers navals", title: "Déménager à Saint-Nazaire avec Moverz - Pros vérifiés" },
  brest: { src: "/images/cities/brest-port.jpg", alt: "Déménagement Brest - Port et rade de Brest", title: "Déménager à Brest avec Moverz - Pros vérifiés" },
  quimper: { src: "/images/cities/quimper-cathedrale.jpg", alt: "Déménagement Quimper - Cathédrale et vieille ville bretonne", title: "Déménager à Quimper avec Moverz - Pros vérifiés" },
  lorient: { src: "/images/cities/lorient-port.jpg", alt: "Déménagement Lorient - Port et base sous-marine", title: "Déménager à Lorient avec Moverz - Pros vérifiés" },
  vannes: { src: "/images/cities/vannes-intra-muros.jpg", alt: "Déménagement Vannes - Intra-muros et Golfe du Morbihan", title: "Déménager à Vannes avec Moverz - Pros vérifiés" },
  "saint-malo": { src: "/images/cities/saint-malo-remparts.jpg", alt: "Déménagement Saint-Malo - Remparts et cité corsaire", title: "Déménager à Saint-Malo avec Moverz - Pros vérifiés" },
  caen: { src: "/images/cities/caen-chateau.jpg", alt: "Déménagement Caen - Château et abbayes normandes", title: "Déménager à Caen avec Moverz - Pros vérifiés" },
  "cherbourg-en-cotentin": { src: "/images/cities/cherbourg-port.jpg", alt: "Déménagement Cherbourg - Port et Cité de la Mer", title: "Déménager à Cherbourg avec Moverz - Pros vérifiés" },
  orleans: { src: "/images/cities/orleans-place-martroi.jpg", alt: "Déménagement Orléans - Place du Martroi et Loire", title: "Déménager à Orléans avec Moverz - Pros vérifiés" },
  blois: { src: "/images/cities/blois-chateau.jpg", alt: "Déménagement Blois - Château de Blois et Loire", title: "Déménager à Blois avec Moverz - Pros vérifiés" },
  chartres: { src: "/images/cities/chartres-cathedrale.jpg", alt: "Déménagement Chartres - Cathédrale et centre historique", title: "Déménager à Chartres avec Moverz - Pros vérifiés" },
  besancon: { src: "/images/cities/besancon-citadelle.jpg", alt: "Déménagement Besançon - Citadelle Vauban et centre", title: "Déménager à Besançon avec Moverz - Pros vérifiés" },
  belfort: { src: "/images/cities/belfort-lion.jpg", alt: "Déménagement Belfort - Lion de Belfort et citadelle", title: "Déménager à Belfort avec Moverz - Pros vérifiés" },
  ajaccio: { src: "/images/cities/ajaccio-port-corse.jpg", alt: "Déménagement Ajaccio - Port et naissance de Napoléon", title: "Déménager à Ajaccio avec Moverz - Pros vérifiés" },
  bastia: { src: "/images/cities/bastia-port-corse.jpg", alt: "Déménagement Bastia - Port corse et Cap Corse", title: "Déménager à Bastia avec Moverz - Pros vérifiés" },
  // Phase 3 — 25 villes supplémentaires (80 total)
  versailles: { src: "/images/cities/versailles-chateau.jpg", alt: "Déménagement Versailles - Château et ville royale", title: "Déménager à Versailles avec Moverz - Pros vérifiés" },
  "boulogne-billancourt": { src: "/images/cities/boulogne-billancourt-ile-de-france.jpg", alt: "Déménagement Boulogne-Billancourt - Hauts-de-Seine Île-de-France", title: "Déménager à Boulogne-Billancourt avec Moverz - Pros vérifiés" },
  antibes: { src: "/images/cities/antibes-cap.jpg", alt: "Déménagement Antibes - Cap d'Antibes et Côte d'Azur", title: "Déménager à Antibes avec Moverz - Pros vérifiés" },
  frejus: { src: "/images/cities/frejus-plage.jpg", alt: "Déménagement Fréjus - Plage et centre historique Var", title: "Déménager à Fréjus avec Moverz - Pros vérifiés" },
  arles: { src: "/images/cities/arles-arenes.jpg", alt: "Déménagement Arles - Arènes et patrimoine romain", title: "Déménager à Arles avec Moverz - Pros vérifiés" },
  sete: { src: "/images/cities/sete-port.jpg", alt: "Déménagement Sète - Port et canal de Sète", title: "Déménager à Sète avec Moverz - Pros vérifiés" },
  montauban: { src: "/images/cities/montauban-place-nationale.jpg", alt: "Déménagement Montauban - Place Nationale et centre Tarn-et-Garonne", title: "Déménager à Montauban avec Moverz - Pros vérifiés" },
  tarbes: { src: "/images/cities/tarbes-pyrenees.jpg", alt: "Déménagement Tarbes - Centre et vue Pyrénées", title: "Déménager à Tarbes avec Moverz - Pros vérifiés" },
  niort: { src: "/images/cities/niort-centre.jpg", alt: "Déménagement Niort - Centre-ville et donjon", title: "Déménager à Niort avec Moverz - Pros vérifiés" },
  angouleme: { src: "/images/cities/angouleme-cathedrale.jpg", alt: "Déménagement Angoulême - Cathédrale et cité de la BD", title: "Déménager à Angoulême avec Moverz - Pros vérifiés" },
  arcachon: { src: "/images/cities/arcachon-bassin.jpg", alt: "Déménagement Arcachon - Bassin et Dune du Pilat", title: "Déménager à Arcachon avec Moverz - Pros vérifiés" },
  "villeneuve-dascq": { src: "/images/cities/villeneuve-dascq-metropole.jpg", alt: "Déménagement Villeneuve-d'Ascq - Métropole lilloise", title: "Déménager à Villeneuve-d'Ascq avec Moverz - Pros vérifiés" },
  arras: { src: "/images/cities/arras-place.jpg", alt: "Déménagement Arras - Grand Place et centre historique", title: "Déménager à Arras avec Moverz - Pros vérifiés" },
  lens: { src: "/images/cities/lens-centre.jpg", alt: "Déménagement Lens - Centre et bassin minier", title: "Déménager à Lens avec Moverz - Pros vérifiés" },
  valenciennes: { src: "/images/cities/valenciennes-place.jpg", alt: "Déménagement Valenciennes - Place d'Armes et centre", title: "Déménager à Valenciennes avec Moverz - Pros vérifiés" },
  thionville: { src: "/images/cities/thionville-moselle.jpg", alt: "Déménagement Thionville - Centre-ville Moselle", title: "Déménager à Thionville avec Moverz - Pros vérifiés" },
  epinal: { src: "/images/cities/epinal-vosges.jpg", alt: "Déménagement Épinal - Préfecture des Vosges", title: "Déménager à Épinal avec Moverz - Pros vérifiés" },
  laval: { src: "/images/cities/laval-mayenne.jpg", alt: "Déménagement Laval - Château et vieille ville Mayenne", title: "Déménager à Laval avec Moverz - Pros vérifiés" },
  "la-roche-sur-yon": { src: "/images/cities/la-roche-sur-yon-vendee.jpg", alt: "Déménagement La Roche-sur-Yon - Préfecture Vendée", title: "Déménager à La Roche-sur-Yon avec Moverz - Pros vérifiés" },
  cholet: { src: "/images/cities/cholet-mauges.jpg", alt: "Déménagement Cholet - Centre des Mauges", title: "Déménager à Cholet avec Moverz - Pros vérifiés" },
  "saint-brieuc": { src: "/images/cities/saint-brieuc-baie.jpg", alt: "Déménagement Saint-Brieuc - Baie et Côtes-d'Armor", title: "Déménager à Saint-Brieuc avec Moverz - Pros vérifiés" },
  evreux: { src: "/images/cities/evreux-normandie.jpg", alt: "Déménagement Évreux - Cathédrale et Eure", title: "Déménager à Évreux avec Moverz - Pros vérifiés" },
  dieppe: { src: "/images/cities/dieppe-port.jpg", alt: "Déménagement Dieppe - Port et falaises normandes", title: "Déménager à Dieppe avec Moverz - Pros vérifiés" },
  bourges: { src: "/images/cities/bourges-cathedrale.jpg", alt: "Déménagement Bourges - Cathédrale et Berry", title: "Déménager à Bourges avec Moverz - Pros vérifiés" },
  chateauroux: { src: "/images/cities/chateauroux-indre.jpg", alt: "Déménagement Châteauroux - Centre et Indre", title: "Déménager à Châteauroux avec Moverz - Pros vérifiés" },
};

// Fallback pour les autres villes (photo Paris générique)
const FALLBACK_PHOTO = {
  src: "/images/cities/paris-tour-eiffel-toits.jpg",
  alt: "Déménagement en France - Vue ville",
  title: "Déménager en France avec Moverz",
};

// Photos de déménageurs professionnels en action — images locales SEO-optimized
const MOVER_PHOTOS = [
  {
    src: "/images/cities/demenageur-professionnel-cartons-transport.jpg",
    alt: "Déménageurs professionnels transportant des cartons",
    title: "Déménageurs vérifiés Moverz en action",
  },
  {
    src: "/images/cities/demenageur-camion-equipe-action.jpg",
    alt: "Camion de déménagement et équipe de déménageurs professionnels",
    title: "Équipe de déménageurs Moverz - Camion et professionnels",
  },
  {
    src: "/images/cities/demenageur-transport-carton-professionnel.jpg",
    alt: "Déménageur professionnel transportant un carton",
    title: "Déménageur professionnel Moverz - Transport sécurisé",
  },
];

export function CityPhoto({ citySlug, cityName }: CityPhotoProps) {
  const landmarkPhoto = CITY_PHOTOS[citySlug] ?? FALLBACK_PHOTO;
  // Sélection d'une photo de déménageur basée sur le slug (pour cohérence entre visites)
  const moverPhoto = MOVER_PHOTOS[citySlug.length % MOVER_PHOTOS.length];

  return (
    <section className="section section-light py-0">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Photo 1 : Landmark de la ville — SEO optimized */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-v4-border">
            <Image
              src={landmarkPhoto.src}
              alt={landmarkPhoto.alt}
              title={landmarkPhoto.title}
              width={600}
              height={400}
              className="w-full object-cover"
              style={{ height: "280px" }}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-v4-text backdrop-blur-sm">
                {cityName}
              </span>
            </div>
          </div>

          {/* Photo 2 : Déménageur en action — SEO optimized */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-v4-border">
            <Image
              src={moverPhoto.src}
              alt={`${moverPhoto.alt} ${cityName}`}
              title={`${moverPhoto.title} - ${cityName}`}
              width={600}
              height={400}
              className="w-full object-cover"
              style={{ height: "280px" }}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-v4-text backdrop-blur-sm">
                Déménageurs vérifiés
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
