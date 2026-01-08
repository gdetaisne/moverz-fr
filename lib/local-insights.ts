export type LocalInsightBlock = {
  title: string;
  paragraphs: string[];
  bullets: string[];
  photoChecklist: string[];
  avoidPeriods: string[];
};

type Focus =
  | "stationnement"
  | "acces-immeuble"
  | "volume"
  | "planning"
  | "objets-lourds"
  | "distance";

/**
 * Editorial overrides for priority cities.
 * Goal: genuinely unique, useful local guidance (not just templated variations).
 */
const CITY_OVERRIDES: Record<string, LocalInsightBlock> = {
  nice: {
    title: "Conseils locaux à Nice (pour un devis vraiment fiable)",
    paragraphs: [
      "Nice a un vrai point fort (la météo) et un vrai point faible (l’accès). Dans beaucoup de secteurs, la différence entre un devis “OK” et un devis “surprise” se joue sur 20 mètres : où le camion peut-il se mettre, et combien de portage faut-il faire.",
      "Le réflexe #1 : pensez “centre historique vs avenues”. Dans le Vieux-Nice, certaines rues sont étroites et très fréquentées : même un petit déménagement peut devenir long si l’équipe doit faire des allers-retours avec un diable sur plusieurs dizaines de mètres.",
      "Le réflexe #2 : anticipez les étages. Dans les immeubles anciens (sans ascenseur ou avec des cabines petites), un canapé ou un frigo peut nécessiter un passage par escalier… ou un monte-meubles si la configuration le permet.",
      "Le réflexe #3 : décrivez le créneau et le contexte (jour de marché, zone piétonne, travaux). À Nice, ces détails changent la logistique — donc le prix — bien plus que les gens ne l’imaginent.",
      "Notre conseil simple : donnez les mêmes infos à tous les déménageurs. Moverz aide justement à standardiser le dossier (accès + volume fiabilisé) pour comparer des devis sur une base claire.",
    ],
    bullets: [
      "Objectif : des devis comparables (même volume + mêmes accès).",
      "Décrivez précisément le stationnement : possibilité d’arrêt minute, distance camion→entrée, contraintes de circulation.",
      "Si ascenseur : indiquez s’il est aux normes (porte, profondeur) — c’est souvent le point de blocage sur les gros meubles.",
      "Périodes souvent moins favorables : été (juin–septembre) · fins de mois · week-ends.",
    ],
    photoChecklist: [
      "Rue devant l’entrée : largeur, possibilité de stationner/stopper, présence de potelets / zone piétonne",
      "Entrée de l’immeuble + hall + largeur des portes (prise de vue “de face”)",
      "Escalier : photo depuis le bas + un palier (pour estimer les rotations)",
      "Ascenseur (si présent) : porte ouverte + cabine (un objet de repère suffit)",
      "Balcon/fenêtre côté rue (utile si un monte-meubles est envisageable)",
    ],
    avoidPeriods: ["Été (juin–septembre)", "Fin de mois", "Week-ends"],
  },
  lyon: {
    title: "Conseils locaux à Lyon (pour éviter les suppléments le jour J)",
    paragraphs: [
      "À Lyon, l’écart de prix entre deux devis vient rarement “du hasard”. Il vient presque toujours de l’accès : Presqu’île avec stationnement difficile, pentes et escaliers à la Croix-Rousse, immeubles anciens et cours intérieures dans certains secteurs.",
      "Le meilleur moyen d’obtenir un devis fiable : décrire le trajet réel du camion jusqu’à la porte. Une adresse peut être simple sur Google Maps et pourtant compliquée en pratique (sens uniques, zones de livraison, distance de portage).",
      "Côté immeuble, le point qui fait exploser le temps (donc le coût) : la largeur des escaliers et des paliers. À Lyon, beaucoup de logements ont des rotations serrées, ce qui peut imposer du démontage ou un transport spécifique des meubles volumineux.",
      "Si vous déménagez entre arrondissements ou en proche périphérie, la circulation et le créneau comptent : une équipe peut charger plus vite le matin qu’en plein pic. Une fenêtre de 2–3 dates aide souvent à obtenir un meilleur rapport qualité/prix.",
      "En résumé : accès + volume + date = devis comparables. Moverz structure ces infos pour éviter les devis sous-dimensionnés (puis les ajustements).",
    ],
    bullets: [
      "Objectif : des devis comparables (même volume + mêmes accès).",
      "Précisez : étage, présence/tailles d’ascenseur, distance camion→porte, et s’il y a une cour/porte cochère.",
      "Pour les gros meubles : indiquez s’ils passent par l’escalier (largeur) ou s’il faut prévoir démontage.",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Point de stationnement possible (photo depuis la rue, avec la façade)",
      "Porte cochère / entrée d’immeuble / cour intérieure (si applicable)",
      "Escalier : photo en plongée + un palier (pour voir l’angle)",
      "Ascenseur : porte ouverte + profondeur de cabine (si présent)",
      "Meubles volumineux (canapé, armoire) + accès (couloir/porte) sur une seule photo",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  marseille: {
    title: "Conseils locaux à Marseille (accès, stationnement, quartiers)",
    paragraphs: [
      "Marseille est une ville où la logistique compte autant que le volume. Dans certains quartiers, deux logements “identiques” peuvent donner deux devis très différents simplement à cause du stationnement, du relief, et de la largeur des rues.",
      "Le premier point à clarifier : où le camion peut-il réellement se placer ? En centre-ville et dans les zones anciennes, le portage (distance à pied) peut vite devenir le poste de coût principal — plus que le nombre de cartons.",
      "Le deuxième point : les étages et les escaliers. Entre les immeubles sans ascenseur et les paliers étroits, certains meubles demandent du démontage ou une méthode spécifique. Mieux vaut l’anticiper au devis que le découvrir au chargement.",
      "Le troisième point : le timing. Marseille peut être très variable selon les créneaux (trafic, disponibilité). Une petite flexibilité sur la date (2–3 options) améliore souvent le prix et la qualité de l’équipe.",
      "Conclusion : pour comparer des devis, il faut un dossier unique et précis (accès + volume + date). C’est exactement ce que Moverz standardise pour éviter les mauvaises surprises.",
    ],
    bullets: [
      "Objectif : des devis comparables (même volume + mêmes accès).",
      "Décrivez le stationnement : possibilité d’arrêt, distance de portage, obstacles (marches, pente, ruelle).",
      "Listez les objets “à risque” (frigo, piano, vitrine) + précisez si démontage souhaité.",
      "Périodes souvent moins favorables : été (juin–septembre) · fins de mois · week-ends.",
    ],
    photoChecklist: [
      "Rue devant l’entrée : largeur + possibilité de s’arrêter (photo prise à hauteur de camion)",
      "Chemin d’accès à pied (si portage) : trottoir, marches, pente",
      "Escalier : photo depuis le bas + un palier (pour estimer les rotations)",
      "Ascenseur : porte ouverte + cabine (si présent)",
      "Objets lourds/fragiles (une photo groupée suffit) + sortie (couloir/porte)",
    ],
    avoidPeriods: ["Été (juin–septembre)", "Fin de mois", "Week-ends"],
  },
};

function hashSlug(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function pickManyUnique<T>(arr: T[], seed: number, count: number): T[] {
  const out: T[] = [];
  const used = new Set<number>();
  let cursor = seed;
  while (out.length < Math.min(count, arr.length)) {
    const idx = cursor % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(arr[idx]);
    }
    cursor = (cursor * 1103515245 + 12345) >>> 0;
  }
  return out;
}

export function getLocalInsights(citySlug: string, cityName: string): LocalInsightBlock {
  const override = CITY_OVERRIDES[citySlug];
  if (override) return override;

  const seed = hashSlug(citySlug);
  const focus: Focus = pick(
    ["stationnement", "acces-immeuble", "volume", "planning", "objets-lourds", "distance"],
    seed
  );

  const avoidPeriods = pickManyUnique(
    [
      "Fin de mois (forte demande)",
      "Week-ends (souvent plus cher)",
      "Périodes de vacances scolaires (plus de tension)",
      "Été (juin–septembre : haute saison)",
      "Jours fériés et ponts (disponibilités réduites)",
    ],
    seed + 7,
    3
  );

  const photoChecklist = pickManyUnique(
    [
      "Entrée de l’immeuble + largeur du passage (porte/couloir)",
      "Escalier (une photo depuis le bas + un palier)",
      "Ascenseur (si présent) : porte ouverte + dimensions approximatives",
      "Rue devant l’entrée : possibilité de stationner/stopper le camion",
      "Objets “hors gabarit” : canapé, frigo, piano, armoire",
    ],
    seed + 13,
    4
  );

  const bulletsBase = [
    "Objectif : des devis comparables (même volume + mêmes accès).",
    "Évitez les surprises : décrivez les accès et le stationnement dès le départ.",
    "2–3 photos suffisent pour fiabiliser le volume (et éviter la visite technique).",
  ];

  const localAngle =
    focus === "stationnement"
      ? [
          `À ${cityName}, le coût peut varier surtout avec le stationnement : si le camion ne peut pas se rapprocher, le portage augmente (temps + main d’œuvre).`,
          `Avant de demander des devis, identifiez si un arrêt minute est possible, et si une autorisation d’occupation temporaire peut être nécessaire (selon la zone).`,
        ]
      : focus === "acces-immeuble"
        ? [
            `À ${cityName}, le critère #1 qui crée des écarts de prix, c’est souvent l’accès : étage sans ascenseur, escaliers étroits, couloirs compliqués.`,
            `Le bon réflexe : documenter l’accès (escaliers/ascenseur) pour éviter les devis sous-estimés, puis les suppléments le jour J.`,
          ]
        : focus === "volume"
          ? [
              `À ${cityName}, “pas cher” commence par le volume : moins de m³ = moins de camion, moins de main d’œuvre, moins de temps.`,
              `Avant de comparer des devis, triez (vente/don/déchetterie) : c’est l’action la plus simple pour baisser la facture sans compromis qualité.`,
            ]
          : focus === "planning"
            ? [
                `À ${cityName}, le prix dépend beaucoup de la date : certains créneaux se réservent vite (et se paient plus cher).`,
                `Si vous êtes flexible (2–3 dates possibles), vous augmentez vos chances d’obtenir un bon rapport qualité/prix.`,
              ]
            : focus === "objets-lourds"
              ? [
                  `À ${cityName}, quelques objets lourds ou fragiles (piano, électroménager, vitrines) peuvent changer la méthode (protection, matériel, équipe).`,
                  `Pour un devis fiable, listez ces objets dès le départ et précisez les accès : c’est ce qui évite les mauvaises surprises.`,
                ]
              : [
                  `À ${cityName}, la distance (intra-ville vs longue distance) joue sur le coût, mais aussi sur l’organisation (horaires, chargement, itinéraire).`,
                  `Pour comparer des devis, fixez un dossier clair : volume, accès et fenêtre de dates.`,
                ];

  const paragraphs = [
    `Ce bloc local est là pour éviter l’effet “page template” et vous aider à obtenir des devis fiables à ${cityName}.`,
    ...localAngle,
    `Le plus important : donner les mêmes informations à tous les déménageurs. C’est exactement ce que fait Moverz (dossier unique + volume fiabilisé), pour comparer des devis sur une base claire.`,
  ];

  const bullets = [...bulletsBase, `Périodes souvent moins favorables : ${avoidPeriods.join(" · ")}.`];

  return {
    title: `Conseils locaux à ${cityName} (pour un devis fiable)`,
    paragraphs,
    bullets,
    photoChecklist,
    avoidPeriods,
  };
}


