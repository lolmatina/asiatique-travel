/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          '2xl': '1200px',
          'xl': '1024px',
          'lg': '992px',
          'md': '768px',
          'sm': '576px',
        },
      },
    },
  },
  plugins: [],
}