"use client";

export default function WhyMoverz() {
  const benefits = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Devis comparables",
      description: "Un seul inventaire → tous chiffrent le même volume. Fini les devis incomparables.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Gain de temps",
      description: "Un seul dossier, 5+ devis reçus sans relances ni visites techniques.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Pros contrôlés",
      description: "Solidité financière + historique litiges vérifiés. Seuls les meilleurs reçoivent votre dossier.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Anonymat total",
      description: "Vous décidez qui vous contacte et quand. Zéro appel intempestif, tout par email.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "100% gratuit",
      description: "Aucun frais caché, aucun engagement. Comparez en toute liberté.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Support dédié",
      description: "Une question ? Un souci ? Notre équipe vous accompagne à chaque étape.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
          Pourquoi nous choisir
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Pourquoi Moverz plutôt que les autres ?
        </h2>
        <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          La plupart des comparateurs vous mettent en relation avec n'importe qui et vous laissent comparer des devis incomparables. Nous, on fait l'inverse.
        </p>
      </div>

      {/* Big Card avec halos */}
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#0A1929] via-[#04141f] to-[#0b3b46] p-8 md:p-12 lg:p-16 shadow-[0_32px_90px_rgba(0,0,0,0.6)]">
        {/* Halos lumineux */}
        <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,207,207,0.25),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_70%)] blur-3xl" />
        
        {/* Grid de bénéfices - 2 colonnes sur desktop, 3 sur large screens */}
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-white/20"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Glow effect au hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
              
              {/* Filament en haut */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6BCFCF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start gap-4">
                {/* Icône */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#4FB8B8]/30 border border-[#6BCFCF]/30 text-[#6BCFCF] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(107,207,207,0.4)]">
                  {benefit.icon}
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight group-hover:text-[#6BCFCF] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://devis.moverz.fr/?source=moverz.fr&from=/why-moverz"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <span className="relative">Recevoir 5+ devis fiables gratuitement</span>
          <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}

