export interface CityReview {
  name: string;
  detail: string;
  text: string;
}

type CityReviewsMap = Record<string, CityReview[]>;

const GENERIC_REVIEWS: CityReview[] = [
  {
    name: "Claire",
    detail: "Déménagement de T3",
    text: "Dossier simple à remplir, j’ai reçu plusieurs devis très lisibles avec les mêmes informations. On a pu comparer facilement et éviter une offre sous-dimensionnée.",
  },
  {
    name: "Amine",
    detail: "Maison vers périphérie",
    text: "Les déménageurs avaient bien anticipé les accès compliqués. Le prix final correspondait au devis et l’équipe était pro du début à la fin.",
  },
  {
    name: "Sophie",
    detail: "Déménagement avec enfants",
    text: "On a pu se concentrer sur l’organisation de la famille. Pas d’appels agressifs, juste des devis propres et des échanges quand on l’a décidé.",
  },
];

const CITY_REVIEWS: CityReviewsMap = {
  paris: [
    {
      name: "Julie",
      detail: "Déménagement Paris 11e → 15e",
      text: "Beaucoup d’escaliers et un accès compliqué pour le camion. Les devis reçus via Moverz tenaient vraiment compte de la réalité des immeubles parisiens.",
    },
    {
      name: "Mathieu",
      detail: "Appartement à Paris puis banlieue proche",
      text: "On quittait un 3 pièces dans le centre pour une maison en proche banlieue. Les déménageurs sélectionnés connaissaient bien les contraintes de circulation et de stationnement.",
    },
    {
      name: "Sarah",
      detail: "Déménagement avec deux enfants",
      text: "On n’avait pas le temps d’appeler 10 entreprises. Un dossier unique, 4 devis clairs, on a pu choisir sereinement sans être harcelés.",
    },
  ],
  marseille: [
    {
      name: "Claire",
      detail: "T3 près du Vieux-Port",
      text: "Entre les rues étroites et le stationnement, on craignait les imprévus. Les déménageurs proposés connaissaient bien Marseille et tout s’est déroulé comme prévu.",
    },
    {
      name: "Nicolas",
      detail: "Appartement à Marseille → maison en périphérie",
      text: "Les devis reçus expliquaient clairement le temps de trajet, les accès et le matériel prévu. Pas de mauvaise surprise sur la facture finale.",
    },
    {
      name: "Sofia",
      detail: "Petit volume mais accès compliqué",
      text: "Même pour un volume modeste, les équipes ont pris au sérieux les contraintes d’escalier et de parking. Le devis correspondait exactement à la réalité.",
    },
  ],
  lyon: [
    {
      name: "Thomas",
      detail: "Déménagement Croix-Rousse → Presqu’île",
      text: "Les pentes et les escaliers nous faisaient peur. Les devis reçus via Moverz prenaient en compte ces contraintes et le jour J tout était parfaitement anticipé.",
    },
    {
      name: "Emma",
      detail: "Famille avec deux enfants",
      text: "On a pu comparer plusieurs offres sérieuses sans passer nos soirées au téléphone. Les prix et options étaient enfin comparables entre eux.",
    },
    {
      name: "Lucas",
      detail: "Appartement vers Villeurbanne",
      text: "Les déménageurs connaissaient bien les quartiers et les horaires à éviter. Le déménagement s’est fait sans stress.",
    },
  ],
  nice: [
    {
      name: "Valérie",
      detail: "Appartement Promenade des Anglais",
      text: "Entre le bord de mer et l’ascenseur étroit, on avait peur des surcoûts. Les devis Moverz étaient clairs et alignés sur la réalité des accès.",
    },
    {
      name: "Yann",
      detail: "Nice → commune voisine",
      text: "Les déménageurs sélectionnés connaissaient bien la métropole niçoise. Le trajet et le stationnement ont été gérés sans mauvaise surprise.",
    },
    {
      name: "Camille",
      detail: "Petit logement étudiant",
      text: "Même pour un petit volume, on a reçu des devis sérieux et adaptés à notre budget.",
    },
  ],
  toulouse: [
    {
      name: "Alexandre",
      detail: "Capitole → Saint-Cyprien",
      text: "Les équipes connaissaient bien le centre-ville toulousain. L’accès et les horaires ont été anticipés, on n’a pas eu de stress avec la circulation.",
    },
    {
      name: "Mélanie",
      detail: "Appartement vers la première couronne",
      text: "On a reçu plusieurs devis bien structurés pour notre déménagement vers la périphérie. Le choix a été rapide.",
    },
    {
      name: "Romain",
      detail: "Déménagement avec télétravail",
      text: "J’avais besoin que tout soit calé sur une seule journée. Les déménageurs proposés ont respecté le timing au quart d’heure près.",
    },
  ],
  bordeaux: [
    {
      name: "Julie",
      detail: "Bordeaux centre → Caudéran",
      text: "Les devis comparaient clairement les options de démontage et de remontage. On a choisi l’offre la plus adaptée sans craindre les lignes fines.",
    },
    {
      name: "Hugo",
      detail: "Appartement vers la métropole",
      text: "Les déménageurs connaissaient bien les communes autour de Bordeaux. Le trajet et les accès ont été gérés sans mauvaise surprise.",
    },
    {
      name: "Anaïs",
      detail: "Couple sans voiture",
      text: "On n’avait aucun moyen de transporter quoi que ce soit nous-mêmes. L’équipe choisie a tout pris en charge, du premier carton au dernier meuble.",
    },
  ],
  lille: [
    {
      name: "Pierre",
      detail: "Vieux-Lille → Lille-Centre",
      text: "Les ruelles étroites et le stationnement me faisaient peur. Les déménageurs choisis via Moverz connaissaient parfaitement le quartier.",
    },
    {
      name: "Leïla",
      detail: "Lille → Villeneuve-d’Ascq",
      text: "Les devis reçus détaillaient bien le temps de trajet, les options d’emballage et le nombre de déménageurs. Rien à redire sur l’exécution.",
    },
    {
      name: "Antoine",
      detail: "Colocation étudiante",
      text: "On a pu regrouper plusieurs petits volumes dans un seul déménagement. Les devis étaient clairs et adaptés à notre situation.",
    },
  ],
};

export function getCityReviewsBySlug(slug: string): CityReview[] {
  return CITY_REVIEWS[slug] ?? GENERIC_REVIEWS;
}


