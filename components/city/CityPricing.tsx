type CityPricingProps = {
  cityName: string;
};

export function CityPricing({ cityName }: CityPricingProps) {
  return (
    <section className="section section-contrast">
      <div className="container space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Prix indicatifs
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Combien coûte un déménagement à {cityName} ?
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Les prix varient selon la période, l&apos;accès, le volume, la distance et le niveau de service
            (éco, standard, confort). Voici des ordres de grandeur à titre indicatif.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Studio / T1", range: "300 € – 600 €" },
            { label: "T2 / 40–50 m²", range: "500 € – 900 €" },
            { label: "T3 / 60–70 m²", range: "700 € – 1 300 €" },
            { label: "Maison / >90 m²", range: "1 200 € – 2 400 €+" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#6BCFCF]">
                {item.label}
              </p>
              <p className="text-lg font-semibold">{item.range}</p>
              <p className="text-xs text-white/70">
                Estimations basées sur des déménagements réalisés à {cityName} et dans des
                villes de taille comparable. Un devis personnalisé reste indispensable.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


