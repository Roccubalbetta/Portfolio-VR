/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          50: '#f7f7ff',
          100: '#eef0ff',
          200: '#d9dcff',
          300: '#b7baff',
          400: '#8b8fff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b'
        }
      },
      boxShadow: {
        glow: '0 0 120px rgba(99,102,241,0.25)',
      }
    },
  },
  plugins: [],
}
