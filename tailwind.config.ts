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
        // V4 Radical tokens
        v4: {
          bg: "var(--color-bg)",
          "bg-dark": "var(--color-bg-dark)",
          surface: "var(--color-surface)",
          text: "var(--color-text)",
          "text-secondary": "var(--color-text-secondary)",
          "text-muted": "var(--color-text-muted)",
          accent: "var(--color-accent)",
          border: "var(--color-border)",
          "border-light": "var(--color-border-light)",
        },
        // Legacy RGB tokens (backward compat)
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        text: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          2: "rgb(var(--text-2) / <alpha-value>)",
        },
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          2: "rgb(var(--border-2) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          contrast: "rgb(var(--primary-contrast) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          2: "rgb(var(--accent-2) / <alpha-value>)",
        },
        success: "rgb(var(--success) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        // Legacy brand colors
        brand: {
          DEFAULT: "#04163a",
          navy: "#04163a",
          primary: "#04163a",
          turquoise: {
            DEFAULT: "#6BCFCF",
            100: "#E0F7F7",
            200: "#B3EBEB",
            300: "#8FDFDF",
            400: "#6BCFCF",
            500: "#4FBFBF",
          },
          accent: {
            DEFAULT: "#A78BFA",
            100: "#EDE9FE",
            300: "#C4B5FD",
          },
        },
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-btn)",
        input: "var(--radius-input)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        "glow-turquoise": "0 4px 16px rgba(107,207,207,0.3)",
        "glow-turquoise-lg": "0 6px 24px rgba(107,207,207,0.5)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
