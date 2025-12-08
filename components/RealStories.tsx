"use client";

export default function RealStories() {
  const stories = [
    {
      name: "Sophie L.",
      city: "Lyon",
      outcome: "800€ économisés",
      quote: "J'ai reçu 6 devis en 2 jours. Le moins cher était 800€ moins cher que ce que j'allais payer. Incroyable.",
      initials: "SL",
    },
    {
      name: "Marc D.",
      city: "Paris",
      outcome: "Déménagé en 10 jours",
      quote: "En 3 minutes j'avais mon dossier. Les déménageurs ont tous répondu rapidement. Déménagé en moins de 2 semaines.",
      initials: "MD",
    },
    {
      name: "Julie M.",
      city: "Bordeaux",
      outcome: "Zéro appel indésirable",
      quote: "Enfin un comparateur qui ne file pas mon numéro à tout le monde. J'ai choisi qui je voulais contacter.",
      initials: "JM",
    },
  ];

  return (
    <section className="section section-light bg-gradient-to-br from-white via-[#F9FAFB] to-[#ECFEFF]">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Témoignages
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
            Ça marche vraiment
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            Pas de blabla marketing. Juste des résultats concrets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF] text-sm font-bold text-white">
                  {story.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#04163a]">{story.name}</p>
                  <p className="text-xs text-[#6B7280]">{story.city}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFEFF] border border-[#6BCFCF] px-3 py-1 text-xs font-semibold text-[#0369A1]">
                  {story.outcome}
                </span>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed italic">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-[#6B7280]">
            Rejoignez <span className="font-semibold text-[#04163a]">1 200+ personnes</span> qui ont simplifié leur déménagement cette année
          </p>
        </div>
      </div>
    </section>
  );
}

