export default function ProblemSolution() {
  const comparison = [
    { 
      old: "2h d'appels à des déménageurs", 
      new: "3 min top chrono"
    },
    { 
      old: "Devis incomparables (25m³ vs 30m³ vs 🤷)", 
      new: "Même volume pour tous = enfin comparable"
    },
    { 
      old: "Tarifs mystère + frais cachés", 
      new: "Tout transparent, zéro surprise"
    },
    { 
      old: "Spam calls pendant 3 semaines", 
      new: "Vous décidez qui vous contacte"
    },
  ];

  return (
    <section className="section section-contrast">
      <div className="container max-w-4xl">
        {/* Accroche fun */}
        <div className="text-center mb-16">
          <p className="text-base md:text-lg text-white/60 mb-4">
            On sait ce que vous pensez...
          </p>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white mb-6">
            "Encore un comparateur<br />
            qui va me spammer"
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            On comprend. C'est pour ça qu'on a tout repensé.
          </p>
        </div>

        {/* Comparaison moderne */}
        <div className="space-y-4 mb-16">
          {comparison.map((item, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Avant */}
                <div className="p-4 md:p-6 relative">
                  <div className="absolute top-3 right-3 text-xs text-white/40 font-medium">Avant</div>
                  <div className="flex items-center gap-3">
                    <span className="text-base text-white/40 font-mono">:(</span>
                    <p className="text-sm md:text-base text-white/50 line-through">
                      {item.old}
                    </p>
                  </div>
                </div>
                
                {/* Après */}
                <div className="p-4 md:p-6 relative bg-white/5">
                  <div className="absolute top-3 right-3 text-xs text-[#6BCFCF] font-medium">Maintenant</div>
                  <div className="flex items-center gap-3">
                    <span className="text-base text-[#6BCFCF] font-mono">:)</span>
                    <p className="text-sm md:text-base text-white font-medium">
                      {item.new}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats - Version moderne */}
        <div className="text-center">
          <p className="text-sm text-white/50 mb-6">Et ça marche vraiment :</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="inline-flex items-baseline gap-1">
                <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#6BCFCF] transition-colors">1 200</p>
                <span className="text-2xl text-white/60">+</span>
              </div>
              <p className="text-xs md:text-sm text-white/60 mt-2">déménagements<br />réussis</p>
            </div>
            <div className="group">
              <div className="inline-flex items-baseline gap-1">
                <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#6BCFCF] transition-colors">4.9</p>
                <span className="text-2xl text-white/60">/5</span>
              </div>
              <p className="text-xs md:text-sm text-white/60 mt-2">note moyenne<br />des clients</p>
            </div>
            <div className="group">
              <div className="inline-flex items-baseline gap-1">
                <p className="text-4xl md:text-5xl font-bold text-[#6BCFCF] group-hover:scale-110 transition-transform">5</p>
                <span className="text-2xl text-white/60">+</span>
              </div>
              <p className="text-xs md:text-sm text-white/60 mt-2">devis vraiment<br />comparables</p>
            </div>
            <div className="group">
              <div className="inline-flex items-baseline">
                <p className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#6BCFCF] transition-colors">100</p>
                <span className="text-2xl text-white/60">%</span>
              </div>
              <p className="text-xs md:text-sm text-white/60 mt-2">gratuit pour<br />toujours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

