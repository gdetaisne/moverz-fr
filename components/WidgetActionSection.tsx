"use client";

import MoverzWidgetEmbed from "@/components/MoverzWidgetEmbed";
import type { ReactNode } from "react";

type WidgetActionSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  source: string;
  from: string;
  citySlug?: string;
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none text-[#2B7A78]"
      fill="none"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
      {children}
    </span>
  );
}

export default function WidgetActionSection({
  eyebrow = "Passer à l’action",
  title,
  subtitle,
  source,
  from,
  citySlug,
}: WidgetActionSectionProps) {
  return (
    <section className="section section-light">
      <div className="container max-w-6xl">
        {/* Gradient border wrapper */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#04163a] via-[#2B7A78] to-[#04163a] p-[1px] shadow-[0_24px_70px_rgba(4,22,58,0.18)]">
          {/* Glass panel */}
          <div className="rounded-[31px] bg-[#0B1220]">
            <div className="relative overflow-hidden rounded-[31px] px-6 py-8 md:px-10 md:py-10 text-white">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#6BCFCF]/25 blur-3xl" />
                <div className="absolute -bottom-52 -right-40 h-[620px] w-[620px] rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Copy */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
                      {eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                      {title}
                    </h2>
                    <p className="text-base md:text-lg text-white/75 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm md:text-base text-white/85">
                    <li className="flex gap-3">
                      <CheckIcon />
                      <span>Devis comparables (volume fiabilisé par l’IA)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon />
                      <span>Pros contrôlés (assurances + historique)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckIcon />
                      <span>0 spam, dossier anonyme, 100% gratuit</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <TrustChip>5+ devis</TrustChip>
                    <TrustChip>0 spam</TrustChip>
                    <TrustChip>100% gratuit</TrustChip>
                    <TrustChip>Support Moverz</TrustChip>
                  </div>
                </div>

                {/* Widget */}
                <div className="lg:col-span-7">
                  {/* Cadre fin (évite l'effet "device") */}
                  <div className="mx-auto w-full max-w-[560px] rounded-2xl border border-white/10 bg-white/95 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                    <div className="rounded-xl border border-[#E3E5E8] bg-white">
                      <MoverzWidgetEmbed
                        source={source}
                        from={from}
                        citySlug={citySlug}
                        // Low min-height just to avoid layout shift before script mounts
                        className="min-h-[340px] sm:min-h-[380px] md:min-h-[420px] w-full"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-white/55">
                    Astuce: préparez 2–3 photos des pièces principales pour accélérer l’estimation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


