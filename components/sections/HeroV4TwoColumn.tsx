"use client";

/**
 * HERO V4 TWO COLUMN - LICORNE EDITION 🦄
 * Version ultra-premium inspirée Ramp/Botify
 * - Fond dramatique avec grain + gradient
 * - Téléphone avec perspective + stack effect
 * - Trust row repositionnée
 * - Specs typo Ramp exactes
 * - Touches orange + teal
 */

import { buildTunnelUrl } from "@/lib/tunnel-url";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";
import { useState, useEffect } from "react";

const STEPS = [
  { num: "1", text: "On sollicite les déménageurs disponibles", bold: false },
  { num: "2", text: "On contrôle prix et fiabilité", bold: false },
  { num: "3", text: "Vous choisissez sereinement", bold: true },
] as const;

// Progressive Timeline Animation - Inspiré de Comment ça marche
function MorphingUIAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 6); // 0 → 1 → 2 → 3 → 4 → 5 → loop
    }, 2200); // Change stage every 2.2s

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative h-full w-full overflow-hidden p-4"
      style={{ background: "linear-gradient(180deg, #F1F5F9 0%, #F8FAFC 100%)" }}
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#0EA5A6] to-[#0891A1] px-4 py-4 rounded-2xl text-white mb-6"
      >
        <p className="text-xs font-semibold">Votre déménagement</p>
        <p className="text-[10px] opacity-70 mt-1">Paris → Lyon • 15 mars 2026</p>
      </motion.div>

      {/* Timeline Steps */}
      <div className="space-y-4 mb-6">
        {/* Step 1 */}
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
            style={{
              background: progress >= 0 ? "#10B981" : "#F3F4F6"
            }}
            animate={{
              background: progress >= 0 ? "#10B981" : "#F3F4F6",
              scale: progress === 0 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            {progress >= 1 ? (
              <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
            ) : (
              <div className="w-2 h-2 rounded-full bg-white" />
            )}
          </motion.div>
          <div className="flex-1 pt-1">
            <p className="text-[11px] font-semibold text-slate-900">Infos envoyées</p>
            <p className="text-[9px] text-slate-500 mt-0.5">T3 • 60m² • 3ᵉ étage</p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
            style={{
              background: progress >= 1 ? "#10B981" : "#F3F4F6"
            }}
            animate={{
              background: progress >= 1 ? "#10B981" : "#F3F4F6",
              scale: progress === 1 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            {progress >= 2 ? (
              <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
            ) : (
              <div className="w-2 h-2 rounded-full bg-white" />
            )}
          </motion.div>
          <div className="flex-1 pt-1">
            <p className="text-[11px] font-semibold text-slate-900">Dossier complété</p>
            <p className="text-[9px] text-slate-500 mt-0.5">Base identique pour tous</p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2"
            style={{
              background: progress >= 2 ? "#0EA5A6" : "#FFFFFF",
              borderColor: progress >= 2 ? "#0EA5A6" : "#E5E7EB"
            }}
            animate={{
              background: progress >= 2 ? "#0EA5A6" : "#FFFFFF",
              scale: progress === 2 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            {progress >= 3 ? (
              <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
            ) : (
              <motion.div 
                className="w-2 h-2 rounded-full"
                style={{ background: progress >= 2 ? "#FFFFFF" : "#CBD5E1" }}
                animate={{ 
                  opacity: progress === 2 ? [1, 0.3, 1] : 1
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: progress === 2 ? Infinity : 0
                }}
              />
            )}
          </motion.div>
          <div className="flex-1 pt-1">
            <p className="text-[11px] font-semibold text-slate-900">
              {progress >= 2 ? "12 déménageurs contactés" : "Envoi en cours..."}
            </p>
            <p className="text-[9px] text-slate-500 mt-0.5">Dossier identique pour tous</p>
          </div>
        </motion.div>

        {/* Step 4 - 7 offres reçues */}
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div 
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
            style={{
              background: progress >= 3 ? "#10B981" : "#F3F4F6"
            }}
            animate={{
              background: progress >= 3 ? "#10B981" : "#F3F4F6",
              scale: progress === 3 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <CheckCircle2 
              className="w-4 h-4" 
              style={{ color: progress >= 3 ? "#FFFFFF" : "#CBD5E1" }}
              strokeWidth={3} 
            />
          </motion.div>
          <div className="flex-1 pt-1">
            <p className="text-[11px] font-semibold text-slate-900">
              {progress >= 3 ? "7 offres reçues !" : "En attente"}
            </p>
            <p className="text-[9px] text-slate-500 mt-0.5">Analyse en cours</p>
          </div>
        </motion.div>

        {/* Step 5 - 3 sélectionnées */}
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div 
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
            style={{
              background: progress >= 4 ? "#10B981" : "#F3F4F6"
            }}
            animate={{
              scale: progress === 4 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <CheckCircle2 
              className="w-4 h-4" 
              style={{ color: progress >= 4 ? "#FFFFFF" : "#CBD5E1" }}
              strokeWidth={3} 
            />
          </motion.div>
          <div className="flex-1 pt-1">
            <p className="text-[11px] font-semibold text-slate-900">
              {progress >= 4 ? "3 offres sélectionnées" : "Vérification"}
            </p>
            <p className="text-[9px] text-slate-500 mt-0.5">
              {progress >= 4 ? "Par Moverz • Fiables" : "Analyse en cours"}
            </p>
          </div>
        </motion.div>

        {/* Step 6 - Vous choisissez & déménagez */}
        <motion.div 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div 
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
            style={{
              background: progress >= 5 ? "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)" : "#F3F4F6",
              boxShadow: progress >= 5 ? "0 0 16px rgba(14,165,166,0.5)" : "none"
            }}
            animate={{
              scale: progress === 5 ? [1, 1.15, 1] : 1,
              boxShadow: progress === 5 ? [
                "0 0 16px rgba(14,165,166,0.5)",
                "0 0 24px rgba(14,165,166,0.7)",
                "0 0 16px rgba(14,165,166,0.5)"
              ] : "none"
            }}
            transition={{ 
              scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              boxShadow: { duration: 1.5, repeat: progress === 5 ? Infinity : 0 }
            }}
          >
            <CheckCircle2 
              className="w-4 h-4" 
              style={{ color: progress >= 5 ? "#FFFFFF" : "#CBD5E1" }}
              strokeWidth={3} 
            />
          </motion.div>
          <div className="flex-1 pt-1">
            <p className="text-[11px] font-semibold text-slate-900">
              {progress >= 5 ? "Vous choisissez" : "À venir"}
            </p>
            <p className="text-[9px] text-slate-500 mt-0.5">
              {progress >= 5 ? "Déménagez sereinement" : "Dernière étape"}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Progress card */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="p-3 rounded-xl border"
        style={{ 
          background: progress >= 5 ? "rgba(14,165,166,0.1)" : "rgba(14,165,166,0.05)",
          borderColor: progress >= 5 ? "rgba(14,165,166,0.3)" : "rgba(14,165,166,0.2)"
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-semibold text-slate-900">
            {progress >= 5 ? "✓ Terminé" : "Progression"}
          </p>
          <motion.p 
            className="text-[9px] font-bold"
            style={{ color: "#0EA5A6" }}
            key={progress}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {Math.round((progress / 5) * 100)}%
          </motion.p>
        </div>
        <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
          <motion.div 
            className="h-full rounded-full"
            style={{ 
              background: progress >= 5 
                ? "linear-gradient(to right, #0EA5A6, #10B981)"
                : "linear-gradient(to right, #0EA5A6, #A8E8E8)"
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${(progress / 5) * 100}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function HeroV4TwoColumn() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });

  return (
    <section
      className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden"
      style={{ 
        background: "#FAFBFC"
      }}
    >
      {/* Grain texture - Premium feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* UN SEUL halo subtil derrière le téléphone */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6">
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
            Vous déménagez&nbsp;?
            <br />
            On sélectionne <span style={{ color: "var(--color-accent)" }}>le top 3 des déménageurs</span> pour vous.
          </motion.h1>

          {/* CTA mobile - Direct sous le H1 */}
          <motion.div variants={staggerItem} className="mt-8">
            <a
              href={quoteUrl}
              onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
              className="inline-flex items-center justify-center gap-2 w-full max-w-md rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(14,165,166,0.3)] active:scale-[0.98]"
              style={{ 
                background: "var(--color-accent)",
                boxShadow: "0 4px 16px rgba(14,165,166,0.24)"
              }}
            >
              Voir mes 3 meilleurs devis
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-2.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
              Gratuit · 3 min · Sans engagement
            </p>
          </motion.div>
        </motion.div>

        {/* DESKTOP : 2 COLONNES LICORNE 🦄 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center"
        >
          {/* COLONNE GAUCHE : Texte + CTA */}
          <motion.div variants={staggerItem} className="lg:col-span-6 max-w-[580px]">
            {/* H1 - Size optimisé */}
            <h1
              className="font-heading text-[56px] leading-[0.95] font-semibold tracking-[-0.03em] mb-8"
              style={{ color: "#111827" }}
            >
              Vous déménagez&nbsp;?
              <br />
              On sélectionne <span style={{ color: "#0EA5A6" }}>le top 3 des déménageurs</span> pour vous.
            </h1>

            {/* CTA desktop - Direct sous H1 */}
            <div className="space-y-3">
              <a
                href={quoteUrl}
                onClick={() => trackEvent("Lead_clic_home", { source: "hero-cta" })}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-[16px] font-semibold text-white transition-all duration-200 hover:shadow-[0_16px_48px_rgba(14,165,166,0.4)] hover:-translate-y-1 active:scale-[0.98] group"
                style={{ 
                  background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)",
                  boxShadow: "0 4px 16px rgba(14,165,166,0.25)"
                }}
              >
                Voir mes 3 meilleurs devis
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <p className="text-[13px]" style={{ color: "#9CA3AF" }}>
                Gratuit · 3 min · Sans engagement
              </p>
            </div>
          </motion.div>

          {/* COLONNE DROITE : MOCK TÉLÉPHONE - MISE EN SCÈNE RAMP 🎬 */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[300px]">
              {/* Premium glow effect turquoise */}
              <div
                className="absolute inset-0 blur-3xl opacity-40 animate-pulse"
                style={{ 
                  background: "radial-gradient(circle, rgba(14,165,166,0.6) 0%, rgba(14,165,166,0.3) 40%, transparent 70%)",
                  animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }}
              />

              {/* Device frame minimal - Style Linear avec animation premium */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{ 
                  transform: "rotate(-2deg)",
                }}
              >
                {/* Phone container */}
                <div
                  className="relative rounded-[40px] border-[2px] overflow-hidden bg-white"
                  style={{
                    borderColor: "#1F2937",
                    aspectRatio: "9/19",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Notch discret */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 rounded-b-2xl z-20"
                    style={{ background: "#1F2937" }}
                  />

                  {/* Screen content - MORPHING UI ANIMATION ULTRA 2026 */}
                  <MorphingUIAnimation />
                </div>
              </motion.div>

              
              {/* Badge flottant minimaliste */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-sm border"
                style={{ 
                  background: "rgba(255,255,255,0.95)", 
                  borderColor: "rgba(14,165,166,0.15)",
                  color: "#111827" 
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#1F2937" }} />
                  <span><strong style={{ color: "#0EA5A6" }}>3</strong> offres retenues</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
