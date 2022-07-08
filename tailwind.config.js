/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme') //small media 420px
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  theme: {
    screens: {
      's': '420px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
}


