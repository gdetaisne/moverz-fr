/**
 * Pricing Corridors — Calcul fourchettes prix pour meta descriptions
 * 
 * Source: moverz_tunnel/lib/pricing/ (formules officielles Moverz)
 * Date dernière maj: 2026-01-19
 * Portée: génération meta descriptions pages corridors (SEO)
 * 
 * Changelog:
 * - 2026-01-30: Import initial depuis tunnel (formules pricing officielles)
 *   - Tarifs €/m³ par tranche distance (référence La Poste / bench marché)
 *   - Économie d'échelle volumique f(V) = clamp((V/10)^(-0.15), 0.75, 1.05)
 *   - Fourchette: min = base × 0.8 | max = base × seasonFactor × 1.2
 * 
 * Note importante:
 * Ces formules sont alignées sur le tunnel de devis (expérience utilisateur cohérente).
 * Les prix affichés dans les meta sont indicatifs et basés sur:
 * - Surfaces types: T1=30m², T2=50m², Maison=100m²
 * - Densité: normale (coef 1.0)
 * - Saison: hors saison (seasonFactor = 1.0)
 * - Formule: STANDARD (milieu de gamme)
 * 
 * Références métier:
 * - AlloDemenageur: https://www.allodemenageur.fr/devis-demenagement/petit-demenagement/
 * - Demenagement24: https://www.demenagement24.com/demenagement-prix/
 */

import { estimateRoadDistanceKm } from "./corridors";

// ============================================
// Constantes (source: tunnel/lib/pricing/constants.ts)
// ============================================

/**
 * Coefficients volume par type de logement (m³ par m² surface)
 * Source: calibration Moverz sur cas réels
 */
const TYPE_COEFFICIENTS = {
  t1: 0.35,
  t2: 0.35,
  house: 0.4,
} as const;

/**
 * Tranches de distance pour tarifs différenciés
 * Source: grille La Poste + bench marché (2026-01-19)
 */
type DistanceBand =
  | "lt_100"
  | "d100_369"
  | "d370_499"
  | "d500_699"
  | "d700_849"
  | "d850_999"
  | "gte_1000";

function getDistanceBand(distanceKm: number): DistanceBand {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return "lt_100";
  if (distanceKm < 100) return "lt_100";
  if (distanceKm < 370) return "d100_369";
  if (distanceKm < 500) return "d370_499";
  if (distanceKm < 700) return "d500_699";
  if (distanceKm < 850) return "d700_849";
  if (distanceKm < 1000) return "d850_999";
  return "gte_1000";
}

/**
 * Tarifs €/m³ par tranche distance (formule ÉCONOMIQUE)
 * 
 * Source: tunnel/lib/pricing/constants.ts (LA_POSTE_RATES_EUR_PER_M3.ECONOMIQUE)
 * Calibration: bench marché AlloDemenageur + Demenagement24 (jan 2026)
 * 
 * Note: 
 * - Formule ÉCO utilisée pour meta (prix bas = évite sur-promesse)
 * - Le nom "LA_POSTE" est historique (valeurs calibrées marché réel)
 * - Sur le tunnel, 3 formules dispo: ÉCO / STANDARD / PREMIUM
 */
const ECO_RATES_EUR_PER_M3: Record<DistanceBand, number> = {
  lt_100: 35,
  d100_369: 60,
  d370_499: 65,
  d500_699: 75,
  d700_849: 85,
  d850_999: 95,
  gte_1000: 105,
};

/**
 * Coefficient distance (€/km) — impact marginal distance sur prix total
 * Source: tunnel/lib/pricing/constants.ts (COEF_DISTANCE)
 */
const COEF_DISTANCE = 1.2;

/**
 * Prix minimum socle (€) — plancher tarifaire
 * Source: tunnel/lib/pricing/constants.ts (PRIX_MIN_SOCLE)
 */
const PRIX_MIN_SOCLE = 400;

// ============================================
// Fonctions de calcul
// ============================================

/**
 * Économie d'échelle volumique
 * 
 * Formule: clamp((V/10)^(-0.15), 0.75, 1.05)
 * 
 * Effet:
 * - Petits volumes (≈10 m³): neutre (≈1.0)
 * - Volumes moyens/grands: €/m³ légèrement réduit (capé à 0.75)
 * 
 * Source: tunnel/lib/pricing/calculate.ts (getVolumeEconomyScale)
 * Justification: coûts fixes répartis sur volume plus important
 */
function getVolumeEconomyScale(volumeM3: number): number {
  if (!Number.isFinite(volumeM3) || volumeM3 <= 0) return 1;
  const raw = Math.pow(volumeM3 / 10, -0.15);
  return Math.min(1.05, Math.max(0.75, raw));
}

/**
 * Calcule le prix pour un corridor + surface + type logement donnés
 * 
 * Formule complète:
 * 1. Volume = surface × coefType
 * 2. Tarif €/m³ = STANDARD_RATES[band(distance)]
 * 3. Économie échelle = f(volume)
 * 4. Prix base = max(volume × tarif × f(V), socle) + (distance × coefDist)
 * 5. Fourchette: min = base × 0.8 | max = base × seasonFactor × 1.2
 * 
 * @param distanceKm Distance réelle corridor (km)
 * @param surfaceM2 Surface logement (m²)
 * @param coef Coefficient type logement (0.35 pour T1/T2, 0.4 pour maison)
 * @param seasonFactor Coefficient saisonnier (1.0 = hors saison, 1.15 = haute saison)
 * @returns { min, max } Prix en euros (arrondis)
 */
function calculateCorridorPrice(
  distanceKm: number,
  surfaceM2: number,
  coef: number,
  seasonFactor: number = 1.0
): { min: number; max: number } {
  // 1. Volume estimé
  const volume = surfaceM2 * coef;

  // 2. Tarif €/m³ selon distance (formule ÉCO)
  const band = getDistanceBand(distanceKm);
  const ratePerM3 = ECO_RATES_EUR_PER_M3[band];

  // 3. Économie d'échelle
  const volumeScale = getVolumeEconomyScale(volume);

  // 4. Composantes prix
  const volumeCost = volume * ratePerM3 * volumeScale;
  const distanceCost = Math.max(0, distanceKm) * COEF_DISTANCE;
  const basePrice = Math.max(volumeCost, PRIX_MIN_SOCLE) + distanceCost;

  // 5. Fourchette
  const min = Math.round(basePrice * 0.8);
  const max = Math.round(basePrice * seasonFactor * 1.2);

  return { min, max };
}

// ============================================
// API publique
// ============================================

/**
 * Surfaces types utilisées pour les meta descriptions
 * 
 * Basées sur moyennes marché France:
 * - T1: 30 m² (studio/T1 moyen)
 * - T2: 50 m² (T2 moyen)
 * - Maison: 100 m² (maison moyenne 4-5 pièces)
 */
const DEFAULT_SURFACES = {
  t1: 30,
  t2: 50,
  house: 100,
} as const;

export interface CorridorPricesForMeta {
  /** Distance réelle corridor (km) */
  distanceKm: number;
  /** Fourchette prix T1 (30m²) - format "1200-1800€" */
  t1: string;
  /** Fourchette prix T2 (50m²) - format "1800-2400€" */
  t2: string;
  /** Fourchette prix Maison (100m²) - format "3500-4800€" */
  house: string;
}

/**
 * Calcule les fourchettes prix pour un corridor (3 types logements)
 * 
 * Usage: génération meta descriptions pages corridors
 * 
 * @param originSlug Slug ville origine (ex: "nice")
 * @param destSlug Slug ville destination (ex: "paris")
 * @returns Prix indicatifs T1/T2/Maison + distance | null si calcul impossible
 * 
 * @example
 * ```ts
 * const prices = getCorridorPricesForMeta('nice', 'paris');
 * // {
 * //   distanceKm: 930,
 * //   t1: "1850-2780€",
 * //   t2: "2550-3830€",
 * //   house: "4750-7130€"
 * // }
 * ```
 */
export function getCorridorPricesForMeta(
  originSlug: string,
  destSlug: string
): CorridorPricesForMeta | null {
  // 1. Calculer distance réelle
  const distanceKm = estimateRoadDistanceKm(originSlug, destSlug);
  if (!distanceKm) return null;

  // 2. Calculer prix pour 3 cas types
  const t1Price = calculateCorridorPrice(
    distanceKm,
    DEFAULT_SURFACES.t1,
    TYPE_COEFFICIENTS.t1
  );

  const t2Price = calculateCorridorPrice(
    distanceKm,
    DEFAULT_SURFACES.t2,
    TYPE_COEFFICIENTS.t2
  );

  const housePrice = calculateCorridorPrice(
    distanceKm,
    DEFAULT_SURFACES.house,
    TYPE_COEFFICIENTS.house
  );

  // 3. Formater pour meta (arrondi dizaines pour lisibilité)
  const format = (price: { min: number; max: number }) => {
    const min = Math.round(price.min / 10) * 10;
    const max = Math.round(price.max / 10) * 10;
    return `${min}-${max}€`;
  };

  return {
    distanceKm,
    t1: format(t1Price),
    t2: format(t2Price),
    house: format(housePrice),
  };
}

/**
 * Calcule prix indicatifs pour déménagement LOCAL (intra-ville)
 * 
 * Usage: meta descriptions pages villes
 * Hypothèse: distance moyenne intra-ville = 15 km
 * 
 * @param citySlug Slug ville (non utilisé pour l'instant, distance fixe)
 * @returns Prix min (format "dès X€") pour T1/T2/Maison
 * 
 * @example
 * ```ts
 * const prices = getLocalPricesForMeta('nice');
 * // { t1: "450€", t2: "750€", house: "1300€" }
 * ```
 */
export function getLocalPricesForMeta(citySlug: string) {
  const DISTANCE_LOCALE_KM = 15; // Distance intra-ville moyenne
  
  const t1 = calculateCorridorPrice(
    DISTANCE_LOCALE_KM,
    DEFAULT_SURFACES.t1,
    TYPE_COEFFICIENTS.t1
  );
  
  const t2 = calculateCorridorPrice(
    DISTANCE_LOCALE_KM,
    DEFAULT_SURFACES.t2,
    TYPE_COEFFICIENTS.t2
  );
  
  const house = calculateCorridorPrice(
    DISTANCE_LOCALE_KM,
    DEFAULT_SURFACES.house,
    TYPE_COEFFICIENTS.house
  );
  
  // Format "dès X€" (prix min uniquement, arrondi dizaines)
  const formatMin = (price: { min: number; max: number }) => {
    return `${Math.round(price.min / 10) * 10}€`;
  };
  
  return {
    t1: formatMin(t1),
    t2: formatMin(t2),
    house: formatMin(house),
  };
}

/**
 * Génère les prix indicatifs pour affichage dans la page corridor
 * 
 * Format identique à ce qui est attendu par le composant CorridorPage
 * Utilise les mêmes formules que getCorridorPricesForMeta (cohérence meta/contenu)
 * 
 * @param distanceKm Distance réelle corridor (km)
 * @returns Array de prix indicatifs pour T1/T2/Maison
 * 
 * @example
 * ```ts
 * const indicatifs = getPrixIndicatifsForContent(933);
 * // [
 * //   { type: "Studio/T1", prix: "1850-2780€", description: "Volume : 10-15 m³" },
 * //   { type: "T2/T3", prix: "2550-3830€", description: "Volume : 20-35 m³" },
 * //   { type: "Maison", prix: "4750-7130€", description: "Volume : 40-80 m³" }
 * // ]
 * ```
 */
export function getPrixIndicatifsForContent(distanceKm: number) {
  // Calculer prix pour 3 cas types
  const t1Price = calculateCorridorPrice(
    distanceKm,
    DEFAULT_SURFACES.t1,
    TYPE_COEFFICIENTS.t1
  );

  const t2Price = calculateCorridorPrice(
    distanceKm,
    DEFAULT_SURFACES.t2,
    TYPE_COEFFICIENTS.t2
  );

  const housePrice = calculateCorridorPrice(
    distanceKm,
    DEFAULT_SURFACES.house,
    TYPE_COEFFICIENTS.house
  );

  // Formater pour affichage (arrondi dizaines pour lisibilité)
  const format = (price: { min: number; max: number }) => {
    const min = Math.round(price.min / 10) * 10;
    const max = Math.round(price.max / 10) * 10;
    return `${min}-${max}€`;
  };

  return [
    {
      type: "Studio/T1",
      prix: format(t1Price),
      description: "Volume : 10-15 m³"
    },
    {
      type: "T2/T3",
      prix: format(t2Price),
      description: "Volume : 20-35 m³"
    },
    {
      type: "Maison",
      prix: format(housePrice),
      description: "Volume : 40-80 m³"
    }
  ];
}

// ============================================
// Prix par palier logement (pages ville)
// ============================================

export interface CityPriceTier {
  label: string;
  surface: string;
  volume: string;
  price: string; // "min-max€"
}

/**
 * Calcule les prix indicatifs pour 5 types de logement (déménagement local).
 * 
 * Usage : CityPricingTable + CityPricing (pages ville)
 * Hypothèse : distance intra-ville 15 km (cohérent avec getLocalPricesForMeta)
 * 
 * @param _citySlug Slug ville (réservé future différenciation)
 * @returns 5 paliers avec label, surface, volume, prix
 */
export function getCityPriceTiers(_citySlug: string): CityPriceTier[] {
  const DISTANCE_LOCALE_KM = 15;

  const tiers: Array<{
    label: string;
    surface: string;
    volume: string;
    surfaceM2: number;
    coef: number;
  }> = [
    { label: "Studio (20-30m²)", surface: "20-30m²", volume: "15-20 m³", surfaceM2: 25, coef: 0.35 },
    { label: "T2 (40-50m²)", surface: "40-50m²", volume: "25-35 m³", surfaceM2: 45, coef: 0.35 },
    { label: "T3 (60-70m²)", surface: "60-70m²", volume: "40-50 m³", surfaceM2: 65, coef: 0.35 },
    { label: "T4+ (80-100m²)", surface: "80-100m²", volume: "55-70 m³", surfaceM2: 90, coef: 0.38 },
    { label: "Maison (100-150m²)", surface: "100-150m²", volume: "70-90 m³", surfaceM2: 125, coef: 0.40 },
  ];

  return tiers.map((tier) => {
    const { min, max } = calculateCorridorPrice(
      DISTANCE_LOCALE_KM,
      tier.surfaceM2,
      tier.coef,
    );
    const fmtMin = Math.round(min / 10) * 10;
    const fmtMax = Math.round(max / 10) * 10;
    return {
      label: tier.label,
      surface: tier.surface,
      volume: tier.volume,
      price: `${fmtMin}-${fmtMax}€`,
    };
  });
}
