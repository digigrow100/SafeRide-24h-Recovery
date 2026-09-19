import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09060D",
        secondaryBg: "#120A18",
        panel: "#170D20",
        primaryNeon: "#FF2BD6",
        secondaryNeon: "#8B5CFF",
        accentCyan: "#00E5FF",
        bodyText: "#FFF5FD",
        mutedText: "#AC9AAF",
        subtleBorder: "rgba(255, 43, 214, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "neon-magenta": "0 0 25px rgba(255, 43, 214, 0.45)",
        "neon-violet": "0 0 25px rgba(139, 92, 255, 0.45)",
        "neon-cyan": "0 0 20px rgba(0, 229, 255, 0.4)",
        "deep-glow": "0 0 60px rgba(255, 43, 214, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
