"use client";

import { buildTunnelUrl } from "@/lib/tunnel-url";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, ShieldCheck, BarChart3, EyeOff } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

export function HeroV4() {
  const quoteUrl = buildTunnelUrl({ from: "homepage-hero" });

  return (
    <section
      className="relative pt-16 pb-12 md:pt-28 md:pb-24"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-[120px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,166,0.2), transparent 70%)",
        }}
      />

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center space-y-7"
        >
          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-[clamp(30px,6.5vw,58px)] leading-[1.08] font-bold tracking-[-0.025em]"
            style={{ color: "var(--color-text)" }}
          >
            3&nbsp;000 déménageurs partenaires.
            <br />
            <span style={{ color: "var(--color-accent)" }}>
              On vous recommande les 3&nbsp;meilleurs.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg leading-relaxed mx-auto max-w-xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Moverz organise la mise en concurrence de votre déménagement&nbsp;:
            prix contrôlés, fiabilité scorée, entreprises vérifiées une par une.
            Vous recevez une sélection ultra qualifiée&nbsp;— pas une simple liste.
          </motion.p>

          {/* Social proof */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-1.5">
              {["😊", "👍", "⭐"].map((emoji, i) => (
                <span
                  key={i}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-sm"
                  style={{ background: "var(--color-border-light)" }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <strong style={{ color: "var(--color-text)" }}>
                186 dossiers
              </strong>{" "}
              accompagnés en{" "}
              {new Date(Date.now() - 30 * 86400000).toLocaleDateString(
                "fr-FR",
                { month: "long", year: "numeric" },
              )}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem}>
            <a
              href={quoteUrl}
              onClick={() =>
                trackEvent("Lead_clic_home", { source: "hero-cta" })
              }
              className="group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-sm)] px-8 py-4 text-[16px] md:text-[17px] font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-lg hover:shadow-xl"
              style={{ background: "var(--color-accent)" }}
            >
              Recevoir ma sélection
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <p
              className="mt-3 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Gratuit · 3 min · Sans engagement
            </p>
          </motion.div>

          {/* 3 garanties */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2"
          >
            {[
              { icon: ShieldCheck, text: "Chaque prix est contrôlé et justifié" },
              { icon: BarChart3, text: "Fiabilité scorée sur 100 points" },
              { icon: EyeOff, text: "Numéro masqué, zéro démarchage" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
