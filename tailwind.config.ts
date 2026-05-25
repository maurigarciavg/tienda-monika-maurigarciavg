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
          cream: "#FFFEF9",
          surface: "#FFF0F5",
          terra: "#E8829A",
          "terra-dark": "#C4607A",
          sage: "#72BDA3",
          brown: "#1F2952",
          "brown-mid": "#7B6080",
          peach: "#FFE4ED",
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
