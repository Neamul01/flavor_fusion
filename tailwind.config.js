/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        layout: '85rem',
      },
      width: {
        layout: '85rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#c9933f',
        secondary: '#04161d',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        jost: ['var(--font-jost)'],
        cormorant: ['var(--font-cormorant_garamond)'],
      },
    },
  },
  plugins: [],
}
