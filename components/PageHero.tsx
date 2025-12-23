import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";

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
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)] via-[var(--brand-teal-3)] to-[var(--brand-deep)]" />
      {/* Subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(107,207,207,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(79,184,184,0.20),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <Breadcrumbs items={breadcrumbs} />

        <div className={`mt-8 space-y-5 ${isCenter ? "text-center" : "text-left"}`}>
          {eyebrow && (
            <Chip tone="dark" className="border-white/18 bg-white/10 px-4 py-1.5 uppercase tracking-[0.3em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
              {eyebrow}
            </Chip>
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
                <Button href={primaryCta.href} variant="primary" radius="2xl" className="px-7 py-3.5 text-sm md:text-base">
                  <span>{primaryCta.label}</span>
                  <span className="text-lg leading-none">→</span>
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" radius="2xl" className="px-7 py-3.5 text-sm md:text-base">
                  <span>{secondaryCta.label}</span>
                  <span className="text-lg leading-none">→</span>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


