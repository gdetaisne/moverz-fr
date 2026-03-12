/**
 * Canonical overrides pour consolidation cannibalisation SEO.
 *
 * Quand un slug est dans cette map, sa page blog affiche <link rel="canonical" href="...">
 * pointant vers le path indiqué au lieu de /blog/{slug}/.
 *
 * Usage :
 * - #7 Strasbourg : 8 pages prix → canonical blog/prix-demenageur-strasbourg-2026
 * - #8 Bordeaux : 2 articles blog devis → canonical demenagement/bordeaux
 */

export const BLOG_CANONICAL_OVERRIDES: Record<string, string> = {
  // ── #7 Strasbourg : cannibalisation "demenageur strasbourg tarif" (9 pages → 1 canonique)
  // Canonique = prix-demenageur-strasbourg-2026. Les 8 autres pointent vers lui.
  "prix-demenagement-strasbourg": "blog/prix-demenageur-strasbourg-2026",
  "prix-demenageur-strasbourg-2025": "blog/prix-demenageur-strasbourg-2026",
  "prix-garde-meuble-strasbourg-2025": "blog/prix-demenageur-strasbourg-2026",
  "petit-demenagement-strasbourg-prix-2025": "blog/prix-demenageur-strasbourg-2026",
  "demenagement-bureaux-strasbourg-prix-2025": "blog/prix-demenageur-strasbourg-2026",
  "demenagement-international-strasbourg-prix-2025": "blog/prix-demenageur-strasbourg-2026",
  "demenagement-piano-strasbourg-prix-2025": "blog/prix-demenageur-strasbourg-2026",
  "location-camion-strasbourg-prix-tarifs-2025": "blog/prix-demenageur-strasbourg-2026",
  "demenageur-monte-meuble-strasbourg": "blog/prix-demenageur-strasbourg-2026",
  "formule-economique-cle-en-main-strasbourg": "blog/prix-demenageur-strasbourg-2026",
  "stockage-pendant-demenagement-strasbourg": "blog/prix-demenageur-strasbourg-2026",

  // ── #8 Bordeaux : cannibalisation "devis déménagement bordeaux" (3 pages → 1 canonique)
  // Canonique = page ville /demenagement/bordeaux/. Les 2 articles blog pointent vers elle.
  "devis-demenagement-bordeaux-guide": "demenagement/bordeaux",
  "comparateur-devis-demenagement-bordeaux": "demenagement/bordeaux",
  "comparatif-devis-demenagement-bordeaux": "demenagement/bordeaux",
  "comparatif-prix-devis-demenagement-bordeaux": "demenagement/bordeaux",
  "obtenir-devis-demenagement-bordeaux-process-eclair": "demenagement/bordeaux",
};
