type CityFinalCTAProps = {
  cityName: string;
  quoteUrl: string;
};

export function CityFinalCTA({ cityName, quoteUrl }: CityFinalCTAProps) {
  return (
    <section className="section section-contrast">
      <div className="container max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 text-center shadow-xl">
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Gratuit · Sans spam
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl text-white">
              Prêt à déménager<br />à {cityName} ?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
              3 minutes pour comparer. Des déménageurs locaux sérieux. 0 surprise.
            </p>
            <div className="pt-2">
              <a
                href={quoteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#F3F4F6] transition-colors"
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


