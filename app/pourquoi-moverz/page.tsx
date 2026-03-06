import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { JsonLd } from "@/components/schema/JsonLd";
import PourquoiMoverzContent from "./PourquoiMoverzContent";

export const metadata: Metadata = getFullMetadata(
  'pourquoi-moverz',
  "Pourquoi Moverz ? Comparateur de déménagement vérifiés, zéro harcèlement",
  "Moverz vérifie chaque déménageur (solidité financière, juridique, avis Google) avant de vous présenter des devis comparables. Dossier anonyme, zéro appel non sollicité. Gratuit."
);

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://moverz.fr/pourquoi-moverz/",
  name: "Pourquoi Moverz ? Comparateur de déménagement vérifiés, zéro harcèlement",
  description: "Moverz vérifie chaque déménageur (solidité financière, juridique, avis Google) avant de vous présenter des devis comparables.",
  url: "https://moverz.fr/pourquoi-moverz/",
  inLanguage: "fr-FR",
  isPartOf: { "@id": "https://moverz.fr/#website" },
  about: { "@id": "https://moverz.fr/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://moverz.fr/" },
      { "@type": "ListItem", position: 2, name: "Pourquoi Moverz ?", item: "https://moverz.fr/pourquoi-moverz/" },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://moverz.fr/pourquoi-moverz/#service",
  name: "Comparateur de déménagement Moverz",
  description: "Comparateur de déménagement qui vérifie chaque partenaire (3 analyses de risque /100 : avis Google, financier, juridique). Dossier anonyme, zéro harcèlement, 100% gratuit.",
  provider: { "@id": "https://moverz.fr/#organization" },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Comparateur de déménagement",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

export default function PourquoiMoverzPage() {
  return (
    <>
      <JsonLd id="pourquoi-webpage-schema" data={webPageSchema} />
      <JsonLd id="pourquoi-service-schema" data={serviceSchema} />
      <PourquoiMoverzContent />
    </>
  );
}
