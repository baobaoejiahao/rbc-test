/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // RBC brand colors
        'rbc-blue': '#0051A5',
        'rbc-dark-blue': '#003168',
        'rbc-light-blue': '#0079C1',
        'rbc-yellow': '#FEDF01',
        'rbc-gray': '#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}