/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          ink: '#111111',    // nero inchiostro
          sand: '#F8F6F1',   // bianco carta calda
          line: '#E9E6E0',   // grigio tenue per bordi
          gold: '#B08D57',   // accento caldo (usalo poco)
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(17,17,17,0.06)',
      },
    },
  },
  plugins: [],
}