import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getPricePostForCity } from "@/lib/blog";
import { getLocalInsights } from "@/lib/local-insights";
import { buildCityServiceFaqs } from "@/lib/seo-faq";
import Breadcrumbs from "@/components/Breadcrumbs";
import WidgetActionSection from "@/components/WidgetActionSection";
import { FAQ } from "@/components/FAQ";
import { LongTailInternalLinks } from "@/components/seo/LongTailInternalLinks";

export type CityServiceFAQ = { question: string; answer: string };

export type CityServiceSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CityServicePageProps = {
  citySlug: string;
  cityName: string;
  serviceSlug: string; // ex: "garde-meuble"
  badge?: string;
  h1: string;
  subtitle: string;
  eyebrow?: string;
  sections: CityServiceSection[];
  faqs?: CityServiceFAQ[];
};

export function generateCityServiceMetadata(args: {
  citySlug: string;
  serviceSlug: string;
  title: string;
  description: string;
}): Metadata {
  const path = `demenagement/${args.citySlug}/${args.serviceSlug}`;
  // Global title.template already appends "| Moverz" (see `app/layout.tsx`).
  // To avoid "… | Moverz | Moverz", we normalize any legacy titles that still include the suffix.
  const normalizedTitle = args.title.replace(/\s*\|\s*Moverz\s*$/i, "").trim();
  return getFullMetadata(path, normalizedTitle, args.description);
}

export function CityServicePage({
  citySlug,
  cityName,
  serviceSlug,
  badge = "Service",
  h1,
  subtitle,
  eyebrow = "Comparer gratuitement",
  sections,
  faqs,
}: CityServicePageProps) {
  const fromPath = `/demenagement/${citySlug}/${serviceSlug}/`;
  const pricePost = getPricePostForCity(citySlug);
  const autoFaqs = buildCityServiceFaqs({
    citySlug,
    cityName,
    serviceLabel: h1,
    extra: faqs,
  });
  const insights = getLocalInsights(citySlug, cityName);

  return (
    <main className="bg-white">
      <div className="bg-[var(--color-bg-dark)]">
        <div className="container max-w-7xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${cityName}`, href: `/demenagement/${citySlug}/` },
              { label: h1, href: fromPath },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
          <div className="mb-6 max-w-4xl mx-auto">
            <a
              href={`/demenagement/${citySlug}/`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Retour à Déménagement {cityName}</span>
            </a>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
              {badge}
            </div>

            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl">
              {h1}
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="pt-3">
              <a
                href={`https://devis.moverz.fr/devis-gratuits-v3?city_slug=${citySlug}&source=moverz.fr&from=${encodeURIComponent(fromPath)}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[var(--color-text)] shadow-lg hover:bg-[#F3F4F6] transition-colors"
              >
                <span>Recevoir des devis comparables</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>

            {pricePost && (
              <div className="pt-4">
                <a
                  href={`/blog/${pricePost.slug}/`}
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>Voir aussi :</span>
                  <span className="underline underline-offset-4">Prix d’un déménagement à {cityName}</span>
                  <span>→</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-5xl px-4 space-y-8">
          {/* Bloc local (anti-template) */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 space-y-4">
            <div className="text-center space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">Local</p>
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">{insights.title}</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">Quelques précisions suffisent pour fiabiliser le devis (et éviter les surprises).</p>
            </div>

            <div className="space-y-3">
              {insights.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid gap-2">
              {insights.bullets.map((b, i) => (
                <div key={i} className="flex gap-2 text-sm md:text-base text-[var(--color-text)]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                  <span className="text-[var(--color-text)]/90">{b}</span>
                </div>
              ))}
            </div>

            {/* Checklist retirée : les utilisateurs se perdaient */}

            <div className="text-center">
              <a
                href={`https://devis.moverz.fr/devis-gratuits-v3?city_slug=${citySlug}&source=moverz.fr&from=${encodeURIComponent(fromPath)}`}
                className="inline-flex items-center justify-center rounded-full border border-brand-turquoise bg-brand-turquoise px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2B7A78] hover:border-[#2B7A78]"
              >
                Comparer des devis (gratuit)
              </a>
              <p className="mt-2 text-xs text-[var(--color-text-secondary)]">Sans spam · Sans engagement</p>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">{s.title}</h2>
              <div className="space-y-3">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {s.bullets && s.bullets.length > 0 && (
                <ul className="grid gap-2 text-sm md:text-base text-[var(--color-text)]">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                      <span className="text-[var(--color-text)]/90">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Cas fréquents (long tail) — liens internes vers guides ultra niche */}
          <LongTailInternalLinks cityName={cityName} serviceSlug={serviceSlug} limit={8} />
        </div>
      </section>

      {/* CTA widget */}
      <WidgetActionSection
        eyebrow={eyebrow}
        title={`Comparez des devis à ${cityName}`}
        subtitle="Un seul dossier, des devis standardisés. L’IA fiabilise le volume pour des tarifs comparables, sans spam."
        source="moverz.fr"
        from={fromPath}
        citySlug={citySlug}
      />

      <FAQ title={`FAQ — ${cityName}`} faqs={autoFaqs} />
    </main>
  );
}


