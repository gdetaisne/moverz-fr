"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock, Zap } from "lucide-react";

type CityFinalCTAProps = {
  cityName: string;
  quoteUrl: string;
};

/**
 * CTA final page ville.
 *
 * SEO (2026-02-16): suppression des stats inventées (150+ clients, 320€, 4.8/5, 2847)
 * → remplacées par des trust signals factuels et vérifiables.
 */
export function CityFinalCTA({ cityName, quoteUrl }: CityFinalCTAProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--color-bg)] to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-20 left-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="absolute bottom-20 right-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "2s" }}
        />
      </div>

      <div className="container max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>100&nbsp;% gratuit · Sans démarchage</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-text)] leading-tight">
              Votre déménagement
              <br />à {cityName} commence ici
            </h2>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Comparez des devis de déménageurs contrôlés à {cityName}. Dossier anonyme,
              réponse rapide, zéro surprise le jour&nbsp;J.
            </p>

            {/* Trust points — factuels uniquement */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Clock,
                  label: "Devis sous 5-7 jours",
                },
                {
                  icon: Shield,
                  label: "Déménageurs vérifiés",
                },
                {
                  icon: Zap,
                  label: "Dossier anonyme (pas d'appels)",
                },
                {
                  icon: CheckCircle2,
                  label: "Gratuit pour vous",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={quoteUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Comparer maintenant</span>
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="/comment-ca-marche/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F172A]/20 bg-white px-8 py-4 text-base font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg)] transition-all duration-300"
              >
                <span>Comment ça marche&nbsp;?</span>
              </a>
            </div>
          </div>

          {/* Right: Card récapitulatif factuel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border-2 border-[var(--color-accent)]/20 bg-white p-8 shadow-xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pb-6 border-b border-[var(--color-border)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-turquoise to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-text)]">Moverz</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Comparateur déménagement
                    </p>
                  </div>
                </div>

                {/* Process steps — factuel */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-border-light)]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-accent)]">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        Décrivez votre déménagement
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                        Volume, accès, date — en 3&nbsp;minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-border-light)]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-accent)]">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        Recevez des devis comparables
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                        Même dossier envoyé à tous — pas d&apos;appels, pas de spam
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-border-light)]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-accent)]">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        Choisissez sereinement
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                        Comparez prix, services et disponibilités
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-xs text-center text-[var(--color-text-secondary)]">
                    Gratuit pour vous · Gratuit pour les déménageurs
                  </p>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-turquoise to-[var(--color-accent)] rounded-2xl blur opacity-20 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
