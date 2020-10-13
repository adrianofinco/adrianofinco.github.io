const tailwind = require('tailwindcss');
const cssnano = require('cssnano');

isDevelopment = require('./devenv.js');

if (isDevelopment) {
  postCSSplugins = [
    tailwind
  ]
} else {
  postCSSplugins = [
    tailwind,
    cssnano({
      preset: 'default',
      discardComments: {removeAll: true}
    })
  ]
}

module.exports = {
  plugins: postCSSplugins,
}
