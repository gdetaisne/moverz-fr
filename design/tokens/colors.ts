/**
 * MOVERZ DESIGN SYSTEM 2026
 * Palette de couleurs - RÈGLES STRICTES
 * 
 * DO:
 * - Utiliser ces tokens partout (jamais de couleurs hard-codées)
 * - Primary pour CTA principal (Warm Yellow)
 * - Deep Teal pour textes importants/liens
 * - Mint pour accents/success
 * 
 * DON'T:
 * - Jamais de mint/yellow en texte sur fond blanc
 * - Jamais de variations "au feeling"
 * - Maximum 1 section dark par page
 */

export const colors = {
  // ========================================
  // BRAND CORE
  // ========================================
  brand: {
    deepTeal: '#042F34',      // Primary brand color (texte, liens, dark sections)
    charcoalTeal: '#16232B',  // Body text
    mint: '#B5F2DB',          // Secondary accent (success, highlights)
    warmYellow: '#FFC933',    // Primary CTA accent
  },

  // ========================================
  // NEUTRALS
  // ========================================
  neutral: {
    white: '#FFFFFF',
    paleBlueGray: '#E4EEF0',  // Alt backgrounds
    lightGray: '#F8FAFB',     // Subtle tints
    mutedGray: '#8A9BA8',     // Disabled states
  },

  // ========================================
  // SEMANTIC (basés sur brand)
  // ========================================
  semantic: {
    success: '#B5F2DB',       // = mint
    warning: '#FFC933',       // = warmYellow
    error: '#EF4444',         // Seule exception
    info: '#042F34',          // = deepTeal
  },

  // ========================================
  // TEXT (hiérarchie stricte)
  // ========================================
  text: {
    primary: '#16232B',       // Body, paragraphes
    heading: '#042F34',       // Titres, emphasis
    muted: '#8A9BA8',         // Secondary info
    onDark: '#FFFFFF',        // Sur fond dark
    onYellow: '#16232B',      // Sur fond yellow (CTA)
  },

  // ========================================
  // SURFACES
  // ========================================
  surface: {
    white: '#FFFFFF',
    light: '#F8FAFB',
    alt: '#E4EEF0',
    dark: '#16232B',
    darkAccent: '#042F34',
  },
} as const;

/**
 * USAGE RULES
 * 
 * CTA Primary:    bg: warmYellow, text: charcoalTeal
 * CTA Secondary:  bg: deepTeal, text: white
 * CTA Tertiary:   border: deepTeal, text: deepTeal
 * 
 * Cards:          bg: white, border: paleBlueGray (subtle)
 * Pills/Badges:   bg: paleBlueGray, text: charcoalTeal
 * 
 * Sections:       alternance white / paleBlueGray
 * Dark Section:   bg: charcoalTeal, 1 MAX par page
 */
