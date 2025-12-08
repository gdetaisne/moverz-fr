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
        glow: '0 0 0 4px rgba(107,207,207,.22)'
      },
      colors: {
        brand: {
          DEFAULT: '#04163a',
          primary: '#04163a',
          accent: '#2b7a78',
          soft: '#6bcfcf',
          secondary: '#6bcfcf',
          white: '#ffffff'
        }
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem'
      },
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
