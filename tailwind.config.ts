import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playwrite: ["Playwrite AU SA", "serif"],
        vollkorn: ["Vollkorn", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "text-color": "var(--text-color)",
        "tertiary-color-hovering": "var(--tertiary-color-hovering)",
        "text-color-hovering": "var(--text-color-hovering)",
      },
      animation: {
        slideInRight: "slideInFromRight 1.0s ease-out forwards",
        slideInLeft: "slideInFromLeft 1.0s ease-out forwards",
      },
      keyframes: {
        slideInFromRight: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromLeft: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
