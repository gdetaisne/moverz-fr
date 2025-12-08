export default function ProblemSolution() {
  const comparison = [
    { old: "2h d'appels", new: "3 min" },
    { old: "Devis incomparables", new: "Même volume" },
    { old: "Frais cachés", new: "Tout transparent" },
    { old: "Spam calls", new: "0 spam" },
  ];

  return (
    <section className="section section-contrast">
      <div className="container max-w-5xl">
        {/* Titre simple */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Avant / Après
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
            On a repensé le comparateur
          </h2>
        </div>

        {/* Comparaison ultra-simple */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {comparison.map((item, i) => (
            <div key={i} className="text-center">
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 mb-3">
                <p className="text-sm text-white/40 line-through mb-2">{item.old}</p>
                <div className="text-3xl my-3">↓</div>
                <p className="text-base font-bold text-[#6BCFCF]">{item.new}</p>
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

