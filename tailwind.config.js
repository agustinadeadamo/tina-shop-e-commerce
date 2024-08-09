module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ad74ad',
        secondary: {
          light: '#e6cfe6',
          DEFAULT: '#2391b1',
        },
        tertiary: {
          light: '#D7ECED',
          DEFAULT: '#f9bb30',
        },
        customGrey: {
          light: '#F8F3ED',
          DEFAULT: '#f4f4f6',
        },
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
