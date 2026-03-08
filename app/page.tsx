/**
 * MOVERZ HOMEPAGE V4 RADICAL
 * 
 * Architecture finale :
 * 1. Hero product-first (form + comparison table)
 * 2. "Des devis détaillés et comparables" (mockup iPhone + contenu)
 * 3. "Voyez exactement ce que vous comparez" (tableau comparatif)
 * 4. Chapitre dark unique : Creditsafe + Dossier + Suivi
 * 5. Témoignage humain fort (1 seule citation)
 * 6. FAQ
 *
 * Formulaire : logique métier intacte (Zod + redirect devis.moverz.fr)
 * Motion : fadeUp uniquement
 * Un seul chapitre dark (CreditsafeChapter)
 */

import type { Metadata } from "next";
import { HeroV4TwoColumn } from "@/components/sections/HeroV4TwoColumn";
import { ComparableQuotesMockScrolly } from "@/components/sections/ComparableQuotesMockScrolly";
import { CreditsafeChapter } from "@/components/sections/CreditsafeChapter";
import { TestimonialV4 } from "@/components/sections/TestimonialV4";
import { FAQV4 } from "@/components/sections/FAQV4";
import { FinalCTAV4 } from "@/components/sections/FinalCTAV4";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import dynamic from "next/dynamic";

// Lazy load uniquement StickyCTA (non-critique, client-only)
const StickyCTA = dynamic(() => import("@/components/StickyCTA"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Vous déménagez, on compare : 3-5 Devis Sans Stress | Moverz",
  description:
    "✓ On centralise tout (1 seul contact) ✓ 0 harcèlement ✓ Pros certifiés finances/assurance contrôlées · 3-5 devis comparables · Note 4.9/5 · 3 min · Gratuit",
  alternates: {
    canonical: 'https://moverz.fr/',
  },
  openGraph: {
    title: "Vous déménagez, on compare : 3-5 Devis Sans Stress",
    description: "✓ On centralise tout (1 seul contact) ✓ 0 harcèlement ✓ Pros certifiés finances/assurance contrôlées · 3-5 devis comparables · Note 4.9/5 · 3 min · Gratuit",
    url: 'https://moverz.fr/',
    siteName: 'Moverz',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Moverz - Comparateur de déménagement anti-arnaque · Note 4.9/5' }],
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <WebPageSchema
        name="Comparateur de déménagement sans démarchage — Devis gratuits"
        description="Comparez 3 à 5 devis de déménageurs vérifiés (finances + juridique + avis). Dossier 100% anonyme, zéro appel non sollicité, 100% gratuit."
        url="https://moverz.fr/"
        about="Comparateur de déménagement"
      />
      <JsonLd
        id="service-schema-homepage"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Comparateur de déménagement",
          name: "Moverz — Comparateur de déménagement sans démarchage",
          description: "Comparez 3 à 5 devis de déménageurs vérifiés (finances + juridique + avis Google). Dossier 100% anonyme, zéro appel non sollicité, gratuit.",
          provider: { "@id": "https://moverz.fr/#organization" },
          areaServed: { "@type": "Country", name: "France" },
          audience: { "@type": "Audience", audienceType: "Particuliers" },
          termsOfService: "https://moverz.fr/cgu/",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            description: "Service 100% gratuit pour les particuliers",
          },
        }}
      />
      <HeroV4TwoColumn />
      <ComparableQuotesMockScrolly />
      <CreditsafeChapter />
      <TestimonialV4 />
      <FAQV4 />
      <FinalCTAV4 />
      
      {/* Sticky CTA - Mobile uniquement */}
      <StickyCTA />
    </>
  );
}
