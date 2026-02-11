export default function VisualProof() {
  return (
    <section className="relative py-20 md:py-32 bg-[#0F172A] text-white">
      <div className="container max-w-4xl">
        {/* Header minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise animate-pulse" />
            Ce qui se passe après
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
            Ce que vous voyez après
          </h2>
          <p className="text-lg text-white/70">
            Volume calculé + devis comparables.
          </p>
        </div>

        {/* Clean preview card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 space-y-8">
          {/* AI Result */}
          <div className="flex items-center gap-4 pb-8 border-b border-white/10">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-turquoise animate-pulse">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white/70 uppercase tracking-wide mb-1">
                Analyse terminée
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                Volume : <span className="text-brand-turquoise">23 m³</span>
              </p>
            </div>
          </div>

          {/* Quotes preview - Minimalist */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wide mb-4">
              des devis comparables reçus
            </p>
            
            {[
              { name: "Déménageurs Pro Plus", price: "990€", badge: "Meilleur prix" },
              { name: "Express Moving", price: "1 190€", badge: "Mieux noté" },
              { name: "Déménagement Facile", price: "1 290€", badge: null },
            ].map((quote, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                  i === 0
                    ? "border-brand-turquoise bg-white/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center font-semibold ${
                    i === 0 ? "bg-brand-turquoise text-white" : "bg-white/10 text-white"
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {quote.name}
                    </p>
                    {quote.badge && (
                      <p className="text-xs text-brand-turquoise font-medium mt-0.5">
                        {quote.badge}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    {quote.price}
                  </p>
                </div>
              </div>
            ))}
            
            <p className="text-xs text-white/60 text-center pt-4">
              + 2 autres devis • Tous basés sur le même volume
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
