import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FlowAndIA from "@/components/FlowAndIA";
import VisualProof from "@/components/VisualProof";
import RealStories from "@/components/RealStories";
import TrustSignals from "@/components/TrustSignals";
import QuickFAQ from "@/components/QuickFAQ";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Déménagement : Comparez 5+ Devis en 3 Min (0€, 0 Spam) | Moverz",
  description:
    "✓ 5+ devis comparables ✓ Pros contrôlés (assurances + 0 litige) ✓ Dossier anonyme ✓ 100% gratuit · 2847 clients · Note 4.8/5 → Comparez maintenant",
  alternates: {
    canonical: 'https://moverz.fr/',
  },
  openGraph: {
    title: "Déménagement : Comparez 5+ Devis de Pros Contrôlés | Moverz",
    description: "Note 4.8/5 · 2847 clients · Comparez 5+ devis de déménageurs contrôlés · 100% gratuit · 0 spam · Dossier anonyme",
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
      {/* Widget script externe - chargé une seule fois sur la home */}
      <Script
        src="https://devis.moverz.fr/moverz-widget.js"
        strategy="afterInteractive"
      />
      
      <main className="bg-white">
        {/* Schema Service + AggregateRating pour étoiles Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        
        {/* 1. Hero - Redesigned for clarity and emotion */}
        <Hero />

      {/* 2. How It Works + AI - Interactive timeline */}
      <FlowAndIA />

      {/* 3. Visual Proof - Show the magic moment */}
      <VisualProof />

      {/* 4. Trust Signals - Security and guarantees */}
      <TrustSignals />

      {/* 5. Problem/Solution - Show the pain and the relief */}
      <ProblemSolution />

      {/* 6. Real Stories - Customer testimonials with outcomes */}
      <RealStories />

      {/* 7. Quick FAQ - Remove last objections */}
      <QuickFAQ />

      {/* 8. Final CTA - Stronger emotional hook */}
      <section className="section section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E7EB] p-8 md:p-12 text-center shadow-xl">
              <div className="relative space-y-6">
                <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                  Gratuit · Sans spam · Sans engagement
                </div>
                <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
                  Prêt à déménager<br />sans stress ?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-xl mx-auto">
                  Rejoignez les 1 200+ personnes qui ont simplifié leur déménagement avec Moverz.
                </p>
                <div className="pt-2">
                  <a
                    href="https://devis.moverz.fr/?source=moverz.fr&from=/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg hover:bg-[#1E293B] transition-colors"
                  >
                    <span>Commencer mon déménagement</span>
                    <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Sticky CTA global */}
        <StickyCTA />
      </main>
    </>
  );
}

