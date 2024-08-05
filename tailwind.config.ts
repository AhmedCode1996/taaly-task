import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "custom-layout": "auto 1fr auto",
        "custom-carousel-layout": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
        "custom-badge-layout":
          "repeat(auto-fit, minmax(min(230px, 100%), 1fr))",
      },
      gridTemplateRows: {
        "custom-layout-height": "auto 1fr",
        "custom-dashboard-layout": "auto 1fr auto",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
export default config;
