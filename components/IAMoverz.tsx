"use client";

export default function IAMoverz() {
  const bullets = [
    {
      title: "Standardise votre dossier",
      text: "Vous renseignez les infos essentielles, l’IA Moverz aide à cadrer une base exploitable pour le chiffrage.",
    },
    {
      title: "Calcule une volumétrie ultra précise",
      text: "Elle estime le volume global pour éviter les mauvaises surprises.",
    },
    {
      title: "Prépare un dossier clair pour les pros",
      text: "Tous les déménageurs utilisent la même base : même volume, mêmes infos, des devis comparables.",
    },
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#F8F9FA] to-[#F0F4F8] p-8 md:p-12 lg:p-16 border border-[var(--color-border)] shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
          {/* Halos discrets */}
          <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,207,207,0.16),_transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_70%)] blur-3xl" />

          <div className="relative space-y-10">
            {/* Header */}
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
                Sous le capot
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight">
                Ce que fait l’IA Moverz pour vous
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                L’IA ne remplace pas l’humain, elle prépare le terrain : volume estimé, dossier propre, devis plus justes.
              </p>
            </div>

            {/* Bullets */}
            <div className="grid gap-6 md:grid-cols-3">
              {bullets.map((item) => (
                <div
                  key={item.title}
                  className="relative flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-turquoise/70 to-transparent" />
                  <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


