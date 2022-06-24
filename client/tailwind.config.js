/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      mywhite: '#fafafa',
      white: '#ffffff',
      myblack: '#333946',
      darkblue: '#171821',
      turquoise: '#13adde',
      neon: '#35d5ff',
      yellow: '#FCD34D',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/wave.webp')",
      }
     }
  },
  plugins: [],
}
