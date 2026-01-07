"use client";

export default function RealStories() {
  const stories = [
    {
      name: "Sophie L.",
      city: "Lyon",
      outcome: "800€ économisés",
      quote: "J'ai reçu 4 devis en 48h. Le moins cher était 800€ moins cher que ce que j'allais payer.",
      initials: "SL",
    },
    {
      name: "Marc D.",
      city: "Paris",
      outcome: "Déménagé en 10 jours",
      quote: "En 3 minutes j'avais mon dossier. Les déménageurs ont tous répondu rapidement.",
      initials: "MD",
    },
    {
      name: "Julie M.",
      city: "Bordeaux",
      outcome: "0 appel indésirable",
      quote: "Enfin un comparateur qui ne file pas mon numéro. J'ai choisi qui contacter.",
      initials: "JM",
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
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-sm font-semibold text-white">
                  {story.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">{story.name}</p>
                  <p className="text-xs text-[#1E293B]/70">{story.city}</p>
                </div>
              </div>
              <div className="mb-4">
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
