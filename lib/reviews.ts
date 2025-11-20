/**
 * Avis clients génériques pour le hub Moverz
 * Ces avis sont affichés sur la homepage nationale
 */

interface Review {
  author: string;
  rating: number;
  summary: string;
  body: string;
  city: string;
}

export const MOVERZ_REVIEWS: Review[] = [
  {
    author: "Sophie — Lyon",
    rating: 5,
    summary: "Comparaison limpide des offres",
    body: "Les 5 devis reçus étaient structurés exactement pareil. Impossible de me tromper sur les options ou les prix.",
    city: "Lyon"
  },
  {
    author: "Thomas — Nice",
    rating: 4.9,
    summary: "Zéro démarchage téléphonique",
    body: "Grâce au dossier anonyme, aucun déménageur ne m'a appelé en direct. Je garde le contrôle et je choisis quand je veux rappeler.",
    city: "Nice"
  },
  {
    author: "Marie — Marseille",
    rating: 5,
    summary: "Estimation très précise",
    body: "L'estimation fournie m'a donné un volume précis et chaque devis proposait la bonne taille de camion du premier coup.",
    city: "Marseille"
  },
  {
    author: "Alexandre — Toulouse",
    rating: 4.8,
    summary: "Gain de temps considérable",
    body: "Un seul dossier à remplir et 5 devis en quelques jours. Plus besoin de répéter 10 fois les mêmes infos à différentes personnes.",
    city: "Toulouse"
  },
  {
    author: "Julie — Bordeaux",
    rating: 5,
    summary: "Transparence totale",
    body: "Enfin un comparateur où les devis sont vraiment comparables. Tous partent du même inventaire, aucune surprise.",
    city: "Bordeaux"
  },
  {
    author: "Pierre — Lille",
    rating: 4.9,
    summary: "Service professionnel",
    body: "Les déménageurs proposés étaient tous sérieux et bien notés. J'ai pu choisir en toute confiance.",
    city: "Lille"
  },
];

/**
 * Sélectionne aléatoirement N avis
 */
export function getRandomReviews(count: number = 3): Review[] {
  const shuffled = [...MOVERZ_REVIEWS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Calcule la note moyenne
 */
export function getAverageRating(reviews: Review[] = MOVERZ_REVIEWS): number {
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/**
 * Retourne le nombre total d'avis
 */
export function getTotalReviews(): number {
  return MOVERZ_REVIEWS.length;
}

