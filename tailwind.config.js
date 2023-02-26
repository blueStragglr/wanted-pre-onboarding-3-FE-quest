/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 1px 3px rgba(0, 0, 0, 0.24), 0px 0px 1px rgba(0, 0, 0, 0.06);",
      },
    },
  },
  plugins: [],
};
