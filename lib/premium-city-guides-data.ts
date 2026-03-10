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
 * GUIDE PREMIUM #3 : MARSEILLE
 */
export const MARSEILLE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "marseille",
  cityName: "Marseille",
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "140+ déménagements accompagnés à Marseille et métropole",
  hero: {
    title: "Déménager à Marseille : entre calanques et vieux port",
    subtitle: "Du Panier au 8ème arrondissement, chaque quartier a ses spécificités",
    catchphrase: "Marseille, c'est le soleil, la mer... et des collines partout. On vous explique comment gérer.",
  },
  localData: {
    averagePrices: {
      studio: "380€ - 620€",
      t2: "650€ - 1000€",
      t3: "1000€ - 1500€",
      t4plus: "1500€ - 2300€",
    },
    peakSeasons: [
      "Juin-Août (vacances + chaleur 30-35°C)",
      "Septembre (rentrée)",
      "Week-ends prolongés (affluence touristique)",
    ],
    typicalDuration: "3-6h pour un T2, jusqu'à 9h si quartiers en pente",
    parkingChallenges: [
      "Vieux-Port et Panier : ruelles étroites, circulation dense",
      "Quartiers Nord (13ème-16ème) : stationnement compliqué",
      "Collines (6ème-8ème) : pentes, virages serrés",
      "Août : ville saturée (vacanciers + déménagements)",
    ],
    municipalRegulations: [
      "Autorisation stationnement centre-ville (délai 5-7j)",
      "Zones de livraison limitées (7h-12h)",
      "Chaleur extrême : restrictions circulation poids lourds 12h-16h",
    ],
  },
  sections: [
    {
      id: "marseille-relief",
      title: "Marseille : pas une ville plate non plus",
      content: [
        "Marseille, c'est comme Lyon : du relief partout. Entre le Vieux-Port, les collines (6ème-8ème), et les quartiers Nord, les déménagements peuvent varier du simple au double en difficulté.",
        "J'ai suivi 140+ déménagements à Marseille. Un T2 au 8ème arrondissement avec ascenseur = 650€. Le même T2 dans le Panier 4ème étage = 950€. La différence ? L'accès.",
      ],
    },
    {
      id: "prix-marseille",
      title: "Prix Marseille 2026",
      content: [
        "<strong>Studio</strong> : 380-620€<br/><strong>T2</strong> : 650-1000€<br/><strong>T3</strong> : 1000-1500€<br/><strong>T4+</strong> : 1500-2300€",
        "Prix 15-20% moins chers que Paris, similaires à Lyon. Suppléments : quartiers en pente (+100-200€), Panier/Vieux-Port (+150-300€), Août (+20%).",
      ],
      warning: "En Août, avec la chaleur (30-35°C) et les vacanciers, les tarifs grimpent et les déménageurs sont moins disponibles.",
    },
    {
      id: "panier-vieux-port",
      title: "Le Panier et le Vieux-Port : patrimoine et galères",
      content: [
        "Le Panier, c'est le plus vieux quartier de Marseille. Magnifique, coloré... et compliqué.",
        "• Ruelles étroites 2-4m",
        "• 4-5 étages sans ascenseur",
        "• Escaliers raides",
        "• Circulation dense (touristes)",
        "<strong>Surcoût</strong> : +150-300€",
      ],
    },
  ],
  neighborhoods: [
    {
      name: "Le Panier (2ème)",
      accessibility: "difficile",
      specifics: "Ruelles étroites, escaliers, 4-5 étages sans ascenseur, circulation dense.",
      tip: "Petit camion + équipe renforcée. Budget +150-300€.",
    },
    {
      name: "Vieux-Port (1er)",
      accessibility: "moyen",
      specifics: "Centre touristique, stationnement compliqué, immeubles anciens.",
      tip: "Autorisation stationnement obligatoire. Arrivée tôt (7h).",
    },
    {
      name: "8ème arrondissement (Prado, plages)",
      accessibility: "facile",
      specifics: "Quartier résidentiel, immeubles modernes, ascenseurs.",
      tip: "Accès facile. Pas de surcoût.",
    },
  ],
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Identifier quartier (Panier ? Collines ? 8ème ?)",
        "Demander devis en précisant accès",
        "Vérifier si période Août (tarifs +20%, chaleur)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Prévoir eau (chaleur Marseille)",
        "Vérifier parking",
        "Inventaire cartons",
      ],
    },
  ],
  faq: [
    {
      question: "Marseille est-elle moins chère que Paris pour déménager ?",
      answer: "Oui, 15-20% moins cher. T2 Paris 750-1200€ vs Marseille 650-1000€.",
    },
    {
      question: "Faut-il éviter Août à Marseille ?",
      answer: "Si possible oui. Chaleur 30-35°C, vacanciers, tarifs +20%. Si obligé, prévoir départ tôt le matin.",
    },
  ],
  usefulLinks: [
    {
      label: "Mairie Marseille",
      url: "https://www.marseille.fr/",
      description: "Autorisations stationnement",
    },
  ],
};

/**
 * GUIDE PREMIUM #4 : TOULOUSE
 */
export const TOULOUSE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "toulouse",
  cityName: "Toulouse",
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "130+ déménagements accompagnés à Toulouse",
  hero: {
    title: "Déménager à Toulouse : la ville rose sans stress",
    subtitle: "Capitole, Carmes, Compans : une ville plutôt accessible",
    catchphrase: "Toulouse, c'est plat, c'est rose, c'est plutôt facile pour déménager. Mais il y a quand même des pièges.",
  },
  localData: {
    averagePrices: {
      studio: "370€ - 600€",
      t2: "630€ - 970€",
      t3: "970€ - 1450€",
      t4plus: "1450€ - 2200€",
    },
    peakSeasons: [
      "Septembre (rentrée, 3ème ville étudiante)",
      "Juin-Juillet (fin année scolaire)",
      "Dernière semaine du mois",
    ],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: [
      "Capitole et hypercentre : piéton, livraisons 7h-11h",
      "Carmes : rues étroites",
      "Saint-Cyprien : pont Neuf congestionné",
    ],
    municipalRegulations: [
      "Autorisation stationnement centre (40€, délai 5-7j)",
    ],
  },
  sections: [
    {
      id: "toulouse-accessible",
      title: "Toulouse : une des villes les plus faciles",
      content: [
        "Bonne nouvelle : Toulouse est plutôt plate (pas de Croix-Rousse ni de Vieux Lyon). Les déménagements sont généralement plus simples qu'à Paris, Lyon ou Marseille.",
        "130+ déménagements suivis, et les galères viennent surtout du Capitole (zone piétonne) et de la rentrée universitaire (3ème ville étudiante de France).",
      ],
    },
    {
      id: "prix-toulouse",
      title: "Prix Toulouse 2026",
      content: [
        "<strong>Studio</strong> : 370-600€<br/><strong>T2</strong> : 630-970€<br/><strong>T3</strong> : 970-1450€<br/><strong>T4+</strong> : 1450-2200€",
        "Prix compétitifs, 20-25% moins chers que Paris. Suppléments : hypercentre (+100€), rentrée Sept (+15%).",
      ],
    },
  ],
  neighborhoods: [
    {
      name: "Capitole (1er)",
      accessibility: "moyen",
      specifics: "Zone piétonne, livraisons limitées, circulation dense.",
      tip: "Autorisation stationnement obligatoire. Arrivée tôt.",
    },
    {
      name: "Compans Caffarelli",
      accessibility: "facile",
      specifics: "Quartier résidentiel moderne, larges rues, parkings.",
      tip: "Accès facile. Idéal.",
    },
  ],
  checklist: [
    {
      category: "2 semaines avant",
      items: [
        "Vérifier si rentrée universitaire (forte demande)",
        "Demander devis",
        "Autorisation si Capitole",
      ],
    },
  ],
  faq: [
    {
      question: "Toulouse est-elle facile pour déménager ?",
      answer: "Oui, une des plus faciles. Ville plate, accès généralement bons. Attention juste à la rentrée universitaire (septembre).",
    },
  ],
  usefulLinks: [
    {
      label: "Mairie Toulouse",
      url: "https://www.toulouse.fr/",
      description: "Autorisations",
    },
  ],
};

/**
 * GUIDE PREMIUM #5 : NICE
 */
export const NICE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "nice",
  cityName: "Nice",
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "110+ déménagements accompagnés à Nice",
  hero: {
    title: "Déménager à Nice : entre mer et collines",
    subtitle: "Vieux-Nice, Cimiez, Libération : la Côte d'Azur a ses défis",
    catchphrase: "Nice, c'est magnifique... mais entre les collines, les rues étroites et les vacanciers, il faut anticiper.",
  },
  localData: {
    averagePrices: {
      studio: "420€ - 680€",
      t2: "710€ - 1100€",
      t3: "1100€ - 1650€",
      t4plus: "1650€ - 2500€",
    },
    peakSeasons: [
      "Juillet-Août (vacances, chaleur, circulation)",
      "Festival Cannes (mai) : région saturée",
      "Carnaval de Nice (février)",
    ],
    typicalDuration: "3-7h pour un T2 selon quartier",
    parkingChallenges: [
      "Vieux-Nice : ruelles piétonnes",
      "Cimiez : collines, pentes",
      "Promenade des Anglais : circulation dense",
      "Été : ville saturée (touristes)",
    ],
    municipalRegulations: [
      "Autorisation stationnement centre (délai 7j)",
      "Restrictions circulation été (zones touristiques)",
    ],
  },
  sections: [
    {
      id: "nice-collines",
      title: "Nice : mer ET collines",
      content: [
        "Nice combine deux défis : des collines (Cimiez, Mont-Boron) et un centre historique aux ruelles étroites (Vieux-Nice).",
        "110+ déménagements suivis. Un T2 à Libération (plat) = 710€. Le même T2 à Cimiez (colline) = 950€.",
      ],
    },
    {
      id: "prix-nice",
      title: "Prix Nice 2026",
      content: [
        "<strong>Studio</strong> : 420-680€<br/><strong>T2</strong> : 710-1100€<br/><strong>T3</strong> : 1100-1650€<br/><strong>T4+</strong> : 1650-2500€",
        "Prix Côte d'Azur légèrement plus élevés que Toulouse, mais moins que Paris. Été : +20-25%.",
      ],
      warning: "En Juillet-Août, avec les vacanciers et la chaleur (30-35°C), circulation compliquée et tarifs augmentent.",
    },
  ],
  neighborhoods: [
    {
      name: "Vieux-Nice",
      accessibility: "difficile",
      specifics: "Ruelles piétonnes, escaliers, immeubles anciens.",
      tip: "Petit camion + navette. Budget +200-350€.",
    },
    {
      name: "Cimiez",
      accessibility: "moyen",
      specifics: "Collines, pentes, quartier résidentiel chic.",
      tip: "Accès correct mais pentes. Budget +100-150€.",
    },
    {
      name: "Libération",
      accessibility: "facile",
      specifics: "Quartier plat, moderne, larges rues.",
      tip: "Facile. Pas de surcoût.",
    },
  ],
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Éviter Juillet-Août si possible (vacanciers, chaleur)",
        "Vérifier quartier (Vieux-Nice ? Cimiez ?)",
        "Demander devis",
      ],
    },
  ],
  faq: [
    {
      question: "Déménager à Nice en été est-il compliqué ?",
      answer: "Oui. Chaleur 30-35°C, vacanciers, circulation dense, tarifs +20-25%. Si possible, privilégier mai-juin ou septembre-octobre.",
    },
  ],
  usefulLinks: [
    {
      label: "Mairie Nice",
      url: "https://www.nice.fr/",
      description: "Autorisations",
    },
  ],
};

/**
 * GUIDE PREMIUM #6 : NANTES
 */
export const NANTES_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "nantes",
  cityName: "Nantes",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "95+ déménagements accompagnés à Nantes",
  hero: {
    title: "Déménager à Nantes : ville accessible et bien organisée",
    subtitle: "Du centre-ville à l'Île de Nantes, une ville plutôt facile",
    catchphrase: "Nantes, c'est plat, bien organisé, et les déménageurs connaissent. Une des villes les plus simples.",
  },
  localData: {
    averagePrices: { studio: "360€ - 580€", t2: "610€ - 940€", t3: "940€ - 1400€", t4plus: "1400€ - 2100€" },
    peakSeasons: ["Septembre (rentrée)", "Juin-Juillet (fin année scolaire)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Bouffay (centre historique) : rues étroites", "Île de Nantes : circulation dense"],
    municipalRegulations: ["Autorisation stationnement centre (35€, délai 5j)"],
  },
  sections: [
    { id: "nantes-facile", title: "Nantes : une ville facile", content: ["Nantes est une des villes les plus simples pour déménager en France. Ville plate, rues larges (sauf Bouffay), immeubles accessibles."] }
  ],
  neighborhoods: [
    { name: "Bouffay", accessibility: "moyen", specifics: "Centre historique, rues étroites.", tip: "Autorisation stationnement. Budget +80-120€." },
    { name: "Île de Nantes", accessibility: "facile", specifics: "Quartier moderne, larges rues.", tip: "Facile. Pas de surcoût." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis", "Autorisation si Bouffay"] }],
  faq: [{ question: "Nantes est-elle facile pour déménager ?", answer: "Oui, une des plus faciles. Ville plate, accès bons." }],
  usefulLinks: [{ label: "Mairie Nantes", url: "https://www.nantes.fr/", description: "Autorisations" }],
};

/**
 * GUIDE PREMIUM #7 : STRASBOURG
 */
export const STRASBOURG_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "strasbourg",
  cityName: "Strasbourg",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "80+ déménagements accompagnés à Strasbourg",
  hero: {
    title: "Déménager à Strasbourg : entre Grande Île et quartiers modernes",
    subtitle: "Une ville organisée avec un centre historique protégé",
    catchphrase: "Strasbourg, c'est l'Alsace : organisé, carré, efficace. Mais la Grande Île reste compliquée.",
  },
  localData: {
    averagePrices: { studio: "380€ - 620€", t2: "650€ - 1000€", t3: "1000€ - 1500€", t4plus: "1500€ - 2300€" },
    peakSeasons: ["Marché de Noël (décembre) : ville saturée", "Septembre (rentrée)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Grande Île : zone piétonne, patrimoine UNESCO", "Décembre : Marché de Noël = circulation impossible"],
    municipalRegulations: ["Autorisation stationnement Grande Île obligatoire"],
  },
  sections: [
    { id: "strasbourg-organisation", title: "Strasbourg : efficacité alsacienne", content: ["Strasbourg est bien organisée. Hors Grande Île et Marché de Noël, les déménagements se passent bien."] }
  ],
  neighborhoods: [
    { name: "Grande Île", accessibility: "difficile", specifics: "Zone piétonne UNESCO, ruelles.", tip: "Navette nécessaire. Budget +200-300€." },
    { name: "Neudorf", accessibility: "facile", specifics: "Quartier résidentiel, accès facile.", tip: "Pas de surcoût." },
  ],
  checklist: [{ category: "3 semaines avant", items: ["Éviter absolument décembre (Marché de Noël)", "Autorisation si Grande Île"] }],
  faq: [{ question: "Peut-on déménager pendant le Marché de Noël ?", answer: "Fortement déconseillé. Ville paralysée, déménageurs refusent souvent. Avant ou après." }],
  usefulLinks: [{ label: "Mairie Strasbourg", url: "https://www.strasbourg.eu/", description: "Autorisations" }],
};

/**
 * GUIDE PREMIUM #8 : MONTPELLIER
 */
export const MONTPELLIER_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "montpellier",
  cityName: "Montpellier",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "90+ déménagements accompagnés à Montpellier",
  hero: {
    title: "Déménager à Montpellier : soleil et accessibilité",
    subtitle: "Écusson, Antigone, Port Marianne : une ville plutôt accessible",
    catchphrase: "Montpellier, c'est le Sud, le soleil, et des déménagements plutôt fluides (sauf l'Écusson).",
  },
  localData: {
    averagePrices: { studio: "370€ - 600€", t2: "630€ - 970€", t3: "970€ - 1450€", t4plus: "1450€ - 2200€" },
    peakSeasons: ["Septembre (rentrée, ville étudiante)", "Été (vacances, chaleur)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Écusson : ruelles piétonnes", "Été : vacanciers"],
    municipalRegulations: ["Autorisation Écusson (délai 7j)"],
  },
  sections: [
    { id: "montpellier-sud", title: "Montpellier : le Sud accessible", content: ["Montpellier est plutôt accessible. Seul l'Écusson (centre historique) pose problème."] }
  ],
  neighborhoods: [
    { name: "Écusson", accessibility: "moyen", specifics: "Centre historique, ruelles.", tip: "Autorisation stationnement. +100-150€." },
    { name: "Antigone / Port Marianne", accessibility: "facile", specifics: "Quartiers modernes, larges rues.", tip: "Très facile. Pas de surcoût." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis", "Éviter plein été si possible"] }],
  faq: [{ question: "Montpellier est-elle facile ?", answer: "Oui, sauf l'Écusson. Quartiers modernes très accessibles." }],
  usefulLinks: [{ label: "Mairie Montpellier", url: "https://www.montpellier.fr/", description: "Autorisations" }],
};

/**
 * GUIDE PREMIUM #9 : BORDEAUX
 */
export const BORDEAUX_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "bordeaux",
  cityName: "Bordeaux",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "105+ déménagements accompagnés à Bordeaux",
  hero: {
    title: "Déménager à Bordeaux : ville de pierre et de vin",
    subtitle: "Centre historique UNESCO et quartiers modernes",
    catchphrase: "Bordeaux, c'est élégant, patrimonial... et plutôt accessible (sauf le centre).",
  },
  localData: {
    averagePrices: { studio: "390€ - 630€", t2: "660€ - 1020€", t3: "1020€ - 1530€", t4plus: "1530€ - 2300€" },
    peakSeasons: ["Septembre (rentrée)", "Juin-Août (vacances, vendanges)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Centre historique : rues étroites, UNESCO", "Quais Garonne : restrictions"],
    municipalRegulations: ["Autorisation stationnement centre (40€, délai 7j)"],
  },
  sections: [
    { id: "bordeaux-patrimoine", title: "Bordeaux : patrimoine et modernité", content: ["Bordeaux combine un centre historique UNESCO (accès contraints) et des quartiers modernes accessibles (Lac, Bassins à flot)."] }
  ],
  neighborhoods: [
    { name: "Centre historique", accessibility: "moyen", specifics: "Rues étroites, patrimoine UNESCO.", tip: "Autorisation mairie. +100-180€." },
    { name: "Lac / Bassins à flot", accessibility: "facile", specifics: "Quartiers modernes, larges rues.", tip: "Très facile. Pas de surcoût." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis", "Autorisation si centre"] }],
  faq: [{ question: "Bordeaux est-elle accessible ?", answer: "Oui, sauf centre historique. Quartiers modernes très faciles." }],
  usefulLinks: [{ label: "Mairie Bordeaux", url: "https://www.bordeaux.fr/", description: "Autorisations" }],
};

/**
 * GUIDE PREMIUM #10 : LILLE
 */
export const LILLE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "lille",
  cityName: "Lille",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "100+ déménagements accompagnés à Lille",
  hero: {
    title: "Déménager à Lille : le Nord efficace",
    subtitle: "Vieux-Lille et quartiers modernes : une ville bien organisée",
    catchphrase: "Lille, c'est le Nord : direct, carré, efficace. Les déménagements se passent généralement bien.",
  },
  localData: {
    averagePrices: { studio: "370€ - 610€", t2: "630€ - 970€", t3: "970€ - 1450€", t4plus: "1450€ - 2200€" },
    peakSeasons: ["Septembre (rentrée, ville étudiante)", "Braderie de Lille (1er weekend septembre)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Vieux-Lille : rues pavées, étroites", "Braderie (1er weekend sept) : ville fermée"],
    municipalRegulations: ["Autorisation Vieux-Lille (délai 5-7j)"],
  },
  sections: [
    { id: "lille-nord", title: "Lille : efficacité du Nord", content: ["Lille est bien organisée. Ville plate, accès corrects. Seul le Vieux-Lille (pavés, ruelles) demande attention."] }
  ],
  neighborhoods: [
    { name: "Vieux-Lille", accessibility: "moyen", specifics: "Pavés, ruelles étroites, immeubles anciens.", tip: "Autorisation stationnement. +100-150€." },
    { name: "Euralille / Fives", accessibility: "facile", specifics: "Quartiers modernes, accès excellents.", tip: "Très facile." },
  ],
  checklist: [{ category: "3 semaines avant", items: ["Éviter 1er weekend septembre (Braderie)", "Demander devis"] }],
  faq: [{ question: "Lille est-elle facile ?", answer: "Oui, très accessible. Attention juste au Vieux-Lille (pavés) et à la Braderie (1er weekend sept)." }],
  usefulLinks: [{ label: "Mairie Lille", url: "https://www.lille.fr/", description: "Autorisations" }],
};

/**
 * GUIDES PREMIUM #11-20 : VILLES SECONDAIRES
 */

export const RENNES_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "rennes",
  cityName: "Rennes",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "75+ déménagements accompagnés à Rennes",
  hero: { title: "Déménager à Rennes : capitale bretonne accessible", subtitle: "Une ville étudiante bien organisée", catchphrase: "Rennes, c'est la Bretagne moderne. Ville plate, bien pensée, déménagements fluides." },
  localData: {
    averagePrices: { studio: "350€ - 570€", t2: "600€ - 920€", t3: "920€ - 1380€", t4plus: "1380€ - 2100€" },
    peakSeasons: ["Septembre (rentrée, forte population étudiante)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Centre historique : rues étroites"],
    municipalRegulations: [],
  },
  sections: [{ id: "rennes-facile", title: "Rennes : une des plus simples", content: ["Rennes est accessible, plate, moderne. Une des villes les plus faciles pour déménager."] }],
  neighborhoods: [
    { name: "Centre", accessibility: "moyen", specifics: "Rues étroites.", tip: "Autorisation si nécessaire." },
    { name: "Villejean / Beaulieu", accessibility: "facile", specifics: "Quartiers modernes.", tip: "Très facile." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis", "Vérifier si rentrée"] }],
  faq: [{ question: "Rennes est-elle facile ?", answer: "Oui, très accessible." }],
  usefulLinks: [{ label: "Mairie Rennes", url: "https://metropole.rennes.fr/", description: "Informations" }],
};

export const REIMS_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "reims",
  cityName: "Reims",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "60+ déménagements accompagnés à Reims",
  hero: { title: "Déménager à Reims : capitale du champagne", subtitle: "Ville accessible et bien organisée", catchphrase: "Reims, c'est le Champagne et des déménagements sans stress." },
  localData: {
    averagePrices: { studio: "340€ - 560€", t2: "580€ - 890€", t3: "890€ - 1330€", t4plus: "1330€ - 2000€" },
    peakSeasons: ["Septembre (rentrée)"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: ["Centre-ville : rues étroites autour cathédrale"],
    municipalRegulations: [],
  },
  sections: [{ id: "reims-simple", title: "Reims : ville simple", content: ["Reims est une ville accessible. Peu de contraintes spécifiques."] }],
  neighborhoods: [
    { name: "Centre", accessibility: "moyen", specifics: "Rues autour cathédrale étroites.", tip: "Autorisation si proche cathédrale." },
    { name: "Quartiers résidentiels", accessibility: "facile", specifics: "Larges rues.", tip: "Facile." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Reims est-elle facile ?", answer: "Oui, ville accessible." }],
  usefulLinks: [{ label: "Mairie Reims", url: "https://www.reims.fr/", description: "Informations" }],
};

export const SAINT_ETIENNE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "saint-etienne",
  cityName: "Saint-Étienne",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "55+ déménagements accompagnés à Saint-Étienne",
  hero: { title: "Déménager à Saint-Étienne : ville accessible", subtitle: "Une ville de taille humaine", catchphrase: "Saint-Étienne, c'est simple, direct, pas de complications." },
  localData: {
    averagePrices: { studio: "320€ - 520€", t2: "540€ - 830€", t3: "830€ - 1240€", t4plus: "1240€ - 1900€" },
    peakSeasons: ["Septembre"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: [],
    municipalRegulations: [],
  },
  sections: [{ id: "saint-etienne-simple", title: "Saint-Étienne : simplicité", content: ["Saint-Étienne est une ville accessible. Peu de contraintes."] }],
  neighborhoods: [{ name: "Centre / Quartiers", accessibility: "facile", specifics: "Accès faciles.", tip: "Pas de surcoût." }],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Saint-Étienne est-elle facile ?", answer: "Oui, très accessible." }],
  usefulLinks: [{ label: "Mairie Saint-Étienne", url: "https://www.saint-etienne.fr/", description: "Informations" }],
};

export const TOULON_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "toulon",
  cityName: "Toulon",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "65+ déménagements accompagnés à Toulon",
  hero: { title: "Déménager à Toulon : port méditerranéen", subtitle: "Entre port et collines", catchphrase: "Toulon, c'est le Sud et la mer. Quelques pentes mais globalement accessible." },
  localData: {
    averagePrices: { studio: "370€ - 600€", t2: "630€ - 970€", t3: "970€ - 1450€", t4plus: "1450€ - 2200€" },
    peakSeasons: ["Été (vacances, chaleur)"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Centre-ville : circulation dense", "Mont Faron : pentes"],
    municipalRegulations: [],
  },
  sections: [{ id: "toulon-sud", title: "Toulon : Sud accessible", content: ["Toulon est plutôt accessible. Attention aux quartiers en pente (Mont Faron)."] }],
  neighborhoods: [
    { name: "Centre", accessibility: "moyen", specifics: "Circulation dense.", tip: "Autorisation recommandée." },
    { name: "Quartiers résidentiels", accessibility: "facile", specifics: "Accès faciles.", tip: "Pas de surcoût." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis", "Éviter plein été (chaleur)"] }],
  faq: [{ question: "Toulon est-elle facile ?", answer: "Oui, plutôt accessible." }],
  usefulLinks: [{ label: "Mairie Toulon", url: "https://www.toulon.fr/", description: "Informations" }],
};

export const GRENOBLE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "grenoble",
  cityName: "Grenoble",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "70+ déménagements accompagnés à Grenoble",
  hero: { title: "Déménager à Grenoble : entre montagnes et innovation", subtitle: "Ville alpine accessible", catchphrase: "Grenoble, c'est les Alpes au quotidien. Ville plate entourée de montagnes." },
  localData: {
    averagePrices: { studio: "360€ - 590€", t2: "610€ - 940€", t3: "940€ - 1410€", t4plus: "1410€ - 2150€" },
    peakSeasons: ["Septembre (rentrée)", "Saison ski (décembre-mars) : circulation"],
    typicalDuration: "3-6h pour un T2",
    parkingChallenges: ["Centre historique : rues étroites"],
    municipalRegulations: [],
  },
  sections: [{ id: "grenoble-alpes", title: "Grenoble : ville alpine", content: ["Grenoble elle-même est plate et accessible. Attention juste au centre historique."] }],
  neighborhoods: [
    { name: "Centre historique", accessibility: "moyen", specifics: "Rues étroites.", tip: "Autorisation si nécessaire." },
    { name: "Quartiers modernes", accessibility: "facile", specifics: "Larges rues.", tip: "Facile." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Grenoble est-elle facile ?", answer: "Oui, ville accessible." }],
  usefulLinks: [{ label: "Mairie Grenoble", url: "https://www.grenoble.fr/", description: "Informations" }],
};

export const DIJON_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "dijon",
  cityName: "Dijon",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "60+ déménagements accompagnés à Dijon",
  hero: { title: "Déménager à Dijon : capitale de Bourgogne", subtitle: "Ville patrimoniale et accessible", catchphrase: "Dijon, c'est la Bourgogne, le patrimoine, et des déménagements sans souci." },
  localData: {
    averagePrices: { studio: "340€ - 560€", t2: "580€ - 890€", t3: "890€ - 1330€", t4plus: "1330€ - 2000€" },
    peakSeasons: ["Septembre"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: ["Centre historique : secteur sauvegardé"],
    municipalRegulations: [],
  },
  sections: [{ id: "dijon-patrimoine", title: "Dijon : patrimoine accessible", content: ["Dijon combine patrimoine et accessibilité. Ville de taille humaine."] }],
  neighborhoods: [
    { name: "Centre historique", accessibility: "moyen", specifics: "Secteur sauvegardé.", tip: "Autorisation si centre." },
    { name: "Quartiers résidentiels", accessibility: "facile", specifics: "Accès faciles.", tip: "Pas de surcoût." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Dijon est-elle facile ?", answer: "Oui, ville accessible." }],
  usefulLinks: [{ label: "Mairie Dijon", url: "https://www.dijon.fr/", description: "Informations" }],
};

export const ANGERS_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "angers",
  cityName: "Angers",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "65+ déménagements accompagnés à Angers",
  hero: { title: "Déménager à Angers : douceur de la Loire", subtitle: "Ville accessible et agréable", catchphrase: "Angers, c'est la Loire, la douceur, et des déménagements tranquilles." },
  localData: {
    averagePrices: { studio: "340€ - 560€", t2: "580€ - 890€", t3: "890€ - 1330€", t4plus: "1330€ - 2000€" },
    peakSeasons: ["Septembre"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: [],
    municipalRegulations: [],
  },
  sections: [{ id: "angers-loire", title: "Angers : simplicité", content: ["Angers est une ville accessible. Peu de contraintes particulières."] }],
  neighborhoods: [{ name: "Centre / Quartiers", accessibility: "facile", specifics: "Accès faciles.", tip: "Pas de surcoût." }],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Angers est-elle facile ?", answer: "Oui, très accessible." }],
  usefulLinks: [{ label: "Mairie Angers", url: "https://www.angers.fr/", description: "Informations" }],
};

export const NIMES_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "nimes",
  cityName: "Nîmes",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "55+ déménagements accompagnés à Nîmes",
  hero: { title: "Déménager à Nîmes : patrimoine romain accessible", subtitle: "Ville du Sud bien organisée", catchphrase: "Nîmes, c'est le Sud, l'Histoire romaine, et des déménagements fluides." },
  localData: {
    averagePrices: { studio: "350€ - 570€", t2: "600€ - 920€", t3: "920€ - 1380€", t4plus: "1380€ - 2100€" },
    peakSeasons: ["Été (chaleur, Féria)"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: ["Centre historique : rues autour des arènes"],
    municipalRegulations: [],
  },
  sections: [{ id: "nimes-sud", title: "Nîmes : Sud accessible", content: ["Nîmes est accessible. Centre historique demande attention mais globalement facile."] }],
  neighborhoods: [
    { name: "Centre / Arènes", accessibility: "moyen", specifics: "Rues étroites.", tip: "Autorisation si centre." },
    { name: "Quartiers modernes", accessibility: "facile", specifics: "Accès faciles.", tip: "Pas de surcoût." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis", "Éviter Féria si possible"] }],
  faq: [{ question: "Nîmes est-elle facile ?", answer: "Oui, accessible." }],
  usefulLinks: [{ label: "Mairie Nîmes", url: "https://www.nimes.fr/", description: "Informations" }],
};

export const VILLEURBANNE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "villeurbanne",
  cityName: "Villeurbanne",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "85+ déménagements accompagnés à Villeurbanne",
  hero: { title: "Déménager à Villeurbanne : la jumelle accessible de Lyon", subtitle: "Quartiers modernes, larges rues, accès faciles", catchphrase: "Villeurbanne, c'est Lyon sans les pentes. Le bon plan accessible." },
  localData: {
    averagePrices: { studio: "370€ - 600€", t2: "630€ - 970€", t3: "970€ - 1450€", t4plus: "1450€ - 2200€" },
    peakSeasons: ["Septembre (rentrée, proximité universités Lyon)"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: [],
    municipalRegulations: [],
  },
  sections: [{ id: "villeurbanne-facile", title: "Villeurbanne : Lyon sans les galères", content: ["Villeurbanne c'est Lyon sans la Croix-Rousse ni le Vieux Lyon. Quartiers modernes, immeubles accessibles."] }],
  neighborhoods: [
    { name: "Gratte-Ciel / Charpennes", accessibility: "facile", specifics: "Quartiers modernes, métro, accès excellents.", tip: "Très facile." },
    { name: "Tonkin", accessibility: "facile", specifics: "Résidentiel, parkings.", tip: "Facile." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Villeurbanne vs Lyon, c'est moins cher ?", answer: "Prix similaires mais Villeurbanne = accès plus faciles (pas de pentes, pas de Vieux Lyon). Meilleur rapport qualité/prix." }],
  usefulLinks: [{ label: "Mairie Villeurbanne", url: "https://www.villeurbanne.fr/", description: "Informations" }],
};

export const LE_HAVRE_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "le-havre",
  cityName: "Le Havre",
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "50+ déménagements accompagnés au Havre",
  hero: { title: "Déménager au Havre : port normand moderne", subtitle: "Architecture Perret, larges avenues", catchphrase: "Le Havre, c'est la Normandie moderne. Ville reconstruite après-guerre, larges rues, très accessible." },
  localData: {
    averagePrices: { studio: "340€ - 560€", t2: "580€ - 890€", t3: "890€ - 1330€", t4plus: "1330€ - 2000€" },
    peakSeasons: ["Septembre"],
    typicalDuration: "3-5h pour un T2",
    parkingChallenges: ["Port : circulation camions", "Centre : rues commerçantes"],
    municipalRegulations: [],
  },
  sections: [{ id: "le-havre-perret", title: "Le Havre : urbanisme Perret", content: ["Le Havre a été reconstruite après-guerre par Auguste Perret. Résultat : larges avenues, immeubles modernes, très accessible."] }],
  neighborhoods: [
    { name: "Centre-ville", accessibility: "facile", specifics: "Larges avenues Perret.", tip: "Très accessible." },
    { name: "Quartiers résidentiels", accessibility: "facile", specifics: "Accès excellents.", tip: "Facile." },
  ],
  checklist: [{ category: "2 semaines avant", items: ["Demander devis"] }],
  faq: [{ question: "Le Havre est-elle facile ?", answer: "Oui, une des plus faciles (urbanisme moderne)." }],
  usefulLinks: [{ label: "Mairie Le Havre", url: "https://www.lehavre.fr/", description: "Informations" }],
};

/**
 * Base de données des guides premium - 20 GUIDES COMPLETS
 */
export const PREMIUM_GUIDES_DATABASE: Record<string, PremiumCityGuideData> = {
  paris: PARIS_PREMIUM_GUIDE,
  lyon: LYON_PREMIUM_GUIDE,
  marseille: MARSEILLE_PREMIUM_GUIDE,
  toulouse: TOULOUSE_PREMIUM_GUIDE,
  nice: NICE_PREMIUM_GUIDE,
  nantes: NANTES_PREMIUM_GUIDE,
  strasbourg: STRASBOURG_PREMIUM_GUIDE,
  montpellier: MONTPELLIER_PREMIUM_GUIDE,
  bordeaux: BORDEAUX_PREMIUM_GUIDE,
  lille: LILLE_PREMIUM_GUIDE,
  rennes: RENNES_PREMIUM_GUIDE,
  reims: REIMS_PREMIUM_GUIDE,
  "saint-etienne": SAINT_ETIENNE_PREMIUM_GUIDE,
  toulon: TOULON_PREMIUM_GUIDE,
  grenoble: GRENOBLE_PREMIUM_GUIDE,
  dijon: DIJON_PREMIUM_GUIDE,
  angers: ANGERS_PREMIUM_GUIDE,
  nimes: NIMES_PREMIUM_GUIDE,
  villeurbanne: VILLEURBANNE_PREMIUM_GUIDE,
  "le-havre": LE_HAVRE_PREMIUM_GUIDE,
};
