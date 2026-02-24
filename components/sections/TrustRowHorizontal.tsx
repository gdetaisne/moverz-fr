"use client";

/**
 * TrustRowHorizontal - Bandeau de preuve sociale style Ramp
 * Chiffres gros, design premium, impact immédiat
 */

import { Star, TrendingDown, Shield } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Star,
    value: "4,5+",
    label: "sur Google",
    color: "#F59E0B",
    href: "https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu",
  },
  {
    icon: TrendingDown,
    value: "450€",
    label: "d'économie moyenne",
    color: "var(--color-accent)",
  },
  {
    icon: Shield,
    value: "3/100",
    label: "analyses par déménageur",
    color: "var(--color-accent)",
  },
];

export function TrustRowHorizontal() {
  return (
    <section
      className="border-y py-6 md:py-8"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {stats.map(({ icon: Icon, value, label, color, href }, i) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 transition-all duration-300"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <div>
                  <p
                    className="text-2xl md:text-3xl font-bold tabular-nums leading-none"
                    style={{ color: "var(--color-text)" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-sm mt-1 leading-tight"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {label}
                  </p>
                </div>
              </motion.div>
            );

            if (href) {
              return (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  {content}
                </a>
              );
            }

            return <div key={i}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
