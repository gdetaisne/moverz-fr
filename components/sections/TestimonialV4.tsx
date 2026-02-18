"use client";

/**
 * V4 — Testimonials carousel (vrais avis Google)
 * Affiche les 3 avis avec le plus de texte. JAMAIS le nombre d'avis.
 */

import { useState, useEffect, useCallback } from "react";
import { MOVERZ_REVIEWS } from "@/lib/reviews";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUpSection } from "@/components/motion";

// On prend les avis qui ont un vrai body (> 20 chars)
const reviews = MOVERZ_REVIEWS.filter((r) => r.body.length > 20);

export function TestimonialV4() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % reviews.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length),
    []
  );

  // Auto-advance toutes les 6s
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const review = reviews[current];

  return (
    <FadeUpSection className="py-12 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container max-w-3xl text-center">
        {/* Stars */}
        <div className="mb-6 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4"
              fill={i < Math.floor(review.rating) ? "#0EA5A6" : "none"}
              stroke={i < Math.floor(review.rating) ? "#0EA5A6" : "var(--color-border)"}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="space-y-6">
          <p
            className="font-heading text-[clamp(18px,3.5vw,28px)] font-medium leading-[1.4] tracking-[-0.01em]"
            style={{ color: "var(--color-text)" }}
          >
            &ldquo;{review.body}&rdquo;
          </p>
          <footer>
            <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
              {review.author}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
              Avis Google · {review.date}
            </p>
          </footer>
        </blockquote>

        {/* Navigation */}
        {reviews.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-[rgba(14,165,166,0.05)]"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
              aria-label="Avis précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 8,
                    background: i === current ? "var(--color-accent)" : "var(--color-border)",
                  }}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-[rgba(14,165,166,0.05)]"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
              aria-label="Avis suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </FadeUpSection>
  );
}
