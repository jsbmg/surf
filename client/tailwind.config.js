/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mywhite: '#feffff',
      myblack: '#333946',
      green: '#73b7c8',
      red: '#f84132',
      yellow: '#e9cd5b',
      gray: '#e0e6db',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/wave.webp')",
      }
     }
  },
  plugins: [],
}
