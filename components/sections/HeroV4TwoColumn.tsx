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
import { ArrowRight, CheckCircle2, MessageSquare, Users, Mail, ShieldCheck, Star } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import Image from "next/image";
import { useState, useEffect } from "react";

const STEPS = [
  { num: "1", text: "On sollicite les déménageurs disponibles", bold: false },
  { num: "2", text: "On contrôle prix et fiabilité", bold: false },
  { num: "3", text: "Vous choisissez sereinement", bold: true },
] as const;

// MOCKUP LISTE DEVIS - Version qui cartonnait (20 janvier)
function QuoteListMockup() {
  const quotes = [
    {
      name: "Déménagements Martin",
      stars: 5,
      reviews: 487,
      price: 1850,
      details: ["Assurance tous risques incluse", "Disponible le 15 mars"],
    },
    {
      name: "Express Déménagement",
      stars: 4,
      reviews: 312,
      price: 1950,
      details: ["Protection standard", "Disponible le 12 mars"],
    },
    {
      name: "Lyon Trans Services",
      stars: 5,
      reviews: 653,
      price: 2100,
      details: ["Assurance premium incluse", "Disponible le 10 mars"],
    },
  ];

  return (
    <div 
      className="relative h-full w-full overflow-hidden flex flex-col p-4"
      style={{ 
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)"
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <Image 
            src="/logo-ui.png" 
            alt="Moverz" 
            width={80} 
            height={27}
            className="h-6 w-auto brightness-0 invert"
          />
          <div 
            className="px-3 py-1 rounded-full text-[10px] font-bold"
            style={{ background: "rgba(14,165,166,0.2)", color: "#2EE9C6" }}
          >
            5 devis
          </div>
        </div>
        <p className="text-white text-xs font-medium mb-0.5">Vos devis</p>
        <p className="text-slate-400 text-[10px]">
          Paris → Lyon • T3 • 60m² • 3e étage avec ascenseur
        </p>
      </div>

      {/* Liste des 3 devis */}
      <div className="space-y-2.5 overflow-y-auto flex-1 pb-2">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="rounded-xl p-3 relative"
            style={{
              background: "rgba(255,255,255,0.95)",
              border: i === 0 ? "2px solid #0EA5A6" : "1px solid rgba(255,255,255,0.2)",
              boxShadow: i === 0 
                ? "0 4px 12px rgba(14,165,166,0.3)" 
                : "0 2px 8px rgba(0,0,0,0.08)"
            }}
          >
            {/* Badge "Recommandé" sur le premier */}
            {i === 0 && (
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white"
                style={{ background: "#0EA5A6", boxShadow: "0 2px 8px rgba(14,165,166,0.4)" }}
              >
                Recommandé
              </div>
            )}

            {/* Nom déménageur */}
            <h3 className="text-sm font-bold text-slate-900 mb-1">{quote.name}</h3>
            
            {/* Étoiles */}
            <div className="flex items-center gap-1 mb-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-2.5 w-2.5 ${
                      idx < quote.stars ? "fill-amber-400 text-amber-400" : "fill-slate-300 text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-slate-500">({quote.reviews} avis)</span>
            </div>

            {/* Prix */}
            <div className="mb-2">
              <p className="text-2xl font-bold text-slate-900">{quote.price}€</p>
              <p className="text-[9px] text-slate-500">TTC</p>
            </div>

            {/* Détails avec icônes */}
            <div className="space-y-1">
              {quote.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <svg className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] text-slate-700 leading-tight">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Note "+ 2 autres devis disponibles" */}
        <p className="text-center text-[10px] text-slate-400 pt-2">
          + 2 autres devis disponibles
        </p>
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
        background: "linear-gradient(135deg, #E0F7F7 0%, #F0FDFD 50%, #FFFFFF 100%)"
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
            Vous déménagez.
            <br />
            <span style={{ color: "var(--color-accent)" }}>On compare.</span>
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
              Obtenir mes devis
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
              Vous déménagez.
              <br />
              <span style={{ color: "#0EA5A6" }}>On compare.</span>
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
                Obtenir mes devis
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
                  className="relative rounded-[40px] border-[5px] overflow-hidden bg-white"
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

                  {/* Screen content - LISTE DEVIS RÉALISTE */}
                  <QuoteListMockup />
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
