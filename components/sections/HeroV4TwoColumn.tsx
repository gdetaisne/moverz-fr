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

// CAROUSEL 2026 PREMIUM - Large, Spacious, Modern
function MorphingUIAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const screenshots = [
    {
      id: 0,
      step: "1",
      title: "Votre dossier",
      icon: MessageSquare,
      items: [
        { label: "Départ", value: "Paris 75015", icon: "📍" },
        { label: "Arrivée", value: "Lyon 69001", icon: "🎯" },
        { label: "Surface", value: "60m² • T3", icon: "🏠" },
        { label: "Date", value: "15 mars", icon: "📅" }
      ]
    },
    {
      id: 1,
      step: "2",
      title: "12 déménageurs",
      subtitle: "contactés",
      icon: Users,
      items: [
        { label: "Demeneco", value: "Contacté", status: "active" },
        { label: "Fast Move", value: "Contacté", status: "active" },
        { label: "TransExpress", value: "Contacté", status: "active" },
        { label: "+9 autres", value: "En attente", status: "pending" }
      ]
    },
    {
      id: 2,
      step: "3",
      title: "7 offres",
      subtitle: "reçues",
      icon: Mail,
      items: [
        { label: "TransExpress", value: "2 750 €", status: "best" },
        { label: "Demeneco", value: "2 890 €", status: "good" },
        { label: "Fast Move", value: "3 150 €", status: "good" },
        { label: "+4 autres", value: "À analyser", status: "pending" }
      ]
    },
    {
      id: 3,
      step: "4",
      title: "Top 3",
      subtitle: "validé par Moverz",
      icon: ShieldCheck,
      items: [
        { label: "TransExpress", value: "2 750 €", status: "winner" },
        { label: "Demeneco", value: "2 890 €", status: "selected" },
        { label: "DémParis", value: "2 990 €", status: "selected" },
        { label: "Vérifiés", value: "Fiables", status: "verified" }
      ]
    },
  ];

  const currentScreen = screenshots[activeIndex];
  const Icon = currentScreen.icon;

  return (
    <div 
      className="relative h-full w-full overflow-hidden flex flex-col p-4"
      style={{ 
        background: "linear-gradient(135deg, #FAFBFC 0%, #F5F8FA 100%)"
      }}
    >
      {/* Ambient Glow Background */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Header Premium */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <Image 
          src="/logo-ui.png" 
          alt="Moverz" 
          width={70} 
          height={24}
          className="h-5 w-auto"
        />
        <motion.div 
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: "#0EA5A610" }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0EA5A6" }} />
          <span className="text-[10px] font-semibold" style={{ color: "#0EA5A6" }}>
            En cours
          </span>
        </motion.div>
      </div>

      {/* Main Carousel - Big & Bold */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            {/* Card Premium */}
            <motion.div
              className="relative h-full rounded-3xl p-6 border backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                borderColor: "#0EA5A620",
                boxShadow: "0 20px 60px rgba(14,165,166,0.12), 0 0 0 1px rgba(255,255,255,0.8) inset",
              }}
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(14,165,166,0.12), 0 0 0 1px rgba(255,255,255,0.8) inset",
                  "0 30px 80px rgba(14,165,166,0.18), 0 0 0 1px rgba(255,255,255,0.9) inset",
                  "0 20px 60px rgba(14,165,166,0.12), 0 0 0 1px rgba(255,255,255,0.8) inset",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Top: Badge + Icon */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  className="px-4 py-2 rounded-xl font-bold text-sm backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(135deg, #0EA5A615 0%, #0EA5A608 100%)",
                    color: "#0EA5A6",
                    border: "1px solid rgba(14,165,166,0.1)"
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Étape {currentScreen.step}/4
                </motion.div>
                
                <motion.div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: "linear-gradient(135deg, #0EA5A6 0%, #14B8A6 100%)",
                    boxShadow: "0 8px 24px rgba(14,165,166,0.3)"
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </motion.div>
              </div>

              {/* Title - Big & Bold */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 
                  className="text-3xl font-bold leading-tight mb-1"
                  style={{ 
                    background: "linear-gradient(135deg, #0EA5A6 0%, #14B8A6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {currentScreen.title}
                </h3>
                {currentScreen.subtitle && (
                  <p className="text-lg font-medium text-slate-600">
                    {currentScreen.subtitle}
                  </p>
                )}
              </motion.div>

              {/* Items List - Large & Spacious */}
              <div className="space-y-4">
                {currentScreen.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{
                      background: item.status === "winner" || item.status === "best" 
                        ? "linear-gradient(90deg, rgba(14,165,166,0.08) 0%, rgba(14,165,166,0.02) 100%)"
                        : "rgba(248,250,252,0.5)",
                      border: item.status === "winner" ? "1px solid rgba(14,165,166,0.2)" : "1px solid transparent"
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <span className="text-xl">{item.icon}</span>
                      )}
                      <span className="text-sm font-semibold text-slate-700">
                        {item.label}
                      </span>
                    </div>
                    <span 
                      className="text-sm font-bold"
                      style={{ 
                        color: item.status === "winner" || item.status === "best" ? "#0EA5A6" : "#1E293B"
                      }}
                    >
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation - Modern & Large */}
      <div className="mt-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          {screenshots.map((screen, i) => (
            <motion.button
              key={screen.id}
              className="relative rounded-full"
              style={{
                width: i === activeIndex ? "32px" : "8px",
                height: "8px",
                background: i === activeIndex 
                  ? "linear-gradient(90deg, #0EA5A6 0%, #14B8A6 100%)" 
                  : "#CBD5E1",
              }}
              animate={{
                opacity: i === activeIndex ? 1 : 0.4,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs font-medium text-slate-500"
        >
          Paris → Lyon • 15 mars 2026
        </motion.p>
      </div>
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
