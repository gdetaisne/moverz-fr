"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { Badge } from "../Badge";
import { TunnelEntryForm } from "../TunnelEntryForm";
import { ComparisonPreview } from "../ComparisonPreview";
import { GoogleRating } from "../GoogleRating";
import { TunnelEntryData } from "@/lib/schemas/tunnel";
import { fadeUp, staggerContainer, staggerItem } from "@/components/motion";

export function HeroSection() {
  const [formData, setFormData] = useState<Partial<TunnelEntryData>>({});

  return (
    <section className="relative overflow-hidden bg-[rgb(var(--bg))] pt-12 pb-16 md:pt-16 md:pb-20" id="hero-sentinel">
      {/* Glow radial ultra léger */}
      <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[rgb(var(--accent))]/8 blur-[100px]" />
      
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Gauche : Contenu + Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="space-y-5">
              <Badge variant="verified">Déménageurs vérifiés</Badge>
              
              <h1 className="font-heading text-[34px] leading-[1.05] font-bold text-[rgb(var(--text))] tracking-tighter-hero sm:text-[42px] md:text-[60px] lg:text-[72px]">
                Vous déménagez.{" "}
                <span className="text-[rgb(var(--accent-2))]">On compare.</span>
              </h1>
              
              <p className="text-base text-[rgb(var(--text-2))] md:text-lg max-w-xl leading-relaxed">
                En 3 minutes. Sans appels. Numéro masqué jusqu'à votre choix.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={staggerItem}
              id="tunnel-entry-form"
              className="rounded-card border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 shadow-md"
            >
              <TunnelEntryForm onDataChange={setFormData} />
            </motion.div>

            {/* Proof line with Google Rating */}
            <motion.div variants={staggerItem}>
              <GoogleRating rating={4.5} className="inline-flex" />
              <span className="ml-3 text-sm text-[rgb(var(--text-2))]">·</span>
              <span className="ml-3 text-sm font-medium text-[rgb(var(--text-2))]">100% gratuit</span>
            </motion.div>
          </motion.div>

          {/* Droite : ComparisonPreview */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <ComparisonPreview data={formData} className="relative z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
