/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/wave.webp')",
      }
     }
  },
  plugins: [],
}
