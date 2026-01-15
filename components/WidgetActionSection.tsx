"use client";

import HeroMockup from "@/components/HeroMockup";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Image from "next/image";

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
                  { icon: "●", label: "3 devis minimum" },
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

            {/* Mockup + CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* WhatsApp mockup */}
              <div className="mx-auto w-full max-w-[340px]">
                <HeroMockup />
              </div>
              
              {/* WhatsApp CTA */}
              <div className="max-w-sm mx-auto">
                <WhatsAppCTA source={source} variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


