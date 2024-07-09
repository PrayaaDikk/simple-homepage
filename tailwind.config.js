/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html" ,"./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#223344",
        secondary: "#f2f9fe",
        third: "#6a768c",
        darkmode: "#111729",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
