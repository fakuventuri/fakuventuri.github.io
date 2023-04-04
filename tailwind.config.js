/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.2s ease-in forwards",
        fadeOut: "fadeOut 0.2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
    },
  },
  plugins: [],
};
