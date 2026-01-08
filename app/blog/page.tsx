"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { formatDateFR } from "@/lib/date/fr";
import { BookOpen, Clock, TrendingUp, Filter, ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 12;

const CATEGORIES = [
  { slug: "all", label: "Tous les articles", icon: "📚" },
  { slug: "prix-et-devis", label: "Prix & devis", icon: "💰" },
  { slug: "checklists-et-guides", label: "Checklists & guides", icon: "✅" },
  { slug: "demenagement-par-ville", label: "Par ville", icon: "🏙️" },
  { slug: "conseils-demenagement", label: "Conseils", icon: "💡" },
];

const formatDate = (value: string) =>
  formatDateFR(value, { day: "2-digit", month: "short", year: "numeric" });

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const featured = PUBLISHED_BLOG_POSTS.slice(0, 3);

  // Filtrer les articles (hors featured)
  const filteredPosts = useMemo(() => {
    const allPosts = PUBLISHED_BLOG_POSTS.slice(3);
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

  // Count articles per category
  const getCategoryCount = (slug: string) => {
    if (slug === "all") return PUBLISHED_BLOG_POSTS.length;
    return PUBLISHED_BLOG_POSTS.filter(p => p.category === slug).length;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        {/* Animated background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        
        <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-[#6BCFCF]" />
                <span>Blog déménagement</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Guides, prix &<br />
                <span className="text-[#6BCFCF]">checklists</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {PUBLISHED_BLOG_POSTS.length} articles pour préparer votre déménagement sereinement. 
                Conseils d'experts, prix réels, et guides pratiques.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#articles"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF] px-6 py-3 text-base font-semibold text-[#0F172A] hover:scale-105 transition-transform duration-300"
                >
                  <span>Explorer les articles</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#featured"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <span>Meilleurs guides</span>
                </a>
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="space-y-4 animate-slide-in-right">
              {[
                { icon: BookOpen, label: "Articles publiés", value: PUBLISHED_BLOG_POSTS.length.toString(), color: "text-[#6BCFCF]" },
                { icon: TrendingUp, label: "Lectures/mois", value: "12 000+", color: "text-[#6BCFCF]" },
                { icon: Clock, label: "Temps de lecture moyen", value: "5 min", color: "text-[#6BCFCF]" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#6BCFCF]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#6BCFCF]/10 flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-white/70">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-semibold text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              À lire en priorité
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
              Nos meilleurs guides
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Les articles les plus complets pour réussir votre déménagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((post, i) => (
              <div key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group block h-full"
                >
                  <article className="h-full rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-[#6BCFCF] hover:shadow-2xl transition-all duration-300">
                    {/* Category badge */}
                    {post.category && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-3 py-1.5 text-xs font-bold text-[#6BCFCF] mb-4">
                        {CATEGORIES.find(c => c.slug === post.category)?.icon}
                        {post.category}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#6BCFCF] transition-colors line-clamp-2 mb-4">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#6B7280] line-clamp-3 mb-6 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-[#6B7280] pt-4 border-t border-gray-200">
                      {post.readingTimeMinutes && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readingTimeMinutes} min</span>
                        </div>
                      )}
                      <span className="inline-flex items-center gap-1 text-[#6BCFCF] font-semibold group-hover:gap-2 transition-all">
                        Lire l'article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles with Filters */}
      <section id="articles" className="py-20 md:py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Section header */}
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Tous les articles
            </h2>
            <p className="text-lg text-[#6B7280]">
              Explorez notre bibliothèque de guides et conseils
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Filter className="w-4 h-4 text-[#6B7280]" />
              <p className="text-sm font-medium text-[#6B7280]">Filtrer par catégorie</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === cat.slug
                      ? "bg-[#0F172A] text-white shadow-lg scale-105"
                      : "bg-gray-100 text-[#6B7280] hover:bg-gray-200 hover:scale-102"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className={`text-xs ${
                    activeCategory === cat.slug ? "text-white/70" : "text-[#6B7280]"
                  }`}>
                    ({getCategoryCount(cat.slug)})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-[#6B7280]">
              <span className="text-[#0F172A] font-bold">{filteredPosts.length}</span> article{filteredPosts.length > 1 ? "s" : ""} trouvé{filteredPosts.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Articles Grid */}
          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentPosts.map((post, i) => (
                <div key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group block h-full"
                  >
                    <article className="h-full rounded-xl border border-gray-200 bg-white p-6 hover:border-[#6BCFCF] hover:shadow-lg transition-all duration-300">
                      {/* Meta tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {post.category && (
                          <span className="text-xs font-semibold text-[#6BCFCF]">
                            {CATEGORIES.find(c => c.slug === post.category)?.icon}
                          </span>
                        )}
                        {post.citySlug && (
                          <span className="text-xs text-[#6B7280] bg-gray-100 rounded-full px-2 py-0.5">
                            {post.citySlug}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#6BCFCF] transition-colors line-clamp-2 mb-3">
                        {post.title}
                      </h3>

                      {/* Description */}
                      {post.description && (
                        <p className="text-sm text-[#6B7280] line-clamp-2 mb-4">
                          {post.description}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        {post.readingTimeMinutes && (
                          <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTimeMinutes} min</span>
                          </div>
                        )}
                        <span className="text-xs font-semibold text-[#6BCFCF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Lire <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg">Aucun article dans cette catégorie.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#6B7280] hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
                      className={`h-10 w-10 rounded-lg text-sm font-bold transition-all ${
                        currentPage === pageNum
                          ? "bg-[#0F172A] text-white shadow-md scale-110"
                          : "text-[#6B7280] hover:bg-gray-100"
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
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#6B7280] hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
