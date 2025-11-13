/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hub-teal': '#3E807D',
        'hub-teal-dark': '#2c5d5a',
      }
    },
  },
  plugins: [],
}