/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.1rem',
      xl: '1.25rem',
      heading1: '1.3rem',
      heading2: '1.2rem',
      heading3: '1.1rem'
    },

    fontFamily: {
      sans: ["Pretendard", "sans-serif"],
    },
  },
  plugins: [],
}