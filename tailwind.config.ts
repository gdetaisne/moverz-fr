import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
      boxShadow: {
        'marketing-xl': '0 10px 30px -10px rgba(0,0,0,0.35)',
        'marketing-2xl': '0 25px 60px -12px rgba(0,0,0,0.4)',
        card: '0 8px 30px rgba(0,0,0,.12)',
        soft: '0 4px 16px rgba(0,0,0,.08)',
        glow: '0 0 0 4px rgba(107,207,207,.22)',
        // Premium 2026 shadows
        'glow-turquoise': '0 8px 30px rgba(107,207,207,0.35)',
        'glow-turquoise-lg': '0 12px 40px rgba(107,207,207,0.5)',
        'glow-accent': '0 8px 30px rgba(167,139,250,0.3)',
        'glow-accent-lg': '0 12px 40px rgba(167,139,250,0.45)',
      },
      colors: {
        brand: {
          DEFAULT: '#04163a',
          navy: '#04163a',
          primary: '#04163a',
          white: '#ffffff',
          black: '#0A0A0A',
          // TURQUOISE MOVERZ - Couleur signature 🏡
          turquoise: {
            50: '#F0FDFB',
            100: '#CCFBF1',
            200: '#A8E6D8',
            300: '#7DD3C0',
            DEFAULT: '#6BCFCF',
            500: '#5AB8B8',
            600: '#4AA8A5',
            700: '#3A8885',
          },
          // VIOLET PREMIUM - Accent moderne 💜
          accent: {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#C4B5FD',
            DEFAULT: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
          }
        }
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.2,.8,.2,1)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
} satisfies Config;

export default config;
