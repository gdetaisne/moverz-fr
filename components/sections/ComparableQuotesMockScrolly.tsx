"use client";

/**
 * ComparableQuotesMockScrolly - Version avec scrollytelling
 * Desktop : Téléphone sticky + états synchronisés avec le scroll
 * Mobile : Carousel classique (comme avant)
 * Pattern inspiré de Ramp, Stripe, Linear
 */

import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo, useInView, useScroll, useTransform } from "framer-motion";
import { Phone, ChevronLeft, ChevronRight, Check, X, AlertCircle, Star } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";
import { computeMockQuotes } from "@/lib/utils/mockQuotes";
import { MoverCard } from "@/components/premium/MoverCard";

const steps = [
  {
    id: 0,
    text: "Nous analysons votre dossier",
    state: "analyzing", // État du téléphone correspondant
  },
  {
    id: 1,
    text: "Nous mettons le marché en concurrence",
    state: "all-quotes",
  },
  {
    id: 2,
    text: "Nous éliminons les offres à risque",
    state: "filtering",
  },
  {
    id: 3,
    text: "Nous retenons les meilleures",
    state: "selected",
  },
  {
    id: 4,
    text: "Vous choisissez en toute confiance",
    state: "best",
  },
];

const AUTO_PLAY_MS = 4000;

// Stepper avec détection de position de scroll
function ScrollStepper({ 
  steps: stepTexts, 
  onStepInView 
}: { 
  steps: typeof steps; 
  onStepInView: (index: number) => void;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = stepTexts.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
            onStepInView(index);
          }
        },
        { threshold: 0.6, rootMargin: "-40% 0px -40% 0px" }
      );

      if (stepRefs.current[index]) {
        observer.observe(stepRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [stepTexts, onStepInView]);

  return (
    <ol className="relative space-y-0">
      {/* Vertical line */}
      <div
        className="absolute left-[11px] top-3 bottom-3 w-px"
        style={{ background: "var(--color-border)" }}
      >
        <motion.div
          className="w-full rounded-full"
          style={{ backgroundColor: "var(--color-accent)", originY: 0 }}
          animate={{ height: `${(activeStep / (stepTexts.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {stepTexts.map((step, i) => {
        const done = i <= activeStep;
        return (
          <li
            key={i}
            ref={(el) => (stepRefs.current[i] = el)}
            className="relative flex items-start gap-3 pb-12 last:pb-0"
          >
            {/* Circle */}
            <div
              className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300"
              style={{
                borderColor: done ? "var(--color-accent)" : "var(--color-border)",
                background: done ? "var(--color-accent)" : "var(--color-surface)",
              }}
            >
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.span
                    key="num"
                    className="text-xs font-bold tabular-nums"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {i + 1}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Text */}
            <motion.span
              className="text-base leading-relaxed pt-0.5 transition-colors duration-300"
              style={{
                color: done ? "var(--color-text)" : "var(--color-text-muted)",
                fontWeight: done ? 600 : 400,
              }}
            >
              {step.text}
            </motion.span>
          </li>
        );
      })}
    </ol>
  );
}

// États du téléphone selon l'étape
function PhoneContent({ state, quotes }: { state: string; quotes: any[] }) {
  const recommended = quotes.filter((q) => q.recommended);
  const rejected = quotes.filter((q) => !q.recommended);
  
  switch (state) {
    case "analyzing":
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 rounded-full border-4 border-t-transparent"
            style={{ borderColor: "var(--color-accent)" }}
          />
          <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
            Analyse en cours...
          </p>
          <p className="text-xs text-center px-8" style={{ color: "var(--color-text-secondary)" }}>
            Collecte des informations · Vérification des disponibilités
          </p>
        </div>
      );

    case "all-quotes":
      return (
        <div className="space-y-3 px-3 overflow-y-auto max-h-full">
          <div className="sticky top-0 bg-[#F9FAFB] pb-2 pt-1 z-10">
            <p className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
              {quotes.length} offres reçues
            </p>
          </div>
          {quotes.slice(0, 5).map((quote) => (
            <div
              key={quote.id}
              className="rounded-lg border p-3 text-xs"
              style={{ 
                borderColor: "var(--color-border)", 
                background: "white" 
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {quote.name}
                </p>
                <p className="font-bold" style={{ color: "var(--color-text)" }}>
                  {quote.price}€
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  {quote.googleRating}/5
                </span>
              </div>
            </div>
          ))}
        </div>
      );

    case "filtering":
      return (
        <div className="space-y-3 px-3 overflow-y-auto max-h-full">
          <div className="sticky top-0 bg-[#F9FAFB] pb-2 pt-1 z-10">
            <p className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
              Analyse des risques en cours
            </p>
          </div>
          {rejected.slice(0, 3).map((quote) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.4 }}
              className="rounded-lg border p-3 text-xs relative"
              style={{ 
                borderColor: "#EF4444", 
                background: "rgba(239, 68, 68, 0.05)" 
              }}
            >
              <div className="absolute top-2 right-2">
                <X className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold line-through" style={{ color: "var(--color-text-muted)" }}>
                  {quote.name}
                </p>
                <p className="font-bold line-through" style={{ color: "var(--color-text-muted)" }}>
                  {quote.price}€
                </p>
              </div>
              <div className="flex items-center gap-1 text-red-600">
                <AlertCircle className="h-3 w-3" />
                <span className="text-xs">Score trop faible</span>
              </div>
            </motion.div>
          ))}
        </div>
      );

    case "selected":
      return (
        <div className="space-y-3 px-3 overflow-y-auto max-h-full">
          <div className="sticky top-0 bg-[#F9FAFB] pb-2 pt-1 z-10">
            <p className="text-xs font-medium" style={{ color: "var(--color-text)" }}>
              ✓ {recommended.length} offres retenues
            </p>
          </div>
          {recommended.slice(0, 3).map((quote, idx) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-lg border p-3 text-xs"
              style={{ 
                borderColor: idx === 0 ? "var(--color-accent)" : "var(--color-border)", 
                background: "white" 
              }}
            >
              {idx === 0 && (
                <div className="mb-2">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold"
                    style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}
                  >
                    ★ Meilleure offre
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {quote.name}
                </p>
                <p className="font-bold" style={{ color: "var(--color-text)" }}>
                  {quote.price}€
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  {quote.googleRating}/5 · Score {quote.score}/100
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      );

    case "best":
      const best = recommended[0];
      if (!best || !best.name) return null;
      return (
        <div className="px-4 space-y-4">
          <div>
            <span
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}
            >
              ★ Recommandé pour vous
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--color-accent)" }}
            >
              {best.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "var(--color-text)" }}>
                {best.name}
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                Score Moverz : {best.score}/100
              </p>
            </div>
          </div>
          <div
            className="rounded-xl p-4"
            style={{ background: "var(--color-surface)" }}
          >
            <p className="text-xs mb-1" style={{ color: "var(--color-text-muted)" }}>
              Prix total
            </p>
            <p className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              {best.price}€
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
              {best.savings}€ moins cher que la moyenne
            </p>
          </div>
          <div className="space-y-2">
            {best.advantages?.slice(0, 3).map((adv: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <Check className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-secondary)" }}>{adv}</span>
              </div>
            ))}
          </div>
          <button
            className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-white"
            style={{ background: "var(--color-accent)" }}
          >
            Choisir cette offre
          </button>
        </div>
      );

    default:
      return null;
  }
}

export function ComparableQuotesMockScrolly() {
  const quotes = useMemo(
    () => computeMockQuotes({ fromCity: "Paris", toCity: "Lyon", areaM2: 60 }),
    []
  );

  const [currentState, setCurrentState] = useState("analyzing");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mobile: carousel classique
  const [currentMobile, setCurrentMobile] = useState(0);
  const recommended = quotes.filter((q) => q.recommended);
  const [showAll, setShowAll] = useState(false);
  const visibleQuotes = showAll ? quotes : recommended;

  const nextMobile = useCallback(() => {
    setCurrentMobile((c) => (c + 1) % visibleQuotes.length);
  }, [visibleQuotes.length]);

  const prevMobile = useCallback(() => {
    setCurrentMobile((c) => (c - 1 + visibleQuotes.length) % visibleQuotes.length);
  }, [visibleQuotes.length]);

  useEffect(() => {
    setCurrentMobile(0);
  }, [showAll]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) nextMobile();
    else if (info.offset.x > 50) prevMobile();
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -280 : 280, opacity: 0 }),
  };

  const handleStepInView = useCallback((index: number) => {
    setCurrentState(steps[index].state);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-28" 
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container">
        {/* MOBILE : Carousel classique */}
        <div className="lg:hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h2
                className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "var(--color-text)" }}
              >
                Nous avons mis le marché en concurrence{" "}
                <span style={{ color: "var(--color-accent)" }}>pour votre dossier.</span>
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Seules les entreprises fiables, disponibles à vos dates et cohérentes en prix vous sont présentées.
              </p>
            </motion.div>

            {/* Phone mockup avec carousel */}
            <motion.div variants={staggerItem} className="flex justify-center">
              <div className="relative w-full max-w-[320px]">
                {/* Device frame */}
                <div
                  className="relative rounded-[40px] border-[6px] px-3 pt-10 pb-5 overflow-hidden"
                  style={{
                    borderColor: "#1F2937",
                    background: "#F9FAFB",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl"
                    style={{ background: "#1F2937" }}
                  />

                  {/* Header inside phone */}
                  <div className="mb-3 px-1">
                    <p className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                      Offres retenues pour votre dossier
                    </p>
                    <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                      {currentMobile + 1}/{visibleQuotes.length}
                    </p>
                  </div>

                  {/* Carousel */}
                  <div className="relative h-[480px]">
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.div
                        key={visibleQuotes[currentMobile]?.id}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragEnd={handleDragEnd}
                        className="absolute inset-0 flex items-start justify-center cursor-grab active:cursor-grabbing"
                      >
                        <MoverCard
                          quote={visibleQuotes[currentMobile]}
                          isFirst={visibleQuotes[currentMobile]?.badge === "best"}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-3 px-1">
                    <button onClick={prevMobile} className="flex h-8 w-8 items-center justify-center rounded-full transition-colors" style={{ background: "var(--color-border-light)" }}>
                      <ChevronLeft className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
                    </button>
                    <div className="flex gap-1.5">
                      {visibleQuotes.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentMobile(i)}
                          className="h-2 rounded-full transition-all"
                          style={{
                            width: i === currentMobile ? 16 : 8,
                            backgroundColor: i === currentMobile ? "var(--color-accent)" : "var(--color-border)",
                          }}
                        />
                      ))}
                    </div>
                    <button onClick={nextMobile} className="flex h-8 w-8 items-center justify-center rounded-full transition-colors" style={{ background: "var(--color-border-light)" }}>
                      <ChevronRight className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
                    </button>
                  </div>
                </div>

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute -top-3 -right-3 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg"
                  style={{ background: "white", color: "var(--color-text)" }}
                >
                  {recommended.length} offres retenues sur {quotes.length}
                </motion.div>
              </div>
            </motion.div>

            {/* Toggle */}
            <motion.div variants={staggerItem} className="flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                {showAll
                  ? "Voir uniquement les offres retenues"
                  : `Voir toutes les offres reçues (${quotes.length})`}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP : Scrollytelling avec téléphone sticky */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* LEFT : Texte avec stepper scrollable */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h2
                className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "var(--color-text)" }}
              >
                Nous avons mis le marché en concurrence{" "}
                <span style={{ color: "var(--color-accent)" }}>pour votre dossier.</span>
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Seules les entreprises fiables, disponibles à vos dates et cohérentes en prix vous sont présentées.
              </p>
            </motion.div>

            {/* Stepper avec scroll detection */}
            <motion.div variants={staggerItem} className="py-8">
              <h3
                className="text-sm font-semibold uppercase tracking-wide mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                Comment ça fonctionne
              </h3>
              <ScrollStepper steps={steps} onStepInView={handleStepInView} />
            </motion.div>

            {/* Phone callout */}
            <motion.div variants={staggerItem} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <Phone className="h-3.5 w-3.5 shrink-0" />
              Votre téléphone reste masqué jusqu&apos;à ce que vous choisissiez un déménageur.
            </motion.div>
          </motion.div>

          {/* RIGHT : Téléphone STICKY */}
          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[360px]">
                {/* Device frame */}
                <div
                  className="relative rounded-[40px] border-[6px] overflow-hidden shadow-2xl"
                  style={{
                    borderColor: "#1F2937",
                    background: "#F9FAFB",
                    minHeight: "600px",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl z-20"
                    style={{ background: "#1F2937" }}
                  />

                  {/* Header inside phone */}
                  <div className="px-4 pt-10 pb-3 border-b" style={{ borderColor: "var(--color-border)" }}>
                    <p className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                      Votre sélection personnalisée
                    </p>
                    <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                      Paris → Lyon · 60m²
                    </p>
                  </div>

                  {/* Content dynamique selon l'état */}
                  <div className="p-4 min-h-[500px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentState}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <PhoneContent state={currentState} quotes={quotes} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-3 -right-3 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg"
                  style={{ background: "white", color: "var(--color-text)" }}
                >
                  {recommended.length} offres retenues sur {quotes.length}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
