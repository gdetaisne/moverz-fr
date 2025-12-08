type CityStatsProps = {
  cityName: string;
};

export function CityStats({ cityName }: CityStatsProps) {
  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="text-center mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Moverz à {cityName}
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl text-[#0F172A]">
            Ça marche à {cityName} aussi
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">48h</p>
            <p className="text-sm text-[#6B7280]">Temps moyen<br />de réponse</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#6BCFCF] mb-2">5+</p>
            <p className="text-sm text-[#6B7280]">Devis<br />comparables</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">0€</p>
            <p className="text-sm text-[#6B7280]">Gratuit<br />pour vous</p>
          </div>
        </div>
      </div>
    </section>
  );
}

