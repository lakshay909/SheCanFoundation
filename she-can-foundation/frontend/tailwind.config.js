/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: { brand: '#C0535A' },
        cream: { DEFAULT: '#FAF5EE', soft: '#F2E8DB' },
        bark: { DEFAULT: '#7A4E3E', light: '#A0695A' },
        gold: { DEFAULT: '#D4A853', soft: '#EDD9A3' },
        ink: { DEFAULT: '#2C1A14' },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

