/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1198px" },
      // => @media (max-width: 1198px) { ... }

      xs: { max: "1053px" },
      // => @media (max-width: 1198px) { ... }

      tablet: { max: "780px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      mm: { max: "470px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        "primary-clr2": "#abab0d",
        "primary-clr1": "",
      },
    },
  },
  plugins: [],
};
