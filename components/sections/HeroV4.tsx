"use client";

import { buildTunnelUrl } from "@/lib/tunnel-url";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, Search, Scale, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

const STEPS = [
  {
    num: "1",
    icon: Search,
    text: "Nous sollicitons les déménageurs disponibles près de chez vous.",
  },
  {
    num: "2",
    icon: Scale,
    text: "Nous organisons la mise en concurrence, contrôlons les prix et la fiabilité.",
  },
  {
    num: "3",
    icon: CheckCircle2,
    text: "Vous choisissez sereinement.",
    bold: true,
  },
] as const;

export function HeroV4() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });

  return (
    <section
      className="relative pt-14 pb-12 md:pt-24 md:pb-20"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-[120px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,166,0.18), transparent 70%)",
        }}
      />

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-[clamp(28px,6vw,54px)] leading-[1.1] font-bold tracking-[-0.02em]"
            style={{ color: "var(--color-text)" }}
          >
            Vous déménagez.
            <br />
            <span style={{ color: "var(--color-accent)" }}>
              On vous présente les&nbsp;3&nbsp;meilleurs.
            </span>
          </motion.h1>

          {/* 3 étapes — cards visuelles */}
          <motion.div
            variants={staggerItem}
            className="mt-8 md:mt-10 mx-auto max-w-md space-y-3"
          >
            {STEPS.map(({ num, icon: Icon, text, bold }) => (
              <div
                key={num}
                className="flex items-start gap-3.5 text-left rounded-xl px-4 py-3 transition-colors"
                style={{
                  background: bold
                    ? "rgba(14,165,166,0.06)"
                    : "transparent",
                }}
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    background: bold
                      ? "var(--color-accent)"
                      : "var(--color-border-light)",
                    color: bold ? "#fff" : "var(--color-text-secondary)",
                  }}
                >
                  {num}
                </span>
                <p
                  className={`text-[15px] leading-snug ${bold ? "font-semibold" : ""}`}
                  style={{
                    color: bold
                      ? "var(--color-text)"
                      : "var(--color-text-secondary)",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Social proof — ancré juste avant le CTA */}
          <motion.div
            variants={staggerItem}
            className="mt-8 flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <strong style={{ color: "var(--color-text)" }}>4,5/5</strong>
              {" · "}
              <strong style={{ color: "var(--color-text)" }}>186 dossiers</strong>
              {" "}accompagnés en{" "}
              {new Date(Date.now() - 30 * 86400000).toLocaleDateString(
                "fr-FR",
                { month: "long", year: "numeric" },
              )}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="mt-6">
            <a
              href={quoteUrl}
              onClick={() =>
                trackEvent("Lead_clic_home", { source: "hero-cta" })
              }
              className="group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-sm)] px-8 py-4 text-[16px] md:text-[17px] font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-lg hover:shadow-xl"
              style={{ background: "var(--color-accent)" }}
            >
              Obtenir mes devis
            </a>
            <p
              className="mt-2.5 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Gratuit · 3 min · Sans engagement
            </p>
          </motion.div>

          {/* Trust badges — pills lisibles */}
          <motion.div
            variants={staggerItem}
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
          >
            {[
              "Prix contrôlés",
              "Fiabilité vérifiée",
              "Numéro masqué",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium border"
                style={{
                  color: "var(--color-text-secondary)",
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                }}
              >
                <CheckCircle2
                  className="h-3.5 w-3.5"
                  style={{ color: "var(--color-accent)" }}
                />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
