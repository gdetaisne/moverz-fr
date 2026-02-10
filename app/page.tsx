import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhatYouReceive from "@/components/WhatYouReceive";
import ProblemSolution from "@/components/ProblemSolution";
import FlowAndIA from "@/components/FlowAndIA";
import RealStories from "@/components/RealStories";
import TrustSignals from "@/components/TrustSignals";
import QuickFAQ from "@/components/QuickFAQ";
import StickyCTA from "@/components/StickyCTA";
import FinalCTA from "@/components/FinalCTA";
import WhyMoverz from "@/components/WhyMoverz";
import { HowToChoose } from "@/components/home/HowToChoose";
import ProBanner from "@/components/home/ProBanner";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { HOME_FAQS } from "@/components/home/homeFaqs";

export const metadata: Metadata = {
  title: "Comparateur Déménagement | Devis 5–7j | Contrôlés · Gratuit",
  description:
    "Comparez des devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
  alternates: {
    canonical: 'https://moverz.fr/',
  },
  openGraph: {
    title: "Comparateur Déménagement | Devis 5–7j | Contrôlés · Gratuit",
    description: "Comparez des devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
    url: 'https://moverz.fr/',
    siteName: 'Moverz',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Moverz - Comparateur Déménagement · Devis 5–7j · Contrôlés · Gratuit · Note 4.9/5' }],
    type: 'website',
  },
};

export default function Home() {
  // short FAQ retirée de la home pour alléger la page (FAQ complète sur /faq)

  return (
    <>
      <main className="bg-white">
        {/* WebPage schema: contexte homepage */}
        <WebPageSchema
          name="Comparateur Déménagement | Devis 5–7j | Contrôlés · Gratuit"
          description="Comparez des devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit."
          url="https://moverz.fr/"
          about="Comparateur de déménagement"
        />
        
        {/* FAQ JSON-LD: single source of truth with the visible home FAQ */}
        <FAQSchema faqs={HOME_FAQS} />
        
        {/* 1. Hero - Promesse + CTA + Preuves */}
        <Hero />

      {/* 2. Comment ça marche - 3 étapes compactes (FlowAndIA) */}
      <FlowAndIA />

      {/* 3. Pourquoi c'est sûr - Creditsafe + déménageurs vérifiés + WhatsApp */}
      <WhyMoverz />

      {/* 4. Ce que vous recevez - Devis comparables + exemple */}
      <WhatYouReceive />

      {/* 5. Social proof - Notes + Témoignages + Chiffres */}
      <RealStories />

      {/* 6. Comment choisir un bon déménageur (featured snippet) */}
      <HowToChoose />

      {/* 7. FAQ */}
      <QuickFAQ />

      {/* 8. Banner Pro (déménageurs) */}
      <ProBanner />

      {/* 9. CTA final */}
      <FinalCTA />

        {/* Sticky CTA global */}
        <StickyCTA />
      </main>
    </>
  );
}

