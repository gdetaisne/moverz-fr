import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AUTHORS, getAuthor } from "@/lib/authors";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { JsonLd } from "@/components/schema/JsonLd";
import { Linkedin, ArrowRight } from "lucide-react";
import { buildTunnelUrl } from "@/lib/tunnel-url";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const author = getAuthor(params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — ${author.role} | Moverz`,
    description: author.bioShort,
    alternates: { canonical: `https://moverz.fr/auteurs/${author.slug}/` },
    openGraph: {
      title: `${author.name} — ${author.role} | Moverz`,
      description: author.bioShort,
      url: `https://moverz.fr/auteurs/${author.slug}/`,
      type: "profile",
    },
  };
}

export default function AuthorPage({ params }: Props) {
  const author = getAuthor(params.slug);
  if (!author) notFound();

  const articles = PUBLISHED_BLOG_POSTS.filter(
    (p) => p.authorSlug === author.slug
  ).sort((a, b) => (b.publishedAt > a.publishedAt ? 1 : -1));

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://moverz.fr/auteurs/${author.slug}/`,
    name: author.name,
    jobTitle: author.role,
    url: `https://moverz.fr/auteurs/${author.slug}/`,
    image: `https://moverz.fr/images/authors/${author.slug}.jpg`,
    worksFor: { "@id": "https://moverz.fr/#organization" },
    sameAs: [author.linkedin],
    knowsAbout: author.expertise,
    description: author.bioShort,
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-page)" }}>
      <JsonLd id={`person-${author.slug}`} data={personSchema} />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #0B0F14 0%, #111820 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,166,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative container max-w-3xl text-center">
          {/* Avatar */}
          <div
            className="relative inline-block w-24 h-24 rounded-full overflow-hidden border-2 mx-auto mb-5"
            style={{ borderColor: "rgba(14,165,166,0.4)" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
              style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6", zIndex: 0 }}
            >
              {author.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <Image
              src={author.photoUrl}
              alt={author.name}
              fill
              className="object-cover"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Badge rôle */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}
          >
            {author.role}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {author.name}
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-6 leading-relaxed">
            {author.bioLong}
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {author.expertise.map((e) => (
              <span
                key={e}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}
              >
                {e}
              </span>
            ))}
          </div>

          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border transition-all hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "white" }}
          >
            <Linkedin className="w-4 h-4" />
            Voir sur LinkedIn
          </a>
        </div>
      </section>

      {/* Articles */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
            Articles publiés
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
            {articles.length} article{articles.length > 1 ? "s" : ""} rédigé{articles.length > 1 ? "s" : ""} par {author.name.split(" ")[0]}
          </p>

          {articles.length === 0 ? (
            <p style={{ color: "var(--color-text-secondary)" }}>Aucun article publié pour le moment.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {articles.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group rounded-2xl border p-5 hover:shadow-md transition-all"
                  style={{
                    background: "white",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {post.category && (
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#0EA5A6" }}
                    >
                      {post.category.replace(/-/g, " ")}
                    </span>
                  )}
                  <h3
                    className="mt-1 text-sm font-bold leading-snug group-hover:underline"
                    style={{ color: "var(--color-text)" }}
                  >
                    {post.title}
                  </h3>
                  {post.readingTimeMinutes && (
                    <p className="mt-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                      {post.readingTimeMinutes} min de lecture
                    </p>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-contrast">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Un déménagement à préparer ?
          </h2>
          <p className="text-white/70 mb-6">
            Dossier standardisé, déménageurs vérifiés, 3-5 devis comparables. 100% gratuit.
          </p>
          <a
            href={buildTunnelUrl({ from: `auteur-${author.slug}` })}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-all"
            style={{ background: "#F59E0B", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }}
          >
            Obtenir mes devis gratuits
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
