"use client";

import { useEffect, useMemo, useState } from "react";
import MoverzWidgetEmbed from "@/components/MoverzWidgetEmbed";
import QuoteBridgeCard from "@/components/QuoteBridgeCard";

type QuoteWidgetShellProps = {
  source: string;
  from: string;
  citySlug?: string;
  className?: string;
};

function buildQuoteUrl(source: string, from: string, citySlug?: string) {
  const base = "https://devis.moverz.fr/";
  const params = new URLSearchParams();
  params.set("source", source);
  params.set("from", from);
  if (citySlug) params.set("city_slug", citySlug);
  params.set("devis_range", "3-5");
  return `${base}?${params.toString()}`;
}

export default function QuoteWidgetShell({ source, from, citySlug, className }: QuoteWidgetShellProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const quoteUrl = useMemo(() => buildQuoteUrl(source, from, citySlug), [source, from, citySlug]);

  // Desktop: bridge to phone (WhatsApp/email/copy), because photos are on the phone.
  // Mobile/tablet: embed full funnel (user can immediately take/upload photos).
  if (isDesktop === true) {
    return <QuoteBridgeCard quoteUrl={quoteUrl} />;
  }

  // Avoid mounting the external widget script until we know we're not on desktop
  if (isDesktop === null) {
    return (
      <div className={className}>
        <div className="rounded-2xl bg-white p-6 shadow-lg border border-[#E3E5E8]">
          <div className="animate-pulse space-y-3">
            <div className="h-4 w-40 rounded bg-[#E5E7EB]" />
            <div className="h-10 w-full rounded bg-[#E5E7EB]" />
            <div className="h-10 w-full rounded bg-[#E5E7EB]" />
            <div className="h-10 w-full rounded bg-[#E5E7EB]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#E3E5E8]">
        <MoverzWidgetEmbed source={source} from={from} citySlug={citySlug} className="min-h-[450px] md:min-h-[500px] w-full" />
      </div>
      <p className="mt-3 text-xs text-center text-[#1E293B]/70">
        Astuce: 4 photos (entrée/escaliers, salon, meuble volumineux, accès camion) = devis plus précis.
      </p>
    </div>
  );
}


