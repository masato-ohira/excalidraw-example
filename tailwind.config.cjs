/** @type {import('tailwindcss').Config} */

const { typewindTransforms } = require('typewind/transform')

module.exports = {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
    transform: typewindTransforms,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
