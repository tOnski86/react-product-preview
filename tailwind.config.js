/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: 'hsl(0, 0%, 100%)',
      cream: 'hsl(30, 38%, 92%)',
      green: 'hsl(158, 36%, 37%)',
      grey: 'hsl(228, 12%, 48%)',
      blue: 'hsl(212, 21%, 14%)',
    },
    fontFamily: {
      fraunces: ['Fraunces', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
