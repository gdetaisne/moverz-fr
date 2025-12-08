export default function KeyBenefits() {
  const items = [
    {
      title: "Moins de stress",
      text: "On centralise vos infos et vos devis au même endroit.",
    },
    {
      title: "Moins de temps perdu",
      text: "Un seul dossier au lieu de répéter 10 fois la même chose.",
    },
    {
      title: "Moins de mauvaises surprises",
      text: "Volume estimé correctement, devis clairs dès le départ.",
    },
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="space-y-8 text-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
              Pourquoi passer par Moverz ?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#04163a]">
              On simplifie vraiment votre déménagement
            </h2>
            <p className="text-sm md:text-base text-[#4b5c6b] max-w-2xl mx-auto">
              Moins de stress, moins de temps perdu, moins de mauvaises surprises.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E3E5E8] bg-white p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#04163a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b5c6b] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


