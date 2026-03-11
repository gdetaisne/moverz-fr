import Image from "next/image";

type CityPhotoProps = {
  citySlug: string;
  cityName: string;
};

// Photos libres de droits (Unsplash) — une par ville
// Format : { src, credit, creditUrl, width, height }
const CITY_PHOTOS: Record<string, { src: string; alt: string; credit: string }> = {
  bordeaux: {
    src: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=1200&q=80&auto=format&fit=crop",
    alt: "Miroir d'eau et quais de Bordeaux",
    credit: "Unsplash",
  },
  lyon: {
    src: "https://images.unsplash.com/photo-1627308595127-2acbef0b5e45?w=1200&q=80&auto=format&fit=crop",
    alt: "Basilique de Fourvière et toits de Lyon",
    credit: "Unsplash",
  },
  marseille: {
    src: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=1200&q=80&auto=format&fit=crop",
    alt: "Vieux-Port de Marseille",
    credit: "Unsplash",
  },
  paris: {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop",
    alt: "Tour Eiffel et toits de Paris",
    credit: "Unsplash",
  },
  toulouse: {
    src: "https://images.unsplash.com/photo-1590073842125-e6a0fd6cf568?w=1200&q=80&auto=format&fit=crop",
    alt: "Place du Capitole à Toulouse",
    credit: "Unsplash",
  },
  lille: {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
    alt: "Grand-Place de Lille",
    credit: "Unsplash",
  },
  nice: {
    src: "https://images.unsplash.com/photo-1490650034902-8665b02f33e0?w=1200&q=80&auto=format&fit=crop",
    alt: "Promenade des Anglais à Nice",
    credit: "Unsplash",
  },
  nantes: {
    src: "https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop",
    alt: "Château des Ducs de Bretagne à Nantes",
    credit: "Unsplash",
  },
  strasbourg: {
    src: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop",
    alt: "La Petite France à Strasbourg",
    credit: "Unsplash",
  },
  rennes: {
    src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop",
    alt: "Place du Parlement de Bretagne à Rennes",
    credit: "Unsplash",
  },
  montpellier: {
    src: "https://images.unsplash.com/photo-1562159017-d67f2e4f8d46?w=1200&q=80&auto=format&fit=crop",
    alt: "Place de la Comédie à Montpellier",
    credit: "Unsplash",
  },
  grenoble: {
    src: "https://images.unsplash.com/photo-1603088549155-4e9e5e2b4c72?w=1200&q=80&auto=format&fit=crop",
    alt: "Bastille et vue panoramique de Grenoble",
    credit: "Unsplash",
  },
  rouen: {
    src: "https://images.unsplash.com/photo-1600639547028-0d8b6e31b26a?w=1200&q=80&auto=format&fit=crop",
    alt: "Cathédrale Notre-Dame de Rouen",
    credit: "Unsplash",
  },
};

const FALLBACK_PHOTO = {
  src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop",
  alt: "Ville de France",
  credit: "Unsplash",
};

export function CityPhoto({ citySlug, cityName }: CityPhotoProps) {
  const photo = CITY_PHOTOS[citySlug] ?? FALLBACK_PHOTO;

  return (
    <section className="section section-light py-0">
      <div className="container max-w-4xl">
        <div className="relative w-full overflow-hidden rounded-2xl border border-v4-border">
          <Image
            src={photo.src}
            alt={`Déménagement ${cityName} — ${photo.alt}`}
            width={1200}
            height={480}
            className="w-full object-cover"
            style={{ maxHeight: "320px" }}
            priority={false}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-v4-text backdrop-blur-sm">
              Déménager à {cityName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
