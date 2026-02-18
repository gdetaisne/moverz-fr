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
  /** Solidité de l'entreprise (financier + juridique) */
  solidite: number;
  /** Expérience client vérifiée (Google + réputation) */
  experience: number;
  /** Vigilance & signaux d'alerte */
  vigilance: number;
}

export interface MockQuote {
  id: string;
  providerName: string;
  totalPrice: number;
  badge?: "best" | "verified";
  lineItems: QuoteLineItem[];
  scoreMoverz: number;
  scoreLabel: string;
  scores: MoverScores;
  starRating: number;
  reviewCount: number;
  yearsInBusiness: number;
  hasWebsite: boolean;
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
 * 5 devis simulés classés par recommandation (gauche = meilleur).
 *
 * 1. Déménageur A — 1 340 €, Excellent
 * 2. Déménageur B — 1 540 €, Excellent
 * 3. Déménageur C — 1 210 €, Moyen (vigilance faible)
 * 4. Déménageur D —   990 €, Non recommandé (solidité 0)
 * 5. Déménageur E — 1 250 €, Non recommandé (solidité très basse)
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
      scores: { solidite: 90, experience: 95, vigilance: 92 },
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
      scores: { solidite: 85, experience: 90, vigilance: 88 },
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
      scores: { solidite: 78, experience: 72, vigilance: 35 },
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
      scores: { solidite: 0, experience: 70, vigilance: 40 },
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
      scores: { solidite: 15, experience: 95, vigilance: 30 },
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
