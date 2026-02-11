"use client";

export default function HowItWorksIA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E3E5E8] bg-[#F9FAFB] p-8 md:p-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-sm font-semibold text-[#0F172A]">
              <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
              Dossier standardisé
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0F172A] leading-tight">
              Un dossier clair, pour des devis comparables
            </h2>
            <p className="text-base md:text-lg text-[#1E293B]/70 leading-relaxed">
              On vous guide pour récupérer les infos essentielles (adresses, date, type de logement, contraintes d’accès, options).
              Résultat : des devis plus cohérents, et moins d’allers-retours.
            </p>
            <ul className="text-sm md:text-base text-[#1E293B]/80 space-y-2">
              <li>✓ Même cahier des charges envoyé à chaque déménageur</li>
              <li>✓ Numéro masqué jusqu’au choix final</li>
              <li>✓ Relances automatiques (sans spam)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

