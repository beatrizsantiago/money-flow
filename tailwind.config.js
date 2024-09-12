/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          main: '#004D61',
        },
        secondary: {
          main: '#47A138',
          light: '#E4EDE3',
        },
        gray: {
          main: '#8B8B8B',
          xlight: '#F8F8F8',
          light: '#CCCCCC',
          medium: '#CBCBCB',
          dark: '#444444',
          bluegray: '#DEE9EA',
        },
      },
      backgroundImage: {
        'blue-white-gradient': 'linear-gradient(180deg, #004D61 0%, #FFFFFF 100%)',
      },
      fontSize: {
        sm: '0.812rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.568rem',
      },
    },
  },
  plugins: [],
}
