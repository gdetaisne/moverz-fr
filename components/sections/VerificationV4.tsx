"use client";

/**
 * V4 RADICAL — Verification Section
 * Fond sombre #0B0F14. Score premium.
 */

import { motion } from "framer-motion";
import { Shield, FileCheck, Building2, Scale } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeUpSection } from "@/components/motion";

const checks = [
  { icon: Building2, label: "Score financier /100 (Creditsafe + Pappers)" },
  { icon: Scale, label: "Score juridique /100 (Pappers Décisions)" },
  { icon: Shield, label: "Score avis clients /100 (Google Reviews)" },
  { icon: FileCheck, label: "Conformité : licences + assurances" },
];

export function VerificationV4() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#0B0F14" }}
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
                Chaque déménageur est évalué sur 3 risques /100 : financier (Creditsafe + Pappers), juridique (Pappers Décisions) et expérience client (Google). Alertes = exclusion.
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
                  style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}
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
                    <Icon className="h-4 w-4 shrink-0" style={{ color: "#0EA5A6" }} />
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
