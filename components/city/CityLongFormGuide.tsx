import { getCityLongFormGuide } from "@/lib/city-longform";

type CityLongFormGuideProps = {
  citySlug: string;
  cityName: string;
  quoteUrl: string;
};

export function CityLongFormGuide({ citySlug, cityName, quoteUrl }: CityLongFormGuideProps) {
  const guide = getCityLongFormGuide(citySlug, cityName);

  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 space-y-6">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">Guide local</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">{guide.title}</h2>
            <p className="text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto">
              {guide.subtitle} <span className="text-[#0F172A]/70">≈ {guide.estimatedReadingMinutes} min • {guide.wordCount} mots</span>
            </p>
          </div>

          <details className="group rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    Lire le guide complet (2000+ mots)
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    Table des matières + checklists. Parfait si vous voulez un devis sans surprises.
                  </p>
                </div>
                <span className="text-[#2B7A78] text-sm font-semibold group-open:hidden">→</span>
                <span className="text-[#2B7A78] text-sm font-semibold hidden group-open:inline">↓</span>
              </div>
            </summary>

            <div className="mt-6 space-y-8">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <p className="text-sm font-semibold text-[#0F172A] mb-3">Sommaire</p>
                <ol className="grid gap-2 text-sm text-[#2B7A78]">
                  {guide.sections.map((s) => (
                    <li key={s.id}>
                      <a className="hover:underline" href={`#guide-${citySlug}-${s.id}`}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-10">
                {guide.sections.map((s) => (
                  <div key={s.id} id={`guide-${citySlug}-${s.id}`} className="scroll-mt-28">
                    <h3 className="text-lg md:text-xl font-semibold text-[#0F172A]">{s.title}</h3>
                    <div className="mt-3 space-y-3">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>

                    {s.bullets?.length ? (
                      <ul className="mt-4 grid gap-2 text-sm md:text-base text-[#0F172A]">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                            <span className="text-[#0F172A]/90">{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {s.checklist?.length ? (
                      <div className="mt-5 rounded-2xl border border-[#E5E7EB] bg-white p-5">
                        <p className="text-sm font-semibold text-[#0F172A]">Checklist</p>
                        <ul className="mt-3 grid gap-2 text-sm text-[#6B7280]">
                          {s.checklist.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2B7A78] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <a
                  href={quoteUrl}
                  className="inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-[#0F172A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E293B]"
                >
                  Obtenir 3 devis minimum (gratuit)
                </a>
                <p className="mt-2 text-xs text-[#6B7280]">Sans spam · Sans engagement · Dossier en 3 minutes</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}


