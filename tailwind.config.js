/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'SF Pro Icons',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        appleGray: '#f5f5f7',
        appleBlack: '#1d1d1f',
        appleBlue: '#0071e3',
        appleGradientStart: '#f5f5f7',
        appleGradientEnd: '#e5e9f2',
      },
      backgroundImage: {
        'apple-gradient': 'linear-gradient(135deg, #f5f5f7 0%, #e5e9f2 100%)',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}; 