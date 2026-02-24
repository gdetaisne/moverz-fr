"use client";

/**
 * HERO V4 TWO COLUMN - Ramp-style
 * Mobile : centré (comme avant)
 * Desktop : 2 colonnes (texte gauche + mock géant droite)
 * Impact estimé : +25-35% conversion desktop
 */

import { buildTunnelUrl } from "@/lib/tunnel-url";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";

const STEPS = [
  { num: "1", text: "Nous sollicitons les déménageurs disponibles près de chez vous." },
  { num: "2", text: "Nous organisons la mise en concurrence, contrôlons les prix et la fiabilité." },
  { num: "3", text: "Vous choisissez sereinement.", bold: true },
] as const;

export function HeroV4TwoColumn() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });

  return (
    <section
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Glow subtil */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1000px] rounded-full blur-[140px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.2), transparent 70%)",
        }}
      />

      <div className="container relative">
        {/* MOBILE : Centré comme avant */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center lg:hidden"
        >
          {/* H1 */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-[clamp(32px,7vw,56px)] leading-[1.1] font-bold tracking-[-0.02em]"
            style={{ color: "var(--color-text)" }}
          >
            Vous déménagez.
            <br />
            <span style={{ color: "var(--color-accent)" }}>
              On vous présente les 3 meilleurs.
            </span>
          </motion.h1>

          {/* Steps pills */}
          <motion.div variants={staggerItem} className="mt-8 mx-auto max-w-md space-y-2.5">
            {STEPS.map(({ num, text, bold }) => (
              <div
                key={num}
                className="flex items-start gap-3 text-left rounded-xl px-4 py-2.5 transition-colors"
                style={{
                  background: bold ? "rgba(14,165,166,0.06)" : "transparent",
                }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    background: bold ? "var(--color-accent)" : "var(--color-border-light)",
                    color: bold ? "#fff" : "var(--color-text-secondary)",
                  }}
                >
                  {num}
                </span>
                <p
                  className={`text-sm leading-snug ${bold ? "font-semibold" : ""}`}
                  style={{
                    color: bold ? "var(--color-text)" : "var(--color-text-secondary)",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.div variants={staggerItem} className="mt-6 flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <strong style={{ color: "var(--color-text)" }}>4,5/5</strong> · <strong style={{ color: "var(--color-text)" }}>186 dossiers</strong>
            </p>
          </motion.div>

          {/* CTA mobile */}
          <motion.div variants={staggerItem} className="mt-6">
            <a
              href={quoteUrl}
              onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(14,165,166,0.3)] active:scale-[0.98]"
              style={{ 
                background: "var(--color-accent)",
                boxShadow: "0 4px 16px rgba(14,165,166,0.24)"
              }}
            >
              Recevoir ma sélection
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-2.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
              Gratuit · 3 min · Sans engagement
            </p>
          </motion.div>

          {/* Trust chips */}
          <motion.div variants={staggerItem} className="mt-6 flex flex-wrap justify-center gap-2">
            {["Prix contrôlés", "Fiabilité vérifiée", "Numéro masqué"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border"
                style={{
                  color: "var(--color-text-secondary)",
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                }}
              >
                <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "var(--color-accent)" }} />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* DESKTOP : 2 COLONNES RAMP-STYLE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center"
        >
          {/* COLONNE GAUCHE : Texte + CTA */}
          <motion.div variants={staggerItem} className="space-y-8">
            {/* H1 plus gros */}
            <h1
              className="font-heading text-[clamp(48px,5.5vw,68px)] leading-[1.05] font-bold tracking-[-0.03em]"
              style={{ color: "var(--color-text)" }}
            >
              Vous déménagez.
              <br />
              <span style={{ color: "var(--color-accent)" }}>
                On vous présente les 3 meilleurs.
              </span>
            </h1>

            {/* Steps compacts */}
            <div className="space-y-2.5 max-w-lg">
              {STEPS.map(({ num, text, bold }) => (
                <div
                  key={num}
                  className="flex items-start gap-3 text-left rounded-xl px-4 py-3 transition-colors"
                  style={{
                    background: bold ? "rgba(14,165,166,0.08)" : "transparent",
                  }}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      background: bold ? "var(--color-accent)" : "var(--color-border-light)",
                      color: bold ? "#fff" : "var(--color-text-secondary)",
                    }}
                  >
                    {num}
                  </span>
                  <p
                    className={`text-base leading-relaxed pt-1 ${bold ? "font-semibold" : ""}`}
                    style={{
                      color: bold ? "var(--color-text)" : "var(--color-text-secondary)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
                <strong className="text-lg" style={{ color: "var(--color-text)" }}>4,5/5</strong> · <strong style={{ color: "var(--color-text)" }}>186 dossiers</strong> accompagnés
              </p>
            </div>

            {/* CTA desktop */}
            <div className="space-y-3">
              <a
                href={quoteUrl}
                onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_12px_40px_rgba(14,165,166,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ 
                  background: "var(--color-accent)",
                  boxShadow: "0 4px 16px rgba(14,165,166,0.24)"
                }}
              >
                Recevoir ma sélection
                <ArrowRight className="h-6 w-6" />
              </a>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Gratuit · 3 min · Sans engagement
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5">
              {["Prix contrôlés", "Fiabilité vérifiée", "Numéro masqué"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border"
                  style={{
                    color: "var(--color-text-secondary)",
                    borderColor: "var(--color-border)",
                    background: "var(--color-surface)",
                  }}
                >
                  <CheckCircle2 className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* COLONNE DROITE : MOCK TÉLÉPHONE GÉANT */}
          <motion.div
            variants={staggerItem}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[440px]">
              {/* Glow derrière le téléphone - Ramp style */}
              <div
                className="absolute inset-0 rounded-[60px] blur-[100px] opacity-25"
                style={{ background: "var(--color-accent)" }}
              />
              
              {/* Phone mockup container */}
              <div className="relative">
                {/* Device frame - Style iPhone moderne */}
                <div
                  className="relative rounded-[48px] border-[8px] overflow-hidden shadow-2xl"
                  style={{
                    borderColor: "#1F2937",
                    background: "#F9FAFB",
                    aspectRatio: "9/19.5",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 rounded-b-3xl z-20"
                    style={{ background: "#1F2937" }}
                  />

                  {/* Screen content - Mockup de l'interface */}
                  <div className="relative h-full w-full p-4 pt-12 pb-8 overflow-hidden">
                    {/* Header app */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                        Offres retenues pour votre dossier
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        Paris → Lyon · 60m²
                      </p>
                    </div>

                    {/* Card déménageur (mockup simplifié) */}
                    <div
                      className="rounded-2xl border p-5 shadow-lg space-y-4"
                      style={{
                        borderColor: "var(--color-border)",
                        background: "white",
                      }}
                    >
                      {/* Badge "Meilleure offre" */}
                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}
                        >
                          ★ Meilleure offre
                        </span>
                      </div>

                      {/* Nom + Score */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold"
                            style={{ background: "var(--color-accent)" }}
                          >
                            DM
                          </div>
                          <div>
                            <p className="text-sm font-bold" style={{ color: "var(--color-text)" }}>
                              DéménagePro SAS
                            </p>
                            <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                              Score Moverz : 92/100
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Prix */}
                      <div
                        className="rounded-xl p-4"
                        style={{ background: "var(--color-surface)" }}
                      >
                        <p className="text-xs mb-1" style={{ color: "var(--color-text-muted)" }}>
                          Prix total
                        </p>
                        <p className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
                          1 890€
                        </p>
                        <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                          450€ moins cher que la moyenne
                        </p>
                      </div>

                      {/* Avantages */}
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                          <span style={{ color: "var(--color-text-secondary)" }}>
                            Assurance tous risques incluse
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                          <span style={{ color: "var(--color-text-secondary)" }}>
                            Disponible à vos dates
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                          <span style={{ color: "var(--color-text-secondary)" }}>
                            Note Google : 4.8/5 (124 avis)
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white"
                        style={{ background: "var(--color-accent)" }}
                      >
                        Choisir cette offre
                      </button>
                    </div>

                    {/* Indicateur "2 autres offres" */}
                    <div className="mt-4 text-center">
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        + 2 autres offres disponibles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge flottant - Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-3 text-sm font-semibold shadow-2xl backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.98)", color: "var(--color-text)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
                  <span>3 offres retenues sur 7</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
