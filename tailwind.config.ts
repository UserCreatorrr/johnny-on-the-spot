import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#999999",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.01em",
        wide: "0.08em",
        wider: "0.12em",
        widest: "0.2em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "blink-cursor": "blinkCursor 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blinkCursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
