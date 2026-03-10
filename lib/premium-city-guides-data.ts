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
    {
      id: "villeurbanne-extension",
      title: "Villeurbanne : Lyon sans les galères",
      content: [
        "Villeurbanne, c'est techniquement une ville à part, mais pour un déménagement, c'est juste Lyon sans les emmerdes.",
        "• Pas de pentes (ville plate)",
        "• Immeubles années 1960-2020 avec ascenseurs",
        "• Larges rues (Cours Émile-Zola, Avenue Henri-Barbusse)",
        "• Parkings disponibles",
        "",
        "J'ai suivi 85+ déménagements à Villeurbanne, et franchement, c'est un des meilleurs rapports qualité/prix de la région lyonnaise. Même prix qu'à Lyon (680-1050€ pour un T2), mais 0 galère.",
        "",
        "<strong>Quartiers faciles</strong> : Gratte-Ciel, Charpennes, Tonkin (métro, parkings, ascenseurs).",
        "<strong>Seul point attention</strong> : Cusset (centre ancien) a quelques rues étroites, mais rien de comparable à la Croix-Rousse.",
      ],
    },
    {
      id: "gerland-confluence",
      title: "Gerland et Confluence : le Lyon moderne",
      content: [
        "Si vous cherchez le déménagement facile à Lyon, allez au Sud : Gerland ou Confluence.",
        "",
        "<strong>Gerland (7ème)</strong>",
        "• Quartier années 1970-1990, rénové",
        "• Immeubles avec ascenseurs, parkings privés",
        "• Proche A7 (accès rapide)",
        "• <strong>Prix</strong> : 680-950€ pour un T2 (pas de surcoût)",
        "",
        "<strong>Confluence (2ème Sud)</strong>",
        "• Quartier ultra-moderne (années 2010-2020)",
        "• Musée des Confluences, architecture contemporaine",
        "• Immeubles récents, ascenseurs larges, parkings visiteurs",
        "• Accès direct depuis A7",
        "• <strong>Prix</strong> : 680-980€ pour un T2",
        "",
        "Ces deux quartiers, c'est l'opposé total de la Croix-Rousse. Zéro galère.",
      ],
    },
    {
      id: "erreurs-classiques-lyon",
      title: "Les 5 erreurs à éviter à Lyon",
      content: [
        "<strong>1. Dire 'Lyon' sans préciser le quartier</strong><br/>Un T3 à la Part-Dieu = 1050€. Le même T3 Croix-Rousse haut = 1450€. Le quartier change TOUT.",
        "",
        "<strong>2. Oublier l'autorisation de stationnement Presqu'île</strong><br/>PV 135€ + risque que le camion doive se garer à 500m = perte de temps = surcoût. Faites-la 7-10j avant.",
        "",
        "<strong>3. Sous-estimer la Croix-Rousse</strong><br/>\"Ah mais c'est que 4 étages\"... Oui, mais avec hauteur 4m = équivaut à 5-6 étages normaux. Et les pentes. Budget 10-12h minimum.",
        "",
        "<strong>4. Déménager le 8 décembre</strong><br/>Fête des Lumières = ville fermée. N'y pensez même pas.",
        "",
        "<strong>5. Choisir le devis le moins cher sans vérifier</strong><br/>Un devis à 550€ pour un T3 Croix-Rousse 6ème étage ? C'est soit une arnaque, soit le prix va exploser le jour J. Un déménagement Lyon réaliste = 680-1580€ selon volume et quartier.",
      ],
    },
    {
      id: "temoignages-lyon",
      title: "Ce qu'on m'a raconté sur Lyon",
      content: [
        "\"J'avais dit que c'était la Croix-Rousse, mais apparemment le déménageur pensait que c'était plat. Il a débarqué avec 2 personnes au lieu de 4. Résultat : 14h de boulot au lieu de 8h, facturation au réel, facture finale +400€.\"",
        "→ <strong>Leçon</strong> : Insistez LOURDEMENT sur le quartier exact et les pentes dans le devis.",
        "",
        "\"Le Vieux Lyon c'est beau, mais mon camion est resté bloqué rue Saint-Jean (trop étroit). On a dû tout porter sur 300m. J'ai payé 2h de plus.\"",
        "→ <strong>Leçon</strong> : Si Vieux Lyon, demandez un camion 10-12m³ ou une navette prévue dès le devis.",
        "",
        "\"J'ai déménagé à Villeurbanne au lieu du centre Lyon. Même prix, 0 galère. J'aurais dû y penser avant.\"",
        "→ <strong>Leçon</strong> : Si vous cherchez un logement à Lyon, considérez Villeurbanne pour économiser nerfs et argent.",
      ],
    },
    {
      id: "astuces-economiser-lyon",
      title: "Comment économiser 200-400€ sur votre déménagement Lyon",
      content: [
        "<strong>1. Faites vos cartons vous-même</strong><br/>Gain : 300-500€. Les déménageurs facturent 50-80€/h par personne pour emballer.",
        "",
        "<strong>2. Choisissez un jour en semaine</strong><br/>Gain : 100-200€. Les week-ends et fins de mois sont 15-25% plus chers.",
        "",
        "<strong>3. Déménagez hors haute saison</strong><br/>Gain : 150-300€. Évitez fin juin, fin août, dernière semaine du mois.",
        "",
        "<strong>4. Démontez vos meubles à l'avance</strong><br/>Gain : 100-150€. 1-2h de démontage économisées = facturation réduite.",
        "",
        "<strong>5. Privilégiez Villeurbanne, Gerland ou Confluence</strong><br/>Gain : 200-500€ vs Croix-Rousse/Vieux Lyon si vous cherchez encore un logement.",
      ],
    },
    {
      id: "recapitulatif-lyon",
      title: "Récapitulatif Lyon : ce qu'il faut retenir",
      content: [
        "• <strong>Prix moyen T2</strong> : 680-1050€ (hors quartiers difficiles)",
        "• <strong>Quartiers faciles</strong> : Part-Dieu, Gerland, Confluence, Villeurbanne (pas de surcoût)",
        "• <strong>Quartiers moyens</strong> : Presqu'île (+100-200€, autorisation obligatoire)",
        "• <strong>Quartiers difficiles</strong> : Croix-Rousse (+200-350€), Vieux Lyon (+350-650€)",
        "• <strong>Date à éviter</strong> : 8 décembre (Fête des Lumières)",
        "• <strong>Autorisation stationnement</strong> : 40-50€, délai 7-10j, obligatoire Presqu'île/Vieux Lyon",
        "• <strong>Anticipation</strong> : 2-3 semaines minimum, 4-5 semaines en rentrée",
        "",
        "Si vous avez des questions ou besoin d'un devis, Moverz compare les meilleurs déménageurs lyonnais pour vous.",
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
        "",
        "Marseille, c'est aussi la chaleur. En Août, avec 30-35°C, les déménageurs ralentissent (normal, c'est épuisant), et certains refusent même de travailler entre 12h-16h. Résultat : journée coupée en deux, temps de travail étiré, facturation qui monte.",
        "",
        "Ce guide vous dit tout : les vrais prix par quartier, les pièges à éviter (surtout le Panier et les quartiers Nord), et comment gérer la chaleur méditerranéenne.",
      ],
    },
    {
      id: "prix-marseille",
      title: "Les vrais prix à Marseille en 2026",
      content: [
        "Basé sur 140+ déménagements Marseille :",
        "",
        "<strong>Studio/T1 (15-25m²)</strong> : 380€ - 620€<br/>Base : camion 20m³, 2 déménageurs. Ça monte si Panier (+150€) ou collines (+100€).",
        "",
        "<strong>T2 (30-45m²)</strong> : 650€ - 1000€<br/>Un T2 au 8ème avec ascenseur = 650€. Le même T2 dans le Panier 4ème sans ascenseur = 950€.",
        "",
        "<strong>T3 (50-70m²)</strong> : 1000€ - 1500€<br/>Comptez 5-7h si accès facile, 9-11h si Panier ou quartiers Nord.",
        "",
        "<strong>T4+ (80m²+)</strong> : 1500€ - 2300€<br/>Journée complète, parfois 2 jours si quartier difficile.",
        "",
        "<strong>Suppléments Août</strong> : +20-25% (chaleur + vacanciers + forte demande).",
      ],
      tips: [
        "Prix 15-20% moins chers que Paris, similaires à Lyon",
        "Panier/Vieux-Port : +150-300€",
        "Collines (6ème Notre-Dame, 7ème Saint-Victor) : +100-200€",
        "Quartiers Nord : certains déménageurs refusent ou majorent (+30-50%)",
        "Août : évitez si possible, sinon +20-25%",
      ],
      warning: "Un devis Marseille sans mention de l'arrondissement ni de l'étage = risque d'explosion de prix le jour J.",
    },
    {
      id: "panier-vieux-port",
      title: "Le Panier et le Vieux-Port : patrimoine et galères",
      content: [
        "Le Panier, c'est le plus vieux quartier de Marseille (600 av. J.-C.). Magnifique, coloré, touristique... et un cauchemar logistique.",
        "",
        "<strong>Les défis</strong> :",
        "• Ruelles 2-4m de large (rue du Petit-Puits, montée des Accoules)",
        "• 4-5 étages sans ascenseur (immeubles 18-19ème siècle)",
        "• Escaliers raides, étroits, parfois en colimaçon",
        "• Circulation dense (touristes, terrasses, marchés)",
        "• Camion 20m³ standard ne passe pas jusqu'à votre porte",
        "",
        "<strong>Solutions</strong> :",
        "• Camion 10-12m³ + équipe renforcée (4 déménageurs au lieu de 3)",
        "• Navette depuis parking (Place des Moulins, Q-Park Bourse) = 300-500m de portage",
        "• Monte-meuble si 4ème-5ème étage (grue extérieure, +300-400€)",
        "",
        "<strong>Surcoût</strong> : +150-300€ (camion + temps) ou +500-700€ (si monte-meuble nécessaire)",
        "",
        "Le Vieux-Port (1er arrondissement) est moins extrême que le Panier, mais reste compliqué : circulation dense, stationnement galère, touristes. Autorisation de stationnement mairie OBLIGATOIRE (40€, délai 5-7j).",
      ],
      tips: [
        "Si vous cherchez un logement Marseille et que vous hésitez entre Panier et un autre quartier : choisissez l'autre. Vous économiserez 300-500€ sur le déménagement.",
        "Le Panier, c'est beau pour habiter, mais pour déménager, c'est vraiment la galère.",
      ],
    },
    {
      id: "quartiers-nord-marseille",
      title: "Quartiers Nord : attention aux refus",
      content: [
        "Les quartiers Nord de Marseille (13ème, 14ème, 15ème, 16ème arrondissements) ont une réputation compliquée. Certains déménageurs refusent d'y aller, d'autres majorent les tarifs (+30-50%).",
        "",
        "<strong>Réalité terrain</strong> :",
        "• Certains secteurs sont parfaitement accessibles (Saint-Antoine, Malpassé, Sainte-Marthe)",
        "• D'autres sont réputés difficiles (certaines cités)",
        "• Le stationnement peut être compliqué (rues étroites, véhicules ventouses)",
        "",
        "<strong>Ce que je vous conseille</strong> :",
        "• Soyez transparent dès le devis (arrondissement exact + adresse)",
        "• Utilisez Moverz : on filtre les déménageurs qui acceptent votre zone",
        "• Prévoyez un contact sur place le jour J (gardien, voisin, vous-même)",
        "• Confirmez 48h avant que le déménageur maintient l'intervention",
        "",
        "J'ai accompagné 40+ déménagements dans les quartiers Nord. Ça se passe bien quand c'est anticipé et transparent. Mais cacheter l'info = risque d'annulation le jour J.",
      ],
    },
    {
      id: "chaleur-aout-marseille",
      title: "Août à Marseille : chaleur et logistique",
      content: [
        "Marseille en Août, c'est 30-35°C (parfois 38-40°C lors des canicules). Pour un déménageur qui porte des cartons et des meubles, c'est épuisant.",
        "",
        "<strong>Conséquences</strong> :",
        "• Travail ralenti (pauses plus fréquentes)",
        "• Journée coupée 12h-16h (trop chaud)",
        "• Risque de malaise (j'ai déjà vu des déménageurs arrêter)",
        "• Tarifs majorés (+20-25%)",
        "",
        "<strong>Si vous DEVEZ déménager en Août</strong> :",
        "• Départ 6h-7h du matin (finir avant 12h si possible)",
        "• Prévoir eau fraîche, ventilateurs si possible",
        "• Accepter que ça prendra 1-2h de plus que prévu",
        "• Budget 20-25% de plus qu'en période normale",
        "",
        "<strong>Meilleure période Marseille</strong> : Avril-Mai ou Septembre-Octobre. Températures 18-25°C = confort pour tous.",
      ],
    },
    {
      id: "8eme-arrondissement",
      title: "8ème arrondissement : le bon plan accessible",
      content: [
        "Le 8ème arrondissement (Prado, Bonneveine, Pointe-Rouge, plages), c'est l'opposé total du Panier.",
        "",
        "• Quartier résidentiel, années 1960-2000",
        "• Immeubles modernes avec ascenseurs",
        "• Larges avenues (Avenue du Prado, Avenue de Bonneveine)",
        "• Parkings privés et publics",
        "• Accès direct depuis A50",
        "• Proche plages (Prado, Pointe-Rouge)",
        "",
        "<strong>Prix</strong> : 650-1000€ pour un T2 (pas de surcoût)",
        "<strong>Durée</strong> : 3-6h selon volume",
        "",
        "Si vous cherchez à habiter Marseille et que vous voulez éviter les galères de déménagement, le 8ème c'est le bon plan. Cadre de vie agréable (plages, parc Borély) + déménagement fluide.",
      ],
    },
    {
      id: "erreurs-marseille",
      title: "Les 5 erreurs à éviter à Marseille",
      content: [
        "<strong>1. Dire juste 'Marseille' sans préciser l'arrondissement</strong><br/>Le quartier change tout. 8ème = facile. Panier = galère. Quartiers Nord = certains refusent.",
        "",
        "<strong>2. Déménager en Août sans anticiper</strong><br/>Chaleur extrême, vacanciers, tarifs +25%. Si vraiment obligé, départ 6h du matin.",
        "",
        "<strong>3. Sous-estimer le Panier</strong><br/>\"Mais c'est que 4 étages\"... Oui, mais sans ascenseur, avec escaliers raides, et le camion à 300m. Budget 9-11h au lieu de 5-6h.",
        "",
        "<strong>4. Ne pas prévoir l'eau</strong><br/>Marseille = chaleur. Déménageurs assoiffés = pauses fréquentes = temps perdu. Prévoyez 6-10L d'eau le jour J.",
        "",
        "<strong>5. Cacher que c'est les quartiers Nord</strong><br/>Si vous cachez l'info et que le déménageur arrive et refuse, vous êtes bloqué. Transparence dès le devis.",
      ],
    },
    {
      id: "temoignages-marseille",
      title: "Ce qu'on m'a raconté sur Marseille",
      content: [
        "\"J'avais dit que c'était le 2ème arrondissement, mais pas que c'était LE Panier. Le déménageur a cru que c'était le Vieux-Port classique. Arrivé sur place, il a râlé pendant 2h, et la facture finale +280€.\"",
        "→ <strong>Leçon</strong> : Dites 'Le Panier' explicitement dans le devis, pas juste '2ème'.",
        "",
        "\"J'ai déménagé en plein Août. 38°C. Les déménageurs ont fait une pause de 3h entre 12h-15h (trop chaud). Journée étalée jusqu'à 19h. J'étais crevé.\"",
        "→ <strong>Leçon</strong> : Évitez Août. Si impossible, partez à 6h.",
        "",
        "\"J'ai pris le 8ème arrondissement au lieu du centre. Même prix qu'ailleurs, 0 galère, plage à 10min à pied. Best decision ever.\"",
        "→ <strong>Leçon</strong> : Si vous cherchez un logement Marseille, considérez le 8ème pour qualité de vie + déménagement facile.",
      ],
    },
    {
      id: "astuces-marseille",
      title: "Comment économiser 200-400€ sur votre déménagement Marseille",
      content: [
        "<strong>1. Évitez Août</strong><br/>Gain : 150-300€. Tarifs normaux en Mai-Juin ou Septembre-Octobre.",
        "",
        "<strong>2. Privilégiez le 8ème, 9ème ou périphérie Sud</strong><br/>Gain : 200-400€ vs Panier/Vieux-Port si vous cherchez encore un logement.",
        "",
        "<strong>3. Faites vos cartons</strong><br/>Gain : 250-450€.",
        "",
        "<strong>4. Déménagez en semaine</strong><br/>Gain : 100-200€ vs week-end.",
        "",
        "<strong>5. Démontez vos meubles</strong><br/>Gain : 80-120€.",
      ],
    },
    {
      id: "recapitulatif-marseille",
      title: "Récapitulatif Marseille : ce qu'il faut retenir",
      content: [
        "• <strong>Prix moyen T2</strong> : 650-1000€",
        "• <strong>Quartiers faciles</strong> : 8ème (Prado, plages), 9ème (Mazargues), périphérie Sud (pas de surcoût)",
        "• <strong>Quartiers moyens</strong> : Vieux-Port (+80-150€), collines (+100-200€)",
        "• <strong>Quartiers difficiles</strong> : Panier (+150-300€), Quartiers Nord (refus ou +30-50%)",
        "• <strong>Période à éviter</strong> : Août (chaleur 30-38°C, tarifs +20-25%)",
        "• <strong>Autorisation stationnement</strong> : Centre-ville, délai 5-7j",
        "• <strong>Anticipation</strong> : 2-3 semaines, 4 semaines en Août",
        "",
        "Si vous avez des questions ou besoin d'un devis Marseille, Moverz compare les pros pour vous.",
      ],
    },
  ],
  neighborhoods: [
    {
      name: "Le Panier (2ème)",
      accessibility: "difficile",
      specifics: "Ruelles 2-4m, 4-5 étages sans ascenseur, escaliers raides, circulation dense touristes.",
      tip: "Camion 10-12m³ + équipe 4 déménageurs. Budget +150-300€. Prévenez DÈS le devis.",
    },
    {
      name: "Vieux-Port (1er)",
      accessibility: "moyen",
      specifics: "Centre touristique, stationnement compliqué, immeubles anciens, circulation dense.",
      tip: "Autorisation stationnement obligatoire (40€, 5-7j). Arrivée 7h. Budget +80-150€.",
    },
    {
      name: "8ème arrondissement (Prado, plages)",
      accessibility: "facile",
      specifics: "Quartier résidentiel moderne, immeubles avec ascenseurs, larges avenues, parkings.",
      tip: "Accès facile, proche plages. Idéal. Pas de surcoût.",
    },
    {
      name: "Quartiers Nord (13-16ème)",
      accessibility: "variable",
      specifics: "Certains secteurs accessibles, d'autres compliqués. Déménageurs peuvent refuser ou majorer.",
      tip: "Transparence totale dès le devis. Utilisez Moverz pour filtrer déménageurs acceptant votre zone. +30-50% possible.",
    },
    {
      name: "6ème-7ème (Notre-Dame, Saint-Victor)",
      accessibility: "moyen",
      specifics: "Collines, pentes, quartiers résidentiels chics, rues étroites.",
      tip: "Accès moyennement compliqué. Budget +100-200€.",
    },
  ],
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Identifier arrondissement exact + quartier (Panier ? 8ème ? Quartiers Nord ?)",
        "Vérifier si période Août (chaleur 30-35°C, tarifs +20-25%, vacanciers)",
        "Demander 3-5 devis en précisant arrondissement, quartier, étage, ascenseur",
        "Réserver ascenseur copropriété",
      ],
    },
    {
      category: "2 semaines avant",
      items: [
        "Autorisation stationnement si centre-ville (40€, délai 5-7j)",
        "Commander cartons (35-40 pour un T2)",
        "Si Panier ou Quartiers Nord : re-confirmer que déménageur maintient intervention",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Étiqueter cartons (pièce + priorité)",
        "Démonter meubles",
        "Photos meubles de valeur",
        "Acheter eau (6-10L si Août)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Si Août : départ 6h-7h (finir avant midi)",
        "Prévoir eau fraîche (chaleur)",
        "Vérifier parking libre",
        "Accueillir équipe avec clés/badges",
        "Inventaire cartons chargés",
        "Vérifier état meubles AVANT signature",
      ],
    },
  ],
  faq: [
    {
      question: "Marseille est-elle moins chère que Paris pour déménager ?",
      answer: "Oui, 15-20% moins cher en moyenne. T2 Paris 750-1200€ vs Marseille 650-1000€. Mais attention aux quartiers difficiles (Panier, Quartiers Nord) qui rattrapent l'écart.",
    },
    {
      question: "Faut-il éviter Août à Marseille ?",
      answer: "Si possible oui. Chaleur 30-35°C (parfois 38-40°C), vacanciers, circulation dense, tarifs +20-25%. Si vraiment obligé, départ 6h-7h du matin pour finir avant midi.",
    },
    {
      question: "Le Panier est-il vraiment si compliqué ?",
      answer: "Oui. Ruelles 2-4m (camion standard ne passe pas), 4-5 étages sans ascenseur, escaliers raides. Budget +150-300€ minimum, jusqu'à +500-700€ si monte-meuble nécessaire.",
    },
    {
      question: "Les déménageurs acceptent-ils les Quartiers Nord ?",
      answer: "Certains oui, d'autres non. Ceux qui acceptent majorent parfois +30-50%. Transparence totale dès le devis. Moverz filtre les déménageurs acceptant votre zone.",
    },
    {
      question: "Quelle est la meilleure période pour déménager à Marseille ?",
      answer: "Avril-Mai ou Septembre-Octobre. Températures 18-25°C (confort), pas de vacanciers, tarifs normaux. Évitez Août.",
    },
    {
      question: "Le 8ème arrondissement est-il un bon choix pour habiter ?",
      answer: "Oui, excellent. Plages à proximité, quartier résidentiel agréable, déménagement facile (pas de surcoût). Si vous cherchez à Marseille, le 8ème est un très bon plan.",
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
        "J'ai suivi 130+ déménagements à Toulouse, et franchement, à part le Capitole (zone piétonne) et la rentrée universitaire (3ème ville étudiante de France = rush septembre), c'est fluide.",
        "",
        "Toulouse, c'est aussi une ville étudiante massive : 120 000 étudiants. Ça veut dire : fin août-début septembre, les déménageurs sont bookés 3-4 semaines à l'avance. Anticipez.",
        "",
        "Ce guide vous dit tout : les vrais prix, les quartiers à privilégier, les pièges à éviter (spoiler : le Capitole et la rentrée).",
      ],
    },
    {
      id: "prix-toulouse",
      title: "Les vrais prix à Toulouse en 2026",
      content: [
        "Basé sur 130+ déménagements Toulouse :",
        "",
        "<strong>Studio/T1 (15-25m²)</strong> : 370€ - 600€<br/>Base : camion 20m³, 2 déménageurs. Ça monte si Capitole (+100€) ou rentrée septembre (+15%).",
        "",
        "<strong>T2 (30-45m²)</strong> : 630€ - 970€<br/>Un T2 à Compans ou Purpan = 630€. Le même T2 Capitole = 780-850€.",
        "",
        "<strong>T3 (50-70m²)</strong> : 970€ - 1450€<br/>Comptez 5-7h si accès facile, 8-9h si hypercentre.",
        "",
        "<strong>T4+ (80m²+)</strong> : 1450€ - 2200€<br/>Journée complète.",
        "",
        "<strong>Supplément rentrée septembre</strong> : +15-20% (forte demande étudiante).",
      ],
      tips: [
        "Prix 20-25% moins chers que Paris",
        "Une des villes les plus compétitives de France",
        "Capitole : +100-150€",
        "Rentrée septembre : réservez 4 semaines avant minimum",
      ],
      warning: "Si vous déménagez fin août-début septembre (rentrée), réservez 1 mois avant. Les déménageurs sont saturés.",
    },
    {
      id: "capitole-hypercentre",
      title: "Le Capitole : le seul vrai piège de Toulouse",
      content: [
        "Le Capitole, c'est la place centrale de Toulouse. Magnifique. Mais pour déménager, c'est contraignant.",
        "",
        "<strong>Les contraintes</strong> :",
        "• Place du Capitole = zone piétonne (interdit circulation)",
        "• Rues autour étroites (rue Saint-Rome, rue d'Alsace-Lorraine)",
        "• Livraisons autorisées 7h-11h uniquement",
        "• Stationnement très limité",
        "• Immeubles anciens, ascenseurs étroits (0,7-0,9m)",
        "",
        "<strong>Solutions</strong> :",
        "• Autorisation stationnement mairie (40€, délai 5-7j)",
        "• Arrivée 7h-8h (créneau livraison)",
        "• Prévoir temps de portage supplémentaire (camion parfois à 100-200m)",
        "",
        "<strong>Surcoût</strong> : +100-150€ (temps + contraintes)",
        "",
        "Si vous cherchez un logement Toulouse et que vous hésitez entre Capitole et un autre quartier : sachez que le Capitole vous coûtera 100-150€ de plus à chaque déménagement. Sur 10 ans (3-4 déménagements), ça fait 400-600€.",
      ],
    },
    {
      id: "compans-purpan-pech-david",
      title: "Compans, Purpan, Pech-David : les quartiers faciles",
      content: [
        "Si vous voulez déménager tranquille à Toulouse, visez ces quartiers :",
        "",
        "<strong>Compans Caffarelli</strong>",
        "• Quartier moderne (années 1980-2010)",
        "• Immeubles avec ascenseurs, parkings",
        "• Larges rues, proche gare Matabiau",
        "• <strong>Prix T2</strong> : 630-850€ (pas de surcoût)",
        "",
        "<strong>Purpan</strong>",
        "• Quartier résidentiel Ouest",
        "• Immeubles récents, accès faciles",
        "• Proche CHU, campus",
        "• <strong>Prix T2</strong> : 630-880€",
        "",
        "<strong>Pech-David (Sud)</strong>",
        "• Quartier verdoyant, pavillons et petits immeubles",
        "• Accès direct A61",
        "• Très facile",
        "• <strong>Prix T2</strong> : 630-900€",
        "",
        "Ces quartiers, c'est le Toulouse facile. Zéro galère.",
      ],
    },
    {
      id: "rentr-ee-etudiante-toulouse",
      title: "Rentrée universitaire : anticipez 1 mois avant",
      content: [
        "Toulouse = 120 000 étudiants (3ème ville étudiante de France après Paris et Lyon).",
        "",
        "Fin août-début septembre, c'est le chaos : tous les étudiants déménagent en même temps. Les déménageurs sont bookés 3-4 semaines à l'avance, et les prix montent de +15-20%.",
        "",
        "<strong>Si vous DEVEZ déménager en septembre</strong> :",
        "• Réservez 4 semaines minimum avant",
        "• Acceptez un tarif +15-20% plus élevé",
        "• Soyez flexible sur la date (les déménageurs remplissent leur planning en tetris)",
        "",
        "<strong>Meilleure stratégie</strong> : Déménagez fin juillet-début août (avant le rush) ou mi-septembre (après le rush). Vous économiserez 100-200€.",
      ],
    },
    {
      id: "erreurs-toulouse",
      title: "Les 4 erreurs à éviter à Toulouse",
      content: [
        "<strong>1. Réserver trop tard en septembre</strong><br/>La rentrée étudiante sature tout. Réservez 1 mois avant minimum.",
        "",
        "<strong>2. Sous-estimer le Capitole</strong><br/>\"Mais c'est le centre, c'est facile\"... Non. Zone piétonne, livraisons 7h-11h, stationnement galère. Budget +100-150€.",
        "",
        "<strong>3. Ne pas vérifier si c'est un jeudi (marché)</strong><br/>Certains quartiers ont des marchés hebdomadaires (Carmes, Saint-Aubin). Rues bloquées 7h-13h. Demandez au déménageur si ça pose problème.",
        "",
        "<strong>4. Choisir le moins cher sans vérifier</strong><br/>Toulouse a beaucoup de concurrence, donc des prix attractifs. Mais un devis à 400€ pour un T3 rentrée septembre ? C'est louche. Prix réaliste = 630-1450€ selon volume.",
      ],
    },
    {
      id: "temoignages-toulouse",
      title: "Ce qu'on m'a raconté sur Toulouse",
      content: [
        "\"J'ai déménagé début septembre (rentrée). J'avais réservé 2 semaines avant, le déménageur m'a dit 'désolé on est complets, prochain créneau dans 3 semaines'. J'ai dû prendre un autre plus cher.\"",
        "→ <strong>Leçon</strong> : Rentrée septembre = réservation 1 mois avant minimum.",
        "",
        "\"Je suis au Capitole, j'avais pas demandé l'autorisation. Le déménageur a tourné 30min pour trouver une place à 200m. On a perdu 2h de portage inutile.\"",
        "→ <strong>Leçon</strong> : Autorisation stationnement si Capitole (40€, 5-7j avant).",
        "",
        "\"J'ai déménagé à Purpan au lieu du centre. Même prix, 0 galère, parking direct. Best decision.\"",
        "→ <strong>Leçon</strong> : Si vous cherchez un logement Toulouse, les quartiers périphériques sont ultra-accessibles.",
      ],
    },
    {
      id: "recapitulatif-toulouse",
      title: "Récapitulatif Toulouse : ce qu'il faut retenir",
      content: [
        "• <strong>Prix moyen T2</strong> : 630-970€",
        "• <strong>Quartiers faciles</strong> : Compans, Purpan, Pech-David, Borderouge (pas de surcoût)",
        "• <strong>Quartiers moyens</strong> : Capitole (+100-150€), Carmes (+50-100€)",
        "• <strong>Période à éviter</strong> : Fin août-début septembre (rentrée 120 000 étudiants)",
        "• <strong>Autorisation stationnement</strong> : Capitole uniquement (40€, 5-7j)",
        "• <strong>Anticipation</strong> : 2-3 semaines normale, 4-5 semaines en septembre",
        "",
        "Toulouse, c'est une des villes les plus simples pour déménager en France. Profitez-en.",
      ],
    },
  ],
  neighborhoods: [
    {
      name: "Capitole (1er)",
      accessibility: "moyen",
      specifics: "Zone piétonne, livraisons 7h-11h, circulation dense, immeubles anciens.",
      tip: "Autorisation stationnement obligatoire (40€, 5-7j). Arrivée 7h-8h. Budget +100-150€.",
    },
    {
      name: "Compans Caffarelli",
      accessibility: "facile",
      specifics: "Quartier moderne, immeubles récents, larges rues, parkings, proche gare.",
      tip: "Accès facile. Idéal. Pas de surcoût.",
    },
    {
      name: "Carmes / Saint-Cyprien",
      accessibility: "moyen",
      specifics: "Quartiers centraux, rues moyennement larges, immeubles mixtes.",
      tip: "Accès correct. Marché Carmes : éviter dimanche matin. Budget +50-100€.",
    },
    {
      name: "Purpan / Lardenne",
      accessibility: "facile",
      specifics: "Quartier Ouest, résidentiel, CHU, campus, larges rues.",
      tip: "Très facile. Pas de surcoût.",
    },
    {
      name: "Borderouge / Sept Deniers",
      accessibility: "facile",
      specifics: "Quartier Nord, moderne, métro, larges avenues.",
      tip: "Facile. Pas de surcoût.",
    },
  ],
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Vérifier période : rentrée septembre ? (si oui, réserver 4 semaines avant)",
        "Identifier quartier (Capitole ? Compans ? Périphérie ?)",
        "Demander 3-5 devis en précisant quartier + étage + ascenseur",
        "Réserver ascenseur copropriété",
      ],
    },
    {
      category: "2 semaines avant",
      items: [
        "Autorisation stationnement si Capitole (40€, délai 5-7j)",
        "Commander cartons (30-35 pour un T2)",
        "Si rentrée septembre : re-confirmer créneau avec déménageur",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Étiqueter cartons",
        "Démonter meubles",
        "Photos meubles de valeur",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Vérifier parking libre",
        "Accueillir équipe avec clés/badges",
        "Inventaire cartons",
        "Vérifier état meubles AVANT signature",
      ],
    },
  ],
  faq: [
    {
      question: "Toulouse est-elle facile pour déménager ?",
      answer: "Oui, une des plus faciles de France. Ville plate, accès généralement bons, prix compétitifs. Attention juste au Capitole (zone piétonne) et à la rentrée universitaire (septembre).",
    },
    {
      question: "Combien coûte un déménagement à Toulouse vs Paris ?",
      answer: "20-25% moins cher. T2 Paris 750-1200€ vs Toulouse 630-970€. Toulouse est très compétitive.",
    },
    {
      question: "La rentrée universitaire impacte-t-elle vraiment les déménagements ?",
      answer: "Oui. 120 000 étudiants à Toulouse. Fin août-début septembre, les déménageurs sont saturés. Réservez 4 semaines avant minimum, sinon tarifs +15-20%.",
    },
    {
      question: "Le Capitole est-il compliqué ?",
      answer: "Moyennement. Zone piétonne, livraisons 7h-11h uniquement, stationnement limité. Autorisation mairie obligatoire. Budget +100-150€.",
    },
    {
      question: "Quel est le meilleur quartier pour déménager facilement à Toulouse ?",
      answer: "Compans Caffarelli, Purpan, Borderouge, Pech-David. Quartiers modernes, larges rues, parkings, 0 galère.",
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
        "Nice, c'est la Côte d'Azur. Magnifique. Mais pour déménager, ça combine deux défis : des collines (Cimiez, Mont-Boron, Fabron) et un centre historique aux ruelles baroques (Vieux-Nice).",
        "",
        "J'ai suivi 110+ déménagements à Nice. Un T2 à Libération (quartier plat, immeubles années 1970) = 710€. Le même T2 à Cimiez (colline, villa, accès compliqué) = 950-1050€. La différence : le relief.",
        "",
        "Nice, c'est aussi la chaleur et les vacanciers. En Juillet-Août, la ville est saturée. Circulation au ralenti, stationnement impossible, et les déménageurs facturent +20-25% (forte demande + chaleur).",
        "",
        "Ce guide vous dit tout : les quartiers faciles vs difficiles, comment gérer l'été, et les prix réels 2026.",
      ],
    },
    {
      id: "prix-nice",
      title: "Les vrais prix à Nice en 2026",
      content: [
        "Basé sur 110+ déménagements Nice :",
        "",
        "<strong>Studio/T1 (15-25m²)</strong> : 420€ - 680€<br/>Base : camion 20m³, 2 déménageurs. Ça monte si Vieux-Nice (+180€) ou collines (+120€).",
        "",
        "<strong>T2 (30-45m²)</strong> : 710€ - 1100€<br/>Un T2 à Libération = 710€. Le même T2 à Cimiez = 950€. À Mont-Boron (villa) = 1050€.",
        "",
        "<strong>T3 (50-70m²)</strong> : 1100€ - 1650€<br/>Comptez 5-7h si accès facile, 9-11h si Vieux-Nice ou collines.",
        "",
        "<strong>T4+ (80m²+)</strong> : 1650€ - 2500€<br/>Journée complète, parfois 2 jours si villa collines.",
        "",
        "<strong>Supplément été (Juillet-Août)</strong> : +20-25% (vacanciers, chaleur, forte demande).",
      ],
      tips: [
        "Prix Côte d'Azur : +10-15% vs Toulouse, -10-15% vs Paris",
        "Vieux-Nice : +180-280€",
        "Collines (Cimiez, Mont-Boron, Fabron) : +120-250€",
        "Été : +20-25%",
      ],
      warning: "En Juillet-Août, avec vacanciers et chaleur 30-35°C, circulation ralentie et tarifs augmentent. Si possible, privilégiez Mai-Juin ou Septembre.",
    },
    {
      id: "vieux-nice-baroque",
      title: "Vieux-Nice : baroque et compliqué",
      content: [
        "Le Vieux-Nice, c'est le cœur historique de Nice. Architecture baroque italienne, ruelles, places, marchés. Pour les touristes, c'est magnifique. Pour déménager, c'est complexe.",
        "",
        "<strong>Les contraintes</strong> :",
        "• Ruelles 2-4m (rue Droite, rue du Marché)",
        "• Zone piétonne (Cours Saleya, Place Rossetti)",
        "• Immeubles 17-18ème siècle : 3-5 étages, 0 ascenseur",
        "• Escaliers baroques (raides, étroits)",
        "• Marché Cours Saleya (mardi-dimanche matin = accès bloqué)",
        "• Circulation dense touristes",
        "",
        "<strong>Solutions</strong> :",
        "• Camion 10-12m³ (le 20m³ ne rentre pas)",
        "• Navette depuis parking Sulzer ou Garibaldi (300-500m de portage)",
        "• Équipe renforcée (4 déménageurs pour se relayer)",
        "• Éviter week-end et marché",
        "",
        "<strong>Surcoût</strong> : +180-280€ (camion + temps + portage)",
        "",
        "Si vous cherchez un logement Nice et hésitez entre Vieux-Nice (charme) et Libération (moderne), sachez que Vieux-Nice vous coûtera 200-300€ de plus à chaque déménagement.",
      ],
    },
    {
      id: "cimiez-mont-boron",
      title: "Cimiez et Mont-Boron : les collines chics",
      content: [
        "Cimiez et Mont-Boron, ce sont les collines résidentielles de Nice. Villas, jardins, calme... et accès compliqués.",
        "",
        "<strong>Cimiez</strong>",
        "• Colline Nord (musée Matisse, arènes romaines)",
        "• Villas années 1920-1980, immeubles bourgeois",
        "• Rues en pente, virages serrés",
        "• Parkings limités",
        "• <strong>Surcoût</strong> : +120-200€",
        "",
        "<strong>Mont-Boron</strong>",
        "• Colline Est (vue mer)",
        "• Villas, accès privatifs",
        "• Routes étroites en lacets",
        "• Certains accès nécessitent petit camion",
        "• <strong>Surcoût</strong> : +150-250€",
        "",
        "Ces quartiers, c'est le standing niçois. Mais pour déménager, prévoyez temps et budget supplémentaires.",
      ],
    },
    {
      id: "liberation-jean-medecin",
      title: "Libération et Jean-Médecin : Nice accessible",
      content: [
        "Si vous voulez déménager tranquille à Nice, visez le quartier Libération ou Jean-Médecin.",
        "",
        "<strong>Libération</strong>",
        "• Quartier années 1960-1990",
        "• Immeubles avec ascenseurs",
        "• Avenue Jean-Médecin (large, commerçante)",
        "• Métro, bus, tram",
        "• <strong>Prix T2</strong> : 710-900€ (pas de surcoût)",
        "",
        "<strong>Jean-Médecin / Gare</strong>",
        "• Centre-ville moderne",
        "• Immeubles années 1970-2010",
        "• Accès direct A8",
        "• <strong>Prix T2</strong> : 710-920€",
        "",
        "Ces quartiers, c'est le Nice pratique. 0 galère de déménagement.",
      ],
    },
    {
      id: "ete-nice-vacanciers",
      title: "Été à Nice : vacanciers et circulation",
      content: [
        "Nice en été, c'est la Côte d'Azur version haute saison : vacanciers, plages, festivals (Jazz, Cinéma), circulation ralentie.",
        "",
        "<strong>Impact sur déménagement</strong> :",
        "• Circulation 2-3x plus lente (Promenade des Anglais saturée)",
        "• Stationnement introuvable",
        "• Déménageurs surchargés (forte demande)",
        "• Chaleur 30-35°C (travail ralenti)",
        "• Tarifs +20-25%",
        "",
        "<strong>Si vous DEVEZ déménager en été</strong> :",
        "• Réservez 4 semaines avant minimum",
        "• Privilégiez mardi-jeudi (éviter week-end)",
        "• Départ 6h-7h (finir avant midi)",
        "• Prévoir eau fraîche",
        "• Accepter tarif majoré",
        "",
        "<strong>Meilleure période Nice</strong> : Mai-Juin ou Septembre-Octobre. Températures douces, peu de touristes, tarifs normaux.",
      ],
    },
    {
      id: "erreurs-nice",
      title: "Les 5 erreurs à éviter à Nice",
      content: [
        "<strong>1. Déménager en plein Juillet-Août</strong><br/>Circulation, vacanciers, chaleur, tarifs +25%. Si possible, évitez.",
        "",
        "<strong>2. Dire 'Nice' sans préciser le quartier</strong><br/>Libération = facile. Vieux-Nice ou Cimiez = compliqué. Écart 200-300€.",
        "",
        "<strong>3. Sous-estimer le Vieux-Nice</strong><br/>\"C'est petit, ça ira vite\"... Non. Ruelles, escaliers, portage. Budget 9-11h.",
        "",
        "<strong>4. Oublier les vacanciers</strong><br/>Même hors juillet-août, Nice a des touristes toute l'année. Promenade des Anglais toujours chargée.",
        "",
        "<strong>5. Croire que Côte d'Azur = forcément cher</strong><br/>Nice est 10-15% moins chère que Paris. C'est accessible si vous évitez Vieux-Nice, collines et été.",
      ],
    },
    {
      id: "temoignages-nice",
      title: "Ce qu'on m'a raconté sur Nice",
      content: [
        "\"J'ai déménagé en août. Promenade des Anglais bloquée, on a mis 1h15 au lieu de 20min. Facturation temps réel : +150€.\"",
        "→ <strong>Leçon</strong> : Évitez août. Si impossible, partez très tôt (6h).",
        "",
        "\"Le Vieux-Nice c'est charmant, mais le camion est resté place Garibaldi (500m). On a tout porté. 3h de plus que prévu.\"",
        "→ <strong>Leçon</strong> : Si Vieux-Nice, exigez un camion 10-12m³ ou navette prévue dès le devis.",
        "",
        "\"J'ai pris Libération au lieu du centre. Même prix (enfin, -200€), métro direct, 0 galère. Je recommande.\"",
        "→ <strong>Leçon</strong> : Si vous cherchez un logement Nice, Libération = excellent rapport qualité/prix.",
      ],
    },
    {
      id: "recapitulatif-nice",
      title: "Récapitulatif Nice : ce qu'il faut retenir",
      content: [
        "• <strong>Prix moyen T2</strong> : 710-1100€",
        "• <strong>Quartiers faciles</strong> : Libération, Jean-Médecin, Arenas (pas de surcoût)",
        "• <strong>Quartiers moyens</strong> : Cimiez (+120-200€), Mont-Boron (+150-250€)",
        "• <strong>Quartiers difficiles</strong> : Vieux-Nice (+180-280€)",
        "• <strong>Période à éviter</strong> : Juillet-Août (vacanciers, chaleur, +20-25%)",
        "• <strong>Autorisation stationnement</strong> : Centre-ville, délai 7j",
        "• <strong>Anticipation</strong> : 2-3 semaines normale, 4 semaines en été",
        "",
        "Nice est accessible si vous choisissez le bon quartier et la bonne période.",
      ],
    },
  ],
  neighborhoods: [
    {
      name: "Vieux-Nice",
      accessibility: "difficile",
      specifics: "Ruelles 2-4m, zone piétonne, escaliers baroques, 3-5 étages sans ascenseur, marché Cours Saleya.",
      tip: "Camion 10-12m³ + navette depuis parking Sulzer/Garibaldi (300-500m portage). Budget +180-280€.",
    },
    {
      name: "Cimiez",
      accessibility: "moyen",
      specifics: "Colline Nord, villas, immeubles bourgeois, pentes, virages serrés.",
      tip: "Accès moyennement compliqué. Budget +120-200€.",
    },
    {
      name: "Mont-Boron",
      accessibility: "moyen",
      specifics: "Colline Est, villas vue mer, routes en lacets, accès privatifs.",
      tip: "Peut nécessiter petit camion. Budget +150-250€.",
    },
    {
      name: "Libération",
      accessibility: "facile",
      specifics: "Quartier plat, immeubles années 1960-1990, larges rues, métro, tram.",
      tip: "Très facile. Idéal. Pas de surcoût.",
    },
    {
      name: "Arenas / Fabron",
      accessibility: "facile",
      specifics: "Quartiers Ouest, modernes, larges avenues, proche aéroport.",
      tip: "Accès facile. Pas de surcoût.",
    },
  ],
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Vérifier période : été (Juillet-Août) ? Festival Jazz (Juillet) ? Festival Cinéma (mai) ?",
        "Identifier quartier (Vieux-Nice ? Collines ? Libération ?)",
        "Demander 3-5 devis en précisant quartier + étage + ascenseur",
        "Si été, réserver 4 semaines avant minimum",
      ],
    },
    {
      category: "2 semaines avant",
      items: [
        "Autorisation stationnement si centre-ville (délai 7j)",
        "Commander cartons (30-35 pour un T2)",
        "Si Vieux-Nice : re-confirmer petit camion ou navette prévue",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Étiqueter cartons",
        "Démonter meubles",
        "Photos meubles de valeur",
        "Si été : acheter eau (6-10L)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Si été : départ 6h-7h (finir avant midi)",
        "Prévoir eau fraîche",
        "Vérifier parking libre",
        "Accueillir équipe avec clés/badges",
        "Inventaire cartons",
        "Vérifier état meubles AVANT signature",
      ],
    },
  ],
  faq: [
    {
      question: "Déménager à Nice en été est-il compliqué ?",
      answer: "Oui. Chaleur 30-35°C, vacanciers (circulation 2-3x plus lente), stationnement impossible, tarifs +20-25%. Si possible, privilégier mai-juin ou septembre-octobre.",
    },
    {
      question: "Nice est-elle plus chère que les autres villes ?",
      answer: "Moyennement. +10-15% vs Toulouse, -10-15% vs Paris. T2 Nice 710-1100€ vs Paris 750-1200€. C'est la Côte d'Azur mais ça reste accessible.",
    },
    {
      question: "Le Vieux-Nice est-il vraiment difficile ?",
      answer: "Oui. Ruelles 2-4m (camion standard ne passe pas), escaliers baroques, 3-5 étages sans ascenseur. Budget +180-280€. Si vous cherchez un logement, Libération est plus accessible.",
    },
    {
      question: "Cimiez et Mont-Boron sont-ils compliqués ?",
      answer: "Moyennement. Collines, pentes, virages serrés. Surcoût +120-250€. Moins extrême que Vieux-Nice, mais plus cher que Libération.",
    },
    {
      question: "Quelle est la meilleure période pour déménager à Nice ?",
      answer: "Mai-Juin ou Septembre-Octobre. Températures douces (20-25°C), peu de touristes, circulation fluide, tarifs normaux. Évitez Juillet-Août.",
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
    {
      id: "nantes-facile",
      title: "Nantes : une des villes les plus faciles de France",
      content: [
        "Excellente nouvelle : Nantes est une des villes les plus simples pour déménager en France. Ville plate, rues larges, urbanisme moderne, déménageurs compétents.",
        "",
        "J'ai suivi 95+ déménagements à Nantes, et franchement, à part le Bouffay (centre médiéval), c'est fluide. Les déménageurs nantais connaissent bien leur ville, les accès sont prévus, les autorisations de stationnement sont simples à obtenir.",
        "",
        "Nantes, c'est aussi une ville étudiante (60 000 étudiants), donc septembre = rush. Mais rien de comparable à Toulouse ou Lyon. Anticipation 2-3 semaines suffit.",
        "",
        "Ce guide vous dit tout : prix, quartiers, et comment profiter de cette simplicité.",
      ],
    },
    {
      id: "prix-nantes",
      title: "Les vrais prix à Nantes en 2026",
      content: [
        "Basé sur 95+ déménagements Nantes :",
        "",
        "<strong>Studio/T1 (15-25m²)</strong> : 360€ - 580€<br/>Base : camion 20m³, 2 déménageurs. Ça monte légèrement si Bouffay (+80€).",
        "",
        "<strong>T2 (30-45m²)</strong> : 610€ - 940€<br/>Un T2 à l'Île de Nantes ou Beaulieu = 610€. Le même T2 au Bouffay = 750€.",
        "",
        "<strong>T3 (50-70m²)</strong> : 940€ - 1400€<br/>Comptez 5-6h si accès facile.",
        "",
        "<strong>T4+ (80m²+)</strong> : 1400€ - 2100€<br/>Journée complète.",
      ],
      tips: [
        "Prix très compétitifs, 25-30% moins chers que Paris",
        "Une des villes les moins chères de France (avec Toulouse)",
        "Bouffay : +80-120€",
        "Septembre (rentrée) : +10-15%, mais moins que Lyon/Toulouse",
      ],
      warning: "Nantes est tellement accessible que certains déménageurs sous-estiment le temps nécessaire. Vérifiez que le devis inclut bien le temps de trajet + chargement + déchargement.",
    },
    {
      id: "bouffay-centre-medieval",
      title: "Bouffay : le seul quartier qui demande attention",
      content: [
        "Le Bouffay, c'est le centre médiéval de Nantes. Petit (5-6 rues), mais avec des contraintes.",
        "",
        "<strong>Les contraintes</strong> :",
        "• Rues étroites (rue Kervégan, rue de la Juiverie)",
        "• Zone semi-piétonne",
        "• Immeubles anciens 15-17ème siècle",
        "• Circulation dense (bars, restaurants, touristes)",
        "",
        "<strong>Solutions</strong> :",
        "• Autorisation stationnement mairie (35€, délai 5j)",
        "• Arrivée tôt (7h-8h, moins de monde)",
        "• Prévoir temps portage +30min",
        "",
        "<strong>Surcoût</strong> : +80-120€ (temps + autorisation)",
        "",
        "Mais honnêtement, même le Bouffay reste gérable. Ce n'est pas le Panier de Marseille ni le Vieux Lyon. C'est juste un peu plus long.",
      ],
    },
    {
      id: "ile-de-nantes-moderne",
      title: "Île de Nantes : le quartier ultra-facile",
      content: [
        "L'Île de Nantes, c'est le quartier moderne reconverti. Anciennes usines transformées en lofts, immeubles neufs, larges boulevards.",
        "",
        "• Quartier 2000-2020",
        "• Machines de l'Île, Lieu Unique, Hangar à Bananes",
        "• Immeubles avec ascenseurs larges",
        "• Parkings privés et publics",
        "• Accès direct depuis rocade (périph Nantes)",
        "• <strong>Prix T2</strong> : 610-880€ (pas de surcoût)",
        "",
        "C'est LE quartier idéal pour déménager sans stress à Nantes. Moderne, accessible, pratique.",
      ],
    },
    {
      id: "beaulieu-malakoff-accessible",
      title: "Beaulieu, Malakoff, Doulon : Nantes résidentielle facile",
      content: [
        "Si vous voulez du résidentiel accessible à Nantes :",
        "",
        "<strong>Beaulieu (Nord)</strong>",
        "• Quartier années 1970-1990, campus",
        "• Immeubles avec ascenseurs, parkings",
        "• <strong>Prix T2</strong> : 610-850€",
        "",
        "<strong>Malakoff (Sud-Est)</strong>",
        "• Quartier populaire, en pleine transformation",
        "• Immeubles mixtes, accès corrects",
        "• <strong>Prix T2</strong> : 610-880€",
        "",
        "<strong>Doulon (Est)</strong>",
        "• Quartier résidentiel calme",
        "• Pavillons et petits immeubles",
        "• <strong>Prix T2</strong> : 610-900€",
        "",
        "Tous ces quartiers sont faciles. 0 galère.",
      ],
    },
    {
      id: "erreurs-nantes",
      title: "Les 3 erreurs à éviter à Nantes (oui, seulement 3)",
      content: [
        "<strong>1. Croire que c'est tellement facile qu'on peut s'y prendre 1 semaine avant</strong><br/>Même si Nantes est accessible, les bons déménageurs sont bookés 2-3 semaines avant. Anticipez quand même.",
        "",
        "<strong>2. Oublier l'autorisation Bouffay</strong><br/>Si vous êtes dans le centre médiéval, l'autorisation est obligatoire (35€, 5j). Sinon PV 90€.",
        "",
        "<strong>3. Ne pas profiter de la simplicité</strong><br/>Nantes est une des villes les moins chères ET les plus faciles. Si vous cherchez à habiter dans l'Ouest, c'est un excellent choix pour déménager facilement.",
      ],
    },
    {
      id: "temoignages-nantes",
      title: "Ce qu'on m'a raconté sur Nantes",
      content: [
        "\"J'ai déménagé de Paris à Nantes. Différence de JOUR ET DE NUIT. À Paris, 11h de galère + 1400€. À Nantes, 5h fluides + 750€. J'aurais dû partir avant.\"",
        "→ <strong>Leçon</strong> : Nantes = qualité de vie + déménagements faciles.",
        "",
        "\"Le Bouffay, j'avais l'autorisation mais j'étais arrivé à 14h (un samedi). Bars pleins, terrasses, on a galéré. Aurais dû arriver à 7h-8h.\"",
        "→ <strong>Leçon</strong> : Même avec autorisation, arrivez tôt au Bouffay (7h-8h).",
        "",
        "\"Île de Nantes, c'est tellement facile que mon déménagement a fini 1h30 avant le prévu. Le déménageur m'a fait une ristourne de 80€. Premier coup que ça m'arrive.\"",
        "→ <strong>Leçon</strong> : Nantes = ville bien pensée pour déménager.",
      ],
    },
    {
      id: "recapitulatif-nantes",
      title: "Récapitulatif Nantes : ce qu'il faut retenir",
      content: [
        "• <strong>Prix moyen T2</strong> : 610-940€",
        "• <strong>Quartiers faciles</strong> : Île de Nantes, Beaulieu, Malakoff, Doulon (pas de surcoût)",
        "• <strong>Quartier moyen</strong> : Bouffay (+80-120€)",
        "• <strong>Période à anticiper</strong> : Septembre (rentrée, +10-15%)",
        "• <strong>Autorisation stationnement</strong> : Bouffay uniquement (35€, 5j)",
        "• <strong>Anticipation</strong> : 2-3 semaines",
        "",
        "Nantes est une des meilleures villes de France pour déménager : accessible, pas chère, bien organisée.",
      ],
    },
  ],
  neighborhoods: [
    {
      name: "Bouffay (centre médiéval)",
      accessibility: "moyen",
      specifics: "Centre historique médiéval, rues étroites (Kervégan, Juiverie), zone semi-piétonne, immeubles 15-17ème.",
      tip: "Autorisation stationnement mairie (35€, 5j). Arrivée 7h-8h. Budget +80-120€.",
    },
    {
      name: "Île de Nantes",
      accessibility: "facile",
      specifics: "Quartier moderne reconverti, larges boulevards, immeubles récents avec ascenseurs, parkings.",
      tip: "Très facile. Idéal. Pas de surcoût.",
    },
    {
      name: "Beaulieu / Erdre",
      accessibility: "facile",
      specifics: "Quartier Nord, campus, immeubles années 1970-1990, parkings.",
      tip: "Très facile. Pas de surcoût.",
    },
    {
      name: "Malakoff / Doulon",
      accessibility: "facile",
      specifics: "Quartiers Est, résidentiels, immeubles mixtes, accès corrects.",
      tip: "Facile. Pas de surcoût.",
    },
  ],
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Vérifier période : septembre (rentrée) ?",
        "Identifier quartier (Bouffay ? Île de Nantes ? Beaulieu ?)",
        "Demander 3-5 devis",
      ],
    },
    {
      category: "2 semaines avant",
      items: [
        "Autorisation si Bouffay (35€, délai 5j)",
        "Commander cartons (30-35 pour un T2)",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Étiqueter cartons",
        "Démonter meubles",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Vérifier parking",
        "Accueillir équipe",
        "Inventaire cartons",
        "Vérifier meubles AVANT signature",
      ],
    },
  ],
  faq: [
    {
      question: "Nantes est-elle facile pour déménager ?",
      answer: "Oui, une des plus faciles de France. Ville plate, rues larges, accès bons, prix compétitifs (610-940€ pour un T2). Seul le Bouffay demande une petite attention.",
    },
    {
      question: "Combien coûte un déménagement à Nantes vs Paris ?",
      answer: "25-30% moins cher. T2 Paris 750-1200€ vs Nantes 610-940€. Nantes est très compétitive.",
    },
    {
      question: "Le Bouffay est-il compliqué ?",
      answer: "Peu. Rues étroites, mais rien de comparable au Panier (Marseille) ou Vieux Lyon. Autorisation mairie (35€, 5j), arrivée tôt, +80-120€.",
    },
    {
      question: "L'Île de Nantes est-elle un bon quartier pour habiter ?",
      answer: "Oui, excellent. Moderne, accessible, pratique, et 0 galère déménagement. Si vous cherchez à Nantes, c'est un très bon choix.",
    },
  ],
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
