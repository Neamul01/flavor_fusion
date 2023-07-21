/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '2rem',
        },
        screens: {
          sm: '100%',
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
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
