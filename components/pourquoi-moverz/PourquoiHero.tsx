"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Users } from "lucide-react";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { staggerContainer, staggerItem } from "@/components/motion";

export default function PourquoiHero() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-24"
      style={{ background: "#0B0F14" }}
    >
      {/* Grain texture - Premium feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Halo subtil turquoise */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)",
        }}
      />

      <div className="container relative max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
            <li>/</li>
            <li className="text-white">Pourquoi Moverz</li>
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Ce qui nous différencie
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-heading text-4xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ color: "#FFFFFF" }}
            >
              Pourquoi choisir{" "}
              <span style={{ color: "#0EA5A6" }}>Moverz</span> ?
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 mb-10 leading-relaxed"
            >
              Moverz ne compare pas seulement des devis.{" "}
              <strong className="text-white">Moverz compare des entreprises, leur fiabilité et le risque associé.</strong>
            </motion.p>

            {/* CTA */}
            <motion.a
              variants={staggerItem}
              href={buildTunnelUrl({ from: "pourquoi-moverz", devisRange: "3-5" })}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-text)] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Comparer mes devis</span>
            </motion.a>
          </motion.div>

          {/* Right: Key features cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <Shield className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-white">Pros vérifiés</p>
                <p className="text-sm text-white/60">3 analyses de risque /100 (financier, juridique, avis)</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-white">Devis comparables</p>
                <p className="text-sm text-white/60">Même base (dossier standardisé) pour tous</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <Users className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-white">Sans démarchage</p>
                <p className="text-sm text-white/60">Téléphone masqué jusqu'à votre choix</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
