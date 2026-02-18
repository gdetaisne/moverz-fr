"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { Tag, Handshake, Clock } from "lucide-react";

const arguments_ = [
  {
    icon: Tag,
    title: "Déménagez au juste prix",
    line1: "Appel d'offres réel sur votre dossier précis.",
    line2: "Pas de devis d'appel. Pas d'estimation vague.",
  },
  {
    icon: Handshake,
    title: "Choisissez un partenaire de confiance",
    line1: "Entreprises assurées, vérifiées, sélectionnées.",
    line2: "Les offres à risque sont écartées.",
  },
  {
    icon: Clock,
    title: "Décidez en quelques minutes",
    line1: "Un seul dossier. Des offres comparables.",
    line2: "Une décision simple.",
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
            {arguments_.map(({ icon: Icon, title, line1, line2 }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="rounded-[var(--radius-md)] border p-6 space-y-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                }}
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(14,165,166,0.1)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="text-[15px] font-bold leading-snug"
                  style={{ color: "var(--color-text)" }}
                >
                  {title}
                </h3>
                <div className="space-y-1.5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {line1}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {line2}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Micro-phrase de synthèse */}
          <motion.p
            variants={staggerItem}
            className="text-center text-sm font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            Un dossier. Des offres vérifiées. Un choix serein.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
