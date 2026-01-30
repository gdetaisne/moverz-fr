"use client";

import { useEffect, useMemo, useState } from "react";
import { MOVERZ_REVIEWS, getAverageRating, getTotalReviews } from "@/lib/reviews";

function Stars({ value }: { value: number }) {
  // Display 5 stars (visual), and show numeric rating next to it (no fake precision).
  const full = Math.round(Math.min(5, Math.max(0, value)));
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-[#F59E0B]" aria-hidden="true">
        {"★".repeat(full)}
        <span className="text-[#CBD5E1]">{"★".repeat(5 - full)}</span>
      </span>
      <span className="text-xs font-semibold text-[#0F172A]">
        {value.toFixed(1).replace(".", ",")}/5 · {getTotalReviews()} avis
      </span>
    </span>
  );
}

export default function BlogFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [fromPath, setFromPath] = useState<string>("/blog");
  const [reviewIndex, setReviewIndex] = useState<number>(0);

  const rating = useMemo(() => getAverageRating(MOVERZ_REVIEWS), []);
  const review = MOVERZ_REVIEWS[Math.min(reviewIndex, MOVERZ_REVIEWS.length - 1)];

  useEffect(() => {
    const onScroll = () => {
      const denom = document.body.scrollHeight - window.innerHeight;
      const scrolled = denom > 0 ? window.scrollY / denom : 0;
      // Align with FloatingWhatsApp hiding threshold (0.4) to avoid overlap.
      setVisible(scrolled > 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setFromPath(window.location.pathname || "/blog/");

    // Stable-per-session review selection (no hydration mismatch: runs client-side only).
    const key = "moverz_blog_review_idx";
    const existing = window.sessionStorage.getItem(key);
    if (existing !== null) {
      const parsed = Number(existing);
      if (!Number.isNaN(parsed)) {
        setReviewIndex(Math.max(0, Math.min(MOVERZ_REVIEWS.length - 1, parsed)));
        return;
      }
    }
    const idx =
      MOVERZ_REVIEWS.length > 0 ? Math.floor(Math.random() * MOVERZ_REVIEWS.length) : 0;
    window.sessionStorage.setItem(key, String(idx));
    setReviewIndex(idx);
  }, []);

  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=${encodeURIComponent(
    fromPath
  )}&channel=blog-floating`;

  const title = "Comparer sans se faire harceler";
  const promise = "Recevez 5+ devis comparés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement.";

  return (
    <>
      {/* Desktop: sticky card (appears after scroll) */}
      <aside
        className={`hidden lg:block fixed right-6 top-24 z-30 w-[320px] transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        }`}
        aria-label="Rappel promesse Moverz"
      >
        <div className="rounded-2xl border border-[#E3E5E8] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="px-5 py-4 border-b border-[#E3E5E8] bg-gradient-to-br from-[#F8FAFC] to-white">
            <p className="text-sm font-bold text-[#0F172A]">{title}</p>
            <p className="mt-1 text-sm text-[#334155] leading-snug">{promise}</p>
          </div>

          <div className="px-5 py-4 space-y-3">
            <Stars value={rating} />

            {review ? (
              <div className="rounded-xl border border-[#E3E5E8] bg-[#F8FAFC] p-3">
                <p className="text-xs font-semibold text-[#0F172A]">
                  “{review.summary}”
                </p>
                <p className="mt-1 text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {review.body}
                </p>
              </div>
            ) : null}

            <ul className="text-xs text-[#334155] space-y-1.5">
              <li>
                <span className="font-semibold text-[#0F172A]">Dossier anonyme</span>
              </li>
              <li>
                <span className="font-semibold text-[#0F172A]">Pros contrôlés & assurés</span>
              </li>
              <li>
                <span className="font-semibold text-[#0F172A]">100% gratuit</span>
              </li>
            </ul>

            <a
              href={quoteUrl}
              rel="nofollow"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1E293B] transition-colors"
            >
              Obtenir des devis <span aria-hidden="true">→</span>
            </a>

            <p className="text-[11px] text-[#64748B] leading-snug">
              Promesse client : devis comparables sous 5 à 7 jours (selon dossier).
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile: bottom bar (appears after scroll, aligned with WhatsApp hiding) */}
      <div
        className={`lg:hidden fixed left-0 right-0 bottom-0 z-50 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-6"
        }`}
        aria-label="CTA devis (blog)"
      >
        <div className="mx-auto max-w-md px-3 pb-5">
          <div className="rounded-2xl border border-[#E3E5E8] bg-white/95 backdrop-blur shadow-[0_-10px_40px_rgba(15,23,42,0.10)] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#0F172A] truncate">{title}</p>
                <p className="text-xs text-[#475569] truncate">
                  5+ devis comparés · 5–7 jours · 0 harcèlement
                </p>
              </div>
              <a
                href={quoteUrl}
                rel="nofollow"
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-[#0F172A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#1E293B] transition-colors"
              >
                Obtenir →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

