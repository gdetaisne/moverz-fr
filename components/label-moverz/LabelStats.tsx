"use client";

import { motion } from "framer-motion";
import { TrendingDown, Shield, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    number: "257",
    label: "faillites en 2024",
    detail: "Source: BODACC",
    color: "#DC2626",
  },
  {
    icon: Shield,
    number: "18%",
    label: "déménageurs exclus",
    detail: "Scores < 60/100",
    color: "#F59E0B",
  },
  {
    icon: Clock,
    number: "48-72h",
    label: "monitoring continu",
    detail: "3 analyses automatiques",
    color: "var(--color-accent)",
  },
  {
    icon: Users,
    number: "3000+",
    label: "déménageurs analysés",
    detail: "Base de données France",
    color: "#16A34A",
  },
];

export function LabelStats() {
  return (
    <section className="section section-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Pourquoi c'est important
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Les chiffres qui prouvent que le Label Moverz change la donne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl text-center"
              style={{
                background: "white",
                border: "1px solid var(--color-border)",
              }}
            >
              <stat.icon
                className="w-10 h-10 mx-auto mb-4"
                style={{ color: stat.color }}
              />
              <div
                className="text-3xl md:text-4xl font-bold mb-2 tabular-nums"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {stat.label}
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
