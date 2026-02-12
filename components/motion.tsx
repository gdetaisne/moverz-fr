"use client";

/**
 * V4 RADICAL — Motion System
 * Un seul effet : fadeUp. Rien d'autre.
 */

import { useEffect, useRef, useState } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

// ===== LE SEUL VARIANT =====

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== Legacy exports (backward compat) =====
export const fadeIn = fadeUp;
export const scaleIn = fadeUp;

// ===== HOOK useInView =====

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, shouldReduceMotion]);

  return { ref, isInView };
}

// ===== COMPOSANTS WRAPPER =====

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function FadeUpSection({ children, className, style, delay = 0 }: MotionSectionProps) {
  const { ref, isInView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <section ref={ref} className={className} style={style}>{children}</section>;
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({ children, className }: MotionSectionProps) {
  const { ref, isInView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// Legacy exports
export const hoverLift = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
  hover: {
    y: -2,
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};
