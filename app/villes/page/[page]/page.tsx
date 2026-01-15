import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CITIES } from "@/lib/cities";
import { getHubMetadata } from "@/lib/seo/metadata";

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

  const title = pageNum === 1 ? "Villes (annuaire) | Moverz" : `Villes (annuaire) — page ${pageNum} | Moverz`;
  const description =
    "Annuaire des villes couvertes par Moverz. Accédez aux guides locaux et comparez 3 à 5 devis en 3 min (IA fiabilise le volume, sans démarchage).";

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
        subtitle={`Page ${pageNum}/${totalPages} — trouvez votre guide local et comparez 3 à 5 devis.`}
        primaryCta={{
          label: "Comparer 3 à 5 devis gratuitement",
          href: "https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/villes-page",
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
                className="rounded-xl border border-[#E3E5E8] bg-white px-4 py-3 hover:border-[#6BCFCF]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#04163a]">{city.nameCapitalized}</p>
                    <p className="text-xs text-[#6B7280]">{city.region}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#2B7A78]">→</span>
                </div>
              </a>
            ))}
          </div>

          <nav className="flex items-center justify-center gap-2">
            <Link
              href={`/villes/page/${Math.max(1, pageNum - 1)}/`}
              aria-disabled={pageNum === 1}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pageNum === 1 ? "text-[#94A3B8] pointer-events-none" : "text-[#0F172A] hover:bg-[#F9FAFB]"
              }`}
            >
              ← Précédent
            </Link>

            <span className="text-sm text-[#6B7280]">
              Page <span className="font-semibold text-[#0F172A]">{pageNum}</span> / {totalPages}
            </span>

            <Link
              href={`/villes/page/${Math.min(totalPages, pageNum + 1)}/`}
              aria-disabled={pageNum === totalPages}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pageNum === totalPages ? "text-[#94A3B8] pointer-events-none" : "text-[#0F172A] hover:bg-[#F9FAFB]"
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


