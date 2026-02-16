"use client";

import Image from "next/image";
import { buildTunnelUrl } from "@/lib/tunnel-url";

type WidgetActionSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  source: string;
  from: string;
  citySlug?: string;
};

export default function WidgetActionSection({
  eyebrow = "Passer à l'action",
  title,
  subtitle,
  source,
  from,
  citySlug,
}: WidgetActionSectionProps) {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E3A5F] text-white">
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6BCFCF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B7A78]/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <div className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-7 md:px-10 md:py-8 text-white shadow-xl">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-start">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Image
                      src="/logo.png"
                      alt="Moverz"
                      width={26}
                      height={26}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
                    {eyebrow}
                  </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {title}
                </h2>
                <p className="text-base text-white/95 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "●", label: "3 min" },
                  { icon: "●", label: "IA" },
                  { icon: "●", label: "Sans démarchage" },
                  { icon: "●", label: "Jusqu'à 5 devis" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                  >
                    <span className="text-[#6BCFCF]">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="max-w-sm mx-auto text-center">
                <a
                  href={buildTunnelUrl({ from, devisRange: "3-5", extra: citySlug ? { city: citySlug } : undefined })}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Comparer mes devis</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


