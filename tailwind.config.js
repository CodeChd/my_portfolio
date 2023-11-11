/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#151515",
        accent: "#4EE1A0",
        secondary: "#242424",
        "text-color": "#d9d9d9",
        "header-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
