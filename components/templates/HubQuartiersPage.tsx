import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getPricePostForCity } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";

export type Neighborhood = {
  slug: string;
  name: string;
  description?: string;
};

export type HubQuartiersPageProps = {
  citySlug: string;
  cityName: string;
  neighborhoods: Neighborhood[];
};

export function generateHubQuartiersMetadata(
  citySlug: string,
  cityName: string
): Metadata {
  const path = `quartiers-${citySlug}`;
  const title = `Quartiers & communes — Déménagement à ${cityName}`;
  const description = `Trouvez votre page quartier/commune pour estimer votre déménagement à ${cityName}. Déménageurs locaux contrôlés · 0€ · Sans démarchage`;

  return getFullMetadata(path, title, description);
}

export function HubQuartiersPage({
  citySlug,
  cityName,
  neighborhoods,
}: HubQuartiersPageProps) {
  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?city_slug=${citySlug}&source=moverz.fr&from=/quartiers-${citySlug}/`;
  const pricePost = getPricePostForCity(citySlug);

  return (
    <main className="bg-white">
      <div className="bg-[var(--color-bg-dark)]">
        <div className="container max-w-6xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${cityName}`, href: `/demenagement/${citySlug}/` },
              { label: `Quartiers ${cityName}`, href: `/quartiers-${citySlug}/` },
            ]}
          />
        </div>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
              {cityName}
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl">
              Quartiers & communes<br />
              <span className="text-brand-turquoise">Déménagement à {cityName}</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Trouvez votre quartier pour estimer votre déménagement avec des déménageurs locaux contrôlés.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={quoteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[var(--color-text)] shadow-lg hover:bg-[#F3F4F6] transition-colors"
              >
                <span>Comparer les déménageurs</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des quartiers */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-xs font-medium text-brand-turquoise">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
              Zones couvertes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
              Tous nos quartiers à {cityName}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {neighborhoods.length} quartiers couverts par nos déménageurs partenaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((neighborhood) => (
              <a
                key={neighborhood.slug}
                href={`/${citySlug}/${neighborhood.slug}/`}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 hover:border-brand-turquoise hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-brand-turquoise transition-colors mb-2">
                      {neighborhood.name}
                    </h3>
                    {neighborhood.description && (
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {neighborhood.description}
                      </p>
                    )}
                  </div>
                  <span className="text-brand-turquoise group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Maillage interne : ressources utiles */}
          <div className="pt-6">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
                Ressources utiles
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Avant de comparer vos devis, voici les pages les plus utiles pour préparer votre déménagement à {cityName}.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
                <a
                  href={`/demenagement/${citySlug}/`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-bg-dark)] transition-colors"
                >
                  <span>Guide déménagement {cityName}</span>
                  <span>→</span>
                </a>
                {pricePost ? (
                  <a
                    href={`/blog/${pricePost.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
                  >
                    <span>Prix à {cityName}</span>
                    <span>→</span>
                  </a>
                ) : (
                  <a
                    href="/blog/prix-et-devis/"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
                  >
                    <span>Guides prix & devis</span>
                    <span>→</span>
                  </a>
                )}
                <a
                  href="/blog/checklists-et-guides/"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
                >
                  <span>Checklists & guides</span>
                  <span>→</span>
                </a>
                <a
                  href="/blog/conseils-demenagement/"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
                >
                  <span>Conseils déménagement</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi comparer */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-xs font-medium text-brand-turquoise">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
              Pourquoi Moverz
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
              Pourquoi comparer avec Moverz ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-turquoise/10 text-brand-turquoise text-xl font-bold">
                ✓
              </div>
              <h3 className="text-base font-bold text-[var(--color-text)]">
                Déménageurs contrôlés
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Assurances, solvabilité, historique vérifié
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-turquoise/10 text-brand-turquoise text-xl font-bold">
                🤖
              </div>
              <h3 className="text-base font-bold text-[var(--color-text)]">
                IA volume en 1 minute
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Estimation précise de votre cubage
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-turquoise/10 text-brand-turquoise text-lg font-bold">
                =
              </div>
              <h3 className="text-base font-bold text-[var(--color-text)]">
                Devis comparables
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Même volume, même base pour tous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
            Gratuit · Sans spam · Sans engagement
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Prêt à déménager<br />à {cityName} ?
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            3 minutes pour créer votre dossier, des déménageurs contrôlés qui chiffrent le même volume.
          </p>

          <div className="pt-4">
            <a
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[var(--color-text)] shadow-lg hover:bg-[#F3F4F6] transition-colors"
            >
              <span>Lancer mon comparateur</span>
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


