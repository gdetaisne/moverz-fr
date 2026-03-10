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
        "<strong>Solution</strong> : Vérifiez l'attestation RC Pro, le score Creditsafe (> 60/100), les avis Google (> 4.2/5).",
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
 * Base de données des corridors premium
 */
export const PREMIUM_CORRIDORS_DATABASE: Record<string, PremiumCorridorData> = {
  "paris-lyon": PARIS_LYON_PREMIUM,
  // TODO: Ajouter les 9-14 autres corridors prioritaires
};

/**
 * Helper pour récupérer un corridor premium
 */
export function getPremiumCorridor(originSlug: string, destinationSlug: string): PremiumCorridorData | null {
  const key = `${originSlug}-${destinationSlug}`;
  return PREMIUM_CORRIDORS_DATABASE[key] || null;
}
