/**
 * Overrides SEO pour les articles blog whitelistés (trafic GSC prouvé)
 *
 * Objectif : différencier les snippets SERP avec des angles uniques,
 * des chiffres concrets et l'année en cours, pour améliorer le CTR.
 *
 * Règles :
 * - title : ≤ 55 chars (avant "| Blog déménagement | Moverz" du layout)
 * - description : 140-160 chars, chiffre ou fait concret en tête
 * - Pas de "Appelez-nous" / "Demandez votre devis" (Moverz = comparateur)
 */

export interface BlogMetaOverride {
  title: string;
  description: string;
}

export const BLOG_META_OVERRIDES: Record<string, BlogMetaOverride> = {

  // ── Article Moverz (E-E-A-T, comparateur) ────────────────────────────────

  "pourquoi-moverz-meilleur-comparateur-demenagement": {
    title: "Pourquoi Moverz ? Comparateur 0 Harcèlement, 1 Dossier",
    description: "1 dossier, jusqu'à 5 devis. Pros vérifiés Pappers, pas revendeur de leads. 64% des déménageurs ont des anomalies (DGCCRF). Moverz vérifie avant de proposer.",
  },

  "moverz-vs-concurrents-comparateur-demenagement": {
    title: "Moverz vs Nextories, Emoovz : on révolutionne le déménagement",
    description: "Zéro spam, Score /100, dossier anonyme. La petite licorne du déménagement. Comparatif Nextories, Emoovz, LeDéménageur — ce qu'on a bâti ensemble.",
  },

  "comparatif-demenageurs-rennes-2026": {
    title: "Comparatif Déménageurs Rennes 2026 : Top 5, Prix, Vérifier",
    description: "ABC Lemarié, Eurodem 35 + 3 acteurs. T2 500–900€. Vérifiez avec Label Moverz (Score /100 gratuit en 30s) avant de signer. 3–5 devis Moverz.",
  },

  "comparatif-demenageurs-marseille-2026": {
    title: "Comparatif Déménageurs Marseille 2026 : Top 5, Prix, Vérifier",
    description: "Amice, Pro Du Dem, ADEM + 2 acteurs. T2 550–950€. Vérifiez avec Label Moverz (Score /100 gratuit en 30s) avant de signer. 3–5 devis Moverz.",
  },

  "comparatif-demenageurs-bordeaux-2026": {
    title: "Comparatif Déménageurs Bordeaux 2026 : Top 5, Prix, Vérifier",
    description: "Air Déménagement, Alex, Sam'déménage + 2 acteurs. T2 550–950€. Vérifiez avec Label Moverz (Score /100 gratuit en 30s) avant de signer. 3–5 devis Moverz.",
  },

  "comparatif-demenageurs-lyon-2026": {
    title: "Comparatif Déménageurs Lyon 2026 : Top 5, Prix, Vérifier",
    description: "S.I.E.T, Lugnier + 3 acteurs. T2 500–900€. Vérifiez avec Label Moverz (Score /100 gratuit en 30s) avant de signer. 3–5 devis Moverz.",
  },

  // ── GROUPE A — articles déjà solides, titre/desc à affiner ──────────────

  "shurgard-lyon-sites-tarifs": {
    title: "Shurgard Lyon : Prix, Adresses et Alternatives Moins Chères",
    description: "Shurgard Lyon : 4 sites (Jean Macé, Vaise, Gerland, États-Unis), 130–480€/mois. + alternatives locales -20% en moyenne. 3 devis comparables sur Moverz, 0 harcèlement.",
  },

  "comparaison-prix-demenageurs-lyon": {
    title: "Prix déménageurs Lyon : S.I.E.T vs Lugnier vs PME 2026",
    description: "Comparatif réel : S.I.E.T 500–700€, Lugnier 450–650€, PME locaux 420–580€ pour un T2. Moverz vous permet de comparer ces acteurs sans appels répétés.",
  },

  "demenageur-rennes": {
    title: "Déménageur Rennes 2026 : T2 dès 500€, 0 harcèlement",
    description: "Déménageurs Rennes : ABC Lemarié, Eurodem 35, acteurs locaux. T2 intra-ville 500–900€. Obtenez 3 devis comparables sur Moverz, zéro harcèlement.",
  },

  "tarif-horaire-porteur-demenagement-nantes": {
    title: "Tarif porteur déménagement Nantes 2026 : 25–50€/h",
    description: "Tarifs porteurs Nantes : particuliers (Frizbiz) 25–35€/h, pros 35–50€/h. Minimum 3h. Quand choisir un porteur vs un déménageur complet ?",
  },

  "monte-meuble-marseille-quand-necessaire": {
    title: "Monte-meuble Marseille 2026 : quand l'exiger ? 200–450€",
    description: "Monte-meuble Marseille obligatoire dès le 2e étage sans ascenseur. Noailles, Panier, 7e : 200–450€/jour. Comment l'inclure dans votre devis Moverz.",
  },

  "prix-demenagement-montpellier": {
    title: "Prix déménagement Montpellier 2026 : T1 320€, Maison 1k€",
    description: "Tarifs déménagement Montpellier intra-ville : studio 280–400€, T2 450–680€, maison 800–1300€. Écusson, Port Marianne : pros connaissant les axes tram.",
  },

  "monte-meuble-demenagement-nantes": {
    title: "Monte-meuble Nantes 2026 : nacelle ou diable ? 300–500€",
    description: "Monte-meuble Nantes : nacelle 15–25m 300–500€/jour, diable monte-escalier 40–80€. Île de Nantes, immeubles anciens : quand c'est indispensable.",
  },

  "demenagement-objets-fragiles-nice": {
    title: "Objets fragiles Nice : emballage & assurance 2026",
    description: "Emballer vaisselle, miroirs, œuvres d'art à Nice : papier bulle, caisses art, double caisse piano. Assurance tous risques incluse chez les pros Moverz.",
  },

  "meilleurs-demenageurs-lyon": {
    title: "Top 7 Déménageurs Lyon Vérifiés Pappers (2026)",
    description: "S.I.E.T, Lugnier, acteurs locaux 4.5+/5 : 7 déménageurs Lyon vérifiés (santé financière, avis, licences). 3–5 devis comparables sur Moverz, dossier anonyme.",
  },

  "comparatif-formules-economiques-demenagement-nantes": {
    title: "Déménagement Nantes Pas Cher : Comparatif Prix 2026",
    description: "Formule éco Nantes : T2 dès 450€ (vous emballez). Médard, Gentlemen, Bretons — ce qui est inclus, ce qui coûte en plus. 3 devis Moverz, zéro démarchage.",
  },

  "comparer-plateformes-devis-demenagement-2026": {
    title: "Comparer des Devis Déménagement 2026 : 1 Dossier, 3–5 Réponses",
    description: "Un seul dossier, jusqu'à 5 devis comparables. Pros vérifiés Pappers, 0 harcèlement. Moverz standardise votre demande — vous comparez à prestation égale. Gratuit.",
  },

  "demenagement-piano-nantes-prix": {
    title: "Prix Déménagement Piano Nantes 2026 : 200–800€",
    description: "Piano droit Nantes 200–400€, queue 400–800€. Étages, monte-meuble : fourchettes réelles. Pros spécialisés vérifiés sur Moverz — devis comparables sous 5j.",
  },

  "transport-maritime-container-lyon": {
    title: "Container maritime depuis Lyon 2026 : 6 000–20 000€",
    description: "Conteneur maritime Lyon : groupage 20' 6 000–10 000€ vers USA, 40' maison 12 000–20 000€. Ports Le Havre/Marseille. Délais et formalités douanières.",
  },

  "garde-meuble-longue-duree-nice": {
    title: "Garde-meuble longue durée Nice 2026 : tarifs +6 mois",
    description: "Box Nice longue durée : 60–180€/mois pour 5–20m², dégressif dès 6 mois. Klimanett, Shurgard, acteurs locaux — comparatif tarifs et conditions.",
  },

  "faq-garde-meuble-strasbourg": {
    title: "Garde-meuble Strasbourg 2026 : 20 FAQ, 40–400€/mois",
    description: "FAQ garde-meuble Strasbourg : prix 40–400€/mois selon taille, durée 1–12 mois, accès 24h/7j, assurance incluse. Grande Île, Neudorf, Hautepierre.",
  },

  "prix-demenageur-strasbourg-2026": {
    title: "Prix Déménageur Strasbourg 2026 : 525€ Studio, T2 960€, Guide Complet",
    description: "Tarifs déménagement Strasbourg 2026 : studio 525€, T2 960€, T3 1630€. Grande Île +15-20%. 3-5 devis comparables sur Moverz, pros vérifiés Pappers.",
  },

  "prix-demenageur-nice-2026": {
    title: "Prix Déménageur Nice 2026 : 545€ Studio, T2 990€, Guide Complet",
    description: "Tarifs déménagement Nice 2026 : studio 545€, T2 990€, T3 1680€. Vieux-Nice et collines +15-25%. 3-5 devis comparables sur Moverz, pros vérifiés.",
  },

  "prix-demenageur-lille-2026": {
    title: "Prix Déménageur Lille 2026 : 520€ Studio, T2 955€, Guide Complet",
    description: "Tarifs déménagement Lille 2026 : studio 520€, T2 955€, T3 1620€. Vieux-Lille +15-25%. 3-5 devis comparables sur Moverz, pros vérifiés Pappers.",
  },

  "prix-demenageur-nantes-2026": {
    title: "Prix Déménageur Nantes 2026 : 530€ Studio, T2 970€, Guide Complet",
    description: "Tarifs déménagement Nantes 2026 : studio 530€, T2 970€, T3 1650€. Île de Nantes +10-15%. 3-5 devis comparables sur Moverz, pros vérifiés.",
  },

  "prix-demenagement-international-lyon": {
    title: "Déménagement international Lyon 2026 : 2 000–10 000€",
    description: "Prix déménagement international Lyon : Europe 2 000–6 000€, USA container 6 000–10 000€. Formalités douanières, assurance tout risque, délais réels.",
  },

  "demenagement-pas-cher-toulouse": {
    title: "Déménagement pas cher Toulouse 2026 : économisez 30–40%",
    description: "Déménager pas cher à Toulouse : formule économique, location camion, plateformes entraide. Capitole, Minimes : comparer 3 devis sur Moverz = -30% en moyenne.",
  },

  "demenageur-strasbourg": {
    title: "Déménageur Strasbourg 2026 : Grande Île, devis dès 340€",
    description: "Déménageurs Strasbourg : pros connaissant la Grande Île, Krutenau, Neudorf. T2 340–600€. Comparez sans engagement sur Moverz — dossier anonyme.",
  },

  "demenagement-international-nice-monaco": {
    title: "Déménagement Nice–Monaco 2026 : prix & formalités",
    description: "Nice–Monaco 20 km mais formalités distinctes : TVA Monaco 0%, stationnement prince, monte-meuble Fontvieille. Prix T2 800–1 500€ selon accès.",
  },

  "prix-demenagement-longue-distance-lille-paris": {
    title: "Déménagement Lille–Paris 2026 : T2 1 500€, Maison 3 000€",
    description: "Déménagement Lille–Paris 220 km : T2 1 500–1 800€, T3 2 100–2 500€, maison 2 500–3 500€. A1 péage 60€ inclus. Comparez sur Moverz sans démarchage.",
  },

  "devis-demenagement-lille-obtenir-comparer": {
    title: "Devis déménagement Lille 2026 : comment bien comparer",
    description: "Obtenir 3 devis à Lille comparables : volumes standardisés, mêmes dates, même étage. Lefebvre, Bretons, acteurs locaux. Moverz uniformise les offres.",
  },

  "plateformes-aide-demenagement-nantes": {
    title: "Aide déménagement Nantes 2026 : Frizbiz, Yoojo",
    description: "Aide déménagement Nantes : Frizbiz 25–35€/h, Yoojo 28–40€/h, Leboncoin Services. Particuliers vs pros : différences légales et assurance.",
  },

  "transport-conteneur-demenagement-international": {
    title: "Container international 2026 : 20 pieds vs 40 pieds",
    description: "Conteneur 20 pieds (35m³, T2, 4–7k€ USA) vs 40 pieds (67m³, maison, 7–12k€). Groupage ou exclusif ? Guide complet pour choisir.",
  },

  // ── GROUPE B — articles enrichis 750-1000 mots ──────────────────────────

  "assurance-demenagement-international": {
    title: "Assurance déménagement international 2026 : 2–5%",
    description: "Assurance tous risques déménagement international : 2–5% valeur déclarée, franchise 150–300€. CMR, tous risques, RCI — quelle couverture choisir vraiment ?",
  },

  "demenageur-monte-meuble-strasbourg": {
    title: "Monte-meuble Strasbourg 2026 : obligatoire 2e étage+",
    description: "Monte-meuble Strasbourg : obligatoire 2e étage sans ascenseur. Krutenau, Centre historique : 150–300€/demi-journée. Inclus dans les devis Moverz.",
  },

  "autorisation-stationnement-demenagement-nice": {
    title: "Arrêté stationnement Nice 2026 : délai 5–7j, 50–100€",
    description: "Arrêté stationnement déménagement Nice : obligatoire Vieux-Nice, délai 5–7j via nice.fr, coût 50–100€. Procédure exacte et erreurs à éviter.",
  },

  // ── GROUPE C — réécritures complètes ────────────────────────────────────

  "demenagement-piano-longue-distance": {
    title: "Déménagement piano longue distance 2026 : 400–1 000€",
    description: "Piano droit longue distance : 400–700€, queue 800–1 500€. Capitonné renforcé, sangles piano, assurance spécifique. Montpellier–Paris = 2 déménageurs + camion frigo.",
  },

  "tarif-horaire-demenageur-rennes": {
    title: "Tarif horaire déménageur Rennes 2026 : 40–60€/h",
    description: "Tarif main d'œuvre Rennes : 40–60€/h par déménageur (2 min.), camion 80–120€. T2 = 4–6h = 320–720€ total. ABC Lemarié, Eurodem 35 : fourchettes réelles.",
  },

  "comparatif-prix-demenageurs-rennes": {
    title: "Comparatif déménageurs Rennes 2026 : écart jusqu'à 40%",
    description: "Prix réels Rennes : ABC Lemarié, Eurodem 35, acteurs locaux — T2 intra-ville 500–900€. Moverz standardise les devis pour comparer à la prestation égale.",
  },

  "accord-piano-apres-demenagement-rennes": {
    title: "Accord piano après déménagement Rennes : 100–150€",
    description: "Vibrations + chocs + température : l'accord piano post-déménagement est obligatoire à Rennes. 100–150€ pour un accordeur certifié. Quand et pourquoi.",
  },

  "autorisation-stationnement-demenagement-marseille": {
    title: "Arrêté stationnement déménagement Marseille 2026 : guide",
    description: "Arrêté stationnement Marseille : délai 5–10j, coût 60–120€ selon arrondissement. Noailles, Panier, 7e : procédure exacte en ligne et erreurs fréquentes.",
  },

  "prix-demenagement-piano-rennes-2025": {
    title: "Prix déménagement piano Rennes 2026 : droit 200–400€",
    description: "Piano droit Rennes 200–400€, queue 400–800€. Étages +50–100€, monte-meuble +150€. ABC Lemarié spécialisé, accord post-déménagement inclus possible.",
  },

  "prix-demenagement-longue-distance-montpellier-paris": {
    title: "Déménagement Montpellier–Paris 2026 : 1 200–3 000€",
    description: "Montpellier–Paris 750 km : T2 1 200–1 800€, T3 1 700–2 500€, maison 2 500–4 000€. 1–2 jours, A9/A7. Obtenez 3 devis comparables sur Moverz.",
  },

  "meilleur-demenageur-rennes-2025": {
    title: "Meilleur Déménageur Rennes 2026 : Top 5 Vérifiés",
    description: "Top 5 déménageurs Rennes vérifiés Pappers : ABC Lemarié, Eurodem 35, acteurs locaux 4.5+/5. Critères : ponctualité, sans-casse, prix. Comparez sur Moverz.",
  },

  "prix-demenageur-rouen-2025": {
    title: "Prix Déménageur Rouen 2026 : Tarifs & Devis Gratuit",
    description: "Tarifs déménagement Rouen 2026 : fourchettes T1/T2/T3, prix réels, conseils pour comparer. Obtenez des devis gratuits de pros vérifiés Pappers sur Moverz.",
  },

  "prix-garde-meuble-montpellier-2025": {
    title: "Prix Garde-Meuble Montpellier 2026 : Comparatif Tarifs",
    description: "Comparatif garde-meuble Montpellier 2026 : 7 acteurs, tarifs 40–200€/mois selon taille. Shurgard, Klimanett, acteurs locaux. Devis gratuit Moverz.",
  },

  "demenagement-strasbourg-paris": {
    title: "Déménagement Strasbourg–Paris 2026 : 700–1 300€ T2",
    description: "Strasbourg–Paris 450 km : T2 700–1 300€, maison 1 500–2 800€. A4 autoroute, TGV 1h45 pour les petits volumes. Comparez 3 pros sur Moverz.",
  },

  "prix-demenagement-par-m3-montpellier": {
    title: "Prix déménagement au m³ Montpellier 2026 : 30–50€/m³",
    description: "Tarif m³ Montpellier : 30–50€/m³ selon formule. Studio 15–20m³, T2 30–40m³, T3 50–60m³. Comment calculer votre volume et éviter les surprises.",
  },

  "prix-demenageur-rennes-t2-t3-2025": {
    title: "Prix déménageur Rennes T2/T3 2026 : 500–1 350€",
    description: "Prix déménageur Rennes : T2 500–1 100€, T3 700–1 350€. ABC Lemarié, Eurodem 35, locaux. Moverz vous donne 3 devis comparables sur les mêmes critères.",
  },
};
