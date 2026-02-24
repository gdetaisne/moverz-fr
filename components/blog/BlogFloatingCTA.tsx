"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MOVERZ_REVIEWS, getAverageRating } from "@/lib/reviews";
import { trackEvent } from "@/lib/tracking";
import { buildTunnelUrl } from "@/lib/tunnel-url";

function Stars({ value }: { value: number }) {
  // Display 5 stars (visual), and show numeric rating next to it (no fake precision).
  const full = Math.round(Math.min(5, Math.max(0, value)));
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-[#F59E0B]" aria-hidden="true">
        {"★".repeat(full)}
        <span className="text-[#CBD5E1]">{"★".repeat(5 - full)}</span>
      </span>
      <span className="text-xs font-semibold text-[var(--color-text)]">
        {value.toFixed(1).replace(".", ",")}/5 sur Google
      </span>
    </span>
  );
}

export default function BlogFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [fromPath, setFromPath] = useState<string>("/blog");
  const [reviewIndex, setReviewIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [liftPx, setLiftPx] = useState<number>(0);
  const rafRef = useRef<number | null>(null);

  const rating = useMemo(() => getAverageRating(MOVERZ_REVIEWS), []);
  const review = MOVERZ_REVIEWS[Math.min(reviewIndex, MOVERZ_REVIEWS.length - 1)];

  useEffect(() => {
    const compute = () => {
      const maxScrollPx = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const y = Math.max(0, window.scrollY);

      // Show once the user has passed the initial "line de flottaison" (≈ first viewport).
      // This is much more stable than using a % of total page height.
      const startPx = Math.round(window.innerHeight * 0.95);
      const isVisible = y > startPx;
      setVisible(isVisible);

      // Progress bar: show only the "reading" portion after the CTA appears.
      const denom = Math.max(1, maxScrollPx - startPx);
      const p = !isVisible ? 0 : Math.min(1, (y - startPx) / denom);
      setScrollProgress(p);

      // Micro parallax / lift (1–2px max) for a premium feel without being distracting.
      // Only when visible to avoid layout jitters near the top.
      const lift = isVisible ? Math.min(2, Math.max(0, p * 2)) : 0;
      setLiftPx(lift);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
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

  const quoteUrl = buildTunnelUrl({ from: fromPath, extra: { channel: "blog-floating", event: "lead_click", placement: "blog_floating" } });

  const title = "Comparer sans se faire harceler";
  const promise = "Comparez des devis comparables sous 5 à 7 jours. Dossier anonyme, 0 harcèlement.";

  const mobilityUrl =
    "https://yx1t4lgsza4.typeform.com/to/RluFyQFU?typeform-source=groupemobility.fr";

  const onCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget?.href || quoteUrl).toString();
    const device = typeof window !== "undefined" && window.innerWidth >= 1024 ? "desktop" : "mobile";

    // 1) Push an explicit event for segmentation (GTM dataLayer via trackEvent)
    trackEvent("blog_floating_cta_click", {
      fromPath,
      channel: "blog-floating",
      device,
      link_url: href,
    });

    // 2) GA4: emit lead_click + uplift_click (transport beacon) to keep measurement simple (no AB testing)
    try {
      const gtag = (window as any)?.gtag;
      if (typeof gtag === "function") {
        const params = {
          transport_type: "beacon",
          page_location: window.location.href,
          page_path: window.location.pathname,
          link_url: href,
          link_text: (e.currentTarget?.textContent || "").trim().slice(0, 120),
          placement: fromPath,
          source: "moverz.fr",
          channel: "blog-floating",
          device,
        };
        gtag("event", "lead_click", params);
        gtag("event", "uplift_click", params);
      }
    } catch {
      // no-op
    }
  };

  const onMobilityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget?.href || mobilityUrl).toString();
    const device = typeof window !== "undefined" && window.innerWidth >= 1024 ? "desktop" : "mobile";

    trackEvent("mobility_click", {
      fromPath,
      channel: "blog-floating",
      device,
      link_url: href,
    });

    try {
      const gtag = (window as any)?.gtag;
      if (typeof gtag === "function") {
        gtag("event", "mobility_click", {
          transport_type: "beacon",
          page_location: window.location.href,
          page_path: window.location.pathname,
          link_url: href,
          link_text: (e.currentTarget?.textContent || "").trim().slice(0, 120),
          placement: fromPath,
          channel: "blog-floating",
          device,
        });
      }
    } catch {
      // no-op
    }
  };

  return (
    <>
      {/* Desktop: sticky card (appears after scroll) */}
      <aside
        className={`hidden lg:block fixed right-6 top-24 z-30 w-[320px] transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        }`}
        aria-label="Rappel promesse Moverz"
        style={{
          transform: visible ? `translateY(-${liftPx}px)` : undefined,
        }}
      >
        <div
          className={`rounded-2xl border bg-white overflow-hidden transition-shadow duration-500 ${
            visible
              ? "border-v4-accent/35 shadow-[0_18px_60px_rgba(15,23,42,0.14),0_0_0_1px_rgba(107,207,207,0.18)]"
              : "border-v4-border shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
          }`}
        >
          {/* Scroll progress (premium, unobtrusive) */}
          <div className="h-1 w-full bg-[#E3E5E8]" aria-hidden="true">
            <div
              className="h-full bg-gradient-to-r from-brand-turquoise via-[#4FB8B8] to-v4-text transition-[width] duration-150 ease-out"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <div className="px-5 py-4 border-b border-v4-border bg-gradient-to-br from-[#F8FAFC] to-white">
            <p className="text-sm font-bold text-v4-text">{title}</p>
            <p className="mt-1 text-sm text-[#334155] leading-snug">{promise}</p>
          </div>

          <div className="px-5 py-4 space-y-3">
            <Stars value={rating} />

            {review ? (
              <div className="rounded-xl border border-v4-border bg-[#F8FAFC] p-3">
                <p className="text-xs font-semibold text-v4-text">
                  “{review.summary}”
                </p>
                <p className="mt-1 text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {review.body}
                </p>
              </div>
            ) : null}

            <ul className="text-xs text-[#334155] space-y-1.5">
              <li>
                <span className="font-semibold text-v4-text">Dossier anonyme</span>
              </li>
              <li>
                <span className="font-semibold text-v4-text">Pros contrôlés & assurés</span>
              </li>
              <li>
                <span className="font-semibold text-v4-text">100% gratuit</span>
              </li>
            </ul>

            <a
              href={quoteUrl}
              rel="nofollow"
              data-ga-tracked="1"
              onClick={onCtaClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-v4-text px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-colors"
            >
              Obtenir des devis <span aria-hidden="true">→</span>
            </a>

            <p className="text-xs text-[#64748B] leading-snug">
              Promesse client : devis comparables sous 5 à 7 jours (selon dossier).
            </p>
          </div>

          {/* Secondary offer (Mobility / relocation) */}
          <div className="px-5 pb-5">
            <div className="rounded-2xl border border-v4-border bg-gradient-to-br from-[#F8FAFC] to-white p-4">
              <p className="text-sm font-bold text-v4-text">À la recherche d&apos;un logement ?</p>
              <p className="mt-1 text-sm text-[#334155] leading-snug">
                Nous vous accompagnons dans votre relocation et gérons l&apos;ensemble de vos démarches.
              </p>
              <a
                href={mobilityUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ga-tracked="1"
                onClick={onMobilityClick}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-v4-text border border-v4-text/10 shadow-sm hover:bg-v4-bg hover:border-brand-turquoise/50 transition-colors"
              >
                Être accompagné(e) <span aria-hidden="true">→</span>
              </a>
            </div>
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
          <div className="rounded-2xl border border-v4-border bg-white/95 backdrop-blur shadow-[0_-10px_40px_rgba(15,23,42,0.10)] px-3 py-3">
            {/* Scroll progress (mobile) */}
            <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-[#E3E5E8]" aria-hidden="true">
              <div
                className="h-full bg-gradient-to-r from-brand-turquoise via-[#4FB8B8] to-v4-text transition-[width] duration-150 ease-out"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-v4-text truncate">{title}</p>
                <p className="text-xs text-[#475569] truncate">
                  des devis comparables · 5–7 jours · 0 harcèlement
                </p>
              </div>
              <a
                href={quoteUrl}
                rel="nofollow"
                data-ga-tracked="1"
                onClick={onCtaClick}
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-v4-text px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition-colors"
              >
                Obtenir →
              </a>
            </div>

            <a
              href={mobilityUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-tracked="1"
              onClick={onMobilityClick}
              className="mt-2 block rounded-xl border border-v4-border bg-white px-3 py-2 text-xs font-semibold text-v4-text hover:border-brand-turquoise/50 hover:bg-[#FAFAFA] transition-colors"
            >
              À la recherche d&apos;un logement ? Relocation → 
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

