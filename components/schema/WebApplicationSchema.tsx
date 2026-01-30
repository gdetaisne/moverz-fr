import { JsonLd } from "./JsonLd";
import type { WebApplication } from "schema-dts";
import { env } from "@/lib/env";

interface WebApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

/**
 * WebApplication Schema Component
 * 
 * Usage: Pour les outils interactifs (calculateur volume, comparateur)
 * Boost CTR via rich snippets "Application Web" avec note + prix
 * 
 * Exemple: Calculateur volume déménagement
 */
export function WebApplicationSchema({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem = "All",
  offers,
  aggregateRating,
}: WebApplicationSchemaProps) {
  const baseUrl = env.SITE_URL.replace(/\/$/, "");
  const organizationId = `${baseUrl}/#organization`;

  const webAppData: WebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: name,
    description: description,
    url: url,
    applicationCategory: applicationCategory,
    operatingSystem: operatingSystem,
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    inLanguage: "fr-FR",
    offers: offers
      ? {
          "@type": "Offer",
          price: offers.price,
          priceCurrency: offers.priceCurrency,
        }
      : undefined,
    aggregateRating: aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: aggregateRating.ratingValue,
          reviewCount: aggregateRating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };

  return <JsonLd id={`webapp-schema-${name.replace(/\s/g, "-")}`} data={webAppData} />;
}
