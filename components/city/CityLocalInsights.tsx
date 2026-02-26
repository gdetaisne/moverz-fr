import { getLocalInsights } from "@/lib/local-insights";

type CityLocalInsightsProps = {
  citySlug: string;
  cityName: string;
  quoteUrl: string;
};

/**
 * Bloc conseils locaux par ville.
 *
 * SEO (2026-02-16): restauration de l'accessChecklist (contenu unique par ville,
 * ~50 mots supplémentaires de contenu expert). L'ancienne note disait
 * "Checklist retirée : les utilisateurs se perdaient" — on la remet en
 * format compact (non-interactif) pour le SEO sans gêner l'UX.
 */
export function CityLocalInsights({
  citySlug,
  cityName,
  quoteUrl,
}: CityLocalInsightsProps) {
  const insights = getLocalInsights(citySlug, cityName);

  return (
    <section className="section section-light">
      <div className="container max-w-4xl space-y-6">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Local
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-text)]">
              {insights.title}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)]">
              Quelques précisions suffisent. Objectif&nbsp;: éviter les suppléments le
              jour&nbsp;J et comparer des devis vraiment comparables.
            </p>
          </div>

          <div className="space-y-4">
            {insights.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="grid gap-2">
            {insights.bullets.map((b, i) => (
              <div
                key={i}
                className="flex gap-2 text-sm md:text-base text-[var(--color-text)]"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                <span className="text-[var(--color-text)]/90">{b}</span>
              </div>
            ))}
          </div>

          {/* Checklist accès — contenu unique par ville (SEO) */}
          {insights.accessChecklist?.length > 0 && (
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 md:p-6">
              <p className="text-sm font-semibold text-[var(--color-text)] mb-3">
                À documenter avant de demander des devis à {cityName}
              </p>
              <ul className="grid gap-2 text-sm text-[var(--color-text-secondary)]">
                {insights.accessChecklist.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Périodes à éviter */}
          {insights.avoidPeriods?.length > 0 && (
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
              <p className="text-xs font-semibold text-[var(--color-text)] mb-2">
                Périodes souvent moins favorables à {cityName}
              </p>
              <div className="flex flex-wrap gap-2">
                {insights.avoidPeriods.map((period, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
                  >
                    {period}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="text-center pt-2">
            <a
              href={quoteUrl}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)]"
            >
              Obtenir mes devis
            </a>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
              Sans spam · Sans engagement · Dossier en 3&nbsp;minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
