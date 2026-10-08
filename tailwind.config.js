/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e8eff7',
          200: '#cbdbee',
          300: '#9ec1e0',
          400: '#69a0cf',
          500: '#4383be',
          600: '#3169a3',
          700: '#285484',
          800: '#24476e',
          900: '#223d5c',
          950: '#17273d',
          accent: '#0071e3',
          dark: '#0f172a',
          surface: '#1e293b'
        }
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(0, 113, 227, 0.3)',
        'glow-lg': '0 0 60px -10px rgba(0, 113, 227, 0.4)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
