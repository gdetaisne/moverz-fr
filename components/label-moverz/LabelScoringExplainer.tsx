"use client";

import { motion } from "framer-motion";
import { Scale, Star, AlertTriangle, CheckCircle } from "lucide-react";

// ─── Données basées sur SCORING.md §3 et §4 ──────────────────────

const DIMENSIONS = [
  {
    id: "legal",
    icon: Scale,
    color: "#0EA5A6",
    weight: "25%",
    title: "Fiabilité légale",
    description:
      "Analyse de la santé financière (bilans, trésorerie, fonds propres via Pappers) et du casier judiciaire (BODACC, décisions de justice). Aucune procédure active, dirigeants sans interdiction de gérer.",
    sources: ["Pappers Financier", "BODACC", "Pappers Juridique"],
  },
  {
    id: "satisfaction",
    icon: Star,
    color: "#F59E0B",
    weight: "40%",
    title: "Satisfaction clients",
    description:
      "Note Google pondérée par le volume d'avis, complétée par l'analyse IA de tous les avis des 12 derniers mois. Détection automatique des faux avis.",
    sources: ["Google Places API", "SearchAPI.io", "Analyse IA"],
  },
  {
    id: "alertes",
    icon: AlertTriangle,
    color: "#DC2626",
    weight: "35%",
    title: "Alertes",
    description:
      "Détection de 6 catégories de problèmes récurrents sur les avis : casses et dégradations, vols signalés, retards et délais, prix modifiés, litige contractuel, service client.",
    sources: ["Avis 12 mois", "Analyse IA", "6 catégories"],
  },
];

const LABELS = [
  { range: "85–100", label: "Excellent", color: "#16A34A", desc: "Aucun signal d'alerte — déménageur hautement fiable" },
  { range: "70–84",  label: "Bon",       color: "#16A34A", desc: "Les principaux critères sont satisfaits" },
  { range: "50–69",  label: "Correct",   color: "#D97706", desc: "Quelques points méritent attention" },
  { range: "30–49",  label: "Fragile",   color: "#EA580C", desc: "Signaux d'alerte — prudence recommandée" },
  { range: "0–29",   label: "Critique",  color: "#DC2626", desc: "Risques importants identifiés" },
];

// ─── Composant ────────────────────────────────────────────────────

export function LabelScoringExplainer() {
  return (
    <section className="section section-light">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header + stat partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)", border: "1px solid rgba(14,165,166,0.2)" }}
          >
            <CheckCircle className="w-4 h-4" />
            Score automatique /100
          </div>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Comment fonctionne le score Moverz&nbsp;?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: "var(--color-text-secondary)" }}>
            Un score de 0 à 100 calculé automatiquement à partir de 3 dimensions indépendantes,
            recalculé en continu toutes les 48–72h.
          </p>

          {/* Stat proéminente */}
          <div
            className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl"
            style={{
              background: "white",
              border: "2px solid rgba(14,165,166,0.3)",
              boxShadow: "0 8px 32px rgba(14,165,166,0.12)",
            }}
          >
            <div className="text-5xl font-extrabold tabular-nums" style={{ color: "var(--color-accent)" }}>
              3 000+
            </div>
            <div className="text-left">
              <div className="font-bold text-lg" style={{ color: "var(--color-text)" }}>déménageurs partenaires</div>
              <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>scorés et vérifiés en continu · France entière</div>
            </div>
          </div>
        </motion.div>

        {/* Formule */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono font-medium px-4 py-3 rounded-lg inline-block" style={{ background: "var(--color-bg)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}>
            Score global = 12,5% Financier + 12,5% Juridique + 20% Google + 20% Réputation + 35% Vigilance
          </p>
        </motion.div>

        {/* 3 Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {DIMENSIONS.map((dim, i) => (
            <motion.div
              key={dim.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              {/* Icône + poids */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${dim.color}15` }}
                >
                  <dim.icon className="w-6 h-6" style={{ color: dim.color }} />
                </div>
                <span
                  className="text-2xl font-extrabold tabular-nums"
                  style={{ color: dim.color }}
                >
                  {dim.weight}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
                {dim.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                {dim.description}
              </p>

              {/* Sources */}
              <div className="flex flex-wrap gap-1.5">
                {dim.sources.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{ background: `${dim.color}10`, color: dim.color }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barème 5 labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-6" style={{ color: "var(--color-text)" }}>
            Que signifie chaque niveau ?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {LABELS.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="flex flex-col items-center text-center p-4 rounded-xl"
                style={{
                  background: `${l.color}08`,
                  border: `1px solid ${l.color}30`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full mb-2 shrink-0"
                  style={{ background: l.color }}
                />
                <div className="text-xl font-extrabold tabular-nums mb-0.5" style={{ color: l.color }}>
                  {l.label}
                </div>
                <div className="text-xs font-semibold mb-2" style={{ color: l.color }}>
                  {l.range}/100
                </div>
                <div className="text-xs leading-snug" style={{ color: "var(--color-text-secondary)" }}>
                  {l.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
