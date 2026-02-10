export type LongTailLink = {
  slug: string;
  title: string;
  description: string;
  tags: Array<
    | "acces"
    | "escaliers"
    | "portage"
    | "lift"
    | "parking"
    | "rue-etroite"
    | "petit-volume"
    | "colocation"
    | "objets-lourds"
    | "planning"
    | "stockage"
  >;
};

export const LONGTAIL_LINKS: LongTailLink[] = [
  {
    slug: "demenagement-sans-ascenseur-5e-etage",
    title: "Déménagement sans ascenseur (5e étage) : méthode, devis fiable, checklist anti‑surprise",
    description: "Étages, rythme, organisation : ce qui fait varier le devis et comment éviter les suppléments.",
    tags: ["acces", "escaliers"],
  },
  {
    slug: "portage-long-camion-loin-entree",
    title: "Portage long : camion loin de l’entrée (cour, couloir, allée) — comment éviter les surprises",
    description: "Estimer en pas + détails, standardiser les infos, comparer des devis sans hypothèses.",
    tags: ["acces", "portage"],
  },
  {
    slug: "monte-meuble-quand-indispensable",
    title: "Monte‑meuble (lift) : quand c’est indispensable, quelles infos donner",
    description: "Décider sur détails (fenêtre/accès), cadrer l’option dans le devis, éviter l’improvisation.",
    tags: ["lift", "acces"],
  },
  {
    slug: "demenagement-parking-souterrain",
    title: "Déménagement avec parking souterrain : hauteur, accès camion, portage — le guide",
    description: "Contraintes d’accès : quoi vérifier (hauteur, trajet réel) pour un devis stable.",
    tags: ["parking", "portage", "acces"],
  },
  {
    slug: "demenagement-rue-etroite-impasse",
    title: "Déménagement rue étroite / impasse : camion, portage et plan anti‑galère",
    description: "Scénarios possibles (petit camion, transbordement) et infos à fournir pour chiffrer juste.",
    tags: ["rue-etroite", "portage", "acces"],
  },
  {
    slug: "petit-demenagement-10-15-cartons",
    title: "Petit déménagement (10–15 cartons) : prix réaliste, options, et comment éviter de payer trop",
    description: "Petit volume : ce qui pèse vraiment (accès/timing) + méthode pour devis comparables.",
    tags: ["petit-volume", "planning"],
  },
  {
    slug: "demenagement-colocation-etudiant",
    title: "Déménagement colocation / étudiant : organiser plusieurs volumes sans chaos",
    description: "Inventaire par personne, étiquetage, timing : une méthode simple qui marche.",
    tags: ["colocation", "planning"],
  },
  {
    slug: "demenagement-objets-lourds-frigo-piano-coffre",
    title: "Objets lourds (frigo, piano, coffre) : infos à donner pour éviter casse + suppléments",
    description: "détails + passages : cadrer la méthode (protection, équipe, option lift) dans le devis.",
    tags: ["objets-lourds", "lift", "acces"],
  },
  {
    slug: "demenagement-fin-de-mois-vs-milieu",
    title: "Fin de mois vs milieu de mois : quand déménager pour payer moins (sans risque)",
    description: "Pourquoi c’est plus tendu, comment gagner sur le prix via flexibilité et organisation.",
    tags: ["planning"],
  },
  {
    slug: "garde-meuble-2-semaines-avant-demenagement",
    title: "Garde‑meuble 2 semaines : plan simple pour éviter un déménagement en urgence",
    description: "Stockage court : quand c’est utile, comment organiser enlèvement→stockage→livraison.",
    tags: ["stockage", "planning"],
  },
  {
    slug: "autorisation-stationnement-demenagement-demande-modele",
    title: "Autorisation de stationnement : modèle de demande + checklist",
    description: "Réserver une place (sans stress) : quand demander, quoi envoyer, et comment éviter l’improvisation.",
    tags: ["acces", "planning"],
  },
  {
    slug: "cartons-gratuits-ou-trouver",
    title: "Cartons gratuits : où en trouver vite (sans cartons pourris)",
    description: "Plan rapide + critères simples pour récupérer des cartons solides sans y passer la journée.",
    tags: ["planning"],
  },
  {
    slug: "assurance-demenagement-dommages-que-couvre",
    title: "Assurance déménagement : ce que couvre vraiment la casse (et comment éviter les zones grises)",
    description: "Méthode simple : objets sensibles, détails, déclaration cohérente, et vérifs post‑déménagement.",
    tags: ["planning"],
  },
  {
    slug: "emballer-vaisselle-rapide-sans-casse",
    title: "Emballer la vaisselle vite (et sans casse) : méthode + checklist",
    description: "Zéro vide, cartons adaptés, pas trop lourd : les règles qui évitent la casse.",
    tags: ["planning"],
  },
  {
    slug: "emballer-ecran-tv-ordinateur",
    title: "Emballer un écran TV / ordinateur sans le casser (sans carton d’origine)",
    description: "Rigidifier + protéger les angles + éviter la pression : la méthode anti‑casse pour écrans.",
    tags: ["planning"],
  },
  {
    slug: "demenager-avec-enfants-bas-age-checklist",
    title: "Déménager avec des enfants : plan anti‑stress + checklists",
    description: "Routines, zones, kit 48h : une méthode simple pour éviter le chaos le jour J.",
    tags: ["planning"],
  },
  {
    slug: "demenager-avec-chat-chien-stress",
    title: "Déménager avec un chat/chien : réduire le stress + checklist anti‑fuite",
    description: "Zone safe + référent + arrivée organisée : le plan simple pour animaux.",
    tags: ["planning"],
  },
  {
    slug: "demenager-plantes-sans-les-tuer",
    title: "Déménager des plantes sans les abîmer : méthode simple",
    description: "Stabiliser le pot, limiter le mouvement, transporter tard, installer tôt.",
    tags: ["planning"],
  },
  {
    slug: "demenager-frigo-americain",
    title: "Déménager un frigo américain : préparation, transport, erreurs à éviter",
    description: "Objet lourd : accès, protection, manutention. À cadrer dans le devis pour éviter les surprises.",
    tags: ["objets-lourds", "acces", "portage"],
  },
  {
    slug: "demenager-machine-a-laver-lave-vaisselle",
    title: "Machine à laver / lave‑vaisselle : préparation et transport (sans dégâts)",
    description: "Éviter fuites et chocs : préparation simple, calage, et organisation.",
    tags: ["objets-lourds", "acces", "portage"],
  },
  {
    slug: "inventaire-demenagement-modele-simple",
    title: "Inventaire déménagement : modèle simple (devis comparables) en 20 min",
    description: "3 listes + 4 détails : le format minimal qui rend les devis comparables.",
    tags: ["planning", "acces"],
  },
  {
    slug: "demenagement-sous-la-pluie-proteger",
    title: "Déménagement sous la pluie : protéger et éviter les glissades (plan simple)",
    description: "Zones tampon + protection minimale utile : gérer la météo sans improviser.",
    tags: ["planning", "acces"],
  },
  {
    slug: "demenagement-canicule-ete",
    title: "Déménagement en canicule : organiser sans s’épuiser",
    description: "Réduire les allers‑retours, sécuriser le rythme, minimiser l’exposition des objets sensibles.",
    tags: ["planning"],
  },
  {
    slug: "demonter-remonter-canape-porte-etroite",
    title: "Canapé + porte étroite : démonter, tourner, ou lift ? (méthode)",
    description: "Décider vite avec passage étroit + rotation palier : éviter l’improvisation.",
    tags: ["acces", "escaliers", "lift"],
  },
  {
    slug: "emballer-livres-sans-carton-trop-lourd",
    title: "Emballer des livres sans cartons trop lourds : méthode rapide",
    description: "Petits cartons, fond renforcé, étiquette “lourd” : simple et efficace.",
    tags: ["planning"],
  },
  {
    slug: "etat-des-lieux-jour-demenagement-checklist",
    title: "État des lieux le jour J : checklist dernier passage",
    description: "Placards, cave, balcon, mini tour détail : éviter les oublis et les galères après.",
    tags: ["planning"],
  },
  {
    slug: "demenager-objets-fragiles-vitrine-miroir-table",
    title: "Objets fragiles (vitrine, miroir, table) : protections et transport",
    description: "Angles + rigidité + calage : les règles simples pour éviter la casse.",
    tags: ["planning"],
  },
  {
    slug: "hauteur-camion-demenagement-gabarit",
    title: "Gabarit/hauteur du camion : éviter l’accès impossible (et le portage long)",
    description: "Identifier les passages critiques + prévoir un plan B (distance) pour stabiliser la logistique.",
    tags: ["acces", "portage", "parking", "rue-etroite"],
  },
  {
    slug: "demenagement-weekend-comment-eviter-surcout",
    title: "Déménagement le week‑end : éviter le surcoût (sans tout chambouler)",
    description: "Flexibilité intelligente + accès clair : leviers simples pour limiter les suppléments.",
    tags: ["planning"],
  },
];

const bySlug = new Map(LONGTAIL_LINKS.map((l) => [l.slug, l]));

function pickBySlugs(slugs: string[]): LongTailLink[] {
  return slugs.map((s) => bySlug.get(s)).filter(Boolean) as LongTailLink[];
}

export function getLongTailLinksForService(serviceSlug: string | undefined): LongTailLink[] {
  if (!serviceSlug) return LONGTAIL_LINKS;

  const map: Record<string, string[]> = {
    piano: [
      "demenagement-objets-lourds-frigo-piano-coffre",
      "monte-meuble-quand-indispensable",
      "demenagement-sans-ascenseur-5e-etage",
      "portage-long-camion-loin-entree",
      "demenager-frigo-americain",
    ],
    "petit-demenagement": [
      "petit-demenagement-10-15-cartons",
      "demenagement-fin-de-mois-vs-milieu",
      "portage-long-camion-loin-entree",
      "demenagement-colocation-etudiant",
      "cartons-gratuits-ou-trouver",
    ],
    "garde-meuble": [
      "garde-meuble-2-semaines-avant-demenagement",
      "demenagement-fin-de-mois-vs-milieu",
      "portage-long-camion-loin-entree",
      "etat-des-lieux-jour-demenagement-checklist",
    ],
    "pas-cher": [
      "demenagement-fin-de-mois-vs-milieu",
      "petit-demenagement-10-15-cartons",
      "portage-long-camion-loin-entree",
      "demenagement-weekend-comment-eviter-surcout",
    ],
    "aide-demenagement": [
      "demenagement-sans-ascenseur-5e-etage",
      "monte-meuble-quand-indispensable",
      "portage-long-camion-loin-entree",
      "inventaire-demenagement-modele-simple",
    ],
    "location-camion": [
      "demenagement-rue-etroite-impasse",
      "demenagement-parking-souterrain",
      "demenagement-fin-de-mois-vs-milieu",
      "hauteur-camion-demenagement-gabarit",
      "autorisation-stationnement-demenagement-demande-modele",
    ],
    international: [
      "garde-meuble-2-semaines-avant-demenagement",
      "etat-des-lieux-jour-demenagement-checklist",
      "demenagement-fin-de-mois-vs-milieu",
    ],
    entreprise: [
      "demenagement-fin-de-mois-vs-milieu",
      "portage-long-camion-loin-entree",
      "inventaire-demenagement-modele-simple",
    ],
  };

  const slugs = map[serviceSlug];
  if (!slugs) return LONGTAIL_LINKS;

  const picked = pickBySlugs(slugs);
  const rest = LONGTAIL_LINKS.filter((l) => !slugs.includes(l.slug));
  return [...picked, ...rest];
}


