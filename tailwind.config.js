const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    enabled: process.env.NODE_ENV == 'production',
    content: ['_site/**/*.html', '_site/**/*.js'],
    options: {
      safelist: [],
    }
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'gray': colors.trueGray,
        'black': {
          100: '#888',
          200: '#777',
          300: '#666',
          400: '#555',
          500: '#444',
          600: '#333',
          700: '#333',
          800: '#222',
          900: '#111',
          DEFAULT: '#000'
        },
      },
      spacing: {
        'unset': 'unset'
      },
      fontFamily: {
        sans: ['Nunito', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [],
}
