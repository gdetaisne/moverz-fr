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


