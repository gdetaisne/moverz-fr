import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PhotoChecklist from "@/components/PhotoChecklist";
import WhatYouReceive from "@/components/WhatYouReceive";
import ProblemSolution from "@/components/ProblemSolution";
import FlowAndIA from "@/components/FlowAndIA";
import RealStories from "@/components/RealStories";
import TrustSignals from "@/components/TrustSignals";
import QuickFAQ from "@/components/QuickFAQ";
import StickyCTA from "@/components/StickyCTA";
import FinalCTA from "@/components/FinalCTA";
import ProCTA from "@/components/ProCTA";
import WhyMoverz from "@/components/WhyMoverz";

export const metadata: Metadata = {
  title: "Déménagement : Comparez 3 à 5 devis en 3 min (0€, 0 spam) | Moverz",
  description:
    "✓ 3 à 5 devis comparables ✓ Pros contrôlés (assurances + 0 litige) ✓ Dossier anonyme ✓ 100% gratuit · 2847 clients · Note 4.8/5 → Comparez maintenant",
  alternates: {
    canonical: 'https://moverz.fr/',
  },
  openGraph: {
    title: "Déménagement : Comparez 3 à 5 devis de pros contrôlés | Moverz",
    description: "Note 4.8/5 · 2847 clients · Comparez 3 à 5 devis de déménageurs contrôlés · 100% gratuit · 0 spam · Dossier anonyme",
    url: 'https://moverz.fr/',
    siteName: 'Moverz',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Home() {
  // Schema AggregateRating pour afficher les étoiles dans Google
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Moverz - Comparateur de Déménagement",
    "description": "Comparateur de devis de déménageurs contrôlés. Service gratuit, 0 spam, devis comparables.",
    "url": "https://moverz.fr",
    "provider": {
      "@type": "Organization",
      "name": "Moverz",
      "url": "https://moverz.fr"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Service gratuit de comparaison de devis de déménagement"
    }
  };

  // short FAQ retirée de la home pour alléger la page (FAQ complète sur /faq)

  return (
    <>
      <main className="bg-white">
        {/* Schema Service + AggregateRating pour étoiles Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        
        {/* 1. Hero - Redesigned for clarity and emotion */}
        <Hero />

      {/* 2. Photo Checklist - Les 6 photos indispensables */}
      <PhotoChecklist />

      {/* 3. What You Receive - Mockup des devis comparables */}
      <WhatYouReceive />

      {/* 4. How It Works + AI - Interactive timeline */}
      <FlowAndIA />

      {/* 5. Trust Signals - Security and guarantees */}
      <TrustSignals />

      {/* 6. Why Moverz - Storytelling (photos = devis comparables) */}
      <WhyMoverz />

      {/* 7. Problem/Solution - Show the pain and the relief */}
      <ProblemSolution />

      {/* 8. Real Stories - Customer testimonials with outcomes */}
      <RealStories />

      {/* 9. Quick FAQ - Remove last objections */}
      <QuickFAQ />

      {/* 10. Final CTA - Enhanced with animation */}
      <FinalCTA />

      {/* 11. Pro CTA - For movers (SaaS positioning) */}
      <ProCTA />

        {/* Sticky CTA global */}
        <StickyCTA />
      </main>
    </>
  );
}

