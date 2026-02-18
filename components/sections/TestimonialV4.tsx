"use client";

/**
 * V4 RADICAL — Testimonial
 * Une seule grande citation. Pas 3 cartes.
 */

import { MOVERZ_REVIEWS } from "@/lib/reviews";
import { Star } from "lucide-react";
import { FadeUpSection } from "@/components/motion";

export function TestimonialV4() {
  // Prendre le premier avis 5 étoiles
  const review = MOVERZ_REVIEWS.find((r) => r.rating === 5) || MOVERZ_REVIEWS[0];

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
            className="font-heading text-[clamp(20px,3.5vw,32px)] font-medium leading-[1.4] tracking-[-0.01em]"
            style={{ color: "var(--color-text)" }}
          >
            &ldquo;{review.body}&rdquo;
          </p>
          <footer>
            <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
              {review.author}
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              via Google
            </p>
          </footer>
        </blockquote>
      </div>
    </FadeUpSection>
  );
}
