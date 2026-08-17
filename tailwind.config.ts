import type { Config } from "tailwindcss";

// Design tokens for VYNORA (Light Corporate Enterprise Theme)
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          DEFAULT: "#ffffff",
          gray: "#f8f9fa",     // Very light gray for subtle section contrast
          border: "#e2e8f0",   // Slate-200
        },
        navy: {
          DEFAULT: "#0f172a",  // Deep Navy Blue (Slate-900)
          muted: "#334155",    // Slate-700
          light: "#64748b",    // Slate-500
        },
        azure: {
          DEFAULT: "#007cc3",  // Infosys-style Azure Blue
          light: "#0099f0",
          dark: "#005a8f",
        },
        vynora: {
          purple: "#7e22ce",   // Subtle brand accent
          gold: "#b87333",     // Subtle brand accent
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "azure-gradient": "linear-gradient(135deg, #007cc3 0%, #005a8f 100%)",
        "subtle-gradient": "linear-gradient(135deg, rgba(0,124,195,0.05) 0%, rgba(126,34,206,0.05) 100%)",
      },
      boxShadow: {
        "corporate": "0 10px 40px -10px rgba(15,23,42,0.08)",
        "azure-glow": "0 0 20px rgba(0, 124, 195, 0.3)",
      },
      letterSpacing: {
        widest2: "0.25em",
        "widest-xl": "0.3em",
      },
      fontWeight: {
        "ultra-thin": "100",
        "super-light": "200",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
