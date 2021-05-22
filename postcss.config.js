const tailwind = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = {
  plugins: process.env.NODE_ENV == 'production'
            ? [tailwind, cssnano({ preset: 'default', discardComments: {removeAll: true} })] 
            : [tailwind]
}
