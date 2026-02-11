import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./design/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "1.5rem" },
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      // ========================================
      // COLORS - NOUVELLE PALETTE 2026
      // ========================================
      colors: {
        brand: {
          // Core (nouvelle palette)
          deepTeal: '#042F34',
          charcoalTeal: '#16232B',
          mint: '#B5F2DB',
          warmYellow: '#FFC933',
          
          // Neutrals
          paleBlueGray: '#E4EEF0',
          lightGray: '#F8FAFB',
          mutedGray: '#8A9BA8',
          white: '#FFFFFF',
          
          // Semantic
          success: '#B5F2DB',
          warning: '#FFC933',
          error: '#EF4444',
          
          // Legacy (à migrer progressivement)
          DEFAULT: '#04163a',
          primary: '#04163a',
          accent: '#2b7a78',
          soft: '#6bcfcf',
          secondary: '#6bcfcf',
        },
        
        // Text shortcuts
        text: {
          primary: '#16232B',
          heading: '#042F34',
          muted: '#8A9BA8',
          onDark: '#FFFFFF',
          onYellow: '#16232B',
        },
        
        // Surfaces
        surface: {
          white: '#FFFFFF',
          light: '#F8FAFB',
          alt: '#E4EEF0',
          dark: '#16232B',
          darkAccent: '#042F34',
        },
      },
      
      // ========================================
      // SHADOWS - 3 NIVEAUX MAX
      // ========================================
      boxShadow: {
        none: 'none',
        soft: '0 4px 16px rgba(22, 35, 43, 0.08)',
        medium: '0 8px 24px rgba(22, 35, 43, 0.12)',
        strong: '0 12px 40px rgba(22, 35, 43, 0.16)',
        // Legacy (à migrer)
        'marketing-xl': '0 10px 30px -10px rgba(0,0,0,0.35)',
        'marketing-2xl': '0 25px 60px -12px rgba(0,0,0,0.4)',
        card: '0 8px 30px rgba(0,0,0,.12)',
        glow: '0 0 0 4px rgba(107,207,207,.22)'
      },
      
      // ========================================
      // BORDER RADIUS - UNIFORMITÉ
      // ========================================
      borderRadius: {
        button: '12px',
        card: '16px',
        large: '20px',
        input: '10px',
        // Legacy
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem'
      },
      
      // ========================================
      // SPACING - SCALE 8pt
      // ========================================
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
      },
      
      // ========================================
      // TYPOGRAPHY
      // ========================================
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      
      // ========================================
      // TRANSITIONS
      // ========================================
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.2,.8,.2,1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
} satisfies Config;

export default config;
