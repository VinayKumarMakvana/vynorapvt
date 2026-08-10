import type { Config } from "tailwindcss";

// Design tokens for Vinay's Web Studio
// Palette: charcoal-void base, deep blue -> teal signal gradient, gold reserved for primary CTAs only.
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#0a0d12",
          soft: "#0d1117",
        },
        surface: {
          DEFAULT: "#10151c",
          raised: "#161c26",
          border: "#212a36",
        },
        blue: {
          deep: "#123a72",
          signal: "#2e6fe0",
        },
        teal: {
          DEFAULT: "#17b8a4",
          bright: "#3fe9cf",
        },
        gold: {
          DEFAULT: "#e8b34c",
          bright: "#f6d488",
        },
        ink: {
          primary: "#edf1f5",
          secondary: "#93a1b3",
          muted: "#5a6779",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(115deg, #123a72 0%, #17b8a4 100%)",
        "signal-gradient-vertical": "linear-gradient(180deg, #123a72 0%, #17b8a4 100%)",
        "void-fade": "linear-gradient(180deg, rgba(10,13,18,0) 0%, #0a0d12 100%)",
        "void-fade-top": "linear-gradient(0deg, rgba(10,13,18,0) 0%, #0a0d12 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(232, 179, 76, 0.35), 0 0 1px rgba(232, 179, 76, 0.8)",
        "gold-glow-lg": "0 0 40px rgba(232, 179, 76, 0.45), 0 0 2px rgba(232, 179, 76, 0.9)",
        "teal-glow": "0 0 30px rgba(23, 184, 164, 0.25)",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
