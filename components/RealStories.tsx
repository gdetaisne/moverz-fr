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
    <section className="relative py-20 md:py-32 bg-white">
      <div className="container max-w-5xl">
        {/* Header minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/25 px-4 py-1.5 text-xs font-medium text-[#0F172A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Témoignages
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[#0F172A]">
            Ça marche vraiment
          </h2>
          <p className="text-lg text-[#1E293B]/70">
            Pas de blabla. Juste des résultats.
          </p>
        </div>

        {/* Testimonials grid - Premium style */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E3E5E8] bg-white p-6 hover:shadow-md hover:border-[#6BCFCF]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-sm font-semibold text-white">
                  {story.initials}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0F172A]">{story.name}</p>
                  <p className="text-xs text-[#1E293B]/70">{story.city}</p>
                </div>
              </div>
              {/* Rating étoiles */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: story.rating }).map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/25 px-3 py-1 text-xs font-medium text-[#0F172A]">
                  {story.outcome}
                </span>
              </div>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
