export default function ProblemSolution() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="container max-w-4xl">
        {/* Title minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Notre promesse
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Pas de perte de temps
          </h2>
          <p className="text-lg text-white/70">
            3 min au lieu de 2h d'appels.
          </p>
        </div>

        {/* Stats grid - Clean and minimal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-semibold">
              1 200<span className="text-white/50">+</span>
            </div>
            <p className="text-sm text-white/60">
              déménagements
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-semibold">
              4.9<span className="text-white/50">/5</span>
            </div>
            <p className="text-sm text-white/60">
              note clients
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-semibold text-[#6BCFCF]">
              5<span className="text-white/50">+</span>
            </div>
            <p className="text-sm text-white/60">
              devis comparables
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-semibold">
              100<span className="text-white/50">%</span>
            </div>
            <p className="text-sm text-white/60">
              gratuit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
