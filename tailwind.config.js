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
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
