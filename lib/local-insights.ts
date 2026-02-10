export type LocalInsightBlock = {
  title: string;
  paragraphs: string[];
  bullets: string[];
  accessChecklist: string[];
  avoidPeriods: string[];
};

import { LOCAL_INSIGHTS_OVERRIDES } from "@/lib/local-insights-overrides";

type Focus =
  | "stationnement"
  | "acces-immeuble"
  | "volume"
  | "planning"
  | "objets-lourds"
  | "distance";

function sanitizeText(s: string): string {
  return s
    .replace(/\s{2,}/g, " ")
    .trim();
}

function sanitizeBlock(block: LocalInsightBlock): LocalInsightBlock {
  return {
    ...block,
    title: sanitizeText(block.title),
    paragraphs: block.paragraphs.map(sanitizeText),
    bullets: block.bullets.map(sanitizeText),
    accessChecklist: block.accessChecklist.map(sanitizeText),
  };
}

function focusLabel(focus: Focus): string {
  switch (focus) {
    case "stationnement":
      return "stationnement & portage";
    case "acces-immeuble":
      return "accès & étages";
    case "volume":
      return "volume & tri malin";
    case "planning":
      return "date & disponibilité";
    case "objets-lourds":
      return "objets lourds & fragiles";
    case "distance":
      return "distance & organisation";
  }
}

function buildHook(cityName: string, focus: Focus): string {
  switch (focus) {
    case "stationnement":
      return `À ${cityName}, le “secret” d’un bon devis tient souvent en une question simple : le camion peut-il se rapprocher ? Si la réponse est floue, le prix aussi.`;
    case "acces-immeuble":
      return `À ${cityName}, les écarts de prix viennent rarement des cartons… mais très souvent des accès : étages, couloirs, escaliers, ascenseur (ou pas).`;
    case "volume":
      return `À ${cityName}, le meilleur levier “anti-facture” est presque toujours le même : le volume. Moins de m³ = moins de temps, moins de main d’œuvre, moins de coût.`;
    case "planning":
      return `À ${cityName}, la date fait le prix. Un même déménagement peut coûter sensiblement plus cher si vous visez un créneau très demandé.`;
    case "objets-lourds":
      return `À ${cityName}, 2–3 objets “compliqués” (lourd, fragile, encombrant) peuvent changer la méthode… donc le devis. Mieux vaut les annoncer tôt.`;
    case "distance":
      return `À ${cityName}, la distance ne change pas que le kilométrage : elle change aussi le timing (chargement, itinéraire, horaires) — et donc l’organisation.`;
  }
}

function buildClosing(cityName: string): string {
  return `Mini-mission avant de demander des devis : notez l’étage, la distance camion→porte, et tout “truc relou” (ruelle, couloir étroit, absence d’ascenseur). À ${cityName} comme ailleurs, ces détails évitent les surprises le jour J.`;
}

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
  const override = LOCAL_INSIGHTS_OVERRIDES[citySlug];
  if (override) return sanitizeBlock(override);

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

  const accessChecklist = pickManyUnique(
    [
      "Entrée de l’immeuble + largeur du passage (porte/couloir)",
      "Escalier (vue depuis le bas + un palier)",
      "Ascenseur (si présent) : porte ouverte + dimensions approximatives",
      "Rue devant l’entrée : possibilité de stationner/stopper le camion",
      "Objets “hors gabarit” : canapé, frigo, piano, armoire",
    ],
    seed + 13,
    4
  );

  const bulletsBase = [
    "Objectif : des devis comparables (même volume + mêmes accès).",
    "Donnez la même info à tout le monde : accès, stationnement, date (ou fenêtre de dates).",
    "2–3 précisions suffisent souvent à fiabiliser le volume (et éviter une visite technique).",
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

  const paragraphs = [buildHook(cityName, focus), ...localAngle, buildClosing(cityName)];

  const bullets = [...bulletsBase, `Périodes souvent moins favorables : ${avoidPeriods.join(" · ")}.`];

  return sanitizeBlock({
    title: `Conseils locaux à ${cityName} : ${focusLabel(focus)}`,
    paragraphs,
    bullets,
    accessChecklist,
    avoidPeriods,
  });
}


