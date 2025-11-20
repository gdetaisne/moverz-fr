"use client";

export default function ComparisonSection() {
  const benefits = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Devis comparables",
      description: "Même volume, mêmes options : vous comparez enfin des choses comparables.",
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
      title: "0 risque d'arnaque",
      description: "Pros contrôlés (assurances, avis) et support en cas de souci.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Dossier anonyme",
      description: "Vous décidez qui vous contacte, quand et comment. 0 spam.",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#0A1929] via-[#04141f] to-[#0b3b46] p-8 md:p-12 lg:p-16 shadow-[0_32px_90px_rgba(0,0,0,0.6)]">
      {/* Halos lumineux multiples */}
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,207,207,0.25),_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_70%)] blur-3xl" />
      
      {/* Grid de bénéfices */}
      <div className="relative grid gap-6 md:grid-cols-2 lg:gap-8">
        {benefits.map((benefit, index) => (
        <div
            key={benefit.title}
            className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-white/20 motion-safe:animate-fade-up-soft"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Glow effect au hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
            
            <div className="relative flex items-start gap-4">
              {/* Pictogramme SVG avec animation */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#4FB8B8]/30 border border-[#6BCFCF]/30 text-[#6BCFCF] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(107,207,207,0.4)]">
                {benefit.icon}
          </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}

