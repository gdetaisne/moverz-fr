type CityFinalCTAProps = {
  cityName: string;
  quoteUrl: string;
};

export function CityFinalCTA({ cityName, quoteUrl }: CityFinalCTAProps) {
  return (
    <section className="section section-light">
      <div className="container max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E7EB] p-8 md:p-12 text-center shadow-xl">
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Gratuit · Sans spam
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl text-[#0F172A]">
              Prêt à déménager<br />à {cityName} ?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-xl mx-auto">
              3 minutes pour comparer. Des déménageurs locaux sérieux. 0 surprise.
            </p>
            <div className="pt-2">
              <a
                href={quoteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg hover:bg-[#1E293B] transition-colors"
              >
                <span>Comparer maintenant</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


