type CityGuideTeaserProps = {
  citySlug: string;
  cityName: string;
};

export function CityGuideTeaser({ citySlug, cityName }: CityGuideTeaserProps) {
  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 space-y-4">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">Guide</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              Guide complet : déménager à {cityName} (2000+ mots)
            </h2>
            <p className="text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto">
              Un guide long-form ultra pratique (accès, volume, planning, checklists) — parfait si tu veux un devis sans surprises.
            </p>
          </div>

          <div className="text-center pt-2">
            <a
              href={`/demenagement/${citySlug}/guide/`}
              className="inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-[#0F172A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1E293B]"
            >
              Lire le guide complet →
            </a>
            <p className="mt-2 text-xs text-[#6B7280]">Page dédiée, indexable SEO, sans alourdir la page principale.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


