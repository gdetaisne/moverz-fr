"use client";

/**
 * V4 — Section "Des devis détaillés et comparables"
 * Mockup device + liste devis + contenu structuré
 * Design premium inspiré de l'image fournie
 */

import { motion } from "framer-motion";
import { Star, CheckCircle2, Clock, Shield, FileText, Phone } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";

const mockQuotes = [
  {
    name: "Déménagements Martin",
    price: "1 850",
    rating: 4.9,
    reviews: 487,
    features: ["Assurance tous risques incluse", "Disponible le 15 mars"],
  },
  {
    name: "Express Déménagement",
    price: "1 950",
    rating: 4.5,
    reviews: 312,
    features: ["Protection standard incluse", "Disponible le 12 mars"],
  },
  {
    name: "Lyon Trans Services",
    price: "2 100",
    rating: 4.8,
    reviews: 653,
    features: ["Assurance premium incluse", "Disponible le 10 mars"],
  },
];

const guarantees = [
  {
    icon: CheckCircle2,
    title: "Même volume, même accès",
    description: "Tous les déménageurs estiment sur la base des mêmes informations.",
  },
  {
    icon: Shield,
    title: "Pros sélectionnés",
    description: "Chaque déménageur s'engage contractuellement sur la légalité, l'assurance et la qualité de service.",
  },
  {
    icon: FileText,
    title: "des devis comparables",
    description: "Vous comparez prix, options et conditions sur un format standardisé.",
  },
];

const selectedProviders = [
  "Engagés contractuellement sur la légalité (SIRET, licences)",
  "Assurance RC Pro et marchandises maintenues à jour",
  "Qualité de service et transparence (devis clairs, délais respectés)",
];

export function ComparableQuotesMock() {
  return (
    <section className="py-12 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT — Device mockup */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[340px]">
              {/* Device frame */}
              <div
                className="relative rounded-[32px] border-[8px] p-4 overflow-hidden"
                style={{
                  borderColor: "#1F2937",
                  background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                {/* Header */}
                <div
                  className="rounded-t-[20px] px-4 py-3 mb-3"
                  style={{ background: "#0F172A" }}
                >
                  <p className="text-[10px] font-semibold text-white/40 mb-1">Vos devis</p>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white">Paris → Lyon</p>
                    <p className="text-[11px] text-white/50">
                      T3 • 60m² • 3ᵉ étage avec ascenseur
                    </p>
                  </div>
                </div>

                {/* Quotes list */}
                <div className="space-y-2.5">
                  {mockQuotes.map((quote, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                      className="rounded-xl border p-3.5"
                      style={{
                        borderColor: i === 0 ? "#0EA5A6" : "rgba(255,255,255,0.08)",
                        background: i === 0 ? "rgba(14,165,166,0.05)" : "rgba(255,255,255,0.03)",
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white mb-1">{quote.name}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className="h-2.5 w-2.5"
                                fill={j < Math.floor(quote.rating) ? "#FCD34D" : "none"}
                                stroke={j < Math.floor(quote.rating) ? "#FCD34D" : "#4B5563"}
                                strokeWidth={2}
                              />
                            ))}
                            <span className="text-[10px] text-white/40 ml-1">
                              ({quote.reviews} avis)
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className="text-lg font-bold tabular-nums"
                            style={{ color: i === 0 ? "#0EA5A6" : "white" }}
                          >
                            {quote.price}€
                          </p>
                          <p className="text-[9px] text-white/30">TTC</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {quote.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                            <span className="text-[10px] text-white/60">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <p className="text-center text-[10px] text-white/30 mt-3">
                  + 2 autres devis disponibles
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -top-3 -right-3 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg"
                style={{ background: "white", color: "var(--color-text)" }}
              >
                5 devis comparables
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Contenu */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={staggerItem} className="space-y-4">
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: "rgba(14,165,166,0.08)", color: "var(--color-accent)" }}
              >
                Ce que vous recevez
              </span>
              <h2
                className="font-heading text-[clamp(28px,5vw,42px)] font-bold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "var(--color-text)" }}
              >
                Des devis détaillés{" "}
                <span style={{ color: "var(--color-accent)" }}>et comparables</span>
              </h2>
              <p
                className="text-base leading-relaxed max-w-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Grâce aux infos que vous partagez, chaque déménageur reçoit{" "}
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  exactement les mêmes informations
                </span>
                .
              </p>
            </motion.div>

            {/* Card "Déménageurs sélectionnés" */}
            <motion.div
              variants={staggerItem}
              className="rounded-[var(--radius-md)] border p-5"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-bg)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(14,165,166,0.08)" }}
                >
                  <Shield className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                    Déménageurs sélectionnés
                  </p>
                  <ul className="space-y-1.5">
                    {selectedProviders.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="inline-block w-1 h-1 rounded-full mt-1.5 shrink-0"
                          style={{ background: "var(--color-accent)" }}
                        />
                        <span className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="pt-3 border-t text-xs"
                style={{ borderColor: "var(--color-border-light)", color: "var(--color-text-muted)" }}
              >
                <strong>Objectif :</strong> 5 devis comparables{" "}
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  sous 5 à 7 jours
                </span>.{" "}
                <a href="/pourquoi-moverz/" className="underline hover:no-underline">
                  Voir nos critères de sélection →
                </a>
              </div>
            </motion.div>

            {/* Guarantees */}
            <div className="space-y-4">
              {guarantees.map(({ icon: Icon, title, description }, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-start gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(14,165,166,0.05)" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                      {title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Phone masqué callout */}
            <motion.div
              variants={staggerItem}
              className="flex items-start gap-3 rounded-[var(--radius-md)] border p-4"
              style={{
                borderColor: "var(--color-border-light)",
                background: "var(--color-bg)",
              }}
            >
              <Phone className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "var(--color-text-muted)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Votre téléphone reste masqué jusqu'à ce que vous choisissiez un déménageur.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
