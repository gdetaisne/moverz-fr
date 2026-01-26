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
import { HowToChoose } from "@/components/home/HowToChoose";

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
  // Schema Organization + AggregateRating pour afficher les étoiles dans Google
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Moverz",
    "url": "https://moverz.fr",
    "logo": "https://moverz.fr/logo.png",
    "description": "Comparateur de devis de déménageurs contrôlés. Service gratuit, sans démarchage, 3 devis minimum comparables.",
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
    }
  };

  // FAQ Schema pour rich snippets Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte un déménagement avec Moverz ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dès 450€ minimum. Recevez 3+ devis comparables en 48h pour comparer les prix. L'IA calcule votre volume précis pour éviter tout écart prix le jour J."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de devis vais-je recevoir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3+ devis minimum de déménageurs contrôlés et assurés. Tous les devis sont comparables car basés sur le même volume calculé par IA."
        }
      },
      {
        "@type": "Question",
        "name": "En combien de temps je reçois les devis ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "48 heures maximum. Dossier anonyme, aucun harcèlement téléphonique."
        }
      },
      {
        "@type": "Question",
        "name": "C'est vraiment gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, 100% gratuit. Aucun frais caché. Les déménageurs nous rémunèrent uniquement s'ils décrochent votre déménagement."
        }
      },
      {
        "@type": "Question",
        "name": "Comment l'IA calcule-t-elle le volume ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous prenez des photos de vos pièces. L'IA analyse et calcule le volume en m³ avec 90-95% de précision. Cela garantit des devis comparables et évite les écarts de prix le jour J."
        }
      }
    ]
  };

  // short FAQ retirée de la home pour alléger la page (FAQ complète sur /faq)

  return (
    <>
      <main className="bg-white">
        {/* Schema Organization + AggregateRating pour étoiles Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Schema FAQ pour rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

      {/* 6. Comment choisir un bon déménageur (featured snippet) */}
      <HowToChoose />

      {/* 7. FAQ + CTA final */}
      <QuickFAQ />
      <FinalCTA />

        {/* Sticky CTA global */}
        <StickyCTA />
      </main>
    </>
  );
}

