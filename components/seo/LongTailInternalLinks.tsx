import { getLongTailLinksForService } from "@/lib/blog-longtail-links";

type LongTailInternalLinksProps = {
  cityName?: string;
  serviceSlug?: string;
  limit?: number;
};

export function LongTailInternalLinks({ cityName, serviceSlug, limit = 10 }: LongTailInternalLinksProps) {
  const links = getLongTailLinksForService(serviceSlug).slice(0, limit);
  const total = getLongTailLinksForService(serviceSlug).length;

  const title = cityName
    ? `Cas fréquents à ${cityName} : accès, timing, objets lourds (guides ultra pratiques)`
    : "Cas fréquents : accès, timing, objets lourds (guides ultra pratiques)";

  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-6">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
              Long tail (SEO)
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">{title}</h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Ces cas “niche” sont ceux qui créent le plus de surprises quand ils ne sont pas documentés. Lisez 3 minutes,
              puis comparez des devis sur une base claire.
            </p>
          </div>

          <details className="group rounded-2xl border border-[var(--color-border)] bg-[#F8FAFC] p-6 md:p-7">
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    Voir {Math.min(limit, links.length)} guides “cas fréquents”
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                    Sans blabla : checklists + méthode pour devis comparables.
                  </p>
                </div>
                <span className="text-[#2B7A78] text-sm font-semibold group-open:hidden">→</span>
                <span className="text-[#2B7A78] text-sm font-semibold hidden group-open:inline">↓</span>
              </div>
            </summary>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {links.map((l) => (
                <a
                  key={l.slug}
                  href={`/blog/${l.slug}/`}
                  className="group rounded-2xl border border-[var(--color-border)] bg-white p-5 hover:border-brand-turquoise/50 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[#2B7A78]">
                    {l.title}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{l.description}</p>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/blog/cas-frequents/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                <span>Voir tous les cas fréquents ({total})</span>
                <span>→</span>
              </a>
              <a
                href="/blog/checklists-et-guides/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
              >
                <span>Voir toutes les checklists</span>
                <span>→</span>
              </a>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}


