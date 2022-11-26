/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cta-img": "url('/images/mic.png')",
      },
      colors: {
        primary: "#ED7F39",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
