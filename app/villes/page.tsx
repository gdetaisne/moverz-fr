import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CITIES, getCitiesByRegion } from "@/lib/cities";

export const metadata: Metadata = getFullMetadata(
  'villes',
  "11 Villes en France : Déménagement Lyon, Nice, Marseille... | Moverz",
  "Déménagez à Lyon, Nice, Marseille, Toulouse, Bordeaux, Nantes... → Comparez 5+ devis de pros contrôlés en 3 min · Service 100% gratuit, sans spam · Choisissez votre ville"
);

export default function VillesPage() {
  const citiesByRegion = getCitiesByRegion();

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Villes couvertes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" }
            ]}
          />
          <div className="mt-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse" />
              Disponible partout en France
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Villes principales couvertes par Moverz</h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
              Ces 11 grandes villes disposent d’un comparateur local dédié. Pour les autres villes de France,
              vous pouvez aussi utiliser Moverz en sélectionnant vos adresses précises lors de la demande de devis.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid - Style Stripe moderne */}
      <section className="section section-light">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78] mb-3">
              Notre couverture nationale
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04163a] mb-4">
              Comparez dans toute la France
            </h2>
            <p className="text-base md:text-lg text-[#4b5c6b] max-w-2xl mx-auto">
              Moverz est disponible partout en France. Ces villes ont un comparateur local dédié avec des déménageurs contrôlés.
            </p>
          </div>

          {/* Grid par région */}
          <div className="space-y-12">
            {Object.entries(citiesByRegion).map(([region, cities]) => (
              <div key={region} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E3E5E8] to-transparent" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#6B7280]">{region}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E3E5E8] to-transparent" />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {cities.map((city, index) => (
                    <a
                      key={city.slug}
                      href={`/demenagement/${city.slug}/`}
                      className="group relative overflow-hidden rounded-2xl border border-[#E3E5E8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#6BCFCF]/40"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      {/* Gradient subtil au hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
                      
                      {/* Badge filament en haut */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/0 via-[#6BCFCF]/60 to-[#6BCFCF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 transition-all duration-300 group-hover:scale-110 group-hover:border-[#6BCFCF]/40">
                              <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-[#04163a] group-hover:text-[#2B7A78] transition-colors">
                                {city.nameCapitalized}
                              </h4>
                              <p className="text-xs text-[#6B7280]">{city.region}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#4b5c6b] leading-relaxed mb-4">
                            {city.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-sm font-semibold text-[#2B7A78]">
                            <span>Accéder au comparateur</span>
                            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Ville non couverte */}
          <div className="mt-12 text-center">
            <div className="inline-block rounded-2xl border border-[#E3E5E8] bg-gradient-to-br from-white to-[#F8F9FA] p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20">
                  <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#04163a]">Votre ville n'est pas dans la liste ?</h3>
              </div>
              <p className="text-sm text-[#4b5c6b] mb-6 max-w-xl">
                Nous ajoutons régulièrement de nouvelles villes. Contactez-nous pour manifester votre intérêt.
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#6BCFCF]/40 bg-white px-6 py-3 text-sm font-semibold text-[#04163a] hover:bg-[#F8F9FA] hover:border-[#6BCFCF]/60 transition-all duration-300"
              >
                <span>Nous contacter</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            5+ devis · 0 spam · 100% gratuit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Prêt à comparer vos devis ?
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Choisissez votre ville et lancez votre comparateur en quelques clics.
          </p>
          <a
            href="/choisir-ville/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Comparez 5+ devis gratuitement</span>
            <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

