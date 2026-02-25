"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { LONGTAIL_LINKS } from "@/lib/blog-longtail-links";
import { BookOpen, Clock, TrendingUp, Filter, ArrowRight } from "lucide-react";
// import BlogFloatingCTA from "@/components/blog/BlogFloatingCTA";

const ITEMS_PER_PAGE = 12;

const CATEGORIES = [
  { slug: "all", label: "Tous les articles" },
  { slug: "prix-et-devis", label: "Prix & devis" },
  { slug: "checklists-et-guides", label: "Checklists & guides" },
  { slug: "demenagement-par-ville", label: "Par ville" },
  { slug: "cas-frequents", label: "Cas fréquents" },
  { slug: "conseils-demenagement", label: "Conseils" },
  { slug: "pro", label: "Déménageurs (Pro)" },
];

export default function BlogIndexClient() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const isPro = activeCategory === "pro";

  const validPosts = useMemo(
    () => PUBLISHED_BLOG_POSTS.filter((p) => p && p.slug),
    []
  );

  const proPosts = useMemo(
    () => validPosts.filter((p) => p.category === "pro"),
    [validPosts]
  );

  const heroTitle = isPro ? "Guides pour déménageurs" : "Guides, prix & checklists";
  const heroSubtitle = isPro
    ? "Devis plus fiables, moins de litiges, relances efficaces : des articles concrets, orientés ROI."
    : `${validPosts.length} articles pour préparer votre déménagement sereinement. Conseils d'experts, prix réels, et guides pratiques.`;

  const featured = useMemo(() => {
    if (isPro) return proPosts.slice(0, 3);
    // Évite de pousser du B2B en "featured" sur le blog grand public.
    return validPosts.filter((p) => p.category !== "pro").slice(0, 3);
  }, [isPro, proPosts, validPosts]);

  const featuredSlugs = useMemo(() => new Set(featured.map((p) => p.slug)), [featured]);

  const basePosts = useMemo(() => {
    // Tous les posts hors featured.
    // En mode Pro, on liste aussi les Pro hors featured.
    return (isPro ? proPosts : validPosts).filter((p) => !featuredSlugs.has(p.slug));
  }, [featuredSlugs, isPro, proPosts, validPosts]);

  // Filtrer les articles (hors featured)
  const filteredPosts = useMemo(() => {
    const allPosts = basePosts;
    const byCategory =
      activeCategory === "all"
        ? allPosts
        : allPosts.filter((post) => post.category === activeCategory);

    if (!activeTag) return byCategory;
    return byCategory.filter((post) => (post.tags ?? []).includes(activeTag));
  }, [activeCategory, activeTag, basePosts]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset page when category changes
  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setActiveTag(null);
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  // Count articles per category
  const getCategoryCount = (slug: string) => {
    if (slug === "all") return validPosts.length;
    if (slug === "cas-frequents") return LONGTAIL_LINKS.length;
    return validPosts.filter((p) => p.category === slug).length;
  };

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    validPosts.filter((p) => p.category === "pro").forEach((p) => {
      (p.tags ?? []).forEach((t) => tags.add(t));
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b, "fr"));
  }, [validPosts]);

  useEffect(() => {
    const cat = searchParams.get("cat");
    const tag = searchParams.get("tag");

    if (cat && CATEGORIES.some((c) => c.slug === cat)) {
      setActiveCategory(cat);
    }
    if (tag) {
      setActiveTag(tag);
    }
    setCurrentPage(1);
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero - Style Homepage */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28" style={{ 
        background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)"
      }}>
        {/* Grain texture - Premium feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />

        {/* Vignette sur les bords */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.03) 100%)",
          }}
        />
        
        <div className="relative container mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
              <li><a href="/" className="hover:text-[#0EA5A6] transition-colors">Accueil</a></li>
              <li>/</li>
              <li style={{ color: "#111827" }}>Blog</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border" style={{
                color: "#0EA5A6",
                borderColor: "rgba(14,165,166,0.2)",
                background: "rgba(14,165,166,0.05)"
              }}>
                <BookOpen className="w-4 h-4" />
                <span>{isPro ? "Ressources déménageurs" : "Blog déménagement"}</span>
              </div>

              <h1 className="font-heading text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.02em] leading-[1.1]" style={{ color: "#111827" }}>
                {isPro ? (
                  <>
                    Guides pour déménageurs
                    <br />
                    <span style={{ color: "#0EA5A6" }}>devis · litiges · relances</span>
                  </>
                ) : (
                  <>
                    Guides, prix &<br />
                    <span style={{ color: "#0EA5A6" }}>checklists</span>
                  </>
                )}
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6B7280" }}>
                {heroSubtitle}
              </p>

              <form action="/search" method="get" className="max-w-xl">
                <label className="sr-only" htmlFor="blog-search-q">
                  Rechercher sur Moverz
                </label>
                <div className="flex gap-2">
                  <input
                    id="blog-search-q"
                    name="q"
                    placeholder="Rechercher (blog, villes)…"
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5A6]"
                    style={{
                      borderColor: "rgba(0,0,0,0.1)",
                      background: "white",
                      color: "#111827"
                    }}
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl px-5 py-3 text-sm font-semibold transition-colors"
                    style={{
                      background: "#0EA5A6",
                      color: "white"
                    }}
                  >
                    OK
                  </button>
                </div>
                <p className="mt-2 text-xs" style={{ color: "#6B7280" }}>
                  Astuce: essayez "prix", "volume", "Nice", "checklist".
                </p>
              </form>

              <div className="flex flex-wrap gap-3">
                {isPro ? (
                  <>
                    <a
                      href="/partenaires/#contact"
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                      style={{
                        background: "#0EA5A6",
                        color: "white"
                      }}
                    >
                      <span>Demander une démo</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#featured"
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold border-2 transition-all duration-200 hover:bg-gray-50"
                      style={{
                        borderColor: "rgba(0,0,0,0.1)",
                        background: "white",
                        color: "#111827"
                      }}
                    >
                      <span>À lire en priorité</span>
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="#articles"
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                      style={{
                        background: "#0EA5A6",
                        color: "white"
                      }}
                    >
                      <span>Explorer les articles</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#featured"
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold border-2 transition-all duration-200 hover:bg-gray-50"
                      style={{
                        borderColor: "rgba(0,0,0,0.1)",
                        background: "white",
                        color: "#111827"
                      }}
                    >
                      <span>Meilleurs guides</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Right: Stats Cards - Style Homepage */}
            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  label: isPro ? "Articles déménageurs" : "Articles publiés",
                  value: (isPro ? proPosts.length : validPosts.length).toString(),
                },
                { icon: TrendingUp, label: "Lectures/mois", value: "12 000+" },
                { icon: Clock, label: "Temps de lecture moyen", value: "5 min" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group rounded-2xl p-6 border-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: "white",
                    borderColor: i === 0 ? "#0EA5A6" : "rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300" style={{
                      background: "rgba(14,165,166,0.1)"
                    }}>
                      <stat.icon className="w-6 h-6" style={{ color: "#0EA5A6" }} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold" style={{ color: "#111827" }}>{stat.value}</p>
                      <p className="text-sm" style={{ color: "#6B7280" }}>{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Premium Design */}
      <section id="featured" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-6xl px-4 relative">
          <div className="mb-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 border border-brand-turquoise/20 px-5 py-2 text-sm font-semibold text-brand-turquoise">
              <span className="h-2 w-2 rounded-full bg-brand-turquoise animate-pulse" />
              À lire en priorité
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight">
              Nos meilleurs guides
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Les articles les plus complets pour réussir votre déménagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((post, idx) => (
              <div key={post.slug} style={{ animationDelay: `${idx * 100}ms` }}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group block h-full"
                >
                  <article className="relative h-full rounded-2xl border-2 border-[var(--color-border)] bg-white p-8 hover:border-brand-turquoise hover:shadow-[0_20px_60px_rgba(14,165,166,0.15)] hover:-translate-y-2 transition-all duration-300">
                    {/* Gradient glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-turquoise/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      {/* Category badge */}
                      {post.category && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 group-hover:bg-brand-turquoise/20 px-3 py-1.5 text-xs font-bold text-brand-turquoise mb-4 transition-colors">
                          {CATEGORIES.find((c) => c.slug === post.category)?.icon}
                          {CATEGORIES.find((c) => c.slug === post.category)?.label ?? post.category}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-brand-turquoise transition-colors line-clamp-2 mb-4 leading-tight">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 mb-6 leading-relaxed">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)] pt-4 border-t border-[var(--color-border)] group-hover:border-brand-turquoise/30 transition-colors">
                        {post.readingTimeMinutes && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readingTimeMinutes} min</span>
                          </div>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-brand-turquoise font-semibold group-hover:gap-2.5 transition-all ml-auto">
                          Lire l'article
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles with Filters */}
      <section id="articles" className="py-20 md:py-32 bg-white border-t border-[var(--color-border)]">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Section header */}
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
              Tous les articles
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Explorez notre bibliothèque de guides et conseils
            </p>
          </div>

          {/* Filters - Modernisés */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
                <Filter className="w-4 h-4 text-brand-turquoise" />
                <p className="text-sm font-semibold text-[var(--color-text)]">Filtrer par catégorie</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                cat.slug === "cas-frequents" ? (
                  <Link
                    key={cat.slug}
                    href="/blog/cas-frequents/"
                    className="group inline-flex items-center gap-2 rounded-full bg-white border-2 border-gray-200 px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise hover:bg-brand-turquoise/5 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className="text-xs bg-gray-100 group-hover:bg-brand-turquoise/10 px-2 py-0.5 rounded-full transition-colors">
                      {getCategoryCount(cat.slug)}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-turquoise group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ) : (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 shadow-sm ${
                      activeCategory === cat.slug
                        ? "bg-[var(--color-bg-dark)] text-white border-2 border-[var(--color-bg-dark)] shadow-lg scale-105"
                        : "bg-white text-[var(--color-text)] border-2 border-gray-200 hover:border-brand-turquoise hover:bg-brand-turquoise/5 hover:scale-105 hover:shadow-md"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                        activeCategory === cat.slug 
                          ? "bg-white/20 text-white" 
                          : "bg-gray-100 group-hover:bg-brand-turquoise/10"
                      }`}
                    >
                      {getCategoryCount(cat.slug)}
                    </span>
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Tags (Pro) */}
          {(activeCategory === "pro" || activeTag) && availableTags.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-[var(--color-text-secondary)]" />
                <p className="text-sm font-medium text-[var(--color-text-secondary)]">Filtrer par tag</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => handleTagChange(null)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    !activeTag ? "bg-[var(--color-bg-dark)] text-white" : "bg-gray-100 text-[var(--color-text-secondary)] hover:bg-gray-200"
                  }`}
                >
                  Tous
                </button>
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      activeTag === tag
                        ? "bg-[var(--color-bg-dark)] text-white"
                        : "bg-gray-100 text-[var(--color-text-secondary)] hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results count */}
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-text)] font-bold">{filteredPosts.length}</span> article{filteredPosts.length > 1 ? "s" : ""} trouvé{filteredPosts.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Articles Grid - Cards améliorées */}
          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentPosts.map((post, i) => (
                <div key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group block h-full"
                  >
                    <article className="relative h-full rounded-xl border-2 border-[var(--color-border)] bg-white p-6 hover:border-brand-turquoise hover:shadow-[0_12px_40px_rgba(14,165,166,0.12)] hover:-translate-y-1 transition-all duration-300">
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-turquoise/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative">
                        {/* Meta tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {post.category && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-turquoise bg-brand-turquoise/10 group-hover:bg-brand-turquoise/20 px-2 py-1 rounded-full transition-colors">
                              {CATEGORIES.find(c => c.slug === post.category)?.icon}
                            </span>
                          )}
                          {post.citySlug && (
                            <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-gray-100 rounded-full px-2.5 py-1">
                              {post.citySlug}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-[var(--color-text)] group-hover:text-brand-turquoise transition-colors line-clamp-2 mb-3 leading-tight">
                          {post.title}
                        </h3>

                        {/* Description */}
                        {post.description && (
                          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-4 leading-relaxed">
                            {post.description}
                          </p>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-brand-turquoise/30 transition-colors">
                          {post.readingTimeMinutes && (
                            <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{post.readingTimeMinutes} min</span>
                            </div>
                          )}
                          <span className="text-xs font-bold text-brand-turquoise group-hover:gap-2 transition-all inline-flex items-center gap-1">
                            Lire <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-[var(--color-text-secondary)] text-lg font-medium">Aucun article dans cette catégorie.</p>
            </div>
          )}

          {/* Pagination - Modernisée */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] bg-white border-2 border-gray-200 hover:border-brand-turquoise hover:bg-brand-turquoise/5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-white transition-all shadow-sm"
              >
                ← Précédent
              </button>

              <div className="flex gap-2">
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
                      className={`h-11 w-11 rounded-xl text-sm font-bold transition-all shadow-sm ${
                        currentPage === pageNum
                          ? "bg-[var(--color-bg-dark)] text-white shadow-lg scale-110 border-2 border-[var(--color-bg-dark)]"
                          : "bg-white text-[var(--color-text)] border-2 border-gray-200 hover:border-brand-turquoise hover:bg-brand-turquoise/5 hover:scale-105"
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
                className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] bg-white border-2 border-gray-200 hover:border-brand-turquoise hover:bg-brand-turquoise/5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-white transition-all shadow-sm"
              >
                Suivant →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final - Même que homepage */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-bg)" }}>
        <div className="container max-w-2xl text-center space-y-6">
          <h2
            className="font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--color-text)" }}
          >
            <span style={{ color: "var(--color-accent)" }}>3</span> minutes. <span style={{ color: "var(--color-accent)" }}>3</span> devis.
            <br />
            <span style={{ color: "var(--color-accent)" }}>1</span> seule décision.
          </h2>

          <a
            href="https://devis.moverz.fr/devis-gratuits"
            className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ background: "var(--color-text)" }}
          >
            Voir mes 3 meilleurs devis
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Gratuit · Sans engagement · Sans appels
          </p>
        </div>
      </section>
    </main>
  );
}
