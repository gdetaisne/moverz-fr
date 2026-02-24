import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CITIES } from "@/lib/cities";
import { getHubMetadata } from "@/lib/seo/metadata";
import { buildTunnelUrl } from "@/lib/tunnel-url";

const PER_PAGE = 60;

type PageProps = {
  params: { page: string };
};

// IMPORTANT (stability): do not pre-render all paginated city directory pages at build time.
// On small VPS, SSG can exceed Next.js worker timeouts (>60s) and block deployments.
// Instead, generate on-demand and cache (ISR).
export const revalidate = 60 * 60 * 24; // 24h

export function generateMetadata({ params }: PageProps): Metadata {
  const pageNum = Number(params.page);
  if (!Number.isFinite(pageNum) || pageNum < 1) return {};

  const title = pageNum === 1 ? "Villes (annuaire)" : `Villes (annuaire) — page ${pageNum}`;
  const description =
    "Annuaire des villes couvertes par Moverz. Accédez aux guides locaux et Comparez des devis comparables (dossier anonyme, sans harcèlement).";

  return getHubMetadata({
    path: `villes/page/${pageNum}`,
    title,
    description,
  });
}

export default function VillesPaginatedPage({ params }: PageProps) {
  const pageNum = Number(params.page);
  if (!Number.isFinite(pageNum) || pageNum < 1) {
    notFound();
  }

  const cities = [...CITIES].sort((a, b) => a.nameCapitalized.localeCompare(b.nameCapitalized, "fr"));
  const totalPages = Math.max(1, Math.ceil(cities.length / PER_PAGE));
  if (pageNum > totalPages) {
    notFound();
  }

  const start = (pageNum - 1) * PER_PAGE;
  const current = cities.slice(start, start + PER_PAGE);

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Villes", href: "/villes/" },
          { label: `Page ${pageNum}`, href: `/villes/page/${pageNum}/` },
        ]}
        eyebrow="Annuaire (paginé)"
        title="Toutes les villes"
        subtitle={`Page ${pageNum}/${totalPages} — trouvez votre guide local et comparez des devis comparables.`}
        primaryCta={{
          label: "Comparer des devis comparables gratuitement",
          href: buildTunnelUrl({ from: "/villes-page" }),
        }}
        secondaryCta={{ label: "Retour à la page régions", href: "/villes/" }}
      />

      <section className="section section-light">
        <div className="container max-w-6xl space-y-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {current.map((city) => (
              <a
                key={city.slug}
                href={`/demenagement/${city.slug}/`}
                className="rounded-xl border border-v4-border bg-white px-4 py-3 hover:border-v4-accent/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-v4-text">{city.nameCapitalized}</p>
                    <p className="text-xs text-v4-text-secondary">{city.region}</p>
                  </div>
                  <span className="text-xs font-semibold text-v4-accent">→</span>
                </div>
              </a>
            ))}
          </div>

          <nav className="flex items-center justify-center gap-2">
            <Link
              href={`/villes/page/${Math.max(1, pageNum - 1)}/`}
              aria-disabled={pageNum === 1}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pageNum === 1 ? "text-[#94A3B8] pointer-events-none" : "text-v4-text hover:bg-[#F9FAFB]"
              }`}
            >
              ← Précédent
            </Link>

            <span className="text-sm text-v4-text-secondary">
              Page <span className="font-semibold text-v4-text">{pageNum}</span> / {totalPages}
            </span>

            <Link
              href={`/villes/page/${Math.min(totalPages, pageNum + 1)}/`}
              aria-disabled={pageNum === totalPages}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pageNum === totalPages ? "text-[#94A3B8] pointer-events-none" : "text-v4-text hover:bg-[#F9FAFB]"
              }`}
            >
              Suivant →
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}


