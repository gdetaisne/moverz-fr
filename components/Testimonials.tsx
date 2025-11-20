"use client";

import { useState } from "react";
import { getRandomReviews, getAverageRating, getTotalReviews } from "@/lib/reviews";

function getInitials(author: string): string {
  const name = author.split(" — ")[0]?.trim() || author.trim();
  if (!name) return "·";
  const parts = name.split(" ").filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "");
  return initials.join("") || "·";
}

function TestimonialCard({ review, index }: { review: any; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const [name, location] = review.author.split(" — ");
  const displayName = name ?? review.author;
  const initials = getInitials(displayName);

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-lg transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-white/30 hover:bg-white/10 motion-safe:animate-fade-up-soft"
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovering
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: 'transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s',
      }}
    >
      {/* Glow effect au hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6BCFCF]/0 to-[#4FB8B8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      
      <div className="relative space-y-5">
        {/* Avatar + Info */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6BCFCF]/30 to-[#4FB8B8]/40 border-2 border-[#6BCFCF]/40 transition-all duration-300 group-hover:border-[#6BCFCF]/60 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(107,207,207,0.5)]">
            <span className="text-sm font-bold text-white">
              {initials}
            </span>
          </div>
          <div>
            <div className="text-base md:text-lg font-bold text-white">
              {displayName}
            </div>
            <div className="text-xs md:text-sm text-white/70">
              {location || review.city}
            </div>
          </div>
        </div>

        {/* Quote épurée */}
        <p className="text-sm md:text-base leading-relaxed text-white/85">
          {review.body}
        </p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const reviews = getRandomReviews(3);
  const averageRating = getAverageRating();
  const ratingLabel = `${averageRating.toString().replace(".", ",")}/5`;

  return (
    <div className="space-y-10">
      {/* Header avec contraste bleu */}
      <div className="space-y-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6BCFCF]">
          Avis clients
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
          Ce que disent nos clients
        </h2>
        
        {/* Rating avec design Stripe-like sur fond sombre */}
        <div className="flex flex-col items-center justify-center gap-3 pt-2">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-6 py-3 shadow-lg">
            <span className="text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-base md:text-lg font-bold text-white">
              {ratingLabel}
          </span>
          </div>
          <p className="text-sm md:text-base text-white/70 font-light max-w-xl mx-auto">
            Clarté des devis · 0 spam · Accompagnement · Pros fiables
          </p>
        </div>
      </div>

      {/* Cards avec tilt 3D subtil */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-6">
        {reviews.map((review, index) => (
          <TestimonialCard key={`${review.summary}-${index}`} review={review} index={index} />
        ))}
      </div>
    </div>
  );
}

