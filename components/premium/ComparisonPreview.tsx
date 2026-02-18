"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Star } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { computeMockQuotes, MockQuote } from "@/lib/utils/mockQuotes";
import { TunnelEntryData } from "@/lib/schemas/tunnel";

interface ComparisonPreviewProps {
  data: Partial<TunnelEntryData>;
  className?: string;
}

function QuoteCard({ quote, index }: { quote: MockQuote; index: number }) {
  return (
    <motion.div
      key={quote.id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <Card shadow className="relative overflow-hidden p-5">
        {/* Badge */}
        {quote.badge && (
          <div className="mb-3 flex items-center gap-2">
            {quote.badge === "best" && (
              <Badge variant="accent" className="gap-1">
                <Star className="h-3 w-3 fill-current" />
                Meilleur rapport qualité/prix
              </Badge>
            )}
            {quote.badge === "verified" && (
              <Badge variant="verified" className="gap-1">
                <Shield className="h-3 w-3" />
                Vérifié
              </Badge>
            )}
          </div>
        )}

        {/* Provider name */}
        <div className="mb-4 flex items-center justify-between border-b border-[rgb(var(--border))] pb-3">
          <h3 className="text-base font-semibold text-[rgb(var(--text))]">{quote.providerName}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-[rgb(var(--primary))]">
              {quote.totalPrice.toLocaleString("fr-FR")} €
            </div>
            <div className="text-xs text-[rgb(var(--muted))]">TTC</div>
          </div>
        </div>

        {/* Line items */}
        <div className="space-y-2.5">
          {quote.lineItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-[rgb(var(--text-2))]">{item.label}</span>
              <span
                className={
                  item.highlight
                    ? "font-semibold text-[rgb(var(--accent-2))]"
                    : "font-medium text-[rgb(var(--text))]"
                }
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export function ComparisonPreview({ data, className }: ComparisonPreviewProps) {
  const quotes = useMemo(() => {
    return computeMockQuotes({
      fromCity: data.fromCity,
      toCity: data.toCity,
      areaM2: data.areaM2,
    }).filter((q) => q.recommended);
  }, [data.fromCity, data.toCity, data.areaM2]);

  const hasData = data.fromCity || data.toCity || data.areaM2;

  return (
    <div className={className}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[rgb(var(--text))]">
          Comparaison en temps réel
        </h3>
        <Badge variant="subtle">Aperçu</Badge>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${data.fromCity}-${data.toCity}-${data.areaM2}`}
          className="space-y-4"
        >
          {quotes.map((quote, index) => (
            <QuoteCard key={quote.id} quote={quote} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {hasData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-xs text-[rgb(var(--muted))]"
        >
          Devis simulés • Les prix réels varient selon vos besoins précis
        </motion.div>
      )}
    </div>
  );
}
