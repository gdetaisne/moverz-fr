"use client";

/**
 * V4 RADICAL — ComparisonExplainer
 * Titre + 3 bullets gauche, tableau droite
 */

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { computeMockQuotes } from "@/lib/utils/mockQuotes";
import { FadeUpSection, StaggerContainer, StaggerItem } from "@/components/motion";

const bullets = [
  "Mêmes lignes de prix pour une comparaison juste",
  "Unités standardisées (m³, km, heures)",
  "Options et services clairement identifiés",
];

export function ComparisonExplainer() {
  const quotes = computeMockQuotes({ fromCity: "Paris", toCity: "Lyon", areaM2: 60 });

  return (
    <FadeUpSection className="py-20 md:py-28" style={{ background: "var(--color-bg)" }}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT — Text */}
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <h2
                className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em]"
                style={{ color: "var(--color-text)" }}
              >
                Voyez exactement ce que vous comparez.
              </h2>
            </StaggerItem>

            <div className="space-y-4">
              {bullets.map((bullet, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(14, 165, 166, 0.1)" }}
                    >
                      <Check className="h-3 w-3" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {bullet}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* RIGHT — Mini table */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="overflow-hidden rounded-[var(--radius-md)] border"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              {/* Header */}
              <div
                className="grid grid-cols-4 text-[11px] font-medium uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)", background: "var(--color-border-light)" }}
              >
                <div className="px-4 py-3">Prestation</div>
                {quotes.map((q) => (
                  <div key={q.id} className="px-4 py-3 text-center">{q.providerName}</div>
                ))}
              </div>

              {/* Rows */}
              {["Main d'œuvre", "Transport", "Cartons", "Assurance"].map((label) => (
                <div
                  key={label}
                  className="grid grid-cols-4 border-t text-sm"
                  style={{ borderColor: "var(--color-border-light)" }}
                >
                  <div className="px-4 py-3" style={{ color: "var(--color-text-secondary)" }}>
                    {label}
                  </div>
                  {quotes.map((q) => {
                    const item = q.lineItems.find((i) =>
                      i.label.toLowerCase().includes(label.toLowerCase().split(" ")[0])
                    );
                    const isInclus = item?.value === "Inclus";
                    return (
                      <div
                        key={q.id}
                        className="px-4 py-3 text-center tabular-nums"
                        style={{
                          color: isInclus ? "var(--color-accent)" : "var(--color-text)",
                          fontWeight: isInclus ? 600 : 400,
                        }}
                      >
                        {item?.value || "—"}
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Total row */}
              <div
                className="grid grid-cols-4 border-t-2 text-sm font-semibold"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="px-4 py-3.5" style={{ color: "var(--color-text)" }}>
                  Total estimé
                </div>
                {quotes.map((q, i) => (
                  <div
                    key={q.id}
                    className="px-4 py-3.5 text-center tabular-nums"
                    style={{ color: i === 0 ? "var(--color-accent)" : "var(--color-text)" }}
                  >
                    {q.totalPrice.toLocaleString("fr-FR")} €
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </FadeUpSection>
  );
}
