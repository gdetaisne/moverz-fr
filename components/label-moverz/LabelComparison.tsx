"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";

const comparisons = [
  {
    name: "Label Moverz",
    highlight: true,
    items: [
      { text: "Analyse financière", status: true },
      { text: "Analyse juridique", status: true },
      { text: "Monitoring continu 48-72h", status: true },
      { text: "Exclusion automatique", status: true },
      { text: "Gratuit pour le déménageur", status: true },
      { text: "Coût pour vous", value: "0€" },
    ],
  },
  {
    name: "Qualipro Déménagement",
    items: [
      { text: "Analyse financière", status: false },
      { text: "Analyse juridique", status: false },
      { text: "Monitoring continu 48-72h", status: false },
      { text: "Exclusion automatique", status: false },
      { text: "Gratuit pour le déménageur", status: false },
      { text: "Coût pour vous", value: "~500€/an" },
    ],
  },
  {
    name: "NF Service",
    items: [
      { text: "Analyse financière", status: false },
      { text: "Analyse juridique", status: false },
      { text: "Monitoring continu 48-72h", status: false },
      { text: "Exclusion automatique", status: false },
      { text: "Gratuit pour le déménageur", status: false },
      { text: "Coût pour vous", value: "~2000€/an" },
    ],
  },
  {
    name: "ISO 9001",
    items: [
      { text: "Analyse financière", status: false },
      { text: "Analyse juridique", status: false },
      { text: "Monitoring continu 48-72h", status: false },
      { text: "Exclusion automatique", status: false },
      { text: "Gratuit pour le déménageur", status: false },
      { text: "Coût pour vous", value: "~5000€/an" },
    ],
  },
];

export function LabelComparison() {
  return (
    <section className="section" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(14, 165, 166, 0.1)",
              color: "var(--color-accent)",
            }}
          >
            <Zap className="w-4 h-4" />
            Comparaison objective
          </motion.div>

          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Label Moverz vs autres certifications
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            La seule certification qui vérifie la santé financière en continu
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="pb-4 text-left">
                  <span className="text-sm font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                    CRITÈRE
                  </span>
                </th>
                {comparisons.map((comp, i) => (
                  <th key={i} className="pb-4 text-center">
                    <div
                      className={`text-sm font-semibold px-4 py-2 rounded-lg ${
                        comp.highlight ? "font-bold" : ""
                      }`}
                      style={{
                        background: comp.highlight ? "rgba(14, 165, 166, 0.1)" : "transparent",
                        color: comp.highlight ? "var(--color-accent)" : "var(--color-text-secondary)",
                      }}
                    >
                      {comp.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisons[0].items.map((_, rowIndex) => (
                <tr key={rowIndex} style={{ borderTop: "1px solid var(--color-border)" }}>
                  <td className="py-4 text-sm" style={{ color: "var(--color-text)" }}>
                    {comparisons[0].items[rowIndex].text || comparisons[0].items[rowIndex].value}
                  </td>
                  {comparisons.map((comp, colIndex) => (
                    <td key={colIndex} className="py-4 text-center">
                      {comp.items[rowIndex].status !== undefined ? (
                        comp.items[rowIndex].status ? (
                          <Check
                            className="w-5 h-5 mx-auto"
                            style={{ color: comp.highlight ? "var(--color-accent)" : "var(--color-success)" }}
                          />
                        ) : (
                          <X className="w-5 h-5 mx-auto" style={{ color: "var(--color-text-muted)" }} />
                        )
                      ) : (
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: comp.items[rowIndex].value === "0€" ? "var(--color-accent)" : "var(--color-text-secondary)",
                          }}
                        >
                          {comp.items[rowIndex].value}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl text-center"
          style={{
            background: "white",
            border: "1px solid var(--color-border)",
          }}
        >
          <p className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>
            Résultat concret
          </p>
          <p className="text-xl" style={{ color: "var(--color-text-secondary)" }}>
            <span className="font-bold" style={{ color: "var(--color-accent)" }}>
              0 déménageur Label Moverz
            </span>{" "}
            n'a fait faillite depuis janvier 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
