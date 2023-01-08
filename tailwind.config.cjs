/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        fira: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        primary: '#6768ab',
        secondary: '#e5c3c3',
        tertiary: '#ecc478',
        fontPrimary: '#0d2432',
        fontSecondary: '#37526d',
        heart: '#ea8181',
        darkPlaceholder: 'hsl(200, 20%, 80%)',
        lightPlaceholder: 'hsl(200, 20%, 95%)',
      },
      backgroundImage: {
        'hero-small': "url('/images/heros/hero-image-small.jpg')",
        'hero-large': "url('/images/heros/hero-image.jpg')",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
