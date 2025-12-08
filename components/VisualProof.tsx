export default function VisualProof() {
  return (
    <section className="section section-contrast">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Ce qui se passe après
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
            Voici ce que vous voyez<br />après avoir envoyé vos photos
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10">
          {/* Mock Result Screen */}
          <div className="rounded-2xl border-2 border-white/20 bg-white p-6 md:p-8 space-y-6">
            {/* AI Result */}
            <div className="flex items-start gap-4 pb-6 border-b border-[#E5E7EB]">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
                  Analyse terminée
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#04163a]">
                  Volume estimé : <span className="text-[#6BCFCF]">23 m³</span>
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  Équivalent à un appartement T3 ou une maison de 90m²
                </p>
              </div>
            </div>

            {/* Comparison Table Preview */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#04163a] uppercase tracking-wide">
                5 devis comparables reçus
              </p>
              
              {[
                { name: "Déménageurs Pro Plus", price: "1 890€", rating: "4.8/5", badge: "Meilleur prix" },
                { name: "Express Moving", price: "2 100€", rating: "4.9/5", badge: "Mieux noté" },
                { name: "Déménagement Facile", price: "2 250€", rating: "4.7/5", badge: null },
              ].map((quote, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    i === 0
                      ? "border-[#6BCFCF] bg-[#ECFEFF]"
                      : "border-[#E5E7EB] bg-[#F9FAFB]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-lg font-bold text-[#04163a]">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#04163a] text-sm md:text-base">
                        {quote.name}
                      </p>
                      <p className="text-xs text-[#6B7280]">
                        Note {quote.rating}
                        {quote.badge && (
                          <span className="ml-2 text-[#6BCFCF] font-medium">
                            • {quote.badge}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl md:text-2xl font-bold text-[#04163a]">
                      {quote.price}
                    </p>
                  </div>
                </div>
              ))}
              
              <p className="text-xs text-[#6B7280] text-center pt-2">
                + 2 autres devis • Tous basés sur le même volume de 23 m³
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/80 text-sm md:text-base">
              <span className="font-semibold">C'est ça la différence :</span> des devis que vous pouvez vraiment comparer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

