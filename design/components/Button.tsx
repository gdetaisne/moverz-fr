/**
 * BOUTON - COMPOSANT DESIGN SYSTEM
 * 3 variants SEULEMENT
 */

import { colors } from '../tokens/colors';
import { radius } from '../tokens/radius';
import { shadows } from '../tokens/shadows';

export const buttonStyles = {
  // ========================================
  // PRIMARY - CTA Principal (Warm Yellow)
  // ========================================
  primary: {
    className: `
      inline-flex items-center justify-center gap-2
      px-8 py-4
      bg-[#FFC933]
      text-[#16232B]
      font-semibold text-base
      rounded-[12px]
      shadow-none
      transition-all duration-200
      hover:shadow-[0_4px_16px_rgba(22,35,43,0.08)]
      hover:scale-[1.02]
      active:scale-[0.98]
      focus:outline-none focus:ring-4 focus:ring-[#FFC933]/30
    `.replace(/\s+/g, ' ').trim(),
    // Hauteur: 52px (confortable, accessible)
    // Contraste: AAA (WCAG)
  },

  // ========================================
  // SECONDARY - Actions importantes (Deep Teal)
  // ========================================
  secondary: {
    className: `
      inline-flex items-center justify-center gap-2
      px-8 py-4
      bg-[#042F34]
      text-white
      font-semibold text-base
      rounded-[12px]
      shadow-none
      transition-all duration-200
      hover:bg-[#053A40]
      hover:shadow-[0_4px_16px_rgba(22,35,43,0.08)]
      focus:outline-none focus:ring-4 focus:ring-[#042F34]/30
    `.replace(/\s+/g, ' ').trim(),
  },

  // ========================================
  // TERTIARY - Actions secondaires (Outline)
  // ========================================
  tertiary: {
    className: `
      inline-flex items-center justify-center gap-2
      px-8 py-4
      bg-transparent
      border-2 border-[#042F34]
      text-[#042F34]
      font-semibold text-base
      rounded-[12px]
      transition-all duration-200
      hover:bg-[#E4EEF0]
      focus:outline-none focus:ring-4 focus:ring-[#042F34]/20
    `.replace(/\s+/g, ' ').trim(),
  },
} as const;

/**
 * USAGE:
 * 
 * ✅ DO:
 * - 1 seul bouton primary par zone visible
 * - Secondary pour alternatives (ex: "En savoir plus")
 * - Tertiary pour actions moins importantes
 * - Toujours le même libellé CTA (ex: "Obtenir mes devis")
 * 
 * ❌ DON'T:
 * - Plusieurs styles de primary sur la même page
 * - Boutons "disabled" visuellement similaires
 * - Pills qui ressemblent à des boutons
 */

export const Button = {
  Primary: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={buttonStyles.primary.className} {...props}>
      {children}
    </button>
  ),
  Secondary: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={buttonStyles.secondary.className} {...props}>
      {children}
    </button>
  ),
  Tertiary: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={buttonStyles.tertiary.className} {...props}>
      {children}
    </button>
  ),
};
