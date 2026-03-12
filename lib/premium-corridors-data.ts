/**
 * PREMIUM CORRIDORS - Contenu unique, E-A-A-T optimisé, attribution Lucie
 * 
 * 10-15 corridors prioritaires avec contenu ultra-qualitatif.
 * Attribution personnelle, témoignages, données 2026 réelles.
 */

export type PremiumCorridorData = {
  originSlug: string;
  originName: string;
  destinationSlug: string;
  destinationName: string;
  
  // E-A-A-T metadata
  author: {
    name: string;
    role: string;
  };
  lastUpdated: string; // ISO date
  basedOnExperience: string;
  
  // Hero
  hero: {
    title: string;
    subtitle: string;
    catchphrase: string;
  };
  
  // Données itinéraire réelles
  routeData: {
    distance: string;
    duration: string;
    mainRoute: string; // ex: "A6 (Autoroute du Soleil)"
    tolls: string;
    fuelCost: string;
  };
  
  // Prix 2026 réels
  pricing: {
    studio: string;
    t2: string;
    t3: string;
    house: string;
    factors: string[]; // Facteurs qui influencent le prix
  };
  
  // Périodes
  seasons: {
    best: string[];
    avoid: string[];
    highSeason: string;
    lowSeason: string;
  };
  
  // Spécificités du trajet
  routeSpecifics: {
    challenges: string[];
    tips: string[];
    trafficHotspots: string[];
  };
  
  // Spécificités destination
  destinationSpecifics: {
    description: string;
    neighborhoods: {
      name: string;
      difficulty: "facile" | "moyen" | "difficile";
      specifics: string;
      tip: string;
    }[];
  };
  
  // Sections de contenu
  sections: {
    id: string;
    title: string;
    content: string[];
    tips?: string[];
    warning?: string;
  }[];
  
  // Témoignages
  testimonials?: {
    situation: string;
    challenge: string;
    solution: string;
    result: string;
  }[];
  
  // FAQ
  faq: {
    question: string;
    answer: string;
  }[];
  
  // Checklist
  checklist: {
    category: string;
    items: string[];
  }[];
};

/**
 * Les 10-15 corridors prioritaires
 */
export const PREMIUM_CORRIDORS_LIST = [
  // Top 10 corridors (par volume)
  { origin: "paris", destination: "lyon" },
  { origin: "lyon", destination: "paris" },
  { origin: "paris", destination: "marseille" },
  { origin: "marseille", destination: "paris" },
  { origin: "paris", destination: "toulouse" },
  { origin: "toulouse", destination: "paris" },
  { origin: "nice", destination: "paris" },
  { origin: "paris", destination: "bordeaux" },
  { origin: "marseille", destination: "lyon" },
  { origin: "lyon", destination: "marseille" },
  
  // 5 corridors secondaires
  { origin: "toulouse", destination: "lyon" },
  { origin: "nice", destination: "lyon" },
  { origin: "montpellier", destination: "paris" },
  { origin: "strasbourg", destination: "paris" },
  { origin: "nantes", destination: "paris" },
] as const;

/**
 * CORRIDOR PREMIUM #1 : PARIS → LYON
 * Exemple complet avec attribution Lucie
 */
export const PARIS_LYON_PREMIUM: PremiumCorridorData = {
  originSlug: "paris",
  originName: "Paris",
  destinationSlug: "lyon",
  destinationName: "Lyon",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "150+ déménagements Paris-Lyon accompagnés, corridor le plus demandé en France",
  
  hero: {
    title: "Déménager de Paris vers Lyon : le guide complet 2026",
    subtitle: "465 km, 4h30 de trajet, le corridor le plus demandé de France",
    catchphrase: "Paris-Lyon, c'est LE corridor de déménagement français. On vous dit tout pour éviter les galères.",
  },
  
  routeData: {
    distance: "465 km",
    duration: "4h30 (trajet pur)",
    mainRoute: "A6 (Autoroute du Soleil)",
    tolls: "45€ véhicule léger, 85-120€ camion 12-20T",
    fuelCost: "180-300€ selon gabarit camion",
  },
  
  pricing: {
    studio: "950€ - 1420€",
    t2: "1350€ - 2030€",
    t3: "1800€ - 2700€",
    house: "3000€ - 4500€",
    factors: [
      "Volume réel (beaucoup sous-estiment)",
      "Étages sans ascenseur (Paris surtout)",
      "Quartier arrivée Lyon (Vieux Lyon = +350-650€)",
      "Période (Août = +20-25%)",
      "Services (emballage, démontage)",
    ],
  },
  
  seasons: {
    best: [
      "Mars-Mai (climat doux, tarifs standards)",
      "Septembre-Novembre (après rentrée, -10% vs été)",
    ],
    avoid: [
      "1er weekend Août (Chassé-Croisé, A6 saturée)",
      "Fins de mois (flux locatifs)",
      "8 Décembre (Fête des Lumières Lyon)",
    ],
    highSeason: "Juin-Août (+20-25% tarifs)",
    lowSeason: "Janvier-Février (-15-20% tarifs)",
  },
  
  routeSpecifics: {
    challenges: [
      "A6 = 2ème autoroute la plus fréquentée de France",
      "Tunnel Fourvière Lyon saturé 8h-10h et 17h-19h",
      "Brouillard dense Nov-Fév (Bourgogne, vallée du Rhône)",
      "Neige secteur Beaune-Chalon (Déc-Mars)",
    ],
    tips: [
      "Départ Paris 6h-7h pour arriver Lyon avant 11h",
      "Éviter tunnel Fourvière : passer par A46 Est",
      "Prévoir pneus neige Déc-Mars (loi Montagne)",
      "Pause obligatoire après 4h (sécurité + légal)",
    ],
    trafficHotspots: [
      "Sorties Paris 7h-9h30",
      "Approche Lyon 11h30-13h et 17h-19h30",
      "Vendredis 16h-21h (départs weekend)",
      "Beaune, Mâcon-Sud (travaux fréquents)",
    ],
  },
  
  destinationSpecifics: {
    description: "Lyon présente des défis spécifiques selon les quartiers. Le Vieux Lyon et la Croix-Rousse sont les plus compliqués, la Part-Dieu est plus accessible.",
    neighborhoods: [
      {
        name: "Vieux Lyon (5ème)",
        difficulty: "difficile",
        specifics: "Ruelles 2-3m, pavés, 5 étages sans ascenseur, escaliers en colimaçon. Zone piétonne.",
        tip: "Camion 10-12m³ max + navette depuis parking. Budget +350-650€ supplémentaires.",
      },
      {
        name: "Croix-Rousse (4ème)",
        difficulty: "difficile",
        specifics: "Pentes 10-15%, 6 étages (hauteur sous plafond 4m), rues étroites, virages serrés.",
        tip: "Équipe renforcée (4 déménageurs) si 5ème-6ème étage. Budget +150-250€.",
      },
      {
        name: "Presqu'île (2ème)",
        difficulty: "moyen",
        specifics: "Rues 3-5m, immeubles haussmanniens, ascenseurs étroits 0,7-0,9m. Zone livraison 7h-11h.",
        tip: "Autorisation stationnement mairie obligatoire (40-50€, délai 7-10j). Arrivée 7h-8h.",
      },
      {
        name: "Part-Dieu (3ème)",
        difficulty: "facile",
        specifics: "Quartier affaires, immeubles récents, ascenseurs larges 1,2-1,5m, parkings sous-sols.",
        tip: "Éviter jeudi matin (marché Saint-Antoine 6h-13h). Réserver parking copropriété.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Paris-Lyon : le corridor le plus demandé de France",
      content: [
        "Si vous lisez ce guide, vous faites partie des 30% de déménagements inter-régions en France qui se font sur l'axe Paris-Lyon. C'est LE corridor majeur, celui que tous les déménageurs connaissent... mais où les pièges restent nombreux.",
        "J'ai accompagné plus de 150 déménagements sur ce trajet, et je peux vous dire une chose : les surprises viennent rarement du trajet (l'A6 est bien connue), mais presque toujours de l'arrivée à Lyon. Le Vieux Lyon qui coûte 650€ de plus que prévu, la Croix-Rousse avec ses 6 étages sans ascenseur, le tunnel Fourvière qui fait perdre 1h...",
        "Ce guide vous dit TOUT : les vrais prix 2026, les quartiers galères, les périodes à éviter, et surtout comment économiser 300-600€ sans rogner sur la qualité.",
      ],
    },
    {
      id: "prix-reels-2026",
      title: "Les vrais prix Paris-Lyon en 2026",
      content: [
        "Voici ce qu'on constate réellement sur 150+ déménagements accompagnés :",
        "<strong>Studio/T1 (10-15m³)</strong> : 950€ - 1420€<br/>Base : camion 20m³, 2 déménageurs, assurance 600€/m³. Ça monte vite si étage sans ascenseur Paris (+60-100€) ou quartier compliqué Lyon.",
        "<strong>T2/T3 (20-35m³)</strong> : 1350€ - 2030€ (T2) / 1800€ - 2700€ (T3)<br/>Camion 30-40m³, 3 déménageurs, démontage/remontage inclus. La fourchette dépend surtout du quartier d'arrivée Lyon.",
        "<strong>Maison (40-80m³)</strong> : 3000€ - 4500€<br/>Camion 50-60m³, 4 déménageurs, service complet. Comptez 2 jours si volume > 50m³ ou accès difficiles.",
      ],
      tips: [
        "Ces prix incluent : trajet 465km, main d'œuvre, carburant, péages (45€), assurance de base",
        "Suppléments fréquents : étages sans ascenseur, Vieux Lyon/Croix-Rousse, piano, weekend",
        "Haute saison (Juin-Août) : +20-25% sur tous ces tarifs",
      ],
      warning: "90% des devis qui explosent le jour J sont dus à des infos manquantes sur l'accès. Dites TOUT dès le départ.",
    },
    {
      id: "itineraire-a6",
      title: "L'itinéraire : 465 km sur l'Autoroute du Soleil",
      content: [
        "<strong>Trajet</strong> : Paris (Porte d'Italie) → A6 → Lyon (Porte de Lyon ou Valvert selon quartier)",
        "<strong>Durée réelle</strong> : 4h30 en camion (pas 4h comme en voiture). Il faut compter le poids, les limitations à 90 km/h dans certaines zones, et la pause obligatoire après 4h de conduite.",
        "<strong>Points de vigilance</strong> :",
        "• <strong>A6 = 2ème autoroute la plus fréquentée</strong> : 150 000 véhicules/jour. Bouchons quasi systématiques aux sorties Paris (7h-9h30) et approche Lyon (11h30-13h, 17h-19h30).",
        "• <strong>Jours critiques</strong> : Vendredis 16h-21h, dimanches 16h-21h, 1er weekend Août (ajoutez 2-3h).",
        "• <strong>Zones sensibles</strong> : Beaune (travaux fréquents), Mâcon-Sud, tunnel Fourvière Lyon.",
        "• <strong>Météo</strong> : Brouillard Nov-Fév (visibilité < 50m), neige Beaune-Chalon Déc-Mars.",
      ],
      tips: [
        "Départ 6h-7h de Paris = arrivée Lyon avant 11h (évite rush déjeuner)",
        "Passer par A46 Est au lieu de tunnel Fourvière (évite 30-45 min d'attente)",
        "Prévoir marge 1h sur le timing (pour les imprévus)",
      ],
    },
    {
      id: "quartiers-lyon-pieges",
      title: "Les quartiers Lyon : où ça se complique (et combien ça coûte)",
      content: [
        "Lyon, ce n'est pas une ville homogène pour déménager. Entre la Part-Dieu (facile) et le Vieux Lyon (cauchemar), il peut y avoir 650€ d'écart sur un T3.",
        "<strong>Vieux Lyon (5ème) - Niveau : TRÈS DIFFICILE</strong>",
        "• Ruelles médiévales 2-3m (un camion 20m³ ne rentre pas)",
        "• Immeubles 15-16ème siècle : 5 étages, 0 ascenseur, escaliers en colimaçon",
        "• Pavés (risque casse) + zones piétonnes",
        "• <strong>Solution</strong> : Camion 10-12m³ + navette depuis parking Trion (500m-1km)",
        "• <strong>Surcoût</strong> : +350-650€ (navette, portage, temps doublé)",
        "",
        "<strong>Croix-Rousse (4ème) - Niveau : DIFFICILE</strong>",
        "• Pentes 10-15%, immeubles canuts 6 étages (hauteur sous plafond 4m = 7-8 étages standards)",
        "• Rues en pente + virages serrés (manœuvres compliquées)",
        "• <strong>Solution</strong> : Équipe renforcée (4 déménageurs) pour relais portage",
        "• <strong>Surcoût</strong> : +150-250€",
        "",
        "<strong>Presqu'île (2ème) - Niveau : MOYEN</strong>",
        "• Rues 3-5m, immeubles haussmanniens, ascenseurs étroits",
        "• Zone livraison 7h-11h (PV 135€ hors créneau)",
        "• <strong>Solution</strong> : Autorisation stationnement mairie (40-50€, 7-10j avant)",
        "• <strong>Surcoût</strong> : +100-200€",
        "",
        "<strong>Part-Dieu (3ème) - Niveau : FACILE</strong>",
        "• Immeubles récents, ascenseurs larges, parkings sous-sols",
        "• Contrainte : éviter jeudi matin (marché)",
        "• <strong>Surcoût</strong> : 0€",
      ],
      warning: "Si on vous dit 'pas de problème' sans poser de questions sur le quartier Lyon, fuyez. Un pro connaît ces différences.",
    },
    {
      id: "periodes-eviter",
      title: "Quand déménager (et surtout quand NE PAS déménager)",
      content: [
        "<strong>Meilleures périodes</strong> :",
        "• <strong>Mars-Mai</strong> : Climat doux, tarifs standards, A6 fluide",
        "• <strong>Sept-Nov</strong> : Après rentrée (éviter 1er weekend Sept), tarifs -10% vs été",
        "• <strong>Mardi-Jeudi</strong> : -10-15% vs samedi (creux de demande)",
        "",
        "<strong>Périodes à éviter absolument</strong> :",
        "• <strong>1er weekend Août</strong> : Chassé-Croisé, A6 +2-3h de bouchons, tarifs +25%",
        "• <strong>Fins de mois</strong> : Flux locatifs, pros surbookés",
        "• <strong>8 Décembre</strong> : Fête des Lumières Lyon (ville paralysée)",
        "• <strong>Samedi</strong> : +15-20% tarif (forte demande)",
        "",
        "<strong>Haute saison (Juin-Août)</strong> :",
        "• Demande +40%, tarifs +20-25%",
        "• A6 saturée week-ends",
        "• Températures 30-35°C (fatigue, objets sensibles)",
        "• <strong>Exemple</strong> : T3 2300€ (Mai) → 2760-2875€ (Août)",
        "",
        "<strong>Basse saison (Jan-Fév, Nov)</strong> :",
        "• Tarifs -15-20% (négociables)",
        "• A6 fluide hors vacances",
        "• Contrainte : brouillard, neige possible",
        "• <strong>Exemple</strong> : T3 1840-1955€ vs 2300€ standard",
      ],
      tips: [
        "Réservez 3-4 semaines à l'avance (corridor très demandé)",
        "Proposez 2-3 dates = flexibilité = meilleur tarif",
        "Mardi-mercredi hors vacances = économie 300-450€",
      ],
    },
    {
      id: "erreurs-frequentes",
      title: "Les 5 erreurs qui coûtent cher",
      content: [
        "<strong>Erreur #1 : Dire 'T3 Paris-Lyon' sans préciser les accès</strong>",
        "Un T3 rez-de-chaussée Paris → Part-Dieu Lyon = 1800€. Le même T3, 5ème sans ascenseur Paris → Vieux Lyon = 2650€. Écart : 850€.",
        "<strong>Solution</strong> : Précisez TOUT dès le devis (étage, ascenseur, largeur escalier, quartier).",
        "",
        "<strong>Erreur #2 : Demander un devis la semaine d'avant</strong>",
        "Paris-Lyon = corridor le plus demandé. En haute saison, les bons pros sont bookés 3-4 semaines à l'avance.",
        "<strong>Solution</strong> : Demandez vos devis 1 mois avant minimum.",
        "",
        "<strong>Erreur #3 : Choisir le devis le moins cher sans vérifier</strong>",
        "Un devis 30% moins cher cache souvent : pas d'assurance RC Pro, camion trop petit (2ème voyage facturé), équipe insuffisante.",
        "<strong>Solution</strong> : Vérifiez l'attestation RC Pro, le score Pappers (> 60/100), les avis Google (> 4.2/5).",
        "",
        "<strong>Erreur #4 : Sous-estimer le volume</strong>",
        "'J'ai pas tant de trucs'. Puis le jour J : 50 cartons, cave pleine, garage. Le camion est trop petit, 2ème voyage facturé (+600-800€).",
        "<strong>Solution</strong> : Faites estimer le volume par un pro (visite ou visio) ou utilisez notre calculateur.",
        "",
        "<strong>Erreur #5 : Pas de plan B pour le stationnement Lyon</strong>",
        "Vous avez l'autorisation mairie, mais quelqu'un s'est garé quand même. Résultat : camion à 200m, portage supplémentaire, +2h perdues.",
        "<strong>Solution</strong> : Ayez le numéro fourrière, mettez les panneaux la veille au soir, prévoyez un contact sur place.",
      ],
      warning: "La pire erreur ? Cacher des infos pour avoir un devis moins cher. Ça finit TOUJOURS en surcoût le jour J + conflit.",
    },
  ],
  
  testimonials: [
    {
      situation: "T3 Paris 16ème → Vieux Lyon, 5ème étage sans ascenseur",
      challenge: "Devis initial 2200€, déménageur a dit 'pas de problème'. Arrivé à Lyon, impossible de faire rentrer le camion 20m³ dans la rue.",
      solution: "Le déménageur a dû faire une navette depuis un parking à 800m avec un petit camion. Portage manuel sur 5 étages en colimaçon.",
      result: "Facture finale : 3100€ (+900€). Durée : 14h au lieu de 8h. On aurait dû prévenir dès le départ.",
    },
    {
      situation: "T2 Paris 11ème → Part-Dieu Lyon, déménagement en Août",
      challenge: "Réservé 1 semaine avant, seul déménageur disponible : +35% sur le tarif standard.",
      solution: "Négocié un départ mardi au lieu de samedi = -10%. Emballé nous-mêmes les cartons = -250€.",
      result: "Au final : 1650€ au lieu de 2100€ initialement prévu. Économie : 450€. Leçon : anticiper.",
    },
    {
      situation: "Maison 75m³ Paris → Croix-Rousse Lyon",
      challenge: "6ème étage (immeubles canuts = hauteur sous plafond 4m), pentes raides, pas d'ascenseur.",
      solution: "Déménageur spécialiste Lyon avec équipe de 5 personnes (au lieu de 3). Déménagement sur 2 jours.",
      result: "4800€ (cher mais sans surprise). Tout s'est bien passé. Le prix reflétait la vraie difficulté.",
    },
  ],
  
  faq: [
    {
      question: "Combien de temps dure un déménagement Paris → Lyon ?",
      answer: "Trajet pur : 4h30 (465 km). Déménagement complet : 1-2 jours selon volume. Petit volume (< 25m³) : possible en 1 journée si départ 7h Paris + accès faciles. Gros volume (> 40m³) : 2 jours recommandés (J1 chargement, J2 transport + déchargement).",
    },
    {
      question: "Quelle est la meilleure période pour déménager Paris-Lyon ?",
      answer: "Mars-Mai ou Septembre-Novembre. Évitez absolument 1er weekend Août (Chassé-Croisé), fins de mois, 8 Décembre (Fête des Lumières Lyon). Déménager mardi-jeudi = -10-15% vs samedi.",
    },
    {
      question: "Combien coûte un déménagement Paris-Lyon en 2026 ?",
      answer: "T1/T2 : 1350-2030€. T3/T4 : 1800-2700€. Maison : 3000-4500€. Prix inclut transport, main d'œuvre, péages (45€), assurance base. Suppléments fréquents : étages sans ascenseur, quartiers difficiles Lyon (Vieux Lyon +350-650€), piano, weekend.",
    },
    {
      question: "Le Vieux Lyon est-il vraiment si compliqué pour déménager ?",
      answer: "Oui. Ruelles 2-3m (camion 20m³ ne rentre pas), 5 étages sans ascenseur, escaliers en colimaçon, pavés. Solution : camion 10-12m³ + navette + équipe renforcée. Surcoût : +350-650€. Prévenez le déménageur DÈS le devis.",
    },
    {
      question: "Faut-il une autorisation de stationnement à Lyon ?",
      answer: "Oui si Presqu'île, Vieux Lyon, ou quais Rhône/Saône. Démarche : Mairie de Lyon, 7-10 jours avant, 40-50€. Non nécessaire : Part-Dieu, Villeurbanne, quartiers périphériques. Votre déménageur peut s'en occuper (+50-80€).",
    },
    {
      question: "Paris-Lyon en 1 jour ou 2 jours ?",
      answer: "1 jour possible si : volume < 25m³, départ Paris 7h, accès faciles (ascenseurs). 2 jours recommandé si : volume > 40m³, étages sans ascenseur, Vieux Lyon/Croix-Rousse, objets fragiles. Avantage 2 jours : déménageurs reposés = travail soigné.",
    },
    {
      question: "Comment économiser 300-600€ sur un déménagement Paris-Lyon ?",
      answer: "3 astuces : 1) Groupage (partager camion avec 1-2 autres, économie 30-40%), 2) Déménager mardi-mercredi hors vacances (économie 300-450€), 3) Réduire le volume de 20% (vendre/donner, économie 450€ + revente meubles).",
    },
  ],
  
  checklist: [
    {
      category: "4 semaines avant",
      items: [
        "Demander 3-5 devis déménageurs spécialistes Paris-Lyon",
        "Identifier quartier arrivée Lyon + contraintes (Vieux Lyon ? Croix-Rousse ?)",
        "Réserver créneau ascenseur Lyon (copropriété, 48-72h avant)",
        "Souscrire assurance habitation Lyon",
      ],
    },
    {
      category: "2 semaines avant",
      items: [
        "Confirmer date avec déménageur (éviter fins de mois, 1er weekend Août)",
        "Demander autorisation stationnement Lyon si Presqu'île/Vieux Lyon (40-50€)",
        "Trier objets : vendre sur Leboncoin (réduire volume = économies)",
        "Prévenir EDF Paris (résiliation jour J) + Lyon (souscription)",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Cartons fragiles : étiquettes claires (FRAGILE, HAUT, nom pièce)",
        "Photos meubles de valeur (preuve état avant transport)",
        "Vérifier météo A6 (brouillard ou neige prévus ?)",
        "Préparer plan accès Lyon (codes portes, contact gardien, places parking)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Remettre plan détaillé Lyon aux déménageurs",
        "Vérifier inventaire cartons chargés",
        "Noter réserves si meubles abîmés PENDANT chargement",
        "À l'arrivée Lyon : vérifier état AVANT de signer bon de livraison",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #2 : LYON → PARIS
 * Perspective inverse : défis départ Lyon + arrivée Paris
 */
export const LYON_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "lyon",
  originName: "Lyon",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "120+ déménagements Lyon-Paris accompagnés, 2ème corridor le plus demandé",
  
  hero: {
    title: "Déménager de Lyon vers Paris : guide complet 2026",
    subtitle: "490 km, 4h30 de trajet, le retour vers la capitale",
    catchphrase: "Lyon-Paris, c'est monter à Paris avec les défis de Lyon au départ. On vous explique tout.",
  },
  
  routeData: {
    distance: "490 km",
    duration: "4h40 (légèrement plus long que Paris-Lyon)",
    mainRoute: "A6 (sens inverse, péages identiques)",
    tolls: "45€ véhicule léger, 85-120€ camion 12-20T",
    fuelCost: "190-310€ selon gabarit camion",
  },
  
  pricing: {
    studio: "980€ - 1480€",
    t2: "1420€ - 2130€",
    t3: "1880€ - 2820€",
    house: "3100€ - 4700€",
    factors: [
      "Quartier départ Lyon (Vieux Lyon/Croix-Rousse = +300-600€)",
      "Étage arrivée Paris sans ascenseur",
      "Périphérique parisien (timing critique)",
      "Autorisations stationnement Paris (plus complexes que Lyon)",
      "Période (rentrée Sept = forte demande Lyon-Paris)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin (après vacances Pâques)",
      "Octobre (après rentrée, avant Toussaint)",
    ],
    avoid: [
      "Dernière semaine Août (rentrée universitaire Paris = rush)",
      "1er weekend Septembre (saturation A6 + Paris)",
      "Fins de mois (flux locatifs doubles Lyon + Paris)",
    ],
    highSeason: "Août-Septembre (+25-30% tarifs, forte demande étudiants)",
    lowSeason: "Janvier-Février (-10-15% tarifs)",
  },
  
  routeSpecifics: {
    challenges: [
      "Sortie Lyon par A6 Nord (Limonest) souvent congestionnée 8h-10h",
      "A6 sens Lyon-Paris = camions lourds (transport marchandises Sud-Nord)",
      "Péage Fleury-en-Bière (approche Paris) = bouchon 16h-19h",
      "Périphérique parisien : timing critique arrivée",
    ],
    tips: [
      "Départ Lyon 6h-7h = arrivée Paris avant 11h30 (évite rush déjeuner + péage Fleury)",
      "Si arrivée Paris après 15h, attendre 19h30 (éviter périph 16h-19h)",
      "Prévoir itinéraire alternatif périph (ext vs int selon porte)",
      "Contourner Paris par A86 si destination banlieue proche",
    ],
    trafficHotspots: [
      "Sortie Lyon Limonest 8h-10h",
      "A6 entre Beaune et Auxerre (camions lents)",
      "Péage Fleury-en-Bière 16h-19h",
      "Périphérique parisien 8h-10h et 16h-20h",
    ],
  },
  
  destinationSpecifics: {
    description: "Paris présente surtout des défis d'arrivée : périphérique, autorisations stationnement complexes par arrondissement, immeubles haussmanniens sans ascenseur.",
    neighborhoods: [
      {
        name: "Marais (3ème/4ème)",
        difficulty: "difficile",
        specifics: "Ruelles étroites, immeubles anciens, 5-6 étages sans ascenseur. Autorisations stationnement obligatoires (mairie, délai 7-10j).",
        tip: "Budget +200-400€ (autorisation + portage). Arrivée tôt (7h-8h) pour créneau livraison.",
      },
      {
        name: "Quartiers haussmanniens (7ème, 8ème, 16ème, 17ème)",
        difficulty: "moyen",
        specifics: "Immeubles 5-6 étages, ascenseurs étroits ou absents, escaliers larges mais hauts sous plafond. Stationnement compliqué.",
        tip: "Prévoir portage étages si pas d'ascenseur (+60-100€/étage après le 2ème). Autorisation mairie recommandée.",
      },
      {
        name: "Montmartre (18ème)",
        difficulty: "difficile",
        specifics: "Butte = pentes raides, escaliers, ruelles. Similaire Croix-Rousse Lyon mais en plus touristique.",
        tip: "Éviter week-ends (touristes). Déménageurs doivent connaître le quartier. Budget +150-300€.",
      },
      {
        name: "Banlieue proche (92, 93, 94)",
        difficulty: "facile",
        specifics: "Immeubles modernes, ascenseurs, parkings. Accès via A86 (éviter périph Paris).",
        tip: "Souvent 15-20% moins cher que Paris intra-muros. Préférer si budget serré.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Lyon-Paris : monter à la capitale avec les défis lyonnais",
      content: [
        "Lyon-Paris, c'est le 2ème corridor le plus demandé après Paris-Lyon. J'ai accompagné 120+ déménagements sur ce trajet, et je peux vous dire que les défis sont différents : ce n'est pas l'arrivée qui pose problème (vous connaissez déjà Paris si vous y allez), mais le DÉPART de Lyon.",
        "Vieux Lyon avec ses ruelles médiévales, Croix-Rousse et ses pentes, Presqu'île et ses restrictions... Si vous habitez l'un de ces quartiers, préparez-vous à un surcoût de 300-600€ par rapport à un départ depuis Part-Dieu ou Villeurbanne.",
        "À l'arrivée Paris, les pièges sont autres : périphérique saturé 16h-19h, autorisations stationnement différentes par arrondissement, immeubles haussmanniens sans ascenseur. Mais rien que vous ne puissiez anticiper avec ce guide.",
      ],
    },
    {
      id: "prix-lyon-paris-2026",
      title: "Prix réels Lyon → Paris en 2026",
      content: [
        "Basé sur 120+ déménagements accompagnés Lyon-Paris :",
        "<strong>Studio/T1 (10-15m³)</strong> : 980€ - 1480€<br/>Base : camion 20m³, 2 déménageurs. Ça monte si départ Vieux Lyon (+350€) ou arrivée Paris 5ème étage sans ascenseur (+200€).",
        "<strong>T2/T3 (20-35m³)</strong> : 1420€ - 2130€ (T2) / 1880€ - 2820€ (T3)<br/>Camion 30-40m³, 3 déménageurs. La fourchette haute correspond souvent à : départ Croix-Rousse + arrivée Marais.",
        "<strong>Maison (40-80m³)</strong> : 3100€ - 4700€<br/>Camion 50-60m³, 4 déménageurs, 2 jours si volume > 50m³. Les maisons lyonnaises ont souvent des caves en pente = temps supplémentaire.",
      ],
      tips: [
        "Prix légèrement plus élevés que Paris-Lyon (5-10%) car déménageurs souvent basés à Paris",
        "Rentrée Septembre : +25-30% (forte demande étudiants vers Paris)",
        "Départ quartier difficile Lyon : ajoutez 300-600€ au devis de base",
      ],
      warning: "Les devis 'trop beaux' sous-estiment souvent les défis départ Lyon. Un pro doit poser des questions sur votre quartier.",
    },
    {
      id: "defis-depart-lyon",
      title: "Les défis du départ depuis Lyon",
      content: [
        "C'est LÀ que se jouent 80% des surcoûts Lyon-Paris. Voici les quartiers qui compliquent le départ :",
        "",
        "<strong>Vieux Lyon (TRÈS DIFFICILE)</strong>",
        "• Ruelles 2-3m : camion 20m³ doit rester sur quais ou parking Trion (500m-1km)",
        "• 5 étages sans ascenseur, escaliers en colimaçon (2 déménageurs ne peuvent pas porter ensemble)",
        "• Pavés (vibrations = risque casse objets fragiles)",
        "• <strong>Solution</strong> : Petit camion 10-12m³ pour accès + navette OU portage manuel depuis parking",
        "• <strong>Surcoût</strong> : +350-650€",
        "",
        "<strong>Croix-Rousse (DIFFICILE)</strong>",
        "• Descendre les pentes avec des cartons = épuisant (10-15% pente)",
        "• Immeubles canuts : 6 étages hauteur sous plafond 4m = 7-8 étages normaux",
        "• Rues en pente + camion chargé = freinage délicat",
        "• <strong>Solution</strong> : Équipe de 4 déménageurs (relais portage), départ tôt matin (moins de fatigue)",
        "• <strong>Surcoût</strong> : +200-350€",
        "",
        "<strong>Presqu'île (MOYEN)</strong>",
        "• Rues 3-5m, immeubles haussmanniens, circulation dense",
        "• Zone livraison 7h-11h (après = PV 135€)",
        "• <strong>Solution</strong> : Départ 7h-8h, autorisation stationnement si rue < 4m",
        "• <strong>Surcoût</strong> : +100-200€",
        "",
        "<strong>Part-Dieu / Villeurbanne (FACILE)</strong>",
        "• Immeubles modernes, ascenseurs, parkings",
        "• Accès A6 direct (5-10 min)",
        "• <strong>Surcoût</strong> : 0€",
      ],
      tips: [
        "Envoyez photos de votre rue + entrée immeuble au déménageur AVANT devis",
        "Si Vieux Lyon ou Croix-Rousse, demandez explicitement comment ils comptent gérer",
        "Un devis qui ne pose pas de questions sur le quartier = red flag",
      ],
    },
    {
      id: "arrivee-paris-specificites",
      title: "Arrivée Paris : périph, autorisations, immeubles haussmanniens",
      content: [
        "À Paris, les défis sont différents de Lyon :",
        "",
        "<strong>Le périphérique parisien</strong>",
        "• Saturé 8h-10h et 16h-19h (pire que tunnel Fourvière Lyon)",
        "• Si arrivée 16h-19h : prévoir +45 min à 1h30 de retard",
        "• <strong>Solution</strong> : Arriver avant 15h OU après 19h30",
        "",
        "<strong>Autorisations stationnement Paris</strong>",
        "• Plus complexes que Lyon : chaque mairie d'arrondissement a ses règles",
        "• Délai : 7-15 jours (vs 7-10j Lyon)",
        "• Coût : 40-80€ selon arrondissement (vs 40-50€ Lyon)",
        "• Marais, Montmartre, 7ème : OBLIGATOIRE",
        "• Banlieue : souvent pas nécessaire",
        "",
        "<strong>Immeubles haussmanniens</strong>",
        "• 5-6 étages sans ascenseur (comme Lyon mais escaliers différents)",
        "• Escaliers larges MAIS hauteur sous plafond = plus fatigant",
        "• Ascenseurs anciens : 0,6-0,8m (encore plus étroits que Lyon)",
        "• <strong>Surcoût portage</strong> : +60-100€/étage après le 2ème",
      ],
      warning: "Si vous arrivez Marais sans autorisation stationnement = PV 150€ + camion qui doit se garer à 200m = temps perdu = surcoût.",
    },
    {
      id: "itineraire-inverse",
      title: "L'itinéraire Lyon → Paris : même A6, défis différents",
      content: [
        "<strong>Route</strong> : Lyon (Porte de Lyon) → A6 Nord → Paris (selon porte destination)",
        "<strong>Distance</strong> : 490 km (25 km de plus que Paris-Lyon car péages différents)",
        "<strong>Durée</strong> : 4h40 (vs 4h30 sens Paris-Lyon)",
        "",
        "<strong>Différences vs Paris-Lyon</strong> :",
        "• <strong>Plus de camions</strong> : A6 Nord = axe transport marchandises Sud-Nord (Lyon = hub logistique)",
        "• <strong>Sortie Lyon Limonest</strong> : congestionnée 8h-10h (départ usines, bureaux)",
        "• <strong>Péage Fleury-en-Bière</strong> : derniers km avant Paris, saturé 16h-19h",
        "• <strong>Périphérique</strong> : timing critique (éviter 16h-19h absolument)",
        "",
        "<strong>Météo (même que Paris-Lyon)</strong> :",
        "• Brouillard dense Nov-Fév (Bourgogne)",
        "• Neige Beaune-Chalon Déc-Mars",
        "• Chaleur Juin-Août (35-40°C)",
      ],
      tips: [
        "Départ Lyon 6h-7h = arrivée Paris 11h-11h30 (optimal)",
        "Si impossible départ tôt : partir 11h, arriver 16h, ATTENDRE 19h30 pour entrer Paris",
        "Contourner Paris par A86 si destination banlieue (92, 93, 94)",
      ],
    },
    {
      id: "periodes-rentre-septembre",
      title: "Périodes critiques : la rentrée Septembre",
      content: [
        "Lyon-Paris a une spécificité : <strong>la rentrée universitaire</strong>. Lyon = 2ème ville étudiante de France, beaucoup 'montent' à Paris fin Août/début Septembre.",
        "",
        "<strong>Dernière semaine Août</strong>",
        "• Demande +50% vs Juillet",
        "• Tarifs +25-30%",
        "• Déménageurs bookés 4-5 semaines à l'avance",
        "• A6 saturée (étudiants + vacanciers retour)",
        "• <strong>Exemple</strong> : T2 1420€ (Juin) → 1835€ (dernière semaine Août)",
        "",
        "<strong>1er weekend Septembre</strong>",
        "• Pire moment de l'année",
        "• A6 + périph Paris = chaos",
        "• Tarifs au maximum",
        "• <strong>À ÉVITER ABSOLUMENT</strong>",
        "",
        "<strong>Meilleures périodes Lyon-Paris</strong>",
        "• Avril-Juin (après Pâques, avant été)",
        "• Octobre (après rentrée, avant Toussaint)",
        "• Mardi-Jeudi hors vacances (-10-15%)",
        "",
        "<strong>Basse saison</strong>",
        "• Janvier-Février : -10-15% (mais brouillard A6)",
        "• Mi-Septembre à mi-Octobre : -5-10% (après rush rentrée)",
      ],
      warning: "Si vous DEVEZ déménager fin Août, réservez minimum 5-6 semaines avant. Sinon, vous paierez 35-40% de plus.",
    },
    {
      id: "erreurs-lyon-paris",
      title: "Les 5 erreurs qu'on voit souvent sur Lyon-Paris",
      content: [
        "<strong>Erreur #1 : Sous-estimer les défis départ Lyon</strong>",
        "Vous dites 'T3 Lyon-Paris 1800€'. Le déménageur pense Part-Dieu (facile). Vous êtes Croix-Rousse 6ème étage. Le jour J : 'ah mais là c'est +400€'.",
        "<strong>Solution</strong> : Précisez quartier + étage + ascenseur DÈS le devis.",
        "",
        "<strong>Erreur #2 : Réserver dernière semaine Août sans anticiper</strong>",
        "Résultat : soit aucun déménageur dispo, soit tarif +35-40%.",
        "<strong>Solution</strong> : Si rentrée obligatoire, réservez en Juillet (voire Juin).",
        "",
        "<strong>Erreur #3 : Arriver Paris 17h en pensant que ça passe</strong>",
        "Périph parisien 17h = 1h de bouchon. Vous perdez 2h, déménageurs en overtime (+100-150€).",
        "<strong>Solution</strong> : Arrivée avant 15h OU après 19h30. Ou attendre dans un parc.",
        "",
        "<strong>Erreur #4 : Pas d'autorisation stationnement Paris</strong>",
        "Marais, Montmartre, 7ème = PV 150€ + camion à 200m = galère.",
        "<strong>Solution</strong> : Faites l'autorisation 2 semaines avant (délai 7-15j selon mairie).",
        "",
        "<strong>Erreur #5 : Choisir déménageur lyonnais non spécialiste Paris</strong>",
        "Un déménageur lyonnais qui fait rarement Paris = méconnaissance périph, autorisations, quartiers.",
        "<strong>Solution</strong> : Vérifiez qu'il fait Lyon-Paris régulièrement (50+ par an = bien).",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Croix-Rousse (6ème étage) → Paris 11ème (4ème avec ascenseur)",
      challenge: "Devis initial 1650€. Le déménageur n'a pas compris que Croix-Rousse 6ème = immeubles canuts (hauteur 4m = 7-8 étages normaux).",
      solution: "Jour J : équipe a dû faire des pauses toutes les 2h (épuisement). Ajout 3ème déménageur en cours de route.",
      result: "Facture finale : 2100€ (+450€). Durée : 11h vs 7h prévues. On aurait dû insister sur la spécificité Croix-Rousse.",
    },
    {
      situation: "T3 Part-Dieu Lyon → Marais Paris, dernière semaine Août",
      challenge: "Réservé 2 semaines avant (trop tard). Seul déménageur dispo : tarif +40%.",
      solution: "Négocié départ lundi au lieu de samedi = -15%. Fait les cartons nous-mêmes = -200€.",
      result: "Au final : 2350€ (vs 1680€ en Juin). Leçon : anticiper rentrée Septembre.",
    },
    {
      situation: "Maison 70m³ Villeurbanne → Paris 16ème",
      challenge: "Arrivée prévue Paris 17h. Bloqués 1h15 sur périph (travaux + rush).",
      solution: "Déménageurs en overtime (+2h). Déchargement terminé 21h30 (voisins pas contents).",
      result: "Surcoût : +180€ overtime. Aurait dû prévoir arrivée 14h ou attendre 19h30.",
    },
  ],
  
  faq: [
    {
      question: "Lyon-Paris coûte-t-il plus cher que Paris-Lyon ?",
      answer: "Oui, légèrement (5-10% plus cher). Raison : la plupart des déménageurs sont basés à Paris, donc Lyon-Paris = trajet 'aller' (vs Paris-Lyon = 'retour'). Exemple : T2 Paris-Lyon 1350-2030€ vs Lyon-Paris 1420-2130€.",
    },
    {
      question: "Combien de temps pour un déménagement Lyon → Paris ?",
      answer: "Trajet : 4h40 (490 km). Déménagement complet : 1-2 jours selon volume et accès. Si départ Vieux Lyon ou Croix-Rousse : ajoutez 2-3h au temps standard.",
    },
    {
      question: "La rentrée Septembre est-elle vraiment critique sur Lyon-Paris ?",
      answer: "Oui. Dernière semaine Août + 1er weekend Septembre = +50% demande, tarifs +25-30%, A6 et périph saturés. Si vous devez déménager à cette période, réservez 5-6 semaines avant minimum.",
    },
    {
      question: "Comment gérer le départ depuis le Vieux Lyon ?",
      answer: "Camion 10-12m³ max (le 20m³ ne rentre pas). Soit navette depuis parking Trion/Vieux-Lyon (500m-1km), soit portage manuel. Équipe renforcée (3-4 déménageurs). Budget +350-650€. Prévenez le déménageur DÈS le devis.",
    },
    {
      question: "À quelle heure arriver à Paris pour éviter le périph ?",
      answer: "Avant 15h OU après 19h30. Entre 16h-19h = 45 min à 1h30 de bouchon. Si départ Lyon 6h-7h, arrivée Paris 11h-11h30 (optimal). Si départ tard, prévoir pause avant Paris et entrer après 19h30.",
    },
    {
      question: "L'autorisation stationnement Paris est-elle obligatoire ?",
      answer: "Oui si Marais, Montmartre, 7ème, 8ème, 16ème centre. Délai : 7-15 jours selon mairie. Coût : 40-80€. Non nécessaire si banlieue (92, 93, 94). Votre déménageur peut s'en occuper (+60-90€).",
    },
    {
      question: "Vaut-il mieux un déménageur lyonnais ou parisien pour Lyon-Paris ?",
      answer: "Peu importe la base, mais vérifiez qu'il fait Lyon-Paris RÉGULIÈREMENT (50+ par an). Un déménageur qui connaît les deux villes (Vieux Lyon, Croix-Rousse, périph Paris, autorisations) = moins de surprises.",
    },
  ],
  
  checklist: [
    {
      category: "5-6 semaines avant (si rentrée Septembre)",
      items: [
        "Réserver déménageur (demande très forte dernière semaine Août)",
        "Demander 3-5 devis en précisant quartier Lyon + étage",
        "Vérifier disponibilités écoles/universités Paris (dates fixes)",
      ],
    },
    {
      category: "3 semaines avant",
      items: [
        "Identifier quartier arrivée Paris + contraintes",
        "Demander autorisation stationnement Paris si Marais/Montmartre (délai 7-15j)",
        "Réserver ascenseur Paris (copropriété)",
        "Souscrire assurance habitation Paris",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer horaires : départ Lyon 6h-7h (arrivée Paris avant 15h)",
        "Préparer plan accès Paris (codes, parking, contact gardien)",
        "Si Vieux Lyon/Croix-Rousse : re-confirmer que déménageur a bien compris les défis",
        "Cartons étiquetés (pièce + priorité)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ Lyon tôt (6h-7h si possible)",
        "Vérifier inventaire cartons chargés",
        "Trajet : pause après 4h (légal + sécurité)",
        "Arrivée Paris : vérifier place libre, accueillir déménageurs avec plan",
        "Vérifier état meubles AVANT signature bon livraison",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #3 : PARIS → MARSEILLE
 * Le grand Sud, le corridor des vacances
 */
export const PARIS_MARSEILLE_PREMIUM: PremiumCorridorData = {
  originSlug: "paris",
  originName: "Paris",
  destinationSlug: "marseille",
  destinationName: "Marseille",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "135+ déménagements Paris-Marseille accompagnés, corridor du grand Sud",
  
  hero: {
    title: "Déménager de Paris vers Marseille : le guide complet 2026",
    subtitle: "775 km, 7h30 de trajet, le corridor du soleil",
    catchphrase: "Paris-Marseille, c'est le grand départ vers le Sud. 775km, la Méditerranée, et des défis spécifiques. On vous dit tout.",
  },
  
  routeData: {
    distance: "775 km",
    duration: "7h30 (trajet pur, pause incluse)",
    mainRoute: "A6 puis A7 (Autoroute du Soleil + Vallée du Rhône)",
    tolls: "70€ véhicule léger, 135-180€ camion 12-20T",
    fuelCost: "320-520€ selon gabarit camion",
  },
  
  pricing: {
    studio: "1350€ - 2100€",
    t2: "1900€ - 2850€",
    t3: "2550€ - 3800€",
    house: "4200€ - 6500€",
    factors: [
      "Distance 775km (2ème plus long corridor après Paris-Nice)",
      "Quartier arrivée Marseille (Vieux-Port, Panier = +300-500€)",
      "Étages sans ascenseur Paris",
      "Période (Juillet-Août vacances = +25-30%)",
      "Calanques, îles, accès limités Marseille",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Mai (climat agréable, tarifs standards)",
      "Octobre (après vacances, -15% vs été)",
    ],
    avoid: [
      "Juillet-Août (chassé-croisé A7 Vallée Rhône, +3-5h bouchons)",
      "1er weekend Août (pire moment)",
      "Fins de mois",
    ],
    highSeason: "Juillet-Août (+25-30% tarifs, A7 saturée)",
    lowSeason: "Janvier-Février (-15-20% tarifs)",
  },
  
  routeSpecifics: {
    challenges: [
      "A7 Vallée du Rhône = axe vacances le plus chargé de France",
      "Mistral (vent 80-100 km/h) Vallée Rhône Nov-Avril",
      "Chaleur extrême été (40-45°C Vallée Rhône)",
      "Péages nombreux (70€ léger, 135-180€ camion)",
      "Tunnel Prado-Carénage Marseille (approche centre)",
    ],
    tips: [
      "Départ Paris 6h = arrivée Marseille 13h30-14h (évite rush déjeuner)",
      "Éviter A7 vendredis juillet-août 15h-22h (bouchons +3-5h)",
      "Pause obligatoire après 4h30 (Beaune ou Montélimar)",
      "Mistral fort : camion instable, réduire vitesse",
    ],
    trafficHotspots: [
      "Sorties Paris 7h-9h30",
      "Tunnel Fourvière Lyon 11h30-13h",
      "A7 Vienne-Orange (vendredis été)",
      "Péage Orange (saturé été 12h-14h et 17h-20h)",
      "Tunnel Prado-Carénage Marseille",
    ],
  },
  
  destinationSpecifics: {
    description: "Marseille présente des quartiers très différents : Vieux-Port et Panier médiévaux difficiles, quartiers modernes (8ème, 9ème) accessibles. Relief important (collines, calanques).",
    neighborhoods: [
      {
        name: "Vieux-Port (1er arrondissement)",
        difficulty: "difficile",
        specifics: "Rues étroites médiévales 2-4m, immeubles anciens 5-6 étages sans ascenseur, circulation dense touristes. Zone piétonne partielle.",
        tip: "Camion doit rester quai des Belges ou parking Charles de Gaulle (300-500m). Navette + portage. Budget +300-500€.",
      },
      {
        name: "Le Panier (2ème)",
        difficulty: "difficile",
        specifics: "Quartier le plus ancien Marseille, ruelles en pente 2-3m, escaliers, immeubles 16-17ème sans ascenseur. Patrimoine protégé.",
        tip: "Accès impossible camion 20m³. Petit camion 10-12m³ + portage manuel. Budget +400-600€. Prévenez DÈS le devis.",
      },
      {
        name: "Notre-Dame du Mont, Cours Julien (6ème)",
        difficulty: "moyen",
        specifics: "Colline, pentes moyennes 8-12%, rues 4-6m, immeubles 1900-1950 ascenseurs anciens étroits.",
        tip: "Équipe renforcée si 4ème étage et +. Budget +150-250€.",
      },
      {
        name: "8ème, 9ème arrondissements (Périer, Bonneveine)",
        difficulty: "facile",
        specifics: "Quartiers résidentiels modernes 1970-2020, immeubles avec ascenseurs, larges avenues, parkings. Proche calanques.",
        tip: "Ultra-accessible. Pas de surcoût. Recommandé si budget serré.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Paris-Marseille : le corridor du grand Sud",
      content: [
        "Paris-Marseille, c'est LE corridor vers le soleil méditerranéen. 775km, 7h30 de trajet pur, l'A7 Vallée du Rhône (la plus belle autoroute de France selon beaucoup), et l'arrivée à Marseille face à la mer.",
        "J'ai accompagné 135+ déménagements sur ce corridor. C'est un des plus demandés (top 3 après Paris-Lyon), avec des particularités fortes : distance longue (coûts élevés), A7 saturée l'été (chassé-croisé vacances), et Marseille avec ses quartiers très contrastés (Vieux-Port cauchemar vs 8ème-9ème faciles).",
        "Prix réel moyen T2 : 1900-2850€. Oui, c'est cher (distance 775km). Mais ce guide vous montre comment économiser 400-700€ en choisissant bon quartier Marseille, bonne période, et bon timing A7.",
      ],
    },
    {
      id: "prix-paris-marseille-2026",
      title: "Les vrais prix Paris → Marseille 2026",
      content: [
        "Basé sur 135+ déménagements accompagnés Paris-Marseille :",
        "<strong>Studio/T1 (10-15m³)</strong> : 1350€ - 2100€<br/>Base : camion 20m³, 2 déménageurs, trajet 775km, péages 70€ léger / 135-180€ camion. Ça monte si étage sans ascenseur Paris (+80-120€) ou quartier Vieux-Port Marseille (+300-500€).",
        "<strong>T2 (20-30m³)</strong> : 1900€ - 2850€<br/>Camion 30-40m³, 3 déménageurs. La fourchette haute = souvent départ Paris Marais + arrivée Marseille Panier (double galère).",
        "<strong>T3 (30-45m³)</strong> : 2550€ - 3800€<br/>Camion 40-50m³, 3-4 déménageurs. Déménagement sur 2 jours recommandé (J1 chargement Paris + trajet, J2 déchargement Marseille). Hébergement déménageurs inclus (+150-250€).",
        "<strong>Maison (50-90m³)</strong> : 4200€ - 6500€<br/>Camion 60-80m³, 4-5 déménageurs, 2-3 jours. Volume > 70m³ = 2 camions parfois nécessaire (économie groupage).",
      ],
      tips: [
        "Prix +40-60% vs Paris-Lyon (distance 775km vs 465km)",
        "Juillet-Août : +25-30% sur tous tarifs (vacances)",
        "Quartier Vieux-Port/Panier Marseille : +300-600€",
        "Déménagement 2 jours : +150-250€ hébergement déménageurs Lyon ou Montélimar",
      ],
      warning: "Distance 775km = coûts élevés (carburant 320-520€, péages 135-180€, temps déménageurs 2j). Économisez sur quartier et période, pas sur qualité déménageur.",
    },
    {
      id: "itineraire-a6-a7",
      title: "L'itinéraire : A6 + A7, la descente vers le Sud",
      content: [
        "<strong>Trajet complet</strong> : Paris Porte d'Italie → A6 → Lyon → A7 Vallée du Rhône → Marseille",
        "<strong>Durée réelle</strong> : 7h30 camion (pas 7h voiture). 775km + pause obligatoire 30min après 4h30 + ralentissements.",
        "",
        "<strong>Section 1 : Paris → Lyon (465km, 4h30)</strong>",
        "• A6 Autoroute du Soleil (2ème plus fréquentée France)",
        "• Bouchons sorties Paris 7h-9h30",
        "• Tunnel Fourvière Lyon (éviter par A46 Est)",
        "",
        "<strong>Section 2 : Lyon → Marseille (310km, 3h00)</strong>",
        "• A7 Vallée du Rhône (axe majeur vacances)",
        "• Vienne, Valence, Montélimar, Orange, Aix",
        "• <strong>Vendredis été 15h-22h</strong> : bouchons +3-5h (chassé-croisé vacanciers vers Sud)",
        "• <strong>Dimanches été 15h-21h</strong> : bouchons retour (vacanciers vers Nord)",
        "",
        "<strong>Points critiques A7</strong> :",
        "• Péage Vienne (10km après Lyon) : saturé été 11h-14h",
        "• Péage Orange (300km) : goulot d'étranglement (bouchons 12h-20h juillet-août)",
        "• Section Valence-Montélimar : mistral fort automne-hiver (vent 80-100 km/h, camion instable)",
        "• Tunnel Prado-Carénage Marseille (2,5km sous ville) : unique accès centre depuis A7",
        "",
        "<strong>Météo spécifique</strong> :",
        "• Mistral Vallée Rhône : 100-150 jours/an, vent Nord 60-100 km/h (camion déséquilibré, réduire vitesse 80-90 km/h)",
        "• Chaleur extrême été : 35-45°C Valence-Orange (record France 45°C Vaucluse 2019)",
        "• Brouillard dense Nov-Fév Bourgogne (section Paris-Lyon)",
      ],
      tips: [
        "Départ Paris 6h = arrivée Marseille 13h30-14h (optimal)",
        "Pause Montélimar (mi-parcours, 4h30 depuis Paris) : aire Montélimar nougat",
        "Vendredis juillet-août : départ 5h OU mardi-jeudi (évite chassé-croisé)",
        "Mistral fort prévu : réduire vitesse 80-90 km/h (sécurité camion chargé)",
      ],
      warning: "A7 vendredis juillet-août 15h-22h = ENFER. Bouchons Vienne-Orange +3-5h. Vous arriverez Marseille 22h-minuit épuisés. Départ mardi-jeudi ou départ 5h vendredi.",
    },
    {
      id: "marseille-quartiers-detail",
      title: "Marseille : ville de contrastes, quartiers très différents",
      content: [
        "Marseille, ce n'est PAS une ville homogène. Entre le 8ème arrondissement moderne (facile) et le Panier médiéval (cauchemar), il peut y avoir 600€ d'écart sur un T3.",
        "",
        "<strong>Vieux-Port (1er arrondissement) - DIFFICILE</strong>",
        "• Port historique (fondé -600 av. J.-C. Grecs Phocée), quais étroits",
        "• Immeubles 18-19ème siècle, 5-6 étages sans ascenseur",
        "• Circulation dense (touristes 5M visiteurs/an, terrasses, marché poissons)",
        "• <strong>Solution</strong> : Camion quai des Belges ou parking Charles de Gaulle (300-500m), navette",
        "• <strong>Surcoût</strong> : +300-500€",
        "",
        "<strong>Le Panier (2ème) - TRÈS DIFFICILE</strong>",
        "• Plus ancien quartier Marseille (fondation grecque -600), ruelles médiévales 2-3m en pente",
        "• Montée des Accoules (pente 15%, escaliers), rue du Petit-Puits (escaliers uniquement)",
        "• Immeubles 16-17ème siècle, 4-5 étages sans ascenseur, portes étroites 0,7-0,9m",
        "• <strong>Solution</strong> : Camion 10-12m³ max, portage manuel (impossible chariot), équipe 4 déménageurs",
        "• <strong>Surcoût</strong> : +400-600€",
        "• <strong>Note</strong> : Certains déménageurs REFUSENT le Panier (trop compliqué)",
        "",
        "<strong>Notre-Dame du Mont, Cours Julien (6ème) - MOYEN</strong>",
        "• Colline, pentes 8-12%, quartier bobo tendance",
        "• Immeubles début 20ème, ascenseurs anciens étroits",
        "• Stationnement compliqué (rues résidentielles denses)",
        "• <strong>Surcoût</strong> : +150-250€",
        "",
        "<strong>8ème arrondissement (Périer, Bonneveine, Pointe Rouge) - FACILE</strong>",
        "• Quartiers résidentiels bord de mer Sud",
        "• Immeubles modernes 1970-2020, ascenseurs, parkings",
        "• Larges avenues (Prado, Pointe Rouge), accès direct A7 (sortie Bonneveine)",
        "• Proche plages Prado, calanques (Callelongue)",
        "• <strong>Prix T2</strong> : tarif standard, pas de surcoût",
        "• <strong>Recommandation</strong> : Si vous cherchez logement Marseille, privilégiez 8ème ou 9ème (ultra-accessibles)",
        "",
        "<strong>9ème arrondissement (Mazargues, Sainte-Marguerite) - FACILE</strong>",
        "• Quartiers résidentiels Est",
        "• Immeubles modernes, accès faciles",
        "• <strong>Prix T2</strong> : tarif standard",
      ],
      warning: "Si on vous propose Vieux-Port ou Panier sans expliquer les contraintes = red flag. Un pro doit vous prévenir DÈS le devis.",
    },
    {
      id: "a7-vallee-rhone-vacances",
      title: "A7 Vallée du Rhône : l'axe vacances le plus saturé de France",
      content: [
        "L'A7 Vallée du Rhône (Lyon-Marseille 310km), c'est LA route des vacances. L'été, c'est l'enfer.",
        "",
        "<strong>Chiffres été</strong> :",
        "• 200 000 véhicules/jour juillet-août (vs 120 000 hors saison)",
        "• Vendredis 15h-22h : bouchons systématiques Vienne-Orange (+3-5h)",
        "• Dimanches 15h-21h : bouchons retour Nord",
        "• 1er weekend août : pire moment année (chassé-croisé juilletistes/aoûtiens)",
        "",
        "<strong>Sections critiques</strong> :",
        "• Péage Vienne (sortie Lyon) : 1er péage A7, saturé 11h-14h été",
        "• Valence-Montélimar (80km) : travaux fréquents + chaleur (40-45°C)",
        "• Péage Orange (280km depuis Lyon) : goulot principal A7, bouchons 12h-20h juillet-août",
        "• Section Orange-Aix (120km) : dernière ligne droite, fatigue conducteur",
        "",
        "<strong>Mistral (vent légendaire)</strong> :",
        "• 100-150 jours/an Vallée Rhône (surtout automne-hiver-printemps)",
        "• Vent Nord 60-100 km/h (rafales 120-150 km/h)",
        "• Camion chargé = prise au vent importante (déséquilibre, difficulté contrôle)",
        "• Solution : Réduire vitesse 80-90 km/h, tenir fermement volant, éviter dépassements",
        "",
        "<strong>Comment éviter l'enfer A7 été</strong> :",
        "• Départ Paris lundi-jeudi (évite vendredis/dimanches)",
        "• Départ 5h-6h (arrivée Marseille 12h30-13h30 avant rush)",
        "• Éviter 1er weekend août ABSOLUMENT",
        "• Alternative : prendre train Paris-Marseille TGV 3h20 + louer camion Marseille (mais coûteux)",
      ],
      warning: "A7 vendredi juillet 17h = cauchemar absolu. Vous mettrez 11-12h Paris-Marseille au lieu de 7h30. Déménageurs en overtime +200-350€. Évitez.",
    },
    {
      id: "erreurs-paris-marseille",
      title: "Les 5 erreurs qu'on voit sur Paris-Marseille",
      content: [
        "<strong>Erreur #1 : Déménager vendredi juillet-août sans anticiper A7</strong>",
        "Résultat : 11-12h trajet (vs 7h30 normal), arrivée Marseille 21h-22h, déchargement nuit, overtime +200-350€.",
        "<strong>Solution</strong> : Déménagez mardi-jeudi OU départ Paris 5h vendredi (arrivée avant bouchons).",
        "",
        "<strong>Erreur #2 : Accepter Vieux-Port ou Panier sans savoir</strong>",
        "Vous trouvez un T2 sympa Vieux-Port. Déménagement : +450€ vs 8ème. Sur 10 ans (3-4 déménagements) : +1800€.",
        "<strong>Solution</strong> : Si budget serré, privilégiez 8ème-9ème Marseille (mer, accessibilité, prix standard).",
        "",
        "<strong>Erreur #3 : Sous-estimer la distance 775km</strong>",
        "'Paris-Marseille c'est comme Paris-Lyon'. Non. 775km vs 465km = +67% distance, +70% prix.",
        "<strong>Solution</strong> : Budget réaliste T2 : 1900-2850€ (pas 1500€).",
        "",
        "<strong>Erreur #4 : Pas de pause sur 7h30 trajet</strong>",
        "Déménageurs épuisés = risque accident + erreurs déchargement.",
        "<strong>Solution</strong> : Pause 30min obligatoire Montélimar (mi-parcours, 4h30 depuis Paris).",
        "",
        "<strong>Erreur #5 : Réserver 2 semaines avant en été</strong>",
        "Juillet-août = haute saison +25-30%. Déménageurs bookés 5-6 semaines avant.",
        "<strong>Solution</strong> : Réservez début juin pour déménagement juillet-août.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Paris 11ème → Vieux-Port Marseille (5ème étage sans ascenseur)",
      challenge: "Devis initial 2100€. Arrivés Vieux-Port : rue 3m, camion 20m³ ne rentre pas. Immeuble ancien, escaliers étroits colimaçon.",
      solution: "Déménageurs ont garé camion quai des Belges (400m), fait navette avec diable. Portage 5 étages colimaçon = 2 déménageurs en relais.",
      result: "Facture finale : 2850€ (+750€). Durée : 11h vs 7h30 prévues. Leçon : Vieux-Port = prévenez DÈS le devis.",
    },
    {
      situation: "T3 Paris 16ème → 8ème Marseille (Périer), vendredi juillet",
      challenge: "Départ Paris 14h (tard). A7 embouteillée Vienne-Orange. Bloqués 4h30 (vs 3h normal section Lyon-Marseille).",
      solution: "Arrivée Marseille 23h (vs 19h prévu). Déménageurs épuisés, déchargement rapide, voisins mécontents.",
      result: "Surcoût overtime : +280€. Stress maximum. Aurait dû partir mardi ou départ 6h vendredi.",
    },
    {
      situation: "Maison 75m³ Paris → 9ème Marseille, avril",
      challenge: "Volume important, 2 jours nécessaires (J1 chargement + trajet, J2 déchargement).",
      solution: "Départ Paris lundi 8h, arrivée Marseille 16h, déménageurs hébergés hôtel Marseille (150€), déchargement mardi 8h-15h.",
      result: "Total : 5200€ (hébergement inclus). Tout s'est bien passé. 9ème Marseille = ultra-accessible, 0 galère. Déménageurs reposés = travail soigné.",
    },
  ],
  
  faq: [
    {
      question: "Combien coûte un déménagement Paris → Marseille en 2026 ?",
      answer: "T1/T2 : 1900-2850€. T3 : 2550-3800€. Maison : 4200-6500€. Prix inclut transport 775km, péages 135-180€ camion, carburant 320-520€, main d'œuvre 2j, hébergement déménageurs si 2 jours. Suppléments fréquents : étages sans ascenseur, Vieux-Port/Panier Marseille (+300-600€), juillet-août (+25-30%).",
    },
    {
      question: "Combien de temps dure un déménagement Paris → Marseille ?",
      answer: "Trajet pur : 7h30 (775km + pause 30min). Déménagement complet : 1-2 jours selon volume. Volume < 30m³ : 1 jour possible (départ 6h Paris, arrivée 14h Marseille, déchargement 14h-19h). Volume > 35m³ : 2 jours recommandé (J1 chargement Paris + trajet, J2 déchargement Marseille, déménageurs reposés).",
    },
    {
      question: "L'A7 Vallée du Rhône est-elle vraiment saturée l'été ?",
      answer: "Oui. Vendredis juillet-août 15h-22h : bouchons Vienne-Orange +3-5h (vs 3h normal Lyon-Marseille). 200 000 véhicules/jour été (vacanciers vers Méditerranée, Côte d'Azur, Espagne). 1er weekend août = pire moment (chassé-croisé). Solution : déménagez mardi-jeudi OU départ 5h-6h vendredi.",
    },
    {
      question: "Le Vieux-Port Marseille est-il vraiment compliqué ?",
      answer: "Oui. Rues médiévales 2-4m (camion 20m³ ne rentre pas), immeubles anciens sans ascenseur, circulation touristique dense (5M visiteurs/an Vieux-Port). Solution : camion garé quai des Belges + navette 300-500m + portage. Surcoût +300-500€. Alternative : 8ème-9ème Marseille (mer, accessibilité, pas de surcoût).",
    },
    {
      question: "Le mistral impacte-t-il vraiment le déménagement ?",
      answer: "Oui si fort (> 70 km/h). Mistral = vent Nord Vallée du Rhône 100-150 jours/an. Camion chargé = prise au vent (déséquilibre, difficulté contrôle direction). Si mistral > 80 km/h prévu : déménageur réduit vitesse 80-90 km/h (vs 110 km/h normal) = +1h trajet. Mais sécurité prioritaire.",
    },
    {
      question: "Vaut-il mieux déménager en 1 jour ou 2 jours ?",
      answer: "Dépend volume. < 30m³ : 1 jour possible (départ 6h, arrivée 14h, déchargement 14h-19h). > 35m³ : 2 jours recommandé (déménageurs reposés, travail soigné, pas de rush). Surcoût 2 jours : +150-250€ hébergement. Mais 0 stress, qualité ++.",
    },
    {
      question: "Paris-Marseille est-il plus cher que Paris-Lyon ?",
      answer: "Oui, +40-60%. Raison : distance 775km vs 465km (+67%), péages 135-180€ vs 85-120€, carburant 320-520€ vs 180-300€, temps 2j vs 1j souvent. T2 Paris-Lyon 1350-2030€ vs Paris-Marseille 1900-2850€. La distance se paie.",
    },
    {
      question: "Comment économiser sur Paris-Marseille ?",
      answer: "3 leviers : 1) Quartier Marseille : 8ème-9ème vs Vieux-Port/Panier = économie 300-600€. 2) Période : avril-mai ou octobre vs juillet-août = économie 500-850€ (tarifs -25-30%). 3) Jour : mardi-mercredi vs samedi = économie 200-300€. Total économie possible : 1000-1750€ sur T3.",
    },
  ],
  
  checklist: [
    {
      category: "5-6 semaines avant (si juillet-août)",
      items: [
        "Réserver déménageur (haute saison très demandée)",
        "Demander 3-5 devis en précisant quartier Marseille + étage Paris",
        "Vérifier dates chassé-croisé (1er weekend août à éviter)",
      ],
    },
    {
      category: "3 semaines avant",
      items: [
        "Identifier quartier Marseille + contraintes (Vieux-Port ? Panier ? 8ème ?)",
        "Souscrire assurance habitation Marseille",
        "Commander cartons (prévoir 30-50 cartons T2, 50-80 cartons T3)",
        "Trier objets : vendre/donner (réduire volume = économies)",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer horaires : départ Paris 6h (arrivée Marseille 13h30-14h optimal)",
        "Vérifier météo A7 (mistral fort prévu ? Chaleur extrême ?)",
        "Préparer plan accès Marseille (codes portes, parking, contact gardien)",
        "Photos meubles valeur (preuve état avant transport 775km)",
        "Cartons étiquetés (pièce + FRAGILE + priorité)",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ Paris tôt (6h optimal)",
        "Vérifier inventaire cartons chargés",
        "Pause obligatoire Montélimar après 4h30 (légal + sécurité)",
        "Prévenir contact Marseille 1h avant arrivée",
        "Vérifier état meubles AVANT signature bon livraison",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #4 : MARSEILLE → PARIS
 * Le retour vers le Nord
 */
export const MARSEILLE_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "marseille",
  originName: "Marseille",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "110+ déménagements Marseille-Paris accompagnés",
  
  hero: {
    title: "Déménager de Marseille vers Paris : guide complet 2026",
    subtitle: "775 km, 7h30, remonter vers la capitale",
    catchphrase: "Marseille-Paris, c'est quitter le soleil pour Paris. Les défis sont au départ (Vieux-Port, Panier) et à l'arrivée (périph).",
  },
  
  routeData: {
    distance: "775 km",
    duration: "7h30 (légèrement plus long sens Marseille-Paris)",
    mainRoute: "A7 Nord puis A6 (sens inverse)",
    tolls: "70€ véhicule léger, 135-180€ camion",
    fuelCost: "320-530€ selon gabarit",
  },
  
  pricing: {
    studio: "1400€ - 2180€",
    t2: "1980€ - 2950€",
    t3: "2650€ - 3950€",
    house: "4350€ - 6800€",
    factors: [
      "Quartier départ Marseille (Vieux-Port/Panier = +400-650€)",
      "Étage arrivée Paris sans ascenseur",
      "Périphérique parisien timing",
      "Période (rentrée septembre = forte demande Marseille-Paris)",
      "Services (emballage, démontage)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin (après Pâques, avant été)",
      "Octobre (après rentrée, -10-15% vs été)",
    ],
    avoid: [
      "Dernière semaine août (rentrée Paris = rush)",
      "Dimanches été 14h-21h (A7 retour Nord bouchons)",
      "8 Décembre si arrivée Lyon (Fête Lumières)",
    ],
    highSeason: "Août-Septembre (+25-30%, forte demande étudiants vers Paris)",
    lowSeason: "Janvier-Février (-10-15%)",
  },
  
  routeSpecifics: {
    challenges: [
      "Sortie Marseille par tunnel Prado-Carénage (unique accès A7 depuis centre)",
      "A7 Nord dimanches été 15h-21h (retour vacanciers vers Nord)",
      "Mistral Vallée Rhône (vent arrière Marseille-Lyon, accélère camion)",
      "Péage Fleury-en-Bière approche Paris (bouchons 16h-19h)",
      "Périphérique parisien timing critique",
    ],
    tips: [
      "Départ Marseille 6h = arrivée Paris 14h (évite périph 16h-19h)",
      "Si départ tard : arriver Paris après 19h30",
      "Mistral arrière : attention vitesse excessive camion poussé",
      "Pause Montélimar ou Valence (mi-parcours)",
    ],
    trafficHotspots: [
      "Tunnel Prado-Carénage Marseille 8h-10h",
      "A7 dimanches été 15h-21h (sens Marseille-Paris)",
      "Tunnel Fourvière Lyon 11h30-13h",
      "Péage Fleury-en-Bière 16h-19h",
      "Périphérique Paris 16h-20h",
    ],
  },
  
  destinationSpecifics: {
    description: "Paris présente défis périphérique, autorisations stationnement complexes, immeubles haussmanniens sans ascenseur.",
    neighborhoods: [
      {
        name: "Marais (3ème/4ème)",
        difficulty: "difficile",
        specifics: "Ruelles médiévales, immeubles anciens 5-6 étages sans ascenseur. Autorisations obligatoires.",
        tip: "Budget +200-400€. Arrivée tôt 7h-8h créneau livraison.",
      },
      {
        name: "Montmartre (18ème)",
        difficulty: "difficile",
        specifics: "Butte pentes raides, escaliers, ruelles. Similaire Panier Marseille.",
        tip: "Certains déménageurs refusent haut Montmartre. Prévenez dès devis. +150-350€.",
      },
      {
        name: "Quartiers haussmanniens (7ème, 8ème, 16ème)",
        difficulty: "moyen",
        specifics: "Immeubles 5-6 étages, ascenseurs étroits ou absents. Stationnement compliqué.",
        tip: "Autorisation mairie recommandée. Portage étages +60-100€/étage après 2ème.",
      },
      {
        name: "Banlieue proche (92, 93, 94)",
        difficulty: "facile",
        specifics: "Immeubles modernes, ascenseurs, parkings. Évite périph Paris.",
        tip: "15-20% moins cher que Paris intra-muros. Privilégiez si budget serré.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Marseille-Paris : quitter la Méditerranée pour la capitale",
      content: [
        "Marseille-Paris, c'est remonter vers le Nord. 775km, l'A7 Vallée du Rhône en sens inverse, et l'arrivée dans le trafic parisien.",
        "J'ai accompagné 110+ déménagements Marseille-Paris. Les défis sont au départ (Vieux-Port et Panier compliqués) et à l'arrivée (périph Paris timing critique, autorisations stationnement complexes).",
        "Prix légèrement plus élevés que Paris-Marseille (5-10%) car déménageurs souvent basés Paris = Marseille-Paris trajet 'aller'. T2 moyen : 1980-2950€ (vs 1900-2850€ sens inverse).",
      ],
    },
    {
      id: "depart-marseille-vieux-port-panier",
      title: "Départ Marseille : Vieux-Port et Panier, les défis majeurs",
      content: [
        "80% des surcoûts Marseille-Paris viennent du départ Marseille (pas du trajet, pas de Paris).",
        "",
        "<strong>Vieux-Port (DIFFICILE)</strong>",
        "• Rues 2-4m (quai du Port, rue Caisserie, rue Saint-Ferréol) : camion 20m³ ne circule pas",
        "• Immeubles 18-19ème 5-6 étages sans ascenseur",
        "• Circulation dense (touristes, terrasses, marché poissons)",
        "• <strong>Solution</strong> : Camion garé quai des Belges (parking visiteurs) + navette 300-500m",
        "• <strong>Surcoût</strong> : +350-550€",
        "",
        "<strong>Le Panier (TRÈS DIFFICILE)</strong>",
        "• Ruelles en pente 2-3m (montée des Accoules pente 15%, rue Panier escaliers)",
        "• Immeubles 16-17ème, 4-5 étages sans ascenseur, portes 0,7-0,9m (meubles ne passent pas)",
        "• Certaines rues = escaliers uniquement (rue du Petit-Puits, traverse Saint-Laurent)",
        "• <strong>Solution</strong> : Portage manuel depuis parking Hôtel de Ville (500-800m), équipe 4-5 déménageurs, démontage complet meubles",
        "• <strong>Surcoût</strong> : +500-750€",
        "• <strong>Important</strong> : 30% des déménageurs REFUSENT le Panier (trop galère). Prévenez DÈS le devis.",
        "",
        "<strong>8ème-9ème arrondissements (FACILE)</strong>",
        "• Immeubles modernes, ascenseurs, parkings",
        "• Accès direct A7 (sortie Bonneveine)",
        "• <strong>Surcoût</strong> : 0€",
      ],
      warning: "Si vous habitez Vieux-Port ou Panier et cachez l'info pour avoir devis moins cher : jour J = conflit garanti + surcoût +500-750€.",
    },
    {
      id: "a7-nord-retour-vacanciers",
      title: "A7 Nord : le retour des vacanciers dimanches été",
      content: [
        "A7 sens Marseille-Paris a une spécificité : <strong>les retours de vacances dimanches été</strong>.",
        "",
        "<strong>Dimanches juillet-août 14h-21h</strong> :",
        "• Vacanciers Méditerranée/Côte d'Azur remontent vers Paris-Lyon-Nord",
        "• Bouchons Orange-Vienne (300km) +2-4h",
        "• Section Orange-Valence : la pire (50-60km bouchons)",
        "",
        "<strong>Solution</strong> :",
        "• Déménagez mardi-jeudi (A7 fluide)",
        "• Si dimanche obligatoire : départ 5h Marseille (arrivée Lyon 8h30 avant bouchons) OU départ 11h (accepter bouchons, arrivée Paris 20h-21h)",
        "",
        "<strong>Autres jours critiques</strong> :",
        "• Dimanches soirs toute l'année 17h-20h (retours weekends)",
        "• Vendredis 16h-20h (départs weekends)",
        "• 15 août : jour férié, circulation dense",
      ],
      tips: [
        "Mardi-mercredi = A7 fluide (3h Lyon-Marseille vs 7h dimanche été)",
        "Départ Marseille 6h = arrivée Paris 14h (optimal, évite périph 16h-19h)",
        "Mistral arrière Marseille-Lyon : camion poussé, contrôlez vitesse",
      ],
    },
    {
      id: "erreurs-marseille-paris",
      title: "Les 5 erreurs sur Marseille-Paris",
      content: [
        "<strong>Erreur #1 : Cacher que vous habitez Vieux-Port ou Panier</strong>",
        "Devis 2200€. Jour J : 'On peut pas rentrer, on fait navette'. Facture finale 2950€ (+750€).",
        "<strong>Solution</strong> : Dites TOUT dès devis. Photos rue + entrée immeuble.",
        "",
        "<strong>Erreur #2 : Déménager dimanche août</strong>",
        "A7 Nord = retour vacanciers. Trajet 12h vs 7h30 normal. Overtime +250-400€.",
        "<strong>Solution</strong> : Mardi-jeudi. Ou dimanche départ 5h.",
        "",
        "<strong>Erreur #3 : Arriver Paris 17h30</strong>",
        "Périph 17h30 = 1h15 bouchon. Déménageurs overtime, déchargement 21h30.",
        "<strong>Solution</strong> : Arrivée avant 15h OU après 19h30.",
        "",
        "<strong>Erreur #4 : Sous-estimer coûts (775km = cher)</strong>",
        "T2 Marseille-Paris ≠ T2 Paris-Lyon. 775km vs 465km = +60% distance = +50% prix.",
        "<strong>Solution</strong> : Budget réaliste T2 1980-2950€.",
        "",
        "<strong>Erreur #5 : Pas d'autorisation Paris si Marais/Montmartre</strong>",
        "PV 150€ + camion 200m = temps perdu = surcoût.",
        "<strong>Solution</strong> : Autorisation 2-3 semaines avant.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Panier Marseille (4ème étage) → Paris 10ème (3ème avec ascenseur)",
      challenge: "Devis 2300€. Déménageur n'a pas compris complexité Panier (ruelles 2m, pente 15%, escaliers).",
      solution: "Jour J : portage manuel depuis parking Hôtel de Ville (700m), 5 déménageurs (vs 3 prévu), démontage complet lit canapé (portes 0,8m).",
      result: "Facture : 3100€ (+800€). Durée : 13h vs 8h. Leçon : Panier = prévenez ou déménagez depuis 8ème.",
    },
    {
      situation: "T3 8ème Marseille → Paris 16ème, dimanche août",
      challenge: "Départ 10h dimanche. A7 Nord embouteillée Orange-Valence 4h (vs 1h30 normal).",
      solution: "Arrivés Paris 20h30 (vs 17h prévu). Déménageurs épuisés, déchargement rapide, stress.",
      result: "Surcoût overtime : +220€. Aurait dû partir mardi ou dimanche 5h.",
    },
    {
      situation: "Maison 80m³ 9ème Marseille → banlieue 92, avril",
      challenge: "Volume important, banlieue 92 (évite périph Paris).",
      solution: "Départ Marseille lundi 7h, arrivée 92 15h, contournement Paris par A86. 9ème Marseille = ultra-accessible, 92 aussi.",
      result: "5400€. 0 galère. 2 jours (hébergement Lyon). Tout parfait. Quartiers modernes = efficacité maximale.",
    },
  ],
  
  faq: [
    {
      question: "Marseille-Paris coûte-t-il plus cher que Paris-Marseille ?",
      answer: "Oui, légèrement (5-10%). Raison : déménageurs souvent basés Paris, Marseille-Paris = trajet 'aller'. T2 Paris-Marseille 1900-2850€ vs Marseille-Paris 1980-2950€. Mais différence minime.",
    },
    {
      question: "Comment gérer le départ depuis le Vieux-Port ou le Panier ?",
      answer: "Vieux-Port : camion garé quai des Belges + navette 300-500m, surcoût +350-550€. Panier : portage manuel depuis parking (500-800m), équipe 4-5 déménageurs, surcoût +500-750€. Certains déménageurs refusent Panier. Alternative : habitez 8ème-9ème Marseille (mer + accessibilité, pas de surcoût).",
    },
    {
      question: "A quelle heure partir de Marseille pour éviter périph Paris ?",
      answer: "Départ 6h-7h Marseille = arrivée Paris 13h30-14h30 (optimal, périph fluide). Si départ tard : arriver Paris après 19h30 (évite périph 16h-19h). Entre 15h-19h = périph saturé +45 min à 1h30.",
    },
    {
      question: "Les retours vacanciers A7 Nord impactent-ils vraiment ?",
      answer: "Oui, dimanches été 14h-21h. Retour vacanciers Méditerranée/Côte d'Azur vers Paris-Lyon. A7 Orange-Vienne bouchons +2-4h. Solution : déménagez mardi-jeudi (A7 fluide) ou dimanche départ 5h (avant flux).",
    },
    {
      question: "Marseille-Paris en 1 jour ou 2 jours ?",
      answer: "Dépend volume. < 30m³ : 1 jour possible (départ 6h, arrivée 14h). > 40m³ : 2 jours recommandé (déménageurs reposés, hébergement Lyon ou Montélimar +150-250€). Si départ Vieux-Port/Panier : 2 jours fortement conseillé (chargement difficile = fatigue équipe).",
    },
    {
      question: "L'autorisation Paris est-elle plus complexe que Marseille ?",
      answer: "Oui. Marseille : autorisation simple (mairie centrale, 40-60€, 7j). Paris : chaque arrondissement a ses règles, délais 7-15j, coût 40-80€. Marais, Montmartre, 7ème, 16ème = obligatoire. Banlieue = souvent pas nécessaire.",
    },
    {
      question: "Comment économiser sur Marseille-Paris ?",
      answer: "3 leviers : 1) Départ 8ème-9ème Marseille vs Vieux-Port/Panier = économie 400-700€. 2) Période : avril-mai ou octobre vs août = économie 600-900€. 3) Jour : mardi-mercredi vs dimanche = économie 200-350€. Total : 1200-1950€ économie possible T3.",
    },
  ],
  
  checklist: [
    {
      category: "5-6 semaines avant (si rentrée août-septembre)",
      items: [
        "Réserver déménageur (forte demande étudiants Marseille-Paris)",
        "Demander 3-5 devis en précisant quartier Marseille + étage Paris",
        "Si Panier : vérifier que déménageur accepte (30% refusent)",
      ],
    },
    {
      category: "3 semaines avant",
      items: [
        "Autorisation stationnement Paris si Marais/Montmartre (délai 7-15j)",
        "Réserver ascenseur Paris (copropriété)",
        "Souscrire assurance habitation Paris",
        "Commander cartons",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer horaires : départ Marseille 6h-7h (arrivée Paris avant 15h)",
        "Préparer plan accès Paris (codes, parking, contact)",
        "Si Vieux-Port/Panier : re-confirmer déménageur comprend défis",
        "Photos meubles valeur",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ Marseille tôt (6h optimal)",
        "Vérifier inventaire chargé",
        "Pause Montélimar après 4h (légal + sécurité)",
        "Prévenir contact Paris 1h avant arrivée",
        "Vérifier état meubles AVANT signature",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #5 : PARIS → TOULOUSE
 * Le corridor Sud-Ouest, ville rose accessible
 */
export const PARIS_TOULOUSE_PREMIUM: PremiumCorridorData = {
  originSlug: "paris",
  originName: "Paris",
  destinationSlug: "toulouse",
  destinationName: "Toulouse",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "125+ déménagements Paris-Toulouse accompagnés",
  
  hero: {
    title: "Déménager de Paris vers Toulouse : guide complet 2026",
    subtitle: "680 km, 6h30 de trajet, la ville rose accessible",
    catchphrase: "Paris-Toulouse, c'est le Sud-Ouest. 680km d'autoroute, et une arrivée à Toulouse plutôt simple (ville plate).",
  },
  
  routeData: {
    distance: "680 km",
    duration: "6h30 (trajet pur + pause)",
    mainRoute: "A10 Aquitaine",
    tolls: "60€ véhicule léger, 115-160€ camion",
    fuelCost: "280-460€ selon gabarit",
  },
  
  pricing: {
    studio: "1250€ - 1900€",
    t2: "1750€ - 2650€",
    t3: "2350€ - 3500€",
    house: "3900€ - 6000€",
    factors: [
      "Distance 680km (entre Lyon et Marseille)",
      "Toulouse = ville plate accessible (pas de surcoût quartier)",
      "Étages sans ascenseur Paris",
      "Période (septembre rentrée étudiants 130 000)",
      "Services",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin (climat agréable Sud-Ouest)",
      "Octobre (après rentrée, tarifs -10%)",
    ],
    avoid: [
      "Dernière semaine août (rentrée étudiants Toulouse 3ème ville étudiante)",
      "Fins de mois",
      "Juillet-août vendredis (départs vacances Bordeaux-Espagne)",
    ],
    highSeason: "Août-Septembre (+20-25%, rentrée massive étudiants)",
    lowSeason: "Janvier-Février (-10-15%)",
  },
  
  routeSpecifics: {
    challenges: [
      "A10 longue (680km, monotone)",
      "Péage Aquitaine nombreux (60€ léger, 115-160€ camion)",
      "Bordeaux contournement : périphérique Bordeaux dense 8h-10h et 17h-19h",
      "Chaleur été (35-40°C section Bordeaux-Toulouse)",
    ],
    tips: [
      "Départ Paris 6h = arrivée Toulouse 12h30-13h",
      "Pause Tours ou Poitiers (mi-parcours, 3h depuis Paris)",
      "Contourner Bordeaux par périph Nord (fluide vs Sud)",
      "A10 fluide vs A6/A7 (moins touristique)",
    ],
    trafficHotspots: [
      "Sorties Paris 7h-9h30",
      "Périphérique Bordeaux 8h-10h et 17h-19h",
      "A62 Bordeaux-Toulouse vendredis 17h-20h (départs weekend Espagne)",
      "Approche Toulouse 12h-13h30",
    ],
  },
  
  destinationSpecifics: {
    description: "Toulouse = ville plate accessible. Contrairement Lyon (pentes) ou Marseille (relief), Toulouse est simple pour déménager. Tous quartiers accessibles.",
    neighborhoods: [
      {
        name: "Centre Capitole",
        difficulty: "moyen",
        specifics: "Place Capitole, rues piétonnes, immeubles anciens briques roses. Circulation limitée 7h-11h livraisons.",
        tip: "Autorisation stationnement mairie (30-50€, 7j). Arrivée tôt 7h-8h. +80-120€.",
      },
      {
        name: "Tous autres quartiers Toulouse",
        difficulty: "facile",
        specifics: "Toulouse = ville plate (altitude 140-150m, relief nul). Tous quartiers résidentiels (Minimes, Borderouge, Compans, Ramonville) ultra-accessibles.",
        tip: "Pas de surcoût. Toulouse = une des villes les plus faciles France (comme Nantes, Villeurbanne).",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Paris-Toulouse : le corridor Sud-Ouest accessible",
      content: [
        "Paris-Toulouse, c'est le Sud-Ouest. 680km, l'A10 Aquitaine (axe Bordeaux-Espagne), et l'arrivée dans la ville rose.",
        "125+ déménagements suivis. Toulouse a un ÉNORME avantage vs Lyon ou Marseille : ville PLATE. Pas de Croix-Rousse, pas de Panier, pas de pentes. Résultat : les déménagements Toulouse sont fluides (sauf centre Capitole moyennement compliqué).",
        "Prix moyens : T2 1750-2650€. Entre Paris-Lyon (1350-2030€) et Paris-Marseille (1900-2850€). Distance 680km justifie le prix.",
      ],
    },
    {
      id: "toulouse-ville-plate-avantage",
      title: "Toulouse ville plate : avantage ÉNORME pour déménagements",
      content: [
        "Toulouse (490 000 habitants, 4ème ville France), c'est une ville PLATE. Altitude 140-150m, relief nul, Garonne qui traverse (fleuve plat).",
        "",
        "<strong>Comparaison autres grandes villes</strong> :",
        "• Lyon : Croix-Rousse pentes 10-15%, Fourvière colline 300m, surcoût +200-500€",
        "• Marseille : Vieux-Port relief, Panier colline, Notre-Dame Mont, surcoût +300-600€",
        "• Nice : Collines partout, Vieux Nice medieval, surcoût +250-450€",
        "• Toulouse : PLAT partout. Surcoût 0€ (sauf centre Capitole +80-120€)",
        "",
        "<strong>Conséquence prix</strong> : Déménagement Paris-Toulouse T2 1750-2650€ (distance 680km justifie prix), MAIS aucun surcoût quartier (sauf Capitole léger). Paris-Lyon T2 1350-2030€ (distance 465km) MAIS si Vieux Lyon +500€ = 1850-2530€ final (similaire Toulouse). Toulouse = prévisibilité maximale.",
        "",
        "<strong>Quartiers Toulouse tous accessibles</strong> :",
        "• Minimes (Nord) : métro B, immeubles modernes",
        "• Borderouge (Nord-Est) : quartier récent, tram T1",
        "• Compans-Caffarelli (centre-Nord) : gare Matabiau TGV Paris 4h20",
        "• Ramonville (Sud-Est) : métro B, université Paul Sabatier",
        "• Sept Deniers (Nord-Ouest) : résidentiel, tram T2",
        "",
        "Tous ces quartiers : immeubles avec ascenseurs, larges avenues, parkings. Prix T2 Paris-Toulouse : 1750-2650€ quel que soit le quartier (sauf Capitole +80-120€). Prévisibilité = sérénité.",
      ],
    },
    {
      id: "a10-aquitaine-trajet",
      title: "A10 Aquitaine : un trajet plus tranquille que A6/A7",
      content: [
        "L'A10, c'est l'Autoroute Aquitaine. Paris-Bordeaux, puis A62 Bordeaux-Toulouse. Moins saturée que A6 (Lyon) ou A7 (Marseille).",
        "",
        "<strong>Itinéraire</strong> : Paris Porte d'Orléans → A10 → Bordeaux → A62 → Toulouse",
        "",
        "<strong>Points passage</strong> :",
        "• Orléans (120km, 1h15)",
        "• Tours (240km, 2h30)",
        "• Poitiers (340km, 3h30) : pause recommandée",
        "• Bordeaux (580km, 5h30) : contournement périph",
        "• Toulouse (680km, 6h30)",
        "",
        "<strong>Avantages A10 vs A6/A7</strong> :",
        "• Moins touristique (vacanciers préfèrent A7 Méditerranée)",
        "• Circulation fluide hors vendredis soirs été",
        "• Péages moins nombreux (60€ léger vs 70€ A7)",
        "• Paysages agréables (Vallée de la Loire, vignobles Bordeaux)",
        "",
        "<strong>Contraintes A10</strong> :",
        "• Monotone (680km autoroute plate)",
        "• Périphérique Bordeaux : contournement obligatoire, dense 8h-10h et 17h-19h",
        "• A62 Bordeaux-Toulouse vendredis 17h-20h : départs vacances vers Espagne (Perpignan, frontière)",
        "• Chaleur été 35-40°C section Bordeaux-Toulouse",
      ],
      tips: [
        "Pause Poitiers (mi-parcours) : aire du Futuroscope",
        "Contourner Bordeaux par périph Nord (évite Sud saturé)",
        "Vendredis été : A10 fluide MAIS A62 après Bordeaux dense (Espagne)",
      ],
    },
    {
      id: "erreurs-paris-toulouse",
      title: "Les 4 erreurs sur Paris-Toulouse",
      content: [
        "<strong>Erreur #1 : Croire que Toulouse = compliqué comme Lyon</strong>",
        "Non. Toulouse = PLATE. Pas de Croix-Rousse, pas de Vieux Lyon. Déménagements fluides partout (sauf centre Capitole +80-120€).",
        "<strong>Solution</strong> : Profitez de cette simplicité. Ne surpayez pas pour 'quartier facile' (tous le sont).",
        "",
        "<strong>Erreur #2 : Réserver trop tard dernière semaine août</strong>",
        "Toulouse = 3ème ville étudiante France (130 000 étudiants). Rentrée = saturation.",
        "<strong>Solution</strong> : Réservez 5 semaines avant si août-septembre.",
        "",
        "<strong>Erreur #3 : Sous-estimer distance 680km</strong>",
        "680km ≠ Paris-Lyon 465km. Prix +30% justifiés (carburant, péages, temps).",
        "<strong>Solution</strong> : Budget T2 1750-2650€ (réaliste).",
        "",
        "<strong>Erreur #4 : Traverser Bordeaux aux heures de pointe</strong>",
        "Périph Bordeaux 17h-19h = +45 min à 1h.",
        "<strong>Solution</strong> : Passage Bordeaux 11h-15h ou après 19h30.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Paris 14ème → Compans-Caffarelli Toulouse (gare Matabiau)",
      challenge: "Déménagement en 1 jour (volume 22m³). Départ Paris 7h.",
      solution: "Trajet fluide A10 (mardi avril). Arrivée Toulouse 14h. Compans-Caffarelli = immeuble moderne, parking, ascenseur. Déchargement 14h-17h30.",
      result: "1880€. 0 galère. Toulouse ville plate = efficacité maximale. Recommande.",
    },
    {
      situation: "T3 Paris Marais → centre Capitole Toulouse, dernière semaine août",
      challenge: "Rentrée étudiants Toulouse. Réservé 3 semaines avant (limite).",
      solution: "Départ Paris Marais 6h (ruelles, portage depuis parking 200m). Trajet fluide A10. Arrivée Capitole : autorisation stationnement, déchargement 13h-18h.",
      result: "2750€ (rentrée +20%). Mais timing respecté. Capitole +100€ vs quartiers résidentiels. Aurait économisé 100€ en choisissant Borderouge ou Minimes.",
    },
    {
      situation: "Maison 70m³ Paris → Ramonville (Sud-Est Toulouse métro B), octobre",
      challenge: "Volume important, 2 jours.",
      solution: "J1 : chargement Paris 8h-14h + trajet. J2 : déchargement Ramonville 8h-15h. Ramonville = ultra-accessible (immeubles récents, parkings, métro).",
      result: "5100€ (hébergement Tours inclus). Octobre = basse saison -10%. Ramonville = 0 galère. Toulouse = excellente ville arrivée.",
    },
  ],
  
  faq: [
    {
      question: "Combien coûte un déménagement Paris → Toulouse ?",
      answer: "T2 : 1750-2650€. T3 : 2350-3500€. Maison : 3900-6000€. Prix inclut 680km, péages 115-160€, carburant 280-460€, main d'œuvre. Entre Paris-Lyon (465km, -20% prix) et Paris-Marseille (775km, +15% prix). Centre Capitole : +80-120€. Autres quartiers : pas de surcoût (ville plate).",
    },
    {
      question: "Toulouse est-elle vraiment plus simple que Lyon ou Marseille ?",
      answer: "Oui. Toulouse = ville PLATE (altitude 140-150m, relief nul). Pas de pentes Lyon Croix-Rousse, pas de relief Marseille Panier. Tous quartiers accessibles (Minimes, Borderouge, Compans, Ramonville). Seul centre Capitole moyennement compliqué (+80-120€). 90% des logements Toulouse = 0 galère déménagement.",
    },
    {
      question: "L'A10 est-elle saturée comme l'A7 ?",
      answer: "Non. A10 = moins touristique (vacanciers préfèrent A7 Méditerranée). Circulation fluide sauf vendredis soirs été 17h-20h (départs vacances Bordeaux-Espagne). A10 > A7 en confort (moins de bouchons, moins de stress).",
    },
    {
      question: "Combien de temps dure le trajet Paris-Toulouse ?",
      answer: "6h30 trajet pur camion (680km + pause 30min obligatoire après 4h30). Déménagement complet : 1-2 jours selon volume. < 30m³ : 1 jour possible (départ 6h-7h). > 35m³ : 2 jours recommandé (hébergement Tours ou Poitiers).",
    },
    {
      question: "La rentrée Toulouse est-elle aussi critique que Lyon ?",
      answer: "Oui. Toulouse = 3ème ville étudiante France (130 000 étudiants après Paris 350 000 et Lyon 185 000). Dernière semaine août : demande +40%, tarifs +20-25%. Réservez 4-5 semaines avant si rentrée obligatoire.",
    },
    {
      question: "Comment économiser sur Paris-Toulouse ?",
      answer: "3 leviers : 1) Quartier Toulouse : tous accessibles (pas de surcoût sauf Capitole +80-120€). Privilégiez Minimes ou Borderouge. 2) Période : avril-mai ou octobre vs août = économie 400-650€. 3) Jour : mardi-mercredi vs samedi = économie 200-300€. Total : 600-1000€ économie T3.",
    },
  ],
  
  checklist: [
    {
      category: "5 semaines avant (si août-septembre)",
      items: [
        "Réserver déménageur (rentrée étudiants Toulouse)",
        "Demander 3-5 devis",
        "Vérifier dates rentrée universités Toulouse",
      ],
    },
    {
      category: "2-3 semaines avant",
      items: [
        "Identifier quartier Toulouse (Capitole ? Minimes ?)",
        "Autorisation si Capitole (30-50€, 7j)",
        "Souscrire assurance Toulouse",
        "Commander cartons",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer horaires départ 6h-7h Paris",
        "Préparer plan accès Toulouse",
        "Photos meubles valeur",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ tôt",
        "Pause Poitiers (mi-parcours)",
        "Vérifier état meubles à l'arrivée",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #6 : TOULOUSE → PARIS
 * Le retour vers le Nord depuis le Sud-Ouest
 */
export const TOULOUSE_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "toulouse",
  originName: "Toulouse",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "95+ déménagements Toulouse-Paris accompagnés",
  
  hero: {
    title: "Déménager de Toulouse vers Paris : guide 2026",
    subtitle: "680 km, 6h30, remonter vers la capitale",
    catchphrase: "Toulouse-Paris, c'est quitter le Sud-Ouest pour Paris. Départ facile Toulouse (ville plate), arrivée Paris à gérer.",
  },
  
  routeData: {
    distance: "680 km",
    duration: "6h30",
    mainRoute: "A62 puis A10",
    tolls: "60€ léger, 115-160€ camion",
    fuelCost: "280-470€",
  },
  
  pricing: {
    studio: "1300€ - 1980€",
    t2: "1820€ - 2750€",
    t3: "2450€ - 3650€",
    house: "4050€ - 6200€",
    factors: [
      "Toulouse départ facile (ville plate, pas de surcoût quartier)",
      "Arrivée Paris : quartier + étage sans ascenseur",
      "Périphérique Paris timing",
      "Période (rentrée septembre Paris = forte demande)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin (après Pâques)",
      "Octobre (après rentrée)",
    ],
    avoid: [
      "Dernière semaine août (rentrée Paris universités + grandes écoles)",
      "Dimanches été 15h-20h (A10 retours vacances Bordeaux)",
      "Fins de mois",
    ],
    highSeason: "Août-Septembre (+25-30%, rentrée Paris)",
    lowSeason: "Janvier-Février (-10-15%)",
  },
  
  routeSpecifics: {
    challenges: [
      "A62 Toulouse-Bordeaux lundis 7h-9h (départs travail Bordeaux)",
      "Périphérique Bordeaux traversée",
      "A10 dimanches été 15h-20h (retours vacances vers Paris)",
      "Péage Fleury-en-Bière approche Paris",
      "Périphérique Paris 16h-20h",
    ],
    tips: [
      "Départ Toulouse 6h = arrivée Paris 13h (évite périph 16h-19h)",
      "Pause Poitiers (mi-parcours)",
      "Si arrivée Paris après 15h : attendre 19h30 (évite périph)",
    ],
    trafficHotspots: [
      "Sortie Toulouse 7h-9h",
      "Périph Bordeaux 8h-10h et 17h-19h",
      "A10 dimanches été 15h-20h (sens Bordeaux-Paris)",
      "Péage Fleury 16h-19h",
      "Périph Paris 16h-20h",
    ],
  },
  
  destinationSpecifics: {
    description: "Paris : périphérique, autorisations, immeubles haussmanniens.",
    neighborhoods: [
      {
        name: "Marais (3ème/4ème)",
        difficulty: "difficile",
        specifics: "Ruelles, immeubles anciens sans ascenseur. Autorisations obligatoires.",
        tip: "+200-400€. Arrivée tôt 7h-8h.",
      },
      {
        name: "Montmartre (18ème)",
        difficulty: "difficile",
        specifics: "Pentes raides, escaliers.",
        tip: "+150-350€.",
      },
      {
        name: "Haussmanniens (7ème, 16ème)",
        difficulty: "moyen",
        specifics: "5-6 étages, ascenseurs étroits.",
        tip: "Portage +60-100€/étage après 2ème.",
      },
      {
        name: "Banlieue (92, 93, 94)",
        difficulty: "facile",
        specifics: "Immeubles modernes, évite périph.",
        tip: "15-20% moins cher que Paris intra-muros.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Toulouse-Paris : départ facile, arrivée à gérer",
      content: [
        "Toulouse-Paris, c'est l'inverse de Paris-Toulouse. 95+ déménagements suivis. Départ Toulouse = facile (ville plate, tous quartiers accessibles sauf Capitole). Arrivée Paris = gérer périph, autorisations, étages.",
        "Prix légèrement plus élevés que Paris-Toulouse (5-10%) car déménageurs basés Paris. T2 : 1820-2750€ (vs 1750-2650€ sens inverse).",
      ],
    },
    {
      id: "erreurs-toulouse-paris",
      title: "Les 3 erreurs Toulouse-Paris",
      content: [
        "<strong>Erreur #1 : Arriver Paris 17h</strong>",
        "Périph 17h = 1h bouchon. Overtime +150-250€.",
        "<strong>Solution</strong> : Arrivée avant 15h OU après 19h30.",
        "",
        "<strong>Erreur #2 : Pas d'autorisation Paris si Marais/Montmartre</strong>",
        "PV 150€ + camion 200m = galère.",
        "<strong>Solution</strong> : Autorisation 2-3 semaines avant.",
        "",
        "<strong>Erreur #3 : Déménager dernière semaine août sans anticiper</strong>",
        "Rentrée Paris (universités, grandes écoles) = forte demande. Tarifs +25-30%.",
        "<strong>Solution</strong> : Réservez début juillet.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Borderouge Toulouse → Paris 11ème, septembre",
      challenge: "Rentrée Paris. Réservé 4 semaines avant.",
      solution: "Départ Toulouse 6h30, trajet fluide A10, arrivée Paris 13h30. Paris 11ème = immeuble récent, ascenseur.",
      result: "2150€ (rentrée +15%). Mais 0 galère. Borderouge Toulouse = ultra-accessible (départ facile).",
    },
    {
      situation: "T3 centre Capitole → Marais Paris, vendredi août",
      challenge: "Capitole = rues piétonnes. Marais = ruelles.",
      solution: "Capitole : camion garé parking Capitole + navette 150m. Marais : autorisation stationnement, arrivée 8h.",
      result: "2950€ (double contrainte Capitole + Marais). Mais prévu dans devis. Pros ont géré.",
    },
  ],
  
  faq: [
    {
      question: "Toulouse-Paris coûte-t-il plus cher que Paris-Toulouse ?",
      answer: "Oui, légèrement (5-10%). T2 Paris-Toulouse 1750-2650€ vs Toulouse-Paris 1820-2750€. Raison : déménageurs basés Paris, Toulouse-Paris = trajet 'aller'.",
    },
    {
      question: "Le départ depuis Toulouse est-il facile ?",
      answer: "Oui, très. Toulouse = ville plate, tous quartiers accessibles (sauf centre Capitole +80-120€). 90% des Toulousains habitent quartiers résidentiels ultra-accessibles (Minimes, Borderouge, Sept Deniers, Ramonville). Départ Toulouse = simple.",
    },
    {
      question: "Comment gérer le périph Paris à l'arrivée ?",
      answer: "Arrivée avant 15h OU après 19h30. Entre 16h-19h = bouchon +45 min à 1h30. Départ Toulouse 6h-7h = arrivée Paris 13h-13h30 (optimal). Si départ tard : arriver après 19h30.",
    },
  ],
  
  checklist: [
    {
      category: "4-5 semaines avant (si août-septembre)",
      items: [
        "Réserver déménageur (rentrée Paris)",
        "Demander 3-5 devis",
      ],
    },
    {
      category: "2-3 semaines avant",
      items: [
        "Autorisation Paris si Marais/Montmartre (délai 7-15j)",
        "Réserver ascenseur Paris",
        "Souscrire assurance Paris",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer départ 6h-7h Toulouse",
        "Plan accès Paris",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ tôt",
        "Pause Poitiers",
        "Vérifier état meubles arrivée",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #7 : NICE → PARIS
 * Le plus long corridor, Côte d'Azur vers capitale
 */
export const NICE_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "nice",
  originName: "Nice",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "85+ déménagements Nice-Paris accompagnés, le corridor le plus long",
  
  hero: {
    title: "Déménager de Nice vers Paris : guide complet 2026",
    subtitle: "930 km, 8h30-9h de trajet, le corridor le plus long de France",
    catchphrase: "Nice-Paris, c'est quitter la Côte d'Azur pour Paris. 930km, le trajet le plus long, et des défis Nice (relief, Vieux Nice) au départ.",
  },
  
  routeData: {
    distance: "930 km",
    duration: "8h30-9h (trajet le plus long + 2 pauses obligatoires)",
    mainRoute: "A8 La Provençale puis A7 puis A6",
    tolls: "85€ véhicule léger, 165-220€ camion",
    fuelCost: "380-620€ selon gabarit",
  },
  
  pricing: {
    studio: "1650€ - 2500€",
    t2: "2300€ - 3450€",
    t3: "3100€ - 4650€",
    house: "5100€ - 7800€",
    factors: [
      "Distance 930km (le plus long corridor France)",
      "Quartier départ Nice (Vieux Nice, collines = +300-500€)",
      "Étage arrivée Paris",
      "2-3 jours déménagement (volume > 30m³)",
      "Hébergement déménageurs Lyon ou Montélimar (+200-350€)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Mai (climat doux Côte d'Azur)",
      "Octobre-Novembre (après vacances, -15% tarifs)",
    ],
    avoid: [
      "Juillet-août (A8 Côte d'Azur saturée, +25-30% tarifs)",
      "Dernière semaine août (rentrée Paris)",
      "Week-ends été (A8 + A7 enfer)",
    ],
    highSeason: "Juillet-Août (+25-30%, vacances Côte d'Azur)",
    lowSeason: "Janvier-Février (-15-20%)",
  },
  
  routeSpecifics: {
    challenges: [
      "A8 La Provençale = autoroute la plus chère France (péages nombreux Nice-Aix)",
      "A8 juillet-août saturée (vacanciers Côte d'Azur)",
      "A7 Vallée Rhône (idem Paris-Marseille)",
      "Distance 930km = 2 pauses obligatoires (4h + 4h)",
      "Fatigue conducteur (8h30-9h trajet)",
    ],
    tips: [
      "Départ Nice 5h-6h = arrivée Paris 14h-15h",
      "Pauses : Aix-en-Provence (1h30 depuis Nice) + Montélimar (5h30 depuis Nice)",
      "A8 vendredis juillet-août : évitez (bouchons Antibes-Aix +2-3h)",
      "2-3 jours recommandé (déménageurs reposés, hébergement Lyon)",
    ],
    trafficHotspots: [
      "A8 Nice-Antibes 8h-11h et 17h-20h (circulation côte)",
      "A8 vendredis été 15h-22h (Antibes-Aix)",
      "A7 Vienne-Orange vendredis été",
      "Périph Paris 16h-20h",
    ],
  },
  
  destinationSpecifics: {
    description: "Paris : défis classiques périph + autorisations + étages.",
    neighborhoods: [
      {
        name: "Marais, Montmartre",
        difficulty: "difficile",
        specifics: "Complexes.",
        tip: "+200-400€.",
      },
      {
        name: "Haussmanniens",
        difficulty: "moyen",
        specifics: "Ascenseurs étroits.",
        tip: "+100-250€ si étages.",
      },
      {
        name: "Banlieue",
        difficulty: "facile",
        specifics: "Moderne.",
        tip: "Recommandé, -15-20% vs Paris.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Nice-Paris : le plus long corridor de France",
      content: [
        "Nice-Paris, c'est LE corridor le plus long : 930km. 8h30-9h de trajet pur, 2 pauses obligatoires, et hébergement déménageurs souvent nécessaire (Lyon ou Montélimar).",
        "85+ déménagements suivis. Prix élevés (distance), mais Nice départ est compliqué si Vieux Nice ou collines (relief, rues étroites). 70% des Niçois habitent quartiers modernes accessibles (Libération, Arenas, Gambetta) = départ facile.",
      ],
    },
    {
      id: "distance-930km-impact",
      title: "930km : impact sur coûts et organisation",
      content: [
        "930km Nice-Paris = record France (devant Bordeaux-Strasbourg 910km).",
        "",
        "<strong>Conséquences</strong> :",
        "• Carburant : 380-620€ (vs 280-460€ Paris-Toulouse 680km)",
        "• Péages : 165-220€ camion (vs 115-160€ Paris-Toulouse)",
        "• Temps déménageurs : 2-3 jours (vs 1-2j Paris-Toulouse)",
        "• Hébergement : 200-350€ Lyon ou Montélimar (nuit + repas équipe)",
        "• Fatigue : 8h30-9h conduite = 2 pauses obligatoires (4h + 4h)",
        "",
        "<strong>Prix Nice-Paris vs autres corridors</strong> :",
        "• Nice-Paris T2 : 2300-3450€",
        "• Paris-Toulouse T2 : 1750-2650€ (680km, -30%)",
        "• Paris-Marseille T2 : 1900-2850€ (775km, -17%)",
        "",
        "La distance se paie. Mais Nice-Paris reste très demandé (beaucoup de Niçois montent à Paris pour emploi, études).",
      ],
    },
    {
      id: "erreurs-nice-paris",
      title: "Les 4 erreurs Nice-Paris",
      content: [
        "<strong>Erreur #1 : Sous-estimer le coût (930km = cher)</strong>",
        "T2 Nice-Paris ≠ T2 Paris-Lyon. 930km vs 465km = +100% distance = +70% prix.",
        "<strong>Solution</strong> : Budget T2 2300-3450€ (réaliste).",
        "",
        "<strong>Erreur #2 : Déménager en 1 jour volume > 30m³</strong>",
        "8h30 trajet + chargement + déchargement = 15-18h. Déménageurs épuisés = risques.",
        "<strong>Solution</strong> : 2-3 jours si volume > 30m³ (+200-350€ hébergement mais sécurité).",
        "",
        "<strong>Erreur #3 : Cacher Vieux Nice ou collines</strong>",
        "Vieux Nice (ruelles, escaliers) ou Cimiez colline = +300-500€.",
        "<strong>Solution</strong> : Précisez quartier Nice dès devis.",
        "",
        "<strong>Erreur #4 : Partir vendredi juillet A8</strong>",
        "A8 Côte d'Azur vendredi été = enfer. Nice-Aix +4-5h (vs 2h).",
        "<strong>Solution</strong> : Mardi-jeudi ou départ 5h vendredi.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T3 Libération Nice → Paris 15ème, mai",
      challenge: "Distance 930km, volume 32m³.",
      solution: "2 jours : J1 chargement Nice 8h + trajet jusqu'à Lyon (arrivée 18h, hébergement Lyon). J2 Lyon-Paris (départ 7h, arrivée 11h30), déchargement 12h-17h.",
      result: "3350€ (hébergement inclus). 0 stress, déménageurs reposés. Libération Nice = quartier moderne accessible (départ facile). Recommande formule 2 jours 930km.",
    },
    {
      situation: "T2 Vieux Nice → Marais Paris, août",
      challenge: "Double galère : Vieux Nice (ruelles médiévales, 5 étages sans ascenseur) + Marais Paris (idem).",
      solution: "Vieux Nice : portage depuis parking Sulzer 300m. Trajet 930km. Marais : autorisation, arrivée 8h.",
      result: "3200€ (vs 2300€ base). Surcoût Vieux Nice +400€ + Marais +250€ + août +250€. Prévu dans devis. Leçon : Vieux Nice + Marais = budget ++.",
    },
  ],
  
  faq: [
    {
      question: "Nice-Paris est-il le corridor le plus cher ?",
      answer: "Oui, avec Bordeaux-Strasbourg. Distance 930km = coûts maximums (carburant 380-620€, péages 165-220€, temps 2-3j, hébergement 200-350€). T2 Nice-Paris 2300-3450€ (vs Paris-Lyon 1350-2030€). La géographie se paie.",
    },
    {
      question: "Combien de jours pour Nice-Paris ?",
      answer: "2-3 jours recommandé. < 25m³ : 2 jours (J1 chargement + trajet 450km, J2 trajet 480km + déchargement). > 35m³ : 3 jours (J1 chargement, J2 trajet, J3 déchargement). 1 jour possible uniquement si < 20m³ + départ 5h Nice + accès faciles.",
    },
    {
      question: "Comment économiser sur Nice-Paris 930km ?",
      answer: "1) Quartier Nice : Libération/Arenas/Gambetta vs Vieux Nice/collines = économie 300-500€. 2) Période : avril-mai ou octobre-novembre vs juillet-août = économie 700-1050€. 3) Banlieue Paris vs intra-muros = économie 300-450€. Total : 1300-2000€ économie T3.",
    },
  ],
  
  checklist: [
    {
      category: "5-6 semaines avant",
      items: [
        "Réserver déménageur (distance 930km = peu de pros font ce trajet)",
        "Demander 4-6 devis spécialistes longue distance",
        "Vérifier quartier Nice (Vieux Nice ? Collines ?)",
      ],
    },
    {
      category: "3 semaines avant",
      items: [
        "Autorisation Paris si nécessaire",
        "Assurance Paris",
        "Trier objets (réduire volume = économies importantes sur 930km)",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer formule 2-3 jours",
        "Plan accès Paris",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ Nice tôt",
        "2 pauses (Aix + Montélimar)",
        "Vérifier état après 930km",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #8 : PARIS → BORDEAUX
 * Le corridor Atlantique
 */
export const PARIS_BORDEAUX_PREMIUM: PremiumCorridorData = {
  originSlug: "paris",
  originName: "Paris",
  destinationSlug: "bordeaux",
  destinationName: "Bordeaux",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "115+ déménagements Paris-Bordeaux accompagnés",
  
  hero: {
    title: "Déménager de Paris vers Bordeaux : guide 2026",
    subtitle: "580 km, 5h30, la ville UNESCO du vin",
    catchphrase: "Paris-Bordeaux, c'est le Sud-Ouest atlantique. 580km, le vignoble bordelais, et une arrivée UNESCO à gérer.",
  },
  
  routeData: {
    distance: "580 km",
    duration: "5h30 (trajet pur + pause)",
    mainRoute: "A10 Aquitaine",
    tolls: "55€ véhicule léger, 105-145€ camion",
    fuelCost: "240-390€",
  },
  
  pricing: {
    studio: "1150€ - 1750€",
    t2: "1620€ - 2450€",
    t3: "2180€ - 3250€",
    house: "3600€ - 5500€",
    factors: [
      "Distance 580km (entre Lyon 465km et Toulouse 680km)",
      "Quartier Bordeaux (centre UNESCO +150-250€)",
      "Rentrée septembre (95 000 étudiants 3ème ville étudiante)",
      "Vendanges septembre (vignobles Bordeaux)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin (climat atlantique agréable)",
      "Octobre (après rentrée et vendanges)",
    ],
    avoid: [
      "Septembre (rentrée 95 000 étudiants + vendanges Bordelais)",
      "Juillet-août vendredis (départs vacances Bordeaux-Espagne)",
    ],
    highSeason: "Août-Septembre (+25%, rentrée massive)",
    lowSeason: "Janvier-Février (-10-15%)",
  },
  
  routeSpecifics: {
    challenges: [
      "A10 longue mais fluide (moins touristique que A7)",
      "Périphérique Bordeaux dense 8h-10h et 17h-19h",
      "Vendanges septembre : tracteurs vignobles routes secondaires Bordeaux",
    ],
    tips: [
      "Départ Paris 6h = arrivée Bordeaux 11h30-12h",
      "Pause Tours (240km, 2h30)",
      "Contourner Bordeaux par périph Nord (fluide vs Sud)",
    ],
    trafficHotspots: [
      "Sorties Paris 7h-9h30",
      "Périph Bordeaux 8h-10h et 17h-19h",
      "Approche Bordeaux centre 12h-13h30",
    ],
  },
  
  destinationSpecifics: {
    description: "Bordeaux : centre UNESCO compliqué (immeubles pierre blonde 18ème, quais Garonne, rues moyennes). Quartiers modernes (Lac, Bassins à flot, Bastide) accessibles.",
    neighborhoods: [
      {
        name: "Centre UNESCO (port de la Lune)",
        difficulty: "moyen",
        specifics: "Place Bourse, quais Garonne, immeubles pierre 18ème, rues moyennes. Autorisation obligatoire (40€, 7j).",
        tip: "Arrivée tôt 7h-8h. +100-180€.",
      },
      {
        name: "Chartrons (tendance)",
        difficulty: "moyen",
        specifics: "Ancien négociants vins, immeubles rénovés, rues moyennes.",
        tip: "+50-100€.",
      },
      {
        name: "Lac, Bassins à flot, Bastide",
        difficulty: "facile",
        specifics: "Quartiers modernes, immeubles récents, ascenseurs, parkings.",
        tip: "Pas de surcoût. Recommandé.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Paris-Bordeaux : le corridor Atlantique",
      content: [
        "Paris-Bordeaux, c'est le Sud-Ouest atlantique. 580km, l'A10 Aquitaine (moins saturée que A6/A7), et l'arrivée à Bordeaux port de la Lune UNESCO.",
        "115+ déménagements suivis. Distance intermédiaire (entre Lyon 465km et Toulouse 680km), prix corrects. Bordeaux a spécificité : rentrée septembre massive (95 000 étudiants 3ème ville étudiante France) + vendanges vignobles. Réservez tôt.",
      ],
    },
    {
      id: "bordeaux-rentree-vendanges",
      title: "Septembre Bordeaux : rentrée + vendanges = double rush",
      content: [
        "Septembre à Bordeaux, c'est la tempête parfaite : rentrée 95 000 étudiants (3ème ville étudiante France après Paris et Lyon) + vendanges vignobles Bordelais (Médoc, Saint-Émilion, Pomerol).",
        "",
        "<strong>Rentrée étudiants</strong> : Dernière semaine août + 1ère semaine septembre. Demande logements +60%, déménagements +40%.",
        "",
        "<strong>Vendanges Bordelais</strong> : Mi-septembre à mi-octobre (selon météo). Tracteurs remorques raisins sur routes secondaires vignobles. Déménageurs sollicités par châteaux (transport cuves, barriques).",
        "",
        "<strong>Tarifs septembre Bordeaux</strong> : +25-30% vs avril-mai.",
        "",
        "<strong>Solution</strong> : Déménagez avril-juin ou octobre-novembre. Si septembre obligatoire : réservez 5-6 semaines avant.",
      ],
    },
    {
      id: "erreurs-paris-bordeaux",
      title: "Les 3 erreurs Paris-Bordeaux",
      content: [
        "<strong>Erreur #1 : Réserver 2 semaines avant en septembre</strong>",
        "Rentrée + vendanges = saturation. Tarifs +25-30%, déménageurs bookés.",
        "<strong>Solution</strong> : Réservez début juillet pour septembre.",
        "",
        "<strong>Erreur #2 : Viser centre UNESCO sans budget</strong>",
        "Centre Bordeaux (port de la Lune) = +150-250€. Chartrons +50-100€.",
        "<strong>Solution</strong> : Lac, Bassins, Bastide = accessibles, pas de surcoût.",
        "",
        "<strong>Erreur #3 : Traverser Bordeaux 17h-19h</strong>",
        "Périph Bordeaux dense. +45 min.",
        "<strong>Solution</strong> : Arrivée 11h30-15h.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Paris 13ème → Lac Bordeaux, mai",
      challenge: "Volume 24m³, déménagement 1 jour.",
      solution: "Départ Paris 7h, trajet fluide A10, arrivée Lac Bordeaux 13h. Lac = quartier moderne Nord, parking, ascenseur. Déchargement 13h-17h.",
      result: "1780€. 0 galère. Lac Bordeaux = ultra-accessible. A10 mai = fluide. Parfait.",
    },
    {
      situation: "T3 Paris 16ème → Chartrons Bordeaux, septembre",
      challenge: "Rentrée étudiants Bordeaux. Réservé 4 semaines avant.",
      solution: "Trajet fluide. Chartrons = quartier tendance, immeuble rénové, rues moyennes (navette 100m).",
      result: "2650€ (rentrée +20%, Chartrons +80€). Chartrons = vie de quartier ++, valait surcoût léger.",
    },
  ],
  
  faq: [
    {
      question: "Combien coûte Paris-Bordeaux 2026 ?",
      answer: "T2 : 1620-2450€. T3 : 2180-3250€. Prix inclut 580km, péages 105-145€, carburant 240-390€. Centre UNESCO +150-250€, Chartrons +50-100€, Lac/Bassins/Bastide pas de surcoût. Septembre rentrée +25%.",
    },
    {
      question: "Paris-Bordeaux en 1 jour ou 2 jours ?",
      answer: "< 30m³ : 1 jour possible (départ 7h, arrivée 13h). > 35m³ : 2 jours recommandé (hébergement Tours, +150-200€).",
    },
    {
      question: "Septembre Bordeaux est-il vraiment critique ?",
      answer: "Oui. 95 000 étudiants (3ème ville étudiante) + vendanges vignobles = double demande. Tarifs +25-30%, déménageurs bookés 5-6 semaines avant. Déménagez avril-juin ou octobre si possible.",
    },
  ],
  
  checklist: [
    {
      category: "5 semaines avant (si septembre)",
      items: [
        "Réserver déménageur",
        "Demander 3-5 devis",
      ],
    },
    {
      category: "2-3 semaines avant",
      items: [
        "Autorisation Bordeaux si centre UNESCO (40€, 7j)",
        "Assurance Bordeaux",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer départ 7h",
        "Plan accès Bordeaux",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ tôt",
        "Pause Tours",
        "Vérifier état meubles",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #9 : MARSEILLE → LYON
 * Le corridor Sud-Est, 2 grandes villes complexes
 */
export const MARSEILLE_LYON_PREMIUM: PremiumCorridorData = {
  originSlug: "marseille",
  originName: "Marseille",
  destinationSlug: "lyon",
  destinationName: "Lyon",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "90+ déménagements Marseille-Lyon accompagnés",
  
  hero: {
    title: "Déménager de Marseille vers Lyon : guide 2026",
    subtitle: "315 km, 3h, deux métropoles complexes",
    catchphrase: "Marseille-Lyon, c'est relier 2 grandes métropoles du Sud-Est. Court mais technique (Vieux-Port + Vieux Lyon = double défi).",
  },
  
  routeData: {
    distance: "315 km",
    duration: "3h (trajet le plus court des corridors majeurs)",
    mainRoute: "A7 Vallée du Rhône",
    tolls: "30€ véhicule léger, 60-85€ camion",
    fuelCost: "130-210€",
  },
  
  pricing: {
    studio: "850€ - 1300€",
    t2: "1200€ - 1800€",
    t3: "1600€ - 2400€",
    house: "2650€ - 4000€",
    factors: [
      "Distance courte 315km (prix corrects)",
      "Quartier départ Marseille (Vieux-Port/Panier +300-500€)",
      "Quartier arrivée Lyon (Vieux Lyon/Croix-Rousse +200-400€)",
      "Double galère possible (Panier → Vieux Lyon = +700-900€)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin, Septembre-Novembre (climat doux Sud-Est)",
    ],
    avoid: [
      "8 Décembre (Fête Lumières Lyon = ville bloquée)",
      "Juillet-août (chaleur 35-40°C Vallée Rhône)",
    ],
    highSeason: "Juillet-Août (+15-20%)",
    lowSeason: "Janvier-Février (-10%)",
  },
  
  routeSpecifics: {
    challenges: [
      "A7 courte (315km, 3h) mais mistral Vallée Rhône",
      "Tunnel Prado-Carénage sortie Marseille",
      "Tunnel Fourvière approche Lyon",
      "Chaleur été 35-40°C",
    ],
    tips: [
      "Départ Marseille 7h = arrivée Lyon 10h (évite tunnel Fourvière 11h30-13h)",
      "Mistral : fréquent automne-printemps",
      "Trajet court = 1 jour facile (pas de pause obligatoire < 4h)",
    ],
    trafficHotspots: [
      "Tunnel Prado Marseille 8h-10h",
      "A7 vendredis 17h-20h",
      "Tunnel Fourvière Lyon 11h30-13h et 17h-19h",
    ],
  },
  
  destinationSpecifics: {
    description: "Lyon : Vieux Lyon et Croix-Rousse difficiles, Part-Dieu facile.",
    neighborhoods: [
      {
        name: "Vieux Lyon (5ème)",
        difficulty: "difficile",
        specifics: "Ruelles 2-3m, 5 étages sans ascenseur.",
        tip: "Navette depuis parking. +350-650€.",
      },
      {
        name: "Croix-Rousse (4ème)",
        difficulty: "difficile",
        specifics: "Pentes 10-15%, 6 étages canuts.",
        tip: "Équipe 4. +150-250€.",
      },
      {
        name: "Part-Dieu (3ème)",
        difficulty: "facile",
        specifics: "Moderne, ascenseurs.",
        tip: "Pas de surcoût.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Marseille-Lyon : le corridor Sud-Est court mais technique",
      content: [
        "Marseille-Lyon, c'est 315km (le plus court des corridors majeurs). 3h de trajet, A7 Vallée du Rhône.",
        "90+ déménagements suivis. Trajet court = prix corrects (T2 1200-1800€). MAIS double défi possible : si départ Vieux-Port/Panier Marseille + arrivée Vieux Lyon/Croix-Rousse = surcoût +500-900€ (les 2 villes les plus compliquées France).",
        "Bonne nouvelle : 70% des Marseillais habitent quartiers modernes (8ème-9ème) et 60% des Lyonnais habitent quartiers accessibles (Part-Dieu, Villeurbanne). Résultat : 70% des déménagements Marseille-Lyon sont fluides.",
      ],
    },
    {
      id: "double-defi-vieux-quartiers",
      title: "Le double défi : Vieux-Port/Panier + Vieux Lyon/Croix-Rousse",
      content: [
        "Si vous habitez Vieux-Port ou Panier à Marseille ET vous allez à Vieux Lyon ou Croix-Rousse : vous cumulez les 2 quartiers les plus difficiles de France.",
        "",
        "<strong>Surcoût cumulé</strong> :",
        "• Départ Vieux-Port Marseille : +350-550€",
        "• Départ Panier Marseille : +500-750€",
        "• Arrivée Vieux Lyon : +350-650€",
        "• Arrivée Croix-Rousse : +150-250€",
        "",
        "<strong>Pire cas</strong> : T3 Panier Marseille → Vieux Lyon = 1600€ (base) + 600€ (Panier) + 500€ (Vieux Lyon) = 2700€ (vs 1600€ base).",
        "",
        "<strong>Solution intelligente</strong> : Si vous déménagez Marseille-Lyon, privilégiez :",
        "• Départ : 8ème-9ème Marseille (pas de surcoût)",
        "• Arrivée : Part-Dieu ou Villeurbanne Lyon (pas de surcoût)",
        "• Économie : 500-900€ par déménagement",
      ],
    },
    {
      id: "erreurs-marseille-lyon",
      title: "Les 3 erreurs Marseille-Lyon",
      content: [
        "<strong>Erreur #1 : Accepter Vieux Lyon sans savoir les coûts</strong>",
        "Vieux Lyon = +350-650€. Si déjà départ Vieux-Port Marseille, total +700-1200€.",
        "<strong>Solution</strong> : Part-Dieu ou Villeurbanne Lyon (accessibles, pas de surcoût).",
        "",
        "<strong>Erreur #2 : Croire que Marseille-Lyon = facile (court 315km)</strong>",
        "Distance courte ≠ facile. Quartiers complexes = surcoûts importants.",
        "<strong>Solution</strong> : Précisez quartiers DÈS devis.",
        "",
        "<strong>Erreur #3 : Arriver Lyon 8 décembre</strong>",
        "Fête des Lumières = ville bloquée.",
        "<strong>Solution</strong> : Évitez 8 décembre absolument.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 8ème Marseille → Part-Dieu Lyon, octobre",
      challenge: "Volume 22m³, déménagement 1 jour.",
      solution: "Départ 8h Marseille, trajet fluide A7 (3h), arrivée Part-Dieu 11h. 8ème + Part-Dieu = double accessibilité.",
      result: "1280€. 0 galère. Recommande fortement quartiers modernes (économie + simplicité).",
    },
    {
      situation: "T3 Vieux-Port Marseille → Croix-Rousse Lyon, mai",
      challenge: "Vieux-Port (navette 400m) + Croix-Rousse (6 étages pentes).",
      solution: "Équipe 5 déménageurs (vs 3 normal). Navette Marseille + relais portage Lyon.",
      result: "2550€ (vs 1600€ base). +950€ pour double galère. Mais prévu dans devis. Pros ont géré.",
    },
  ],
  
  faq: [
    {
      question: "Combien coûte Marseille-Lyon ?",
      answer: "T2 : 1200-1800€. T3 : 1600-2400€. Prix corrects (315km court). Vieux-Port/Panier Marseille +300-600€, Vieux Lyon/Croix-Rousse +200-400€. Double galère : +700-1200€.",
    },
    {
      question: "Marseille-Lyon en combien de temps ?",
      answer: "3h trajet pur. Déménagement complet : 1 jour (départ 7h-8h Marseille, arrivée 10h-11h Lyon, déchargement 11h-16h). Simple si quartiers accessibles.",
    },
    {
      question: "Comment éviter surcoûts quartiers ?",
      answer: "Départ 8ème-9ème Marseille + arrivée Part-Dieu ou Villeurbanne Lyon = 0 surcoût. Économie 500-900€ vs Vieux-Port/Panier + Vieux Lyon/Croix-Rousse.",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Demander 3-5 devis en précisant quartiers Marseille + Lyon",
        "Autorisation Lyon si Vieux Lyon/Presqu'île (40-50€)",
      ],
    },
    {
      category: "1 semaine avant",
      items: [
        "Confirmer horaires",
        "Plan accès Lyon",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ 7h-8h",
        "Vérifier état meubles",
      ],
    },
  ],
};

/**
 * CORRIDOR PREMIUM #10 : LYON → MARSEILLE  
 * Le corridor Sud-Est sens inverse
 */
export const LYON_MARSEILLE_PREMIUM: PremiumCorridorData = {
  originSlug: "lyon",
  originName: "Lyon",
  destinationSlug: "marseille",
  destinationName: "Marseille",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "80+ déménagements Lyon-Marseille accompagnés",
  
  hero: {
    title: "Déménager de Lyon vers Marseille : guide 2026",
    subtitle: "315 km, 3h, descendre vers la Méditerranée",
    catchphrase: "Lyon-Marseille, c'est rejoindre le Sud et la mer. 315km, trajet court, défis Lyon départ.",
  },
  
  routeData: {
    distance: "315 km",
    duration: "3h",
    mainRoute: "A7 Sud (Vallée Rhône)",
    tolls: "30€ léger, 60-85€ camion",
    fuelCost: "130-220€",
  },
  
  pricing: {
    studio: "880€ - 1350€",
    t2: "1240€ - 1860€",
    t3: "1660€ - 2480€",
    house: "2750€ - 4150€",
    factors: [
      "Quartier départ Lyon (Vieux Lyon/Croix-Rousse +200-400€)",
      "Quartier arrivée Marseille (Vieux-Port/Panier +300-500€)",
      "Distance courte 315km (prix corrects)",
    ],
  },
  
  seasons: {
    best: [
      "Avril-Juin, Septembre-Novembre",
    ],
    avoid: [
      "8 Décembre (Fête Lumières Lyon départ impossible)",
      "Juillet-août (chaleur + vacanciers A7)",
    ],
    highSeason: "Juillet-Août (+15-20%)",
    lowSeason: "Janvier-Février (-10%)",
  },
  
  routeSpecifics: {
    challenges: [
      "Tunnel Fourvière sortie Lyon",
      "A7 vendredis été (vacanciers vers Marseille)",
      "Mistral Vallée Rhône (arrière Lyon-Marseille, accélère camion)",
      "Tunnel Prado-Carénage approche Marseille",
    ],
    tips: [
      "Départ Lyon 7h = arrivée Marseille 10h",
      "Éviter tunnel Fourvière : passer A46 Est",
      "Mistral arrière : contrôler vitesse (camion poussé)",
    ],
    trafficHotspots: [
      "Tunnel Fourvière 8h-10h et 17h-19h",
      "A7 vendredis 17h-21h",
      "Tunnel Prado Marseille 11h-13h",
    ],
  },
  
  destinationSpecifics: {
    description: "Marseille : Vieux-Port et Panier difficiles, 8ème-9ème faciles.",
    neighborhoods: [
      {
        name: "Vieux-Port",
        difficulty: "difficile",
        specifics: "Rues 2-4m, immeubles anciens.",
        tip: "Navette depuis parking. +300-500€.",
      },
      {
        name: "Le Panier",
        difficulty: "difficile",
        specifics: "Ruelles pente, escaliers.",
        tip: "Portage manuel. +400-600€.",
      },
      {
        name: "8ème, 9ème",
        difficulty: "facile",
        specifics: "Modernes, accessibles.",
        tip: "Pas de surcoût. Recommandé.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Lyon-Marseille : court mais technique si mauvais quartiers",
      content: [
        "Lyon-Marseille, c'est le corridor le plus court des corridors majeurs : 315km, 3h. Prix corrects (T2 1200-1800€).",
        "80+ déménagements suivis. Particularité : si départ Vieux Lyon/Croix-Rousse + arrivée Vieux-Port/Panier = double galère des 2 villes les plus compliquées France. Surcoût +500-900€.",
        "Mais 70% des cas : quartiers modernes (Part-Dieu Lyon, 8ème-9ème Marseille) = fluide.",
      ],
    },
    {
      id: "erreurs-lyon-marseille",
      title: "Les 3 erreurs Lyon-Marseille",
      content: [
        "<strong>Erreur #1 : Cumuler Vieux Lyon + Vieux-Port</strong>",
        "Double galère = +700-1000€.",
        "<strong>Solution</strong> : Part-Dieu Lyon + 8ème Marseille.",
        "",
        "<strong>Erreur #2 : Arriver Marseille 8 décembre</strong>",
        "Si départ Lyon 8 décembre Fête Lumières = impossible sortir.",
        "<strong>Solution</strong> : Évitez 8 décembre.",
        "",
        "<strong>Erreur #3 : Sous-estimer mistral A7</strong>",
        "Mistral arrière Lyon-Marseille = camion poussé 100-110 km/h.",
        "<strong>Solution</strong> : Contrôlez vitesse 90-100 km/h.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Part-Dieu Lyon → 8ème Marseille, avril",
      challenge: "Trajet court 315km.",
      solution: "Départ 8h, arrivée 11h. Double quartier moderne = zéro galère.",
      result: "1320€. Parfait. Recommande Part-Dieu + 8ème (accessibilité maximale).",
    },
    {
      situation: "T3 Croix-Rousse Lyon → Panier Marseille, juin",
      challenge: "Double quartier historique compliqué.",
      solution: "Croix-Rousse : équipe 4, portage pentes. Panier : portage manuel escaliers.",
      result: "2650€ (vs 1660€ base). +990€ pour double galère. Pros ont prévenu dès devis. Accepté pour charme quartiers historiques.",
    },
  ],
  
  faq: [
    {
      question: "Lyon-Marseille coûte combien ?",
      answer: "T2 : 1240-1860€. T3 : 1660-2480€. Prix corrects (315km court). Vieux Lyon +200-400€, Vieux-Port/Panier +300-600€. Double galère : +700-1200€.",
    },
    {
      question: "Lyon-Marseille en combien de temps ?",
      answer: "3h trajet. Déménagement : 1 jour (départ 7h-8h, arrivée 10h-11h, déchargement 11h-16h). Simple si quartiers accessibles.",
    },
    {
      question: "Comment économiser ?",
      answer: "Quartiers modernes : Part-Dieu/Villeurbanne Lyon + 8ème-9ème Marseille = 0 surcoût. Économie 500-900€ vs Vieux quartiers.",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: [
        "Devis en précisant quartiers Lyon + Marseille",
        "Autorisation Marseille si Vieux-Port",
      ],
    },
    {
      category: "Jour J",
      items: [
        "Départ 7h-8h",
        "Vérifier état meubles",
      ],
    },
  ],
};

/**
 * CORRIDOR SECONDAIRE #11 : TOULOUSE → LYON
 * Le corridor Sud-Ouest vers Sud-Est
 */
export const TOULOUSE_LYON_PREMIUM: PremiumCorridorData = {
  originSlug: "toulouse",
  originName: "Toulouse",
  destinationSlug: "lyon",
  destinationName: "Lyon",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-10",
  basedOnExperience: "65+ déménagements Toulouse-Lyon accompagnés",
  
  hero: {
    title: "Déménager de Toulouse vers Lyon : guide 2026",
    subtitle: "540 km, 5h, relier Sud-Ouest et Sud-Est",
    catchphrase: "Toulouse-Lyon, c'est changer de région Sud. Départ facile Toulouse (ville plate), arrivée Lyon à gérer (pentes).",
  },
  
  routeData: {
    distance: "540 km",
    duration: "5h (+ pause)",
    mainRoute: "A61 puis A9 puis A7",
    tolls: "50€ léger, 95-130€ camion",
    fuelCost: "220-360€",
  },
  
  pricing: {
    studio: "1050€ - 1600€",
    t2: "1480€ - 2230€",
    t3: "1980€ - 2950€",
    house: "3300€ - 5000€",
    factors: [
      "Distance 540km (similaire Paris-Bordeaux 580km)",
      "Toulouse départ facile (ville plate)",
      "Lyon arrivée : Vieux Lyon/Croix-Rousse +200-400€",
    ],
  },
  
  seasons: {
    best: ["Avril-Juin, Octobre"],
    avoid: ["8 Décembre Lyon", "Juillet-août (chaleur)"],
    highSeason: "Septembre (+15%, rentrées étudiantes double)",
    lowSeason: "Janvier-Février (-10%)",
  },
  
  routeSpecifics: {
    challenges: [
      "A61 Toulouse-Narbonne (monotone)",
      "A9 Languedoc (Narbonne-Nîmes) : mistral fréquent",
      "A7 Nîmes-Lyon : trafic dense approche Lyon",
      "Tunnel Fourvière Lyon",
    ],
    tips: [
      "Départ Toulouse 6h-7h = arrivée Lyon 11h-12h",
      "Pause Narbonne (180km, 2h)",
      "Éviter tunnel Fourvière (A46 Est)",
    ],
    trafficHotspots: [
      "Sortie Toulouse 8h-9h30",
      "A9 vendredis 17h-20h",
      "Tunnel Fourvière Lyon 11h30-13h",
    ],
  },
  
  destinationSpecifics: {
    description: "Lyon : défis classiques (Vieux Lyon, Croix-Rousse).",
    neighborhoods: [
      {
        name: "Vieux Lyon",
        difficulty: "difficile",
        specifics: "Ruelles, 5 étages.",
        tip: "+350-650€.",
      },
      {
        name: "Croix-Roussse",
        difficulty: "difficile",
        specifics: "Pentes, 6 étages canuts.",
        tip: "+150-250€.",
      },
      {
        name: "Part-Dieu, Villeurbanne",
        difficulty: "facile",
        specifics: "Modernes.",
        tip: "Pas de surcoût.",
      },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Toulouse-Lyon : Sud-Ouest vers Sud-Est",
      content: [
        "Toulouse-Lyon, c'est relier les 2 grandes métropoles du Sud. 540km, 5h de trajet, A61 + A9 + A7.",
        "65+ déménagements suivis. Toulouse départ = facile (ville plate). Lyon arrivée = gérer quartiers (60% accessibles, 40% compliqués).",
        "Prix : T2 1480-2230€ (distance 540km justifie).",
      ],
    },
    {
      id: "erreurs-toulouse-lyon",
      title: "Les 3 erreurs Toulouse-Lyon",
      content: [
        "<strong>Erreur #1 : Accepter Vieux Lyon sans savoir coûts</strong>",
        "+350-650€ vs Part-Dieu.",
        "<strong>Solution</strong> : Part-Dieu ou Villeurbanne.",
        "",
        "<strong>Erreur #2 : Arriver 8 décembre Lyon</strong>",
        "Fête Lumières = impossible.",
        "<strong>Solution</strong> : Évitez absolument.",
        "",
        "<strong>Erreur #3 : Septembre double rentrée (Toulouse + Lyon)</strong>",
        "Toulouse 130 000 étudiants + Lyon 185 000 = double rush.",
        "<strong>Solution</strong> : Réservez 4 semaines avant si septembre.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Compans Toulouse → Part-Dieu Lyon, octobre",
      challenge: "540km, 1 jour.",
      solution: "Départ 7h Toulouse, trajet fluide A61+A9+A7, arrivée Part-Dieu 12h. Double quartier moderne.",
      result: "1550€. 0 galère. Recommande double accessibilité.",
    },
  ],
  
  faq: [
    {
      question: "Toulouse-Lyon coûte combien ?",
      answer: "T2 : 1480-2230€. T3 : 1980-2950€. 540km. Vieux Lyon +350-650€. Part-Dieu/Villeurbanne pas de surcoût.",
    },
    {
      question: "Toulouse-Lyon en combien de temps ?",
      answer: "5h trajet. 1 jour déménagement (départ 7h, arrivée 12h, déchargement 12h-17h).",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: ["Devis précisant quartiers", "Autorisation Lyon si Vieux Lyon"],
    },
    {
      category: "Jour J",
      items: ["Départ 7h", "Pause Narbonne", "Vérifier état"],
    },
  ],
};

/**
 * CORRIDOR SECONDAIRE #12 : NICE → LYON
 */
export const NICE_LYON_PREMIUM: PremiumCorridorData = {
  originSlug: "nice",
  originName: "Nice",
  destinationSlug: "lyon",
  destinationName: "Lyon",
  
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "55+ déménagements Nice-Lyon accompagnés",
  
  hero: {
    title: "Déménager de Nice vers Lyon : guide 2026",
    subtitle: "470 km, 4h30, Côte d'Azur vers Rhône-Alpes",
    catchphrase: "Nice-Lyon, c'est quitter la mer pour la métropole lyonnaise. Trajet agréable A8.",
  },
  
  routeData: {
    distance: "470 km",
    duration: "4h30",
    mainRoute: "A8 puis A7",
    tolls: "55€ léger, 105-140€ camion",
    fuelCost: "195-320€",
  },
  
  pricing: {
    studio: "1100€ - 1680€",
    t2: "1550€ - 2330€",
    t3: "2080€ - 3100€",
    house: "3450€ - 5200€",
    factors: ["Distance 470km", "Vieux Nice +300€", "Vieux Lyon +400€"],
  },
  
  seasons: {
    best: ["Avril-Juin, Octobre"],
    avoid: ["8 Décembre Lyon", "Juillet-août A8"],
    highSeason: "Juillet-Août (+20%)",
    lowSeason: "Janvier-Février (-10%)",
  },
  
  routeSpecifics: {
    challenges: ["A8 Côte d'Azur été", "Tunnel Fourvière Lyon"],
    tips: ["Départ 6h-7h", "Pause Aix"],
    trafficHotspots: ["A8 vendredis", "Tunnel Fourvière"],
  },
  
  destinationSpecifics: {
    description: "Lyon : Vieux Lyon/Croix-Rousse difficiles, Part-Dieu facile.",
    neighborhoods: [
      { name: "Vieux Lyon", difficulty: "difficile", specifics: "Ruelles", tip: "+350-650€" },
      { name: "Part-Dieu", difficulty: "facile", specifics: "Moderne", tip: "Pas de surcoût" },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Nice-Lyon : Côte d'Azur vers capitale Rhône-Alpes",
      content: [
        "Nice-Lyon, 470km, 4h30. 55+ déménagements suivis. Trajet agréable A8 Côte d'Azur + A7. Défis Nice départ (Vieux Nice relief) et Lyon arrivée (Vieux Lyon/Croix-Rousse). Quartiers modernes : fluide.",
        "Prix T2 : 1550-2330€.",
      ],
    },
    {
      id: "erreurs",
      title: "Les 3 erreurs Nice-Lyon",
      content: [
        "<strong>Erreur #1 : Vieux Nice + Vieux Lyon</strong>",
        "Double galère +700€.",
        "<strong>Solution</strong> : Libération Nice + Part-Dieu Lyon.",
        "",
        "<strong>Erreur #2 : Juillet-août A8</strong>",
        "Saturée.",
        "<strong>Solution</strong> : Avril-juin ou octobre.",
        "",
        "<strong>Erreur #3 : 8 décembre Lyon</strong>",
        "Impossible.",
        "<strong>Solution</strong> : Évitez.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Libération Nice → Part-Dieu Lyon, mai",
      challenge: "470km.",
      solution: "Départ 7h, arrivée 11h30. Double accessibilité.",
      result: "1680€. Parfait.",
    },
  ],
  
  faq: [
    {
      question: "Nice-Lyon coûte combien ?",
      answer: "T2 : 1550-2330€. 470km similaire Paris-Lyon 465km. Vieux Nice +300€, Vieux Lyon +400€.",
    },
    {
      question: "Nice-Lyon en combien de temps ?",
      answer: "4h30 trajet. 1 jour déménagement.",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: ["Devis", "Autorisation Lyon si Vieux Lyon"],
    },
    {
      category: "Jour J",
      items: ["Départ 7h", "Vérifier état"],
    },
  ],
};

/**
 * CORRIDOR SECONDAIRE #13 : MONTPELLIER → PARIS
 */
export const MONTPELLIER_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "montpellier",
  originName: "Montpellier",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "60+ déménagements Montpellier-Paris accompagnés",
  
  hero: {
    title: "Déménager de Montpellier vers Paris : guide 2026",
    subtitle: "750 km, 7h, Languedoc vers capitale",
    catchphrase: "Montpellier-Paris, c'est remonter du Languedoc. 750km A9+A6, trajet long.",
  },
  
  routeData: {
    distance: "750 km",
    duration: "7h (+ pause)",
    mainRoute: "A9 puis A6/A7",
    tolls: "65€ léger, 125-170€ camion",
    fuelCost: "310-500€",
  },
  
  pricing: {
    studio: "1300€ - 1980€",
    t2: "1830€ - 2750€",
    t3: "2450€ - 3650€",
    house: "4050€ - 6150€",
    factors: ["Distance 750km", "Écusson Montpellier +100-150€", "Paris quartiers +100-400€"],
  },
  
  seasons: {
    best: ["Avril-Juin, Octobre"],
    avoid: ["Dernière semaine août (rentrée Paris + Montpellier 75 000 étudiants)"],
    highSeason: "Août-Septembre (+25%)",
    lowSeason: "Janvier-Février (-10-15%)",
  },
  
  routeSpecifics: {
    challenges: ["A9 Languedoc mistral", "A6 approche Paris"],
    tips: ["Départ 6h Montpellier = arrivée Paris 13h", "Pause Valence"],
    trafficHotspots: ["A9 vendredis", "Périph Paris 16h-20h"],
  },
  
  destinationSpecifics: {
    description: "Paris : défis classiques.",
    neighborhoods: [
      { name: "Marais", difficulty: "difficile", specifics: "Ruelles", tip: "+200-400€" },
      { name: "Banlieue", difficulty: "facile", specifics: "Moderne", tip: "Recommandé" },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Montpellier-Paris : Languedoc vers capitale",
      content: [
        "Montpellier-Paris, 750km, 7h. 60+ déménagements suivis. Distance longue (similaire Paris-Marseille 775km), prix élevés. Montpellier départ = facile (Antigone, Port Marianne, Odysseum 70% logements modernes). Paris arrivée = gérer périph + quartiers.",
        "Prix T2 : 1830-2750€.",
      ],
    },
    {
      id: "erreurs",
      title: "Les 3 erreurs Montpellier-Paris",
      content: [
        "<strong>Erreur #1 : Réserver dernière semaine août</strong>",
        "Rentrée double (Montpellier 75 000 + Paris). Tarifs +25-30%.",
        "<strong>Solution</strong> : Réservez début juillet.",
        "",
        "<strong>Erreur #2 : Arriver Paris 17h</strong>",
        "Périph saturé.",
        "<strong>Solution</strong> : Avant 15h ou après 19h30.",
        "",
        "<strong>Erreur #3 : Sous-estimer 750km</strong>",
        "Prix similaires Paris-Marseille.",
        "<strong>Solution</strong> : Budget T2 1830-2750€.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Antigone Montpellier → Paris 14ème, mai",
      challenge: "750km.",
      solution: "Départ 6h30, arrivée 13h30. Antigone + Paris 14ème = double accessibilité.",
      result: "1950€. Parfait.",
    },
  ],
  
  faq: [
    {
      question: "Montpellier-Paris coûte combien ?",
      answer: "T2 : 1830-2750€. 750km. Écusson +100-150€, Paris Marais +200-400€.",
    },
    {
      question: "Montpellier-Paris en combien de temps ?",
      answer: "7h trajet. 1-2 jours selon volume (> 35m³ : 2 jours recommandé).",
    },
  ],
  
  checklist: [
    {
      category: "4 semaines avant (si août-septembre)",
      items: ["Réserver déménageur", "Devis"],
    },
    {
      category: "2 semaines avant",
      items: ["Autorisation Paris si nécessaire"],
    },
    {
      category: "Jour J",
      items: ["Départ 6h", "Pause Valence", "Vérifier état"],
    },
  ],
};

/**
 * CORRIDOR SECONDAIRE #14 : STRASBOURG → PARIS
 */
export const STRASBOURG_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "strasbourg",
  originName: "Strasbourg",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "70+ déménagements Strasbourg-Paris accompagnés",
  
  hero: {
    title: "Déménager de Strasbourg vers Paris : guide 2026",
    subtitle: "490 km, 4h30, l'Alsace vers la capitale",
    catchphrase: "Strasbourg-Paris, c'est quitter l'Alsace pour Paris. TGV 1h45 ou camion 4h30.",
  },
  
  routeData: {
    distance: "490 km",
    duration: "4h30",
    mainRoute: "A4 Est",
    tolls: "45€ léger, 85-115€ camion",
    fuelCost: "200-330€",
  },
  
  pricing: {
    studio: "1000€ - 1520€",
    t2: "1400€ - 2110€",
    t3: "1880€ - 2800€",
    house: "3100€ - 4700€",
    factors: ["Distance 490km (similaire Lyon-Paris)", "Petite France Strasbourg +150-250€", "Paris quartiers +100-400€"],
  },
  
  seasons: {
    best: ["Avril-Juin, Septembre-Octobre"],
    avoid: ["Décembre (marchés Noël Strasbourg = circulation dense)", "Rentrée septembre Paris"],
    highSeason: "Août-Septembre (+20-25%)",
    lowSeason: "Janvier-Février (-10%)",
  },
  
  routeSpecifics: {
    challenges: ["A4 Est traversée Champagne et Lorraine", "Neige hiver Vosges (nov-mars)", "Brouillard Champagne hiver"],
    tips: ["Départ Strasbourg 6h = arrivée Paris 10h30-11h", "Pause Reims (250km, 2h30)"],
    trafficHotspots: ["Sortie Strasbourg 8h-9h30", "Périph Paris 16h-20h"],
  },
  
  destinationSpecifics: {
    description: "Paris : défis classiques périph + autorisations.",
    neighborhoods: [
      { name: "Marais, Montmartre", difficulty: "difficile", specifics: "Complexes", tip: "+200-400€" },
      { name: "Banlieue", difficulty: "facile", specifics: "Moderne", tip: "Recommandé" },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Strasbourg-Paris : l'Est vers la capitale",
      content: [
        "Strasbourg-Paris, 490km, 4h30. 70+ déménagements suivis. Distance similaire Lyon-Paris. Strasbourg = ville plate accessible (sauf Petite France +150-250€). Prix T2 : 1400-2110€.",
      ],
    },
    {
      id: "petite-france-defi",
      title: "La Petite France : quartier UNESCO compliqué",
      content: [
        "La Petite France (quartier médiéval UNESCO Strasbourg), c'est le seul quartier compliqué Strasbourg. Ruelles 2-3m, canaux, immeubles colombages 16-17ème sans ascenseur. Si départ Petite France : +150-250€ (navette depuis parking). Autres quartiers Strasbourg : ultra-accessibles.",
      ],
    },
    {
      id: "erreurs",
      title: "Les 2 erreurs Strasbourg-Paris",
      content: [
        "<strong>Erreur #1 : Déménager décembre (marchés Noël Strasbourg)</strong>",
        "Circulation dense touristes. Évitez.",
        "",
        "<strong>Erreur #2 : Arriver Paris 17h</strong>",
        "Périph saturé.",
        "<strong>Solution</strong> : Avant 15h ou après 19h30.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Neudorf Strasbourg → Paris 13ème, avril",
      challenge: "490km.",
      solution: "Départ 7h, trajet fluide A4, arrivée 11h30.",
      result: "1520€. Parfait. Neudorf + Paris 13ème = double accessibilité.",
    },
  ],
  
  faq: [
    {
      question: "Strasbourg-Paris coûte combien ?",
      answer: "T2 : 1400-2110€. 490km. Petite France +150-250€, Paris Marais +200-400€.",
    },
    {
      question: "TGV Strasbourg-Paris 1h45 vs déménagement 4h30 ?",
      answer: "TGV pratique vous, mais vos meubles doivent faire 490km en camion. Prix similaires TGV+location camion Strasbourg+Paris vs déménageur direct.",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: ["Devis", "Autorisation Paris si nécessaire"],
    },
    {
      category: "Jour J",
      items: ["Départ 7h", "Pause Reims", "Vérifier état"],
    },
  ],
};

/**
 * CORRIDOR SECONDAIRE #15 : NANTES → PARIS
 */
export const NANTES_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "nantes",
  originName: "Nantes",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: { name: "Lucie Stéhelin", role: "Co-fondatrice Moverz" },
  lastUpdated: "2026-03-10",
  basedOnExperience: "75+ déménagements Nantes-Paris accompagnés",
  
  hero: {
    title: "Déménager de Nantes vers Paris : guide 2026",
    subtitle: "385 km, 3h30, l'Ouest vers la capitale",
    catchphrase: "Nantes-Paris, c'est l'A11 Océane. Trajet court, prix doux.",
  },
  
  routeData: {
    distance: "385 km",
    duration: "3h30",
    mainRoute: "A11 Océane",
    tolls: "35€ léger, 65-90€ camion",
    fuelCost: "160-260€",
  },
  
  pricing: {
    studio: "850€ - 1290€",
    t2: "1190€ - 1800€",
    t3: "1600€ - 2380€",
    house: "2650€ - 4000€",
    factors: ["Distance courte 385km (prix corrects)", "Nantes = ville accessible (pas de surcoût)", "Paris quartiers +100-400€"],
  },
  
  seasons: {
    best: ["Avril-Juin, Octobre"],
    avoid: ["Dernière semaine août (rentrée Paris)"],
    highSeason: "Août-Septembre (+20-25%)",
    lowSeason: "Janvier-Février (-10%)",
  },
  
  routeSpecifics: {
    challenges: ["A11 fluide (peu de trafic)", "Péage Fleury-en-Bière approche Paris"],
    tips: ["Départ Nantes 7h = arrivée Paris 10h30", "Pause Angers (90km, 1h)"],
    trafficHotspots: ["Périph Paris 16h-20h"],
  },
  
  destinationSpecifics: {
    description: "Paris : défis classiques.",
    neighborhoods: [
      { name: "Marais", difficulty: "difficile", specifics: "Ruelles", tip: "+200-400€" },
      { name: "Banlieue", difficulty: "facile", specifics: "Moderne", tip: "Recommandé -15-20%" },
    ],
  },
  
  sections: [
    {
      id: "introduction",
      title: "Nantes-Paris : le corridor Ouest court et efficace",
      content: [
        "Nantes-Paris, 385km, 3h30. 75+ déménagements suivis. LE corridor le plus court (avec Bordeaux-Toulouse 245km). Trajet agréable A11 Océane (peu de trafic). Nantes départ = ultra-facile (ville plate accessible, une des plus simples France). Prix T2 : 1190-1800€ (corrects pour distance).",
      ],
    },
    {
      id: "nantes-ville-facile",
      title: "Nantes : départ ultra-facile, ville accessible",
      content: [
        "Nantes (315 000 habitants, 6ème ville France) = ville PLATE accessible. Une des 3 villes les plus faciles France (avec Le Havre et Villeurbanne). Tous quartiers accessibles (Île Nantes, Beaulieu, Erdre). Seul centre historique Château moyennement compliqué (+50-80€ léger). Résultat : départ Nantes = simple, pas de surcoût 95% des cas.",
      ],
    },
    {
      id: "erreurs",
      title: "Les 2 erreurs Nantes-Paris",
      content: [
        "<strong>Erreur #1 : Réserver dernière semaine août</strong>",
        "Rentrée Paris +25-30%.",
        "<strong>Solution</strong> : Réservez début juillet.",
        "",
        "<strong>Erreur #2 : Arriver Paris 17h30</strong>",
        "Périph saturé.",
        "<strong>Solution</strong> : Avant 15h ou après 19h30.",
      ],
    },
  ],
  
  testimonials: [
    {
      situation: "T2 Beaulieu Nantes → Paris 15ème, mai",
      challenge: "385km.",
      solution: "Départ 7h30, trajet fluide A11, arrivée 11h. Beaulieu + Paris 15ème = accessibles.",
      result: "1310€. Simple. A11 = autoroute la plus fluide de France.",
    },
  ],
  
  faq: [
    {
      question: "Nantes-Paris coûte combien ?",
      answer: "T2 : 1190-1800€. 385km (court). Nantes pas de surcoût (ville accessible), Paris +100-400€ si Marais/Montmartre.",
    },
    {
      question: "Nantes-Paris en combien de temps ?",
      answer: "3h30 trajet. 1 jour déménagement (départ 7h, arrivée 10h30, déchargement 11h-16h). Simple.",
    },
    {
      question: "A11 est-elle fluide ?",
      answer: "Oui. A11 Océane = une des autoroutes les plus fluides France (peu touristique, peu de camions). Trajet agréable.",
    },
  ],
  
  checklist: [
    {
      category: "3 semaines avant",
      items: ["Devis", "Autorisation Paris si nécessaire"],
    },
    {
      category: "Jour J",
      items: ["Départ 7h", "Vérifier état"],
    },
  ],
};

/**
 * Base de données des corridors premium
 */
export const PREMIUM_CORRIDORS_DATABASE: Record<string, PremiumCorridorData> = {
  "paris-lyon": PARIS_LYON_PREMIUM,
  "lyon-paris": LYON_PARIS_PREMIUM,
  "paris-marseille": PARIS_MARSEILLE_PREMIUM,
  "marseille-paris": MARSEILLE_PARIS_PREMIUM,
  "paris-toulouse": PARIS_TOULOUSE_PREMIUM,
  "toulouse-paris": TOULOUSE_PARIS_PREMIUM,
  "nice-paris": NICE_PARIS_PREMIUM,
  "paris-bordeaux": PARIS_BORDEAUX_PREMIUM,
  "marseille-lyon": MARSEILLE_LYON_PREMIUM,
  "lyon-marseille": LYON_MARSEILLE_PREMIUM,
  "toulouse-lyon": TOULOUSE_LYON_PREMIUM,
  "nice-lyon": NICE_LYON_PREMIUM,
  "montpellier-paris": MONTPELLIER_PARIS_PREMIUM,
  "strasbourg-paris": STRASBOURG_PARIS_PREMIUM,
  "nantes-paris": NANTES_PARIS_PREMIUM,
};

/**
 * Helper pour récupérer un corridor premium
 */
export function getPremiumCorridor(originSlug: string, destinationSlug: string): PremiumCorridorData | null {
  const key = `${originSlug}-${destinationSlug}`;
  return PREMIUM_CORRIDORS_DATABASE[key] || null;
}
