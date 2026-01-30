import type { CityServiceSection } from "@/components/templates/CityServicePage";

export type ServiceSlug =
  | "pas-cher"
  | "garde-meuble"
  | "location-camion"
  | "petit-demenagement"
  | "aide-demenagement"
  | "entreprise"
  | "piano"
  | "international";

export const SERVICE_SLUGS: ServiceSlug[] = [
  "pas-cher",
  "garde-meuble",
  "location-camion",
  "petit-demenagement",
  "aide-demenagement",
  "entreprise",
  "piano",
  "international",
];

type ServiceDefinition = {
  slug: ServiceSlug;
  badge: string;
  h1: (cityName: string) => string;
  subtitle: (cityName: string) => string;
  title: (cityName: string) => string;
  description: (cityName: string) => string;
  sections: (cityName: string) => CityServiceSection[];
};

const sectionsCommon = (cityName: string): CityServiceSection[] => [
  {
    title: `Obtenir un devis fiable à ${cityName}`,
    paragraphs: [
      "Un devis “pas cher” peut être trompeur si le volume ou les accès sont sous-estimés. Pour comparer utilement, tous les prestataires doivent partir des mêmes informations.",
      "Avec Moverz, vous créez un dossier unique : l’IA aide à fiabiliser le volume, puis vous recevez des devis standardisés (comparables) sans spam.",
    ],
    bullets: [
      "Même volume + mêmes accès = comparaison objective.",
      "Moins de suppléments “sur place” (informations complètes dès le départ).",
      "Dossier anonyme : vous gardez le contrôle.",
    ],
  },
];

export const SERVICE_DEFINITIONS: Record<ServiceSlug, ServiceDefinition> = {
  "pas-cher": {
    slug: "pas-cher",
    badge: "Budget",
    h1: (cityName) => `Déménagement pas cher à ${cityName}`,
    subtitle: (cityName) =>
      `Les leviers qui font vraiment baisser la facture à ${cityName} (date, volume, accès) — sans sacrifier la fiabilité.`,
    title: (cityName) => `Déménagement pas cher ${cityName} : astuces + devis comparables`,
    description: (cityName) =>
      `Déménagement pas cher à ${cityName} : conseils concrets (dates, volume, accès) + 3 devis minimum comparables et sans spam via Moverz.`,
    sections: (cityName) => [
      {
        title: `Ce qui fait varier le prix à ${cityName}`,
        paragraphs: [
          "Le coût dépend principalement du volume (m³), des accès (étage/ascenseur/portage) et de la période (été, week-ends, fin de mois).",
          "La meilleure économie est souvent la préparation : réduire le volume et éviter les créneaux les plus demandés.",
        ],
        bullets: [
          "Trier avant de comparer des devis (moins de m³ = moins cher).",
          "Préparer tout prêt (cartons fermés/étiquetés) pour réduire le temps sur place.",
          "Décrire précisément les accès et le stationnement.",
        ],
      },
      {
        title: "Formules économiques : le bon compromis",
        paragraphs: [
          "Pour payer moins, vous pouvez faire une partie du travail (emballage/déballage) et confier le transport à des pros.",
          "Le bon compromis dépend surtout de votre temps et des contraintes d’accès.",
        ],
        bullets: [
          "Éco : vous emballez, les pros transportent.",
          "Standard : protection + démontage/remontage + transport.",
          "Confort : tout inclus (utile si contraintes fortes).",
        ],
      },
      ...sectionsCommon(cityName),
    ],
  },
  "garde-meuble": {
    slug: "garde-meuble",
    badge: "Stockage",
    h1: (cityName) => `Garde-meuble à ${cityName}`,
    subtitle: (cityName) =>
      `Box, self-stockage, garde-meuble via déménageur… comment choisir la bonne solution de stockage à ${cityName} (taille, sécurité, accès).`,
    title: (cityName) => `Garde-meuble ${cityName} : box, stockage, tarifs & devis`,
    description: (cityName) =>
      `Garde-meuble à ${cityName} : comparer box/self-stockage et solutions avec déménageur. Tailles, sécurité, assurance + 3 devis minimum via Moverz.`,
    sections: (cityName) => [
      {
        title: `Quand un garde-meuble est utile à ${cityName} ?`,
        paragraphs: [
          "Le garde-meuble est idéal en transition : déménagement en deux temps, travaux, décalage entre vente/achat, ou manque de place temporaire.",
          "Le bon choix dépend de la durée, de la fréquence d’accès et du niveau de service souhaité (transport/manutention).",
        ],
        bullets: [
          "Self-stockage : accès plus flexible à votre box.",
          "Garde-meuble via déménageur : prise en charge complète, pratique si accès complexe.",
          "Vérifier l’assurance (valeur déclarée, exclusions, franchise).",
        ],
      },
      {
        title: "Comment estimer le budget",
        paragraphs: [
          "Le coût dépend surtout de la taille (m²/m³), de la durée et des services (manutention, accès, options d’assurance).",
          "Ne sous-estimez pas les frais liés aux accès (étage, portage) : ils pèsent souvent plus que le stockage lui-même.",
        ],
        bullets: [
          "Partir d’un volume (m³) pour choisir la taille du box.",
          "Comparer les frais fixes (mise en box, dossier, manutention).",
        ],
      },
      ...sectionsCommon(cityName),
    ],
  },
  "location-camion": {
    slug: "location-camion",
    badge: "DIY",
    h1: (cityName) => `Location camion déménagement à ${cityName}`,
    subtitle: (cityName) =>
      `Choisir le bon utilitaire à ${cityName} (volume, permis, assurance) et éviter les pièges (caution, stationnement, gabarit).`,
    title: (cityName) => `Location camion déménagement ${cityName} : volumes, prix & conseils`,
    description: (cityName) =>
      `Location camion déménagement à ${cityName} : quel volume choisir, prix, conditions (permis, caution), conseils stationnement + alternative : comparer 3 devis minimum pros.`,
    sections: (cityName) => [
      {
        title: "Quel volume d’utilitaire choisir ?",
        paragraphs: [
          "Le volume (m³) est le point clé : trop petit = allers-retours, trop grand = conduite et stationnement plus difficiles.",
          "Si vous hésitez, dimensionnez pour faire un trajet : c’est souvent plus simple et plus sûr.",
        ],
        bullets: [
          "Studio / petit T1 : 10–12 m³ (ordre de grandeur).",
          "T2 / T3 : 12–20 m³ selon volume réel.",
          "Maison : 20 m³+ (ou 2 véhicules).",
        ],
      },
      {
        title: `Stationnement et accès à ${cityName}`,
        paragraphs: [
          "Le chargement/déchargement coûte du temps si le camion ne peut pas se rapprocher. Anticiper l’accès réduit la fatigue et le risque de casse.",
          "Selon la zone, une autorisation d’occupation temporaire peut être nécessaire : vérifiez localement.",
        ],
        bullets: ["Repérez la distance camion → porte.", "Protégez les parties communes (couvertures, coins)."],
      },
      ...sectionsCommon(cityName),
    ],
  },
  "petit-demenagement": {
    slug: "petit-demenagement",
    badge: "Petit volume",
    h1: (cityName) => `Petit déménagement à ${cityName}`,
    subtitle: (cityName) =>
      `Quelques meubles, un studio, une colocation ? Les options les plus efficaces pour un petit volume à ${cityName} : rapide, économique, sans surprise.`,
    title: (cityName) => `Petit déménagement ${cityName} : transport petit volume & devis`,
    description: (cityName) =>
      `Petit déménagement à ${cityName} (petit volume) : options, accès, timing. Comparez 3 devis minimum pros pour transporter quelques meubles/cartons.`,
    sections: (cityName) => [
      {
        title: "Petit volume : ce qui compte vraiment",
        paragraphs: [
          "Sur un petit déménagement, le prix dépend souvent du temps de manutention (accès, stationnement, portage) plus que du volume lui-même.",
          "Avec des infos complètes, vous évitez les suppléments et vous comparez des devis fiables.",
        ],
        bullets: [
          "Préparer tout avant l’arrivée (cartons, démontage simple).",
          "Décrire précisément l’accès (étage/ascenseur/portage).",
        ],
      },
      ...sectionsCommon(cityName),
    ],
  },
  "aide-demenagement": {
    slug: "aide-demenagement",
    badge: "À la carte",
    h1: (cityName) => `Aide au déménagement à ${cityName}`,
    subtitle: (cityName) =>
      `Main d’œuvre, manutention, matériel, monte-meuble : comment choisir une aide à la carte à ${cityName} et obtenir un devis clair.`,
    title: (cityName) => `Aide au déménagement ${cityName} : main d’œuvre, matériel, devis`,
    description: (cityName) =>
      `Aide au déménagement à ${cityName} : porteurs, manutention, monte-meuble, matériel. Conseils + 3 devis minimum comparables, sans spam.`,
    sections: (cityName) => [
      {
        title: "Aide ponctuelle : les cas les plus fréquents",
        paragraphs: [
          "Beaucoup de projets n’ont pas besoin d’un déménagement complet : seulement des porteurs, du matériel, ou une solution d’accès (monte-meuble).",
          "La clé est de cadrer précisément le besoin (avec ou sans camion, durée estimée, objets lourds).",
        ],
        bullets: ["Porteurs (chargement/déchargement)", "Matériel (diable, sangles, couvertures)", "Monte-meuble si accès difficile"],
      },
      ...sectionsCommon(cityName),
    ],
  },
  entreprise: {
    slug: "entreprise",
    badge: "B2B",
    h1: (cityName) => `Déménagement d’entreprise à ${cityName}`,
    subtitle: (cityName) =>
      `Transfert de bureaux, archives, informatique : organiser un déménagement pro à ${cityName} sans rupture d’activité.`,
    title: (cityName) => `Déménagement entreprise ${cityName} : transfert bureaux, devis`,
    description: (cityName) =>
      `Déménagement d’entreprise à ${cityName} : transfert de bureaux, informatique, archives. Méthode, continuité d’activité, assurance + 3 devis minimum comparables.`,
    sections: (cityName) => [
      {
        title: "Objectif : continuité d’activité",
        paragraphs: [
          "Un déménagement d’entreprise est un projet logistique. Le bon prestataire propose une méthode (rétroplanning, repérage, phasage) autant qu’un prix.",
          "Pour comparer utilement, les devis doivent être sur le même cahier des charges (périmètre, horaires, assurance).",
        ],
        bullets: [
          "Planification + interlocuteur unique",
          "Étiquetage poste → emplacement",
          "Assurance adaptée au matériel",
        ],
      },
      ...sectionsCommon(cityName),
    ],
  },
  piano: {
    slug: "piano",
    badge: "Objet lourd",
    h1: (cityName) => `Déménagement de piano à ${cityName}`,
    subtitle: (cityName) =>
      `Un piano est lourd et fragile : méthode, matériel et assurance comptent. Voici l’essentiel pour un transport sécurisé à ${cityName}.`,
    title: (cityName) => `Déménagement piano ${cityName} : transport sécurisé, devis`,
    description: (cityName) =>
      `Déménagement piano à ${cityName} : piano droit ou à queue, accès, protections, assurance. Conseils + 3 devis minimum de pros pour un transport sécurisé.`,
    sections: (cityName) => [
      {
        title: "Pourquoi un piano nécessite un spécialiste",
        paragraphs: [
          "Le risque n’est pas seulement la casse : c’est aussi l’impact sur le mécanisme, la finition et les parties communes.",
          "Le bon devis dépend surtout du type de piano et des accès.",
        ],
        bullets: ["Type de piano (droit/queue)", "Accès (étage, escalier, monte-meuble)", "Assurance (valeur déclarée, exclusions)"],
      },
      ...sectionsCommon(cityName),
    ],
  },
  international: {
    slug: "international",
    badge: "International",
    h1: (cityName) => `Déménagement international depuis ${cityName}`,
    subtitle: (cityName) =>
      `Transport, documents, assurance, délais : les bases pour réussir un déménagement international depuis ou vers ${cityName}.`,
    title: (cityName) => `Déménagement international ${cityName} : Europe/monde, devis`,
    description: (cityName) =>
      `Déménagement international depuis/vers ${cityName} : modes de transport, formalités, assurance, stockage. Conseils + 3 devis minimum comparables via Moverz.`,
    sections: (cityName) => [
      {
        title: "International : cadrer le projet",
        paragraphs: [
          "L’international demande plus de coordination : délais, documents, assurance, et parfois stockage temporaire.",
          "Pour comparer, fixez un dossier clair (volume, accès, destination, fenêtre de dates).",
        ],
        bullets: ["Routier (Europe) vs maritime/aérien (selon volume/délais)", "Inventaire utile (assurance + organisation)", "Stockage temporaire si dates incertaines"],
      },
      ...sectionsCommon(cityName),
    ],
  },
};


