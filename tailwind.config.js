const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e6f7ed',
          '100': '#c1edce',
          '200': '#9be3b1',
          '300': '#74d994',
          '400': '#4dce76',
          '500': '#04c147', // Base Color
          '600': '#03ad40',
          '700': '#038f34',
          '800': '#027227',
          '900': '#01561a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
