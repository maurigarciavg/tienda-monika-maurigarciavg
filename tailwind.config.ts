import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        monnama: {
          cream: "#FAF8F4",
          surface: "#F0EBE3",
          terra: "#B87A52",
          "terra-dark": "#8B5E3C",
          sage: "#7B9B7E",
          brown: "#2D1E14",
          "brown-mid": "#6B5744",
          peach: "#E8D5BC",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
