"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlowAndIA() {
  const steps = [
    {
      id: 0,
      title: "Décrivez votre déménagement",
      description: "Adresses, date, type de logement.",
      ia: "L'IA comprend le contexte : distance, contraintes, volume probable.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 1,
      title: "Envoyez vos photos",
      description: "Quelques photos de vos pièces.",
      ia: "L'IA lit les photos, repère ce qui prend de la place, calcule le volume.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Comparez 5+ devis",
      description: "Devis comparables, même volume.",
      ia: "L'IA prépare un dossier clair pour tous les déménageurs. Même base, même prix.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  const [activeId, setActiveId] = useState(0);

  const activeStep = steps.find((s) => s.id === activeId) ?? steps[0];

  // Auto-cycle every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </div>

      <div className="container max-w-6xl relative">
        {/* Header with animation */}
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6BCFCF]/20 to-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF] border border-[#6BCFCF]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Comment ça marche
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[#0F172A]">
            3 étapes, 3 minutes
          </h2>
          <p className="text-lg text-[#6B7280]">
            L'IA fait le travail. Vous gardez le contrôle.
          </p>
        </motion.div>

        {/* Steps - Enhanced design */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => {
            const isActive = step.id === activeId;
            
            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                className="group text-left focus:outline-none relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] shadow-xl scale-105"
                    : "bg-white border border-[#E5E7EB] hover:border-[#6BCFCF]/50 hover:shadow-lg"
                }`}>

                  <div className="relative space-y-4">
                    {/* Icon + Number */}
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className={`flex items-center justify-center h-14 w-14 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#6BCFCF] text-white shadow-lg"
                            : "bg-[#F0F9FF] text-[#6BCFCF] group-hover:bg-[#6BCFCF] group-hover:text-white"
                        }`}
                        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>
                      
                      <div className={`text-4xl font-bold transition-colors duration-300 ${
                        isActive ? "text-white/20" : "text-[#0F172A]/10"
                      }`}>
                        {step.id + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-200 ${
                        isActive ? "text-white" : "text-[#0F172A] group-hover:text-[#0F172A]"
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-white/80" : "text-[#6B7280]"
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Progress indicator for active step */}
                    {isActive && (
                      <motion.div 
                        className="h-1 bg-white/20 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="h-full bg-[#6BCFCF]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.5, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Connector line (hidden on mobile, shown on desktop between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 h-px">
                    <div className={`h-full transition-colors duration-300 ${
                      isActive || steps[index + 1].id === activeId
                        ? "bg-gradient-to-r from-[#6BCFCF] to-transparent"
                        : "bg-[#E5E7EB]"
                    }`} />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* IA explanation - Enhanced with animations */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="relative rounded-3xl border border-[#E5E7EB] bg-gradient-to-br from-white via-[#FAFAFA] to-white p-8 md:p-10 text-center shadow-md">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#6BCFCF] to-[#0F172A] shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-semibold text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
                Sous le capot · IA Moverz
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-base md:text-lg text-[#0F172A] leading-relaxed font-medium">
                    {activeStep.ia}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Step indicators - Enhanced */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveId(step.id)}
                    className={`rounded-full transition-all duration-300 ${
                      step.id === activeId
                        ? "h-2 w-8 bg-gradient-to-r from-[#0F172A] to-[#6BCFCF]"
                        : "h-2 w-2 bg-[#E5E7EB] hover:bg-[#6BCFCF]/50"
                    }`}
                    aria-label={`Aller à l'étape ${step.id + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
