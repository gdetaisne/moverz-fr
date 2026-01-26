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
import WhyMoverz from "@/components/WhyMoverz";

export const metadata: Metadata = {
  title: "Déménagement France dès 450€ | 3+ Devis 48h | Contrôlés",
  description:
    "450€ minimum. Recevez 3+ devis comparables en 48h. IA calcule volume = 0 écart prix jour J. Dossier anonyme, 0 harcèlement. 1200+ déménagements ⭐4.9/5. Gratuit.",
  alternates: {
    canonical: 'https://moverz.fr/',
  },
  openGraph: {
    title: "Déménagement France dès 450€ | 3+ Devis 48h | Contrôlés",
    description: "450€ minimum. Recevez 3+ devis comparables en 48h. IA calcule volume = 0 écart prix jour J. Dossier anonyme, 0 harcèlement. 1200+ déménagements ⭐4.9/5. Gratuit.",
    url: 'https://moverz.fr/',
    siteName: 'Moverz',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Moverz - Déménagement dès 450€ · 3+ devis comparables 48h · Note 4.9/5' }],
    type: 'website',
  },
};

export default function Home() {
  // Schema AggregateRating pour afficher les étoiles dans Google
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Moverz - Comparateur de Déménagement",
    "description": "Comparateur de devis de déménageurs contrôlés. Service gratuit, sans démarchage, 3 devis minimum comparables.",
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

      {/* 6. FAQ + CTA final */}
      <QuickFAQ />
      <FinalCTA />

        {/* Sticky CTA global */}
        <StickyCTA />
      </main>
    </>
  );
}

