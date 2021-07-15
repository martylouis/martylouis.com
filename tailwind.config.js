const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*{.js,.md,.mdx}', './posts/**/*{.js,.md,.mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
      // sans: ['DM Sans', 'sans-serif'],
    },
    colors: {
      yellow: {
        50: '#f5f4f0',
        100: '#f3f2ed',
        200: '#e4e3d7',
        300: '#ccc9b3',
        400: '#b4af8e',
        500: '#938d62',
        600: '#74704e',
        700: '#5c583d',
        800: '#494731',
        900: '#46442f',
      },
      gray: {
        50: '#f7f7f8',
        100: '#f1f2f3',
        200: '#e1e2e5',
        300: '#c5c7ce',
        400: '#a4a7b2',
        500: '#838895',
        600: '#656976',
        700: '#4b4e58',
        800: '#3b3d45',
        900: '#36383f',
      },
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      purple: colors.purple,
      orange: colors.orange,
      pink: colors.pink,
      teal: colors.teal,
      // https://colordesigner.io/#29B269-D9CB9E-374140-2A2C2B-BDC3C7
      // https://hihayk.github.io/scale/#4/5/80/96/0/0/-25/25/33B74C/51/183/76/l-1
      green: {
        50: '#F8FCF8',
        100: '#D3EBD7',
        200: '#ADDCB6',
        300: '#85CF93',
        400: '#5DC270',
        500: '#33B74C',
        600: '#26963B',
        700: '#1A732B',
        800: '#0F4E1B',
        900: '#07280D',
      },
    },
    // container: {
    //   center: true,
    //   padding: '1.5rem',
    // },
  },
  variants: {
    extend: {
      translate: ['group-hover', 'group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
