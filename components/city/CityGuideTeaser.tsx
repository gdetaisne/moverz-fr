type CityGuideTeaserProps = {
  citySlug: string;
  cityName: string;
};

export function CityGuideTeaser({ citySlug, cityName }: CityGuideTeaserProps) {
  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 space-y-6">
          <details className="group rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Guide complet : déménager à {cityName}</p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    2000+ mots, checklists, accès & stationnement — sans blabla.
                  </p>
                </div>
                <span className="text-[#2B7A78] text-sm font-semibold group-open:hidden">→</span>
                <span className="text-[#2B7A78] text-sm font-semibold hidden group-open:inline">↓</span>
              </div>
            </summary>

            <div className="mt-6 space-y-4">
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                On a préparé un guide long-form pour éviter les surprises (accès, portage, objets lourds, assurance,
                jour J). Idéal si vous voulez des devis comparables et une exécution fluide.
              </p>

              <div className="text-center">
                <a
                  href={`/demenagement/${citySlug}/guide/`}
                  className="inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-[#0F172A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E293B]"
                >
                  Lire le guide complet →
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
