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
  paris: {
    title: "Conseils locaux à Paris (arrondissements, accès, stationnement)",
    paragraphs: [
      "À Paris, le déménagement se joue à deux endroits : dans la rue (où le camion peut se poser) et dans l’immeuble (escaliers, ascenseur, couloirs). Si l’un des deux est flou, le devis devient “à la louche”… et c’est là que naissent les surprises.",
      "Premier réflexe : traitez l’adresse comme un mini-projet. Arrondissement, largeur de rue, portail/cour, double porte, code… ce sont de petits détails, mais ils décident du temps réel de chargement.",
      "Deuxième réflexe : ne sous-estimez pas les meubles “qui passent partout… sauf chez vous”. Canapé, frigo, armoire : si ça coince dans un angle d’escalier, ça coûte du temps (démontage, manutention, parfois équipement).",
      "Troisième réflexe : donnez une fenêtre de dates si possible. À Paris, la disponibilité varie beaucoup, et la flexibilité se transforme souvent en meilleurs créneaux (et meilleurs prix).",
      "Bref : un dossier clair = devis comparables. Moverz sert justement à donner les mêmes infos à tous les déménageurs, sans aller-retour interminable.",
    ],
    bullets: [
      "Objectif : des devis comparables (même volume + mêmes accès).",
      "Précisez : étage, ascenseur (oui/non + taille “petit/grand”), largeur d’escalier/palier si vous avez un doute.",
      "Notez la distance camion→porte (10 m vs 80 m, ce n’est pas le même monde).",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Rue devant l’entrée (place possible + contraintes visibles)",
      "Entrée d’immeuble + couloir/hall (largeur de passage)",
      "Escalier (depuis le bas) + un palier (pour les rotations)",
      "Ascenseur (si présent) : porte ouverte + cabine",
      "Meubles “risque” (canapé, frigo, armoire) près d’une porte/couloir pour l’échelle",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  toulouse: {
    title: "Conseils locaux à Toulouse (hypercentre, accès, timing)",
    paragraphs: [
      "À Toulouse, le bon déménagement, c’est celui où tout le monde est d’accord sur la réalité du terrain : accès, distance de portage, et timing. Le reste (cartons, m³) se gère beaucoup plus facilement.",
      "Si vous êtes en hypercentre ou dans une zone à circulation dense, le point clé est simple : où le camion s’arrête, et combien de mètres l’équipe marche. Ce “petit détail” peut faire varier le devis plus que le nombre de cartons.",
      "Côté immeuble, l’ennemi classique c’est l’escalier étroit + palier tournant. Si vous avez déjà eu un meuble coincé une fois, c’est exactement le moment de le dire (et de le montrer en photo).",
      "Côté planning, une fenêtre de 2–3 dates aide : certains créneaux partent vite, et la flexibilité augmente les chances d’avoir une équipe dispo (et sereine).",
      "Votre meilleur hack : un dossier propre, identique pour tous. Ça évite les devis “pas chers” mais incomplets, puis les ajustements.",
    ],
    bullets: [
      "Objectif : comparer des devis sur une base claire (volume + accès + date).",
      "Décrivez la rue : arrêt minute possible ? portage long ?",
      "Escalier/ascenseur : si doute sur le passage des gros meubles, dites-le tout de suite.",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Vue rue → entrée (pour visualiser stationnement/stop)",
      "Hall/porte/couloir (largeur)",
      "Escalier + palier (angle de rotation)",
      "Ascenseur (si présent) : porte + cabine",
      "Objets volumineux (canapé/frigo) + passage le plus étroit (porte/couloir)",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  bordeaux: {
    title: "Conseils locaux à Bordeaux (stationnement, immeubles, centre)",
    paragraphs: [
      "À Bordeaux, un devis fiable repose sur une chose : la logistique réelle, pas l’intuition. Deux adresses proches peuvent être très différentes selon le stationnement, la distance de portage, et l’accès à l’immeuble.",
      "Le point n°1 : où le camion se met. Si l’équipe doit faire 60 mètres de portage (ou gérer des obstacles), le temps grimpe — et le coût suit.",
      "Le point n°2 : les passages. Portes, couloirs, escaliers… l’immeuble décide souvent si un meuble passe “en une fois” ou s’il faut démonter, protéger davantage, ou adapter la méthode.",
      "Le point n°3 : la clarté. Plus votre dossier est précis, plus les devis sont comparables (et plus vous évitez le “oui oui ça passe” le jour J).",
      "En pratique : 2–3 photos des accès + 2 photos des gros meubles, et vous avez déjà un devis beaucoup plus sérieux.",
    ],
    bullets: [
      "Objectif : devis comparables (même volume + mêmes accès).",
      "Précisez la distance camion→porte et l’étage (même approximatif).",
      "Si vous avez une cour / entrée étroite : montrez-la, c’est souvent le point bloquant.",
      "Périodes souvent moins favorables : fins de mois · week-ends · été (juin–septembre).",
    ],
    photoChecklist: [
      "Rue devant l’entrée (stationnement possible + distance)",
      "Entrée/hall + largeur de passage",
      "Escalier (bas + palier) ou ascenseur (porte + cabine)",
      "Couloir/porte la plus étroite (celle qui fait peur)",
      "Meubles volumineux (canapé/frigo/armoire) : une photo suffit",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Été (juin–septembre)"],
  },
  lille: {
    title: "Conseils locaux à Lille (escaliers, portage, objets encombrants)",
    paragraphs: [
      "À Lille, le devis “qui tient” est celui qui connaît vos escaliers et votre portage. Ça a l’air bête, mais c’est souvent là que les déménagements se gagnent… ou se compliquent.",
      "Premier point : le parcours. Si le camion ne peut pas se rapprocher, chaque aller-retour devient du temps. Et le temps, c’est le vrai carburant d’un devis.",
      "Deuxième point : l’accès intérieur. Escaliers raides, paliers tournants, portes un peu étroites… ce n’est pas dramatique, mais il faut l’anticiper pour éviter les improvisations.",
      "Troisième point : les gros meubles. Si vous avez un canapé “un peu trop long” ou un frigo “un peu trop large”, dites-le. Les pros préfèrent 5 minutes de vérité maintenant que 50 minutes de blocage le jour J.",
      "Faites simple : mêmes infos pour tous, mêmes photos, et vous comparez des devis réellement comparables.",
    ],
    bullets: [
      "Objectif : devis comparables (volume + accès + date).",
      "Mesurez au moins 1 passage : largeur de porte/couloir ou d’escalier (même à l’œil).",
      "Signalez tout obstacle : cour, marches, long couloir, escalier en colimaçon.",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Point de stationnement possible + distance jusqu’à la porte",
      "Entrée + couloir/passage principal",
      "Escalier : bas + palier (pour voir l’angle)",
      "Ascenseur (si présent) : porte + cabine",
      "Meubles volumineux + passage le plus étroit (sur la même photo si possible)",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  nantes: {
    title: "Conseils locaux à Nantes (tram, accès, centre vs quartiers)",
    paragraphs: [
      "À Nantes, le bon devis est celui qui comprend votre trajet réel : stationnement, accès, et le “dernier kilomètre” jusqu’à la porte. C’est là que se cachent 80% des surprises.",
      "Si vous êtes en zone très urbaine, pensez “flux” : circulation, arrêt minute, et distance de portage. Un déménagement peut être rapide… ou se transformer en marathon si l’équipe doit marcher loin.",
      "Dans l’immeuble, le point clé est l’escalier/ascenseur. Une cabine petite ou un palier serré suffit à changer la méthode sur certains meubles.",
      "Côté organisation, une fenêtre de dates aide beaucoup : plus de flexibilité = plus d’options = plus de chances d’avoir une bonne équipe au bon moment.",
      "Le hack le plus simple : mêmes infos pour tous les déménageurs (accès + volume + date). Ensuite seulement, on compare le prix.",
    ],
    bullets: [
      "Objectif : devis comparables (même dossier pour tous).",
      "Précisez : distance camion→porte, étage, et si l’accès passe par une cour/portail.",
      "Listez les objets encombrants/fragiles dès le départ.",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Rue + endroit où le camion peut s’arrêter",
      "Entrée + couloir/hall",
      "Escalier (bas + palier) ou ascenseur (porte + cabine)",
      "Passage le plus étroit (porte/couloir) avec repère visuel",
      "Objets “risque” (canapé, frigo, vitrine) : photo groupée",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  strasbourg: {
    title: "Conseils locaux à Strasbourg (centre, accès, timing)",
    paragraphs: [
      "À Strasbourg, le devis fiable est celui qui connaît votre “scénario” : accès, distance de portage, et l’itinéraire du camion. Sans ça, on compare des chiffres… mais pas la même prestation.",
      "Premier point : le stationnement. Si le camion ne peut pas se rapprocher, le portage prend de la place dans le devis (et dans votre journée).",
      "Deuxième point : les passages. Entre escaliers, couloirs et portes, le risque n’est pas “ça ne passe jamais”, mais “ça passe… en 3 fois, avec démontage”. Autant l’anticiper.",
      "Troisième point : la date. Une fenêtre de 2–3 options, et vous augmentez vos chances d’avoir une équipe dispo et un planning propre.",
      "En bref : photos des accès + liste des gros meubles = devis plus justes et comparaison plus simple.",
    ],
    bullets: [
      "Objectif : devis comparables (même volume + mêmes accès).",
      "Précisez la distance camion→porte (et toute contrainte visible).",
      "Si vous avez un meuble “limite” : annoncez-le, c’est un gain de temps énorme.",
      "Périodes souvent moins favorables : fins de mois · week-ends · été (juin–septembre).",
    ],
    photoChecklist: [
      "Rue devant l’entrée (où s’arrêter)",
      "Entrée + largeur de passage (porte/couloir)",
      "Escalier (bas + palier) ou ascenseur (porte + cabine)",
      "Fenêtre/balcon côté rue (utile si une alternative type monte-meubles est possible)",
      "Objets volumineux : une photo groupée suffit",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Été (juin–septembre)"],
  },
  rennes: {
    title: "Conseils locaux à Rennes (accès, escaliers, comparaison de devis)",
    paragraphs: [
      "À Rennes, le devis “juste” dépend surtout de la réalité des accès. Une adresse peut paraître simple, mais un long couloir, une cour, ou un escalier tournant suffit à rallonger le temps de manutention.",
      "Le point le plus rentable : documenter le parcours camion→porte. Plus c’est clair, plus les devis sont comparables, et moins vous payez l’incertitude.",
      "Ensuite, l’immeuble : étage, ascenseur, largeur d’escalier. Même si vous n’avez pas de mesures, une photo de l’escalier et d’un palier raconte 90% de l’histoire.",
      "Côté organisation, une fenêtre de dates aide : ça évite de se bloquer sur un créneau “trop demandé” et ça augmente les options côté déménageurs.",
      "Conclusion : mêmes infos, mêmes photos, et on compare une prestation (pas juste un prix).",
    ],
    bullets: [
      "Objectif : devis comparables (même dossier pour tous).",
      "Précisez : étage, ascenseur (oui/non), et distance de portage.",
      "Annoncez les objets lourds/fragiles dès le départ.",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Rue + stationnement possible",
      "Entrée/hall + couloir principal",
      "Escalier (bas + palier) / ascenseur (porte + cabine)",
      "Passage le plus étroit (porte/couloir)",
      "Objets volumineux (canapé/frigo/armoire) : photo groupée",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  montpellier: {
    title: "Conseils locaux à Montpellier (centre, accès, stationnement)",
    paragraphs: [
      "À Montpellier, la différence entre un devis “propre” et un devis “à corriger” vient souvent du combo : stationnement + accès. Si le camion ne se rapproche pas, le portage devient vite le poste principal.",
      "Premier réflexe : clarifier la distance camion→porte et les obstacles (marches, couloir long, angle serré). C’est ça qui fait varier le temps réel de l’équipe.",
      "Deuxième réflexe : escaliers/ascenseur. Un ascenseur “petit” ou un escalier tournant change totalement le passage des gros meubles. Une photo suffit souvent à éviter un malentendu.",
      "Troisième réflexe : la date. Si vous pouvez proposer 2–3 options, vous donnez plus de marge pour trouver une bonne équipe et un créneau fluide.",
      "Résultat : des devis comparables, et moins de surprises le jour J.",
    ],
    bullets: [
      "Objectif : devis comparables (même volume + mêmes accès).",
      "Indiquez : étage, ascenseur (oui/non), distance de portage, et si l’entrée est facilement accessible.",
      "Si un meuble est “limite” : annoncez-le tout de suite (gain de temps énorme).",
      "Périodes souvent moins favorables : fins de mois · week-ends · été (juin–septembre).",
    ],
    photoChecklist: [
      "Rue devant l’entrée (stationnement possible + distance)",
      "Entrée + couloir/hall (largeur)",
      "Escalier (bas + palier) ou ascenseur (porte + cabine)",
      "Passage le plus étroit (porte/couloir) avec un repère",
      "Objets volumineux (canapé, frigo, armoire) : photo groupée",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Été (juin–septembre)"],
  },
  rouen: {
    title: "Conseils locaux à Rouen (centre, rues, portage)",
    paragraphs: [
      "À Rouen, le devis fiable dépend surtout du “dernier tronçon” : où le camion peut se mettre, et combien de portage il faut réellement faire. C’est souvent là que les écarts se créent.",
      "Si l’accès est un peu contraint (rue étroite, entrée en retrait, marches), dites-le tout de suite. Ce n’est pas un problème : c’est juste de la logistique à prévoir.",
      "Côté immeuble, le piège classique : palier tournant + gros meuble. Une photo de l’escalier et d’un palier évite les débats et les surprises.",
      "Côté organisation, une fenêtre de dates aide à obtenir des devis plus intéressants et une meilleure disponibilité.",
      "Le meilleur moyen de comparer : mêmes infos pour tous, mêmes photos, même base.",
    ],
    bullets: [
      "Objectif : devis comparables (volume + accès + date).",
      "Précisez la distance camion→porte et l’étage (même approximatif).",
      "Listez les meubles “à risque” (canapé, armoire, frigo, piano).",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Rue + stationnement possible + distance jusqu’à l’entrée",
      "Entrée + couloir/hall (largeur)",
      "Escalier (bas + palier) / ascenseur (porte + cabine)",
      "Marches/obstacles sur le chemin (si portage)",
      "Meubles volumineux : photo groupée",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
  },
  grenoble: {
    title: "Conseils locaux à Grenoble (accès, étages, organisation)",
    paragraphs: [
      "À Grenoble, un devis fiable vient d’un dossier précis : accès, étages, et contraintes réelles. Quand ces infos sont claires, les prix deviennent comparables et la prestation aussi.",
      "Le point n°1 : le stationnement et la distance de portage. Si le camion ne se rapproche pas, chaque aller-retour compte. Dites-le tout de suite, même si c’est “juste un peu loin”.",
      "Le point n°2 : l’immeuble. Escaliers, ascenseur, paliers : c’est ce qui décide si un gros meuble passe facilement ou nécessite démontage/organisation spécifique.",
      "Le point n°3 : la fenêtre de dates. Plus vous êtes flexible, plus vous avez de chances d’obtenir une équipe disponible et un planning propre.",
      "En résumé : 2–3 photos des accès + la liste des gros meubles, et vous gagnez déjà beaucoup en fiabilité de devis.",
    ],
    bullets: [
      "Objectif : devis comparables (même volume + mêmes accès).",
      "Précisez : étage, ascenseur (oui/non), distance camion→porte.",
      "Annoncez les objets lourds/fragiles : c’est ce qui change la méthode.",
      "Périodes souvent moins favorables : fins de mois · week-ends · vacances scolaires.",
    ],
    photoChecklist: [
      "Rue + endroit où s’arrêter (distance visible)",
      "Entrée + couloir/hall (largeur)",
      "Escalier (bas + palier) / ascenseur (porte + cabine)",
      "Passage le plus étroit (porte/couloir)",
      "Objets volumineux/lourds : photo groupée",
    ],
    avoidPeriods: ["Fin de mois", "Week-ends", "Vacances scolaires"],
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
  return `Mini-mission avant d’envoyer vos photos : notez l’étage, la distance camion→porte, et tout “truc relou” (ruelle, couloir étroit, absence d’ascenseur). À ${cityName} comme ailleurs, ces détails évitent les surprises le jour J.`;
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
    "Donnez la même info à tout le monde : accès, stationnement, date (ou fenêtre de dates).",
    "2–3 photos suffisent souvent à fiabiliser le volume (et éviter une visite technique).",
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

  return {
    title: `Conseils locaux à ${cityName} : ${focusLabel(focus)}`,
    paragraphs,
    bullets,
    photoChecklist,
    avoidPeriods,
  };
}


