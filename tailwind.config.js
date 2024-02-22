const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto Mono', 'Serif'],
        secondary: ['Nunito', 'Serif']
      },
      colors: {
        warning: '#FF3C3C',
        primary: {
          500: '#48E59B',
          700: '#48e59bcc',
          900: '#0A4429'
        },
        brand: {
          100: '#c6eedb0d',
          200: '#c6eedb33',
          300: '#C6EEDB',
          dark: '#232C27',
          black: '#111111',
          blue: '#70A8F4'
        },
        black: {
          200: '#d9d9d9cc',
          500: '#D9D9D9',
          600: '#313131e6',
          700: '#111111b3',
          900: '#111111',
          1000: '#000000'
        },
        border: {
          500: '#444444'
        }
      },
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        dissolve: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1
          }
        }
      },
      animation: {
        'loading': 'loading 1s ease-in-out infinite alternate',
        'dissolve': 'dissolve 0.2s linear 1'
      },
    },
  },
  plugins: [],
}

