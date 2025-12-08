import type { CityInfo } from "@/lib/cities";

type CityHeroProps = {
  city: CityInfo;
  quoteUrl: string;
};

export function CityHero({ city, quoteUrl }: CityHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            {city.nameCapitalized}
          </div>

          {/* Titre */}
          <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl">
            Déménager à {city.nameCapitalized} ?<br />
            <span className="text-[#6BCFCF]">3 min, 5+ devis.</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Des déménageurs locaux contrôlés. Des devis comparables. 0 spam.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#F3F4F6] transition-colors"
            >
              <span>Comparer les déménageurs</span>
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


