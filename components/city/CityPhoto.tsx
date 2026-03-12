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
};

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
