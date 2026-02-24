import type { Metadata } from "next";
import { getHubMetadata } from "@/lib/seo/metadata";
import PageHero from "@/components/PageHero";
import { CITIES, getCitiesByRegion } from "@/lib/cities";
import { FinalCTAV4 } from "@/components/sections/FinalCTAV4";

export const metadata: Metadata = getHubMetadata({
  path: "villes",
  title: "Déménagement partout en France — des devis comparables",
  description:
    "Annuaire des villes couvertes par Moverz. Trouvez votre guide local et Comparez des devis comparables (dossier anonyme, sans harcèlement).",
});

export default function VillesPage() {
  const citiesByRegion = getCitiesByRegion();
  const totalPages = Math.max(1, Math.ceil(CITIES.length / 60));

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Villes", href: "/villes/" },
        ]}
        eyebrow="Couverture nationale"
        title="Déménagement partout en France"
        subtitle="Moverz fonctionne dans toute la France. Explorez nos villes principales (guides dédiés) et lancez le comparateur, même si votre ville n'est pas listée."
        primaryCta={{
          label: "Voir mes 3 meilleurs devis",
          href: "https://devis.moverz.fr/devis-gratuits",
        }}
        secondaryCta={{ label: "Annuaire complet (paginé)", href: "/villes/page/1/" }}
      />

      {/* Cities Grid - Style Stripe moderne */}
      <section className="section section-light">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent mb-3">
              Notre couverture nationale
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text mb-4">
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
                  <h3 className="text-sm font-bold uppercase tracking-wider text-v4-text-secondary">{region}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E3E5E8] to-transparent" />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {cities.map((city, index) => (
                    <a
                      key={city.slug}
                      href={`/demenagement/${city.slug}/`}
                      className="group relative overflow-hidden rounded-2xl border border-v4-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-v4-accent/40"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      {/* Gradient subtil au hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
                      
                      {/* Badge filament en haut */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-turquoise/0 via-[#6BCFCF]/60 to-brand-turquoise/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-turquoise/10 to-[#4FB8B8]/20 border border-brand-turquoise-200 transition-all duration-300 group-hover:scale-110 group-hover:border-v4-accent/40">
                              <svg className="h-5 w-5 text-v4-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-v4-text group-hover:text-v4-accent transition-colors">
                                {city.nameCapitalized}
                              </h4>
                              <p className="text-xs text-v4-text-secondary">{city.region}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#4b5c6b] leading-relaxed mb-4">
                            {city.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-sm font-semibold text-v4-accent">
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
            <div className="inline-block rounded-2xl border border-v4-border bg-gradient-to-br from-white to-[#F8F9FA] p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-turquoise/10 to-[#4FB8B8]/20">
                  <svg className="h-5 w-5 text-v4-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-v4-text">Votre ville n'est pas dans la liste ?</h3>
              </div>
              <p className="text-sm text-[#4b5c6b] mb-6 max-w-xl">
                Nous ajoutons régulièrement de nouvelles villes. Contactez-nous pour manifester votre intérêt.
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-v4-accent/40 bg-white px-6 py-3 text-sm font-semibold text-v4-text hover:bg-[#F8F9FA] hover:border-v4-accent/60 transition-all duration-300"
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

      {/* Pagination annuaire */}
      <section className="section section-light">
        <div className="container max-w-4xl text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent">
            Annuaire
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-v4-text">
            Toutes les villes (paginé)
          </h2>
          <p className="text-sm text-[#4b5c6b] max-w-2xl mx-auto">
            Pour une navigation plus rapide, l’annuaire complet est disponible en pages (60 villes par page).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="/villes/page/1/"
              className="inline-flex items-center gap-2 rounded-xl bg-v4-text px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-colors"
            >
              <span>Ouvrir l’annuaire</span>
              <span>→</span>
            </a>
            <span className="text-xs text-v4-text-secondary">
              {CITIES.length} villes · {totalPages} pages
            </span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <FinalCTAV4 />
    </main>
  );
}

