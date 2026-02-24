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
      padding: { DEFAULT: "1.25rem", md: "1.5rem", lg: "2rem" },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1120px",
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Système de couleurs Moverz V4
        accent: {
          DEFAULT: "#0EA5A6",
          light: "#6BCFCF",
          dark: "#0B8B8C",
        },
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        "glow-turquoise": "0 4px 16px rgba(14,165,166,0.3)",
        "glow-turquoise-lg": "0 6px 24px rgba(14,165,166,0.5)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
