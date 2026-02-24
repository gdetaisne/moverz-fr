"use client";

import { useMemo } from "react";
import QuoteBridgeCard from "@/components/QuoteBridgeCard";

type QuoteWidgetShellProps = {
  source: string;
  from: string;
  citySlug?: string;
  className?: string;
};

function buildQuoteUrl(source: string, from: string, citySlug?: string) {
  const base = "https://devis.moverz.fr/devis-gratuits";
  const params = new URLSearchParams();
  params.set("source", source);
  params.set("from", from);
  if (citySlug) params.set("city_slug", citySlug);
  params.set("devis_range", "3-5");
  return `${base}?${params.toString()}`;
}

export default function QuoteWidgetShell({ source, from, citySlug, className }: QuoteWidgetShellProps) {
  const quoteUrl = useMemo(() => buildQuoteUrl(source, from, citySlug), [source, from, citySlug]);

  // Le widget a été retiré : on garde un seul parcours simple (lien).
  return (
    <div className={className}>
      <QuoteBridgeCard quoteUrl={quoteUrl} />
    </div>
  );
}


