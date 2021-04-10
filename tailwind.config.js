const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*{.js,.md,.mdx}'],
  // darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      gray: {
        50: 'hsla(208, 16%, 97%, 1)',
        100: 'hsla(208, 12%, 88%, 1)',
        200: 'hsla(208, 12%, 76%, 1)',
        300: 'hsla(208, 12%, 68%, 1)',
        400: 'hsla(208, 10%, 60%, 1)',
        500: 'hsla(208, 8%, 52%, 1)',
        600: 'hsla(208, 8%, 44%, 1)',
        700: 'hsla(208, 8%, 35%, 1)',
        800: 'hsla(208, 8%, 26%, 1)',
        900: 'hsla(208, 8%, 12%, 1)',
      },
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      // https://colordesigner.io/#29B269-D9CB9E-374140-2A2C2B-BDC3C7
      green: {
        50: '#FBFEFC',
        100: '#D9F5E4',
        200: '#B9EACD',
        300: '#9ADEB5',
        400: '#7CD19E',
        500: '#61C288',
        600: '#46B171',
        700: '#339359',
        800: '#227242',
        900: '#144F2C',
        1000: '#092916',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  variants: {
    extend: {
      translate: ['group-hover', 'group-focus'],
    },
  },
};
