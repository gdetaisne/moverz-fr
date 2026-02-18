"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { Scale, ShieldCheck, Timer } from "lucide-react";

const arguments_ = [
  {
    icon: Scale,
    title: "Mise en concurrence réelle",
    text: "Chaque déménageur répond au même dossier : vos dates, votre volume, vos contraintes. Les prix sont faits pour votre déménagement, pas pour un devis générique — et la concurrence pousse naturellement les offres à être cohérentes.",
  },
  {
    icon: ShieldCheck,
    title: "Filtrage des entreprises à risque",
    text: "Assurance, situation juridique, fiabilité financière : chaque entreprise est vérifiée avant d'apparaître. Les offres incohérentes ou suspectes sont écartées pour réduire le risque d'arnaque ou de mauvaise surprise.",
  },
  {
    icon: Timer,
    title: "Gain de temps, comparaison claire",
    text: "Au lieu de contacter plusieurs entreprises et de jongler entre des formats différents, tout est centralisé et standardisé. Vous comparez sur les mêmes critères et vous décidez en quelques minutes.",
  },
];

export function WhyMoverz() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-bg)" }}>
      <div className="container max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center space-y-3">
            <span
              className="inline-block text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(14,165,166,0.08)", color: "var(--color-accent)" }}
            >
              Notre approche
            </span>
            <h2
              className="font-heading text-[clamp(28px,5vw,42px)] font-bold tracking-[-0.02em] leading-[1.1]"
              style={{ color: "var(--color-text)" }}
            >
              Pourquoi passer par nous ?
            </h2>
          </motion.div>

          {/* 3 arguments */}
          <div className="grid gap-8 md:grid-cols-3">
            {arguments_.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="space-y-3"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)]"
                  style={{ background: "rgba(14,165,166,0.08)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Micro-phrase de synthèse */}
          <motion.p
            variants={staggerItem}
            className="text-center text-sm font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            Un seul dossier, plusieurs offres vérifiées, une décision simple.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
