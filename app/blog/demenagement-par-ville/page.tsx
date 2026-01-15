import type { Metadata } from "next";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";
import PageHero from "@/components/PageHero";
import { getCityBySlug } from "@/lib/cities";

const CATEGORY = "demenagement-par-ville";

export const metadata: Metadata = getFullMetadata(
  "blog/demenagement-par-ville",
  "Déménagement par ville : guides & prix locaux | Moverz",
  "Guides et articles de prix par ville : déménagement à Paris, Marseille, Lyon, Nice, Bordeaux, Toulouse et autres grandes villes."
);

type PageProps = {
  searchParams?: {
    city?: string;
  };
};

function formatCityLabel(citySlug: string): string {
  const city = getCityBySlug(citySlug);
  if (city) return city.nameCapitalized;
  return citySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function BlogVillesPage({ searchParams }: PageProps) {
  const posts = PUBLISHED_BLOG_POSTS.filter((post) => post.category === CATEGORY);

  const postsByCity = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const key = post.citySlug || "autres";
    if (!acc[key]) acc[key] = [];
    acc[key].push(post);
    return acc;
  }, {});

  const cityCounts = Object.entries(postsByCity)
    .map(([city, cityPosts]) => ({ city, count: cityPosts.length }))
    .sort((a, b) => b.count - a.count);

  const sortedCities = cityCounts.map((c) => c.city);

  const selectedCityRaw = (searchParams?.city || "").toString().trim().toLowerCase();
  const selectedCity = selectedCityRaw && postsByCity[selectedCityRaw] ? selectedCityRaw : "";
  const selectedPosts = selectedCity ? postsByCity[selectedCity] : null;

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: "Par ville", href: "/blog/demenagement-par-ville/" },
        ]}
        eyebrow="Blog déménagement"
        title="Déménagement par ville : prix & conseils locaux"
        subtitle="Choisissez une ville pour accéder rapidement à ses guides (prix, quartiers, garde‑meuble, astuces locales)."
        primaryCta={{
          label: "Comparer 3 devis minimum gratuitement",
          href: "https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/blog/demenagement-par-ville/",
        }}
        secondaryCta={{ label: "Voir les guides prix", href: "/blog/prix-et-devis/" }}
      />

      <section className="section section-light">
        <div className="container max-w-5xl space-y-8">
          {/* Sélecteur ville */}
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-semibold text-[#04163a]">
                  Rechercher par ville
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Sélectionnez une ville pour afficher uniquement ses articles (plus lisible).
                </p>
              </div>
              <form method="GET" action="/blog/demenagement-par-ville/" className="flex gap-2">
                <select
                  name="city"
                  defaultValue={selectedCity || ""}
                  className="h-11 rounded-xl border border-[#E3E5E8] bg-white px-4 text-sm text-[#04163a] min-w-[240px]"
                >
                  <option value="">Toutes les villes</option>
                  {sortedCities
                    .filter((c) => c !== "autres")
                    .map((city) => (
                      <option key={city} value={city}>
                        {formatCityLabel(city)} ({postsByCity[city].length})
                      </option>
                    ))}
                  {postsByCity.autres?.length ? (
                    <option value="autres">Autres ({postsByCity.autres.length})</option>
                  ) : null}
                </select>
                <button
                  type="submit"
                  className="h-11 rounded-xl bg-[#0F172A] px-5 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
                >
                  Voir
                </button>
              </form>
            </div>

            {/* Raccourcis: top villes */}
            <div className="flex flex-wrap gap-2">
              {cityCounts
                .filter((c) => c.city !== "autres")
                .slice(0, 12)
                .map(({ city, count }) => (
                  <a
                    key={city}
                    href={`/blog/demenagement-par-ville/?city=${encodeURIComponent(city)}`}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      selectedCity === city
                        ? "border-[#6BCFCF] bg-[#E6FFFA] text-[#205a5a]"
                        : "border-[#E3E5E8] bg-white text-[#04163a] hover:border-[#6BCFCF]/60 hover:bg-[#FAFAFA]"
                    }`}
                  >
                    {formatCityLabel(city)} · {count}
                  </a>
                ))}
              {selectedCity && (
                <a
                  href="/blog/demenagement-par-ville/"
                  className="rounded-full border border-[#E3E5E8] bg-white px-3 py-1.5 text-xs font-semibold text-[#6B7280] hover:text-[#04163a] hover:border-[#6BCFCF]/60 transition-colors"
                >
                  Réinitialiser
                </a>
              )}
            </div>
          </div>

          {/* Résultats */}
          {selectedPosts ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#04163a]">
                  {selectedCity === "autres"
                    ? "Autres villes"
                    : `Déménagement ${formatCityLabel(selectedCity)}`}
                </h2>
                {selectedCity !== "autres" && (
                  <a
                    href={`/demenagement/${selectedCity}/`}
                    className="text-xs md:text-sm text-[#2B7A78] hover:text-[#04163a] underline underline-offset-4"
                  >
                    Voir la page déménagement {formatCityLabel(selectedCity)}
                  </a>
                )}
              </div>

              <div className="space-y-3">
                {selectedPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="group flex flex-col gap-1 rounded-2xl border border-[#E3E5E8] bg-white px-5 py-4 hover:border-[#6BCFCF]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
                      <span className="rounded-full bg-[#F0F4F8] px-2 py-0.5 font-semibold text-[11px] text-[#2B7A78]">
                        {selectedCity === "autres" ? "Ville" : formatCityLabel(selectedCity)}
                      </span>
                      {post.readingTimeMinutes && <span>{post.readingTimeMinutes} min de lecture</span>}
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-[#04163a] group-hover:text-[#2B7A78]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#4b5c6b] line-clamp-2">{post.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h2 className="text-xl md:text-2xl font-semibold text-[#04163a]">
                  Toutes les villes
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Cliquez sur une ville pour afficher uniquement ses articles.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityCounts
                  .filter((c) => c.city !== "autres")
                  .map(({ city, count }) => (
                    <a
                      key={city}
                      href={`/blog/demenagement-par-ville/?city=${encodeURIComponent(city)}`}
                      className="group rounded-2xl border border-[#E3E5E8] bg-white p-5 hover:border-[#6BCFCF]/60 hover:shadow-md transition-all"
                    >
                      <p className="text-xs text-[#6B7280]">Ville</p>
                      <h3 className="text-base md:text-lg font-semibold text-[#04163a] group-hover:text-[#2B7A78] transition-colors">
                        {formatCityLabel(city)}
                      </h3>
                      <p className="mt-1 text-sm text-[#4b5c6b]">{count} article{count > 1 ? "s" : ""}</p>
                    </a>
                  ))}
                {postsByCity.autres?.length ? (
                  <a
                    href="/blog/demenagement-par-ville/?city=autres"
                    className="group rounded-2xl border border-[#E3E5E8] bg-white p-5 hover:border-[#6BCFCF]/60 hover:shadow-md transition-all"
                  >
                    <p className="text-xs text-[#6B7280]">Ville</p>
                    <h3 className="text-base md:text-lg font-semibold text-[#04163a] group-hover:text-[#2B7A78] transition-colors">
                      Autres
                    </h3>
                    <p className="mt-1 text-sm text-[#4b5c6b]">
                      {postsByCity.autres.length} article{postsByCity.autres.length > 1 ? "s" : ""}
                    </p>
                  </a>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


