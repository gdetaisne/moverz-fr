import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "blog",
  "Blog déménagement : guides, prix et checklists | Moverz",
  "Guides pratiques pour préparer votre déménagement : prix, organisation, cartons, administratif, checklists et erreurs à éviter."
);

export default function BlogIndexPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Blog déménagement
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Guides déménagement, prix & checklists
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
            Tout ce qu&apos;il faut savoir pour préparer votre déménagement : budget, organisation,
            cartons, démarches administratives et erreurs à éviter.
          </p>
        </div>
      </section>

      {/* Listing des articles */}
      <section className="section section-light">
        <div className="container max-w-5xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Derniers articles
            </h2>
            <p className="text-sm md:text-base text-[#4b5c6b]">
              Ce blog sera progressivement enrichi avec les meilleurs contenus issus de nos sites
              historiques et de nouveaux guides Moverz.
            </p>
          </div>

          <div className="space-y-4">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col gap-2 rounded-2xl border border-[#E3E5E8] bg-white px-5 py-4 hover:border-[#6BCFCF]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
                  {post.category && (
                    <span className="rounded-full bg-[#F0F4F8] px-2 py-0.5 font-semibold text-[11px] text-[#2B7A78]">
                      {post.category}
                    </span>
                  )}
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  {post.readingTimeMinutes && (
                    <span>· {post.readingTimeMinutes} min de lecture</span>
                  )}
                </div>
                <h2 className="text-base md:text-lg font-semibold text-[#04163a] group-hover:text-[#2B7A78]">
                  {post.title}
                </h2>
                <p className="text-sm text-[#4b5c6b] line-clamp-2">{post.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


