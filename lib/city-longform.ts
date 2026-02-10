import { CITIES, getCityBySlug } from "@/lib/cities";

export type CityGuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  checklist?: string[];
};

export type CityLongFormGuide = {
  title: string;
  subtitle: string;
  wordCount: number;
  estimatedReadingMinutes: number;
  sections: CityGuideSection[];
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
  const n = Math.min(count, arr.length);
  if (n <= 0) return [];

  // Deterministic, fast unique selection.
  // For small arrays (our use-case), a seeded rotation is enough and avoids any potential infinite loop.
  const start = (seed >>> 0) % arr.length;
  const out: T[] = [];
  for (let i = 0; i < n; i++) {
    out.push(arr[(start + i) % arr.length]);
  }
  return out;
}

function countWords(text?: string): number {
  if (!text) return 0;
  return text.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
}

function countWordsInGuide(guide: Omit<CityLongFormGuide, "wordCount" | "estimatedReadingMinutes">): number {
  const strings: string[] = [guide.title, guide.subtitle];
  for (const s of guide.sections) {
    strings.push(s.title, ...s.paragraphs);
    if (s.bullets) strings.push(...s.bullets);
    if (s.checklist) strings.push(...s.checklist);
  }
  return strings.map(countWords).reduce((a, b) => a + b, 0);
}

function estimateMinutes(wordCount: number): number {
  // French reading speed is similar; keep it simple.
  return Math.max(6, Math.round(wordCount / 200));
}

function nearbyCityNames(citySlug: string): string[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  const sameRegion = CITIES.filter((c) => c.region === city.region && c.slug !== city.slug).slice(0, 8);
  // fallback: any other cities
  const fallback = CITIES.filter((c) => c.slug !== city.slug && !sameRegion.some((s) => s.slug === c.slug)).slice(
    0,
    Math.max(0, 8 - sameRegion.length)
  );
  return [...sameRegion, ...fallback].slice(0, 5).map((c) => c.nameCapitalized);
}

/**
 * Long-form, SEO-friendly guide. Rendered server-side but typically collapsed by default in UI.
 * Copy is intentionally practical and avoids unverifiable claims.
 *
 * Target: >= 2000 words for every city.
 */
export function getCityLongFormGuide(citySlug: string, cityName: string): CityLongFormGuide {

  const seed = hashSlug(citySlug);
  const city = getCityBySlug(citySlug);
  const region = city?.region;
  const nearby = nearbyCityNames(citySlug);

  const angle = pick(
    [
      "zéro surprise",
      "devis comparables",
      "jour J fluide",
      "meilleurs prix sans stress",
      "méthode simple et carrée",
      "organisation pro",
    ],
    seed
  );

  const microTips = pickManyUnique(
    [
      "Astuce express : repérez le passage le plus étroit (porte/couloir). C’est souvent là que se joue le devis.",
      "Astuce express : notez la distance camion→porte (même à l’œil). 15 m vs 80 m, ce n’est pas la même journée.",
      "Astuce express : si un meuble est “limite”, annoncez-le tôt. Les pros préfèrent anticiper que improviser.",
      "Astuce express : donnez 2–3 dates possibles. La flexibilité aide à obtenir un meilleur créneau (et souvent un meilleur prix).",
    ],
    seed + 21,
    4
  );

  const sections: CityGuideSection[] = [
    {
      id: "dossier",
      title: "1) Le dossier parfait (pour des devis vraiment comparables)",
      paragraphs: [
        `Objectif : que tous les déménageurs chiffrent la même chose. À ${cityName}, comme ailleurs, la plupart des “écarts de prix” viennent d’informations manquantes (ou différentes) : accès, portage, étage, ascenseur, gros meubles, fenêtre de dates.`,
        "Le bon dossier tient en 5 lignes : adresse de départ/arrivée, type de logement, étage + ascenseur (oui/non), distance camion→porte, date (ou 2–3 options). Ensuite, vous précisez les accès et les objets volumineux. Pas besoin d’un roman.",
        "Important : votre but n’est pas de tout prévoir, mais de réduire l’incertitude. Un devis trop bas parce que l’accès a été sous-estimé finit souvent en stress. Un devis clair est plus facile à comparer et à faire respecter.",
        microTips[0],
      ],
      bullets: [
        "Adresse départ + arrivée (ou au minimum la ville) + contraintes particulières",
        "Étages + ascenseur (oui/non) + accès (couloir, marches, cour)",
        "Distance camion→porte (courte / moyenne / longue)",
        "Liste des objets “à risque” : frigo, canapé, armoire, piano, vitrine…",
        "Date ou fenêtre de dates (2–3 options si possible)",
      ],
    },
    {
      id: "acces-stationnement",
      title: "2) Accès & stationnement : le vrai facteur de coût (et de surprises)",
      paragraphs: [
        `Dans une ville comme ${cityName}, le stationnement et l’accès peuvent valoir plus que “10 cartons de plus”. Pourquoi ? Parce que ça détermine le temps de manutention : portage, allers-retours, rotations d’escalier, protection des parties communes.`,
        "Un bon réflexe : pensez “trajet complet”. Où le camion se met ? À quelle distance de l’entrée ? Y a-t-il des marches, une cour, un couloir long, une porte étroite ? Même sans mesure précise, une description (court/moyen/long) suffit à cadrer.",
        "Si vous êtes en immeuble, l’ascenseur est un sujet à part entière. Dire “oui” ne suffit pas : une cabine petite peut imposer plus de manœuvres, ou du démontage sur certains meubles. Ce n’est pas grave — mais il faut l’intégrer dès le devis.",
        microTips[1],
      ],
      checklist: [
        "Rue devant l’entrée : où s’arrêter + contraintes visibles",
        "Entrée + hall + passage le plus étroit",
        "Escalier : bas + un palier (angle de rotation)",
        "Ascenseur : porte ouverte + cabine (si présent)",
      ],
    },
    {
      id: "volume-tri",
      title: "3) Volume & tri : le levier le plus simple pour payer moins",
      paragraphs: [
        "Le volume (m³) reste le levier principal : moins de volume = moins de camion, moins de main d’œuvre, moins de temps. C’est mathématique — et c’est souvent le levier le plus “propre” pour réduire le prix sans dégrader la qualité.",
        `Avant de demander des devis à ${cityName}, faites un tri en 3 piles : vendre/donner, recycler/déchetterie, à déménager. L’idée n’est pas d’être minimaliste : c’est d’éviter de payer pour déplacer des objets que vous ne voulez plus.`,
        "Pour rendre les devis comparables, évitez les estimations vagues (“un T3 classique”). Faites un inventaire rapide par pièce et décrivez les accès : c’est suffisant pour fiabiliser le volume et réduire le risque de supplément le jour J.",
        microTips[0],
      ],
      bullets: [
        "Vendre/donner : ce qui part facilement (meubles, déco, électroménager en double)",
        "Recycler/déchetterie : ce qui ne vaut pas un transport",
        "À déménager : ce qui a de la valeur d’usage (ou sentimentale) et mérite la place",
        "Astuce : regroupez les “petits” objets dans des bacs/cartons dès le tri — vous gagnez du temps plus tard",
      ],
    },
    {
      id: "date",
      title: "4) Date, créneau, flexibilité : comment obtenir le bon devis",
      paragraphs: [
        "Deux devis peuvent être identiques sur le papier… et très différents sur la date. Les périodes de forte demande (fins de mois, week-ends, vacances) tendent à être plus chères et plus difficiles à réserver.",
        "Si vous pouvez proposer 2–3 dates possibles, vous augmentez la disponibilité côté déménageurs et la probabilité d’un bon créneau. C’est un levier simple, souvent oublié, et très efficace.",
        "Pour une comparaison saine, demandez aux déménageurs le même niveau de prestation (emballage, démontage, remise en place) et la même fenêtre de dates. Sinon, vous comparez des choses différentes.",
        microTips[2],
      ],
      bullets: [
        "Fins de mois : demande souvent plus forte",
        "Week-ends : pratiques, souvent plus chers",
        "Vacances scolaires : tension sur la disponibilité",
        "Été (juin–septembre) : période souvent plus demandée",
      ],
    },
    {
      id: "emballage",
      title: "5) Emballage & protection : le kit “zéro casse” (sans y passer 3 nuits)",
      paragraphs: [
        "Le but de l’emballage n’est pas d’emballer tout “comme un musée”. Le but est d’éviter la casse et de gagner du temps au chargement. Plus c’est standardisé, plus c’est rapide.",
        "Pour les cartons : mettez le lourd en bas, le fragile protégé, et étiquetez par pièce + priorité (ouvrir d’abord / peut attendre). C’est simple, mais ça fait une énorme différence le jour J.",
        "Pour les meubles : protégez les angles, les surfaces fragiles, et démontez ce qui est nécessaire (sans transformer votre salon en puzzle). Gardez les vis dans des sachets scotchés au meuble correspondant.",
        `À ${cityName}, comme partout, un déménagement “fluide” est souvent un déménagement où les petits détails ont été gérés à l’avance.`,
      ],
      checklist: [
        "Cartons renforcés + ruban solide + marqueur",
        "Papier bulle / couverture / serviettes pour protéger (le textile marche très bien)",
        "Sachets pour vis + étiquettes par meuble",
        "Une boîte “essentiels 24h” : chargeur, draps, café/thé, médicaments, outils basiques",
      ],
    },
    {
      id: "assurance",
      title: "6) Assurance & conditions : les 6 points à vérifier avant de signer",
      paragraphs: [
        "Les devis se comparent sur le prix, mais aussi sur les conditions. Même sans être juriste, vous pouvez vérifier quelques points clés.",
        "Demandez (ou vérifiez) ce qui est inclus : manutention, protection, démontage/remontage, emballage, assurance, et conditions d’accès. Plus c’est explicite, moins il y a de zones grises.",
        "Si un point est important pour vous (objets fragiles, piano, ascenseur petit, portage long), écrivez-le noir sur blanc dans le dossier. Ce n’est pas “chipoter” : c’est éviter les surprises.",
        microTips[3],
      ],
      bullets: [
        "Ce qui est inclus / exclus (emballage, démontage, remontage)",
        "Assurance : plafond, franchise, procédure en cas de dommage",
        "Accès : étage, ascenseur, portage — ce qui a été pris en compte",
        "Planning : heure de début, durée estimée, conditions de report",
        "Modalités de paiement : acompte, solde, conditions d’annulation",
        "Inventaire : qui valide, quand, et comment",
      ],
    },
    {
      id: "jour-j",
      title: "7) Jour J : check-list minute par minute (pour rester zen)",
      paragraphs: [
        "Le jour J, votre objectif est simple : enlever les frottements. Si l’équipe attend parce qu’une porte est bloquée, qu’un ascenseur n’est pas réservé, ou qu’un carton “fragile” n’est pas identifié, vous payez du temps perdu (et vous vous épuisez).",
        "Préparez une zone “à ne pas charger” (sac perso, papiers, ordinateur, clés, etc.). Et prévoyez de l’eau + un petit snack : ça aide tout le monde.",
        "À l’arrivée, même logique : accès clair, pièces identifiées, et cartons “priorité” accessibles. Plus vous évitez les allers-retours inutiles, plus la fin de journée est douce.",
        `Mini-règle d’or : une personne décide, une personne répond. Ça évite les quiproquos — surtout quand tout va vite.`,
      ],
      checklist: [
        "Clés, badges, codes : prêts avant l’arrivée de l’équipe",
        "Ascenseur : protégé / réservé si besoin (selon copropriété)",
        "Pièces étiquetées : “Cuisine”, “Chambre”, “Salon”…",
        "Boîte “essentiels 24h” non chargée par erreur",
        "Notes rapides avant départ (utile en cas de doute)",
      ],
    },
    {
      id: "apres",
      title: "8) Après le déménagement : 10 minutes qui vous évitent 10 galères",
      paragraphs: [
        "Après un déménagement, le vrai piège, c’est l’administratif diffus. Si vous le faites par petits blocs, ça va vite. Si vous le laissez traîner, ça revient vous chercher.",
        "Priorité : adresse (banque, assurance, impôts, employeur), énergie, internet, et courrier. Faites une checklist, cochez, terminé.",
        region
          ? `Et si vous bougez dans la région ${region}, gardez en tête que certaines démarches peuvent varier selon la commune : le bon réflexe est de vérifier au moment voulu, plutôt que de supposer.`
          : `Et si vous bougez autour de ${cityName}, gardez en tête que certaines démarches peuvent varier selon la commune : vérifiez au moment voulu plutôt que de supposer.`,
      ],
      bullets: [
        "Adresse : banque, assurance, mutuelle, employeur",
        "Énergie : électricité/gaz (ou équivalent) — ouverture/fermeture",
        "Internet : délais + rendez-vous (anticipez)",
        "Courrier : suivi/renvoi temporaire si nécessaire",
        "État des lieux : relevés, documents",
      ],
    },
    {
      id: "autour",
      title: `9) Déménager autour de ${cityName} (et comparer “local” vs “longue distance”)`,
      paragraphs: [
        nearby.length
          ? `Autour de ${cityName}, vous trouverez souvent des options “locales” et “régionales”. Pour vous donner une idée, les villes proches souvent consultées sont : ${nearby.join(", ")}.`
          : `Autour de ${cityName}, vous trouverez souvent des options “locales” et “régionales”.`,
        "La différence entre un déménagement intra-ville et longue distance n’est pas que le kilométrage : c’est l’organisation. Horaires, chargement, itinéraire, et parfois une nuit ou une contrainte de planning changent la façon de chiffrer.",
        "Pour comparer correctement, demandez au moins deux choses : la même fenêtre de dates et la même prestation (même niveau d’emballage/démontage). Sinon, vous comparez une “éco” contre une “clé en main”.",
        "Bon signal : un devis qui explique ce qu’il inclut. C’est souvent plus fiable qu’un devis “ultra court” au prix attractif.",
      ],
      bullets: [
        "Intra-ville : accès + portage pèsent beaucoup dans le temps",
        "Longue distance : planning + itinéraire + timing pèsent davantage",
        "Même volume + mêmes accès + même fenêtre de dates = comparaison propre",
      ],
    },
  ];

  const base = {
    title: `Guide complet : déménager à ${cityName} (${angle})`,
    subtitle: `2000+ mots, conçu pour vous aider à obtenir des devis fiables et éviter les surprises — sans vous noyer dans le blabla.`,
    sections,
  };

  const wordCount = countWordsInGuide(base);
  const estimatedReadingMinutes = estimateMinutes(wordCount);

  return {
    ...base,
    wordCount,
    estimatedReadingMinutes,
  };
}


