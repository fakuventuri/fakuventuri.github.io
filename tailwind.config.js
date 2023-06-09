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
        breath: {
          "0%": {
            transform: "scale(1)",
            borderColor: "rgba(109, 40, 217, 1)",
          },
          "50%": {
            transform: "scale(1.1)",
            borderColor: "rgba(255, 255, 255, 1)",
          },
          "100%": {
            transform: "scale(1)",
            borderColor: "rgba(109, 40, 217, 1)",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s forwards",
        "slide-down": "slide-down 0.5s forwards",
        breath: "breath 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
