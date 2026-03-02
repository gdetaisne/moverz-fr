"use client";

/**
 * ComparableQuotesMockScrolly — Section 2 "Comment ça marche"
 * Une colonne, fond DARK, timeline + bulles stats
 */

import { motion } from "framer-motion";
import { FileText, Camera, BarChart2, CheckCircle, Gift } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";
import { buildTunnelUrl } from "@/lib/tunnel-url";

const STEPS = [
  {
    icon: FileText,
    text: "Vous remplissez le formulaire en 3 minutes",
    sub: "Dates, adresses, volume estimé",
  },
  {
    icon: Camera,
    text: "Vous ajoutez des photos si vous le souhaitez",
    sub: "Pour un devis encore plus précis",
  },
  {
    icon: BarChart2,
    text: "Nous mettons le marché en concurrence pour votre dossier",
    sub: "Uniquement les déménageurs disponibles à vos dates",
  },
  {
    icon: CheckCircle,
    text: "Nous écartons les offres à risque et sélectionnons les meilleures",
    sub: "Score Moverz, solidité financière, avis vérifiés",
  },
  {
    icon: Gift,
    text: "Vous recevez 3+ devis comparables sous 3 à 5 jours",
    sub: "Vous choisissez la meilleure offre, en toute confiance",
  },
];


export function ComparableQuotesMockScrolly() {
  const quoteUrl = buildTunnelUrl({ from: "how-it-works" });

  return (
    <section
      className="relative py-12 md:py-28 overflow-hidden"
      style={{ background: "#0B0F14" }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="container relative max-w-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-10"
        >
          {/* Eyebrow */}
          <motion.div variants={staggerItem}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{ background: "rgba(14,165,166,0.12)", border: "1px solid rgba(14,165,166,0.2)" }}
            >
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#0EA5A6" }} />
              <span className="text-sm font-semibold" style={{ color: "#0EA5A6" }}>Comment ça marche</span>
            </div>
          </motion.div>

          {/* Titre */}
          <motion.div variants={staggerItem} className="space-y-3">
            <h2 className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              3 minutes.{" "}
              <span className="text-white/40">On s'occupe du reste.</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/50">
              Sans appel, sans stress. Nous gérons tout — vous choisissez.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={staggerItem}>
            <div className="relative">
              {/* Ligne verticale fond */}
              <div
                className="absolute left-3.5 top-3.5 bottom-3.5 w-[1px]"
                style={{ background: "rgba(14,165,166,0.12)" }}
              />
              {/* Ligne verticale animée */}
              <motion.div
                className="absolute left-3.5 top-3.5 w-[1px]"
                style={{ background: "rgba(14,165,166,0.5)" }}
                initial={{ height: 0 }}
                whileInView={{ height: "calc(100% - 28px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
              />

              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-5 pb-7 last:pb-0 relative"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full z-10"
                      style={{ background: "#0B0F14", border: "1.5px solid rgba(14,165,166,0.5)" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.3, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                    </motion.div>
                    <div className="pt-0.5">
                      <p className="text-sm font-semibold text-white leading-snug">{step.text}</p>
                      <p className="text-xs text-white/35 mt-0.5">{step.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem}>
            <a
              href={quoteUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "#0EA5A6", boxShadow: "0 4px 16px rgba(14,165,166,0.25)" }}
            >
              Obtenir mes devis gratuits
            </a>
            <p className="text-xs text-white/30 mt-2">Gratuit · 3 min · Sans engagement</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
