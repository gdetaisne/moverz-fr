"use client";

/**
 * V4 — Chapitre Dark unique : Vérification Creditsafe
 * Fond #0B0F14, élégant, pas galaxie.
 * Contient : titre + sous-texte + product card (explication + mockup Creditsafe)
 *            + 2 cards "Dossier standardisé" / "Suivi simple"
 * Design system V4 strict.
 */

import { motion } from "framer-motion";
import { Shield, FileCheck, Building2, Scale, ClipboardCheck, BarChart3 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

const checks = [
  { icon: Shield, label: "Assurance responsabilité civile" },
  { icon: FileCheck, label: "Licence de transport à jour" },
  { icon: Building2, label: "Solvabilité financière vérifiée" },
  { icon: Scale, label: "Historique de litiges contrôlé" },
];

export function CreditsafeChapter() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      {/* Grain très léger */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-2xl mb-14"
        >
          <motion.h2
            variants={staggerItem}
            className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] text-white leading-[1.1]"
          >
            On vérifie la solidité des entreprises.{" "}
            <span className="text-white/40">Point.</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base md:text-lg text-white/50 max-w-lg leading-relaxed"
          >
            Chaque déménageur partenaire passe un contrôle rigoureux
            avant de pouvoir vous envoyer un devis.
          </motion.p>
        </motion.div>

        {/* Product card : explication gauche + mockup Creditsafe droite */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[var(--radius-md)] border p-6 md:p-8 mb-8"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left — Explication + bullets */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px]"
                  style={{ background: "rgba(14,165,166,0.12)" }}
                >
                  <Shield className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                </div>
                <p className="text-sm font-semibold text-white">
                  Analyse Creditsafe
                </p>
              </div>

              <p className="text-sm text-white/50 leading-relaxed">
                Nous utilisons les données Creditsafe pour évaluer la santé financière
                de chaque entreprise. Score de solvabilité, ancienneté, litiges en cours
                — tout est vérifié avant qu'un déménageur n'intègre notre réseau.
              </p>

              <div className="space-y-3">
                {checks.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "#0EA5A6" }} />
                    <span className="text-sm text-white/60">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Creditsafe mockup card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="rounded-[var(--radius-md)] border p-5 md:p-6"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                      Score Creditsafe
                    </p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--color-text)" }}>
                      DéménagePro SAS
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{ background: "rgba(14,165,166,0.08)", color: "#0EA5A6" }}
                  >
                    <Shield className="h-3 w-3" />
                    Vérifié
                  </span>
                </div>

                {/* Score */}
                <div className="flex items-baseline gap-2 mb-5">
                  <span
                    className="font-heading text-4xl md:text-5xl font-bold tabular-nums"
                    style={{ color: "var(--color-text)" }}
                  >
                    85
                  </span>
                  <span className="text-lg" style={{ color: "var(--color-text-muted)" }}>/100</span>
                </div>

                {/* Score bar */}
                <div className="mb-5">
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border-light)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ background: "#0EA5A6" }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                    <span>Risque élevé</span>
                    <span>Risque faible</span>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Solvabilité", value: "Élevée", good: true },
                    { label: "Ancienneté", value: "12 ans", good: true },
                    { label: "Litiges", value: "0", good: true },
                    { label: "Assurance RC", value: "Valide", good: true },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-[var(--radius-sm)] border px-3 py-2"
                      style={{ borderColor: "var(--color-border-light)" }}
                    >
                      <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: item.good ? "#0EA5A6" : "var(--color-text)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 2 cards : Dossier standardisé + Suivi simple */}
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: ClipboardCheck,
              title: "Dossier standardisé",
              description: "Un seul inventaire, envoyé à tous. Les devis partent de la même base — pas de mauvaise surprise.",
            },
            {
              icon: BarChart3,
              title: "Suivi simple",
              description: "Suivez l'avancée de vos devis, comparez en un coup d'œil, choisissez quand vous êtes prêt.",
            },
          ].map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[var(--radius-md)] border p-5 md:p-6"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px]"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <Icon className="h-4 w-4 text-white/60" />
                </div>
                <p className="text-sm font-semibold text-white">{title}</p>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
