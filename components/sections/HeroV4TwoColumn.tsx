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
import { ArrowRight, CheckCircle2, MessageSquare, Users, Mail, ShieldCheck } from "lucide-react";
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
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { id: 0, title: "Infos reçues", count: 1, color: "#94A3B8", icon: MessageSquare, subtitle: "Dossier créé" },
    { id: 1, title: "Déménageurs contactés", count: 12, color: "#0EA5A6", icon: Users, subtitle: "Réseau activé" },
    { id: 2, title: "Offres reçues", count: 7, color: "#0EA5A6", icon: Mail, subtitle: "En analyse" },
    { id: 3, title: "Offres sélectionnées", count: 3, color: "#10B981", icon: ShieldCheck, subtitle: "Top 3 Moverz" },
    { id: 4, title: "Vous choisissez", count: 1, color: "#0EA5A6", icon: CheckCircle2, subtitle: "Déménagez sereinement" },
  ];

  const currentStage = stages[stage];
  const Icon = currentStage.icon;

  return (
    <div 
      className="relative h-full w-full overflow-hidden p-4 flex flex-col"
      style={{ background: "#FAFAFA" }}
    >
      {/* Spotlight effect animé */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${currentStage.color}15 0%, transparent 70%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Header premium avec logo Moverz */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-6"
      >
        {/* Logo Moverz en haut */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Image 
              src="/logo-ui.png" 
              alt="Moverz" 
              width={60} 
              height={20}
              className="h-4 w-auto"
            />
          </div>
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#10B981" }} />
        </div>

        {/* Info déménagement - Plus mis en valeur */}
        <motion.div 
          className="p-3 rounded-xl border"
          style={{ 
            background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
            borderColor: "#E2E8F0"
          }}
          animate={{
            boxShadow: [
              "0 2px 8px rgba(15,23,42,0.06)",
              "0 4px 12px rgba(15,23,42,0.08)",
              "0 2px 8px rgba(15,23,42,0.06)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-[9px] font-medium text-slate-500 mb-1">Votre déménagement</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-slate-900">Paris → Lyon</p>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <p className="text-xs font-semibold text-slate-600">15 mars</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Carte principale qui morphe */}
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full"
          >
            {/* Main Card */}
            <motion.div
              className="relative p-6 rounded-2xl border shadow-lg"
              style={{
                background: "white",
                borderColor: `${currentStage.color}30`,
              }}
              animate={{
                boxShadow: [
                  `0 4px 20px ${currentStage.color}20`,
                  `0 8px 30px ${currentStage.color}35`,
                  `0 4px 20px ${currentStage.color}20`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Icône avec pulse */}
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-2xl mx-auto mb-4"
                style={{ background: `${currentStage.color}15` }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon className="w-6 h-6" style={{ color: currentStage.color }} strokeWidth={2} />
              </motion.div>

              {/* Compteur - Grand et bold */}
              <motion.div
                className="text-center mb-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.p
                  className="text-4xl font-bold"
                  style={{ color: currentStage.color }}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                >
                  {currentStage.count}
                </motion.p>
              </motion.div>

              {/* Titre */}
              <motion.p
                className="text-sm font-semibold text-slate-900 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentStage.title}
              </motion.p>
            </motion.div>

            {/* Badge contextuel flottant */}
            {stage === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-2 -right-2 px-2.5 py-1.5 rounded-lg text-[9px] font-semibold bg-white border shadow-sm"
                style={{ borderColor: "#0EA5A620" }}
              >
                <span style={{ color: "#0EA5A6" }}>Analyse</span>
              </motion.div>
            )}

            {stage === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-2 -right-2 px-2.5 py-1.5 rounded-lg text-[9px] font-semibold bg-white border shadow-sm"
                style={{ borderColor: "#10B98120" }}
              >
                <span style={{ color: "#10B981" }}>✓ Fiables</span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicateur de progression - Dots minimalistes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-1.5 mt-6"
      >
        {stages.map((s, i) => (
          <motion.div
            key={s.id}
            className="rounded-full transition-all"
            style={{
              width: i === stage ? "20px" : "6px",
              height: "6px",
              background: i === stage ? currentStage.color : "#E2E8F0",
            }}
            animate={{
              opacity: i <= stage ? 1 : 0.4,
            }}
          />
        ))}
      </motion.div>

      {/* Sous-titre subtil */}
      <motion.p
        className="text-center text-[9px] text-slate-400 mt-3"
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {currentStage.subtitle}
      </motion.p>
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
