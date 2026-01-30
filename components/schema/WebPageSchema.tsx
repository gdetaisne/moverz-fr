import { JsonLd } from "./JsonLd";
import type { WebPage } from "schema-dts";

interface WebPageSchemaProps {
  /** Titre de la page (ex: "Déménagement Paris") */
  name: string;
  /** Description courte */
  description: string;
  /** URL canonique complète */
  url: string;
  /** ID du BreadcrumbList si présent (ex: "breadcrumb-schema-abc123") */
  breadcrumbId?: string;
  /** Sujet principal (ex: "Déménagement à Paris") */
  about?: string;
}

/**
 * WebPage schema - Contexte de page pour Google + LLM
 * 
 * Optimisations SEO :
 * - Lie la page au WebSite global via `isPartOf`
 * - Référence le BreadcrumbList pour hiérarchie claire
 * - Définit le sujet principal via `about` (Thing)
 * - Support multilingue via `inLanguage`
 * 
 * Usage typique :
 * <WebPageSchema
 *   name="Déménagement Paris"
 *   description="Recevez 5+ devis comparés..."
 *   url="https://moverz.fr/demenagement/paris/"
 *   breadcrumbId="breadcrumb-schema-xyz"
 *   about="Déménagement à Paris"
 * />
 */
export function WebPageSchema({
  name,
  description,
  url,
  breadcrumbId,
  about,
}: WebPageSchemaProps) {
  const data: WebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    name,
    description,
    url,
    isPartOf: { "@id": "https://moverz.fr/#website" },
    ...(breadcrumbId && {
      breadcrumb: { "@id": breadcrumbId },
    }),
    ...(about && {
      about: { "@type": "Thing", name: about },
    }),
    inLanguage: "fr-FR",
  };

  return <JsonLd id="webpage-schema" data={data} />;
}
