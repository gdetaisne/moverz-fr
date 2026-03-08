import Image from "next/image";
import { getAuthor } from "@/lib/authors";

interface AuthorCardProps {
  authorSlug: string;
  /** compact = byline inline dans l'article | full = carte complète sur page auteur */
  variant?: "compact" | "full";
}

export function AuthorCard({ authorSlug, variant = "compact" }: AuthorCardProps) {
  const author = getAuthor(authorSlug);
  if (!author) return null;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <a
          href={`/auteurs/${author.slug}/`}
          className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden border-2"
          style={{ borderColor: "rgba(14,165,166,0.3)" }}
          aria-label={`Voir le profil de ${author.name}`}
        >
          {/* Fallback initiales en arrière-plan */}
          <span
            className="absolute inset-0 flex items-center justify-center text-xs font-bold"
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
        </a>
        <div className="flex flex-col">
          <a
            href={`/auteurs/${author.slug}/`}
            className="text-sm font-semibold leading-tight hover:underline"
            style={{ color: "var(--color-text)" }}
          >
            {author.name}
          </a>
          <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
            {author.role}
          </span>
        </div>
      </div>
    );
  }

  // variant === "full"
  return (
    <div
      className="rounded-2xl border p-6 flex flex-col sm:flex-row gap-5 items-start"
      style={{
        background: "var(--color-bg)",
        borderColor: "rgba(14,165,166,0.2)",
      }}
    >
      <a
        href={`/auteurs/${author.slug}/`}
        className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2"
        style={{ borderColor: "rgba(14,165,166,0.4)" }}
      >
        {/* Fallback initiales en arrière-plan */}
        <span
          className="absolute inset-0 flex items-center justify-center text-lg font-bold"
          style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6", zIndex: 0 }}
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
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <a
            href={`/auteurs/${author.slug}/`}
            className="font-bold text-base hover:underline"
            style={{ color: "var(--color-text)" }}
          >
            {author.name}
          </a>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: "rgba(14,165,166,0.1)", color: "#0EA5A6" }}
          >
            {author.role}
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {author.bioShort}
        </p>
        <div className="flex gap-3 mt-3">
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold hover:underline"
            style={{ color: "#0EA5A6" }}
          >
            LinkedIn →
          </a>
          <a
            href={`/auteurs/${author.slug}/`}
            className="text-xs font-semibold hover:underline"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Voir tous ses articles →
          </a>
        </div>
      </div>
    </div>
  );
}
