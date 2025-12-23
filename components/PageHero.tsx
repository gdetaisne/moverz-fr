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

  return (
    <section className="relative overflow-hidden text-white">
      {/* Background gradient (style /pro) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      
      {/* Animated blobs (style /pro) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Breadcrumbs items={breadcrumbs} />

        <div className={`mt-12 space-y-8 max-w-4xl ${isCenter ? "mx-auto text-center" : ""}`}>
          {/* Badge */}
          {eyebrow && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              <span>{eyebrow}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={`text-lg md:text-xl text-white/80 leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
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
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>{primaryCta.label}</span>
                  <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
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
              className={`pt-8 flex flex-wrap items-center gap-6 text-sm text-white/70 ${isCenter ? "justify-center" : ""}`}
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


