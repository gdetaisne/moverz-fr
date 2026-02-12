"use client";

import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

type HeroLink = {
  label: string;
  href: string;
};

type SocialProofItem = {
  icon: React.ReactNode;
  label: string;
};

type PageHeroProps = {
  breadcrumbs: HeroLink[];
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  primaryCta?: HeroLink;
  secondaryCta?: HeroLink;
  socialProof?: SocialProofItem[];
  align?: "center" | "left";
};

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  socialProof,
  align = "center",
}: PageHeroProps) {
  const isCenter = align === "center";
  const relFor = (href: string | undefined) =>
    href && href.startsWith("https://devis.moverz.fr") ? "nofollow" : undefined;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-turquoise-50/30 to-brand-accent-50/20">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-brand-accent/12 rounded-full blur-[120px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(107,207,207,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Breadcrumbs items={breadcrumbs} />

        <div className={`mt-12 space-y-8 max-w-4xl ${isCenter ? "mx-auto text-center" : ""}`}>
          {/* Badge */}
          {eyebrow && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[var(--color-text)] shadow-md backdrop-blur-sm border border-[var(--color-accent)]/30"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_rgba(107,207,207,0.6)]" />
              <span>{eyebrow}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-[var(--color-text)]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={`text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className={`flex flex-col sm:flex-row items-center gap-4 pt-4 ${isCenter ? "justify-center" : ""}`}
            >
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  rel={relFor(primaryCta.href)}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_50px_rgba(15,23,42,0.4)] hover:scale-105 transition-all duration-300"
                >
                  <span>{primaryCta.label}</span>
                  <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  rel={relFor(secondaryCta.href)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F172A]/30 bg-white/60 px-8 py-4 text-base font-semibold text-[var(--color-text)] backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                >
                  <span>{secondaryCta.label}</span>
                </a>
              )}
            </motion.div>
          )}

          {/* Social proof */}
          {socialProof && socialProof.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className={`pt-8 flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-secondary)]/80 font-medium ${isCenter ? "justify-center" : ""}`}
            >
              {socialProof.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


