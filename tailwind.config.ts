import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5468E7",
        secondary: "#232340",
        tertiary: "#FFD76D",
        quaternary: "#4ECDC",
        primarydark: "#1E2139",
        secondarydark: "#161932",
      },
      fontFamily: {
        montserrat: ["--font-montserrat", "Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
