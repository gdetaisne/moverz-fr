export default function TrustSignals() {
  const signals = [
    {
      icon: (
        <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Données sécurisées",
      text: "Vos photos et informations sont cryptées et supprimées après votre déménagement.",
    },
    {
      icon: (
        <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Déménageurs vérifiés",
      text: "Assurances contrôlées, avis clients analysés, 0 litige toléré.",
    },
    {
      icon: (
        <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Service 100% gratuit",
      text: "Aucun frais caché, aucun engagement. Vous ne payez que le déménageur que vous choisissez.",
    },
    {
      icon: (
        <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Satisfaction garantie",
      text: "Un problème ? Notre équipe intervient pour vous aider à trouver une solution.",
    },
  ];

  return (
    <section className="section section-light">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Confiance & sécurité
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
            Vos données et votre argent<br />sont protégés
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ECFEFF] to-[#DBEAFE]">
                  {signal.icon}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#04163a]">
                {signal.title}
              </h3>
              <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed">
                {signal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

