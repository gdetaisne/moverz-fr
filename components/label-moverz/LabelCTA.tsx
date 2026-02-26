"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function LabelCTA() {
  return (
    <section
      className="section"
      style={{ background: "var(--color-bg-dark)", color: "white" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Prêt à déménager avec des pros certifiés ?
          </h2>
          <p className="text-lg md:text-xl mb-12" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Obtenez jusqu'à 5 devis de déménageurs Label Moverz
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=label-moverz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              style={{
                background: "var(--color-accent)",
                color: "white",
                boxShadow: "0 4px 16px rgba(14, 165, 166, 0.3)",
              }}
            >
              Obtenir mes devis
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/blog/label-moverz-certification-demenageurs/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <FileText className="w-5 h-5" />
              Lire le guide complet
            </a>
          </div>

          <p className="text-sm mt-8" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            100% gratuit · Dossier anonyme · 3 analyses de risque /100
          </p>
        </motion.div>
      </div>
    </section>
  );
}
