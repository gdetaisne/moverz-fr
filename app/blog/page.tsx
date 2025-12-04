import type { Metadata } from "next";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { BLOG_POSTS } from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "blog",
  "Blog déménagement : guides, prix et checklists | Moverz",
  "Guides pratiques pour préparer votre déménagement : prix, organisation, cartons, administratif, checklists et erreurs à éviter."
);

const CATEGORY_IMAGES: Record<string, string[]> = {
  "prix-et-devis": [
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  ],
  "checklists-et-guides": [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?q=80&w=1600&auto=format&fit=crop",
  ],
  "demenagement-par-ville": [
    "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
  ],
  "conseils-demenagement": [
    "https://images.unsplash.com/photo-1597092450864-4c4d4a5d5d4a?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598550874175-4d4a0deb3e5c?q=80&w=1600&auto=format&fit=crop",
  ],
};

const DEFAULT_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1597092450864-4c4d4a5d5d4a?q=80&w=1600&auto=format&fit=crop",
];

function getImageForPost(post: BlogPostMeta, index: number): string {
  const key = post.category ?? "default";
  const pool = CATEGORY_IMAGES[key] ?? DEFAULT_IMAGES;
  return pool[index % pool.length];
}

export default function BlogIndexPage() {
  const posts = BLOG_POSTS;
  const featured = posts.slice(0, 3);
  const moreGuides = posts.slice(3, 9);
  const rest = posts.slice(9, 33);

  const formatDate = (value: string) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      {/* Hero premium */}
      <section className="section section-contrast relative overflow-hidden">
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              Blog déménagement
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
              Guides déménagement, prix & checklists
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Des contenus concrets pour préparer votre déménagement : budget, volume, cartons,
              démarches administratives, déménagement avec enfants et guides par ville.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                Prix & devis
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                Checklists & guides
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                Déménagement par ville
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Guides piliers */}
      {featured.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <div className="mb-10 text-center space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2B7A78]">
                Nos meilleurs guides
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04163a] leading-tight">
                Guides à lire en priorité
              </h2>
              <p className="text-sm md:text-base text-[#4b5c6b] max-w-2xl mx-auto leading-relaxed">
                Une sélection de guides complets pour comprendre les prix, optimiser votre
                organisation et éviter les erreurs classiques.
              </p>
            </div>

            <div className="grid gap-8 max-w-5xl mx-auto">
            {featured.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group"
                >
                  <article className="relative overflow-hidden rounded-3xl bg-white border border-[#E3E5E8] shadow-lg hover:border-[#6BCFCF]/40 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                    <div className="grid md:grid-cols-[320px_1fr]">
                      <div className="relative h-56 md:h-auto overflow-hidden">
                        <img
                          src={getImageForPost(post, index)}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04163a] via-[#04163a]/40 to-transparent" />
                        <div className="absolute top-6 left-6 z-10">
                          {post.category && (
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6BCFCF] text-[#04163a] text-xs font-bold shadow-lg">
                              {post.category}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-[#04163a] leading-tight group-hover:text-[#2B7A78] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#4b5c6b] leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
                          {formatDate(post.publishedAt) && (
                            <span>{formatDate(post.publishedAt)}</span>
                          )}
                          {post.readingTimeMinutes && (
                            <span>· {post.readingTimeMinutes} min de lecture</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[#2B7A78] font-semibold text-sm md:text-base group-hover:gap-3 transition-all">
                          Lire le guide complet
                          <span className="text-base">→</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres guides essentiels */}
      {moreGuides.length > 0 && (
        <section className="section section-light pt-0">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-[#04163a] mb-6 text-center">
              Autres guides essentiels
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {moreGuides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group"
                >
                  <article className="bg-white border border-[#E3E5E8] rounded-3xl overflow-hidden hover:border-[#6BCFCF]/40 hover:scale-105 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="h-2 bg-gradient-to-r from-[#6BCFCF] via-[#2B7A78] to-[#04163a]" />
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                        {post.category || "Guide déménagement"}
                      </p>
                      <h3 className="text-base md:text-lg font-semibold text-[#04163a] group-hover:text-[#2B7A78] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#4b5c6b] line-clamp-3">
                        {post.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between text-xs text-[#6B7280]">
                        <span>{formatDate(post.publishedAt)}</span>
                        {post.readingTimeMinutes && (
                          <span>{post.readingTimeMinutes} min</span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tous les articles (aperçu) */}
      {rest.length > 0 && (
        <section className="section section-light pt-0">
          <div className="container max-w-5xl space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-xl md:text-2xl font-semibold text-[#04163a]">
                Tous les articles du blog
              </h2>
              <p className="text-xs md:text-sm text-[#6B7280]">
                {posts.length} articles au total – de nouveaux guides seront ajoutés régulièrement.
              </p>
            </div>

            <div className="space-y-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col gap-1 rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 hover:border-[#6BCFCF]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#6B7280]">
                    {post.category && (
                      <span className="rounded-full bg-[#F0F4F8] px-2 py-0.5 font-semibold text-[10px] text-[#2B7A78]">
                        {post.category}
                      </span>
                    )}
                    {post.citySlug && (
                      <span className="rounded-full bg-[#F9FAFB] px-2 py-0.5 text-[10px] text-[#4B5563]">
                        {post.citySlug}
                      </span>
                    )}
                    {formatDate(post.publishedAt) && (
                      <span>{formatDate(post.publishedAt)}</span>
                    )}
                    {post.readingTimeMinutes && (
                      <span>· {post.readingTimeMinutes} min</span>
                    )}
                  </div>
                  <p className="text-sm md:text-base font-semibold text-[#04163a] group-hover:text-[#2B7A78] line-clamp-1">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

