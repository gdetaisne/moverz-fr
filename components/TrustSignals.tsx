export default function TrustSignals() {
  const signals = [
    {
      title: "Données sécurisées",
      text: "Vos photos et informations sont cryptées et supprimées après votre déménagement.",
    },
    {
      title: "Déménageurs vérifiés",
      text: "Assurances contrôlées, avis clients analysés, 0 litige toléré.",
    },
    {
      title: "100% gratuit",
      text: "Aucun frais caché, aucun engagement. Vous ne payez que le déménageur choisi.",
    },
    {
      title: "Support dédié",
      text: "Un problème ? Notre équipe intervient pour trouver une solution.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="container max-w-5xl">
        {/* Header minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Confiance & sécurité
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[#0F172A]">
            Vos données sont protégées
          </h2>
        </div>

        {/* Grid clean */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {signals.map((signal, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-8 hover:border-[#6BCFCF]/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-3 text-[#0F172A]">
                {signal.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {signal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
