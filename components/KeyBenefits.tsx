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
            <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--color-accent)" }}>
              Pourquoi passer par Moverz ?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading" style={{ color: "var(--color-text)" }}>
              On simplifie vraiment votre déménagement
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Moins de stress, moins de temps perdu, moins de mauvaises surprises.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
              >
                <h3 className="text-base md:text-lg font-semibold font-heading mb-2" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
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


