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
import { WhyMoverz } from "@/components/sections/WhyMoverz";
import { CreditsafeChapter } from "@/components/sections/CreditsafeChapter";
import { TestimonialV4 } from "@/components/sections/TestimonialV4";
import { FAQV4 } from "@/components/sections/FAQV4";
import { FinalCTAV4 } from "@/components/sections/FinalCTAV4";
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
      <HeroV4TwoColumn />
      <WhyMoverz />
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
