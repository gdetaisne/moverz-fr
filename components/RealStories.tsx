"use client";

export default function RealStories() {
  const stories = [
    {
      name: "Sophie L.",
      city: "Lyon",
      outcome: "800€ économisés",
      quote: "J'ai reçu 4 devis en quelques jours. Le moins cher était 800€ moins cher que ce que j'allais payer.",
      initials: "SL",
      rating: 5,
    },
    {
      name: "Marc D.",
      city: "Paris",
      outcome: "Déménagé en 10 jours · 0 appel",
      quote: "En 3 minutes j'avais mon dossier. Les déménageurs ont tous répondu rapidement. Aucun appel de relance.",
      initials: "MD",
      rating: 5,
    },
    {
      name: "Julie M.",
      city: "Bordeaux",
      outcome: "0 appel indésirable",
      quote: "Enfin un comparateur qui ne file pas mon numéro. J'ai choisi qui contacter.",
      initials: "JM",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-brand-turquoise-50/30 to-brand-accent-50/20 overflow-hidden">
      {/* Background glow effects avec violet */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-turquoise/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/12 rounded-full blur-[120px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(107,207,207,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative container max-w-6xl mx-auto px-4">
        {/* Header premium */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-turquoise/10 to-brand-accent/10 border border-brand-turquoise/30 backdrop-blur-sm px-5 py-2.5 text-sm font-bold text-[var(--color-text)] shadow-sm">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-turquoise opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-turquoise shadow-[0_0_12px_rgba(107,207,207,0.8)]" />
            </span>
            Témoignages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Ça marche <span className="bg-gradient-to-r from-brand-turquoise via-brand-turquoise to-brand-accent bg-clip-text text-transparent">vraiment</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-medium">
            Pas de blabla. Juste des résultats.
          </p>
        </div>

        {/* Testimonials grid - Ultra-premium glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-brand-turquoise/20 bg-white/80 backdrop-blur-xl p-7 shadow-[0_10px_40px_rgba(107,207,207,0.12)] hover:shadow-[0_20px_60px_rgba(167,139,250,0.2)] hover:border-brand-accent/40 hover:scale-[1.03] transition-all duration-500"
            >
              {/* Glow effect violet au hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-turquoise/0 via-brand-accent/0 to-brand-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-turquoise to-brand-accent text-base font-bold text-white shadow-lg shadow-brand-turquoise/30 group-hover:shadow-brand-accent/40 group-hover:scale-110 transition-all duration-300">
                    {story.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[var(--color-text)] text-base">{story.name}</p>
                    <p className="text-xs text-[var(--color-text-secondary)] font-medium">{story.city}</p>
                  </div>
                </div>
                
                {/* Rating étoiles */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: story.rating }).map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div className="mb-5">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-turquoise/10 to-brand-accent/15 border border-brand-accent/30 backdrop-blur-sm px-4 py-2 text-xs font-bold text-brand-accent shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {story.outcome}
                  </span>
                </div>
                
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  "{story.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
