import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        anthares: {
          black: "#050505",
          charcoal: "#101010",
          ember: "#d86a20",
          amber: "#ff8a2a",
          sand: "#f6eee8",
          stone: "#b3aba5"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(216, 106, 32, 0.18)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at top, rgba(216,106,32,0.12), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))"
      }
    }
  },
  plugins: []
};

export default config;
