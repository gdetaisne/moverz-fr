"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, TrendingDown, AlertCircle } from "lucide-react";

export function LabelMoverzHero() {
  // Force le scroll en haut à chaque arrivée sur la page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-hero overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(14, 165, 166, 0.1)",
              color: "var(--color-accent)",
              border: "1px solid rgba(14, 165, 166, 0.2)",
            }}
          >
            <Shield className="w-4 h-4" />
            Label Moverz
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold text-center mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Vérifiez la fiabilité de
          <br />
          <span style={{ color: "var(--color-accent)" }}>votre déménageur.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Score /100 gratuit en 30 secondes — santé financière (Pappers), casier judiciaire (BODACC),
          avis clients des 12 derniers mois. Sans inscription.
        </motion.p>

        {/* Stats choc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <StatCard
            icon={TrendingDown}
            number="257"
            label="faillites en 2024"
            color="#DC2626"
          />
          <StatCard
            icon={Shield}
            number="0"
            label="avec Label Moverz"
            color="var(--color-accent)"
            highlight
          />
          <StatCard
            icon={AlertCircle}
            number="18%"
            label="déménageurs exclus"
            color="#F59E0B"
          />
        </motion.div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  number: string;
  label: string;
  color: string;
  highlight?: boolean;
}

function StatCard({ icon: Icon, number, label, color, highlight }: StatCardProps) {
  return (
    <div
      className="relative p-6 rounded-2xl text-center"
      style={{
        background: highlight ? "white" : "rgba(255, 255, 255, 0.6)",
        border: `2px solid ${highlight ? color : "rgba(229, 231, 235, 0.8)"}`,
        boxShadow: highlight ? "0 8px 32px rgba(14, 165, 166, 0.15)" : "var(--shadow-sm)",
      }}
    >
      <Icon
        className="w-8 h-8 mx-auto mb-3"
        style={{ color }}
      />
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color }}
      >
        {number}
      </div>
      <div
        className="text-sm font-medium"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </div>
    </div>
  );
}
