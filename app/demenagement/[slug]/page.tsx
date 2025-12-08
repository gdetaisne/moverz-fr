import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityReviewsBySlug } from "@/lib/city-reviews";
import { CityHero } from "@/components/city/CityHero";
import { CityStats } from "@/components/city/CityStats";
import { CityPricing } from "@/components/city/CityPricing";
import { CityFinalCTA } from "@/components/city/CityFinalCTA";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return {};
  }

  const path = `demenagement/${city.slug}`;
  const title = `Déménagement ${city.nameCapitalized} : 5+ Devis en 3 Min | IA Moverz`;
  const description = `3 min · IA calcule le volume · 5+ devis comparables · Déménageurs locaux contrôlés à ${city.nameCapitalized} · 0€ · 0 spam`;

  return getFullMetadata(path, title, description);
}

export default function CityMovingPage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    notFound();
    return null;
  }

  const quoteUrl = `https://devis.moverz.fr/?city_slug=${city.slug}&source=moverz.fr&from=/demenagement/${city.slug}/`;

  return (
    <main className="bg-white">
      {/* Hero */}
      <CityHero city={city} quoteUrl={quoteUrl} />

      {/* Stats locales */}
      <CityStats cityName={city.nameCapitalized} />

      {/* Prix indicatifs */}
      <CityPricing cityName={city.nameCapitalized} />

      {/* Avis clients - Ultra simplifié */}
      <section className="section section-contrast">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Avis clients
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
              Ça marche vraiment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {getCityReviewsBySlug(city.slug).map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              >
                <p className="text-sm text-white/80 mb-4">"{review.text}"</p>
                <div className="text-xs">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-white/60">{review.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ultra-courte */}
      <section className="section section-light">
        <div className="container max-w-3xl">
          <div className="text-center mb-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Questions fréquentes
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
              FAQ {city.nameCapitalized}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Combien de temps à l'avance pour déménager à {city.nameCapitalized} ?
              </h3>
              <p className="text-sm text-[#6B7280]">
                Idéalement 4–8 semaines avant, surtout en haute saison. Plus tôt = plus de choix de prix.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Les déménageurs font une visite technique ?
              </h3>
              <p className="text-sm text-[#6B7280]">
                Pour les gros volumes ou accès complexes, oui. Sinon, vos photos suffisent souvent.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Moverz est vraiment gratuit ?
              </h3>
              <p className="text-sm text-[#6B7280]">
                Oui. On est rémunérés par les déménageurs, pas par vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CityFinalCTA cityName={city.nameCapitalized} quoteUrl={quoteUrl} />
    </main>
  );
}
