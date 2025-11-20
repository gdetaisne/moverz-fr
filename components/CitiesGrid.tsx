import { CITIES } from '@/lib/cities';

export default function CitiesGrid() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
              Couverture nationale
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#04163a] leading-tight">
              11 grandes villes françaises
            </h2>
            <p className="text-base md:text-lg text-[#4b5c6b] leading-relaxed max-w-2xl mx-auto">
              Chaque ville dispose de son comparateur dédié avec des déménageurs locaux vérifiés.
            </p>
          </div>

          {/* Grid compact des villes */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
            {CITIES.map((city, index) => (
              <a
                key={city.slug}
                href={`${city.url}/devis-gratuits/`}
                className="group relative overflow-hidden flex items-center gap-3 rounded-xl border border-[#E3E5E8] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#6BCFCF]/50"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {/* Filament lumineux */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6BCFCF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Gradient subtil au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
                
                <div className="relative flex items-center gap-3 flex-1">
                  {/* Icône ville compacte */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 text-[#2B7A78] transition-all duration-300 group-hover:scale-110 group-hover:border-[#6BCFCF]/40">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  {/* Nom de la ville */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#04163a] leading-tight group-hover:text-[#2B7A78] transition-colors duration-300 truncate">
                      {city.nameCapitalized}
                    </h3>
                    <p className="text-xs text-[#6B7280] truncate">{city.region}</p>
                  </div>

                  {/* Flèche */}
                  <svg className="h-5 w-5 flex-shrink-0 text-[#6B7280] group-hover:text-[#2B7A78] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* CTA vers toutes les villes */}
          <div className="text-center">
            <a
              href="/villes/"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#04163a] hover:bg-[#F8F9FA] hover:border-[#6BCFCF]/40 transition-all duration-300"
            >
              <span>Voir toutes les villes</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Ville non couverte - Design plus subtil */}
          <div className="relative overflow-hidden rounded-2xl border border-[#E3E5E8] bg-gradient-to-br from-white to-[#F8F9FA] p-8 text-center shadow-sm">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/30 via-[#4f46e5]/20 to-[#22c55e]/30" />
            
            <div className="relative space-y-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#6BCFCF]/10 to-[#4FB8B8]/20 border border-[#6BCFCF]/20 mx-auto text-[#2B7A78]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-bold text-[#04163a]">
                  Votre ville n'est pas listée ?
                </p>
                <p className="text-sm text-[#4b5c6b] max-w-md mx-auto">
                  Nous développons de nouvelles villes chaque mois. Manifestez votre intérêt.
                </p>
              </div>
              
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
      </div>
    </section>
  );
}
