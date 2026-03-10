"use client";

/**
 * V4 RADICAL — Verification Section
 * Fond sombre #0B0F14. Score premium.
 */

import { motion } from "framer-motion";
import { Shield, FileCheck, Building2, Scale } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeUpSection } from "@/components/motion";

const checks = [
  { icon: Building2, label: "Fiabilité légale 25% (financier + juridique Pappers)" },
  { icon: Shield, label: "Satisfaction clients 40% (Google + réputation IA)" },
  { icon: Scale, label: "Alertes 35% (6 catégories analysées par IA)" },
  { icon: FileCheck, label: "Conformité : licences + assurances RC Pro" },
];

export function VerificationV4() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--color-bg-dark)" }}
    >
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT — Text */}
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <h2
                className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] text-white"
              >
                On vérifie la solidité des entreprises.{" "}
                <span className="text-white/50">Point.</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-white/60 max-w-md leading-relaxed">
                Chaque déménageur reçoit un score /100 calculé à partir de 3 dimensions (fiabilité légale, satisfaction clients, alertes) basées sur 5 sous-scores indépendants. Score &lt; 50/100 = exclusion.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT — Score card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-[var(--radius-md)] border p-6 md:p-8 space-y-6"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
              }}
            >
              {/* Score */}
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-5xl md:text-6xl font-bold tabular-nums text-white">
                  85
                </span>
                <span className="text-lg text-white/40">/100</span>
                <span
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{ background: "rgba(14,165,166,0.15)", color: "var(--color-accent)" }}
                >
                  <Shield className="h-3 w-3" />
                  Vérifié
                </span>
              </div>

              {/* Separator */}
              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Checks */}
              <div className="space-y-4">
                {checks.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3"
                  >
                    <Icon className="h-4 w-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                    <span className="text-sm text-white/70">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
