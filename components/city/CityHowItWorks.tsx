type CityHowItWorksProps = {
  cityName: string;
  quoteUrl: string;
};

export function CityHowItWorks({ cityName, quoteUrl }: CityHowItWorksProps) {
  return (
    <section className="section section-light">
      <div className="container space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">
            Comment ça marche ?
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
            3 étapes pour organiser votre déménagement à {cityName}
          </h2>
          <p className="text-sm md:text-base text-[#4b5c6b] max-w-2xl mx-auto">
            Moverz vous accompagne de la description de votre projet jusqu&apos;au choix final du déménageur,
            sans démarchage agressif ni devis incompréhensibles.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
              Étape 1
            </p>
            <h3 className="text-sm font-semibold text-[#04163a]">
              Décrivez votre déménagement
            </h3>
            <p className="text-sm text-[#4b5c6b]">
              Adresses de départ et d&apos;arrivée, volume estimé, accès, contraintes particulières…
              Vous remplissez un seul dossier ultra précis pour votre déménagement à {cityName}.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
              Étape 2
            </p>
            <h3 className="text-sm font-semibold text-[#04163a]">
              Recevez des devis comparables
            </h3>
            <p className="text-sm text-[#4b5c6b]">
              Les déménageurs partenaires chiffrent exactement la même opération. Vous recevez des
              devis structurés et faciles à comparer, sans appels en série.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
              Étape 3
            </p>
            <h3 className="text-sm font-semibold text-[#04163a]">
              Choisissez sereinement votre déménageur
            </h3>
            <p className="text-sm text-[#4b5c6b]">
              Vous comparez prix, options et avis, puis validez le déménageur qui correspond le mieux
              à votre projet. Moverz reste disponible en cas de question.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href={quoteUrl} className="btn-primary">
            Lancer mon comparateur pour {cityName}
          </a>
        </div>
      </div>
    </section>
  );
}


