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
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-brand-turquoise-50/20 to-white overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      <div className="relative container max-w-6xl mx-auto px-4">
        {/* Header minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-turquoise/10 to-brand-accent/10 border border-brand-turquoise-200/50 backdrop-blur-sm px-5 py-2 text-sm font-bold text-[#0F172A]">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-turquoise opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-turquoise shadow-[0_0_12px_rgba(107,207,207,0.8)]" />
            </span>
            Témoignages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">
            Ça marche <span className="bg-gradient-to-r from-brand-turquoise-600 via-brand-turquoise to-brand-accent bg-clip-text text-transparent">vraiment</span>
          </h2>
          <p className="text-lg text-gray-600">
            Pas de blabla. Juste des résultats.
          </p>
        </div>

        {/* Testimonials grid - Modern glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="rounded-2xl border border-brand-turquoise-200/40 bg-white/95 backdrop-blur-sm p-6 shadow-[0_8px_24px_rgba(107,207,207,0.1)] hover:shadow-[0_12px_32px_rgba(107,207,207,0.18)] hover:border-brand-turquoise-200/60 md:hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-turquoise to-brand-turquoise-500 text-sm font-bold text-white shadow-lg shadow-brand-turquoise/30">
                  {story.initials}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#0F172A]">{story.name}</p>
                  <p className="text-xs text-gray-600 font-medium">{story.city}</p>
                </div>
              </div>
              {/* Rating étoiles */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: story.rating }).map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-turquoise-100 to-brand-accent-100 border border-brand-accent-300/50 px-3 py-1.5 text-xs font-bold text-brand-turquoise-700 shadow-sm">
                  {story.outcome}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
