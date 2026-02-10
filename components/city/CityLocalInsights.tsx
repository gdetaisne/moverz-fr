import { getLocalInsights } from "@/lib/local-insights";

type CityLocalInsightsProps = {
  citySlug: string;
  cityName: string;
  quoteUrl: string;
};

export function CityLocalInsights({ citySlug, cityName, quoteUrl }: CityLocalInsightsProps) {
  const insights = getLocalInsights(citySlug, cityName);

  return (
    <section className="section section-light">
      <div className="container max-w-4xl space-y-6">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">Local</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">{insights.title}</h2>
            <p className="text-sm md:text-base text-[#6B7280]">
              Quelques précisions suffisent. Objectif : éviter les suppléments le jour J et comparer des devis vraiment comparables.
            </p>
          </div>

          <div className="space-y-4">
            {insights.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid gap-2">
            {insights.bullets.map((b, i) => (
              <div key={i} className="flex gap-2 text-sm md:text-base text-[#0F172A]">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                <span className="text-[#0F172A]/90">{b}</span>
              </div>
            ))}
          </div>

          {/* Checklist retirée : les utilisateurs se perdaient */}

          <div className="text-center pt-2">
            <a
              href={quoteUrl}
              className="inline-flex items-center justify-center rounded-full border border-[#6BCFCF] bg-[#6BCFCF] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2B7A78] hover:border-[#2B7A78]"
            >
              Obtenir des devis (gratuit)
            </a>
            <p className="mt-2 text-xs text-[#6B7280]">Sans spam · Sans engagement · Dossier en 3 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}


