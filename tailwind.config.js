/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/html/*.html", "./public/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
