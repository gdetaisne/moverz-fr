/**
 * Calcul de devis simulés pour la ComparisonPreview
 * Fintech Premium Design System
 */

export interface QuoteLineItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface MockQuote {
  id: string;
  providerName: string;
  totalPrice: number;
  badge?: "best" | "verified";
  lineItems: QuoteLineItem[];
}

interface ComputeMockQuotesInput {
  fromCity?: string;
  toCity?: string;
  areaM2?: number;
}

/**
 * Génère 3 devis simulés basés sur les données utilisateur
 */
export function computeMockQuotes({
  fromCity,
  toCity,
  areaM2,
}: ComputeMockQuotesInput): MockQuote[] {
  // Calcul de la surface (par défaut 50m²)
  const area = areaM2 || 50;

  // Calcul de la distance
  const isDifferentCities =
    fromCity && toCity && fromCity.toLowerCase() !== toCity.toLowerCase();
  const distanceFee = isDifferentCities ? 450 + Math.random() * 450 : 100; // 450-900€ ou 100€
  const distanceKm = isDifferentCities ? 350 : 15;

  // Coefficients par m² pour chaque deviseur
  const coefficients = [22, 25, 28];

  const providers = [
    { id: "provider-a", name: "DéménagePro", badge: "best" as const },
    { id: "provider-b", name: "MoveFast", badge: "verified" as const },
    { id: "provider-c", name: "TransportPlus", badge: undefined },
  ];

  return providers.map((provider, index) => {
    const coef = coefficients[index];
    const basePrice = area * coef;
    const laborCost = Math.round(basePrice * 0.6);
    const transportCost = Math.round(distanceFee);
    const packingCost = index === 0 ? 0 : Math.round(area * 3); // Provider A inclut cartons
    const insuranceCost = index === 1 ? 0 : Math.round(basePrice * 0.05); // Provider B inclut assurance
    const totalPrice = laborCost + transportCost + packingCost + insuranceCost;

    return {
      id: provider.id,
      providerName: provider.name,
      totalPrice,
      badge: provider.badge,
      lineItems: [
        {
          label: "Main d'œuvre",
          value: `${laborCost.toLocaleString("fr-FR")} €`,
        },
        {
          label: `Transport (${distanceKm} km)`,
          value: `${transportCost.toLocaleString("fr-FR")} €`,
        },
        {
          label: "Cartons & emballage",
          value: packingCost === 0 ? "Inclus" : `${packingCost.toLocaleString("fr-FR")} €`,
          highlight: packingCost === 0,
        },
        {
          label: "Assurance tous risques",
          value:
            insuranceCost === 0 ? "Inclus" : `${insuranceCost.toLocaleString("fr-FR")} €`,
          highlight: insuranceCost === 0,
        },
      ],
    };
  });
}
