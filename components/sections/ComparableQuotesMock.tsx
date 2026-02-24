"use client";

import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo, useInView } from "framer-motion";
import { Phone, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion";
import { computeMockQuotes } from "@/lib/utils/mockQuotes";
import { MoverCard } from "@/components/premium/MoverCard";

const steps = [
  "Nous analysons votre dossier",
  "Nous mettons le marché en concurrence",
  "Nous éliminons les offres à risque",
  "Nous retenons les meilleures",
  "Vous choisissez en toute confiance",
];

const AUTO_PLAY_MS = 4000;
const STEP_DELAY_MS = 800;

function AnimatedStepper({ steps: stepTexts }: { steps: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    stepTexts.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), (i + 1) * STEP_DELAY_MS));
    });
    return () => timers.forEach(clearTimeout);
  }, [isInView, stepTexts]);

  return (
    <ol ref={ref} className="relative space-y-0">
      {/* Vertical line */}
      <div
        className="absolute left-[11px] top-3 bottom-3 w-px"
        style={{ background: "var(--color-border)" }}
      >
        <motion.div
          className="w-full rounded-full"
          style={{ backgroundColor: "var(--color-accent)", originY: 0 }}
          initial={{ height: 0 }}
          animate={{ height: isInView ? `${(activeStep / (stepTexts.length - 1)) * 100}%` : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {stepTexts.map((text, i) => {
        const done = i <= activeStep;
        return (
          <li key={i} className="relative flex items-start gap-3 pb-5 last:pb-0">
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
                fontWeight: done ? 500 : 400,
              }}
            >
              {text}
            </motion.span>
          </li>
        );
      })}
    </ol>
  );
}

export function ComparableQuotesMock() {
  const quotes = useMemo(
    () => computeMockQuotes({ fromCity: "Paris", toCity: "Lyon", areaM2: 60 }),
    []
  );

  const recommended = quotes.filter((q) => q.recommended);
  const [showAll, setShowAll] = useState(false);
  const visibleQuotes = showAll ? quotes : recommended;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const isPhoneInView = useInView(phoneRef, { once: false, amount: 0.3 });
  const hasEnteredView = useRef(false);

  const safeIndex = current >= visibleQuotes.length ? 0 : current;

  useEffect(() => {
    if (isPhoneInView && !hasEnteredView.current) {
      hasEnteredView.current = true;
      setCurrent(0);
      setDirection(1);
    }
    if (!isPhoneInView) {
      hasEnteredView.current = false;
    }
  }, [isPhoneInView]);

  const goTo = useCallback(
    (next: number) => {
      const target = ((next % visibleQuotes.length) + visibleQuotes.length) % visibleQuotes.length;
      setDirection(next > current ? 1 : -1);
      setCurrent(target);
    },
    [current, visibleQuotes.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || !isPhoneInView) return;
    timerRef.current = setTimeout(next, AUTO_PLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [safeIndex, paused, next, isPhoneInView]);

  useEffect(() => {
    setCurrent(0);
  }, [showAll]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -280 : 280, opacity: 0 }),
  };

  return (
    <section className="py-12 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT — Content (steps first) */}
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

            {/* Steps — animated stepper */}
            <motion.div variants={staggerItem}>
              <h3
                className="text-sm font-semibold uppercase tracking-wide mb-5"
                style={{ color: "var(--color-text-muted)" }}
              >
                Comment ça fonctionne
              </h3>
              <AnimatedStepper steps={steps} />
            </motion.div>

            {/* Toggle + phone callout */}
            <motion.div variants={staggerItem} className="space-y-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                {showAll
                  ? "Voir uniquement les offres retenues"
                  : `Voir toutes les offres reçues (${quotes.length})`}
              </button>

              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <Phone className="h-3.5 w-3.5 shrink-0" />
                Votre téléphone reste masqué jusqu&apos;à ce que vous choisissiez un déménageur.
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Phone mockup with carousel */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div
              ref={phoneRef}
              className="relative w-full max-w-[320px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
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
                    {safeIndex + 1}/{visibleQuotes.length}
                  </p>
                </div>

                {/* Carousel */}
                <div className="relative h-[480px]">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={visibleQuotes[safeIndex]?.id}
                      custom={direction}
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
                        quote={visibleQuotes[safeIndex]}
                        isFirst={visibleQuotes[safeIndex]?.badge === "best"}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center justify-between mt-3 px-1">
                  <button
                    onClick={prev}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                    style={{ background: "var(--color-border-light)" }}
                    aria-label="Précédent"
                  >
                    <ChevronLeft className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {visibleQuotes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: i === safeIndex ? 16 : 8,
                          backgroundColor: i === safeIndex ? "var(--color-accent)" : "var(--color-border)",
                        }}
                        aria-label={`Offre ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                    style={{ background: "var(--color-border-light)" }}
                    aria-label="Suivant"
                  >
                    <ChevronRight className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
                  </button>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -top-3 -right-3 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg"
                style={{ background: "white", color: "var(--color-text)" }}
              >
                {recommended.length} offres retenues sur 7 réponses reçues
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
