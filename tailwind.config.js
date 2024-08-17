module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#807EF5',
        tertiary: '#D7ECED',
      },
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui'],
      },
    },
  },
  plugins: [],
};
