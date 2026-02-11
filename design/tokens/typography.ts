/**
 * TYPOGRAPHIE - HIÉRARCHIE STRICTE
 * 
 * Règles:
 * - 1 seul style par niveau (H1, H2, etc.)
 * - Line-height généreux pour lisibilité
 * - Pas de variations "au feeling"
 */

export const typography = {
  // Display (Hero uniquement)
  display: {
    size: '3.5rem',      // 56px
    lineHeight: '1.1',
    weight: '700',
    letterSpacing: '-0.02em',
  },

  // H1 (Titres de sections principales)
  h1: {
    size: '2.5rem',      // 40px
    lineHeight: '1.2',
    weight: '700',
    letterSpacing: '-0.01em',
  },

  // H2 (Sous-titres de sections)
  h2: {
    size: '2rem',        // 32px
    lineHeight: '1.3',
    weight: '600',
    letterSpacing: '0',
  },

  // H3 (Titres de cards)
  h3: {
    size: '1.5rem',      // 24px
    lineHeight: '1.4',
    weight: '600',
    letterSpacing: '0',
  },

  // Body Large (Intro, descriptions importantes)
  bodyLarge: {
    size: '1.125rem',    // 18px
    lineHeight: '1.7',
    weight: '400',
  },

  // Body (Texte standard)
  body: {
    size: '1rem',        // 16px
    lineHeight: '1.6',
    weight: '400',
  },

  // Body Small (Mentions légales, footer)
  bodySmall: {
    size: '0.875rem',    // 14px
    lineHeight: '1.5',
    weight: '400',
  },

  // Label/Button
  label: {
    size: '1rem',        // 16px
    lineHeight: '1',
    weight: '600',
    letterSpacing: '0.01em',
  },
} as const;
