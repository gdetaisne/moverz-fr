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
    <section 
      className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28"
      style={{ 
        background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)"
      }}
    >
      {/* Grain texture - Premium feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Vignette sur les bords */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.03) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: "#0EA5A6" }}
                >
                  <span>{primaryCta.label}</span>
                  <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  rel={relFor(secondaryCta.href)}
                  className="inline-flex items-center gap-2 rounded-xl border-2 bg-white px-8 py-4 text-base font-semibold hover:bg-gray-50 transition-all duration-300"
                  style={{ 
                    borderColor: "rgba(0,0,0,0.1)",
                    color: "#111827"
                  }}
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


