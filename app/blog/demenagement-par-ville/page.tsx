import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";

const CATEGORY = "demenagement-par-ville";

export const metadata: Metadata = getFullMetadata(
  "blog/demenagement-par-ville",
  "Déménagement par ville : guides & prix locaux | Moverz",
  "Guides et articles de prix par ville : déménagement à Paris, Marseille, Lyon, Nice, Bordeaux, Toulouse et autres grandes villes."
);

export default function BlogVillesPage() {
  const posts = BLOG_POSTS.filter((post) => post.category === CATEGORY);

  const postsByCity = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const key = post.citySlug || "autres";
    if (!acc[key]) acc[key] = [];
    acc[key].push(post);
    return acc;
  }, {});

  const sortedCities = Object.keys(postsByCity).sort();

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Blog déménagement
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Déménagement par ville : prix & conseils locaux
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
            Retrouvez les guides et articles de prix dédiés à chaque grande ville : budget,
            quartiers, garde-meuble, astuces locales.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container max-w-5xl space-y-8">
          {sortedCities.map((city) => {
            const cityPosts = postsByCity[city];
            const label =
              city === "autres"
                ? "Autres villes"
                : `Déménagement ${city.charAt(0).toUpperCase()}${city.slice(1)}`;

            return (
              <div key={city} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#04163a]">
                    {label}
                  </h2>
                  {city !== "autres" && (
                    <a
                      href={`/demenagement/${city}/`}
                      className="text-xs md:text-sm text-[#2B7A78] hover:text-[#04163a] underline underline-offset-4"
                    >
                      Voir la page déménagement {city}
                    </a>
                  )}
                </div>
                <div className="space-y-3">
                  {cityPosts.map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}/`}
                      className="group flex flex-col gap-1 rounded-2xl border border-[#E3E5E8] bg-white px-5 py-4 hover:border-[#6BCFCF]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
                        <span className="rounded-full bg-[#F0F4F8] px-2 py-0.5 font-semibold text-[11px] text-[#2B7A78]">
                          {city === "autres" ? "Ville" : city}
                        </span>
                        {post.readingTimeMinutes && (
                          <span>{post.readingTimeMinutes} min de lecture</span>
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-[#04163a] group-hover:text-[#2B7A78]">
                        {post.title}
                      </h3>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}


