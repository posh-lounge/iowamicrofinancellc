import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: "#0C7967",
          mid: "#0A5C4E",
          midnight: "#072420",
          soft: "#E8F3EF",
        },
        gold: {
          sunrise: "#F3A93E",
          bright: "#FFC163",
          deep: "#C97F1F",
        },
        cloud: "#F7F5EF",
        ink: {
          DEFAULT: "#10201D",
          soft: "#3E524E",
          faint: "#7C8D89",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,36,32,0.06), 0 8px 24px rgba(7,36,32,0.08)",
        float: "0 20px 60px rgba(7,36,32,0.22)",
        button: "0 6px 20px rgba(12,121,103,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "count-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "count-in": "count-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
