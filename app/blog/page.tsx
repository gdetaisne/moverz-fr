"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { BLOG_POSTS } from "@/lib/blog";

const ITEMS_PER_PAGE = 20;

const CATEGORIES = [
  { slug: "all", label: "Tous les articles" },
  { slug: "prix-et-devis", label: "Prix & devis" },
  { slug: "checklists-et-guides", label: "Checklists & guides" },
  { slug: "demenagement-par-ville", label: "Par ville" },
  { slug: "conseils-demenagement", label: "Conseils" },
];

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

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const featured = BLOG_POSTS.slice(0, 3);

  // Filtrer les articles (hors featured)
  const filteredPosts = useMemo(() => {
    const allPosts = BLOG_POSTS.slice(3); // Exclure les 3 featured
    if (activeCategory === "all") return allPosts;
    return allPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset page when category changes
  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(107,207,207,0.15),transparent_50%)]" />
        
        <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Blog déménagement
            </div>

            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl">
              Guides, prix & checklists
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {filteredPosts.length + 3} articles pour préparer votre déménagement sereinement.
            </p>
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              À lire en priorité
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
              Nos meilleurs guides
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group"
              >
                <article className="h-full rounded-2xl border border-[#E5E7EB] bg-white p-6 hover:border-[#6BCFCF] hover:shadow-lg transition-all">
                  <div className="flex flex-col gap-4 h-full">
                    {post.category && (
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-3 py-1 text-xs font-semibold text-[#6BCFCF]">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#6BCFCF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                      {post.readingTimeMinutes && <span>{post.readingTimeMinutes} min</span>}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Articles list */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 space-y-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === cat.slug
                    ? "bg-[#0F172A] text-white shadow-md"
                    : "bg-[#F9FAFB] text-[#6B7280] hover:bg-[#F3F4F6]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center">
            <p className="text-sm text-[#6B7280]">
              {filteredPosts.length} article{filteredPosts.length > 1 ? "s" : ""} trouvé{filteredPosts.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Articles list */}
          {currentPosts.length > 0 ? (
            <div className="space-y-3">
              {currentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 hover:border-[#6BCFCF] hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
                    {post.category && (
                      <span className="rounded-full bg-[#F0F4F8] px-2.5 py-0.5 font-semibold text-[#2B7A78]">
                        {post.category}
                      </span>
                    )}
                    {post.citySlug && (
                      <span className="rounded-full bg-[#F9FAFB] px-2.5 py-0.5 text-[#6B7280]">
                        {post.citySlug}
                      </span>
                    )}
                    {post.readingTimeMinutes && (
                      <span>· {post.readingTimeMinutes} min</span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-[#0F172A] group-hover:text-[#6BCFCF] transition-colors">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#6B7280]">Aucun article dans cette catégorie.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Précédent
              </button>

              <div className="flex gap-1">
                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 7) {
                    pageNum = i + 1;
                  } else if (currentPage <= 4) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i;
                  } else {
                    pageNum = currentPage - 3 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`h-10 w-10 rounded-lg text-sm font-semibold transition-all ${
                        currentPage === pageNum
                          ? "bg-[#0F172A] text-white"
                          : "text-[#6B7280] hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Suivant →
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

