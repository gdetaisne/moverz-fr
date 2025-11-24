import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyMoverz from "@/components/WhyMoverz";
import ProofStrip from "@/components/ProofStrip";
import Testimonials from "@/components/Testimonials";
import CitiesGrid from "@/components/CitiesGrid";
import StickyCTA from "@/components/StickyCTA";
import FAQAccordion from "@/components/FAQAccordion";

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

  const shortFaq = [
    {
      q: "Comment fonctionne le comparateur ?",
      a: "Vous créez un seul dossier avec votre inventaire, celui-ci est standardisé et envoyé à 5+ déménageurs contrôlés qui vous envoient leurs devis basés sur le même inventaire. Résultat : des devis enfin comparables.",
    },
    {
      q: "Les déménageurs sont-ils fiables ?",
      a: "Oui, nous vérifions leur solvabilité, leurs assurances, et analysons leur historique de litiges et avis clients. Seuls les pros fiables et bien notés reçoivent votre dossier.",
    },
    {
      q: "Est-ce que je vais être harcelé par téléphone ?",
      a: "Non, votre dossier reste anonyme. Les déménageurs reçoivent votre demande et vous envoient leurs devis par email via notre plateforme. Vous décidez vous-même qui contacter et quand.",
    },
    {
      q: "C'est vraiment gratuit ?",
      a: "Oui, notre service est entièrement gratuit pour vous, sans engagement. Nous sommes rémunérés par les déménageurs partenaires lorsque vous choisissez l'un d'entre eux.",
    },
  ];

  return (
    <main className="bg-hero">
      {/* Schema Service + AggregateRating pour étoiles Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="halo" />
      
      {/* Hero */}
      <Hero />

      {/* How it works */}
      <section className="section section-light">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      {/* Why Moverz */}
      <section className="section section-contrast">
        <div className="container">
          <WhyMoverz />
        </div>
      </section>

      {/* Proof Strip */}
      <section className="section section-light">
        <div className="container">
          <ProofStrip />
        </div>
      </section>

      {/* Cities Grid */}
      <CitiesGrid />

      {/* Testimonials */}
      <section className="section section-contrast">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light">
        <div className="container space-y-8">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
              Questions fréquentes
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#04163a]">
              Vous avez des questions ?
            </h2>
            <p className="text-[#4b5c6b] max-w-2xl mx-auto text-sm md:text-base">
              Voici les réponses aux questions les plus fréquentes sur Moverz.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={shortFaq} />
          </div>
          <div className="text-center pt-6">
            <a
              href="/faq/"
              className="group inline-flex items-center gap-2 rounded-2xl border-2 border-[#E3E5E8] bg-white px-6 py-3 text-sm md:text-base font-medium text-[#04163a] hover:bg-[#F8F9FA] hover:border-[#6BCFCF]/40 transition-all duration-300"
            >
              <span>Voir toutes les questions</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-contrast">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#04163A] via-[#05243f] to-[#0b3b46] p-6 md:p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                  Sans engagement · 0 spam · 5+ devis fiables
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Lancer mon comparateur de devis
                </h2>
                <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto">
                  Pour votre déménagement en France, obtenez des devis alignés sur la même base, sans appels commerciaux non souhaités.
                </p>
                <a href="/choisir-ville/" className="btn-primary">
                  Lancer mon comparateur de devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </main>
  );
}

