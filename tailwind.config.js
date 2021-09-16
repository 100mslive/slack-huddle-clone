module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#1B1D21',
          200: '#204457',
          300: '#439f87',
          400: '#148464',
          500: '#144472',
          600: '#3D0E3E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
