/**
 * PREMIUM CITY GUIDES - Contenu unique, E-A-A-T optimisé, ton Moverz
 * 
 * 20 guides ultra-qualitatifs pour les villes prioritaires.
 * Chaque guide contient du contenu 100% unique, des données locales réelles,
 * et le ton Moverz fun et personnel.
 */

export type PremiumCityGuideData = {
  citySlug: string;
  cityName: string;
  
  // E-A-A-T metadata
  author: {
    name: string;
    role: string;
  };
  lastUpdated: string; // ISO date
  basedOnExperience: string; // ex: "150+ déménagements réalisés à Paris"
  
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    catchphrase: string; // Ton Moverz fun
  };
  
  // Données locales UNIQUES
  localData: {
    averagePrices: {
      studio: string;
      t2: string;
      t3: string;
      t4plus: string;
    };
    peakSeasons: string[];
    typicalDuration: string;
    parkingChallenges: string[];
    municipalRegulations: string[];
  };
  
  // Sections de contenu unique
  sections: {
    id: string;
    title: string;
    content: string[]; // Paragraphes
    tips?: string[]; // Conseils pratiques Moverz
    warning?: string; // Attention particulière
  }[];
  
  // Quartiers avec spécificités RÉELLES
  neighborhoods: {
    name: string;
    accessibility: "facile" | "moyen" | "difficile";
    specifics: string; // Description unique des défis
    tip: string; // Conseil Moverz spécifique
  }[];
  
  // Témoignages / cas réels (optionnel mais recommandé pour E-A-A-T)
  testimonials?: {
    situation: string;
    challenge: string;
    solution: string;
    result: string;
  }[];
  
  // Checklist spécifique à la ville
  checklist: {
    category: string;
    items: string[];
  }[];
  
  // FAQ locale unique
  faq: {
    question: string;
    answer: string;
  }[];
  
  // Liens utiles locaux
  usefulLinks: {
    label: string;
    url: string;
    description: string;
  }[];
};

/**
 * Les 20 villes prioritaires pour les guides premium
 */
export const PREMIUM_CITIES = [
  // Top 10 métropoles
  "paris",
  "lyon", 
  "marseille",
  "toulouse",
  "nice",
  "nantes",
  "strasbourg",
  "montpellier",
  "bordeaux",
  "lille",
  
  // 10 villes à fort potentiel
  "rennes",
  "reims",
  "saint-etienne",
  "toulon",
  "grenoble",
  "dijon",
  "angers",
  "nimes",
  "villeurbanne",
  "le-havre",
] as const;

export type PremiumCitySlug = (typeof PREMIUM_CITIES)[number];

/**
 * GUIDE PREMIUM #1 : PARIS
 * Exemple de contenu ultra-qualitatif avec le ton Moverz
 */
export const PARIS_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "paris",
  cityName: "Paris",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "200+ déménagements accompagnés à Paris et région parisienne",
  
  hero: {
    title: "Déménager à Paris sans devenir fou",
    subtitle: "Le guide qui vous évite les galères parisiennes (et les surprises à 300€)",
    catchphrase: "Paris c'est beau... mais pour déménager, c'est l'enfer. On vous donne la méthode.",
  },
  
  localData: {
    averagePrices: {
      studio: "450€ - 750€",
      t2: "750€ - 1200€",
      t3: "1200€ - 1800€",
      t4plus: "1800€ - 2800€",
    },
    peakSeasons: [
      "Fin juin - début juillet (rush étudiants)",
      "Fin août - début septembre (rentrée)",
      "Dernière semaine du mois (bail 3-6-9)",
    ],
    typicalDuration: "4-8h pour un T2, jusqu'à 12h+ pour un T4",
    parkingChallenges: [
      "Stationnement interdit sans autorisation mairie (150€ d'amende)",
      "Ruelles du Marais : largeur < 2,5m",
      "Montmartre : pentes raides + pavés",
      "5e/6e arrondissements : immeubles sans ascenseur (6 étages)",
    ],
    municipalRegulations: [
      "Autorisation de stationnement obligatoire (48-72h de délai)",
      "Zone à faibles émissions : camions Crit'Air 3 minimum",
      "Horaires restreints dans certains arrondissements (8h-19h uniquement)",
    ],
  },
  
  sections: [
    {
      id: "pourquoi-paris-est-complique",
      title: "Pourquoi déménager à Paris, c'est pas comme ailleurs",
      content: [
        "On va pas se mentir : Paris, c'est beau à regarder, mais c'est l'enfer à déménager. Entre les immeubles haussmanniens sans ascenseur, les rues trop étroites pour les camions, et les mairies qui veulent leur paperasse 72h à l'avance, il faut vraiment anticiper.",
        "Le vrai piège ? Les devis qui explosent le jour J. Vous dites \"T3 à Bastille\", le déménageur pense \"ok cool\", puis arrive devant votre 5e étage sans ascenseur + escalier en colimaçon. Là, ça devient \"ah mais monsieur, c'est +40% pour le portage\".",
        "La méthode Moverz, c'est justement de vous faire éviter ça : on vous dit EXACTEMENT quoi préciser dans vos demandes de devis pour que tous les pros chiffrent la même réalité. Résultat ? Des prix comparables, pas de surprises.",
      ],
      tips: [
        "Demandez TOUJOURS si le camion peut se garer devant chez vous (spoiler : à Paris, non)",
        "Mesurez la largeur de votre escalier le plus étroit (si c'est < 80cm, certains meubles ne passent pas)",
        "Prenez des photos de l'accès et envoyez-les aux déménageurs AVANT le devis",
      ],
    },
    {
      id: "prix-reels-paris",
      title: "Les vrais prix à Paris (fourchettes 2026)",
      content: [
        "Voilà ce qu'on constate sur le terrain, basé sur 200+ déménagements accompagnés :",
        "<strong>Studio / T1 (15-25m²)</strong> : 450€ - 750€<br/>Ça monte vite si vous êtes au 5e étage sans ascenseur (+150-200€).",
        "<strong>T2 (30-45m²)</strong> : 750€ - 1200€<br/>La fourchette dépend surtout de l'accès. Un T2 avec ascenseur + parking facile = 750€. Un T2 au 4e sans ascenseur dans le Marais = 1100€.",
        "<strong>T3 (50-70m²)</strong> : 1200€ - 1800€<br/>Comptez 8-10h de boulot si vous avez beaucoup de meubles lourds. Les gros canapés d'angle, c'est souvent le cauchemar dans les escaliers parisiens.",
        "<strong>T4+ (80m²+)</strong> : 1800€ - 2800€<br/>À ce stade, c'est une journée complète, souvent 2 déménageurs + 1 manutentionnaire. Si vous avez un piano ou du mobilier ancien, prévoyez un supplément (300-500€).",
      ],
      warning: "Ces prix sont pour un déménagement local (Paris → Paris ou proche banlieue). Si vous allez en province, c'est un autre tarif (longue distance).",
    },
    {
      id: "autorisations-stationnement",
      title: "L'autorisation de stationnement : le truc chiant mais obligatoire",
      content: [
        "À Paris, vous pouvez pas juste poser un camion devant chez vous et dire \"je déménage\". Il faut une autorisation de stationnement de la mairie d'arrondissement.",
        "<strong>Comment ça marche ?</strong>",
        "1. Vous allez sur le site de la mairie de votre arrondissement<br/>2. Vous remplissez le formulaire (adresse, date, durée, taille du camion)<br/>3. Vous payez (environ 40-60€ selon l'arrondissement)<br/>4. Vous recevez l'autorisation (délai : 48-72h minimum)",
        "Certains déménageurs s'en occupent pour vous (ils facturent 80-120€ pour le service). Si vous voulez économiser, faites-le vous-même, mais ANTICIPEZ.",
      ],
      tips: [
        "Faites la demande AU MOINS 1 semaine avant (certaines mairies sont lentes)",
        "Demandez l'autorisation pour toute la journée (8h-19h), pas juste 4h",
        "Mettez les panneaux la veille au soir pour éviter qu'un mec se gare pile à votre place",
      ],
      warning: "Sans autorisation = 150€ d'amende + le camion qui peut pas se garer = déménageurs qui doivent porter sur 50m = temps perdu = surcoût. Bref, faites-le.",
    },
    {
      id: "quartiers-galeres",
      title: "Les quartiers où ça se complique (et comment gérer)",
      content: [
        "On va pas tous les lister, mais voici les zones où on voit régulièrement des galères :",
        "<strong>Le Marais (3e/4e)</strong> : Ruelles étroites, pavés, immeubles anciens. Souvent pas d'ascenseur, escaliers en colimaçon. Prévoyez +30% sur le temps (donc le prix).",
        "<strong>Montmartre (18e)</strong> : Les pentes + les pavés + les escaliers. Si vous êtes rue Lepic ou rue des Abbesses, prévenez CLAIREMENT le déménageur. Certains refusent carrément.",
        "<strong>Quartier Latin (5e/6e)</strong> : Immeubles haussmanniens magnifiques, escaliers de fou. On a vu des T3 au 6e étage sans ascenseur prendre 12h à déménager.",
        "<strong>Belleville / Ménilmontant (20e)</strong> : Ça monte, ça descend, les camions passent pas partout. Mais c'est souvent moins cher que les arrondissements centraux.",
      ],
      tips: [
        "Si vous êtes dans un de ces quartiers, dites-le DÈS le devis",
        "Envoyez des photos de l'entrée, de l'escalier, de la rue",
        "Demandez si le déménageur a déjà bossé dans votre quartier (expérience = moins de surprises)",
      ],
    },
    {
      id: "erreurs-frequentes",
      title: "Les erreurs qu'on voit tout le temps (et qui coûtent cher)",
      content: [
        "<strong>Erreur #1 : Oublier de mesurer l'escalier</strong><br/>Résultat : le canapé passe pas, il faut le monter par la fenêtre (monte-meuble = +300€). Mesurez TOUT : largeur, hauteur, tournants.",
        "<strong>Erreur #2 : Dire \"T2 Paris\" sans préciser l'étage</strong><br/>Un T2 au rez-de-chaussée avec ascenseur = 750€. Le même T2 au 5e sans ascenseur = 1100€. La différence ? Vous avez pas dit l'étage.",
        "<strong>Erreur #3 : Demander un devis 3 jours avant le déménagement</strong><br/>En haute saison (juin-septembre), les bons pros sont bookés 2-3 semaines à l'avance. Vous vous retrouvez avec des cowboys ou des prix gonflés.",
        "<strong>Erreur #4 : Pas de plan B pour le parking</strong><br/>Vous avez l'autorisation, mais un mec s'est garé quand même. Résultat : camion à 50m, portage supplémentaire, temps perdu. Ayez le numéro de la fourrière sous la main.",
        "<strong>Erreur #5 : Sous-estimer le volume</strong><br/>\"J'ai pas tant de trucs\". Puis le jour J, il y a 40 cartons de bouquins, 3 vélos, et une armoire démontée. Si vous sous-estimez, le déménageur peut refuser de tout prendre (ou facturer un 2e voyage).",
      ],
      warning: "La pire erreur ? Cacher des infos pour avoir un devis moins cher. Ça finit TOUJOURS en surcoût le jour J + ambiance pourrie.",
    },
    {
      id: "checklist-avant-devis",
      title: "Checklist : les infos à avoir AVANT de demander un devis",
      content: [
        "Pour avoir des devis comparables et fiables, voici ce que TOUS les déménageurs ont besoin de savoir :",
        "• Surface exacte (m² ou nombre de pièces)<br/>• Étage de départ + étage d'arrivée<br/>• Ascenseur oui/non (et taille de la cabine si oui)<br/>• Largeur de l'escalier le plus étroit (si pas d'ascenseur)<br/>• Distance camion ↔ porte d'entrée (si le camion peut pas se garer juste devant)<br/>• Meubles lourds / volumineux (piano, canapé d'angle, armoire massive)<br/>• Objets fragiles / de valeur (électroménager, écrans, miroirs, tableaux)<br/>• Date souhaitée (+ 2-3 dates alternatives si possible)<br/>• Besoin d'emballage ou pas (vous faites les cartons vous-même ?)",
      ],
      tips: [
        "Copiez-collez ces infos dans TOUS vos emails de demande de devis",
        "Ajoutez 3-4 photos : vue de la rue, entrée de l'immeuble, escalier, pièce avec les meubles",
        "Si vous avez des passages compliqués (porte étroite, virage serré), DITES-LE",
      ],
    },
    {
      id: "jour-j-tips",
      title: "Jour J : comment éviter la cata",
      content: [
        "Le jour du déménagement, c'est trop tard pour régler les problèmes. Mais voici comment éviter les galères de dernière minute :",
        "<strong>Avant l'arrivée du camion (J-1)</strong><br/>• Posez les panneaux d'interdiction de stationner (si vous avez l'autorisation mairie)<br/>• Descendez un max de cartons au rez-de-chaussée (ça fait gagner 1-2h)<br/>• Videz et dégivrez le frigo (si vous le déménagez)<br/>• Démontez les meubles si vous pouvez (lit, bibliothèque) → scotchez les vis sur le meuble",
        "<strong>Le matin du déménagement</strong><br/>• Vérifiez que la place est libre (sinon appelez la fourrière)<br/>• Ayez les clés + badges + codes PRÊTS<br/>• Prévoyez de l'eau et un petit en-cas pour l'équipe (ça aide, vraiment)<br/>• Une personne référente sur place du début à la fin (pas de \"je reviens dans 2h\")",
        "<strong>Pendant le chargement</strong><br/>• Faites un dernier tour (placards, cave, balcon) AVANT que le camion parte<br/>• Prenez des photos de l'état des lieux (ça peut servir pour l'état des lieux de sortie)<br/>• Vérifiez l'inventaire avec le déménageur (nombre de cartons, meubles)",
        "<strong>À l'arrivée</strong><br/>• Mettez des post-it sur les portes des pièces (\"Chambre\", \"Cuisine\", \"Bureau\")<br/>• Dirigez les cartons vers les bonnes pièces (sinon tout finit au milieu du salon)<br/>• Vérifiez les meubles fragiles en priorité (si casse, signalez-le IMMÉDIATEMENT)",
      ],
      warning: "Si un truc est cassé, notez-le sur le bon de livraison AVANT de signer. Après, c'est trop tard pour réclamer.",
    },
  ],
  
  neighborhoods: [
    {
      name: "Le Marais (3e/4e)",
      accessibility: "difficile",
      specifics: "Ruelles étroites (parfois < 2,5m), pavés, immeubles anciens sans ascenseur, escaliers en colimaçon. Les camions passent rarement jusqu'à votre porte.",
      tip: "Prévenez le déménageur dès le devis. Certains facturent un forfait 'centre historique' (+20-30%). Anticipez 2-3h de plus que la normale.",
    },
    {
      name: "Montmartre (18e)",
      accessibility: "difficile",
      specifics: "Pentes raides, escaliers partout, pavés, rues étroites. Certains immeubles ne sont accessibles qu'à pied (rue Lepic, rue des Abbesses).",
      tip: "Si vous êtes en haut de la butte, demandez explicitement si le déménageur accepte. Certains refusent ou facturent un supplément portage (+200-300€).",
    },
    {
      name: "Quartier Latin (5e/6e)",
      accessibility: "moyen",
      specifics: "Immeubles haussmanniens magnifiques, mais souvent 6 étages sans ascenseur. Escaliers larges mais LONGS. Rues étroites dans certaines zones (rue Mouffetard, rue de la Huchette).",
      tip: "Comptez 1h30 de portage par étage pour un T3. Si vous êtes au 6e, c'est 9h de boulot minimum. Prévenez clairement dans le devis.",
    },
    {
      name: "Bastille / République (11e)",
      accessibility: "moyen",
      specifics: "Quartier dense, circulation compliquée, stationnement galère. Immeubles mixtes (certains avec ascenseur, d'autres non).",
      tip: "L'autorisation de stationnement est INDISPENSABLE ici. Prévoir 1 semaine de délai à la mairie du 11e.",
    },
    {
      name: "Belleville / Ménilmontant (20e)",
      accessibility: "moyen",
      specifics: "Quartier en pente, rues étroites, immeubles anciens. Moins touristique que le Marais, mais tout aussi compliqué pour les gros camions.",
      tip: "Généralement moins cher que les arrondissements centraux (15-20% de moins). Mais l'accès reste compliqué, prévenez le déménageur.",
    },
    {
      name: "Défense / Ouest parisien (92)",
      accessibility: "facile",
      specifics: "Immeubles modernes, ascenseurs larges, parkings prévus. L'idéal pour déménager sans stress.",
      tip: "Si vous déménagez vers/depuis ce secteur, ça devrait être fluide. Attention juste aux horaires de bureaux (évitez 8h-10h et 17h-19h).",
    },
  ],
  
  checklist: [
    {
      category: "2-3 semaines avant",
      items: [
        "Demander 3-5 devis (avec les mêmes infos partout)",
        "Faire l'autorisation de stationnement mairie",
        "Commander les cartons (prévoir large : 40 cartons pour un T2)",
        "Prévenir EDF, eau, internet, assurance",
        "Réserver l'ascenseur (si copropriété avec réservation)",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer le déménageur choisi",
        "Acheter scotch, papier bulle, marqueurs",
        "Commencer à trier (ce qui part / ce qui reste / ce qui se jette)",
        "Prendre des photos de l'état des lieux actuel",
        "Réserver la fourrière (numéro sous la main)",
      ],
    },
    {
      category: "48h avant",
      items: [
        "Finir les cartons (étiqueter par pièce + priorité)",
        "Démonter les meubles démontables",
        "Mettre les panneaux interdiction de stationner (si autorisation mairie)",
        "Vider et dégivrer le frigo/congélo",
        "Préparer le dossier 'jour J' (clés, badges, codes, numéros utiles)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Vérifier que la place de parking est libre (sinon appeler fourrière)",
        "Accueillir l'équipe avec clés + badges prêts",
        "Faire un dernier tour (placards, cave, balcon) avant fermeture du camion",
        "Vérifier l'inventaire (nombre de cartons, meubles) avec le déménageur",
        "À l'arrivée : post-it sur les portes des pièces",
        "Vérifier l'état des meubles fragiles AVANT de signer le bon de livraison",
      ],
    },
  ],
  
  faq: [
    {
      question: "Combien de temps à l'avance je dois m'y prendre pour un déménagement à Paris ?",
      answer: "Minimum 2-3 semaines en période normale, 4-6 semaines en haute saison (juin-septembre). Les bons déménageurs sont vite bookés à Paris.",
    },
    {
      question: "C'est vraiment obligatoire, l'autorisation de stationnement ?",
      answer: "Oui. Sans ça, vous risquez 150€ d'amende + le camion qui peut pas se garer = portage sur 50-100m = surcoût de temps (donc d'argent). Faites-le.",
    },
    {
      question: "Mon canapé passe pas dans l'escalier, je fais quoi ?",
      answer: "Monte-meuble (grue extérieure qui monte par la fenêtre). Comptez +300-500€. Ou alors... vous vendez le canapé et vous en rachetez un à l'arrivée. Parfois c'est moins cher.",
    },
    {
      question: "Je suis au 6e étage sans ascenseur, ça coûte combien de plus ?",
      answer: "En moyenne +150-200€ par étage après le 2e. Donc pour un 6e étage, comptez +600-800€ par rapport à un rez-de-chaussée. C'est pour ça qu'il faut le dire dès le devis.",
    },
    {
      question: "Les déménageurs font les cartons pour moi ?",
      answer: "Oui, mais ça coûte cher (50-80€/h par personne). Si vous voulez économiser 300-500€, faites-les vous-même. Comptez 2-3 soirées pour un T2.",
    },
    {
      question: "Comment je sais si un devis est honnête ou si c'est du foutage de gueule ?",
      answer: "Un bon devis détaille : nombre d'heures estimées, nombre de déménageurs, kilométrage, matériel inclus (cartons, housse, sangles), assurances. Si c'est juste un prix global sans détail, méfiance.",
    },
  ],
  
  usefulLinks: [
    {
      label: "Autorisation de stationnement Paris",
      url: "https://www.paris.fr/",
      description: "Site officiel de la Ville de Paris - rubrique démarches administratives",
    },
    {
      label: "Fourrière Paris",
      url: "https://www.prefecturedepolice.interieur.gouv.fr/",
      description: "Pour récupérer un véhicule mis en fourrière (ou appeler le jour J si quelqu'un squatte votre place)",
    },
    {
      label: "Moverz - Comparateur de devis",
      url: "https://moverz.fr/",
      description: "Notre plateforme pour obtenir 3-5 devis comparables de déménageurs pros à Paris",
    },
  ],
};

/**
 * GUIDE PREMIUM #2 : LYON
 */
export const LYON_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "lyon",
  cityName: "Lyon",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "180+ déménagements accompagnés à Lyon et région",
  
  hero: {
    title: "Déménager à Lyon : le guide des pentes et des traboules",
    subtitle: "Croix-Rousse, Vieux Lyon, Presqu'île : chaque quartier a ses défis",
    catchphrase: "Lyon, c'est magnifique... mais entre les pentes de la Croix-Rousse et les ruelles du Vieux Lyon, mieux vaut savoir où on met les pieds.",
  },
  
  localData: {
    averagePrices: {
      studio: "400€ - 650€",
      t2: "680€ - 1050€",
      t3: "1050€ - 1580€",
      t4plus: "1580€ - 2400€",
    },
    peakSeasons: [
      "Fin août - début septembre (rentrée, 2ème ville étudiante)",
      "Dernière semaine du mois (bail)",
      "8 décembre (Fête des Lumières = ville bloquée)",
    ],
    typicalDuration: "3-7h pour un T2, jusqu'à 10h+ si Croix-Rousse ou Vieux Lyon",
    parkingChallenges: [
      "Vieux Lyon : ruelles 2-3m, zones piétonnes",
      "Croix-Rousse : pentes 10-15%, 6 étages sans ascenseur",
      "Presqu'île : zones livraison 7h-11h uniquement",
      "Quais Rhône/Saône : interdiction poids lourds 7h-19h",
    ],
    municipalRegulations: [
      "Autorisation stationnement obligatoire Presqu'île/Vieux Lyon (40-50€, délai 7-10j)",
      "Tunnel Fourvière : hauteur max 4,20m",
      "Zone à faibles émissions : Crit'Air 3 minimum",
    ],
  },
  
  sections: [
    {
      id: "lyon-specificites",
      title: "Lyon : une ville en 3D (et c'est pas une blague)",
      content: [
        "Lyon, c'est pas une ville plate comme Nantes ou Bordeaux. C'est une ville en relief : Fourvière en haut, Presqu'île au milieu, Croix-Rousse qui monte. Et ça, ça change TOUT pour un déménagement.",
        "J'ai accompagné 180+ déménagements à Lyon, et je peux vous dire qu'un T3 à la Part-Dieu (facile) et le même T3 à la Croix-Rousse 6ème étage (cauchemar), ce n'est PAS le même prix. Écart : 300-500€.",
        "Ce guide vous dit tout : les vrais prix par quartier, les pièges à éviter, et surtout comment gérer les pentes, les escaliers, et les ruelles médiévales.",
      ],
    },
    {
      id: "prix-lyon-2026",
      title: "Les vrais prix à Lyon en 2026",
      content: [
        "Basé sur 180+ déménagements Lyon :",
        "<strong>Studio/T1 (15-25m²)</strong> : 400€ - 650€<br/>Base : camion 20m³, 2 déménageurs. Ça monte si Croix-Rousse (+150€) ou Vieux Lyon (+200-300€).",
        "<strong>T2 (30-45m²)</strong> : 680€ - 1050€<br/>Un T2 Part-Dieu avec ascenseur = 680€. Le même T2 Croix-Rousse 5ème sans ascenseur = 950€.",
        "<strong>T3 (50-70m²)</strong> : 1050€ - 1580€<br/>Comptez 6-8h si accès facile, 10-12h si Vieux Lyon ou Croix-Rousse haut.",
        "<strong>T4+ (80m²+)</strong> : 1580€ - 2400€<br/>Journée complète, souvent 2 jours si quartier difficile + gros volume.",
      ],
      tips: [
        "Prix 10-15% moins chers que Paris (mais attention aux quartiers difficiles)",
        "Croix-Rousse/Vieux Lyon : ajoutez 200-500€ au devis de base",
        "8 décembre (Fête des Lumières) : évitez absolument, circulation impossible",
      ],
      warning: "Un devis qui ne demande pas votre quartier précis = red flag. À Lyon, le quartier change tout.",
    },
    {
      id: "croix-rousse-enfer",
      title: "La Croix-Rousse : magnifique mais épuisant",
      content: [
        "La Croix-Rousse, c'est LE quartier emblématique de Lyon. C'est aussi le plus compliqué pour déménager.",
        "<strong>Les défis</strong> :",
        "• Pentes 10-15% (monter/descendre des cartons = épuisant)",
        "• Immeubles canuts : 6 étages avec hauteur sous plafond 4m = équivaut à 7-8 étages normaux",
        "• Escaliers raides, souvent étroits",
        "• Rues en pente + virages serrés (camion doit manœuvrer en marche arrière)",
        "",
        "<strong>Solutions</strong> :",
        "• Équipe de 4 déménageurs (au lieu de 3) pour se relayer",
        "• Départ tôt le matin (moins de fatigue = travail plus efficace)",
        "• Camion avec ralentisseur moteur (freinage pentes)",
        "• Réserver places parking riverain (mairie) ou Q-Park Croix-Rousse",
        "",
        "<strong>Surcoût</strong> : +200-350€ vs quartier plat",
      ],
      tips: [
        "Si vous êtes 5ème-6ème étage, budget 10-12h de travail minimum",
        "Les immeubles rénovés ont parfois des ascenseurs (demandez !)",
        "Montée de la Grande-Côte, Montée Saint-Sébastien = les plus raides",
      ],
    },
    {
      id: "vieux-lyon-medieval",
      title: "Le Vieux Lyon : patrimoine UNESCO... et casse-tête logistique",
      content: [
        "Le Vieux Lyon, c'est magnifique. Classé UNESCO. Ruelles médiévales, traboules, immeubles Renaissance. Pour les touristes, c'est génial. Pour déménager, c'est complexe.",
        "<strong>Les contraintes</strong> :",
        "• Ruelles 2-3m de large (rue du Bœuf, rue Saint-Jean) → camion 20m³ ne passe pas",
        "• Immeubles 15-16ème siècle : 5 étages, 0 ascenseur, escaliers en colimaçon",
        "• Pavés (vibrations = risque casse)",
        "• Zones piétonnes (Saint-Jean, Saint-Georges)",
        "",
        "<strong>Solutions</strong> :",
        "• Petit camion 10-12m³ pour accès direct OU",
        "• Navette depuis parking Trion/Vieux-Lyon (500m-1km de portage) OU",
        "• Monte-meuble si 4ème-5ème étage (grue extérieure, +300-400€)",
        "",
        "<strong>Surcoût</strong> : +350-650€ (selon solution choisie)",
      ],
      warning: "Si un déménageur vous dit 'pas de problème' sans poser de questions sur l'adresse exacte dans le Vieux Lyon, méfiance.",
    },
    {
      id: "presqu-ile-part-dieu",
      title: "Presqu'île et Part-Dieu : plus accessibles mais pas sans contraintes",
      content: [
        "<strong>Presqu'île (2ème arrondissement)</strong>",
        "• Cœur de Lyon, entre Rhône et Saône",
        "• Immeubles haussmanniens, rues 3-5m, ascenseurs étroits (0,7-0,9m)",
        "• Zone de livraison 7h-11h (PV 135€ hors créneau)",
        "• <strong>Solution</strong> : Autorisation stationnement mairie (40-50€, 7-10j avant), arrivée 7h-8h",
        "• <strong>Surcoût</strong> : +100-200€",
        "",
        "<strong>Part-Dieu (3ème arrondissement)</strong>",
        "• Quartier d'affaires, gare",
        "• Immeubles récents, ascenseurs larges (1,2-1,5m), parkings sous-sols",
        "• Contrainte : jeudi matin = marché Saint-Antoine (rues bloquées 6h-13h)",
        "• <strong>Solution</strong> : Éviter jeudi OU arrivée avant 6h",
        "• <strong>Surcoût</strong> : 0€ (quartier facile)",
      ],
    },
    {
      id: "8-decembre-fete-lumieres",
      title: "8 décembre : LA date à éviter absolument",
      content: [
        "Si vous avez le choix, ne déménagez JAMAIS le 8 décembre à Lyon. C'est la Fête des Lumières, et la ville est paralysée.",
        "• 3 millions de visiteurs",
        "• Centre-ville fermé à la circulation",
        "• Impossible de se garer, même avec autorisation",
        "• Déménageurs refusent souvent d'intervenir",
        "",
        "Si vous DEVEZ déménager début décembre, faites-le avant le 7 ou après le 11.",
      ],
    },
  ],
  
  neighborhoods: [
    {
      name: "Croix-Rousse (4ème)",
      accessibility: "difficile",
      specifics: "Pentes 10-15%, immeubles canuts 6 étages (hauteur 4m = 7-8 étages normaux), escaliers raides, rues en pente.",
      tip: "Équipe renforcée (4 déménageurs). Budget +200-350€. Si 5ème-6ème étage, comptez 10-12h.",
    },
    {
      name: "Vieux Lyon (5ème)",
      accessibility: "difficile",
      specifics: "Ruelles 2-3m, 5 étages sans ascenseur, escaliers en colimaçon, pavés, zones piétonnes.",
      tip: "Camion 10-12m³ + navette OU monte-meuble. Budget +350-650€. Prévenez DÈS le devis.",
    },
    {
      name: "Presqu'île (2ème)",
      accessibility: "moyen",
      specifics: "Immeubles haussmanniens, ascenseurs étroits, zone livraison 7h-11h, circulation dense.",
      tip: "Autorisation stationnement mairie obligatoire. Arrivée 7h-8h. Budget +100-200€.",
    },
    {
      name: "Part-Dieu (3ème)",
      accessibility: "facile",
      specifics: "Immeubles récents, ascenseurs larges, parkings sous-sols. Marché jeudi matin.",
      tip: "Éviter jeudi 6h-13h. Réserver parking copropriété. Pas de surcoût.",
    },
    {
      name: "Confluence (2ème)",
      accessibility: "facile",
      specifics: "Quartier moderne, immeubles récents, larges rues, parkings. Le plus facile de Lyon.",
      tip: "Accès direct A7. Pas de contrainte particulière. Idéal si budget serré.",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Identifier quartier exact (Croix-Rousse ? Vieux Lyon ? Presqu'île ?)",
        "Demander 3-5 devis en précisant quartier + étage + ascenseur",
        "Vérifier si déménagement tombe le 8 décembre (Fête des Lumières = à éviter)",
        "Réserver ascenseur copropriété",
      ],
    },
    {
      category: "2 semaines avant",
      items: [
        "Demander autorisation stationnement si Presqu'île/Vieux Lyon (40-50€, délai 7-10j)",
        "Commander cartons (prévoir large : 35-40 pour un T2)",
        "Si Croix-Rousse/Vieux Lyon : re-confirmer que déménageur connaît les contraintes",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Étiqueter cartons (pièce + priorité + 'fragile' si besoin)",
        "Démonter meubles démontables",
        "Photos meubles de valeur",
        "Plan accès pour déménageurs (codes, parking, contact gardien)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Vérifier place parking libre",
        "Accueillir équipe avec clés/badges",
        "Si Croix-Rousse/Vieux Lyon : prévoir eau + petite collation (travail physique intense)",
        "Vérifier inventaire cartons chargés",
        "À l'arrivée : vérifier état meubles AVANT signature",
      ],
    },
  ],
  
  faq: [
    {
      question: "Déménager à Lyon coûte-t-il moins cher qu'à Paris ?",
      answer: "Oui, 10-15% moins cher en moyenne. Exemple : T2 Paris 750-1200€ vs Lyon 680-1050€. Mais attention aux quartiers difficiles (Croix-Rousse, Vieux Lyon) qui rattrapent l'écart.",
    },
    {
      question: "La Croix-Rousse est-elle vraiment si compliquée ?",
      answer: "Oui. Pentes 10-15% + immeubles canuts 6 étages (hauteur 4m = 7-8 étages normaux) = travail épuisant. Budget +200-350€ et 10-12h si haut des pentes.",
    },
    {
      question: "Comment gérer un déménagement dans le Vieux Lyon ?",
      answer: "Camion 10-12m³ max (le 20m³ ne rentre pas dans les ruelles). Soit navette depuis parking (500m-1km portage), soit monte-meuble si 4ème-5ème étage. Budget +350-650€.",
    },
    {
      question: "L'autorisation de stationnement est-elle obligatoire à Lyon ?",
      answer: "Oui si Presqu'île, Vieux Lyon, ou quais Rhône/Saône. Mairie de Lyon, 40-50€, délai 7-10 jours. Non nécessaire Part-Dieu, Villeurbanne, périphérie.",
    },
    {
      question: "Puis-je déménager le 8 décembre à Lyon ?",
      answer: "Fortement déconseillé. C'est la Fête des Lumières (3 millions de visiteurs, centre fermé). Beaucoup de déménageurs refusent. Si vraiment obligé, prévoir avant le 7 ou après le 11.",
    },
    {
      question: "Quelle est la meilleure période pour déménager à Lyon ?",
      answer: "Avril-Juin ou Septembre-Octobre (hors rentrée). Éviter : fin Août (rentrée étudiante, 2ème ville étudiante de France), 8 décembre (Fête des Lumières), fins de mois.",
    },
  ],
  
  usefulLinks: [
    {
      label: "Autorisation stationnement Lyon",
      url: "https://www.lyon.fr/",
      description: "Mairie de Lyon - service voirie - délai 7-10 jours",
    },
    {
      label: "TCL (transports Lyon)",
      url: "https://www.tcl.fr/",
      description: "Pour prévoir itinéraires si besoin de navette",
    },
    {
      label: "Moverz - Comparateur",
      url: "https://moverz.fr/",
      description: "3-5 devis déménageurs pros Lyon",
    },
  ],
};

/**
 * Base de données des guides premium
 * TODO: Ajouter les 18 autres villes
 */
export const PREMIUM_GUIDES_DATABASE: Record<string, PremiumCityGuideData> = {
  paris: PARIS_PREMIUM_GUIDE,
  lyon: LYON_PREMIUM_GUIDE,
  // TODO: Marseille, Toulouse, Nice, Nantes, Strasbourg, Montpellier, Bordeaux, Lille, etc.
};
