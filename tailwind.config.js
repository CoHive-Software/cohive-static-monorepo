/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#282A38',
      'pearl': '#FDFAEC',
      'yellow': '#FFF2AA',
      'orange': {
        'light': '#FECE3C',
        DEFAULT: '#FCAB1C',
      },
      'brown': '#C17E2F'
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-abril)', 'serif'],
        sans: ['var(--font-lato)', ...fontFamily.sans],
      },
      splashBackgroundImage: "url(/honeycombGradient.jpg)",
    },
  },
  plugins: [],
}

