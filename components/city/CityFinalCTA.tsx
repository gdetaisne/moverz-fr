type CityFinalCTAProps = {
  cityName: string;
  quoteUrl: string;
};

export function CityFinalCTA({ cityName, quoteUrl }: CityFinalCTAProps) {
  return (
    <section className="section section-contrast">
      <div className="container max-w-3xl text-center space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
          Prêt à comparer ?
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Lancez votre comparateur pour déménager à {cityName}
        </h2>
        <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
          3 minutes pour créer votre dossier, 5+ devis alignés sur la même base. Vous gardez le
          contrôle sur le choix du déménageur et le moment où vous le contactez.
        </p>
        <a href={quoteUrl} className="btn-primary">
          Obtenir des devis pour {cityName}
        </a>
      </div>
    </section>
  );
}


