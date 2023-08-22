/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#22c55e",
          200: "#16A34A",
        },
        secondary:{
          100: "#1E1F25",
          900: "#131517",
        },
        terciary:{
          100: "#646464",
          200: "#131532",
        }

      }
    },
  },
  plugins: [],
}