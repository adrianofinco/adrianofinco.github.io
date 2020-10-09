module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.TAILWINDPURGE == "true",
    layers: ['utilities', 'components'],
    content: [
      './_site/**/*.html',
      './_site/**/*.js'
    ],
    options: {
      whitelist: []
    }
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out'
      }
    },
  },
  variants: {},
  plugins: [],
}
