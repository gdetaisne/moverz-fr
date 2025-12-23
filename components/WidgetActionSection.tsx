"use client";

import MoverzWidgetEmbed from "@/components/MoverzWidgetEmbed";
import type { ReactNode } from "react";
import Image from "next/image";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";

type WidgetActionSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  source: string;
  from: string;
  citySlug?: string;
};

function TrustChip({ children }: { children: ReactNode }) {
  return <Chip tone="teal">{children}</Chip>;
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
      <div className="container max-w-5xl">
        {/* Gradient border wrapper */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#04163a] via-[#2B7A78] to-[#04163a] p-[1px] shadow-[0_24px_70px_rgba(4,22,58,0.18)]">
          {/* Glass panel */}
          <div className="rounded-[31px] bg-[#0B1220]">
            <div className="relative overflow-hidden rounded-[31px] px-6 py-7 md:px-10 md:py-8 text-white">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6BCFCF]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#6BCFCF]/25 blur-3xl" />
                <div className="absolute -bottom-52 -right-40 h-[620px] w-[620px] rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative grid gap-7 lg:grid-cols-12 lg:items-start">
                {/* Copy */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F172A]">
                        <div className="absolute inset-0 rounded-xl ring-1 ring-[#6BCFCF]/35" />
                        <Image
                          src="/logo.png"
                          alt="Moverz"
                          width={26}
                          height={26}
                          className="relative h-6.5 w-6.5"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
                          {eyebrow}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {title}
                    </h2>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <TrustChip>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                      3 min
                    </TrustChip>
                    <TrustChip>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                      IA
                    </TrustChip>
                    <TrustChip>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                      0 spam
                    </TrustChip>
                    <TrustChip>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                      5+ devis
                    </TrustChip>
                  </div>
                </div>

                {/* Widget */}
                <div className="lg:col-span-7">
                  {/* Slim card */}
                  <Card className="mx-auto w-full max-w-[520px] border-white/10 bg-white/95 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                    <div className="rounded-xl border border-[#E3E5E8] bg-white">
                      <MoverzWidgetEmbed
                        source={source}
                        from={from}
                        citySlug={citySlug}
                        // Low min-height just to avoid layout shift before script mounts
                        className="min-h-[320px] sm:min-h-[360px] md:min-h-[400px] w-full"
                      />
                    </div>
                  </Card>
                  <p className="mt-2 text-xs text-white/55">
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


