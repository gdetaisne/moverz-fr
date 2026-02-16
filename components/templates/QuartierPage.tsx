import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getPricePostForCity } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildTunnelUrl } from "@/lib/tunnel-url";

export type QuartierPageProps = {
  citySlug: string;
  cityName: string;
  quartierSlug: string;
  quartierName: string;
  description: string;
  stats: {
    dossiers: string;
    demenageurs: string;
    delai: string;
  };
  pourquoiMoverz: string;
  accesStationnement: string;
  destinationsFrequentes: Array<{
    href: string;
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

/**
 * Génère metadata optimisée pour pages quartiers
 * 
 * Optimisations SEO (2026-01-30):
 * - Harmonisation messagerie : "devis comparables sous 5–7j" (cohérent avec home/villes)
 * - Suppression "3 min" (promesse peu différenciante vs. compétition)
 * - Ajout "Dossier anonyme" (différenciant Moverz)
 * 
 * Format title: "Déménagement {Quartier} ({Ville}) | Devis 5–7j · Pros locaux"
 * Format desc: "{Quartier}, {Ville} : devis comparables sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€."
 */
export function generateQuartierMetadata(
  citySlug: string,
  cityName: string,
  quartierSlug: string,
  quartierName: string
): Metadata {
  const path = `${citySlug}/${quartierSlug}`;
  const title = `Déménagement ${quartierName} (${cityName}) | Devis 5–7j · Pros locaux`;
  const description = `${quartierName}, ${cityName} : devis comparables sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€.`;

  return getFullMetadata(path, title, description);
}

export function QuartierPage({
  citySlug,
  cityName,
  quartierSlug,
  quartierName,
  description,
  stats,
  pourquoiMoverz,
  accesStationnement,
  destinationsFrequentes,
  faq,
}: QuartierPageProps) {
  const quoteUrl = buildTunnelUrl({ citySlug, from: `/${citySlug}/${quartierSlug}/` });
  const pricePost = getPricePostForCity(citySlug);

  return (
    <main className="bg-white">
      <div className="bg-[#0F172A]">
        <div className="container max-w-6xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${cityName}`, href: `/demenagement/${citySlug}/` },
              { label: `Quartiers ${cityName}`, href: `/quartiers-${citySlug}/` },
              { label: quartierName, href: `/${citySlug}/${quartierSlug}/` },
            ]}
          />
        </div>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          {/* Breadcrumb / lien retour ville */}
          <div className="mb-6">
            <a
              href={`/demenagement/${citySlug}/`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Retour à Déménagement {cityName}</span>
            </a>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              {quartierName} · {cityName}
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl">
              Déménager à {quartierName} ?<br />
              <span className="text-[#6BCFCF]">3 min, des devis.</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {description}
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

      {/* Stats */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
                {stats.dossiers}
              </div>
              <div className="text-sm text-[#6B7280]">Dossiers traités</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
                {stats.demenageurs}
              </div>
              <div className="text-sm text-[#6B7280]">Déménageurs contrôlés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
                {stats.delai}j
              </div>
              <div className="text-sm text-[#6B7280]">Délai moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Moverz */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Pourquoi Moverz
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Déménager à {quartierName} avec Moverz
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#4b5c6b] leading-relaxed">
            {pourquoiMoverz}
          </p>
        </div>
      </section>

      {/* Accès & Stationnement */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Accès & Stationnement
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Contraintes d'accès à {quartierName}
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#4b5c6b] leading-relaxed">
            {accesStationnement}
          </p>

          {/* Maillage interne : ressources utiles */}
          <div className="pt-4">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
                Ressources utiles
              </p>
              <p className="text-sm text-[#6B7280] max-w-2xl mx-auto">
                Pour préparer votre déménagement à {quartierName}, voici les pages les plus utiles.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
                <a
                  href={`/demenagement/${citySlug}/`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
                >
                  <span>Guide déménagement {cityName}</span>
                  <span>→</span>
                </a>
                <a
                  href={`/quartiers-${citySlug}/`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                >
                  <span>Tous les quartiers de {cityName}</span>
                  <span>→</span>
                </a>
                {pricePost ? (
                  <a
                    href={`/blog/${pricePost.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                  >
                    <span>Prix à {cityName}</span>
                    <span>→</span>
                  </a>
                ) : (
                  <a
                    href="/blog/prix-et-devis/"
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA] transition-colors"
                  >
                    <span>Guides prix & devis</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations fréquentes */}
      {destinationsFrequentes.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Destinations fréquentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                Depuis {quartierName}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {destinationsFrequentes.map((dest) => (
                <a
                  key={dest.href}
                  href={dest.href}
                  className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 hover:border-[#6BCFCF] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#6BCFCF] transition-colors mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">{dest.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-4xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Questions fréquentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              FAQ {quartierName}
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base md:text-lg font-bold text-[#0F172A]">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Gratuit · Sans spam · Sans engagement
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Prêt à déménager<br />depuis {quartierName} ?
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            3 minutes pour créer votre dossier, des déménageurs contrôlés qui chiffrent le même volume.
          </p>

          <div className="pt-4">
            <a
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#F3F4F6] transition-colors"
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


