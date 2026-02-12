"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, ArrowUpDown } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { useInView, fadeUp } from "@/components/motion";

type SortMode = "price" | "score";

const mockProviders = [
  {
    id: "1",
    name: "DéménagePro",
    score: 92,
    price: 1420,
    labor: 890,
    transport: 450,
    packing: "Inclus",
    insurance: 80,
    badge: "best" as const,
  },
  {
    id: "2",
    name: "MoveFast",
    score: 88,
    price: 1550,
    labor: 920,
    transport: 480,
    packing: 150,
    insurance: "Inclus",
    badge: "verified" as const,
  },
  {
    id: "3",
    name: "TransportPlus",
    score: 85,
    price: 1680,
    labor: 950,
    transport: 520,
    packing: 130,
    insurance: 80,
  },
];

export function ComparisonTableLarge() {
  const [sortMode, setSortMode] = useState<SortMode>("price");
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
  const { ref, isInView } = useInView();

  const sortedProviders = [...mockProviders].sort((a, b) =>
    sortMode === "price" ? a.price - b.price : b.score - a.score
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
    >
      <Card shadow className="overflow-hidden">
        {/* Header avec sort toggle */}
        <div className="border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[rgb(var(--text))]">
              Comparaison détaillée
            </h3>
            <button
              onClick={() => setSortMode(sortMode === "price" ? "score" : "price")}
              className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--text-2))] transition-all hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--text))]"
            >
              <ArrowUpDown className="h-3.5 w-3.5" />
              Trier par {sortMode === "price" ? "score" : "prix"}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Déménageur
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Score
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Main d'œuvre
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Transport
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Cartons
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Assurance
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  Total TTC
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedProviders.map((provider, index) => (
                <motion.tr
                  key={provider.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onMouseEnter={() => setHighlightedRow(provider.id)}
                  onMouseLeave={() => setHighlightedRow(null)}
                  className={`border-b border-[rgb(var(--border))] transition-colors ${
                    highlightedRow === provider.id
                      ? "bg-[rgb(var(--accent))]/5"
                      : "bg-[rgb(var(--surface))]"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="font-semibold text-[rgb(var(--text))]">
                          {provider.name}
                        </div>
                        {provider.badge && (
                          <div className="mt-1">
                            {provider.badge === "best" && (
                              <Badge variant="accent" className="text-[10px]">
                                Meilleur prix
                              </Badge>
                            )}
                            {provider.badge === "verified" && (
                              <Badge variant="verified" className="text-[10px]">
                                <Shield className="h-2.5 w-2.5" />
                                Vérifié
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="inline-flex items-center gap-1 rounded-md bg-[rgb(var(--success))]/10 px-2 py-1 text-xs font-semibold text-[rgb(var(--success))]">
                      <Check className="h-3 w-3" />
                      {provider.score}/100
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-sm text-[rgb(var(--text))]">
                    {provider.labor.toLocaleString("fr-FR")} €
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-sm text-[rgb(var(--text))]">
                    {provider.transport.toLocaleString("fr-FR")} €
                  </td>
                  <td className="px-4 py-4 text-right text-sm">
                    {typeof provider.packing === "string" ? (
                      <span className="font-semibold text-[rgb(var(--accent-2))]">
                        {provider.packing}
                      </span>
                    ) : (
                      <span className="font-mono text-[rgb(var(--text))]">
                        {provider.packing.toLocaleString("fr-FR")} €
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right text-sm">
                    {typeof provider.insurance === "string" ? (
                      <span className="font-semibold text-[rgb(var(--accent-2))]">
                        {provider.insurance}
                      </span>
                    ) : (
                      <span className="font-mono text-[rgb(var(--text))]">
                        {provider.insurance.toLocaleString("fr-FR")} €
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-base font-bold text-[rgb(var(--primary))]">
                    {provider.price.toLocaleString("fr-FR")} €
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-6 py-3 text-center text-xs text-[rgb(var(--muted))]">
          Exemple de comparaison • Les prix réels varient selon vos besoins précis
        </div>
      </Card>
    </motion.div>
  );
}
