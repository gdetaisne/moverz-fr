import { JsonLd } from "./JsonLd";
import type { Service } from "schema-dts";

interface ServiceSchemaProps {
  /** Nom de la ville (ex: "Paris") */
  cityName: string;
  /** Slug de la ville (ex: "paris") */
  citySlug: string;
  /** Fourchette de prix (ex: "450€-2500€") */
  priceRange: string;
}

/**
 * Service schema pour pages ville - Local SEO
 * 
 * Optimisations SEO :
 * - Visibilité recherches locales "déménageur {Ville}"
 * - areaServed structuré (City + Country)
 * - priceRange indicatif pour transparence
 * - Référence Organization via provider
 * 
 * Impact attendu : +10-15% CTR recherches locales
 * 
 * Usage :
 * <ServiceSchema
 *   cityName="Paris"
 *   citySlug="paris"
 *   priceRange="450€-2500€"
 * />
 */
export function ServiceSchema({
  cityName,
  citySlug,
  priceRange,
}: ServiceSchemaProps) {
  const data: Service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Comparateur de déménagement",
    name: `Comparateur Déménagement ${cityName}`,
    description: `Recevez 5+ devis comparés pour votre déménagement à ${cityName}. Déménageurs contrôlés, 0 harcèlement, 100% gratuit.`,
    provider: { "@id": "https://moverz.fr/#organization" },
    areaServed: {
      "@type": "City",
      name: cityName,
      addressCountry: "FR",
    },
    priceRange,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://moverz.fr/demenagement/${citySlug}/`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Particuliers et entreprises",
    },
    termsOfService: "https://moverz.fr/cgu/",
  };

  return <JsonLd id={`service-schema-${citySlug}`} data={data} />;
}
