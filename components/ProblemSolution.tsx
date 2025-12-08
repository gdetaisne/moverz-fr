export default function ProblemSolution() {
  return (
    <section className="section section-contrast">
      <div className="container max-w-4xl">
        {/* One-liner percutant */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
            Le comparateur qui ne fait pas perdre de temps
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            3 min au lieu de 2h d'appels. Des devis clairs. Point.
          </p>
        </div>

        {/* Stats épurées */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-baseline gap-1">
              <p className="text-4xl md:text-5xl font-bold text-white">1 200</p>
              <span className="text-2xl text-white/60">+</span>
            </div>
            <p className="text-xs md:text-sm text-white/60 mt-3">déménagements<br />réussis</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-baseline gap-1">
              <p className="text-4xl md:text-5xl font-bold text-white">4.9</p>
              <span className="text-2xl text-white/60">/5</span>
            </div>
            <p className="text-xs md:text-sm text-white/60 mt-3">note moyenne<br />clients</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-baseline gap-1">
              <p className="text-4xl md:text-5xl font-bold text-[#6BCFCF]">5</p>
              <span className="text-2xl text-white/60">+</span>
            </div>
            <p className="text-xs md:text-sm text-white/60 mt-3">devis<br />comparables</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-baseline">
              <p className="text-4xl md:text-5xl font-bold text-white">100</p>
              <span className="text-2xl text-white/60">%</span>
            </div>
            <p className="text-xs md:text-sm text-white/60 mt-3">gratuit<br />toujours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

