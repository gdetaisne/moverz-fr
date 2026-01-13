import type { CityGuideSection } from "@/lib/city-longform";

export type CityLongFormOverride = {
  /**
   * Add paragraphs before/after an existing section's paragraphs.
   * Keys are section ids (e.g. "acces-stationnement", "date", "jour-j").
   */
  prependBySectionId?: Record<string, string[]>;
  appendBySectionId?: Record<string, string[]>;
  /**
   * Optional extra sections appended before the auto filler/annexe.
   */
  extraSections?: CityGuideSection[];
};

function buildSectionSpecificites(cityName: string): CityGuideSection {
  return {
    id: "specificites-logement-acces",
    title: `Spécificités logement & accès à ${cityName} (et checklist locale)`,
    paragraphs: [
      `À ${cityName}, le devis le plus fiable est celui qui connaît le “chemin réel” : où le camion peut s’arrêter, combien de portage il faut faire, et comment on passe à l’intérieur (portes/couloirs/escaliers/ascenseur).`,
      "Le standard simple : photo de la rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit. C’est ce qui rend les devis comparables.",
      "Ajoutez ensuite les meubles “limites” (canapé, frigo, armoire) : c’est l’anti‑surprise le plus efficace le jour J.",
    ],
    checklist: [
      "Photo rue : stationnement/arrêt possible + distance visible",
      "Distance camion→porte (en pas) + étage/ascenseur",
      "Photo entrée + passage le plus étroit (porte/couloir/palier)",
      "Photo escalier (bas + palier) / ascenseur (cabine porte ouverte)",
      "Photo des 2–3 meubles “limites” + objets fragiles/lourds",
    ],
  };
}

function buildSectionChecklistAvancee(cityName: string): CityGuideSection {
  return {
    id: "checklist-locale-avancee",
    title: `${cityName} : checklist avancée (devis comparables + jour J)`,
    paragraphs: [
      "Objectif : enlever les zones floues (accès, portage, passages) pour éviter les devis qui “bougent” et les ajustements le jour J.",
      "Pas besoin de mesures au millimètre : 2–3 photos clés + une distance en pas suffisent souvent à cadrer une méthode réaliste.",
      "Gardez cette checklist identique pour plusieurs déménageurs : c’est la base d’une comparaison propre.",
    ],
    checklist: [
      "Distance camion→porte (en pas) + obstacles (marches/cour/couloir long)",
      "Passage critique en photo (porte/couloir/escalier) + escalier/palier en photo",
      "Meubles “limites” en photo + “démontage oui/non”",
      "Zone tampon près de la porte + couloir dégagé avant arrivée",
      "Sac perso + boîte “essentiels 24h” hors camion",
    ],
  };
}

function buildCommonExtraSections(cityName: string, withAdvancedChecklist = true): CityGuideSection[] {
  return withAdvancedChecklist
    ? [buildSectionSpecificites(cityName), buildSectionChecklistAvancee(cityName)]
    : [buildSectionSpecificites(cityName)];
}

/**
 * Handwritten enhancements for the 2000+ word city guide.
 * Important: keep copy practical and avoid unverifiable claims (no hard facts about local rules).
 */
export const CITY_LONGFORM_OVERRIDES: Record<string, CityLongFormOverride> = {
  paris: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Paris (et checklist locale)",
        paragraphs: [
          "À Paris, la fiabilité d’un devis dépend très souvent de l’accès réel : stationnement/arrêt possible, distance de portage, ascenseur (taille) et passages intérieurs.",
          "Le meilleur standard est simple : 3 photos (rue, entrée, escalier/ascenseur) + la distance camion→porte (en pas). C’est ce qui rend les devis comparables.",
          "Ajoutez ensuite les meubles “limites” (canapé, frigo, armoire) : c’est l’anti‑surprise le plus efficace le jour J.",
        ],
        checklist: [
          "Photo rue : où le camion peut s’arrêter + distance visible",
          "Distance camion→porte (en pas) + obstacles (marches/cour/couloir)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine porte ouverte)",
          "Photo des 2–3 meubles “limites” + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Mini‑plan Paris : checklist avancée J‑7 → Jour J",
        paragraphs: [
          "Le but ici est d’éviter les journées qui partent en vrille : vous préparez l’accès, vous standardisez les infos, et vous gardez le contrôle sur le timing.",
          "Ce plan est volontairement “bête et méchant” : facile à exécuter, mais très efficace pour fiabiliser les devis et l’exécution.",
          "Gardez ces points identiques pour tous les déménageurs : c’est la base d’une comparaison propre.",
        ],
        checklist: [
          "J‑7 : photos accès + meubles volumineux, dossier prêt à partager",
          "J‑3 : couloir dégagé, ascenseur/portes testés, cartons lourds limités",
          "J‑1 : zone “tampon” près de la porte + sac perso “à ne pas charger”",
          "Jour J : 1 personne “référent accès”, 1 personne “référent cartons”",
          "Fin : check pièces/placards/cave, puis validation état des lieux",
        ],
      },
    ],
  },
  "ile-de-france": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès en Île‑de‑France (et checklist locale)",
        paragraphs: [
          "En Île‑de‑France, les écarts de devis viennent souvent des “temps cachés” : stationnement, portage, ascenseur (taille) et passages (portes/couloirs/escaliers).",
          "Le bon réflexe : standardiser votre demande. Si tout le monde chiffre la même base d’informations, les devis deviennent comparables (et plus fiables).",
          "Ajoutez aussi un mini‑inventaire des objets lourds/fragiles : ça aligne la méthode (protection, manutention) et évite les surprises.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas) + présence d’obstacles/marches",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur (cabine porte ouverte si possible)",
          "Liste + photo objets lourds/fragiles + meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Île‑de‑France : checklist avancée pour des devis comparables",
        paragraphs: [
          "Si vous voulez optimiser sans vous noyer : faites une seule checklist et réutilisez-la. C’est la méthode la plus simple pour obtenir des devis “alignés”.",
          "Cette checklist sert aussi de garde‑fou le jour J : tout le monde sait à quoi s’attendre (accès, portage, passages).",
          "Moins de zones floues = moins d’ajustements.",
        ],
        checklist: [
          "Même format de photos pour tous (rue/entrée/escalier/ascenseur)",
          "Distance camion→porte indiquée (en pas) + étage/ascenseur",
          "Meubles “limites” listés + photo près d’un passage",
          "2–3 dates possibles si flexible (meilleurs créneaux)",
          "Boîte “essentiels 24h” + sac perso “à ne pas charger”",
        ],
      },
    ],
  },
  // Pack 20 (IDF + Nantes area) — enhance specificity without inventing facts
  antony: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Antony, vous aurez souvent deux cas de figure : résidence avec ascenseur (super… si la cabine est assez grande) ou immeuble plus ancien avec escaliers/paliers serrés. Dans les deux cas, une photo “porte ouverte” de l’ascenseur et une photo du palier vous évitent un devis approximatif.",
      ],
      date: [
        "Si vous bougez sur un créneau serré, le meilleur “hack” est la flexibilité : proposez deux dates de semaine et une option week-end. Vous augmentez mécaniquement la probabilité d’obtenir une équipe disponible et un devis stable.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Antony (et checklist locale)",
        paragraphs: [
          "À Antony, la fiabilité d’un devis dépend souvent de l’ascenseur (taille) et de la distance de portage. Ce sont les “temps cachés”.",
          "Le standard simple : photo cabine d’ascenseur porte ouverte + photo du passage le plus étroit + distance camion→porte (en pas).",
          "Ajoutez ensuite les meubles volumineux “limites” pour fiabiliser la méthode.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Antony : checklist avancée (ascenseur & portage)",
        paragraphs: [
          "Objectif : éviter les devis qui varient parce que l’ascenseur, le portage ou les passages n’ont pas été clairement documentés.",
          "Cette checklist est faite pour être envoyée telle quelle à plusieurs déménageurs, afin qu’ils chiffrent tous la même base.",
          "Moins d’hypothèses = moins d’ajustements le jour J.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte (ou escalier bas + palier)",
          "Distance camion→porte (en pas) + étage",
          "Photo du passage le plus étroit + photo des meubles “limites”",
          "Cartons lourds limités + étiquetage par pièce + priorité",
          "Zone tampon près de la porte + sac perso hors camion",
        ],
      },
    ],
  },
  "corbeil-essonnes": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Corbeil‑Essonnes, il y a souvent un mix pavillons/résidences. Pour un pavillon, le point clé est l’accès camion + la zone de chargement (marche, pente, portillon). Pour une résidence, le point clé est l’ascenseur + la distance de portage. Dans les deux cas : on documente, on compare, on évite les surprises.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Corbeil‑Essonnes (et checklist locale)",
        paragraphs: [
          "À Corbeil‑Essonnes, la fiabilité d’un devis dépend souvent du type de logement : maison (portage extérieur) vs résidence (ascenseur + portage).",
          "Le standard efficace : photo rue + distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Avec ça, vous comparez des devis comparables, sans hypothèses.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo chemin extérieur (si maison) / escalier-ascenseur (si immeuble)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Corbeil‑Essonnes : checklist avancée (maison vs résidence)",
        paragraphs: [
          "Objectif : éviter les devis “à hypothèses” en rendant l’accès réel lisible, que vous soyez en maison (extérieur) ou en résidence (ascenseur + portage).",
          "Cette checklist est pensée pour être envoyée telle quelle à plusieurs déménageurs, afin qu’ils chiffrent tous la même base.",
          "Même base = meilleure comparaison.",
        ],
        checklist: [
          "Maison : photo chemin extérieur (portail/allée/marches) + distance camion→porte",
          "Résidence : photo ascenseur cabine (porte ouverte) + photo palier",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Zone tampon + sac perso/essentiels 24h hors camion",
        ],
      },
    ],
  },
  "evry-courcouronnes": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Évry‑Courcouronnes, le facteur “temps caché” classique est l’accès réel au bâtiment : couloirs, parkings, entrées multiples, ascenseur parfois éloigné. Une photo du chemin complet camion→porte + une photo de l’ascenseur (cabine) clarifient énormément le devis.",
      ],
      "jour-j": [
        "Jour J : gardez une personne “référent accès” (badge, clés, portes) et une personne “référent cartons”. Quand tout le monde sait qui décide, ça évite les frictions et ça fait gagner du temps.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Évry‑Courcouronnes (et checklist locale)",
        paragraphs: [
          "À Évry‑Courcouronnes, l’accès peut être plus indirect qu’il n’y paraît (parkings, entrées multiples). Le devis fiable est celui qui connaît le chemin réel camion→porte.",
          "Le standard simple : photo du trajet + distance camion→porte + photo ascenseur/escalier + photo du passage le plus étroit.",
          "Ajoutez les meubles volumineux et vous fiabilisez la méthode.",
        ],
        checklist: [
          "Photo du chemin camion→entrée (si accès indirect)",
          "Distance camion→porte (en pas)",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Évry‑Courcouronnes : checklist avancée (accès indirect)",
        paragraphs: [
          "Le point clé : l’accès réel peut être indirect (parking/entrée multiple/ascenseur éloigné). C’est ce qui fait varier les devis si on ne le montre pas.",
          "En 2–3 photos, vous décrivez le trajet mieux que n’importe quel texte.",
          "Ajoutez ensuite les meubles “limites” et vous fiabilisez la méthode.",
        ],
        checklist: [
          "Photo du trajet complet camion→entrée (2–3 photos si besoin)",
          "Distance camion→porte (en pas) + étage",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  poissy: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une mini-ligne “meubles limites” dans votre dossier (canapé, frigo, armoire). À Poissy comme ailleurs, c’est souvent ce détail qui fait passer un devis de “peut-être” à “fiable”.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Poissy (et checklist locale)",
        paragraphs: [
          "À Poissy, un devis fiable dépend surtout du temps réel : portage, étages, passages. Une photo rend ces contraintes évidentes.",
          "Le standard : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les meubles “limites” et vous évitez les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Poissy : checklist avancée (passages & meubles limites)",
        paragraphs: [
          "Le but : fiabiliser la méthode sur les gros meubles. Les devis divergent quand le passage est serré ou quand l’ascenseur est petit.",
          "En documentant cabine/paliers/passage étroit, vous obtenez des devis comparables — et une journée plus fluide.",
          "C’est une checklist courte, mais très efficace.",
        ],
        checklist: [
          "Photo du passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Distance camion→porte (en pas) + étage",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  sartrouville: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Sartrouville, beaucoup de déménagements alternent entre maison et résidence. Pour une maison : attention au trajet jardin/portillon/escaliers. Pour une résidence : attention au couple ascenseur + distance de portage. Dans les deux cas, 2 photos bien prises valent mieux que 10 lignes de description.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sartrouville (et checklist locale)",
        paragraphs: [
          "À Sartrouville, la fiabilité dépend souvent du type de logement (maison vs résidence). Le point commun : rendre le chemin réel camion→porte visible.",
          "Une photo du chemin extérieur (si maison) ou une photo ascenseur/escalier (si immeuble) suffit souvent à fiabiliser la manutention.",
          "Gardez la checklist identique pour tous pour comparer proprement.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo chemin extérieur (si maison) / escalier-ascenseur (si immeuble)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Sartrouville : checklist avancée (accès extérieur / ascenseur)",
        paragraphs: [
          "Objectif : fiabiliser les devis en documentant ce qui prend du temps : portage extérieur en maison, ou ascenseur + passages en résidence.",
          "Avec la même base d’info pour tous, vous comparez des devis comparables.",
          "Et le jour J se passe avec moins d’improvisation.",
        ],
        checklist: [
          "Maison : photo chemin extérieur (porte→rue) + obstacles/marches",
          "Résidence : photo ascenseur cabine (porte ouverte) + photo palier",
          "Distance camion→porte (en pas) + étage",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  "saint-germain-en-laye": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Germain‑en‑Laye, le centre (et certaines zones d’immeubles anciens) peut rendre l’accès plus délicat : paliers tournants, passages étroits, distance de portage. Le bon réflexe : photographier l’escalier depuis le bas + un palier, et indiquer si le camion peut s’arrêter “devant” ou “à proximité”.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Germain‑en‑Laye (et checklist locale)",
        paragraphs: [
          "À Saint‑Germain‑en‑Laye, le devis devient fiable quand on connaît les passages (paliers/escaliers) et la distance de portage. Ce sont les vrais facteurs de temps.",
          "Le standard simple : photo escalier (bas + palier) + photo passage le plus étroit + distance camion→porte.",
          "Ajoutez les meubles volumineux et vous fiabilisez la méthode.",
        ],
        checklist: [
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo passage le plus étroit",
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Saint‑Germain‑en‑Laye : checklist avancée (passages & portage)",
        paragraphs: [
          "Le gain : fiabiliser les passages (paliers/escaliers) et la distance de portage, qui font varier le temps réel de manutention.",
          "Une photo du passage le plus étroit + une photo escalier/palier suffit souvent à cadrer la méthode sur les gros meubles.",
          "Ajoutez ensuite les meubles “limites” pour éviter les surprises.",
        ],
        checklist: [
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Distance camion→porte (en pas) + étage",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  "mantes-la-jolie": {
    appendBySectionId: {
      dossier: [
        "Si vous hésitez sur la taille d’ascenseur ou le passage d’un meuble, écrivez-le tel quel (“doute sur passage canapé”). C’est paradoxalement ce qui rend le devis plus fiable : on chiffre une méthode réaliste.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Mantes‑la‑Jolie (et checklist locale)",
        paragraphs: [
          "À Mantes‑la‑Jolie, un devis fiable se gagne sur l’accès : stationnement, distance de portage, passages. C’est le facteur principal de temps.",
          "Le standard : photo rue + distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Annoncez les meubles “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Mantes‑la‑Jolie : checklist avancée (doutes = méthode prévue)",
        paragraphs: [
          "Objectif : transformer les “doutes” (passage canapé, ascenseur petit) en méthode prévue, donc en devis fiable.",
          "Une photo du point critique suffit souvent à éviter un devis trop optimiste.",
          "Avec la même base d’info, vous comparez des devis comparables.",
        ],
        checklist: [
          "Photo du point critique (porte/couloir/palier tournant)",
          "Photo escalier/ascenseur + palier",
          "Distance camion→porte (en pas) + étage",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Couloir dégagé + zone tampon avant arrivée",
        ],
      },
    ],
  },
  cergy: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Cergy, beaucoup de résidences ont des accès “propres” mais parfois indirects (parking, entrée secondaire, ascenseur éloigné). Le devis fiable est celui qui connaît le vrai chemin : camion → porte → ascenseur → palier. Une photo du trajet (ou 2–3 photos clés) suffit.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cergy (et checklist locale)",
        paragraphs: [
          "À Cergy, l’accès peut être indirect (parking/entrée/ascenseur éloigné). Le devis fiable est celui qui connaît le trajet réel camion→porte.",
          "Une photo du chemin + distance camion→porte + photo ascenseur/escalier suffisent souvent à fiabiliser le chiffrage.",
          "Ajoutez les meubles volumineux et vous sécurisez la méthode.",
        ],
        checklist: [
          "Photo du chemin camion→entrée (si accès indirect)",
          "Distance camion→porte (en pas)",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Cergy : checklist avancée (trajet complet)",
        paragraphs: [
          "Le point clé : documenter le trajet réel camion→entrée→ascenseur→palier. C’est ce qui fiabilise le temps de manutention.",
          "En 2–3 photos, vous évitez les devis qui sous-estiment l’accès indirect.",
          "Ajoutez ensuite les meubles “limites” pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo du trajet complet camion→entrée (2–3 photos si besoin)",
          "Distance camion→porte (en pas) + étage",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  pontoise: {
    appendBySectionId: {
      "volume-tri": [
        "Si vous faites un tri, pensez aussi “démontage intelligent” : certains meubles prennent beaucoup de volume (et de temps) s’ils restent montés. Un démontage ciblé peut réduire la durée du chargement et stabiliser le devis.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Pontoise (et checklist locale)",
        paragraphs: [
          "À Pontoise, la fiabilité d’un devis dépend surtout de l’accès : portage, étages, passages. C’est le facteur de temps principal.",
          "Le standard : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les meubles volumineux pour fiabiliser la méthode.",
        ],
        checklist: [
          "Photo rue : arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Pontoise : checklist avancée (passage étroit & devis comparables)",
        paragraphs: [
          "Le but : fiabiliser la méthode sur les passages et le portage, pour obtenir des devis comparables.",
          "Une photo du passage le plus étroit suffit souvent à cadrer la méthode (démontage/protection) sur les gros meubles.",
          "Ajoutez ensuite les meubles “limites” et vous évitez les surprises.",
        ],
        checklist: [
          "Photo passage le plus étroit + photo escalier/ascenseur",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Étiquetage par pièce + priorité (ouvrir d’abord / peut attendre)",
          "Zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  vincennes: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Vincennes, l’accès et le stationnement sont souvent le facteur dominant (zone dense). Le meilleur repère est simple : distance camion→porte + photo du passage le plus étroit. Cela évite les devis sous-estimés… et les ajustements.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Vincennes (et checklist locale)",
        paragraphs: [
          "À Vincennes, la fiabilité d’un devis dépend surtout de l’accès réel : où le camion s’arrête, combien de portage, et comment on passe à l’intérieur (portes/couloirs/escaliers/ascenseur).",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur. Ajoutez le passage le plus étroit pour fiabiliser les gros meubles.",
          "Avec ça, vous comparez des devis comparables, sans surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance visible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Vincennes : checklist avancée (densité & stationnement)",
        paragraphs: [
          "Objectif : fiabiliser les devis en documentant ce qui prend du temps en zone dense : stationnement/portage + passages.",
          "Deux photos (passage étroit + escalier/ascenseur) + distance en pas suffisent souvent à rendre les devis comparables.",
          "Ajoutez les meubles “limites” pour sécuriser la méthode.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit + photo escalier/palier",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Zone tampon + couloir dégagé avant arrivée",
          "Sac perso + boîte “essentiels 24h” hors camion",
        ],
      },
    ],
  },
  montrouge: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Montrouge, beaucoup de logements sont en immeuble : la question #1 est “ascenseur oui/non” et #2 “il est grand comment ?”. Une photo de la cabine (porte ouverte) + une photo du palier rendent la réponse évidente.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Montrouge (et checklist locale)",
        paragraphs: [
          "À Montrouge, la fiabilité d’un devis dépend souvent de l’ascenseur (taille) et des passages (paliers/portes). Ce sont les “temps cachés” sur les gros meubles.",
          "Le standard le plus efficace : photo cabine d’ascenseur porte ouverte (ou escalier bas + palier) + distance camion→porte (en pas).",
          "Ajoutez une photo du passage le plus étroit et vos devis deviennent comparables.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Montrouge : checklist avancée (cabine & passage critique)",
        paragraphs: [
          "Le point clé : la taille de la cabine et le passage critique. C’est là que les devis divergent si l’info manque.",
          "Une photo cabine porte ouverte + une photo du passage le plus étroit suffisent souvent à fiabiliser les gros meubles.",
          "Avec la même base, vous comparez des devis comparables.",
        ],
        checklist: [
          "Photo ascenseur cabine (porte ouverte) / escalier bas + palier",
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Distance camion→porte (en pas) + étage",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  "saint-ouen-sur-seine": {
    appendBySectionId: {
      date: [
        "Astuce simple : si vous avez une date contrainte, sécurisez une “fenêtre” (matin/après-midi) plutôt qu’une heure fixe. C’est souvent plus réaliste pour les déménageurs et ça évite les frictions de planning.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Ouen‑sur‑Seine (et checklist locale)",
        paragraphs: [
          "À Saint‑Ouen‑sur‑Seine, l’accès et le portage sont souvent les facteurs qui font varier un devis : stationnement, distance camion→porte, ascenseur (taille) et passages.",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez 2–3 dates possibles si vous pouvez : la flexibilité aide à sécuriser un meilleur créneau.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "2–3 dates possibles + photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Saint‑Ouen‑sur‑Seine : checklist avancée (devis + planning)",
        paragraphs: [
          "Objectif : fiabiliser accès + planning. Les devis divergent quand le portage est flou ou quand la fenêtre de date est trop rigide.",
          "Cette checklist standardise l’info et aide à obtenir des devis comparables.",
          "Elle sert aussi de plan simple pour le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit + photo escalier/ascenseur",
          "Meubles “limites” listés + photo + démontage (oui/non)",
          "2–3 dates possibles si flexible (meilleurs créneaux)",
          "Zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  "saint-maur-des-fosses": {
    appendBySectionId: {
      dossier: [
        "Ajoutez aussi une info “sortie/entrée facile ou pas” (marches, couloir, portillon). Ce détail est petit mais il influence le temps réel — donc la fiabilité du devis.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Maur‑des‑Fossés (et checklist locale)",
        paragraphs: [
          "À Saint‑Maur‑des‑Fossés, la fiabilité d’un devis dépend souvent du type de logement (maison vs immeuble) et du chemin réel camion→porte.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur + photo du passage le plus étroit. En maison, ajoutez le chemin extérieur (portail/allée/marches).",
          "Résultat : des devis comparables, et moins d’ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo chemin extérieur (si maison) / escalier-ascenseur (si immeuble)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Saint‑Maur‑des‑Fossés : checklist avancée (maison/immeuble)",
        paragraphs: [
          "Le but : fiabiliser l’accès selon votre cas (maison : extérieur; immeuble : ascenseur/paliers).",
          "En standardisant ces infos, vous obtenez des devis comparables et vous évitez les ajustements le jour J.",
          "Ajoutez ensuite les meubles “limites” pour sécuriser la méthode.",
        ],
        checklist: [
          "Maison : photo chemin extérieur (porte→rue) + obstacles/marches",
          "Immeuble : photo ascenseur cabine (porte ouverte) / escalier bas + palier",
          "Distance camion→porte (en pas) + étage",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  "epinay-sur-seine": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Épinay‑sur‑Seine, le duo gagnant pour un devis fiable : photo du stationnement potentiel + photo de l’accès intérieur. Le reste (cartons, volume) devient beaucoup plus simple à estimer.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Épinay‑sur‑Seine (et checklist locale)",
        paragraphs: [
          "À Épinay‑sur‑Seine, un devis fiable se gagne sur l’accès : stationnement/arrêt possible, distance de portage, et passages (porte/couloir/escalier/ascenseur).",
          "Le standard : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Épinay‑sur‑Seine : checklist avancée (portage & objets lourds)",
        paragraphs: [
          "Objectif : verrouiller ce qui fait varier le devis : portage, passages et objets lourds/fragiles.",
          "Avec une base standard, vous comparez des devis comparables et vous évitez les surprises.",
          "Cette checklist sert aussi de plan simple pour le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  "le-blanc-mesnil": {
    appendBySectionId: {
      "jour-j": [
        "Jour J : prévoyez un petit kit “imprévus” (ruban, cutters, marqueur, sacs, chiffons). Ça évite 20 minutes perdues pour un détail.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès au Blanc‑Mesnil (et checklist locale)",
        paragraphs: [
          "Au Blanc‑Mesnil, la fiabilité d’un devis dépend surtout de l’accès : stationnement, portage, et passages (portes/couloirs/escaliers).",
          "Le standard simple : distance camion→porte (en pas) + photo escalier/ascenseur + photo passage le plus étroit. Ajoutez ensuite vos meubles volumineux.",
          "Avec une base claire, vous comparez des devis comparables (et vous évitez les ajustements).",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Le Blanc‑Mesnil : checklist avancée (jour J sans surprise)",
        paragraphs: [
          "Objectif : fiabiliser l’accès (portage + passages) et éviter les ajustements le jour J.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur rend le chiffrage beaucoup plus réaliste.",
          "Ajoutez ensuite les meubles “limites” et vous sécurisez la méthode.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit + photo escalier/ascenseur",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Zone tampon + étiquetage par pièce + priorité",
          "Kit “imprévus” + sac perso hors camion",
        ],
      },
    ],
  },
  reze: {
    appendBySectionId: {
      dossier: [
        "À Rezé, le plus important est souvent la clarté du dossier (accès + volume + date) plutôt que d’essayer de tout optimiser à l’avance. Une base claire = des devis comparables.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Rezé (et checklist locale)",
        paragraphs: [
          "À Rezé, la fiabilité d’un devis dépend surtout de deux choses : un volume réaliste (photos des pièces + annexes) et un accès clair (stationnement, distance de portage, passages).",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur (si applicable) + photo du passage le plus étroit.",
          "Avec ça, vous comparez des devis comparables, sans surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "saint-herblain": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Herblain, on voit fréquemment des résidences où l’ascenseur est là… mais la distance de portage reste le vrai sujet (parking/entrée). Documentez le trajet complet : camion → entrée → ascenseur → palier.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Herblain (et checklist locale)",
        paragraphs: [
          "À Saint‑Herblain, le devis fiable est celui qui connaît le trajet réel camion→porte : stationnement, portage, et passages (portes/couloirs/ascenseur/escaliers).",
          "Une photo de cabine d’ascenseur porte ouverte + la distance camion→porte (en pas) suffisent souvent à fiabiliser les devis sur les gros meubles.",
          "Ajoutez le passage le plus étroit et vous éliminez l’essentiel de l’incertitude.",
        ],
        checklist: [
          "Photo du trajet camion→entrée (si accès indirect)",
          "Distance camion→porte (en pas) + étage",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  orvault: {
    appendBySectionId: {
      "volume-tri": [
        "Pour une maison (ou un logement avec cave/garage), pensez à inclure ces zones dans les photos. Beaucoup de devis sous-estiment le volume parce que ces espaces “hors pièces” sont oubliés.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Orvault (et checklist locale)",
        paragraphs: [
          "À Orvault, la fiabilité d’un devis dépend souvent des zones “hors pièces” (garage/cave/cellier) et de l’accès (chemin extérieur, marches, distance de portage).",
          "Le standard simple : photos des annexes + photo rue + distance camion→porte (en pas) + passage le plus étroit.",
          "Avec une base claire, vous comparez des devis comparables et vous évitez les ajustements.",
        ],
        checklist: [
          "Photos annexes (garage/cave/cellier) si existantes",
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo des meubles volumineux (canapé, armoire, frigo)",
        ],
      },
    ],
  },
  vertou: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Vertou, si vous êtes en maison, le “portage extérieur” (allée, marches, jardin, portail) est souvent le facteur qui surprend. Une photo du chemin de sortie (porte → rue) rend le devis plus fiable.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Vertou (et checklist locale)",
        paragraphs: [
          "À Vertou, en maison, le point clé est souvent le portage extérieur : portail, allée, marches, distance jusqu’au camion. C’est du temps de manutention.",
          "Le meilleur standard : photo du chemin porte→rue + photo rue (où s’arrêter) + distance camion→porte (en pas).",
          "Ajoutez le passage le plus étroit à l’intérieur et vous fiabilisez les gros meubles.",
        ],
        checklist: [
          "Photo du chemin extérieur (porte → rue) + obstacles/marches",
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "la-roche-sur-yon": {
    appendBySectionId: {
      "assurance": [
        "Dernier rappel utile : si vous avez des objets à forte valeur (sentimentale ou financière), mentionnez-le. L’objectif n’est pas de compliquer — c’est de choisir une prestation/assurance alignée.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à La Roche‑sur‑Yon (et checklist locale)",
        paragraphs: [
          "À La Roche‑sur‑Yon, un devis fiable se construit sur une base simple : accès clair + volume réaliste + objets fragiles/lourds annoncés.",
          "Le standard : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur (si applicable) + photo du passage le plus étroit.",
          "Ajoutez les objets à forte valeur/fragiles pour aligner protection et assurance avec vos attentes.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Liste + photo objets fragiles/valeur + meubles volumineux",
        ],
      },
    ],
  },

  // Pack 20 #2 (Longform) — Bretagne + Grand Est
  // Bretagne (10)
  brest: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Brest, le meilleur moyen d’avoir un devis stable est de rendre l’accès “visible” : photo de la rue + photo de l’entrée + photo de l’escalier/ascenseur. Ça évite les estimations au feeling et ça rend les devis réellement comparables.",
      ],
      "jour-j": [
        "Jour J : préparez une “zone tampon” près de la porte (cartons prêts, meubles démontés, couloir dégagé). Plus l’accès est fluide, plus l’équipe est efficace — et plus la journée se termine tôt.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Brest (et checklist locale)",
        paragraphs: [
          "À Brest, la fiabilité d’un devis dépend surtout de la visibilité sur l’accès : stationnement, portage, et passages (escaliers/ascenseur).",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Avec ça, vous comparez des devis comparables et vous évitez les ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : où s’arrêter + distance visible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Zone tampon près de la porte + photo meubles volumineux",
        ],
      },
    ],
  },
  vannes: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une ligne “accès extérieur” si vous êtes en maison (allée, marches, portail). C’est souvent l’info oubliée qui change le temps réel de manutention.",
      ],
      "volume-tri": [
        "Si vous avez cave/garage, photographiez-les aussi : ces zones “hors pièces” sont un classique des devis sous-estimés.",
      ],
    },
    extraSections: buildCommonExtraSections("Vannes"),
  },
  lorient: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Lorient, un devis fiable est souvent un devis qui connaît la distance camion→porte. Même sans mesure, notez “proche / moyen / loin” et ajoutez une photo : ça évite les écarts de portage entre devis.",
      ],
      date: [
        "Si vous voulez optimiser le prix sans sacrifier la qualité, essayez de proposer 2 dates en semaine + 1 option “secours”. La flexibilité augmente les chances d’un bon créneau.",
      ],
    },
    extraSections: buildCommonExtraSections("Lorient"),
  },
  quimper: {
    appendBySectionId: {
      "assurance": [
        "Si vous avez des objets fragiles (vaisselle, écran, œuvres, souvenirs), précisez-le dans le dossier. Le but n’est pas de dramatiser : c’est d’aligner protection + assurance avec la réalité.",
      ],
      emballage: [
        "Astuce simple : regroupez les cartons “fragile” par pièce (et pas par type d’objet). Au déchargement, ça évite de chercher et ça réduit les manipulations inutiles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Quimper (et checklist locale)",
        paragraphs: [
          "À Quimper, un devis fiable dépend de l’accès (portage, passages) et de l’alignement protection/assurance si vous avez du fragile.",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez une liste courte des objets fragiles/lourds : c’est ce qui stabilise la méthode (et donc le devis).",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets fragiles/lourds + meubles volumineux",
        ],
      },
    ],
  },
  "saint-malo": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Malo, la différence entre un devis “OK” et un devis “surprise” vient souvent du trajet réel camion→porte. Documentez-le : photo de la rue + photo de l’entrée + photo de l’escalier/ascenseur.",
      ],
      "dossier": [
        "Si vous hésitez sur un passage (porte étroite, palier tournant), écrivez-le tel quel. Un doute annoncé = une méthode prévue = un devis plus fiable.",
      ],
    },
    extraSections: buildCommonExtraSections("Saint‑Malo"),
  },
  "saint-brieuc": {
    appendBySectionId: {
      "volume-tri": [
        "Le tri qui paye le plus : ce qui prend du volume mais a peu de valeur d’usage (vieux meubles, doublons). Réduire 3–5 m³ peut changer le camion, donc le devis.",
      ],
      "jour-j": [
        "Jour J : gardez une boîte “essentiels 24h” (draps, chargeurs, papiers, café/thé). C’est le petit truc qui évite une soirée galère.",
      ],
    },
    extraSections: buildCommonExtraSections("Saint‑Brieuc"),
  },
  lannion: {
    appendBySectionId: {
      dossier: [
        "Pour stabiliser les devis, précisez si l’accès est direct ou s’il y a un “dernier tronçon” (cour, long couloir, marches). C’est du temps de manutention — donc du prix.",
      ],
    },
    extraSections: buildCommonExtraSections("Lannion"),
  },
  morlaix: {
    appendBySectionId: {
      "acces-stationnement": [
        "Si vous avez des marches, une pente ou un portillon (maison), ajoutez une photo du chemin de sortie (porte → rue). Ça rend le devis beaucoup plus juste.",
      ],
      "emballage": [
        "Astuce : regroupez les vis de démontage dans des sachets scotchés directement au meuble correspondant. Au remontage, vous gagnez un temps énorme.",
      ],
    },
    extraSections: buildCommonExtraSections("Morlaix"),
  },
  concarneau: {
    appendBySectionId: {
      date: [
        "Si vous avez une contrainte de date, sécurisez une fenêtre “matin/après-midi” plutôt qu’une heure fixe. C’est souvent plus réaliste et ça évite les frictions de planning.",
      ],
      "jour-j": [
        "Préparez un mini-kit “imprévus” (ruban, cutter, marqueur, sacs). Ça évite 20 minutes perdues pour un détail.",
      ],
    },
    extraSections: buildCommonExtraSections("Concarneau"),
  },
  auray: {
    appendBySectionId: {
      "volume-tri": [
        "Avant devis, faites une photo des meubles volumineux (canapé, armoire, frigo) près d’une porte/couloir : ça aide à estimer passage + démontage, donc à fiabiliser le devis.",
      ],
    },
    extraSections: buildCommonExtraSections("Auray"),
  },

  // Grand Est (10)
  metz: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Metz, le devis “qui tient” est celui qui connaît vos accès : stationnement possible, distance camion→porte, et passage intérieur (escalier/ascenseur). Documentez 3 photos, et vous évitez 80% des surprises.",
      ],
      "assurance": [
        "Comparez aussi les conditions : ce qui est inclus/exclu, comment l’accès est chiffré, et la procédure en cas de dommage. Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Metz (et checklist locale)",
        paragraphs: [
          "À Metz, la fiabilité d’un devis tient à la visibilité sur l’accès : où le camion s’arrête, combien on marche, et comment on passe à l’intérieur (escaliers/ascenseur).",
          "Le standard le plus efficace : photo de la rue + distance camion→porte (en pas) + photo escalier/palier (ou ascenseur cabine). Ajoutez ensuite les meubles volumineux.",
          "Objectif : chiffrer une méthode réaliste pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance visible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  nancy: {
    appendBySectionId: {
      dossier: [
        "Ajoutez un mini-inventaire “objets à risque” (fragiles/lourds). Ce n’est pas pour compliquer : c’est pour éviter qu’un devis sous-estime la méthode (protection, manutention).",
      ],
      "acces-stationnement": [
        "Si vous êtes en immeuble, la photo la plus utile est souvent l’escalier depuis le bas + un palier. On voit tout de suite les rotations et la faisabilité des gros meubles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Nancy (et checklist locale)",
        paragraphs: [
          "À Nancy, un devis fiable dépend surtout des passages (portes/couloirs/escaliers) et de la distance de portage. Ce sont les vrais facteurs de temps.",
          "Le bon réflexe : photo escalier (bas + palier) + photo du passage le plus étroit. Ajoutez la distance camion→porte et les gros meubles.",
          "Ensuite, comparez aussi la prestation (emballage/démontage/assurance) pour éviter les comparaisons biaisées.",
        ],
        checklist: [
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo passage le plus étroit (porte/couloir)",
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : arrêt possible",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  mulhouse: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le duo gagnant pour un devis fiable : photo du stationnement potentiel + photo de l’accès intérieur. Ensuite, le volume devient beaucoup plus simple à estimer correctement.",
      ],
      "jour-j": [
        "Jour J : étiquetez les cartons par pièce + priorité (ouvrir d’abord / peut attendre). Au déchargement, ça fait gagner un temps énorme.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Mulhouse (et checklist locale)",
        paragraphs: [
          "À Mulhouse, le devis fiable est celui qui connaît votre logistique réelle : stationnement, portage, et passages. Le volume se fiabilise avec les photos des pièces, l’accès avec 2–3 photos clés.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur. Ajoutez les meubles volumineux et vous sécurisez le chiffrage.",
          "Objectif : éliminer l’incertitude pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  colmar: {
    appendBySectionId: {
      "emballage": [
        "Pour éviter la casse sans y passer 3 nuits : standardisez. Même taille de cartons, lourd en bas, fragile protégé, et une étiquette lisible par pièce.",
      ],
      date: [
        "Si vous pouvez proposer 2–3 dates, faites-le. La flexibilité augmente la disponibilité et rend les devis plus réalistes.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Colmar (et checklist locale)",
        paragraphs: [
          "À Colmar, la fiabilité d’un devis dépend surtout de l’accès : distance de portage, étages, et passages. Une photo rend ces contraintes évidentes.",
          "Le bon standard : photo de la rue + photo entrée/passage + photo escalier/ascenseur. Ensuite, annoncez les meubles volumineux “limites”.",
          "Avec ça, vous comparez des devis sur une base claire.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  thionville: {
    appendBySectionId: {
      "acces-stationnement": [
        "Si l’accès impose du portage (cour, long couloir, parking), dites-le clairement. Beaucoup de “surprises” viennent d’un portage sous-estimé au moment du devis.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Thionville (et checklist locale)",
        paragraphs: [
          "À Thionville, le devis fiable se gagne sur le portage : où le camion s’arrête et combien on marche jusqu’à la porte. C’est souvent le paramètre sous-estimé qui crée des écarts.",
          "Ajoutez une photo escalier/ascenseur et une photo du passage le plus étroit : vous fiabilisez les devis sur les gros meubles.",
          "Objectif : comparer des devis comparables sans ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  troyes: {
    appendBySectionId: {
      "volume-tri": [
        "Le tri le plus rentable est celui qui enlève du volume “inutile”. Même quelques m³ peuvent réduire la durée du chargement et stabiliser le devis.",
      ],
      "assurance": [
        "Si vous avez un objet précieux (valeur ou sentimental), mentionnez-le. Le bon devis est celui qui prévoit protection/assurance alignée.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Troyes (et checklist locale)",
        paragraphs: [
          "À Troyes, le devis fiable combine deux choses : un volume réaliste (photos des pièces) et un accès clair (stationnement, portage, passages).",
          "Si vous faites un tri avant devis, mentionnez-le : c’est le levier le plus simple pour réduire le volume et stabiliser le chiffrage.",
          "Le standard ci-dessous suffit pour comparer des devis comparables.",
        ],
        checklist: [
          "Photos des pièces + meubles volumineux",
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
        ],
      },
    ],
  },
  haguenau: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une ligne “passage le plus étroit” (porte, couloir, escalier). Une seule photo de ce point suffit souvent à fiabiliser le devis sur les gros meubles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Haguenau (et checklist locale)",
        paragraphs: [
          "À Haguenau, la fiabilité d’un devis se joue souvent sur un seul point : le passage le plus étroit (porte/couloir/escalier). Montrez-le et le devis devient réaliste.",
          "Ajoutez la distance camion→porte et la photo escalier/ascenseur pour fiabiliser la manutention.",
          "Avec la checklist ci-dessous, vous standardisez la demande pour tous les déménageurs.",
        ],
        checklist: [
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  schiltigheim: {
    appendBySectionId: {
      "acces-stationnement": [
        "En zone urbaine, notez systématiquement la distance camion→porte (même en pas). C’est le repère le plus simple pour rendre les devis comparables.",
      ],
      date: [
        "Pour optimiser, privilégiez semaine + flexibilité. Les créneaux très demandés se réservent vite et se paient plus cher.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Schiltigheim (et checklist locale)",
        paragraphs: [
          "À Schiltigheim, l’accès urbain peut rendre le portage déterminant. La distance camion→porte est le repère le plus simple pour stabiliser les devis.",
          "Une photo de l’entrée + une photo escalier/ascenseur suffit souvent à éviter les devis trop optimistes sur les gros meubles.",
          "Objectif : comparer des devis comparables, à prestation identique.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "illkirch-graffenstaden": {
    appendBySectionId: {
      "jour-j": [
        "Jour J : gardez une personne “référent accès” (clés, portes, ascenseur) et une personne “référent cartons”. Ça évite les quiproquos quand tout va vite.",
      ],
      "acces-stationnement": [
        "Si l’ascenseur est présent, une photo de la cabine (porte ouverte) suffit souvent à éviter un devis trop optimiste sur les gros meubles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Illkirch‑Graffenstaden (et checklist locale)",
        paragraphs: [
          "À Illkirch‑Graffenstaden, la fiabilité d’un devis dépend du trajet réel camion→porte et de la taille de l’ascenseur. Une photo de cabine porte ouverte clarifie instantanément.",
          "Ajoutez le passage le plus étroit (porte/couloir) et vous fiabilisez le chiffrage des gros meubles.",
          "Le standard ci-dessous suffit pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit",
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  selestat: {
    appendBySectionId: {
      "acces-stationnement": [
        "Si vous avez une maison, pensez à l’accès extérieur : allée, marches, portail, distance jusqu’au camion. Une photo du chemin “porte → rue” rend le devis beaucoup plus juste.",
      ],
      "emballage": [
        "Astuce : préparez une boîte “outils” (tournevis, clé, ruban) qui reste accessible. Un démontage rapide au bon moment évite des blocages.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sélestat (et checklist locale)",
        paragraphs: [
          "À Sélestat, un devis fiable se gagne sur l’accès : stationnement, distance de portage, et passages. En maison, le chemin extérieur est souvent le point qui surprend; en immeuble, c’est l’escalier/palier.",
          "Montrez le passage le plus étroit et annoncez les meubles volumineux “limites” pour éviter les surprises.",
          "La checklist ci-dessous standardise votre demande pour tous les déménageurs.",
        ],
        checklist: [
          "Photo chemin extérieur (si maison) : porte → rue",
          "Photo escalier/ascenseur (si immeuble)",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },

  // Pack 20 #next (Nord/Est) — Grand Est (nouvelle série, sections complètes) (10)
  reims: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Reims (et checklist locale)",
        paragraphs: [
          "À Reims, le devis fiable dépend surtout de l’accès : stationnement, distance de portage, et passages (portes/couloirs/escaliers).",
          "Le standard simple : distance camion→porte + photo escalier/palier + photo du passage le plus étroit. Avec ça, les devis deviennent comparables.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  "charleville-mezieres": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Charleville‑Mézières (et checklist locale)",
        paragraphs: [
          "À Charleville‑Mézières, un devis fiable se gagne sur la clarté : accès + volume + date. L’accès se fiabilise avec 3 photos (rue, entrée, escalier/ascenseur).",
          "Si vous avez un passage étroit, montrez-le : c’est souvent le point qui change la méthode sur les gros meubles.",
          "Avec la checklist ci-dessous, vous standardisez la demande pour comparer proprement.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "chalons-en-champagne": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Châlons‑en‑Champagne (et checklist locale)",
        paragraphs: [
          "À Châlons‑en‑Champagne, le devis fiable est celui qui connaît votre logistique réelle : où le camion se place, combien de portage, et comment on passe à l’intérieur.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à fiabiliser les devis sur les gros meubles.",
          "Objectif : comparer des devis comparables à prestation identique.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  epernay: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Épernay (et checklist locale)",
        paragraphs: [
          "À Épernay, les devis deviennent comparables dès que l’accès est clair : distance de portage, étages, passages.",
          "Même sans mesures, une estimation en pas + une photo escalier/palier rendent le chiffrage réaliste.",
          "Ajoutez les meubles “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  epinal: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Épinal (et checklist locale)",
        paragraphs: [
          "À Épinal, le facteur #1 d’un devis fiable est le temps réel : portage, étages, passages. C’est ce qui fait varier la manutention.",
          "Le standard efficace : photo rue + distance camion→porte + photo escalier/ascenseur.",
          "Ajoutez les objets fragiles/lourds pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  luneville: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Lunéville (et checklist locale)",
        paragraphs: [
          "À Lunéville, un devis fiable se construit sur l’accès réel : stationnement, distance de portage, et passages intérieurs.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffit souvent à rendre le devis réaliste pour les gros meubles.",
          "Gardez la checklist identique pour tous les déménageurs pour comparer sereinement.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "bar-le-duc": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Bar‑le‑Duc (et checklist locale)",
        paragraphs: [
          "À Bar‑le‑Duc, la fiabilité d’un devis dépend de la clarté de l’accès : stationnement, portage, étages, passages.",
          "Le bon standard : distance camion→porte + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Avec ça, les devis deviennent comparables et les surprises diminuent fortement.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo objets fragiles/volumineux",
        ],
      },
    ],
  },
  verdun: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Verdun (et checklist locale)",
        paragraphs: [
          "À Verdun, un devis fiable se gagne sur la logistique : où le camion se place, combien de portage, et comment on passe à l’intérieur.",
          "Si vous avez des marches/couloirs longs, montrez-le : c’est du temps de manutention.",
          "Ajoutez les meubles volumineux “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "vitry-le-francois": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Vitry‑le‑François (et checklist locale)",
        paragraphs: [
          "À Vitry‑le‑François, le devis fiable dépend surtout de l’accès : stationnement, distance de portage, passages.",
          "Même sans mesures, une estimation en pas + une photo escalier/ascenseur rend le chiffrage réaliste.",
          "Gardez le même dossier pour tous les déménageurs et comparez sereinement.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo objets fragiles/volumineux",
        ],
      },
    ],
  },
  forbach: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Forbach (et checklist locale)",
        paragraphs: [
          "À Forbach, un devis fiable se gagne sur la clarté : accès + volume + date. L’accès se fiabilise avec 3 photos (rue, entrée, escalier/ascenseur).",
          "Une photo du passage le plus étroit suffit souvent à éviter un devis trop optimiste sur les gros meubles.",
          "Objectif : comparer des devis comparables, sans ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
    ],
  },

  // Pack 20 #next (IDF suite) — Île-de-France satellites (20, sections complètes)
  "issy-les-moulineaux": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Issy‑les‑Moulineaux (et checklist locale)",
        paragraphs: [
          "À Issy‑les‑Moulineaux, le devis fiable dépend souvent du duo ascenseur + portage. Une cabine petite change la méthode sur les gros meubles.",
          "Le standard simple : photo cabine porte ouverte + distance camion→porte + photo du passage le plus étroit.",
          "Ajoutez les meubles volumineux et vous sécurisez le chiffrage.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Issy‑les‑Moulineaux : checklist avancée (devis + jour J)",
        paragraphs: [
          "Objectif : enlever les zones floues qui font gonfler ou varier les devis (ascenseur, passages, portage).",
          "Ce mini‑plan vous aide à donner la même base d’info à tout le monde, et à réduire les frictions le jour J.",
          "Simple, répétable, efficace.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte + photo palier (si immeuble)",
          "Mesurer “en pas” la distance camion→porte (et la noter)",
          "Identifier 1 point critique : porte/couloir/escalier le plus étroit (photo)",
          "Préparer une zone “tampon” près de la porte (cartons prêts)",
          "Prévoir sac perso + boîte “essentiels 24h” hors camion",
        ],
      },
    ],
  },
  "neuilly-sur-seine": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Neuilly‑sur‑Seine (et checklist locale)",
        paragraphs: [
          "À Neuilly‑sur‑Seine, la densité rend l’accès déterminant : stationnement, portage, ascenseur (taille). Ce sont les vrais “temps cachés”.",
          "Une photo de cabine d’ascenseur + distance camion→porte suffit souvent à fiabiliser les devis.",
          "Ajoutez le passage le plus étroit et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Neuilly‑sur‑Seine : checklist avancée (accès & meubles limites)",
        paragraphs: [
          "Le vrai gain ici : fiabiliser les gros meubles. Les devis divergent quand l’ascenseur est petit ou que le passage est serré.",
          "En documentant 2 choses (cabine + passage étroit), vous transformez des devis “au feeling” en devis comparables.",
          "Et vous évitez les improvisations le jour J.",
        ],
        checklist: [
          "Photo ascenseur cabine + largeur porte (photo suffit, pas besoin de mesure)",
          "Photo du passage le plus étroit (porte/couloir/escalier)",
          "Photo du canapé/armoire/frigo + mention démontage souhaité (oui/non)",
          "Distance camion→porte (en pas) + étage",
          "1 référent accès + 1 référent cartons le jour J",
        ],
      },
    ],
  },
  villejuif: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Villejuif (et checklist locale)",
        paragraphs: [
          "À Villejuif, le devis fiable dépend du temps réel : portage, étages, passages. C’est ce qui rend les devis comparables.",
          "Le standard : distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Villejuif : checklist avancée (accès & portage)",
        paragraphs: [
          "Cette checklist sert à stabiliser les devis : mêmes infos, même méthode, donc des prix comparables.",
          "Le point clé est le portage (distance camion→porte) et les passages (porte/couloir/escalier/ascenseur).",
          "Moins de flou = moins d’ajustements le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Photo du passage le plus étroit + photo meubles volumineux",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + étiquetage par pièce + priorité",
        ],
      },
    ],
  },
  sarcelles: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sarcelles (et checklist locale)",
        paragraphs: [
          "À Sarcelles, l’accès et le portage sont souvent les facteurs de temps principaux. Une photo rend ces contraintes évidentes.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur.",
          "Ajoutez les meubles volumineux pour fiabiliser la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Sarcelles : checklist avancée (meubles limites & passages)",
        paragraphs: [
          "Le but : fiabiliser les gros meubles. Les devis divergent quand le passage est serré ou quand l’ascenseur est petit.",
          "Avec une photo de cabine (ou escalier) + une photo du passage le plus étroit, vous verrouillez la méthode.",
          "Ensuite, tout le monde chiffre la même base.",
        ],
        checklist: [
          "Photo du passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Distance camion→porte (en pas) + étage",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Couloir dégagé + zone tampon avant arrivée",
        ],
      },
    ],
  },
  bobigny: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Bobigny (et checklist locale)",
        paragraphs: [
          "À Bobigny, le devis fiable se gagne sur l’accès : stationnement, portage, passages. C’est le facteur de temps principal.",
          "Une estimation en pas + une photo escalier/palier rend le chiffrage beaucoup plus réaliste.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Bobigny : checklist avancée pour éviter les ajustements",
        paragraphs: [
          "Le but : que le devis reflète la réalité (accès + portage + passages) et que l’équipe arrive avec la bonne méthode.",
          "Une checklist courte, mais complète, suffit à rendre les devis comparables.",
          "Et à réduire les surprises le jour J.",
        ],
        checklist: [
          "Photo rue + endroit d’arrêt possible (même approximatif)",
          "Distance camion→porte (en pas) + présence de marches/couloir long",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit + meubles volumineux",
          "Objets lourds/fragiles listés (protection attendue)",
        ],
      },
    ],
  },
  bondy: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Bondy (et checklist locale)",
        paragraphs: [
          "À Bondy, la fiabilité dépend surtout du portage et des passages. Ce sont les paramètres qui font varier les devis.",
          "Le standard : photo rue + distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Ajoutez les meubles volumineux pour éviter les surprises.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Bondy : checklist avancée (portage & timing)",
        paragraphs: [
          "Objectif : éviter les journées qui s’allongent parce que le portage ou les passages n’ont pas été anticipés.",
          "Cette checklist rend l’accès “lisible” et aide à obtenir des devis comparables.",
          "Elle sert aussi de plan simple pour le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + obstacles (marches/couloir)",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Zone tampon près de la porte (cartons prêts) + couloir dégagé",
          "Sac perso + boîte “essentiels 24h” hors camion",
        ],
      },
    ],
  },
  pantin: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Pantin (et checklist locale)",
        paragraphs: [
          "À Pantin, la densité rend l’accès déterminant : stationnement, portage, ascenseur (taille).",
          "Une photo de cabine d’ascenseur + distance camion→porte suffit souvent à fiabiliser les devis.",
          "Ajoutez le passage le plus étroit et les meubles volumineux pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Pantin : checklist avancée (portage + ascenseur)",
        paragraphs: [
          "À Pantin, les devis varient surtout quand le portage est sous-estimé ou quand l’ascenseur est trop petit pour les gros meubles.",
          "Cette checklist sert à “verrouiller” ces deux points et à rendre les devis comparables.",
          "Moins d’impro = moins de retard le jour J.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte (ou escalier bas + palier)",
          "Distance camion→porte (en pas) + obstacles (cour/long couloir)",
          "Photo passage le plus étroit + photo canapé/armoire/frigo",
          "Cartons lourds limités (livres/vaisselle) + étiquetage clair",
          "Zone tampon près de la porte + sac perso hors camion",
        ],
      },
    ],
  },
  "fontenay-sous-bois": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Fontenay‑sous‑Bois (et checklist locale)",
        paragraphs: [
          "À Fontenay‑sous‑Bois, un devis fiable dépend du temps réel : portage, étages, passages. C’est le facteur principal.",
          "Le standard : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Fontenay‑sous‑Bois : checklist avancée (devis comparables)",
        paragraphs: [
          "Le but : donner la même base d’info à tout le monde, pour éviter les écarts artificiels entre devis.",
          "On verrouille l’accès (portage, passages, ascenseur) puis on liste les meubles “limites”.",
          "Résultat : devis plus fiables, jour J plus fluide.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Photo passage le plus étroit + photo canapé/armoire/frigo",
          "Objets lourds/fragiles listés + protection attendue",
          "Zone tampon + étiquetage clair par pièce",
        ],
      },
    ],
  },
  "maisons-alfort": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Maisons‑Alfort (et checklist locale)",
        paragraphs: [
          "À Maisons‑Alfort, le duo gagnant pour fiabiliser un devis : distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les meubles volumineux “limites” pour éviter les surprises au chargement.",
          "Gardez la checklist identique pour tous les déménageurs pour comparer proprement.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : stationnement possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Maisons‑Alfort : checklist avancée (passages & méthode)",
        paragraphs: [
          "Objectif : fiabiliser la méthode sur les passages et les gros meubles, pour éviter les ajustements.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à cadrer.",
          "Ajoutez ensuite les meubles “limites” : le devis devient réaliste.",
        ],
        checklist: [
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Distance camion→porte (en pas) + étage",
          "Meubles “limites” listés + photo + démontage (oui/non)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  alfortville: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Alfortville (et checklist locale)",
        paragraphs: [
          "À Alfortville, le devis fiable dépend surtout de l’accès : stationnement, portage, passages. Une photo rend ces contraintes évidentes.",
          "Le standard : distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Photo rue : arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Alfortville : checklist avancée (accès & objets lourds)",
        paragraphs: [
          "Le but : éviter les devis “optimistes” sur les objets lourds/fragiles et sur le temps de portage.",
          "Avec la même base d’info pour tous, vous comparez des devis comparables.",
          "Et le jour J se passe avec moins d’improvisation.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  massy: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Massy (et checklist locale)",
        paragraphs: [
          "À Massy, la fiabilité d’un devis dépend souvent du trio : accès réel, portage, ascenseur (taille). Ce sont les “temps cachés”.",
          "Une photo cabine d’ascenseur + distance camion→porte suffit souvent à fiabiliser le chiffrage des gros meubles.",
          "Ajoutez le passage le plus étroit et vous sécurisez la méthode.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Massy : checklist avancée (ascenseur & portage)",
        paragraphs: [
          "Objectif : verrouiller les “temps cachés” (ascenseur, portage, passages) pour obtenir des devis comparables.",
          "Une photo de cabine + une photo du passage le plus étroit suffisent souvent à fiabiliser la méthode.",
          "Ajoutez ensuite les meubles “limites” et vous sécurisez le chiffrage.",
        ],
        checklist: [
          "Photo ascenseur cabine (porte ouverte) / escalier bas + palier",
          "Distance camion→porte (en pas) + étage",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Option démontage/remontage souhaitée (oui/non)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },

  // Pack 20 #3 (Longform) — PACA + Nouvelle-Aquitaine
  // PACA (10)
  "aix-en-provence": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Aix‑en‑Provence, le meilleur “anti‑surprise” est de documenter le trajet complet camion→porte. Même sans chiffres précis, 3 photos (rue, entrée, escalier/ascenseur) suffisent souvent à stabiliser les devis.",
      ],
      dossier: [
        "Ajoutez une ligne “accès extérieur” si vous êtes en maison (allée, marches, portail). C’est souvent l’info oubliée qui change le temps de manutention.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Aix‑en‑Provence (et checklist locale)",
        paragraphs: [
          "À Aix‑en‑Provence, un devis fiable dépend surtout du trajet réel camion→porte et des passages intérieurs. Même sans mesures, quelques photos suffisent à fiabiliser l’accès.",
          "Si vous êtes en maison, montrez le chemin extérieur (portail/allée/marches). Si vous êtes en immeuble, montrez escalier/palier ou l’ascenseur cabine.",
          "But : éviter les devis “au feeling” et comparer des devis comparables.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  avignon: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Avignon, le point qui fait varier un devis plus qu’on ne croit : la distance de portage. Notez “proche / moyen / loin” et ajoutez une photo de la rue : vous rendez les devis comparables immédiatement.",
      ],
      date: [
        "Si vous voulez optimiser sans stresser, proposez 2 dates en semaine + 1 option de secours. La flexibilité augmente la disponibilité et rend les devis plus réalistes.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Avignon (et checklist locale)",
        paragraphs: [
          "À Avignon, le portage et l’accès intérieur sont souvent les facteurs de temps principaux. Une photo de la rue + une photo de l’entrée + une photo escalier/ascenseur rendent le devis beaucoup plus fiable.",
          "Notez aussi la distance camion→porte (même en pas). C’est le repère le plus simple pour comparer des devis.",
          "Ensuite, annoncez vos meubles “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (groupée)",
        ],
      },
    ],
  },
  cannes: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Cannes, un devis fiable est souvent un devis qui connaît l’accès réel au bâtiment : où s’arrêter, combien de portage, et si l’ascenseur est “grand comment”. Une photo de cabine (porte ouverte) fait gagner un temps énorme au chiffrage.",
      ],
      "jour-j": [
        "Jour J : gardez une personne “référent accès” (clés, badges, portes) et une personne “référent cartons”. Quand ça va vite, ça évite les quiproquos.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cannes (et checklist locale)",
        paragraphs: [
          "À Cannes, la densité rend l’accès déterminant : ascenseur (taille), distance de portage, passage le plus étroit. Ce sont les “temps cachés”.",
          "Le meilleur standard : photo ascenseur cabine porte ouverte + distance camion→porte + photo du passage le plus étroit.",
          "Avec ça, vous comparez une prestation, pas une hypothèse.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo objets fragiles/volumineux",
        ],
      },
    ],
  },
  antibes: {
    appendBySectionId: {
      dossier: [
        "Ajoutez un mini‑inventaire “objets à risque” (fragiles/lourds/encombrants). Ce n’est pas pour compliquer : c’est pour éviter qu’un devis sous‑estime la méthode (protection, manutention).",
      ],
      "emballage": [
        "Astuce : standardisez l’étiquetage (pièce + priorité). Au déchargement, ça réduit les manipulations et la fatigue.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Antibes (et checklist locale)",
        paragraphs: [
          "À Antibes, un devis fiable se gagne sur la logistique réelle : stationnement, portage, passages. Une photo rend ces contraintes évidentes.",
          "Ajoutez un mini-inventaire des objets à risque (fragiles/lourds). Ça aligne la méthode (protection, manutention) et fiabilise le devis.",
          "Gardez la checklist identique pour tous les déménageurs.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  "la-seyne-sur-mer": {
    appendBySectionId: {
      "acces-stationnement": [
        "À La Seyne‑sur‑Mer, le duo qui rend les devis fiables : photo du stationnement potentiel + photo de l’accès intérieur. Ensuite, le volume devient beaucoup plus simple à estimer correctement.",
      ],
      "volume-tri": [
        "Si vous avez cave/garage, incluez‑les dans les photos : ce sont des zones souvent oubliées qui font gonfler le volume réel.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à La Seyne‑sur‑Mer (et checklist locale)",
        paragraphs: [
          "À La Seyne‑sur‑Mer, un devis fiable dépend surtout de l’accès : stationnement, distance de portage, et passages intérieurs.",
          "Si vous avez cave/garage, incluez-les : c’est un classique des volumes sous-estimés qui finissent en ajustement.",
          "Objectif : standardiser l’info pour comparer des devis comparables.",
        ],
        checklist: [
          "Photos annexes (cave/garage) si existantes",
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
        ],
      },
    ],
  },
  hyeres: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Hyères, si vous êtes en maison, pensez au “portage extérieur” (allée, marches, portail). Une photo du chemin “porte → rue” suffit à fiabiliser le devis.",
      ],
      "assurance": [
        "Dernier rappel utile : si vous avez des objets à forte valeur (financière ou sentimentale), mentionnez‑le. Le bon devis est celui qui prévoit protection/assurance alignée.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Hyères (et checklist locale)",
        paragraphs: [
          "À Hyères, en maison, le portage extérieur (allée, marches, portail) est souvent le point qui surprend. En immeuble, c’est le passage intérieur (escalier/palier/ascenseur).",
          "Une photo du chemin porte→rue + une photo du passage le plus étroit rendent le devis beaucoup plus fiable.",
          "Ajoutez les objets fragiles/lourds pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Photo chemin extérieur (si maison) : porte → rue",
          "Photo escalier/ascenseur (si immeuble)",
          "Photo rue : stationnement possible",
          "Distance camion→porte (en pas)",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  frejus: {
    appendBySectionId: {
      date: [
        "Astuce planning : si vous avez une contrainte de date, sécurisez une fenêtre “matin/après‑midi” plutôt qu’une heure fixe. C’est souvent plus réaliste et plus facile à chiffrer proprement.",
      ],
      "jour-j": [
        "Préparez un mini‑kit “imprévus” (ruban, cutter, marqueur, sacs). Ça évite 20 minutes perdues pour un détail.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Fréjus (et checklist locale)",
        paragraphs: [
          "À Fréjus, la fiabilité d’un devis dépend de l’accès (stationnement/portage) et du planning (fenêtre de date réaliste).",
          "Le standard le plus simple : photo de la rue + distance camion→porte + photo escalier/ascenseur. Ensuite, vous comparez des devis comparables.",
          "Préparez aussi vos meubles volumineux “limites” : mieux vaut anticiper que improviser.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "2–3 dates possibles + photo meubles volumineux",
        ],
      },
    ],
  },
  "saint-raphael": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Raphaël, notez la distance camion→porte (même en pas) et ajoutez une photo de l’entrée : c’est le repère le plus simple pour rendre les devis comparables.",
      ],
      "emballage": [
        "Astuce : sachets de vis scotchés au meuble correspondant. Au remontage, vous gagnez un temps énorme.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Raphaël (et checklist locale)",
        paragraphs: [
          "À Saint‑Raphaël, le repère le plus utile pour comparer des devis est la distance camion→porte (même en pas) + une photo de l’entrée.",
          "Ajoutez ensuite une photo escalier/ascenseur et une photo du passage le plus étroit : vous fiabilisez le chiffrage des gros meubles.",
          "Objectif : éliminer l’incertitude et éviter les ajustements le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : stationnement possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  arles: {
    appendBySectionId: {
      "volume-tri": [
        "Le tri le plus rentable : ce qui prend du volume mais a peu de valeur d’usage (doublons, vieux meubles). Réduire quelques m³ peut changer la durée du chargement et stabiliser le devis.",
      ],
      dossier: [
        "Si vous hésitez sur un passage (porte étroite, palier tournant), écrivez‑le tel quel : un doute annoncé = une méthode prévue = un devis plus fiable.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Arles (et checklist locale)",
        paragraphs: [
          "À Arles, le meilleur levier prix est souvent le tri (réduire le volume), et le meilleur levier fiabilité est l’accès (stationnement/portage/passage).",
          "Montrez le passage le plus étroit et annoncez les meubles “limites”. C’est souvent ce détail qui évite une mauvaise surprise au chargement.",
          "Gardez la checklist identique pour tous les déménageurs pour comparer proprement.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur (si applicable)",
          "Photo meubles volumineux + mention tri effectué (oui/non)",
        ],
      },
    ],
  },
  martigues: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Martigues, beaucoup d’écarts de devis viennent du portage sous‑estimé. Une estimation “court/moyen/long” + une photo de la rue suffit souvent à cadrer.",
      ],
      "assurance": [
        "Comparez aussi les conditions (inclus/exclus, accès pris en compte, procédure en cas de dommage). Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Martigues (et checklist locale)",
        paragraphs: [
          "À Martigues, le portage est souvent le paramètre sous-estimé qui crée des écarts de devis. Une estimation simple (court/moyen/long) + une photo de la rue stabilise le chiffrage.",
          "Ajoutez une photo escalier/ascenseur et une photo du passage le plus étroit : vous fiabilisez les devis sur les gros meubles.",
          "Objectif : comparer des devis comparables, sans ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },

  // Nouvelle-Aquitaine (10)
  "la-rochelle": {
    appendBySectionId: {
      "acces-stationnement": [
        "À La Rochelle, le devis fiable est celui qui voit l’accès : photo de la rue + photo de l’entrée + photo de l’escalier/ascenseur. Ça évite les estimations au feeling et rend les devis comparables.",
      ],
      date: [
        "Pour optimiser sans stress : proposez 2–3 dates possibles. La flexibilité augmente la disponibilité et stabilise les devis.",
      ],
    },
    extraSections: buildCommonExtraSections("La Rochelle"),
  },
  niort: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une mini‑ligne “meubles limites” (canapé, frigo, armoire). C’est souvent le détail qui transforme un devis “optimiste” en devis fiable.",
      ],
      "jour-j": [
        "Jour J : une zone tampon près de la porte (cartons prêts, couloir dégagé) = moins d’allers‑retours inutiles = journée plus courte.",
      ],
    },
    extraSections: buildCommonExtraSections("Niort"),
  },
  poitiers: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le repère le plus simple pour comparer des devis à Poitiers : distance camion→porte + photo du passage le plus étroit. Avec ça, les écarts deviennent compréhensibles (et évitables).",
      ],
      "emballage": [
        "Astuce : faites une “boîte essentiels 24h” (chargeurs, draps, papiers, café/thé). Ne la chargez pas par erreur : ça vous sauve la soirée.",
      ],
    },
    extraSections: buildCommonExtraSections("Poitiers"),
  },
  limoges: {
    appendBySectionId: {
      "volume-tri": [
        "Avant devis, un tri rapide en 3 piles (don/vente, recycler, à déménager) est souvent le meilleur levier prix. Moins de volume = moins de camion, moins de temps, moins de coût.",
      ],
      "assurance": [
        "Si vous avez des objets fragiles ou précieux, mentionnez‑le. Le but est d’aligner protection/assurance avec la réalité, pas d’alourdir le dossier.",
      ],
    },
    extraSections: buildCommonExtraSections("Limoges"),
  },
  angouleme: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Angoulême, l’accès intérieur (escaliers/paliers) est souvent le point qui fait varier le temps. Une photo de l’escalier depuis le bas + un palier vaut mieux qu’une description.",
      ],
      dossier: [
        "Si vous doutez du passage d’un meuble, dites‑le. Un doute annoncé = une méthode prévue = un devis plus fiable.",
      ],
    },
    extraSections: buildCommonExtraSections("Angoulême"),
  },
  "brive-la-gaillarde": {
    appendBySectionId: {
      date: [
        "Si vous avez une date contrainte, proposez quand même une option “secours”. C’est souvent ce qui permet d’obtenir un devis cohérent (et une bonne équipe).",
      ],
      "jour-j": [
        "Jour J : prévoyez un kit “outils” accessible (tournevis, clé, ruban). Un démontage rapide au bon moment évite des blocages.",
      ],
    },
    extraSections: buildCommonExtraSections("Brive‑la‑Gaillarde"),
  },
  perigueux: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Périgueux, un devis fiable se gagne sur la logistique : stationnement, portage, et passages. 3 photos bien choisies rendent les devis comparables instantanément.",
      ],
      "volume-tri": [
        "N’oubliez pas cave/garage/grenier dans les photos. C’est un classique des volumes sous‑estimés.",
      ],
    },
    extraSections: buildCommonExtraSections("Périgueux"),
  },
  bergerac: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une info “sortie facile ou pas” (marches, couloir, portillon). Ce petit détail influence le temps réel — donc la fiabilité du devis.",
      ],
      "emballage": [
        "Astuce : gardez les vis dans des sachets scotchés au meuble. Ça rend le remontage beaucoup plus rapide (et propre).",
      ],
    },
    extraSections: buildCommonExtraSections("Bergerac"),
  },
  agen: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le portage est souvent le facteur sous‑estimé. À Agen, notez la distance camion→porte (même en pas) et ajoutez une photo de la rue : vous stabilisez les devis.",
      ],
      "assurance": [
        "Comparez aussi les conditions : inclus/exclus, accès pris en compte, procédure en cas de dommage. Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
    extraSections: buildCommonExtraSections("Agen"),
  },
  bayonne: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Bayonne, documentez l’accès comme un mini‑projet : où s’arrêter, distance de portage, et passages intérieurs. Une photo de la rue + entrée + escalier/ascenseur suffit souvent à rendre le devis très fiable.",
      ],
      "jour-j": [
        "Jour J : gardez un sac perso “à ne pas charger” (papiers, clés, ordinateur). C’est le petit détail qui évite la panique.",
      ],
    },
    extraSections: buildCommonExtraSections("Bayonne"),
  },

  // Pack 20 #4 (Longform) — Occitanie (20)
  nimes: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Nîmes, le plus gros levier de fiabilité, c’est l’accès : photo de la rue + photo de l’entrée + photo escalier/ascenseur. Ça évite les devis “au feeling” et rend la comparaison beaucoup plus juste.",
      ],
      dossier: [
        "Ajoutez une ligne “passage le plus étroit” (porte/couloir/escalier). Une seule photo de ce point suffit souvent à fiabiliser le devis sur les gros meubles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Nîmes (et checklist locale)",
        paragraphs: [
          "À Nîmes, le devis devient fiable quand vous décrivez votre logement comme un parcours : entrée → escalier/ascenseur → palier → pièce principale. Ce n’est pas du “détail”, c’est du temps de manutention (donc du prix).",
          "Si vous êtes en maison, le sujet est souvent l’extérieur : portillon, marches, allée, distance jusqu’au camion. Si vous êtes en immeuble, le sujet est l’intérieur : largeur de couloir, rotations d’escalier, ascenseur petit/grand.",
          "Le bon réflexe : une mini-checklist photo + 2 infos écrites (étage/ascenseur, distance camion→porte).",
        ],
        checklist: [
          "Photo rue : où le camion peut s’arrêter (même approximatif)",
          "Distance camion→porte : proche / moyen / long (ou en pas)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier (bas + palier) ou ascenseur (porte + cabine)",
          "Photo des 2–3 meubles “limites” (canapé, frigo, armoire) près d’un passage",
        ],
      },
    ],
  },
  perpignan: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Perpignan, le portage est souvent sous-estimé. Notez la distance camion→porte (même en pas) + une photo de la rue : vous stabilisez les devis immédiatement.",
      ],
      date: [
        "Pour optimiser sans stress : proposez 2 dates en semaine + 1 option de secours. La flexibilité augmente la disponibilité et rend les devis plus réalistes.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Perpignan (et checklist locale)",
        paragraphs: [
          "À Perpignan, le point qui fait le plus varier un devis, c’est rarement “le nombre de cartons”. C’est l’accès : stationnement possible, distance de portage, et passages (porte/couloir/escalier).",
          "Si vous hésitez sur un passage (angle serré, couloir étroit), dites-le. Les pros préfèrent prévoir une méthode réaliste (démontage/protection) plutôt que découvrir le blocage au chargement.",
          "But : que tout le monde chiffre la même logistique, pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo du stationnement potentiel (ou de l’endroit où s’arrêter)",
          "Distance camion→porte (même en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (porte + cabine)",
          "Liste + photo des objets lourds/fragiles (frigo, vitrine, électroménager)",
        ],
      },
    ],
  },
  beziers: {
    appendBySectionId: {
      dossier: [
        "Ajoutez un mini-inventaire “objets à risque” (fragiles/lourds/encombrants). Ce n’est pas pour compliquer : c’est pour éviter un devis sous-dimensionné sur la méthode.",
      ],
      "jour-j": [
        "Jour J : préparez une zone tampon près de la porte (cartons prêts, couloir dégagé). Moins d’aller-retours inutiles = journée plus courte.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Béziers (et checklist locale)",
        paragraphs: [
          "À Béziers, la qualité d’un devis dépend surtout de la clarté : accès + volume + date. Quand ces trois éléments sont stables, les prix deviennent comparables et les surprises disparaissent.",
          "Le duo gagnant : 1 photo du stationnement et 1 photo de l’accès intérieur. Ajoutez ensuite les meubles “limites” (canapé, armoire) et vous évitez les devis trop optimistes.",
          "Conseil : gardez la checklist ci-dessous identique pour tous les déménageurs.",
        ],
        checklist: [
          "Photo rue : endroit où le camion peut s’arrêter",
          "Distance camion→porte : court/moyen/long",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photos rapides des meubles volumineux + mention démontage souhaité (oui/non)",
        ],
      },
    ],
  },
  narbonne: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Narbonne, la meilleure façon d’obtenir des devis comparables est de documenter le trajet complet camion→porte. 3 photos bien choisies valent mieux que 10 lignes de description.",
      ],
      "assurance": [
        "Comparez aussi les conditions : inclus/exclus, accès pris en compte, procédure en cas de dommage. Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Narbonne (et checklist locale)",
        paragraphs: [
          "À Narbonne, les devis se comparent bien quand l’accès est “visible”. L’idée est simple : le même parcours pour tout le monde = la même base de chiffrage.",
          "Même si vous ne mesurez rien, une photo de la rue, une photo de l’entrée, et une photo de l’escalier/ascenseur donnent une image fidèle du temps de manutention.",
          "Ensuite, annoncez les exceptions : meubles lourds, passage étroit, portage long. C’est ça, la fiabilité.",
        ],
        checklist: [
          "Photo stationnement / arrêt possible",
          "Distance camion→porte (même en pas)",
          "Photo de l’entrée + largeur du passage",
          "Photo escalier (bas + palier) ou ascenseur (porte + cabine)",
          "Photo du passage le plus étroit + meubles “limites”",
        ],
      },
    ],
  },
  montauban: {
    appendBySectionId: {
      "volume-tri": [
        "Avant devis, pensez “zones hors pièces” : garage, cave, cellier. Ce sont des classiques des volumes sous-estimés. Une photo suffit souvent à éviter l’oubli.",
      ],
      "emballage": [
        "Astuce : vis dans des sachets scotchés au meuble correspondant. Ça rend le remontage beaucoup plus rapide (et propre).",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Montauban (et checklist locale)",
        paragraphs: [
          "À Montauban, le point qui fait souvent dériver un devis, c’est le volume “caché” : garage, cave, cellier, grenier. Si vous ne les montrez pas, personne ne peut les chiffrer correctement.",
          "Côté accès, faites simple : où le camion se met, combien on marche, et comment on monte. Le reste devient beaucoup plus prévisible.",
          "La checklist ci-dessous suffit à rendre vos devis comparables.",
        ],
        checklist: [
          "Photos des zones hors pièces (garage/cave/cellier) si elles existent",
          "Photo rue : stationnement possible + distance",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur (si immeuble)",
          "Liste des meubles volumineux + 1 photo groupée",
        ],
      },
    ],
  },
  albi: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Albi, l’accès intérieur (escaliers/paliers) peut être le point qui fait varier le temps. Une photo de l’escalier depuis le bas + un palier fiabilise le devis sur les gros meubles.",
      ],
      dossier: [
        "Si vous doutez du passage d’un meuble, dites-le. Un doute annoncé = une méthode prévue = un devis plus fiable.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Albi (et checklist locale)",
        paragraphs: [
          "À Albi, l’écart entre deux devis vient souvent d’un détail de passage : un palier tournant, une porte un peu étroite, un couloir long. Une photo rend ces points évidents.",
          "Le bon réflexe : montrer le “goulot d’étranglement” (porte/couloir/escalier) + annoncer les meubles qui posent question. Ça rend le devis réaliste.",
          "La checklist ci-dessous est conçue pour éviter les suppléments liés aux accès.",
        ],
        checklist: [
          "Photo du passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier (bas + palier) ou ascenseur (cabine)",
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte : court/moyen/long",
          "Photo des meubles “limites” (canapé, armoire, frigo)",
        ],
      },
    ],
  },
  carcassonne: {
    appendBySectionId: {
      date: [
        "Si vous avez une contrainte de date, sécurisez une fenêtre “matin/après-midi” plutôt qu’une heure fixe. C’est souvent plus réaliste et plus facile à chiffrer proprement.",
      ],
      "jour-j": [
        "Préparez un mini-kit “imprévus” (ruban, cutter, marqueur, sacs). Ça évite 20 minutes perdues pour un détail.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Carcassonne (et checklist locale)",
        paragraphs: [
          "À Carcassonne, ce qui rend un devis fiable, c’est la visibilité sur l’accès et le timing. Si l’accès est clair et la fenêtre de date réaliste, la logistique devient prévisible.",
          "Le meilleur format : photos courtes et utiles (rue, entrée, escalier/ascenseur), puis 2–3 infos écrites (étage/ascenseur, distance camion→porte, meubles limites).",
          "Avec ça, vous comparez une prestation, pas un chiffre au hasard.",
        ],
        checklist: [
          "Photo rue : où le camion peut s’arrêter",
          "Distance camion→porte (même en pas)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "2–3 dates possibles + photo des meubles volumineux",
        ],
      },
    ],
  },
  sete: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Sète, le duo gagnant pour un devis fiable : photo du stationnement potentiel + photo de l’accès intérieur. Ensuite, le volume devient beaucoup plus simple à estimer correctement.",
      ],
      "emballage": [
        "Astuce : standardisez l’étiquetage (pièce + priorité). Au déchargement, ça réduit les manipulations inutiles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sète (et checklist locale)",
        paragraphs: [
          "À Sète, la fiabilité d’un devis tient à deux questions : le camion peut-il se rapprocher, et comment on passe à l’intérieur (escaliers/ascenseur).",
          "Si vous avez un portage long, annoncez-le tôt. Le portage est du temps de manutention — et le temps, c’est le devis.",
          "La checklist ci-dessous aide à rendre vos devis comparables, sans blabla.",
        ],
        checklist: [
          "Photo stationnement / arrêt possible",
          "Distance camion→porte : court/moyen/long",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo objets “hors gabarit” (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  tarbes: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une info “sortie facile ou pas” (marches, couloir, portillon). Ce petit détail influence le temps réel — donc la fiabilité du devis.",
      ],
      "assurance": [
        "Si vous avez des objets fragiles ou précieux, mentionnez-le. Le but est d’aligner protection/assurance avec la réalité, pas d’alourdir le dossier.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Tarbes (et checklist locale)",
        paragraphs: [
          "À Tarbes, les devis deviennent comparables dès que vous clarifiez l’accès : stationnement, distance de portage, et étages.",
          "En maison, le détail qui surprend est souvent le chemin extérieur (portail, marches, allée). En immeuble, le détail qui surprend est l’escalier/palier. Montrez-le en photo, et le devis devient réaliste.",
          "Ensuite, mentionnez vos objets fragiles/lourds pour aligner la protection et l’assurance.",
        ],
        checklist: [
          "Photo de la rue + stationnement possible",
          "Distance camion→porte (même en pas)",
          "Photo du chemin extérieur (si maison) ou escalier/ascenseur (si immeuble)",
          "Photo passage le plus étroit (porte/couloir)",
          "Liste des objets fragiles/lourds + photo groupée",
        ],
      },
    ],
  },
  ales: {
    appendBySectionId: {
      "volume-tri": [
        "Le tri le plus rentable : ce qui prend du volume mais a peu de valeur d’usage (doublons, vieux meubles). Réduire quelques m³ peut changer la durée du chargement et stabiliser le devis.",
      ],
      "jour-j": [
        "Jour J : gardez un sac perso “à ne pas charger” (papiers, clés, ordinateur). C’est le petit détail qui évite la panique.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Alès (et checklist locale)",
        paragraphs: [
          "À Alès, un devis fiable se construit sur une base simple : accès + volume + date. Le volume se fiabilise avec les photos des pièces, l’accès avec 2–3 photos clés (rue, entrée, escalier/ascenseur).",
          "Si vous faites un tri, annoncez-le (et faites-le avant de demander des devis). C’est le levier le plus propre pour réduire la facture sans réduire la qualité.",
          "La checklist ci-dessous vous aide à donner les mêmes infos à tout le monde.",
        ],
        checklist: [
          "Photos des pièces (3–4 photos par pièce)",
          "Photo rue : stationnement possible + distance",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur (si applicable)",
          "Sac “à ne pas charger” + boîte essentiels 24h",
        ],
      },
    ],
  },
  colomiers: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Colomiers, le repère le plus simple pour comparer des devis : distance camion→porte + photo du passage le plus étroit. Avec ça, les écarts deviennent compréhensibles (et évitables).",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Colomiers (et checklist locale)",
        paragraphs: [
          "À Colomiers, la plupart des écarts de devis viennent d’informations d’accès différentes (ou manquantes). Le bon réflexe est donc de standardiser : mêmes photos, mêmes infos, pour tous.",
          "Même sans mesures, distance camion→porte + photo du passage le plus étroit suffisent souvent à rendre le devis réaliste.",
          "Ensuite, annoncez vos meubles “limites” : mieux vaut 5 minutes de clarté que 50 minutes de blocage.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo du passage le plus étroit (porte/couloir)",
          "Photo escalier (bas + palier) / ascenseur (cabine) si immeuble",
          "Photo de la rue (où s’arrêter)",
          "Photo des 2–3 meubles volumineux",
        ],
      },
    ],
  },
  tournefeuille: {
    appendBySectionId: {
      "jour-j": [
        "Jour J : une personne “référent accès” (clés, portes) et une personne “référent cartons”. Ça évite les quiproquos quand tout va vite.",
      ],
      dossier: [
        "Ajoutez aussi une mini-ligne “meubles limites” (canapé, frigo, armoire). C’est souvent ce détail qui transforme un devis en devis fiable.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Tournefeuille (et checklist locale)",
        paragraphs: [
          "À Tournefeuille, la clé est d’éviter les devis “à hypothèses”. On clarifie l’accès (stationnement + portage + étage/ascenseur) et on obtient des devis comparables.",
          "Le jour J, la fluidité dépend de l’organisation : une personne gère l’accès (clés, portes), une personne gère les cartons. C’est simple, mais très efficace.",
          "La checklist ci-dessous donne un standard facile à reproduire.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (même en pas)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier/ascenseur (si applicable)",
          "Liste + photo des meubles volumineux (et démontage souhaité oui/non)",
        ],
      },
    ],
  },
  blagnac: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Blagnac, documentez le trajet complet camion → entrée → ascenseur/escalier → palier. Un accès “simple” sur le papier peut être plus long en pratique si le chemin est indirect.",
      ],
      date: [
        "Pour optimiser le prix, privilégiez semaine + flexibilité. Les créneaux très demandés se réservent vite et se paient plus cher.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Blagnac (et checklist locale)",
        paragraphs: [
          "À Blagnac, une partie de la fiabilité se joue sur le “chemin réel” : parfois l’entrée n’est pas au même endroit que le stationnement, ou l’ascenseur est plus loin que prévu. Montrez le trajet, et le devis devient solide.",
          "Le bon réflexe est de documenter le parcours en 3 photos : rue (où s’arrêter), entrée (passage), escalier/ascenseur (montée).",
          "Ajoutez ensuite les meubles volumineux “limites” et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→entrée (même approximative)",
          "Photo entrée + passage le plus étroit",
          "Photo ascenseur (cabine) ou escalier (bas + palier)",
          "Photo des meubles volumineux + mention démontage souhaité",
        ],
      },
    ],
  },
  muret: {
    appendBySectionId: {
      "volume-tri": [
        "Si vous avez garage/cellier, incluez-les dans les photos : ces zones “hors pièces” sont souvent oubliées et font gonfler le volume réel.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Muret (et checklist locale)",
        paragraphs: [
          "À Muret, le volume réel dépend souvent des zones “hors pièces” : garage, cellier, abri, grenier. Si vous les incluez dans les photos, le devis devient beaucoup plus fiable.",
          "Côté accès, clarifiez simplement : stationnement possible, distance camion→porte, et présence de marches/escaliers. Ce sont les vrais facteurs de temps.",
          "La checklist ci-dessous suffit pour standardiser la demande.",
        ],
        checklist: [
          "Photos garage/cellier/annexes (si existants)",
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo des meubles volumineux (canapé, armoire, frigo)",
        ],
      },
    ],
  },
  castres: {
    appendBySectionId: {
      "emballage": [
        "Astuce “zéro casse” sans y passer 3 nuits : même taille de cartons quand possible, lourd en bas, fragile protégé, et étiquetage clair par pièce.",
      ],
      "assurance": [
        "Comparez aussi la prestation, pas seulement le prix : emballage, démontage/remontage, assurance, accès pris en compte. Sinon, vous comparez des choses différentes.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Castres (et checklist locale)",
        paragraphs: [
          "À Castres, un devis fiable est un devis qui compare la même prestation : mêmes options (emballage/démontage), mêmes accès, même fenêtre de dates.",
          "Si vous avez des objets fragiles ou encombrants, annoncez-les tôt : ça change la méthode (protection, manutention) et stabilise le chiffrage.",
          "La checklist ci-dessous aide à éliminer l’incertitude.",
        ],
        checklist: [
          "Niveau de prestation souhaité (éco/standard/clé en main)",
          "Photo accès : rue + entrée + escalier/ascenseur",
          "Distance camion→porte (même en pas)",
          "Liste des objets fragiles/encombrants",
          "2–3 dates possibles (si flexible)",
        ],
      },
    ],
  },
  rodez: {
    appendBySectionId: {
      dossier: [
        "Si vous hésitez sur un escalier/palier, une photo vaut mieux qu’une estimation. Les déménageurs n’ont pas besoin de perfection : ils ont besoin de visibilité.",
      ],
      "jour-j": [
        "Jour J : préparez une boîte “essentiels 24h” (draps, chargeurs, documents). Gardez-la hors du camion : ça vous sauve la première soirée.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Rodez (et checklist locale)",
        paragraphs: [
          "À Rodez, la fiabilité vient de la visibilité. Une photo de l’escalier + un palier répond à 90% des questions sur les gros meubles.",
          "Ensuite, clarifiez le stationnement et la distance de portage. Le portage est du temps : c’est ce qui fait varier les devis.",
          "La checklist ci-dessous vous donne un dossier standard facile à partager.",
        ],
        checklist: [
          "Photo escalier (bas + palier) ou ascenseur (cabine)",
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Boîte “essentiels 24h” + sac perso “à ne pas charger”",
        ],
      },
    ],
  },
  millau: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le portage extérieur (allée, marches, portail) surprend souvent en maison. Une photo du chemin “porte → rue” rend le devis plus juste.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Millau (et checklist locale)",
        paragraphs: [
          "À Millau, si vous êtes en maison, le sujet qui surprend est souvent l’extérieur : marches, allée, portillon, distance jusqu’à la rue. Une photo du chemin “porte → rue” rend le devis plus juste.",
          "En immeuble, le sujet est le passage intérieur (porte/couloir/escalier). Une photo du point le plus étroit suffit souvent à fiabiliser.",
          "Objectif : éliminer l’incertitude sur l’accès, pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo du chemin extérieur (si maison) : porte → rue",
          "Photo du passage le plus étroit (porte/couloir/escalier)",
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (même approximative)",
          "Photo des meubles volumineux",
        ],
      },
    ],
  },
  cahors: {
    appendBySectionId: {
      "assurance": [
        "Dernier rappel utile : si vous avez des objets à forte valeur (financière ou sentimentale), mentionnez-le. Le bon devis est celui qui prévoit protection/assurance alignée.",
      ],
      date: [
        "Si vous avez une date contrainte, proposez quand même une option de secours. C’est souvent ce qui permet d’obtenir un devis cohérent (et une bonne équipe).",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cahors (et checklist locale)",
        paragraphs: [
          "À Cahors, un devis fiable est un devis qui sait ce qu’il transporte (volume) et comment il le transporte (accès). Les deux se fiabilisent avec quelques photos bien choisies.",
          "Si vous avez des objets à forte valeur, mentionnez-le : ça aligne la protection/assurance avec vos attentes, et ça évite les incompréhensions.",
          "La checklist ci-dessous donne un standard “sans surprise”.",
        ],
        checklist: [
          "Photos des pièces (volume) + objets fragiles/valeur",
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (même en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur (si applicable)",
        ],
      },
    ],
  },
  auch: {
    appendBySectionId: {
      "volume-tri": [
        "Un tri rapide en 3 piles (don/vente, recycler, à déménager) reste le meilleur levier prix. Moins de volume = moins de camion, moins de temps, moins de coût.",
      ],
      dossier: [
        "Ajoutez une ligne “distance camion→porte” même approximative. C’est le repère le plus simple pour rendre les devis comparables.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Auch (et checklist locale)",
        paragraphs: [
          "À Auch, le meilleur boost “prix” est souvent le tri, et le meilleur boost “fiabilité” est l’accès. Réduire le volume avant devis + clarifier la distance camion→porte stabilise rapidement les devis.",
          "Si vous avez des annexes (garage/cave), incluez-les dans les photos : c’est une source fréquente de sous-estimation.",
          "La checklist ci-dessous est un standard simple à appliquer.",
        ],
        checklist: [
          "Tri en 3 piles (don/vente, recycler, à déménager) avant demande",
          "Photos des annexes (garage/cave/cellier) si existantes",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo des meubles volumineux + photo escalier/ascenseur si besoin",
        ],
      },
    ],
  },
  lunel: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le duo gagnant pour fiabiliser un devis : photo de la rue (où s’arrêter) + photo de l’accès intérieur (entrée/escalier/ascenseur). Le reste devient plus simple à chiffrer.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Lunel (et checklist locale)",
        paragraphs: [
          "À Lunel, la différence entre un devis “propre” et un devis “à corriger” vient souvent de l’accès. La bonne nouvelle : 2–3 photos bien prises suffisent à clarifier.",
          "Montrez où le camion peut s’arrêter, puis montrez le passage intérieur (entrée + escalier/ascenseur). Ajoutez ensuite les meubles volumineux.",
          "Objectif : donner la même base d’info à tout le monde pour comparer sans surprise.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (même approximative)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },

  // Pack 20 #5 (Longform — sections complètes) — Centre-Val de Loire + Bourgogne-Franche-Comté (20)
  // Centre-Val de Loire (10)
  orleans: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Orléans (et checklist locale)",
        paragraphs: [
          "À Orléans, un devis fiable se gagne sur un point simple : rendre l’accès “visible”. Stationnement possible, distance de portage, et passage intérieur (porte/couloir/escalier) = le trio qui détermine le temps de manutention.",
          "Si vous êtes en immeuble, la photo la plus utile est souvent l’escalier depuis le bas + un palier (ou l’ascenseur cabine porte ouverte). Si vous êtes en maison, c’est le chemin extérieur (portail, allée, marches).",
          "Objectif : donner la même base d’info à tout le monde pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo rue : où le camion peut s’arrêter",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo des 2–3 meubles “limites” (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  tours: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Tours (et checklist locale)",
        paragraphs: [
          "À Tours, le meilleur anti-surprise est de documenter l’accès comme un mini-parcours : camion → entrée → escalier/ascenseur → palier. C’est ce qui stabilise le temps, donc le devis.",
          "Si vous hésitez sur le passage d’un meuble, annoncez-le : un doute annoncé = une méthode prévue (démontage/protection) = un devis plus fiable.",
          "Gardez la checklist identique pour tous les déménageurs : c’est la base de la comparaison.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (même approximative)",
          "Photo du passage le plus étroit (porte/couloir)",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Liste + photo groupée des objets lourds/fragiles",
        ],
      },
    ],
  },
  blois: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Blois (et checklist locale)",
        paragraphs: [
          "À Blois, les écarts de devis viennent souvent de petites infos manquantes : portage long, escalier tournant, porte étroite, annexes (cave/garage) oubliées.",
          "Le réflexe simple : montrez l’accès (rue/entrée/escalier) et les zones hors pièces si elles existent. Le volume devient alors beaucoup plus fiable.",
          "Avec une base claire, vous comparez une prestation et pas un chiffre au hasard.",
        ],
        checklist: [
          "Photos des annexes (cave/garage/cellier) si existantes",
          "Photo rue + endroit où s’arrêter",
          "Distance camion→porte",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + passage le plus étroit",
        ],
      },
    ],
  },
  bourges: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Bourges (et checklist locale)",
        paragraphs: [
          "À Bourges, le devis fiable se joue sur la logistique réelle : stationnement, portage, et passages. Le volume seul ne suffit pas.",
          "Si vous êtes en immeuble, la photo escalier (bas + palier) est le meilleur “résumé” des contraintes. Si vous êtes en maison, photographiez le chemin porte → rue (portail/marches).",
          "Annoncez aussi les meubles “limites” : c’est souvent ce détail qui évite un blocage le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo chemin extérieur (si maison)",
          "Photo + liste des meubles volumineux/fragiles",
        ],
      },
    ],
  },
  chartres: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Chartres (et checklist locale)",
        paragraphs: [
          "À Chartres, l’objectif est simple : réduire l’incertitude. Plus l’accès est clair (portage, étages, passages), plus les devis deviennent comparables et fiables.",
          "Même sans mesure, une estimation “court/moyen/long” + 3 photos (rue, entrée, escalier/ascenseur) suffisent souvent à cadrer correctement.",
          "Ajoutez ensuite les objets lourds/fragiles pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Distance camion→porte (en pas si besoin)",
          "Photo rue : arrêt possible",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier/ascenseur",
          "Photo objets lourds/fragiles (groupée)",
        ],
      },
    ],
  },
  chateauroux: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Châteauroux (et checklist locale)",
        paragraphs: [
          "À Châteauroux, les devis deviennent fiables quand vous standardisez deux choses : l’accès et le volume. Le volume via photos des pièces; l’accès via photos rue/entrée/escalier.",
          "Si vous avez des annexes (cave/garage), montrez-les : c’est une source fréquente de sous-estimation de volume.",
          "Le but n’est pas de tout prévoir, mais de rendre la logistique comparable entre déménageurs.",
        ],
        checklist: [
          "Photos des pièces + annexes (si existantes)",
          "Photo rue : stationnement possible",
          "Distance camion→porte",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
        ],
      },
    ],
  },
  vierzon: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Vierzon (et checklist locale)",
        paragraphs: [
          "À Vierzon, un devis fiable se construit sur le temps réel : portage, escaliers/ascenseur, et passages. C’est ce qui fait varier la manutention.",
          "Si vous avez un meuble “limite”, annoncez-le et montrez le passage le plus étroit. Les pros préfèrent anticiper que improviser au chargement.",
          "La checklist ci-dessous permet de donner la même base d’info à tous.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "joue-les-tours": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Joué‑lès‑Tours (et checklist locale)",
        paragraphs: [
          "À Joué‑lès‑Tours, les devis deviennent comparables quand l’accès est clair : distance camion→porte + étage/ascenseur + passage le plus étroit.",
          "Si l’ascenseur est présent, une photo de cabine porte ouverte suffit souvent à éviter un devis trop optimiste pour les gros meubles.",
          "Ajoutez une photo de la rue (où s’arrêter) et vous avez une base solide.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas si besoin)",
          "Photo entrée + passage le plus étroit",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo des 2–3 meubles volumineux",
        ],
      },
    ],
  },
  "saint-cyr-sur-loire": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Cyr‑sur‑Loire (et checklist locale)",
        paragraphs: [
          "À Saint‑Cyr‑sur‑Loire, la fiabilité se joue souvent sur la clarté : accès extérieur (maison) ou accès intérieur (immeuble). Dans les deux cas, une photo du chemin réel suffit à cadrer.",
          "Si vous êtes en maison, montrez portail/allée/marches. Si vous êtes en immeuble, montrez escalier/palier/ascenseur. C’est du temps de manutention.",
          "Ensuite, annoncez les objets fragiles/lourds pour aligner la méthode.",
        ],
        checklist: [
          "Photo du chemin extérieur (si maison) : porte → rue",
          "Photo escalier/ascenseur (si immeuble)",
          "Photo rue : stationnement possible",
          "Distance camion→porte",
          "Photo objets fragiles/lourds (groupée)",
        ],
      },
    ],
  },
  "saint-jean-de-braye": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Jean‑de‑Braye (et checklist locale)",
        paragraphs: [
          "À Saint‑Jean‑de‑Braye, la clé est d’éviter les devis “à hypothèses”. On documente l’accès (rue, entrée, escalier/ascenseur) et on obtient des devis comparables.",
          "Même sans mesurer, la distance camion→porte (en pas) est un repère puissant. Ajoutez le passage le plus étroit et vous avez l’essentiel.",
          "Pour les meubles volumineux, une photo suffit souvent à prévenir un blocage.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux (canapé/armoire/frigo)",
        ],
      },
    ],
  },

  // Bourgogne–Franche-Comté (10)
  dijon: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Dijon (et checklist locale)",
        paragraphs: [
          "À Dijon, le devis devient fiable quand on connaît les passages : portes, couloirs, escaliers/paliers. Ce sont eux qui décident si un meuble passe “en une fois” ou nécessite démontage.",
          "Le bon réflexe : une photo du passage le plus étroit + une photo escalier/ascenseur. Ensuite, tout le monde chiffre la même méthode.",
          "Ajoutez la distance camion→porte et vous supprimez une grande partie de l’incertitude.",
        ],
        checklist: [
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo objets fragiles/volumineux (groupée)",
        ],
      },
    ],
  },
  besancon: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Besançon (et checklist locale)",
        paragraphs: [
          "À Besançon, le devis “qui tient” est celui qui connaît votre accès réel : stationnement, portage, et passage intérieur. Sans ça, les devis ne décrivent pas la même prestation.",
          "Une photo de l’escalier depuis le bas + un palier est souvent le meilleur résumé des contraintes. Ajoutez l’entrée et la rue, et le chiffrage devient fiable.",
          "Pensez aussi aux annexes (cave/garage) si elles existent : elles changent le volume réel.",
        ],
        checklist: [
          "Photos annexes (cave/garage) si existantes",
          "Photo rue : arrêt possible",
          "Distance camion→porte",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
        ],
      },
    ],
  },
  belfort: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Belfort (et checklist locale)",
        paragraphs: [
          "À Belfort, la fiabilité d’un devis tient à une chose : le temps réel de manutention. Et le temps dépend de l’accès : portage, étages, ascenseur, passages.",
          "Même sans mesures, distance camion→porte + photo du passage le plus étroit suffisent à rendre le devis réaliste.",
          "Annoncez aussi les objets lourds/fragiles : ça change la méthode (protection, manutention).",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : stationnement possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  "chalon-sur-saone": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Chalon‑sur‑Saône (et checklist locale)",
        paragraphs: [
          "À Chalon‑sur‑Saône, le bon devis est celui qui chiffre la même logistique que ses concurrents. Pour ça, on standardise : accès + volume + date.",
          "Si un meuble est “limite”, montrez-le près d’un passage. C’est souvent ce détail qui évite un blocage et des ajustements.",
          "Gardez la checklist identique pour tout le monde et comparez sereinement.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  macon: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Mâcon (et checklist locale)",
        paragraphs: [
          "À Mâcon, la fiabilité vient d’un dossier clair : où le camion se met, combien on marche, et comment on monte. Ce sont les vrais facteurs de temps.",
          "Une photo de l’accès intérieur (escalier/ascenseur) + une photo du passage le plus étroit suffisent souvent à éviter un devis trop optimiste.",
          "Ajoutez vos meubles volumineux et tout le monde chiffre la même méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo des 2–3 meubles volumineux",
        ],
      },
    ],
  },
  auxerre: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Auxerre (et checklist locale)",
        paragraphs: [
          "À Auxerre, l’accès est souvent le point qui fait varier un devis. Une photo de la rue + une photo de l’entrée + une photo escalier/ascenseur rend la logistique comparable.",
          "Si vous avez des marches, un couloir long, ou un passage étroit, montrez-le : c’est ce qui évite les surprises le jour J.",
          "Ensuite, comparez les devis sur la même prestation (emballage/démontage/assurance).",
        ],
        checklist: [
          "Photo du stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo objets fragiles/volumineux",
        ],
      },
    ],
  },
  nevers: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Nevers (et checklist locale)",
        paragraphs: [
          "À Nevers, un devis fiable dépend du temps réel, pas du feeling. Le temps se lit dans l’accès : distance de portage, étages, passages.",
          "Le réflexe simple : distance camion→porte + photo de l’escalier/palier (ou ascenseur). Ajoutez ensuite les meubles volumineux.",
          "Avec ça, les devis deviennent comparables et les surprises diminuent fortement.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : stationnement possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  sens: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sens (et checklist locale)",
        paragraphs: [
          "À Sens, pour un devis fiable, l’essentiel est d’éviter les angles morts : portage long, escaliers étroits, annexes oubliées.",
          "Même une estimation simple + quelques photos (rue/entrée/escalier) suffisent à rendre le chiffrage réaliste.",
          "Ensuite, comparez aussi l’assurance et les prestations incluses pour éviter les mauvaises surprises.",
        ],
        checklist: [
          "Photos des annexes (cave/garage) si existantes",
          "Photo rue : arrêt possible",
          "Distance camion→porte",
          "Photo escalier/ascenseur + palier",
          "Photo du passage le plus étroit + meubles volumineux",
        ],
      },
    ],
  },
  montbeliard: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Montbéliard (et checklist locale)",
        paragraphs: [
          "À Montbéliard, la fiabilité d’un devis dépend surtout de l’accès : stationnement, portage, et passages. C’est le facteur de temps principal.",
          "Si l’ascenseur est présent, une photo de cabine porte ouverte évite beaucoup de devis trop optimistes sur les gros meubles.",
          "Ajoutez ensuite la liste des objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  dole: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Dole (et checklist locale)",
        paragraphs: [
          "À Dole, le bon devis est un devis qui connaît votre logistique réelle : où le camion se place, combien de portage, et comment on passe à l’intérieur.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur rendent la méthode claire, surtout pour les meubles volumineux.",
          "Gardez la checklist identique pour tous les déménageurs : c’est la base d’une comparaison propre.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux (canapé, armoire, frigo)",
        ],
      },
    ],
  },

  // Pack A (sections complètes) — Normandie (10)
  rouen: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Rouen (et checklist locale)",
        paragraphs: [
          "À Rouen, le devis le plus fiable est celui qui connaît le “dernier tronçon” : où le camion peut s’arrêter, combien de portage il faut faire, et comment on passe à l’intérieur (escaliers/ascenseur).",
          "Le bon réflexe : photographier l’escalier depuis le bas + un palier (ou l’ascenseur cabine), et indiquer la distance camion→porte (même en pas).",
          "Objectif : rendre l’accès comparable entre devis, pour éviter les ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance visible",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "Photo entrée + passage le plus étroit (porte/couloir)",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo des 2–3 meubles “limites” (canapé, armoire, frigo)",
        ],
      },
    ],
  },
  caen: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Caen (et checklist locale)",
        paragraphs: [
          "À Caen, la fiabilité d’un devis dépend surtout du temps réel de manutention : portage, étages, passages. Le volume compte, mais l’accès décide souvent du tempo.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à fiabiliser le chiffrage sur les gros meubles.",
          "Gardez la checklist identique pour tous les déménageurs : c’est la base d’une comparaison propre.",
        ],
        checklist: [
          "Photo rue : endroit où s’arrêter",
          "Distance camion→porte (même approximative)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo objets lourds/fragiles (groupée)",
        ],
      },
    ],
  },
  "le-havre": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès au Havre (et checklist locale)",
        paragraphs: [
          "Au Havre, les devis deviennent comparables dès que vous clarifiez l’accès : stationnement, distance de portage, et ascenseur (oui/non + taille).",
          "Le meilleur “résumé” est une photo de l’entrée + une photo de l’ascenseur (cabine porte ouverte) ou de l’escalier + un palier.",
          "Ajoutez vos meubles volumineux et le devis devient beaucoup plus fiable.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas si besoin)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "cherbourg-en-cotentin": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cherbourg‑en‑Cotentin (et checklist locale)",
        paragraphs: [
          "À Cherbourg‑en‑Cotentin, un devis fiable se construit sur l’accès réel : où le camion peut se mettre, combien on marche, et comment on monte (escaliers/ascenseur).",
          "Même sans mesures, la distance camion→porte (en pas) + une photo de l’escalier/ascenseur rendent la manutention prévisible.",
          "C’est cette visibilité qui évite les surprises le jour J.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo objets “hors gabarit” (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  evreux: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Évreux (et checklist locale)",
        paragraphs: [
          "À Évreux, la plupart des écarts de devis viennent de l’accès : portage long, étage sans ascenseur, passage étroit. Une photo rend ces contraintes évidentes.",
          "Le bon réflexe : rue + entrée + escalier/ascenseur, puis la liste des meubles volumineux. C’est simple et très efficace.",
          "Objectif : que tout le monde chiffre la même logistique.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  dieppe: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Dieppe (et checklist locale)",
        paragraphs: [
          "À Dieppe, le devis le plus fiable est celui qui comprend votre parcours réel : stationnement, portage, et passages à l’intérieur.",
          "Si vous avez un couloir long ou un passage étroit, montrez-le. C’est du temps de manutention — donc du coût.",
          "Avec la checklist ci-dessous, vous comparez des devis sur une base claire.",
        ],
        checklist: [
          "Photo rue : où s’arrêter",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo des meubles “limites” + mention démontage souhaité (oui/non)",
        ],
      },
    ],
  },
  elbeuf: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Elbeuf (et checklist locale)",
        paragraphs: [
          "À Elbeuf, l’accès est souvent le facteur qui fait varier un devis : où le camion se place, combien de portage, et comment on monte.",
          "Une estimation simple de la distance + une photo de l’escalier/palier suffisent à rendre le chiffrage réaliste.",
          "Ajoutez une photo des meubles volumineux, et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  lisieux: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Lisieux (et checklist locale)",
        paragraphs: [
          "À Lisieux, un devis fiable se gagne sur la clarté : accès + volume + date. L’accès se fiabilise avec 3 photos (rue, entrée, escalier/ascenseur).",
          "Si vous êtes en maison, montrez le chemin porte → rue (portail/marches). C’est souvent l’info oubliée qui change le temps.",
          "Gardez la checklist identique pour tous, et comparez sereinement.",
        ],
        checklist: [
          "Photo du chemin extérieur (si maison)",
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
        ],
      },
    ],
  },
  alencon: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Alençon (et checklist locale)",
        paragraphs: [
          "À Alençon, le facteur #1 d’un devis fiable est la logistique réelle : portage, étages, passages. Sans ces infos, les devis ne décrivent pas la même prestation.",
          "Même sans mesures, distance camion→porte + photo du passage le plus étroit suffisent à cadrer correctement.",
          "Ajoutez vos objets fragiles/lourds pour aligner méthode et assurance.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : stationnement possible",
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/ascenseur",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  granville: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Granville (et checklist locale)",
        paragraphs: [
          "À Granville, la fiabilité d’un devis dépend surtout de l’accès (stationnement + portage) et du passage intérieur (escalier/ascenseur).",
          "Si vous avez une contrainte de date, proposer 2–3 options aide souvent à obtenir une meilleure disponibilité — et un devis plus stable.",
          "Avec la checklist ci-dessous, vous donnez la même base d’info à tout le monde.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "2–3 dates possibles + photo meubles volumineux",
        ],
      },
    ],
  },

  // Pack A (sections complètes) — Hauts-de-France (10)
  amiens: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Amiens (et checklist locale)",
        paragraphs: [
          "À Amiens, un devis fiable dépend surtout du temps réel : portage, étages, passages. C’est souvent plus déterminant que “10 cartons de plus”.",
          "Le meilleur standard : distance camion→porte + photo escalier/palier (ou ascenseur) + photo du passage le plus étroit. Avec ça, les devis deviennent comparables.",
          "Annoncez aussi les meubles volumineux : c’est ce qui évite les blocages le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  dunkerque: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Dunkerque (et checklist locale)",
        paragraphs: [
          "À Dunkerque, la comparaison de devis devient simple quand l’accès est clair : où s’arrêter, distance de portage, et passages à l’intérieur.",
          "Même sans mesurer, une estimation en pas + 2–3 photos suffit à rendre le chiffrage réaliste.",
          "Gardez le même dossier pour tous les déménageurs pour éviter les écarts artificiels.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo des 2–3 meubles volumineux",
        ],
      },
    ],
  },
  calais: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Calais (et checklist locale)",
        paragraphs: [
          "À Calais, un devis fiable est un devis qui connaît votre logistique réelle : stationnement, portage, et passage intérieur.",
          "Si vous avez un portage long ou un escalier tournant, montrez-le : c’est du temps de manutention.",
          "La checklist ci-dessous suffit à standardiser votre demande et comparer des devis comparables.",
        ],
        checklist: [
          "Photo rue : endroit où s’arrêter",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier/ascenseur + palier",
          "Photo objets lourds/fragiles (groupée)",
        ],
      },
    ],
  },
  "boulogne-sur-mer": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Boulogne‑sur‑Mer (et checklist locale)",
        paragraphs: [
          "À Boulogne‑sur‑Mer, le devis devient fiable quand l’accès est visible : rue, entrée, escalier/ascenseur. C’est simple et très efficace.",
          "Le portage est souvent le paramètre sous-estimé : notez-le (en pas) et vous évitez les écarts de chiffrage.",
          "Ajoutez les meubles volumineux, et tout le monde chiffre la même méthode.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  arras: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Arras (et checklist locale)",
        paragraphs: [
          "À Arras, un devis fiable se construit sur l’accès : stationnement, portage, et passages. Sans ça, les devis ne décrivent pas la même prestation.",
          "Même sans mesures, une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à cadrer correctement.",
          "Gardez la checklist identique pour tous pour comparer sereinement.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  lens: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Lens (et checklist locale)",
        paragraphs: [
          "À Lens, la fiabilité dépend surtout du temps réel de manutention : portage, étages, passages. C’est le vrai facteur de coût.",
          "Notez la distance camion→porte (même en pas) et photographiez l’escalier/palier. Ça suffit souvent à éviter les devis trop optimistes.",
          "Ajoutez une photo des meubles volumineux et vous sécurisez le devis.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : stationnement possible",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  lievin: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Liévin (et checklist locale)",
        paragraphs: [
          "À Liévin, un devis fiable vient d’un dossier standard : accès, volume, date. L’accès se fiabilise avec 3 photos (rue, entrée, escalier/ascenseur).",
          "Si vous avez un meuble “limite”, annoncez-le : c’est souvent ce détail qui évite un blocage le jour J.",
          "La checklist ci-dessous est un standard simple à réutiliser.",
        ],
        checklist: [
          "Photo rue : arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo objets fragiles/lourds (groupée)",
        ],
      },
    ],
  },
  bethune: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Béthune (et checklist locale)",
        paragraphs: [
          "À Béthune, les devis deviennent comparables quand l’accès est clair : où le camion s’arrête, combien de portage, et comment on monte.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à rendre le devis réaliste.",
          "Ajoutez les meubles volumineux et vous évitez les devis “au feeling”.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  valenciennes: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Valenciennes (et checklist locale)",
        paragraphs: [
          "À Valenciennes, le devis fiable est celui qui connaît le temps réel de manutention : portage, étages, passages. C’est ce qui fait varier la facture.",
          "Le bon standard : distance camion→porte + photo escalier/palier + photo du passage le plus étroit. Ensuite, on compare enfin des devis comparables.",
          "Annoncez les objets fragiles/lourds pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  douai: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Douai (et checklist locale)",
        paragraphs: [
          "À Douai, la fiabilité d’un devis dépend de l’accès : stationnement, portage, et passages. Sans ces infos, vous comparez des devis qui n’incluent pas la même quantité de travail.",
          "Une photo de l’escalier + un palier et une photo du passage le plus étroit suffisent souvent à fiabiliser le chiffrage.",
          "Gardez la checklist identique pour tous pour comparer sereinement.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },

  // Pack B (sections complètes) — Île-de-France satellites (20)
  "boulogne-billancourt": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Boulogne‑Billancourt (et checklist locale)",
        paragraphs: [
          "À Boulogne‑Billancourt, la densité rend l’accès déterminant : stationnement, distance de portage, et ascenseur (taille) font souvent plus varier un devis que le volume.",
          "Le meilleur réflexe : photo cabine d’ascenseur porte ouverte + photo du palier + distance camion→porte. Ça fiabilise immédiatement le chiffrage des gros meubles.",
          "Objectif : éliminer l’incertitude pour comparer des devis comparables.",
        ],
        checklist: [
          "Photo rue : endroit où s’arrêter + contraintes visibles",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Boulogne‑Billancourt : checklist avancée (ascenseur & passages)",
        paragraphs: [
          "Le point clé ici, c’est la taille de l’ascenseur et les passages. C’est là que les devis divergent si l’info manque.",
          "Cette section vous aide à standardiser l’info et à fiabiliser les gros meubles.",
          "Résultat : des devis comparables et une exécution plus fluide.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte + photo palier",
          "Photo du passage le plus étroit (porte/couloir/escalier)",
          "Distance camion→porte (en pas) + étage",
          "Photo des meubles “limites” + mention démontage (oui/non)",
          "Jour J : référent accès (clés/portes/ascenseur) désigné",
        ],
      },
      {
        id: "erreurs-a-eviter",
        title: "Boulogne‑Billancourt : erreurs fréquentes à éviter (mini‑check)",
        paragraphs: [
          "Cette section sert à éviter les 5 erreurs qui font dérailler un déménagement : accès sous-estimé, passage critique non documenté, meubles “limites” non annoncés, cartons trop lourds, et absence de plan de circulation jour J.",
          "Ce ne sont pas des détails : ce sont des minutes perdues qui finissent en heures.",
          "Cochez simplement les points ci-dessous et vous fiabilisez l’exécution.",
        ],
        checklist: [
          "Ascenseur : cabine + porte ouverte en photo (ou escalier bas + palier)",
          "Passage critique : photo du point le plus étroit (porte/couloir/palier)",
          "Meubles limites : 2–3 photos + “démontage oui/non”",
          "Cartons : limiter le poids (livres/vaisselle) + étiquetage par pièce",
          "Jour J : couloir dégagé + zone tampon + 1 référent accès",
        ],
      },
    ],
  },
  "saint-denis": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Denis (et checklist locale)",
        paragraphs: [
          "À Saint‑Denis, le devis fiable se joue sur le temps réel : portage, étages, passages. C’est souvent le facteur principal.",
          "Une estimation simple de la distance camion→porte + une photo de l’escalier/palier rendent le chiffrage beaucoup plus réaliste.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Saint‑Denis : checklist avancée (portage & passages)",
        paragraphs: [
          "Le but : éviter les devis sous‑dimensionnés (puis les ajustements). On fiabilise accès, portage, passages, et objets lourds.",
          "Cette checklist est faite pour être copiable/collable et envoyée telle quelle à plusieurs déménageurs.",
          "Même base = meilleure comparaison.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Photo du passage le plus étroit + photo canapé/frigo/armoire",
          "Objets lourds listés (machine à laver, piano, coffre… si concerné)",
          "Zone tampon + étiquetage par pièce + priorité",
        ],
      },
      {
        id: "erreurs-a-eviter",
        title: "Saint‑Denis : erreurs fréquentes à éviter (mini‑check)",
        paragraphs: [
          "Le vrai risque : sous-estimer le portage et les passages. C’est ce qui crée des ajustements et des retards.",
          "Cette mini‑checklist vous aide à rendre la logistique “visible” et à fiabiliser la méthode.",
          "Cochez ces points et vous partez avec une base solide.",
        ],
        checklist: [
          "Portage : distance camion→porte notée (en pas) + obstacles identifiés",
          "Passage critique : photo du point le plus étroit + photo escalier/palier",
          "Objets lourds/fragiles listés + protection attendue",
          "Cartons lourds limités + étiquetage clair",
          "Jour J : zone tampon + 1 référent accès + couloir dégagé",
        ],
      },
    ],
  },
  argenteuil: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Argenteuil (et checklist locale)",
        paragraphs: [
          "À Argenteuil, un devis fiable dépend surtout de l’accès : où le camion se place, combien de portage, et comment on passe (porte/couloir/escalier).",
          "Le meilleur standard : distance camion→porte + photo du passage le plus étroit + photo escalier/ascenseur. Avec ça, les devis deviennent comparables.",
          "Annoncez aussi les meubles “limites” : c’est le meilleur anti‑blocage le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : stationnement possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (canapé, frigo, armoire)",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Argenteuil : checklist avancée (passage étroit & gros meubles)",
        paragraphs: [
          "Le gain ici : fiabiliser les gros meubles. Les devis divergent quand le passage est serré ou quand l’accès est sous-estimé.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffit souvent à cadrer une méthode réaliste.",
          "Avec la même base d’info, vous comparez des devis comparables.",
        ],
        checklist: [
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Distance camion→porte (en pas) + étage",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Couloir dégagé + zone tampon avant arrivée",
        ],
      },
    ],
  },
  montreuil: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Montreuil (et checklist locale)",
        paragraphs: [
          "À Montreuil, l’accès peut être plus indirect qu’il n’y paraît (cour, long couloir). Le devis fiable est celui qui connaît le chemin réel camion→porte.",
          "Une photo du trajet + une photo escalier/ascenseur suffit souvent à éviter un devis sous‑dimensionné.",
          "Gardez un dossier identique pour tous les déménageurs pour comparer proprement.",
        ],
        checklist: [
          "Photo du chemin camion→entrée (si portage/cour)",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo objets fragiles/lourds (groupée)",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Montreuil : checklist avancée (accès indirect & portage)",
        paragraphs: [
          "Montreuil est typiquement le cas où l’accès “indirect” fausse les devis si on ne le montre pas : cour, long couloir, entrée secondaire.",
          "En 2–3 photos, vous rendez le trajet évident et vous fiabilisez les devis.",
          "Le jour J, vous gagnez du temps (moins d’allers‑retours inutiles).",
        ],
        checklist: [
          "Photo du trajet complet camion→entrée (2–3 photos si besoin)",
          "Distance camion→porte (en pas) + obstacles (cour/marches)",
          "Photo escalier/ascenseur + palier",
          "Meubles volumineux “limites” listés + photo",
          "Cartons prêts en zone tampon + couloir dégagé",
        ],
      },
      {
        id: "erreurs-a-eviter",
        title: "Montreuil : erreurs fréquentes à éviter (mini‑check)",
        paragraphs: [
          "Le piège classique : l’accès indirect (cour/couloir) n’est pas décrit, donc le portage est sous-estimé.",
          "Deux photos et une distance en pas valent mieux qu’un long texte.",
          "Cochez ces points pour fiabiliser la journée.",
        ],
        checklist: [
          "Trajet camion→entrée documenté (2–3 photos) + distance en pas",
          "Ascenseur/escalier : photo bas + palier / cabine porte ouverte",
          "Passage le plus étroit en photo + meubles limites en photo",
          "Couloir dégagé + zone tampon (cartons prêts)",
          "Sac perso + essentiels 24h hors camion",
        ],
      },
    ],
  },
  nanterre: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Nanterre (et checklist locale)",
        paragraphs: [
          "À Nanterre, l’écart entre deux devis vient souvent du duo ascenseur + distance de portage. Un ascenseur “petit” change le rythme sur les gros meubles.",
          "Une photo de cabine porte ouverte + distance camion→porte rend le devis très fiable, sans effort.",
          "Ajoutez ensuite les meubles volumineux et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Nanterre : checklist avancée (ascenseur petit = gros impact)",
        paragraphs: [
          "Quand l’ascenseur est petit, les devis divergent (et les journées s’allongent). Cette checklist sert à “verrouiller” cette info.",
          "Pas besoin de mesures au millimètre : une photo de cabine porte ouverte suffit souvent.",
          "Ajoutez le passage étroit et les meubles limites : vous fiabilisez la méthode.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte (ou escalier bas + palier)",
          "Photo du passage le plus étroit (porte/couloir)",
          "Distance camion→porte (en pas) + étage",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Jour J : accès dégagé + portes/ascenseur disponibles",
        ],
      },
      {
        id: "erreurs-a-eviter",
        title: "Nanterre : erreurs fréquentes à éviter (mini‑check)",
        paragraphs: [
          "Le problème #1 : ascenseur “petit” non annoncé. Le problème #2 : passage étroit non documenté.",
          "Cochez ces points pour rendre la méthode évidente et fiabiliser le devis.",
          "Simple, mais ultra rentable.",
        ],
        checklist: [
          "Ascenseur : photo cabine porte ouverte (ou escalier bas + palier)",
          "Passage critique : photo du point le plus étroit (porte/couloir)",
          "Meubles limites : photo + “démontage oui/non”",
          "Distance camion→porte (en pas) + étage",
          "Jour J : portes/ascenseur disponibles + couloir dégagé",
        ],
      },
    ],
  },
  versailles: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Versailles (et checklist locale)",
        paragraphs: [
          "À Versailles, les devis sont fiables quand les passages sont clairs : paliers, escaliers, ascenseur (oui/non) et distance de portage.",
          "Si vous avez un meuble “limite”, montrez le passage le plus étroit : c’est souvent là que se joue la méthode (démontage/protection).",
          "Objectif : chiffrer une méthode réaliste pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/ascenseur + palier",
          "Distance camion→porte (en pas)",
          "Photo rue : stationnement possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Versailles : checklist avancée (passages & méthode)",
        paragraphs: [
          "Le gain ici : fiabiliser la méthode sur les passages (paliers/portes) et les gros meubles. C’est ce qui évite les ajustements.",
          "Une photo du passage le plus étroit + une photo escalier/palier font souvent toute la différence.",
          "Ajoutez ensuite les meubles “limites” : le devis devient réaliste.",
        ],
        checklist: [
          "Photo passage le plus étroit + photo escalier/palier",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Meubles “limites” listés + photo près d’un passage",
          "Option démontage/remontage souhaitée (oui/non)",
          "Boîte “essentiels 24h” + sac perso hors camion",
        ],
      },
      {
        id: "erreurs-a-eviter",
        title: "Versailles : erreurs fréquentes à éviter (mini‑check)",
        paragraphs: [
          "Les devis divergent quand la méthode n’est pas claire : passage étroit, paliers, gros meubles.",
          "Cette mini‑checklist sert à verrouiller la méthode et à éviter les ajustements le jour J.",
          "Cochez ces points et vous partez serein.",
        ],
        checklist: [
          "Passage critique en photo + escalier/palier en photo",
          "Meubles limites en photo + démontage oui/non",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Cartons lourds limités + étiquetage clair",
          "Jour J : zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  courbevoie: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Courbevoie (et checklist locale)",
        paragraphs: [
          "À Courbevoie, le devis fiable se joue souvent sur l’ascenseur (taille) et la distance de portage. Ce sont les “temps cachés”.",
          "Une photo de cabine porte ouverte + distance camion→porte rend les devis comparables immédiatement.",
          "Ensuite, listez les objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Courbevoie : checklist avancée (ascenseur & portage)",
        paragraphs: [
          "À Courbevoie, les devis varient surtout sur l’ascenseur (taille) et la distance de portage. Cette checklist sert à stabiliser ces deux points.",
          "Vous donnez la même base d’info à tout le monde : c’est la recette des devis comparables.",
          "Et le jour J devient plus fluide.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte + photo palier",
          "Distance camion→porte (en pas) + étage",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
      {
        id: "erreurs-a-eviter",
        title: "Courbevoie : erreurs fréquentes à éviter (mini‑check)",
        paragraphs: [
          "Le risque #1 : ascenseur non documenté. Le risque #2 : distance de portage sous-estimée. Le risque #3 : meubles limites non annoncés.",
          "Cochez ces points pour fiabiliser la méthode et éviter les ajustements.",
          "Même base d’info = devis comparables.",
        ],
        checklist: [
          "Ascenseur : cabine porte ouverte en photo + photo palier",
          "Portage : distance camion→porte notée (en pas)",
          "Passage critique : photo du point le plus étroit",
          "Meubles limites : photo + “démontage oui/non”",
          "Jour J : couloir dégagé + zone tampon + 1 référent accès",
        ],
      },
    ],
  },
  colombes: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Colombes (et checklist locale)",
        paragraphs: [
          "À Colombes, la fiabilité vient d’un dossier standard : accès (rue/entrée/escalier) + volume (photos pièces) + date (ou 2–3 options).",
          "L’accès est le facteur qui crée le plus d’écarts : portage long, passage étroit, ascenseur petit. Montrez-le en photo.",
          "Avec la checklist ci-dessous, les devis deviennent comparables et plus fiables.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Colombes : checklist avancée (devis comparables)",
        paragraphs: [
          "Objectif : standardiser l’info pour que tous les déménageurs chiffrent la même chose (accès + volume + méthode).",
          "On verrouille le portage (distance) et le passage critique, puis on liste les meubles “limites”.",
          "Résultat : des devis plus fiables, et une exécution plus fluide.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit + photo meubles volumineux",
          "2–3 dates possibles si flexible (meilleurs créneaux)",
          "Zone tampon + étiquetage clair par pièce",
        ],
      },
    ],
  },
  "asnieres-sur-seine": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Asnières‑sur‑Seine (et checklist locale)",
        paragraphs: [
          "À Asnières‑sur‑Seine, un devis fiable dépend surtout de l’accès et de l’ascenseur. Une cabine petite peut changer la méthode sur les gros meubles.",
          "Le meilleur standard : photo ascenseur (cabine) + photo du passage le plus étroit + distance camion→porte.",
          "Gardez ces infos identiques pour tous les déménageurs pour comparer proprement.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit",
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Asnières‑sur‑Seine : checklist avancée (ascenseur & passages)",
        paragraphs: [
          "Le point clé : fiabiliser la taille de l’ascenseur et le passage le plus étroit. C’est là que les devis divergent.",
          "Avec deux photos (cabine + passage) et la distance en pas, vous verrouillez la méthode.",
          "Ensuite, tout le monde chiffre la même base.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte (ou escalier bas + palier)",
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Distance camion→porte (en pas) + étage",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Jour J : référent accès + couloir dégagé",
        ],
      },
    ],
  },
  "aulnay-sous-bois": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Aulnay‑sous‑Bois (et checklist locale)",
        paragraphs: [
          "À Aulnay‑sous‑Bois, le devis fiable se gagne sur l’accès : stationnement, distance de portage, et passages (porte/couloir/escalier).",
          "Si vous avez un meuble “limite”, annoncez-le tôt. Une photo du passage le plus étroit suffit souvent à fiabiliser le devis.",
          "Objectif : chiffrer une méthode réaliste et éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (groupée)",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Aulnay‑sous‑Bois : checklist avancée (accès & devis comparables)",
        paragraphs: [
          "Objectif : rendre l’accès “lisible” (portage + passages) pour éviter les devis sous‑dimensionnés.",
          "Avec 2–3 photos clés et la distance en pas, les devis deviennent comparables.",
          "Ajoutez ensuite les meubles “limites” et vous sécurisez la méthode.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit + photo escalier/ascenseur",
          "Photo meubles volumineux + mention démontage (oui/non)",
          "Zone tampon près de la porte + couloir dégagé",
          "Sac perso + boîte “essentiels 24h” hors camion",
        ],
      },
    ],
  },
  "rueil-malmaison": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Rueil‑Malmaison (et checklist locale)",
        paragraphs: [
          "À Rueil‑Malmaison, la fiabilité dépend souvent du couple ascenseur + portage. Le devis fiable est celui qui connaît le trajet réel camion→porte→ascenseur→palier.",
          "Une photo de cabine porte ouverte + une photo du palier suffisent souvent à fiabiliser les devis sur les gros meubles.",
          "Ajoutez la distance camion→porte et vous supprimez une grande partie de l’incertitude.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Rueil‑Malmaison : checklist avancée (trajet réel camion→palier)",
        paragraphs: [
          "Le but : documenter le trajet réel camion→porte→ascenseur→palier. C’est ce qui fiabilise le temps de manutention.",
          "Une photo de cabine + une photo du palier répondent à la majorité des questions sur les gros meubles.",
          "Ensuite, tout le monde chiffre la même base.",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte + photo palier",
          "Distance camion→porte (en pas) + étage",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Objets fragiles/lourds listés (protection attendue)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  aubervilliers: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Aubervilliers (et checklist locale)",
        paragraphs: [
          "À Aubervilliers, le devis fiable dépend surtout du temps réel : portage, étages, passages. C’est ce qui rend les devis comparables.",
          "Le meilleur standard : distance camion→porte + photo escalier/palier + photo passage le plus étroit.",
          "Annoncez aussi les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : stationnement/arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Aubervilliers : checklist avancée (portage & objets lourds)",
        paragraphs: [
          "Objectif : éviter que le devis sous‑estime le temps de manutention (portage) ou la méthode sur les objets lourds/fragiles.",
          "Avec la même base d’info pour tous, vous comparez des devis comparables.",
          "Et le jour J se passe avec moins d’improvisation.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + sac perso hors camion",
        ],
      },
    ],
  },
  "champigny-sur-marne": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Champigny‑sur‑Marne (et checklist locale)",
        paragraphs: [
          "À Champigny‑sur‑Marne, un devis fiable dépend de l’accès : stationnement, distance de portage, et étages. Le volume seul ne suffit pas.",
          "Même sans mesures, une estimation en pas + une photo escalier/palier rendent les devis beaucoup plus réalistes.",
          "Gardez ces infos identiques pour tous les déménageurs pour comparer proprement.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (groupée)",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Champigny‑sur‑Marne : checklist avancée (devis alignés)",
        paragraphs: [
          "Le but : rendre l’accès et le volume comparables entre déménageurs, pour éviter les écarts artificiels.",
          "On verrouille portage + passages + ascenseur, puis on liste les meubles “limites”.",
          "Même base = meilleure comparaison.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit + photo meubles volumineux",
          "2–3 dates possibles si flexible",
          "Zone tampon + étiquetage clair par pièce",
        ],
      },
    ],
  },
  drancy: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Drancy (et checklist locale)",
        paragraphs: [
          "À Drancy, la fiabilité d’un devis vient de la visibilité sur l’accès : portage, étages, passages. C’est le facteur de temps principal.",
          "Le meilleur standard : distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Ajoutez la liste des objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : stationnement possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Drancy : checklist avancée (portage & passages)",
        paragraphs: [
          "Objectif : fiabiliser le devis en documentant ce qui prend du temps : portage, passages, objets lourds.",
          "Avec une base standard, vous comparez des devis comparables et vous évitez les ajustements.",
          "Cette checklist sert aussi de plan simple pour le jour J.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Photo passage le plus étroit + photo meubles “limites”",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  "noisy-le-grand": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Noisy‑le‑Grand (et checklist locale)",
        paragraphs: [
          "À Noisy‑le‑Grand, le devis fiable est celui qui connaît le chemin réel camion→porte : parkings, entrées multiples, ascenseur parfois éloigné.",
          "Une photo du trajet (ou 2–3 photos clés) + distance camion→porte rendent le chiffrage beaucoup plus réaliste.",
          "Ajoutez les meubles volumineux et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Photo du chemin camion→entrée (si accès indirect)",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Noisy‑le‑Grand : checklist avancée (accès indirect)",
        paragraphs: [
          "Le point clé : rendre l’accès indirect visible (parking, entrée multiple, ascenseur éloigné). Sinon, les devis divergent.",
          "En 2–3 photos, vous décrivez le trajet mieux que n’importe quel texte.",
          "Ajoutez les meubles “limites” et vous fiabilisez la méthode.",
        ],
        checklist: [
          "Photo du trajet complet camion→entrée (2–3 photos si besoin)",
          "Distance camion→porte (en pas) + étage",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  "levallois-perret": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Levallois‑Perret (et checklist locale)",
        paragraphs: [
          "À Levallois‑Perret, la densité fait de l’accès le facteur #1 : stationnement, distance de portage, ascenseur (taille).",
          "Une photo d’ascenseur cabine porte ouverte + distance camion→porte suffit souvent à rendre les devis comparables.",
          "Ensuite, annoncez les meubles “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Levallois‑Perret : checklist avancée (densité & accès)",
        paragraphs: [
          "Levallois‑Perret = densité = accès critique. Cette checklist sert à fiabiliser stationnement/portage/ascenseur pour éviter les devis qui “bougent”.",
          "Deux photos (cabine + passage étroit) + la distance en pas suffisent souvent à rendre les devis comparables.",
          "Ajoutez ensuite les meubles limites et vous sécurisez la méthode.",
        ],
        checklist: [
          "Photo ascenseur cabine porte ouverte (ou escalier bas + palier)",
          "Photo passage le plus étroit (porte/couloir)",
          "Distance camion→porte (en pas) + étage",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Jour J : référent accès + couloir dégagé",
        ],
      },
    ],
  },
  clichy: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Clichy (et checklist locale)",
        paragraphs: [
          "À Clichy, un devis fiable dépend surtout du temps réel : portage, étages, passages. C’est ce qui rend les devis comparables.",
          "Le meilleur standard : distance camion→porte + photo escalier/palier + photo passage le plus étroit.",
          "Ajoutez les meubles volumineux et vous sécurisez le chiffrage.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : stationnement/arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Clichy : checklist avancée (passage étroit & gros meubles)",
        paragraphs: [
          "Les devis divergent surtout quand le passage est serré et que le meuble est “limite”. Cette checklist sert à fiabiliser ces deux points.",
          "Une photo du passage le plus étroit suffit souvent à cadrer la méthode (démontage/protection).",
          "Avec la même base d’info, vous comparez enfin des devis comparables.",
        ],
        checklist: [
          "Photo passage le plus étroit + photo escalier/palier",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Liste objets fragiles/lourds (protection attendue)",
          "Zone tampon près de la porte + étiquetage clair",
        ],
      },
    ],
  },
  creteil: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Créteil (et checklist locale)",
        paragraphs: [
          "À Créteil, la fiabilité d’un devis dépend souvent du duo ascenseur + portage. Une cabine petite change la méthode sur les gros meubles.",
          "Une photo d’ascenseur cabine porte ouverte + distance camion→porte rend les devis comparables immédiatement.",
          "Ajoutez les objets fragiles/lourds pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo rue : arrêt possible",
          "Liste + photo objets lourds/fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Créteil : checklist avancée (ascenseur & portage)",
        paragraphs: [
          "Le but : fiabiliser les devis en verrouillant le duo ascenseur + portage, qui fait varier le temps réel de manutention.",
          "Une photo de cabine porte ouverte + la distance en pas suffisent souvent à rendre les devis comparables.",
          "Ajoutez ensuite les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo cabine d’ascenseur porte ouverte (ou escalier bas + palier)",
          "Distance camion→porte (en pas) + étage",
          "Photo passage le plus étroit + photo meubles volumineux",
          "Objets lourds/fragiles listés (protection attendue)",
          "Zone tampon + couloir dégagé avant arrivée",
        ],
      },
    ],
  },
  "vitry-sur-seine": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Vitry‑sur‑Seine (et checklist locale)",
        paragraphs: [
          "À Vitry‑sur‑Seine, le devis fiable se gagne sur l’accès : stationnement, distance de portage, et passages. C’est le facteur de temps principal.",
          "Même une estimation en pas + une photo escalier/palier suffisent souvent à cadrer correctement.",
          "Gardez le même dossier pour tout le monde et comparez sereinement.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Vitry‑sur‑Seine : checklist avancée (accès & jour J)",
        paragraphs: [
          "Objectif : rendre l’accès comparable entre devis (stationnement, portage, passages) et éviter les ajustements le jour J.",
          "Une distance en pas + deux photos clés (passage étroit + escalier/ascenseur) suffisent souvent à cadrer correctement.",
          "Ajoutez ensuite les meubles “limites” pour fiabiliser la méthode.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit + photo escalier/ascenseur",
          "Photo meubles “limites” + mention démontage (oui/non)",
          "Zone tampon près de la porte + étiquetage par pièce",
          "Sac perso + boîte “essentiels 24h” hors camion",
        ],
      },
    ],
  },
  "ivry-sur-seine": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Ivry‑sur‑Seine (et checklist locale)",
        paragraphs: [
          "À Ivry‑sur‑Seine, le devis fiable est celui qui connaît votre parcours réel : stationnement, portage, et passages intérieurs.",
          "Le standard le plus simple : distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Ajoutez les meubles volumineux et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
      {
        id: "checklist-locale-avancee",
        title: "Ivry‑sur‑Seine : checklist avancée (passages & méthode)",
        paragraphs: [
          "Le but : fiabiliser la méthode sur les passages et le portage, pour obtenir des devis comparables.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur rendent le chiffrage beaucoup plus réaliste.",
          "Ajoutez les meubles volumineux “limites” et vous évitez les surprises le jour J.",
        ],
        checklist: [
          "Photo passage le plus étroit (porte/couloir/escalier)",
          "Photo escalier/palier ou ascenseur cabine (porte ouverte)",
          "Distance camion→porte (en pas) + étage",
          "Photo canapé/armoire/frigo + mention démontage (oui/non)",
          "Couloir dégagé + zone tampon avant arrivée",
        ],
      },
    ],
  },

  // Pack C (sections complètes) — PACA / Occitanie (zones chaudes) (20)
  // New big-city entries (10)
  marseille: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Marseille (et checklist locale)",
        paragraphs: [
          "À Marseille, la fiabilité d’un devis se joue souvent sur l’accès réel : stationnement, portage, relief/marches, et passages intérieurs. Deux logements “identiques” peuvent coûter très différemment si le camion ne se rapproche pas.",
          "Le bon réflexe : photo de la rue (où s’arrêter) + photo du chemin de portage (si long) + photo escalier/ascenseur. Ensuite, annoncez les meubles lourds/fragiles : c’est ce qui change la méthode.",
          "Objectif : comparer des devis comparables, sans ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas) + obstacles (marches/pente)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Liste + photo objets lourds/fragiles (frigo, vitrine, piano…)",
        ],
      },
    ],
  },
  nice: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Nice (et checklist locale)",
        paragraphs: [
          "À Nice, l’accès est souvent le facteur qui fait varier un devis : stationnement possible, distance de portage, et passages intérieurs (ascenseur petit / escaliers étroits).",
          "Le meilleur standard : photo de la rue + photo de l’entrée + photo ascenseur (cabine) ou escalier (bas + palier). Ajoutez ensuite les meubles volumineux “limites”.",
          "But : éliminer l’incertitude pour obtenir des devis comparables.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + couloir/porte la plus étroite",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo des meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  toulouse: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Toulouse (et checklist locale)",
        paragraphs: [
          "À Toulouse, l’objectif est de rendre votre accès “lisible” : où le camion s’arrête, combien de portage, et comment on monte. C’est ce qui stabilise les devis.",
          "Même sans mesures, distance camion→porte + photo du passage le plus étroit suffisent souvent à cadrer correctement les gros meubles.",
          "Ajoutez 2–3 dates possibles si vous le pouvez : la flexibilité aide à obtenir de meilleurs créneaux.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + 2–3 dates possibles",
        ],
      },
    ],
  },
  montpellier: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Montpellier (et checklist locale)",
        paragraphs: [
          "À Montpellier, le devis devient fiable quand l’accès est clair : stationnement, distance de portage, étage/ascenseur, et passage le plus étroit.",
          "Une photo escalier/palier (ou ascenseur cabine) + une photo de la rue suffit souvent à éviter un devis trop optimiste.",
          "Ensuite, listez vos objets lourds/fragiles pour aligner méthode et assurance.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  toulon: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Toulon (et checklist locale)",
        paragraphs: [
          "À Toulon, le devis fiable se gagne sur l’accès : stationnement, distance de portage, et passages. Si le camion ne se rapproche pas, le portage devient le facteur de temps principal.",
          "Le bon réflexe : photo de la rue + distance camion→porte + photo escalier/ascenseur. Ajoutez les meubles volumineux et vous fiabilisez le chiffrage.",
          "Objectif : éviter les devis sous‑dimensionnés (puis les ajustements).",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  menton: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Menton (et checklist locale)",
        paragraphs: [
          "À Menton, la fiabilité d’un devis dépend surtout de l’accès : stationnement, portage, passages. Le volume seul ne suffit pas.",
          "Une photo de la rue + une photo escalier/ascenseur + distance camion→porte rend le devis beaucoup plus réaliste.",
          "Ajoutez les objets fragiles/lourds pour aligner la méthode.",
        ],
        checklist: [
          "Photo rue : arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  "cagnes-sur-mer": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cagnes‑sur‑Mer (et checklist locale)",
        paragraphs: [
          "À Cagnes‑sur‑Mer, un devis fiable se construit sur l’accès réel : stationnement, portage, et passages à l’intérieur.",
          "Le standard simple : distance camion→porte + photo ascenseur/escalier + photo passage le plus étroit. Avec ça, les devis deviennent comparables.",
          "Ajoutez une photo des meubles volumineux et vous sécurisez le chiffrage.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : stationnement possible",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "saint-laurent-du-var": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Laurent‑du‑Var (et checklist locale)",
        paragraphs: [
          "À Saint‑Laurent‑du‑Var, les écarts de devis viennent souvent de l’accès : portage long, ascenseur petit, passage étroit. Une photo rend ces points évidents.",
          "Le bon réflexe : photo cabine d’ascenseur + distance camion→porte + photo du passage le plus étroit.",
          "Ensuite, annoncez les objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo rue : arrêt possible",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  grasse: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Grasse (et checklist locale)",
        paragraphs: [
          "À Grasse, le devis fiable dépend surtout de la logistique : stationnement, portage, et passages. C’est ce qui détermine le temps de manutention.",
          "Le standard efficace : photo rue + distance camion→porte + photo escalier/ascenseur. Ajoutez les meubles volumineux et le devis devient réaliste.",
          "Gardez la checklist identique pour tout le monde pour comparer proprement.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  draguignan: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Draguignan (et checklist locale)",
        paragraphs: [
          "À Draguignan, la fiabilité d’un devis se joue sur l’accès : stationnement, distance de portage, et passages intérieurs. Le volume seul ne suffit pas.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à fiabiliser le chiffrage des gros meubles.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },

  // Pack 20 #next (Nord/Est suite) — Hauts-de-France + Grand Est (+ 2 villes Nord complémentaires) — sections complètes (20)
  // Hauts-de-France (13)
  lille: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Lille (et checklist locale)",
        paragraphs: [
          "À Lille, la fiabilité d’un devis dépend surtout de l’accès réel : stationnement possible, distance de portage, et passages intérieurs (portes/couloirs/escaliers).",
          "Le standard simple : photo rue (où s’arrêter) + distance camion→porte (en pas) + photo escalier/ascenseur. Ajoutez ensuite le passage le plus étroit pour fiabiliser les gros meubles.",
          "Objectif : comparer des devis comparables, sans ajustements le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance visible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  roubaix: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Roubaix (et checklist locale)",
        paragraphs: [
          "À Roubaix, un devis fiable se gagne sur le temps réel : portage, étages, passages. C’est le facteur de coût principal.",
          "Même sans mesures, distance camion→porte + photo escalier/palier rendent les devis beaucoup plus réalistes.",
          "Ajoutez le passage le plus étroit et les meubles volumineux pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo rue : arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  tourcoing: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Tourcoing (et checklist locale)",
        paragraphs: [
          "À Tourcoing, la fiabilité d’un devis dépend surtout de l’accès : stationnement, portage, et passages (porte/couloir/escalier).",
          "Le standard simple : photo de la rue + distance camion→porte + photo escalier/ascenseur. Ajoutez ensuite les meubles volumineux.",
          "But : éviter les devis “au feeling” et comparer proprement.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "villeneuve-d-ascq": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Villeneuve‑d’Ascq (et checklist locale)",
        paragraphs: [
          "À Villeneuve‑d’Ascq, un devis fiable est un devis qui connaît le chemin réel camion→porte : stationnement, distance de portage, et passages à l’intérieur.",
          "Une photo de cabine d’ascenseur (si présent) + une photo du passage le plus étroit suffisent souvent à fiabiliser le chiffrage des gros meubles.",
          "Avec une checklist standard, vous comparez enfin des devis comparables.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "saint-quentin": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Quentin (et checklist locale)",
        paragraphs: [
          "À Saint‑Quentin, le devis fiable se joue sur l’accès : stationnement, portage, passages. Sans ces infos, vous comparez des prestations différentes.",
          "Le standard : distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  beauvais: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Beauvais (et checklist locale)",
        paragraphs: [
          "À Beauvais, un devis fiable dépend surtout du temps réel : portage, étages, passages. C’est le facteur principal de variation.",
          "Même sans mesures, une estimation en pas + une photo escalier/palier rendent le chiffrage réaliste.",
          "Ajoutez le passage le plus étroit et vos meubles volumineux pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  compiegne: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Compiègne (et checklist locale)",
        paragraphs: [
          "À Compiègne, la fiabilité d’un devis se gagne sur la logistique : où le camion se place, combien de portage, et comment on passe à l’intérieur.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Avec ça, les devis deviennent comparables et les surprises diminuent fortement.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  creil: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Creil (et checklist locale)",
        paragraphs: [
          "À Creil, le devis fiable dépend surtout du portage et des passages. Ce sont les paramètres qui font varier le temps de manutention.",
          "Le standard : distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Ajoutez les meubles volumineux pour éviter les devis trop optimistes.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  hazebrouck: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Hazebrouck (et checklist locale)",
        paragraphs: [
          "À Hazebrouck, la fiabilité d’un devis se joue sur l’accès réel : stationnement, distance de portage, et passages (porte/couloir/escalier).",
          "Même sans mesures, distance camion→porte + photo passage le plus étroit suffisent souvent à cadrer correctement.",
          "Ajoutez une photo des meubles volumineux pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  denain: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Denain (et checklist locale)",
        paragraphs: [
          "À Denain, le devis fiable se gagne sur la visibilité : accès + volume + date. L’accès se fiabilise avec 3 photos (rue, entrée, escalier/ascenseur).",
          "Notez aussi la distance camion→porte (en pas). C’est le repère le plus simple pour comparer des devis comparables.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  cambrai: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cambrai (et checklist locale)",
        paragraphs: [
          "À Cambrai, la fiabilité d’un devis dépend surtout du temps réel : portage, étages, passages. C’est le facteur de coût principal.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les meubles volumineux et vous évitez les surprises le jour J.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  wattrelos: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Wattrelos (et checklist locale)",
        paragraphs: [
          "À Wattrelos, un devis fiable se gagne sur l’accès : stationnement, portage, passages. Sans ça, les devis ne décrivent pas la même prestation.",
          "Même sans mesures, distance camion→porte + photo escalier/ascenseur rendent le chiffrage réaliste.",
          "Ajoutez une photo des meubles volumineux pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  maubeuge: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Maubeuge (et checklist locale)",
        paragraphs: [
          "À Maubeuge, le devis fiable dépend surtout de la logistique : stationnement, distance de portage, et passages intérieurs.",
          "Le standard simple : distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo rue : arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },

  // Grand Est (5)
  strasbourg: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Strasbourg (et checklist locale)",
        paragraphs: [
          "À Strasbourg, un devis fiable se joue sur l’accès réel : stationnement, distance de portage, et passages (escaliers/ascenseur).",
          "Le standard le plus efficace : photo de la rue + distance camion→porte (en pas) + photo ascenseur (cabine) ou escalier (bas + palier). Ajoutez ensuite le passage le plus étroit.",
          "Avec la checklist ci-dessous, vous comparez des devis comparables, sans surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance visible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier (bas + palier) / ascenseur (cabine)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  saverne: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saverne (et checklist locale)",
        paragraphs: [
          "À Saverne, un devis fiable se gagne sur la logistique : où le camion se place, combien de portage, et comment on passe à l’intérieur.",
          "Même sans mesures, distance camion→porte + photo escalier/ascenseur rendent le chiffrage réaliste.",
          "Ajoutez le passage le plus étroit et les meubles volumineux pour sécuriser la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "saint-die-des-vosges": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Dié‑des‑Vosges (et checklist locale)",
        paragraphs: [
          "À Saint‑Dié‑des‑Vosges, la fiabilité d’un devis dépend surtout de l’accès : stationnement, portage, passages. C’est le facteur de temps principal.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les objets fragiles/lourds pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets fragiles/lourds",
        ],
      },
    ],
  },
  "saint-avold": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Avold (et checklist locale)",
        paragraphs: [
          "À Saint‑Avold, un devis fiable se gagne sur la clarté : accès + volume + date. L’accès se fiabilise avec quelques photos bien prises.",
          "Le standard : distance camion→porte + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez les meubles volumineux “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  sarreguemines: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sarreguemines (et checklist locale)",
        paragraphs: [
          "À Sarreguemines, la fiabilité d’un devis dépend du temps réel : portage, étages, passages. Une photo rend ces contraintes évidentes.",
          "Le standard : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },

  // ---- Packs auto "fais tout" : Bretagne suite + Corse + Nouvelle-Aquitaine + Auvergne-Rhône-Alpes ----
  // Bretagne suite (6)
  pontivy: { extraSections: buildCommonExtraSections("Pontivy") },
  dinan: { extraSections: buildCommonExtraSections("Dinan") },
  fougeres: { extraSections: buildCommonExtraSections("Fougères") },
  vitre: { extraSections: buildCommonExtraSections("Vitré") },
  ploemeur: { extraSections: buildCommonExtraSections("Ploemeur") },
  "cesson-sevigne": { extraSections: buildCommonExtraSections("Cesson‑Sévigné") },

  // Corse (2)
  ajaccio: { extraSections: buildCommonExtraSections("Ajaccio") },
  bastia: { extraSections: buildCommonExtraSections("Bastia") },

  // Nouvelle-Aquitaine (23) — compléments
  merignac: { extraSections: buildCommonExtraSections("Mérignac") },
  pessac: { extraSections: buildCommonExtraSections("Pessac") },
  talence: { extraSections: buildCommonExtraSections("Talence") },
  begles: { extraSections: buildCommonExtraSections("Bègles") },
  "villenave-d-ornon": { extraSections: buildCommonExtraSections("Villenave‑d’Ornon") },
  cenon: { extraSections: buildCommonExtraSections("Cenon") },
  floirac: { extraSections: buildCommonExtraSections("Floirac") },
  libourne: { extraSections: buildCommonExtraSections("Libourne") },
  arcachon: { extraSections: buildCommonExtraSections("Arcachon") },
  pau: { extraSections: buildCommonExtraSections("Pau") },
  biarritz: { extraSections: buildCommonExtraSections("Biarritz") },
  anglet: { extraSections: buildCommonExtraSections("Anglet") },
  saintes: { extraSections: buildCommonExtraSections("Saintes") },
  royan: { extraSections: buildCommonExtraSections("Royan") },
  rochefort: { extraSections: buildCommonExtraSections("Rochefort") },
  "chatellerault": { extraSections: buildCommonExtraSections("Châtellerault") },
  gueret: { extraSections: buildCommonExtraSections("Guéret") },
  tulle: { extraSections: buildCommonExtraSections("Tulle") },
  ussel: { extraSections: buildCommonExtraSections("Ussel") },
  dax: { extraSections: buildCommonExtraSections("Dax") },
  hendaye: { extraSections: buildCommonExtraSections("Hendaye") },
  lormont: { extraSections: buildCommonExtraSections("Lormont") },
  gradignan: { extraSections: buildCommonExtraSections("Gradignan") },

  // Auvergne-Rhône-Alpes (35) — compléments (inclut CORE)
  lyon: { extraSections: buildCommonExtraSections("Lyon") },
  grenoble: { extraSections: buildCommonExtraSections("Grenoble") },
  villeurbanne: { extraSections: buildCommonExtraSections("Villeurbanne") },
  "saint-etienne": { extraSections: buildCommonExtraSections("Saint‑Étienne") },
  "clermont-ferrand": { extraSections: buildCommonExtraSections("Clermont‑Ferrand") },
  annecy: { extraSections: buildCommonExtraSections("Annecy") },
  chambery: { extraSections: buildCommonExtraSections("Chambéry") },
  valence: { extraSections: buildCommonExtraSections("Valence") },
  "bourg-en-bresse": { extraSections: buildCommonExtraSections("Bourg‑en‑Bresse") },
  roanne: { extraSections: buildCommonExtraSections("Roanne") },
  venissieux: { extraSections: buildCommonExtraSections("Vénissieux") },
  "saint-priest": { extraSections: buildCommonExtraSections("Saint‑Priest") },
  "caluire-et-cuire": { extraSections: buildCommonExtraSections("Caluire‑et‑Cuire") },
  echirolles: { extraSections: buildCommonExtraSections("Échirolles") },
  "saint-martin-d-heres": { extraSections: buildCommonExtraSections("Saint‑Martin‑d’Hères") },
  "vaulx-en-velin": { extraSections: buildCommonExtraSections("Vaulx‑en‑Velin") },
  bron: { extraSections: buildCommonExtraSections("Bron") },
  "decines-charpieu": { extraSections: buildCommonExtraSections("Décines‑Charpieu") },
  "villefranche-sur-saone": { extraSections: buildCommonExtraSections("Villefranche‑sur‑Saône") },
  vichy: { extraSections: buildCommonExtraSections("Vichy") },
  montlucon: { extraSections: buildCommonExtraSections("Montluçon") },
  moulins: { extraSections: buildCommonExtraSections("Moulins") },
  issoire: { extraSections: buildCommonExtraSections("Issoire") },
  "le-puy-en-velay": { extraSections: buildCommonExtraSections("Le Puy‑en‑Velay") },
  aurillac: { extraSections: buildCommonExtraSections("Aurillac") },
  "le-chambon-feugerolles": { extraSections: buildCommonExtraSections("Le Chambon‑Feugerolles") },
  "saint-chamond": { extraSections: buildCommonExtraSections("Saint‑Chamond") },
  firminy: { extraSections: buildCommonExtraSections("Firminy") },
  annonay: { extraSections: buildCommonExtraSections("Annonay") },
  "romans-sur-isere": { extraSections: buildCommonExtraSections("Romans‑sur‑Isère") },
  "bourg-les-valence": { extraSections: buildCommonExtraSections("Bourg‑lès‑Valence") },
  oyonnax: { extraSections: buildCommonExtraSections("Oyonnax") },
  annemasse: { extraSections: buildCommonExtraSections("Annemasse") },
  "thonon-les-bains": { extraSections: buildCommonExtraSections("Thonon‑les‑Bains") },

  // Occitanie (4 restants)
  mazamet: { extraSections: buildCommonExtraSections("Mazamet") },
  figeac: { extraSections: buildCommonExtraSections("Figeac") },
  frontignan: { extraSections: buildCommonExtraSections("Frontignan") },
  agde: { extraSections: buildCommonExtraSections("Agde") },

  // Centre-Val de Loire (3 restants)
  olivet: { extraSections: buildCommonExtraSections("Olivet") },
  vendome: { extraSections: buildCommonExtraSections("Vendôme") },
  montargis: { extraSections: buildCommonExtraSections("Montargis") },

  // Bourgogne–Franche-Comté (3 restants)
  "lons-le-saunier": { extraSections: buildCommonExtraSections("Lons‑le‑Saunier") },
  beaune: { extraSections: buildCommonExtraSections("Beaune") },
  "le-creusot": { extraSections: buildCommonExtraSections("Le Creusot") },

  // Provence-Alpes-Côte d'Azur (16 restants)
  "salon-de-provence": { extraSections: buildCommonExtraSections("Salon‑de‑Provence") },
  istres: { extraSections: buildCommonExtraSections("Istres") },
  "la-ciotat": { extraSections: buildCommonExtraSections("La Ciotat") },
  brignoles: { extraSections: buildCommonExtraSections("Brignoles") },
  gap: { extraSections: buildCommonExtraSections("Gap") },
  "digne-les-bains": { extraSections: buildCommonExtraSections("Digne‑les‑Bains") },
  manosque: { extraSections: buildCommonExtraSections("Manosque") },
  orange: { extraSections: buildCommonExtraSections("Orange") },
  carpentras: { extraSections: buildCommonExtraSections("Carpentras") },
  cavaillon: { extraSections: buildCommonExtraSections("Cavaillon") },
  sorgues: { extraSections: buildCommonExtraSections("Sorgues") },
  "le-pontet": { extraSections: buildCommonExtraSections("Le Pontet") },
  vitrolles: { extraSections: buildCommonExtraSections("Vitrolles") },
  marignane: { extraSections: buildCommonExtraSections("Marignane") },
  "les-pennes-mirabeau": { extraSections: buildCommonExtraSections("Les Pennes‑Mirabeau") },
  gardanne: { extraSections: buildCommonExtraSections("Gardanne") },

  // Nord complément (2) — pour compléter le pack à 20 villes
  "sotteville-les-rouen": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sotteville‑lès‑Rouen (et checklist locale)",
        paragraphs: [
          "À Sotteville‑lès‑Rouen, le devis fiable dépend surtout de l’accès : stationnement, distance de portage, passages. C’est le facteur de temps principal.",
          "Le standard simple : photo rue + distance camion→porte + photo escalier/ascenseur + photo passage le plus étroit.",
          "Ajoutez les meubles volumineux et vous comparez des devis comparables.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "saint-etienne-du-rouvray": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Étienne‑du‑Rouvray (et checklist locale)",
        paragraphs: [
          "À Saint‑Étienne‑du‑Rouvray, la fiabilité d’un devis se gagne sur la logistique : où le camion se place, combien de portage, et comment on passe à l’intérieur.",
          "Même sans mesures, distance camion→porte + photo passage le plus étroit + photo escalier/ascenseur rendent le chiffrage réaliste.",
          "Ajoutez les objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },

  // Pack 20 #next (région) — Pays de la Loire + Bretagne (20) — sections complètes
  // Pays de la Loire (13 nouveaux + 5 complétés plus haut), Bretagne (2 complétés plus haut)
  "le-mans": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès au Mans (et checklist locale)",
        paragraphs: [
          "Au Mans, un devis fiable se gagne sur l’accès : où le camion s’arrête, combien de portage, et comment on passe à l’intérieur (portes/couloirs/escaliers/ascenseur).",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez les meubles volumineux “limites” pour sécuriser la méthode et éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  "saint-nazaire": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Nazaire (et checklist locale)",
        paragraphs: [
          "À Saint‑Nazaire, la fiabilité d’un devis dépend du temps réel : portage, étages, passages. C’est le facteur de coût principal.",
          "Même sans mesures, une distance en pas + 2–3 photos (rue, entrée, escalier/ascenseur) suffisent à rendre le chiffrage réaliste.",
          "Ajoutez les meubles volumineux et vous comparez des devis comparables.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur",
          "Photo meubles volumineux (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  cholet: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Cholet (et checklist locale)",
        paragraphs: [
          "À Cholet, un devis fiable se construit sur une base simple : accès clair + volume réaliste + meubles “limites” annoncés.",
          "Le standard : photo rue + distance camion→porte (en pas) + photo passage le plus étroit + photo escalier/ascenseur si besoin.",
          "Avec la checklist ci-dessous, vous éliminez l’essentiel de l’incertitude.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  laval: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Laval (et checklist locale)",
        paragraphs: [
          "À Laval, le devis fiable dépend surtout de l’accès réel : stationnement, portage, et passages. Une photo rend ces contraintes évidentes.",
          "Le standard simple : distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez vos objets lourds/fragiles pour aligner la méthode (protection, manutention).",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo escalier/ascenseur + palier",
          "Photo passage le plus étroit",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  "saint-sebastien-sur-loire": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saint‑Sébastien‑sur‑Loire (et checklist locale)",
        paragraphs: [
          "À Saint‑Sébastien‑sur‑Loire, les devis deviennent comparables dès que l’accès est clair : distance de portage, étages, passages.",
          "Une photo de cabine d’ascenseur (si présent) + une photo du passage le plus étroit suffisent souvent à fiabiliser le chiffrage des gros meubles.",
          "Ajoutez la distance camion→porte (en pas) et vous éliminez une grande partie du flou.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo ascenseur (cabine) / escalier (bas + palier)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  carquefou: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Carquefou (et checklist locale)",
        paragraphs: [
          "À Carquefou, un devis fiable se gagne sur la logistique réelle : stationnement, portage, passages, et annexes éventuelles.",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo du passage le plus étroit + photo escalier/ascenseur si besoin.",
          "Ajoutez une photo des meubles volumineux et vous sécurisez la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur (si applicable)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  bouguenais: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Bouguenais (et checklist locale)",
        paragraphs: [
          "À Bouguenais, le devis fiable dépend surtout du temps réel : portage, passages, et meubles volumineux annoncés.",
          "Même sans mesures, distance camion→porte (en pas) + photo du passage le plus étroit suffisent souvent à cadrer correctement.",
          "Ajoutez la photo escalier/ascenseur si vous êtes en étage, et vos devis deviennent comparables.",
        ],
        checklist: [
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo rue : arrêt possible",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "les-sables-d-olonne": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès aux Sables‑d’Olonne (et checklist locale)",
        paragraphs: [
          "Aux Sables‑d’Olonne, un devis fiable se construit sur l’accès réel : stationnement, portage, passages. C’est le facteur de temps principal.",
          "Le standard : photo rue + distance camion→porte (en pas) + photo escalier/ascenseur + photo du passage le plus étroit.",
          "Ajoutez les meubles “limites” pour éviter les surprises le jour J.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  saumur: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Saumur (et checklist locale)",
        paragraphs: [
          "À Saumur, la fiabilité d’un devis dépend de l’accès (portage, passages) et du volume réel (photos pièces + annexes).",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo passage le plus étroit + photo escalier/ascenseur si besoin.",
          "Avec la checklist ci-dessous, vous comparez des devis comparables.",
        ],
        checklist: [
          "Photos pièces + annexes (si existantes)",
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit",
          "Photo meubles volumineux",
        ],
      },
    ],
  },
  "sable-sur-sarthe": {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Sablé‑sur‑Sarthe (et checklist locale)",
        paragraphs: [
          "À Sablé‑sur‑Sarthe, un devis fiable se gagne sur la clarté : accès + volume + meubles “limites” annoncés.",
          "Même sans mesures, distance camion→porte (en pas) + photo du passage le plus étroit rendent les devis beaucoup plus réalistes.",
          "Ajoutez la photo escalier/ascenseur si vous êtes en étage, et vous sécurisez la méthode.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
  mayenne: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Mayenne (et checklist locale)",
        paragraphs: [
          "À Mayenne, la fiabilité d’un devis dépend surtout du temps réel : portage, passages, et objets lourds/fragiles annoncés.",
          "Le standard : photo rue + distance camion→porte (en pas) + photo passage le plus étroit + photo escalier/ascenseur si besoin.",
          "Ajoutez une photo des meubles volumineux et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "Photo rue : arrêt possible + distance",
          "Distance camion→porte (en pas) + étage/ascenseur",
          "Photo passage le plus étroit",
          "Photo escalier/ascenseur (si applicable)",
          "Liste + photo objets lourds/fragiles",
        ],
      },
    ],
  },
  challans: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Challans (et checklist locale)",
        paragraphs: [
          "À Challans, un devis fiable se construit sur l’accès réel : où le camion s’arrête, combien de portage, et comment on passe à l’intérieur.",
          "Une photo du passage le plus étroit + une photo escalier/ascenseur suffisent souvent à fiabiliser le chiffrage des gros meubles.",
          "Ajoutez les meubles “limites” et vous sécurisez la méthode.",
        ],
        checklist: [
          "Photo stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "Photo entrée + passage le plus étroit",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Photo meubles volumineux (canapé, frigo, armoire)",
        ],
      },
    ],
  },
  pornic: {
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Pornic (et checklist locale)",
        paragraphs: [
          "À Pornic, le devis fiable dépend surtout du portage et des passages : c’est le facteur de temps principal.",
          "Le standard simple : photo rue + distance camion→porte (en pas) + photo passage le plus étroit. Ajoutez escalier/ascenseur si vous êtes en étage.",
          "Avec la checklist ci-dessous, vous comparez des devis comparables et vous évitez les ajustements.",
        ],
        checklist: [
          "Photo rue : stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "Photo passage le plus étroit (porte/couloir)",
          "Photo escalier/ascenseur + palier (si applicable)",
          "Photo meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
};


