/**
 * Calcul de devis simulés pour la ComparisonPreview
 * Fintech Premium Design System
 */

export interface QuoteLineItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface MoverScores {
  financier: number;
  juridique: number;
  google: number;
  reputation: number;
  vigilance: number;
}

export interface MockQuote {
  id: string;
  providerName: string;
  totalPrice: number;
  badge?: "best" | "verified";
  lineItems: QuoteLineItem[];
  /** Score global Moverz /100 */
  scoreMoverz: number;
  /** Label du score ("Excellent", "Très bon", "Fragile") */
  scoreLabel: string;
  /** Détail des scores par critère */
  scores: MoverScores;
  /** Note Google étoiles (ex: 4.1) */
  starRating: number;
  /** Nombre d'avis vérifiés */
  reviewCount: number;
  /** Ancienneté en années */
  yearsInBusiness: number;
  /** Site internet disponible */
  hasWebsite: boolean;
  /** Recommandé par Moverz */
  recommended: boolean;
}

interface ComputeMockQuotesInput {
  fromCity?: string;
  toCity?: string;
  areaM2?: number;
}

function getScoreLabel(score: number, recommended: boolean): string {
  if (!recommended) return "Non recommandé";
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Très bon";
  return "Moyen";
}

/**
 * Génère 5 devis simulés classés par recommandation (gauche = meilleur).
 *
 * 1. Déménageur A — 1 340 €, Excellent, meilleur score global
 * 2. Déménageur B — 1 540 €, Excellent, très bon aussi
 * 3. Déménageur C — 1 210 €, Moyen, scores moyens
 * 4. Déménageur D —   990 €, Non recommandé (Juridique 0/100)
 * 5. Déménageur E — 1 250 €, Non recommandé (Financier très bas)
 */
export function computeMockQuotes(_input: ComputeMockQuotesInput): MockQuote[] {
  const providers: MockQuote[] = [
    {
      id: "provider-a",
      providerName: "Déménageur A",
      totalPrice: 1340,
      badge: "best",
      scoreMoverz: 92,
      scoreLabel: "",
      scores: { financier: 85, juridique: 100, google: 95, reputation: 90, vigilance: 92 },
      starRating: 4.8,
      reviewCount: 234,
      yearsInBusiness: 12,
      hasWebsite: true,
      recommended: true,
      lineItems: [
        { label: "Main d'œuvre", value: "680 €" },
        { label: "Transport (350 km)", value: "340 €" },
        { label: "Cartons & emballage", value: "Inclus", highlight: true },
        { label: "Assurance tous risques", value: "320 €" },
      ],
    },
    {
      id: "provider-b",
      providerName: "Déménageur B",
      totalPrice: 1540,
      badge: undefined,
      scoreMoverz: 88,
      scoreLabel: "",
      scores: { financier: 80, juridique: 95, google: 90, reputation: 88, vigilance: 85 },
      starRating: 4.7,
      reviewCount: 189,
      yearsInBusiness: 9,
      hasWebsite: true,
      recommended: true,
      lineItems: [
        { label: "Main d'œuvre", value: "780 €" },
        { label: "Transport (350 km)", value: "360 €" },
        { label: "Cartons & emballage", value: "200 €" },
        { label: "Assurance tous risques", value: "200 €" },
      ],
    },
    {
      id: "provider-c",
      providerName: "Déménageur C",
      totalPrice: 1210,
      badge: undefined,
      scoreMoverz: 58,
      scoreLabel: "",
      scores: { financier: 75, juridique: 80, google: 72, reputation: 70, vigilance: 35 },
      starRating: 4.2,
      reviewCount: 45,
      yearsInBusiness: 5,
      hasWebsite: true,
      recommended: true,
      lineItems: [
        { label: "Main d'œuvre", value: "580 €" },
        { label: "Transport (350 km)", value: "310 €" },
        { label: "Cartons & emballage", value: "180 €" },
        { label: "Assurance tous risques", value: "140 €" },
      ],
    },
    {
      id: "provider-d",
      providerName: "Déménageur D",
      totalPrice: 990,
      badge: undefined,
      scoreMoverz: 35,
      scoreLabel: "",
      scores: { financier: 60, juridique: 0, google: 70, reputation: 65, vigilance: 40 },
      starRating: 4.1,
      reviewCount: 18,
      yearsInBusiness: 3,
      hasWebsite: true,
      recommended: false,
      lineItems: [
        { label: "Main d'œuvre", value: "450 €" },
        { label: "Transport (350 km)", value: "280 €" },
        { label: "Cartons & emballage", value: "160 €" },
        { label: "Assurance tous risques", value: "100 €" },
      ],
    },
    {
      id: "provider-e",
      providerName: "Déménageur E",
      totalPrice: 1250,
      badge: undefined,
      scoreMoverz: 47,
      scoreLabel: "",
      scores: { financier: 15, juridique: 95, google: 98, reputation: 92, vigilance: 30 },
      starRating: 4.9,
      reviewCount: 156,
      yearsInBusiness: 8,
      hasWebsite: true,
      recommended: false,
      lineItems: [
        { label: "Main d'œuvre", value: "620 €" },
        { label: "Transport (350 km)", value: "320 €" },
        { label: "Cartons & emballage", value: "170 €" },
        { label: "Assurance tous risques", value: "140 €" },
      ],
    },
  ];

  return providers.map((p) => ({
    ...p,
    scoreLabel: getScoreLabel(p.scoreMoverz, p.recommended),
  }));
}
