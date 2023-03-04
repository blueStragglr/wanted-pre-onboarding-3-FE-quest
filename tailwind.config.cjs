/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        blue: '#284b63',
        gray: '#d9d9d9',
        green: '#3c6e71',
        black: '#353535',
        red: '#bc4749',
      },
    },
  },
  plugins: [],
};
