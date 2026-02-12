import type { Metadata } from "next";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { CITIES } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";

type SearchPageProps = {
  searchParams?: {
    q?: string | string[];
  };
};

function normalizeForSearch(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export const metadata: Metadata = {
  ...getFullMetadata(
    "search",
    "Recherche : articles & villes",
    "Recherchez un article de blog ou un guide par ville."
  ),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const raw = searchParams?.q;
  const q = typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";
  const needle = normalizeForSearch(q);

  const blogResults =
    needle.length >= 2
      ? PUBLISHED_BLOG_POSTS.filter((post) => {
          const hay = normalizeForSearch(
            [
              post.title,
              post.description,
              post.slug,
              post.citySlug,
              ...(post.tags ?? []),
            ]
              .filter(Boolean)
              .join(" ")
          );
          return hay.includes(needle);
        }).slice(0, 20)
      : [];

  const cityResults =
    needle.length >= 2
      ? CITIES.filter((city) => {
          const hay = normalizeForSearch(`${city.nameCapitalized} ${city.slug} ${city.region}`);
          return hay.includes(needle);
        }).slice(0, 20)
      : [];

  const hasQuery = needle.length >= 2;
  const hasAny = blogResults.length > 0 || cityResults.length > 0;

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <section className="section section-contrast">
        <div className="container max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
            Recherche
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Trouver un article ou une ville
          </h1>
          <p className="text-sm md:text-base text-white/80">
            Tapez au moins 2 caractères (ex: “Nice”, “volume”, “prix”, “checklist”).
          </p>

          <form action="/search" method="get" className="mt-4 flex gap-2">
            <label className="sr-only" htmlFor="search-q">
              Rechercher
            </label>
            <input
              id="search-q"
              name="q"
              defaultValue={q}
              placeholder="Rechercher…"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-turquoise"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-brand-turquoise px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-[#5AB9B9] transition-colors"
            >
              OK
            </button>
          </form>

          {hasQuery ? (
            <p className="text-xs text-white/70">
              Résultats pour <span className="font-semibold text-white">“{q}”</span>
            </p>
          ) : null}
        </div>
      </section>

      <section className="section section-light">
        <div className="container max-w-4xl space-y-10">
          {!hasQuery ? (
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-sm text-[var(--color-text-secondary)]">
              Astuce: utilisez des mots-clés simples (“prix”, “volume”, “démarches”) ou le nom d’une
              ville.
            </div>
          ) : !hasAny ? (
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-sm text-[var(--color-text-secondary)]">
              Aucun résultat. Essayez un autre mot-clé (ou moins spécifique).
            </div>
          ) : null}

          {cityResults.length > 0 ? (
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">Villes</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {cityResults.map((city) => (
                  <a
                    key={city.slug}
                    href={`/demenagement/${city.slug}/`}
                    className="group rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 hover:border-brand-turquoise/60 hover:shadow-sm transition-all"
                  >
                    <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[#2B7A78]">
                      Déménagement {city.nameCapitalized}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{city.region}</p>
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {blogResults.length > 0 ? (
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">Articles</h2>
              <div className="space-y-3">
                {blogResults.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4 hover:border-brand-turquoise/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                      {post.category ? (
                        <span className="rounded-full bg-[#F0F4F8] px-2 py-0.5 font-semibold text-[11px] text-[#2B7A78]">
                          {post.category}
                        </span>
                      ) : null}
                      {post.readingTimeMinutes ? (
                        <span>{post.readingTimeMinutes} min</span>
                      ) : null}
                      {post.citySlug ? <span>· {post.citySlug}</span> : null}
                    </div>
                    <p className="text-base font-semibold text-[var(--color-text)] group-hover:text-[#2B7A78]">
                      {post.title}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{post.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

