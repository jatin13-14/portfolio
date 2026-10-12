import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0A0A0B",
          soft: "#0F0F11",
          raised: "#141416",
        },
        paper: {
          DEFAULT: "#FAFAF9",
          soft: "#F4F4F3",
          raised: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#EDEDEC",
          dim: "#A1A1A6",
          faint: "#6B6B70",
        },
        graphite: {
          DEFAULT: "#111113",
          dim: "#4B4B52",
          faint: "#8C8C93",
        },
        accent: {
          DEFAULT: "#7C9CFF",
          soft: "#5B7CFA",
          dim: "#3D4E8A",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          soft: "rgba(255,255,255,0.05)",
          strong: "rgba(255,255,255,0.14)",
        },
        "line-light": {
          DEFAULT: "rgba(17,17,19,0.08)",
          soft: "rgba(17,17,19,0.05)",
          strong: "rgba(17,17,19,0.14)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 4.2vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
