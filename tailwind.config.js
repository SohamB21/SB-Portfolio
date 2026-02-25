/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006837", // Deep Forest Green
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#006837",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        teal: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#006837",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        secondary: {
          DEFAULT: "#8CC63F", // Lime/Leaf Green
          light: "#bef264",
          dark: "#4d7c0f",
        },
        cta: {
          DEFAULT: "#F7941D", // Vibrant Orange
          hover: "#e67e00",
        },
        background: {
          primary: "#FFFFFF",
          soft: "#FAFAFA",
        },
        text: {
          heading: "#171717",
          body: "#4B5563",
        },
        // Compatibility aliases
        cream: "#FFFFFF",
        charcoal: "#171717",
        mustard: "#F7941D",
        dark: {
          DEFAULT: "#0F172A",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0F172A",
          950: "#020617",
        },
        fresco: {
          teal: "#006837",
          orange: "#F7941D",
          green: "#8CC63F",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        whisper: ["Whisper", "cursive"],
        yellowtail: ["Yellowtail", "cursive"],
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "text-slide": "text-slide 12s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 7s infinite",
        "slide-in": "slide-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards 0.2s",
        wiggle: "wiggle 30s linear infinite",
      },
    },
  },
  plugins: [],
};
