/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "cursive"],
      },
    },
    colors: {
      primary: "#6941C6",
      error: "#FDA29B",
      red: "#F04438",
      nav: "#7F56D9",
    },
  },
  plugins: [],
};
