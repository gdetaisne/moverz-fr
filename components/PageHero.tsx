import Breadcrumbs from "@/components/Breadcrumbs";

type HeroLink = {
  label: string;
  href: string;
};

type PageHeroProps = {
  breadcrumbs: HeroLink[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: HeroLink;
  secondaryCta?: HeroLink;
  align?: "center" | "left";
};

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  align = "center",
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section className="relative overflow-hidden text-white">
      {/* Brand gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      {/* Subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(107,207,207,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(79,184,184,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <Breadcrumbs items={breadcrumbs} />

        <div className={`mt-8 space-y-5 ${isCenter ? "text-center" : "text-left"}`}>
          {eyebrow && (
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur-sm ${
                isCenter ? "" : ""
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              {eyebrow}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            {title}
          </h1>

          {subtitle && (
            <p
              className={`text-base md:text-lg text-white/80 leading-relaxed ${
                isCenter ? "max-w-3xl mx-auto" : "max-w-3xl"
              }`}
            >
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className={`flex flex-col sm:flex-row gap-3 ${isCenter ? "justify-center" : ""}`}>
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-7 py-3.5 text-sm md:text-base font-semibold text-[#04141f] shadow-[0_10px_34px_rgba(43,122,120,0.35)] hover:shadow-[0_14px_60px_rgba(107,207,207,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>{primaryCta.label}</span>
                  <span className="text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-white/10 hover:border-white/35 transition-all duration-300"
                >
                  <span>{secondaryCta.label}</span>
                  <span className="text-lg leading-none">→</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


