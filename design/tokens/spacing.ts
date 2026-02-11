/**
 * ESPACEMENT - SCALE 8pt
 * Base: 8px (0.5rem)
 */

export const spacing = {
  // Micro
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  
  // Standard
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  
  // Sections
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
  '4xl': '8rem',   // 128px
} as const;

/**
 * RÈGLES SECTIONS:
 * - Hero: py-16 md:py-20
 * - Sections standards: py-12 md:py-16
 * - Sections compactes: py-8 md:py-12
 * 
 * ❌ Ne plus faire: énormes espaces vides (py-24)
 */
