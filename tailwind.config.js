/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(101%)",
            opacity: "0",
            visibility: "hidden",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
            visibility: "visible",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(0%)",
            opacity: "1",
            visibility: "visible",
          },
          "100%": {
            transform: "translateY(101%)",
            opacity: "0",
            visibility: "hidden",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s forwards",
        "slide-down": "slide-down 0.5s forwards",
      },
    },
  },
  plugins: [],
};
