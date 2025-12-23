"use client";

import MoverzWidgetEmbed from "@/components/MoverzWidgetEmbed";
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
    <section className="section section-contrast">
      <div className="container max-w-5xl">
        <div className="relative rounded-2xl border border-white/10 px-6 py-7 md:px-10 md:py-8 text-white">
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
                <p className="text-sm text-white/75 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "●", label: "3 min" },
                  { icon: "●", label: "IA" },
                  { icon: "●", label: "0 spam" },
                  { icon: "●", label: "5+ devis" },
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

            {/* Widget */}
            <div className="lg:col-span-7">
              <div className="mx-auto w-full max-w-[520px] rounded-xl bg-white p-1 shadow-sm">
                <div className="rounded-lg border border-[#E3E5E8] bg-white">
                  <MoverzWidgetEmbed
                    source={source}
                    from={from}
                    citySlug={citySlug}
                    className="min-h-[320px] sm:min-h-[360px] md:min-h-[400px] w-full"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-center text-white/60">
                Astuce: préparez 2–3 photos des pièces principales pour accélérer l'estimation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


