const tailwind = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    tailwind({}),
    process.env.NODE_ENV.trim() == 'production' 
      ? cssnano({ preset: 'default', discardComments: {removeAll: true} }) :
      null
  ]
}