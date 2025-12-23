"use client";

import { motion } from "framer-motion";
import Chip from "@/components/ui/Chip";

export default function WhyMoverz() {
  const benefits = [
    { icon: "📸", label: "Photos IA", desc: "Volume juste" },
    { icon: "⚖️", label: "Devis comparables", desc: "Même base pour tous" },
    { icon: "🔒", label: "0 spam", desc: "Anonymat total" },
    { icon: "✓", label: "Pros contrôlés", desc: "Qualité garantie" },
  ];

  return (
    <section className="section section-light">
      <div className="container max-w-5xl">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          {/* Header clean */}
          <div className="space-y-4">
            <Chip variant="teal" className="mx-auto">
              Pourquoi Moverz
            </Chip>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Vos photos = devis justes
            </h2>
          </div>

          {/* Benefits ultra-clean */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className="text-4xl">{b.icon}</div>
                <div className="text-sm font-bold text-[#0F172A]">{b.label}</div>
                <div className="text-xs text-[#1E293B]/70">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

