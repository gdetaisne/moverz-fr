import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityGuideFromJson } from "@/lib/city-guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildTunnelUrl } from "@/lib/tunnel-url";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return CITIES.filter((c) => c && c.slug && c.slug !== "ile-de-france").map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);
  if (!city) return {};

  const path = `demenagement/${city.slug}/guide`;
  const title = `Guide déménagement ${city.nameCapitalized} (2000+ mots) : méthode, checklists, devis fiables | Moverz`;
  const description = `Guide long format (2000+ mots) pour déménager à ${city.nameCapitalized}: dossier pour des devis comparables, accès & stationnement, checklists, erreurs fréquentes, méthode jour J.`;

  return getFullMetadata(path, title, description);
}

export default async function CityGuidePage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);
  if (!city) {
    notFound();
  }

  const guide = await getCityGuideFromJson(city.slug);
  if (!guide) {
    // Le JSON est généré au build (Option A). Si absent: on préfère 404 plutôt que recalcul runtime.
    notFound();
  }

  const quoteUrl = buildTunnelUrl({ citySlug: city.slug, from: `/demenagement/${city.slug}/guide/` });

  return (
    <main className="bg-white">
      <div className="bg-v4-text">
        <div className="container max-w-4xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${city.nameCapitalized}`, href: `/demenagement/${city.slug}/` },
              { label: "Guide", href: `/demenagement/${city.slug}/guide/` },
            ]}
          />
        </div>
      </div>

      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-v4-border bg-white p-8 md:p-10 space-y-8">
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent">Guide local</p>
              <h1 className="text-2xl md:text-3xl font-bold text-v4-text">{guide.title}</h1>
              <p className="text-sm md:text-base text-v4-text-secondary max-w-2xl mx-auto">
                {guide.subtitle}{" "}
                <span className="text-v4-text/70">≈ {guide.estimatedReadingMinutes} min • {guide.wordCount} mots</span>
              </p>
              <p className="text-xs text-v4-text-secondary">
                <Link className="underline hover:no-underline" href={`/demenagement/${city.slug}/`}>
                  Retour à la page ville
                </Link>
              </p>
            </div>

            <div className="rounded-2xl border border-v4-border bg-[#F8FAFC] p-6 md:p-7">
              <p className="text-sm font-semibold text-v4-text mb-3">Sommaire</p>
              <ol className="grid gap-2 text-sm text-v4-accent">
                {guide.sections.map((s) => (
                  <li key={s.id}>
                    <a className="hover:underline" href={`#guide-${city.slug}-${s.id}`}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-10">
              {guide.sections.map((s) => (
                <div key={s.id} id={`guide-${city.slug}-${s.id}`} className="scroll-mt-28">
                  <h2 className="text-lg md:text-xl font-semibold text-v4-text">{s.title}</h2>
                  <div className="mt-3 space-y-3">
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {s.bullets?.length ? (
                    <ul className="mt-4 grid gap-2 text-sm md:text-base text-v4-text">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-v4-accent shrink-0" />
                          <span className="text-v4-text/90">{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {s.checklist?.length ? (
                    <div className="mt-5 rounded-2xl border border-v4-border bg-white p-5">
                      <p className="text-sm font-semibold text-v4-text">Checklist</p>
                      <ul className="mt-3 grid gap-2 text-sm text-v4-text-secondary">
                        {s.checklist.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <a
                href={quoteUrl}
                rel="nofollow"
                className="inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-v4-text px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-90"
              >
                Obtenir mes devis
              </a>
              <p className="mt-2 text-xs text-v4-text-secondary">Sans spam · Sans engagement · Dossier en 3 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
