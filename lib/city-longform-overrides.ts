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

/**
 * Handwritten enhancements for the 2000+ word city guide.
 * Important: keep copy practical and avoid unverifiable claims (no hard facts about local rules).
 */
export const CITY_LONGFORM_OVERRIDES: Record<string, CityLongFormOverride> = {
  // Pack 20 (IDF + Nantes area) — enhance specificity without inventing facts
  antony: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Antony, vous aurez souvent deux cas de figure : résidence avec ascenseur (super… si la cabine est assez grande) ou immeuble plus ancien avec escaliers/paliers serrés. Dans les deux cas, une détail “porte ouverte” de l’ascenseur et une détail du palier vous évitent un devis approximatif.",
      ],
      date: [
        "Si vous bougez sur un créneau serré, le meilleur “hack” est la flexibilité : proposez deux dates de semaine et une option week-end. Vous augmentez mécaniquement la probabilité d’obtenir une équipe disponible et un devis stable.",
      ],
    },
  },
  "corbeil-essonnes": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Corbeil‑Essonnes, il y a souvent un mix pavillons/résidences. Pour un pavillon, le point clé est l’accès camion + la zone de chargement (marche, pente, portillon). Pour une résidence, le point clé est l’ascenseur + la distance de portage. Dans les deux cas : on documente, on compare, on évite les surprises.",
      ],
    },
  },
  "evry-courcouronnes": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Évry‑Courcouronnes, le facteur “temps caché” classique est l’accès réel au bâtiment : couloirs, parkings, entrées multiples, ascenseur parfois éloigné. Une détail du chemin complet camion→porte + une détail de l’ascenseur (cabine) clarifient énormément le devis.",
      ],
      "jour-j": [
        "Jour J : gardez une personne “référent accès” (badge, clés, portes) et une personne “référent cartons”. Quand tout le monde sait qui décide, ça évite les frictions et ça fait gagner du temps.",
      ],
    },
  },
  poissy: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une mini-ligne “meubles limites” dans votre dossier (canapé, frigo, armoire). À Poissy comme ailleurs, c’est souvent ce détail qui fait passer un devis de “peut-être” à “fiable”.",
      ],
    },
  },
  sartrouville: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Sartrouville, beaucoup de déménagements alternent entre maison et résidence. Pour une maison : attention au trajet jardin/portillon/escaliers. Pour une résidence : attention au couple ascenseur + distance de portage. Dans les deux cas, 2 détails bien prises valent mieux que 10 lignes de description.",
      ],
    },
  },
  "saint-germain-en-laye": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Germain‑en‑Laye, le centre (et certaines zones d’immeubles anciens) peut rendre l’accès plus délicat : paliers tournants, passages étroits, distance de portage. Le bon réflexe : décrire l’escalier depuis le bas + un palier, et indiquer si le camion peut s’arrêter “devant” ou “à proximité”.",
      ],
    },
  },
  "mantes-la-jolie": {
    appendBySectionId: {
      dossier: [
        "Si vous hésitez sur la taille d’ascenseur ou le passage d’un meuble, écrivez-le tel quel (“doute sur passage canapé”). C’est paradoxalement ce qui rend le devis plus fiable : on chiffre une méthode réaliste.",
      ],
    },
  },
  cergy: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Cergy, beaucoup de résidences ont des accès “propres” mais parfois indirects (parking, entrée secondaire, ascenseur éloigné). Le devis fiable est celui qui connaît le vrai chemin : camion → porte → ascenseur → palier. Une détail du trajet (ou 2–3 détails clés) suffit.",
      ],
    },
  },
  pontoise: {
    appendBySectionId: {
      "volume-tri": [
        "Si vous faites un tri, pensez aussi “démontage intelligent” : certains meubles prennent beaucoup de volume (et de temps) s’ils restent montés. Un démontage ciblé peut réduire la durée du chargement et stabiliser le devis.",
      ],
    },
  },
  vincennes: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Vincennes, l’accès et le stationnement sont souvent le facteur dominant (zone dense). Le meilleur repère est simple : distance camion→porte + détail du passage le plus étroit. Cela évite les devis sous-estimés… et les ajustements.",
      ],
    },
  },
  montrouge: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Montrouge, beaucoup de logements sont en immeuble : la question #1 est “ascenseur oui/non” et #2 “il est grand comment ?”. Une détail de la cabine (porte ouverte) + une détail du palier rendent la réponse évidente.",
      ],
    },
  },
  "saint-ouen-sur-seine": {
    appendBySectionId: {
      date: [
        "Astuce simple : si vous avez une date contrainte, sécurisez une “fenêtre” (matin/après-midi) plutôt qu’une heure fixe. C’est souvent plus réaliste pour les déménageurs et ça évite les frictions de planning.",
      ],
    },
  },
  "saint-maur-des-fosses": {
    appendBySectionId: {
      dossier: [
        "Ajoutez aussi une info “sortie/entrée facile ou pas” (marches, couloir, portillon). Ce détail est petit mais il influence le temps réel — donc la fiabilité du devis.",
      ],
    },
  },
  "epinay-sur-seine": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Épinay‑sur‑Seine, le duo gagnant pour un devis fiable : détail du stationnement potentiel + détail de l’accès intérieur. Le reste (cartons, volume) devient beaucoup plus simple à estimer.",
      ],
    },
  },
  "le-blanc-mesnil": {
    appendBySectionId: {
      "jour-j": [
        "Jour J : prévoyez un petit kit “imprévus” (ruban, cutters, marqueur, sacs, chiffons). Ça évite 20 minutes perdues pour un détail.",
      ],
    },
  },
  reze: {
    appendBySectionId: {
      dossier: [
        "À Rezé, le plus important est souvent la clarté du dossier (accès + volume + date) plutôt que d’essayer de tout optimiser à l’avance. Une base claire = des devis comparables.",
      ],
    },
  },
  "saint-herblain": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Herblain, on voit fréquemment des résidences où l’ascenseur est là… mais la distance de portage reste le vrai sujet (parking/entrée). Documentez le trajet complet : camion → entrée → ascenseur → palier.",
      ],
    },
  },
  orvault: {
    appendBySectionId: {
      "volume-tri": [
        "Pour une maison (ou un logement avec cave/garage), pensez à inclure ces zones dans les détails. Beaucoup de devis sous-estiment le volume parce que ces espaces “hors pièces” sont oubliés.",
      ],
    },
  },
  vertou: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Vertou, si vous êtes en maison, le “portage extérieur” (allée, marches, jardin, portail) est souvent le facteur qui surprend. Une détail du chemin de sortie (porte → rue) rend le devis plus fiable.",
      ],
    },
  },
  "la-roche-sur-yon": {
    appendBySectionId: {
      "assurance": [
        "Dernier rappel utile : si vous avez des objets à forte valeur (sentimentale ou financière), mentionnez-le. L’objectif n’est pas de compliquer — c’est de choisir une prestation/assurance alignée.",
      ],
    },
  },

  // Pack 20 #2 (Longform) — Bretagne + Grand Est
  // Bretagne (10)
  brest: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Brest, le meilleur moyen d’avoir un devis stable est de rendre l’accès “visible” : détail de la rue + détail de l’entrée + détail de l’escalier/ascenseur. Ça évite les estimations au feeling et ça rend les devis réellement comparables.",
      ],
      "jour-j": [
        "Jour J : préparez une “zone tampon” près de la porte (cartons prêts, meubles démontés, couloir dégagé). Plus l’accès est fluide, plus l’équipe est efficace — et plus la journée se termine tôt.",
      ],
    },
  },
  vannes: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une ligne “accès extérieur” si vous êtes en maison (allée, marches, portail). C’est souvent l’info oubliée qui change le temps réel de manutention.",
      ],
      "volume-tri": [
        "Si vous avez cave/garage, décrivez-les aussi : ces zones “hors pièces” sont un classique des devis sous-estimés.",
      ],
    },
  },
  lorient: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Lorient, un devis fiable est souvent un devis qui connaît la distance camion→porte. Même sans mesure, notez “proche / moyen / loin” et ajoutez une détail : ça évite les écarts de portage entre devis.",
      ],
      date: [
        "Si vous voulez optimiser le prix sans sacrifier la qualité, essayez de proposer 2 dates en semaine + 1 option “secours”. La flexibilité augmente les chances d’un bon créneau.",
      ],
    },
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
  },
  "saint-malo": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Malo, la différence entre un devis “OK” et un devis “surprise” vient souvent du trajet réel camion→porte. Documentez-le : détail de la rue + détail de l’entrée + détail de l’escalier/ascenseur.",
      ],
      "dossier": [
        "Si vous hésitez sur un passage (porte étroite, palier tournant), écrivez-le tel quel. Un doute annoncé = une méthode prévue = un devis plus fiable.",
      ],
    },
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
  },
  lannion: {
    appendBySectionId: {
      dossier: [
        "Pour stabiliser les devis, précisez si l’accès est direct ou s’il y a un “dernier tronçon” (cour, long couloir, marches). C’est du temps de manutention — donc du prix.",
      ],
    },
  },
  morlaix: {
    appendBySectionId: {
      "acces-stationnement": [
        "Si vous avez des marches, une pente ou un portillon (maison), ajoutez une détail du chemin de sortie (porte → rue). Ça rend le devis beaucoup plus juste.",
      ],
      "emballage": [
        "Astuce : regroupez les vis de démontage dans des sachets scotchés directement au meuble correspondant. Au remontage, vous gagnez un temps énorme.",
      ],
    },
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
  },
  auray: {
    appendBySectionId: {
      "volume-tri": [
        "Avant devis, faites une détail des meubles volumineux (canapé, armoire, frigo) près d’une porte/couloir : ça aide à estimer passage + démontage, donc à fiabiliser le devis.",
      ],
    },
  },

  // Grand Est (10)
  metz: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Metz, le devis “qui tient” est celui qui connaît vos accès : stationnement possible, distance camion→porte, et passage intérieur (escalier/ascenseur). Documentez 3 détails, et vous évitez 80% des surprises.",
      ],
      "assurance": [
        "Comparez aussi les conditions : ce qui est inclus/exclu, comment l’accès est chiffré, et la procédure en cas de dommage. Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
  },
  nancy: {
    appendBySectionId: {
      dossier: [
        "Ajoutez un mini-inventaire “objets à risque” (fragiles/lourds). Ce n’est pas pour compliquer : c’est pour éviter qu’un devis sous-estime la méthode (protection, manutention).",
      ],
      "acces-stationnement": [
        "Si vous êtes en immeuble, la détail la plus utile est souvent l’escalier depuis le bas + un palier. On voit tout de suite les rotations et la faisabilité des gros meubles.",
      ],
    },
  },
  mulhouse: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le duo gagnant pour un devis fiable : détail du stationnement potentiel + détail de l’accès intérieur. Ensuite, le volume devient beaucoup plus simple à estimer correctement.",
      ],
      "jour-j": [
        "Jour J : étiquetez les cartons par pièce + priorité (ouvrir d’abord / peut attendre). Au déchargement, ça fait gagner un temps énorme.",
      ],
    },
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
  },
  thionville: {
    appendBySectionId: {
      "acces-stationnement": [
        "Si l’accès impose du portage (cour, long couloir, parking), dites-le clairement. Beaucoup de “surprises” viennent d’un portage sous-estimé au moment du devis.",
      ],
    },
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
  },
  haguenau: {
    appendBySectionId: {
      dossier: [
        "Ajoutez une ligne “passage le plus étroit” (porte, couloir, escalier). Une seule détail de ce point suffit souvent à fiabiliser le devis sur les gros meubles.",
      ],
    },
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
  },
  "illkirch-graffenstaden": {
    appendBySectionId: {
      "jour-j": [
        "Jour J : gardez une personne “référent accès” (clés, portes, ascenseur) et une personne “référent cartons”. Ça évite les quiproquos quand tout va vite.",
      ],
      "acces-stationnement": [
        "Si l’ascenseur est présent, une détail de la cabine (porte ouverte) suffit souvent à éviter un devis trop optimiste sur les gros meubles.",
      ],
    },
  },
  selestat: {
    appendBySectionId: {
      "acces-stationnement": [
        "Si vous avez une maison, pensez à l’accès extérieur : allée, marches, portail, distance jusqu’au camion. Une détail du chemin “porte → rue” rend le devis beaucoup plus juste.",
      ],
      "emballage": [
        "Astuce : préparez une boîte “outils” (tournevis, clé, ruban) qui reste accessible. Un démontage rapide au bon moment évite des blocages.",
      ],
    },
  },

  // Pack 20 #3 (Longform) — PACA + Nouvelle-Aquitaine
  // PACA (10)
  "aix-en-provence": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Aix‑en‑Provence, le meilleur “anti‑surprise” est de documenter le trajet complet camion→porte. Même sans chiffres précis, 3 détails (rue, entrée, escalier/ascenseur) suffisent souvent à stabiliser les devis.",
      ],
      dossier: [
        "Ajoutez une ligne “accès extérieur” si vous êtes en maison (allée, marches, portail). C’est souvent l’info oubliée qui change le temps de manutention.",
      ],
    },
  },
  avignon: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Avignon, le point qui fait varier un devis plus qu’on ne croit : la distance de portage. Notez “proche / moyen / loin” et ajoutez une détail de la rue : vous rendez les devis comparables immédiatement.",
      ],
      date: [
        "Si vous voulez optimiser sans stresser, proposez 2 dates en semaine + 1 option de secours. La flexibilité augmente la disponibilité et rend les devis plus réalistes.",
      ],
    },
  },
  cannes: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Cannes, un devis fiable est souvent un devis qui connaît l’accès réel au bâtiment : où s’arrêter, combien de portage, et si l’ascenseur est “grand comment”. Une détail de cabine (porte ouverte) fait gagner un temps énorme au chiffrage.",
      ],
      "jour-j": [
        "Jour J : gardez une personne “référent accès” (clés, badges, portes) et une personne “référent cartons”. Quand ça va vite, ça évite les quiproquos.",
      ],
    },
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
  },
  "la-seyne-sur-mer": {
    appendBySectionId: {
      "acces-stationnement": [
        "À La Seyne‑sur‑Mer, le duo qui rend les devis fiables : détail du stationnement potentiel + détail de l’accès intérieur. Ensuite, le volume devient beaucoup plus simple à estimer correctement.",
      ],
      "volume-tri": [
        "Si vous avez cave/garage, incluez‑les dans les détails : ce sont des zones souvent oubliées qui font gonfler le volume réel.",
      ],
    },
  },
  hyeres: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Hyères, si vous êtes en maison, pensez au “portage extérieur” (allée, marches, portail). Une détail du chemin “porte → rue” suffit à fiabiliser le devis.",
      ],
      "assurance": [
        "Dernier rappel utile : si vous avez des objets à forte valeur (financière ou sentimentale), mentionnez‑le. Le bon devis est celui qui prévoit protection/assurance alignée.",
      ],
    },
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
  },
  "saint-raphael": {
    appendBySectionId: {
      "acces-stationnement": [
        "À Saint‑Raphaël, notez la distance camion→porte (même en pas) et ajoutez une détail de l’entrée : c’est le repère le plus simple pour rendre les devis comparables.",
      ],
      "emballage": [
        "Astuce : sachets de vis scotchés au meuble correspondant. Au remontage, vous gagnez un temps énorme.",
      ],
    },
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
  },
  martigues: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Martigues, beaucoup d’écarts de devis viennent du portage sous‑estimé. Une estimation “court/moyen/long” + une détail de la rue suffit souvent à cadrer.",
      ],
      "assurance": [
        "Comparez aussi les conditions (inclus/exclus, accès pris en compte, procédure en cas de dommage). Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
  },

  // Nouvelle-Aquitaine (10)
  "la-rochelle": {
    appendBySectionId: {
      "acces-stationnement": [
        "À La Rochelle, le devis fiable est celui qui voit l’accès : détail de la rue + détail de l’entrée + détail de l’escalier/ascenseur. Ça évite les estimations au feeling et rend les devis comparables.",
      ],
      date: [
        "Pour optimiser sans stress : proposez 2–3 dates possibles. La flexibilité augmente la disponibilité et stabilise les devis.",
      ],
    },
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
  },
  poitiers: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le repère le plus simple pour comparer des devis à Poitiers : distance camion→porte + détail du passage le plus étroit. Avec ça, les écarts deviennent compréhensibles (et évitables).",
      ],
      "emballage": [
        "Astuce : faites une “boîte essentiels 24h” (chargeurs, draps, papiers, café/thé). Ne la chargez pas par erreur : ça vous sauve la soirée.",
      ],
    },
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
  },
  angouleme: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Angoulême, l’accès intérieur (escaliers/paliers) est souvent le point qui fait varier le temps. Une détail de l’escalier depuis le bas + un palier vaut mieux qu’une description.",
      ],
      dossier: [
        "Si vous doutez du passage d’un meuble, dites‑le. Un doute annoncé = une méthode prévue = un devis plus fiable.",
      ],
    },
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
  },
  perigueux: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Périgueux, un devis fiable se gagne sur la logistique : stationnement, portage, et passages. 3 détails bien choisies rendent les devis comparables instantanément.",
      ],
      "volume-tri": [
        "N’oubliez pas cave/garage/grenier dans les détails. C’est un classique des volumes sous‑estimés.",
      ],
    },
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
  },
  agen: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le portage est souvent le facteur sous‑estimé. À Agen, notez la distance camion→porte (même en pas) et ajoutez une détail de la rue : vous stabilisez les devis.",
      ],
      "assurance": [
        "Comparez aussi les conditions : inclus/exclus, accès pris en compte, procédure en cas de dommage. Un devis clair est souvent plus fiable qu’un devis ultra court.",
      ],
    },
  },
  bayonne: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Bayonne, documentez l’accès comme un mini‑projet : où s’arrêter, distance de portage, et passages intérieurs. Une détail de la rue + entrée + escalier/ascenseur suffit souvent à rendre le devis très fiable.",
      ],
      "jour-j": [
        "Jour J : gardez un sac perso “à ne pas charger” (papiers, clés, ordinateur). C’est le petit détail qui évite la panique.",
      ],
    },
  },

  // Pack 20 #4 (Longform) — Occitanie (20)
  nimes: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Nîmes, le plus gros levier de fiabilité, c’est l’accès : détail de la rue + détail de l’entrée + détail escalier/ascenseur. Ça évite les devis “au feeling” et rend la comparaison beaucoup plus juste.",
      ],
      dossier: [
        "Ajoutez une ligne “passage le plus étroit” (porte/couloir/escalier). Une seule détail de ce point suffit souvent à fiabiliser le devis sur les gros meubles.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Nîmes (et checklist locale)",
        paragraphs: [
          "À Nîmes, le devis devient fiable quand vous décrivez votre logement comme un parcours : entrée → escalier/ascenseur → palier → pièce principale. Ce n’est pas du “détail”, c’est du temps de manutention (donc du prix).",
          "Si vous êtes en maison, le sujet est souvent l’extérieur : portillon, marches, allée, distance jusqu’au camion. Si vous êtes en immeuble, le sujet est l’intérieur : largeur de couloir, rotations d’escalier, ascenseur petit/grand.",
          "Le bon réflexe : une mini-checklist accès + 2 infos écrites (étage/ascenseur, distance camion→porte).",
        ],
        checklist: [
          "détail rue : où le camion peut s’arrêter (même approximatif)",
          "Distance camion→porte : proche / moyen / long (ou en pas)",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier (bas + palier) ou ascenseur (porte + cabine)",
          "détail des 2–3 meubles “limites” (canapé, frigo, armoire) près d’un passage",
        ],
      },
    ],
  },
  perpignan: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Perpignan, le portage est souvent sous-estimé. Notez la distance camion→porte (même en pas) + une détail de la rue : vous stabilisez les devis immédiatement.",
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
          "détail du stationnement potentiel (ou de l’endroit où s’arrêter)",
          "Distance camion→porte (même en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (porte + cabine)",
          "Liste + détail des objets lourds/fragiles (frigo, vitrine, électroménager)",
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
          "Le duo gagnant : 1 détail du stationnement et 1 détail de l’accès intérieur. Ajoutez ensuite les meubles “limites” (canapé, armoire) et vous évitez les devis trop optimistes.",
          "Conseil : gardez la checklist ci-dessous identique pour tous les déménageurs.",
        ],
        checklist: [
          "détail rue : endroit où le camion peut s’arrêter",
          "Distance camion→porte : court/moyen/long",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détails rapides des meubles volumineux + mention démontage souhaité (oui/non)",
        ],
      },
    ],
  },
  narbonne: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Narbonne, la meilleure façon d’obtenir des devis comparables est de documenter le trajet complet camion→porte. 3 détails bien choisies valent mieux que 10 lignes de description.",
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
          "Même si vous ne mesurez rien, une détail de la rue, une détail de l’entrée, et une détail de l’escalier/ascenseur donnent une image fidèle du temps de manutention.",
          "Ensuite, annoncez les exceptions : meubles lourds, passage étroit, portage long. C’est ça, la fiabilité.",
        ],
        checklist: [
          "détail stationnement / arrêt possible",
          "Distance camion→porte (même en pas)",
          "détail de l’entrée + largeur du passage",
          "détail escalier (bas + palier) ou ascenseur (porte + cabine)",
          "détail du passage le plus étroit + meubles “limites”",
        ],
      },
    ],
  },
  montauban: {
    appendBySectionId: {
      "volume-tri": [
        "Avant devis, pensez “zones hors pièces” : garage, cave, cellier. Ce sont des classiques des volumes sous-estimés. Une détail suffit souvent à éviter l’oubli.",
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
          "détails des zones hors pièces (garage/cave/cellier) si elles existent",
          "détail rue : stationnement possible + distance",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur (si immeuble)",
          "Liste des meubles volumineux + 1 détail groupée",
        ],
      },
    ],
  },
  albi: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Albi, l’accès intérieur (escaliers/paliers) peut être le point qui fait varier le temps. Une détail de l’escalier depuis le bas + un palier fiabilise le devis sur les gros meubles.",
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
          "À Albi, l’écart entre deux devis vient souvent d’un détail de passage : un palier tournant, une porte un peu étroite, un couloir long. Une détail rend ces points évidents.",
          "Le bon réflexe : montrer le “goulot d’étranglement” (porte/couloir/escalier) + annoncer les meubles qui posent question. Ça rend le devis réaliste.",
          "La checklist ci-dessous est conçue pour éviter les suppléments liés aux accès.",
        ],
        checklist: [
          "détail du passage le plus étroit (porte/couloir/escalier)",
          "détail escalier (bas + palier) ou ascenseur (cabine)",
          "détail rue : stationnement possible + distance",
          "Distance camion→porte : court/moyen/long",
          "détail des meubles “limites” (canapé, armoire, frigo)",
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
          "Le meilleur format : détails courtes et utiles (rue, entrée, escalier/ascenseur), puis 2–3 infos écrites (étage/ascenseur, distance camion→porte, meubles limites).",
          "Avec ça, vous comparez une prestation, pas un chiffre au hasard.",
        ],
        checklist: [
          "détail rue : où le camion peut s’arrêter",
          "Distance camion→porte (même en pas)",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "2–3 dates possibles + détail des meubles volumineux",
        ],
      },
    ],
  },
  sete: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Sète, le duo gagnant pour un devis fiable : détail du stationnement potentiel + détail de l’accès intérieur. Ensuite, le volume devient beaucoup plus simple à estimer correctement.",
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
          "détail stationnement / arrêt possible",
          "Distance camion→porte : court/moyen/long",
          "détail entrée + passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail objets “hors gabarit” (canapé, frigo, armoire)",
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
          "En maison, le détail qui surprend est souvent le chemin extérieur (portail, marches, allée). En immeuble, le détail qui surprend est l’escalier/palier. Montrez-le en détail, et le devis devient réaliste.",
          "Ensuite, mentionnez vos objets fragiles/lourds pour aligner la protection et l’assurance.",
        ],
        checklist: [
          "détail de la rue + stationnement possible",
          "Distance camion→porte (même en pas)",
          "détail du chemin extérieur (si maison) ou escalier/ascenseur (si immeuble)",
          "détail passage le plus étroit (porte/couloir)",
          "Liste des objets fragiles/lourds + détail groupée",
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
          "À Alès, un devis fiable se construit sur une base simple : accès + volume + date. Le volume se fiabilise avec les détails des pièces, l’accès avec 2–3 détails clés (rue, entrée, escalier/ascenseur).",
          "Si vous faites un tri, annoncez-le (et faites-le avant de demander des devis). C’est le levier le plus propre pour réduire la facture sans réduire la qualité.",
          "La checklist ci-dessous vous aide à donner les mêmes infos à tout le monde.",
        ],
        checklist: [
          "détails des pièces (3–4 détails par pièce)",
          "détail rue : stationnement possible + distance",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur (si applicable)",
          "Sac “à ne pas charger” + boîte essentiels 24h",
        ],
      },
    ],
  },
  colomiers: {
    appendBySectionId: {
      "acces-stationnement": [
        "À Colomiers, le repère le plus simple pour comparer des devis : distance camion→porte + détail du passage le plus étroit. Avec ça, les écarts deviennent compréhensibles (et évitables).",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Colomiers (et checklist locale)",
        paragraphs: [
          "À Colomiers, la plupart des écarts de devis viennent d’informations d’accès différentes (ou manquantes). Le bon réflexe est donc de standardiser : mêmes détails, mêmes infos, pour tous.",
          "Même sans mesures, distance camion→porte + détail du passage le plus étroit suffisent souvent à rendre le devis réaliste.",
          "Ensuite, annoncez vos meubles “limites” : mieux vaut 5 minutes de clarté que 50 minutes de blocage.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "détail du passage le plus étroit (porte/couloir)",
          "détail escalier (bas + palier) / ascenseur (cabine) si immeuble",
          "détail de la rue (où s’arrêter)",
          "détail des 2–3 meubles volumineux",
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
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (même en pas)",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier/ascenseur (si applicable)",
          "Liste + détail des meubles volumineux (et démontage souhaité oui/non)",
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
          "Le bon réflexe est de documenter le parcours en 3 détails : rue (où s’arrêter), entrée (passage), escalier/ascenseur (montée).",
          "Ajoutez ensuite les meubles volumineux “limites” et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "détail rue : stationnement/arrêt possible",
          "Distance camion→entrée (même approximative)",
          "détail entrée + passage le plus étroit",
          "détail ascenseur (cabine) ou escalier (bas + palier)",
          "détail des meubles volumineux + mention démontage souhaité",
        ],
      },
    ],
  },
  muret: {
    appendBySectionId: {
      "volume-tri": [
        "Si vous avez garage/cellier, incluez-les dans les détails : ces zones “hors pièces” sont souvent oubliées et font gonfler le volume réel.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Muret (et checklist locale)",
        paragraphs: [
          "À Muret, le volume réel dépend souvent des zones “hors pièces” : garage, cellier, abri, grenier. Si vous les incluez dans les détails, le devis devient beaucoup plus fiable.",
          "Côté accès, clarifiez simplement : stationnement possible, distance camion→porte, et présence de marches/escaliers. Ce sont les vrais facteurs de temps.",
          "La checklist ci-dessous suffit pour standardiser la demande.",
        ],
        checklist: [
          "détails garage/cellier/annexes (si existants)",
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail des meubles volumineux (canapé, armoire, frigo)",
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
          "détail accès : rue + entrée + escalier/ascenseur",
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
        "Si vous hésitez sur un escalier/palier, une détail vaut mieux qu’une estimation. Les déménageurs n’ont pas besoin de perfection : ils ont besoin de visibilité.",
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
          "À Rodez, la fiabilité vient de la visibilité. Une détail de l’escalier + un palier répond à 90% des questions sur les gros meubles.",
          "Ensuite, clarifiez le stationnement et la distance de portage. Le portage est du temps : c’est ce qui fait varier les devis.",
          "La checklist ci-dessous vous donne un dossier standard facile à partager.",
        ],
        checklist: [
          "détail escalier (bas + palier) ou ascenseur (cabine)",
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "Boîte “essentiels 24h” + sac perso “à ne pas charger”",
        ],
      },
    ],
  },
  millau: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le portage extérieur (allée, marches, portail) surprend souvent en maison. Une détail du chemin “porte → rue” rend le devis plus juste.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Millau (et checklist locale)",
        paragraphs: [
          "À Millau, si vous êtes en maison, le sujet qui surprend est souvent l’extérieur : marches, allée, portillon, distance jusqu’à la rue. Une détail du chemin “porte → rue” rend le devis plus juste.",
          "En immeuble, le sujet est le passage intérieur (porte/couloir/escalier). Une détail du point le plus étroit suffit souvent à fiabiliser.",
          "Objectif : éliminer l’incertitude sur l’accès, pour comparer des devis comparables.",
        ],
        checklist: [
          "détail du chemin extérieur (si maison) : porte → rue",
          "détail du passage le plus étroit (porte/couloir/escalier)",
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (même approximative)",
          "détail des meubles volumineux",
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
          "À Cahors, un devis fiable est un devis qui sait ce qu’il transporte (volume) et comment il le transporte (accès). Les deux se fiabilisent avec quelques détails bien choisies.",
          "Si vous avez des objets à forte valeur, mentionnez-le : ça aligne la protection/assurance avec vos attentes, et ça évite les incompréhensions.",
          "La checklist ci-dessous donne un standard “sans surprise”.",
        ],
        checklist: [
          "détails des pièces (volume) + objets fragiles/valeur",
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (même en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur (si applicable)",
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
          "Si vous avez des annexes (garage/cave), incluez-les dans les détails : c’est une source fréquente de sous-estimation.",
          "La checklist ci-dessous est un standard simple à appliquer.",
        ],
        checklist: [
          "Tri en 3 piles (don/vente, recycler, à déménager) avant demande",
          "détails des annexes (garage/cave/cellier) si existantes",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail des meubles volumineux + détail escalier/ascenseur si besoin",
        ],
      },
    ],
  },
  lunel: {
    appendBySectionId: {
      "acces-stationnement": [
        "Le duo gagnant pour fiabiliser un devis : détail de la rue (où s’arrêter) + détail de l’accès intérieur (entrée/escalier/ascenseur). Le reste devient plus simple à chiffrer.",
      ],
    },
    extraSections: [
      {
        id: "specificites-logement-acces",
        title: "Spécificités logement & accès à Lunel (et checklist locale)",
        paragraphs: [
          "À Lunel, la différence entre un devis “propre” et un devis “à corriger” vient souvent de l’accès. La bonne nouvelle : 2–3 détails bien prises suffisent à clarifier.",
          "Montrez où le camion peut s’arrêter, puis montrez le passage intérieur (entrée + escalier/ascenseur). Ajoutez ensuite les meubles volumineux.",
          "Objectif : donner la même base d’info à tout le monde pour comparer sans surprise.",
        ],
        checklist: [
          "détail rue : stationnement/arrêt possible",
          "Distance camion→porte (même approximative)",
          "détail entrée + passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail meubles volumineux + objets fragiles",
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
          "Si vous êtes en immeuble, la détail la plus utile est souvent l’escalier depuis le bas + un palier (ou l’ascenseur cabine porte ouverte). Si vous êtes en maison, c’est le chemin extérieur (portail, allée, marches).",
          "Objectif : donner la même base d’info à tout le monde pour comparer des devis comparables.",
        ],
        checklist: [
          "détail rue : où le camion peut s’arrêter",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail des 2–3 meubles “limites” (canapé, frigo, armoire)",
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
          "détail stationnement/arrêt possible",
          "Distance camion→porte (même approximative)",
          "détail du passage le plus étroit (porte/couloir)",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "Liste + détail groupée des objets lourds/fragiles",
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
          "détails des annexes (cave/garage/cellier) si existantes",
          "détail rue + endroit où s’arrêter",
          "Distance camion→porte",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux + passage le plus étroit",
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
          "Si vous êtes en immeuble, la détail escalier (bas + palier) est le meilleur “résumé” des contraintes. Si vous êtes en maison, décrivez le chemin porte → rue (portail/marches).",
          "Annoncez aussi les meubles “limites” : c’est souvent ce détail qui évite un blocage le jour J.",
        ],
        checklist: [
          "détail rue : stationnement possible + distance",
          "détail entrée + passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail chemin extérieur (si maison)",
          "détail + liste des meubles volumineux/fragiles",
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
          "Même sans mesure, une estimation “court/moyen/long” + 3 détails (rue, entrée, escalier/ascenseur) suffisent souvent à cadrer correctement.",
          "Ajoutez ensuite les objets lourds/fragiles pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Distance camion→porte (en pas si besoin)",
          "détail rue : arrêt possible",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier/ascenseur",
          "détail objets lourds/fragiles (groupée)",
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
          "À Châteauroux, les devis deviennent fiables quand vous standardisez deux choses : l’accès et le volume. Le volume via détails des pièces; l’accès via détails rue/entrée/escalier.",
          "Si vous avez des annexes (cave/garage), montrez-les : c’est une source fréquente de sous-estimation de volume.",
          "Le but n’est pas de tout prévoir, mais de rendre la logistique comparable entre déménageurs.",
        ],
        checklist: [
          "détails des pièces + annexes (si existantes)",
          "détail rue : stationnement possible",
          "Distance camion→porte",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
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
          "détail stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "détail passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail meubles volumineux + objets fragiles",
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
          "Si l’ascenseur est présent, une détail de cabine porte ouverte suffit souvent à éviter un devis trop optimiste pour les gros meubles.",
          "Ajoutez une détail de la rue (où s’arrêter) et vous avez une base solide.",
        ],
        checklist: [
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (en pas si besoin)",
          "détail entrée + passage le plus étroit",
          "détail ascenseur (cabine) / escalier (bas + palier)",
          "détail des 2–3 meubles volumineux",
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
          "À Saint‑Cyr‑sur‑Loire, la fiabilité se joue souvent sur la clarté : accès extérieur (maison) ou accès intérieur (immeuble). Dans les deux cas, une détail du chemin réel suffit à cadrer.",
          "Si vous êtes en maison, montrez portail/allée/marches. Si vous êtes en immeuble, montrez escalier/palier/ascenseur. C’est du temps de manutention.",
          "Ensuite, annoncez les objets fragiles/lourds pour aligner la méthode.",
        ],
        checklist: [
          "détail du chemin extérieur (si maison) : porte → rue",
          "détail escalier/ascenseur (si immeuble)",
          "détail rue : stationnement possible",
          "Distance camion→porte",
          "détail objets fragiles/lourds (groupée)",
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
          "Pour les meubles volumineux, une détail suffit souvent à prévenir un blocage.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "détail rue : arrêt possible",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux (canapé/armoire/frigo)",
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
          "Le bon réflexe : une détail du passage le plus étroit + une détail escalier/ascenseur. Ensuite, tout le monde chiffre la même méthode.",
          "Ajoutez la distance camion→porte et vous supprimez une grande partie de l’incertitude.",
        ],
        checklist: [
          "détail passage le plus étroit (porte/couloir/escalier)",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "détail objets fragiles/volumineux (groupée)",
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
          "Une détail de l’escalier depuis le bas + un palier est souvent le meilleur résumé des contraintes. Ajoutez l’entrée et la rue, et le chiffrage devient fiable.",
          "Pensez aussi aux annexes (cave/garage) si elles existent : elles changent le volume réel.",
        ],
        checklist: [
          "détails annexes (cave/garage) si existantes",
          "détail rue : arrêt possible",
          "Distance camion→porte",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
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
          "Même sans mesures, distance camion→porte + détail du passage le plus étroit suffisent à rendre le devis réaliste.",
          "Annoncez aussi les objets lourds/fragiles : ça change la méthode (protection, manutention).",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "détail rue : stationnement possible",
          "détail passage le plus étroit",
          "détail escalier/ascenseur",
          "Liste + détail objets lourds/fragiles",
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
          "détail rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux + objets fragiles",
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
          "Une détail de l’accès intérieur (escalier/ascenseur) + une détail du passage le plus étroit suffisent souvent à éviter un devis trop optimiste.",
          "Ajoutez vos meubles volumineux et tout le monde chiffre la même méthode.",
        ],
        checklist: [
          "détail rue : stationnement possible",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail des 2–3 meubles volumineux",
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
          "À Auxerre, l’accès est souvent le point qui fait varier un devis. Une détail de la rue + une détail de l’entrée + une détail escalier/ascenseur rend la logistique comparable.",
          "Si vous avez des marches, un couloir long, ou un passage étroit, montrez-le : c’est ce qui évite les surprises le jour J.",
          "Ensuite, comparez les devis sur la même prestation (emballage/démontage/assurance).",
        ],
        checklist: [
          "détail du stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "détail passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail objets fragiles/volumineux",
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
          "Le réflexe simple : distance camion→porte + détail de l’escalier/palier (ou ascenseur). Ajoutez ensuite les meubles volumineux.",
          "Avec ça, les devis deviennent comparables et les surprises diminuent fortement.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "détail rue : stationnement possible",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail meubles volumineux + objets fragiles",
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
          "Même une estimation simple + quelques détails (rue/entrée/escalier) suffisent à rendre le chiffrage réaliste.",
          "Ensuite, comparez aussi l’assurance et les prestations incluses pour éviter les mauvaises surprises.",
        ],
        checklist: [
          "détails des annexes (cave/garage) si existantes",
          "détail rue : arrêt possible",
          "Distance camion→porte",
          "détail escalier/ascenseur + palier",
          "détail du passage le plus étroit + meubles volumineux",
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
          "Si l’ascenseur est présent, une détail de cabine porte ouverte évite beaucoup de devis trop optimistes sur les gros meubles.",
          "Ajoutez ensuite la liste des objets lourds/fragiles pour aligner la méthode.",
        ],
        checklist: [
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail ascenseur (cabine) / escalier (bas + palier)",
          "Liste + détail objets lourds/fragiles",
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
          "Une détail du passage le plus étroit + une détail escalier/ascenseur rendent la méthode claire, surtout pour les meubles volumineux.",
          "Gardez la checklist identique pour tous les déménageurs : c’est la base d’une comparaison propre.",
        ],
        checklist: [
          "détail stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux (canapé, armoire, frigo)",
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
          "Le bon réflexe : décrire l’escalier depuis le bas + un palier (ou l’ascenseur cabine), et indiquer la distance camion→porte (même en pas).",
          "Objectif : rendre l’accès comparable entre devis, pour éviter les ajustements le jour J.",
        ],
        checklist: [
          "détail rue : stationnement/arrêt possible + distance visible",
          "Distance camion→porte (court/moyen/long ou en pas)",
          "détail entrée + passage le plus étroit (porte/couloir)",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail des 2–3 meubles “limites” (canapé, armoire, frigo)",
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
          "Une détail du passage le plus étroit + une détail escalier/ascenseur suffisent souvent à fiabiliser le chiffrage sur les gros meubles.",
          "Gardez la checklist identique pour tous les déménageurs : c’est la base d’une comparaison propre.",
        ],
        checklist: [
          "détail rue : endroit où s’arrêter",
          "Distance camion→porte (même approximative)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail objets lourds/fragiles (groupée)",
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
          "Le meilleur “résumé” est une détail de l’entrée + une détail de l’ascenseur (cabine porte ouverte) ou de l’escalier + un palier.",
          "Ajoutez vos meubles volumineux et le devis devient beaucoup plus fiable.",
        ],
        checklist: [
          "détail rue : arrêt possible + distance",
          "Distance camion→porte (en pas si besoin)",
          "détail entrée + couloir/porte la plus étroite",
          "détail ascenseur (cabine) / escalier (bas + palier)",
          "détail meubles volumineux + objets fragiles",
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
          "Même sans mesures, la distance camion→porte (en pas) + une détail de l’escalier/ascenseur rendent la manutention prévisible.",
          "C’est cette visibilité qui évite les surprises le jour J.",
        ],
        checklist: [
          "détail stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail objets “hors gabarit” (canapé, frigo, armoire)",
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
          "À Évreux, la plupart des écarts de devis viennent de l’accès : portage long, étage sans ascenseur, passage étroit. Une détail rend ces contraintes évidentes.",
          "Le bon réflexe : rue + entrée + escalier/ascenseur, puis la liste des meubles volumineux. C’est simple et très efficace.",
          "Objectif : que tout le monde chiffre la même logistique.",
        ],
        checklist: [
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail meubles volumineux + objets fragiles",
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
          "détail rue : où s’arrêter",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail des meubles “limites” + mention démontage souhaité (oui/non)",
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
          "Une estimation simple de la distance + une détail de l’escalier/palier suffisent à rendre le chiffrage réaliste.",
          "Ajoutez une détail des meubles volumineux, et vous évitez les devis trop optimistes.",
        ],
        checklist: [
          "détail stationnement/arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail meubles volumineux + objets fragiles",
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
          "À Lisieux, un devis fiable se gagne sur la clarté : accès + volume + date. L’accès se fiabilise avec 3 détails (rue, entrée, escalier/ascenseur).",
          "Si vous êtes en maison, montrez le chemin porte → rue (portail/marches). C’est souvent l’info oubliée qui change le temps.",
          "Gardez la checklist identique pour tous, et comparez sereinement.",
        ],
        checklist: [
          "détail du chemin extérieur (si maison)",
          "détail rue : arrêt possible + distance",
          "Distance camion→porte",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
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
          "Même sans mesures, distance camion→porte + détail du passage le plus étroit suffisent à cadrer correctement.",
          "Ajoutez vos objets fragiles/lourds pour aligner méthode et assurance.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "détail rue : stationnement possible",
          "détail passage le plus étroit (porte/couloir/escalier)",
          "détail escalier/ascenseur",
          "Liste + détail objets fragiles/lourds",
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
          "détail rue : arrêt possible + distance",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "2–3 dates possibles + détail meubles volumineux",
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
          "Le meilleur standard : distance camion→porte + détail escalier/palier (ou ascenseur) + détail du passage le plus étroit. Avec ça, les devis deviennent comparables.",
          "Annoncez aussi les meubles volumineux : c’est ce qui évite les blocages le jour J.",
        ],
        checklist: [
          "détail rue : stationnement/arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux + objets fragiles",
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
          "Même sans mesurer, une estimation en pas + 2–3 détails suffit à rendre le chiffrage réaliste.",
          "Gardez le même dossier pour tous les déménageurs pour éviter les écarts artificiels.",
        ],
        checklist: [
          "détail stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail des 2–3 meubles volumineux",
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
          "détail rue : endroit où s’arrêter",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + couloir/porte la plus étroite",
          "détail escalier/ascenseur + palier",
          "détail objets lourds/fragiles (groupée)",
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
          "détail stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail meubles volumineux (canapé, frigo, armoire)",
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
          "Même sans mesures, une détail du passage le plus étroit + une détail escalier/ascenseur suffisent souvent à cadrer correctement.",
          "Gardez la checklist identique pour tous pour comparer sereinement.",
        ],
        checklist: [
          "détail rue : arrêt possible + distance",
          "Distance camion→porte (court/moyen/long)",
          "détail passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux + objets fragiles",
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
          "Notez la distance camion→porte (même en pas) et décrivez l’escalier/palier. Ça suffit souvent à éviter les devis trop optimistes.",
          "Ajoutez une détail des meubles volumineux et vous sécurisez le devis.",
        ],
        checklist: [
          "Distance camion→porte (en pas)",
          "détail rue : stationnement possible",
          "détail escalier (bas + palier) / ascenseur (cabine)",
          "détail passage le plus étroit",
          "détail meubles volumineux",
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
          "À Liévin, un devis fiable vient d’un dossier standard : accès, volume, date. L’accès se fiabilise avec 3 détails (rue, entrée, escalier/ascenseur).",
          "Si vous avez un meuble “limite”, annoncez-le : c’est souvent ce détail qui évite un blocage le jour J.",
          "La checklist ci-dessous est un standard simple à réutiliser.",
        ],
        checklist: [
          "détail rue : arrêt possible",
          "Distance camion→porte (court/moyen/long)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur",
          "détail objets fragiles/lourds (groupée)",
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
          "Une détail du passage le plus étroit + une détail escalier/ascenseur suffisent souvent à rendre le devis réaliste.",
          "Ajoutez les meubles volumineux et vous évitez les devis “au feeling”.",
        ],
        checklist: [
          "détail rue : stationnement possible + distance",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux",
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
          "Le bon standard : distance camion→porte + détail escalier/palier + détail du passage le plus étroit. Ensuite, on compare enfin des devis comparables.",
          "Annoncez les objets fragiles/lourds pour aligner la méthode et l’assurance.",
        ],
        checklist: [
          "Distance camion→porte (court/moyen/long)",
          "détail rue : arrêt possible",
          "détail passage le plus étroit",
          "détail escalier/ascenseur",
          "Liste + détail objets fragiles/lourds",
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
          "Une détail de l’escalier + un palier et une détail du passage le plus étroit suffisent souvent à fiabiliser le chiffrage.",
          "Gardez la checklist identique pour tous pour comparer sereinement.",
        ],
        checklist: [
          "détail stationnement/arrêt possible",
          "Distance camion→porte (en pas)",
          "détail entrée + passage le plus étroit",
          "détail escalier/ascenseur + palier",
          "détail meubles volumineux + objets fragiles",
        ],
      },
    ],
  },
};


