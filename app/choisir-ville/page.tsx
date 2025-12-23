import type { Metadata } from "next";
import { CITIES, getCitiesByRegion } from '@/lib/cities';
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = getFullMetadata(
  'choisir-ville',
  "Votre Ville : Lyon, Nice, Marseille... → 5+ Devis Gratuits | Moverz",
  "Sélectionnez votre ville parmi 11 villes en France → Recevez 5+ devis comparables de pros contrôlés · En 3 min · 100% gratuit · 0 spam · Commencez maintenant"
);

export default function ChoisirVillePage() {
  const citiesByRegion = getCitiesByRegion();
  const quoteUrlForCity = (citySlug: string) =>
    `https://devis.moverz.fr/?city_slug=${citySlug}&source=moverz.fr&from=/choisir-ville/`;

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Choisissez votre ville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Choisir ville", href: "/choisir-ville/" }
            ]}
          />
          <div className="mt-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse" />
              Accès direct au comparateur local
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Choisissez votre ville</h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
              Sélectionnez votre ville pour accéder au comparateur local et recevoir 5+ devis de déménageurs contrôlés.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Selection - Style Stripe */}
      <section className="section section-light">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78] mb-3">
              Accès rapide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04163a] mb-4">
              Où déménagez-vous ?
            </h2>
            <p className="text-base text-[#4b5c6b] max-w-2xl mx-auto">
              Chaque ville dispose de son comparateur dédié avec des déménageurs locaux vérifiés.
            </p>
          </div>

          {/* Grid par région - Compact et cliquable */}
          <div className="space-y-8">
            {Object.entries(citiesByRegion).map(([region, cities]) => (
              <div key={region} className="space-y-4">
                {/* Header région */}
                <div className="flex items-center gap-3 px-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20">
                    <svg className="h-4 w-4 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[#04163a]">{region}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#E3E5E8] to-transparent" />
                </div>
                
                {/* Cards villes */}
                <div className="grid gap-3 md:grid-cols-2">
                  {cities.map((city) => (
                    <a
                      key={city.slug}
                      href={quoteUrlForCity(city.slug)}
                      className="group relative overflow-hidden flex items-center justify-between gap-4 rounded-xl border border-[#E3E5E8] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#6BCFCF]/50 hover:-translate-y-0.5"
                    >
                      {/* Filament subtil */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#6BCFCF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 transition-all duration-300 group-hover:scale-110 group-hover:border-[#6BCFCF]/40">
                          <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#04163a] group-hover:text-[#2B7A78] transition-colors">
                            {city.nameCapitalized}
                          </div>
                          <div className="text-xs text-[#6B7280]">{city.description}</div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <svg className="h-5 w-5 text-[#2B7A78] group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Liste alphabétique compacte */}
          <div className="mt-10 relative overflow-hidden rounded-2xl border border-[#E3E5E8] bg-gradient-to-br from-white to-[#FAFBFC] p-8">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/30 via-[#4f46e5]/20 to-[#22c55e]/30" />
            
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-[#04163a] mb-2">Liste alphabétique</h3>
              <p className="text-sm text-[#6B7280]">Toutes nos villes en un coup d'œil</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
              {CITIES.sort((a, b) => a.nameCapitalized.localeCompare(b.nameCapitalized)).map((city) => (
                <a
                  key={city.slug}
                  href={quoteUrlForCity(city.slug)}
                  className="group flex items-center gap-2 text-sm text-[#4b5c6b] hover:text-[#2B7A78] font-medium transition-colors py-1.5"
                >
                  <svg className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{city.nameCapitalized}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA ville non couverte */}
          <div className="mt-8 text-center">
            <div className="inline-block rounded-2xl border border-[#E3E5E8] bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20">
                  <svg className="h-5 w-5 text-[#2B7A78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#04163a]">Votre ville n'est pas listée ?</h3>
              </div>
              <p className="text-sm text-[#4b5c6b] mb-6 max-w-md mx-auto">
                Nous développons de nouvelles villes chaque mois. Manifestez votre intérêt pour accélérer l'ouverture.
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#6BCFCF]/40 bg-white px-6 py-3 text-sm font-semibold text-[#04163a] hover:bg-[#F8F9FA] hover:border-[#6BCFCF]/60 transition-all duration-300"
              >
                <span>Contactez-nous</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


