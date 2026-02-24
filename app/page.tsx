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

import { HeroV4TwoColumn } from "@/components/sections/HeroV4TwoColumn";
import { ComparableQuotesMockScrolly } from "@/components/sections/ComparableQuotesMockScrolly";
import { WhyMoverz } from "@/components/sections/WhyMoverz";
import { CreditsafeChapter } from "@/components/sections/CreditsafeChapter";
import { TestimonialV4 } from "@/components/sections/TestimonialV4";
import { FAQV4 } from "@/components/sections/FAQV4";
import dynamic from "next/dynamic";

const StickyCTA = dynamic(() => import("@/components/StickyCTA"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroV4TwoColumn />
      <WhyMoverz />
      <ComparableQuotesMockScrolly />
      <CreditsafeChapter />
      <TestimonialV4 />
      <FAQV4 />
      
      {/* Sticky CTA - Desktop + Mobile */}
      <StickyCTA />
    </>
  );
}
