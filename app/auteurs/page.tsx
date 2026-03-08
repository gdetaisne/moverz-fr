import type { Metadata } from "next";
import Image from "next/image";
import { AUTHORS } from "@/lib/authors";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre équipe — Les auteurs Moverz",
  description: "Lucie et Guillaume, les experts derrière les guides Moverz. Marketing, relocation, logistique : des vrais spécialistes du déménagement.",
  alternates: { canonical: "https://moverz.fr/auteurs/" },
};

export default function AuteursPage() {
  const authors = Object.values(AUTHORS);

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-page)" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, #0B0F14 0%, #111820 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,166,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative container max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}
          >
            L'équipe éditoriale
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des vrais experts derrière chaque article
          </h1>
          <p className="text-base text-white/65 max-w-xl mx-auto">
            Tous les guides Moverz sont écrits par Lucie ou Guillaume — des personnes
            qui connaissent le secteur du déménagement de l'intérieur, pas des rédacteurs
            généralistes.
          </p>
        </div>
      </section>

      {/* Cards auteurs */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {authors.map((author) => {
              const articleCount = PUBLISHED_BLOG_POSTS.filter(
                (p) => p.authorSlug === author.slug
              ).length;

              return (
                <div
                  key={author.slug}
                  className="rounded-2xl border p-7 flex flex-col"
                  style={{ background: "white", borderColor: "var(--color-border)" }}
                >
                  {/* Photo + nom */}
                  <div className="flex items-start gap-4 mb-5">
                    <a
                      href={`/auteurs/${author.slug}/`}
                      className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2"
                      style={{ borderColor: "rgba(14,165,166,0.3)" }}
                    >
                      <span
                        className="absolute inset-0 flex items-center justify-center text-xl font-bold"
                        style={{ background: "rgba(14,165,166,0.1)", color: "#0EA5A6", zIndex: 0 }}
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
                    </a>
                    <div>
                      <a
                        href={`/auteurs/${author.slug}/`}
                        className="font-bold text-lg hover:underline"
                        style={{ color: "var(--color-text)" }}
                      >
                        {author.name}
                      </a>
                      <p className="text-sm mt-0.5" style={{ color: "#0EA5A6" }}>
                        {author.role}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                        {articleCount} article{articleCount > 1 ? "s" : ""} publié{articleCount > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--color-text-secondary)" }}>
                    {author.bioShort}
                  </p>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {author.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(14,165,166,0.07)", color: "#0EA5A6" }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                    <a
                      href={`/auteurs/${author.slug}/`}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      Voir ses articles →
                    </a>
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                      style={{ color: "#0EA5A6" }}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
