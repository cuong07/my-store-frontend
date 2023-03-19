/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "logo": ["Josefin Sans", "Arial", "sans-serif"],
      "nav": ["Jost"],
      "slider-text": ["Josefin Sans"],
    },
    letterSpacing: {
      "slider": ".25em"
    }
  },
  plugins: [],
}