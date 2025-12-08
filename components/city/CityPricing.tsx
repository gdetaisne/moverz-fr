type CityPricingProps = {
  cityName: string;
};

export function CityPricing({ cityName }: CityPricingProps) {
  return (
    <section className="section section-contrast">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Prix indicatifs
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
            Combien ça coûte ?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Fourchettes moyennes à {cityName}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Studio", volume: "15 m³", price: "500–800€" },
            { label: "T2/T3", volume: "30 m³", price: "900–1400€" },
            { label: "T4+", volume: "50 m³", price: "1500–2500€" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
            >
              <p className="text-sm text-white/60 mb-2">{item.volume}</p>
              <p className="text-lg font-bold text-white mb-3">{item.label}</p>
              <p className="text-2xl font-bold text-[#6BCFCF]">{item.price}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-white/50">
          Tarifs indicatifs. Vos devis personnalisés = prix réel.
        </p>
      </div>
    </section>
  );
}


