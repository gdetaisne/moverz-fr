/**
 * Vrais avis Google Maps — Moverz
 * Source : https://maps.app.goo.gl/KNDhXrjkhB55yJbr5
 * ⚠️ Ne JAMAIS afficher le nombre d'avis côté front.
 */

interface Review {
  author: string;
  rating: number;
  summary: string;
  body: string;
  date: string; // mois de visite
}

export const MOVERZ_REVIEWS: Review[] = [
  {
    author: "Nicolas de Rosen",
    rating: 5,
    summary: "Service très efficace",
    body: "Service très efficace. J'ai trouvé en 3 jours un déménageur de qualité à prix très concurrentiel. Je recommande.",
    date: "février 2026",
  },
  {
    author: "Luigi Delo",
    rating: 5,
    summary: "Process smooth, bon boulot",
    body: "Super content de la prestation, le process était smooth et la société sélectionnée a fait du bon boulot. Je recommande.",
    date: "février 2026",
  },
  {
    author: "Karl Stehelin",
    rating: 5,
    summary: "Plateforme simple et transparente",
    body: "Très bonne expérience avec Moverz. La plateforme est simple, claire et vraiment utile quand on prépare un déménagement. J'ai reçu plusieurs devis en quelques jours, sans avoir à relancer qui que ce soit. Le comparatif est transparent.",
    date: "janvier 2026",
  },
  {
    author: "Amela de Thomasson",
    rating: 5,
    summary: "Vérifications rassurantes",
    body: "Vérifications des partenaires rassurante !",
    date: "février 2026",
  },
];

/**
 * Retourne les N premiers avis (déterministe, pas de random).
 */
export function getRandomReviews(count: number = 3): Review[] {
  return MOVERZ_REVIEWS.slice(0, count);
}

/**
 * Calcule la note moyenne
 */
export function getAverageRating(reviews: Review[] = MOVERZ_REVIEWS): number {
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
