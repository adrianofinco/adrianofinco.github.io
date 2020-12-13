isDevelopment = require('./devenv.js');

module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['_site/**/*.html'],
    enabled: !isDevelopment,
    options: {
      safelist: [],
    }
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      colors: {
        dimgrey: "#777777",
        lightgrey: "#444444"
      },
      fontFamily: {
        sans: ['Nunito', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [],
};
