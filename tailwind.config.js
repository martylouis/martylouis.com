const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*{.js,.md,.mdx}', './posts/**/*{.js,.md,.mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
    },
    colors: {
      black: 'black',
      white: 'white',
      yellow: {
        50: '#fbfbf9',
        100: '#f5f4ef',
        200: '#e6e3d6',
        300: '#cec8ab',
        400: '#b2a876',
        500: '#8f844d',
        600: '#706738',
        700: '#534b28',
        800: '#3f3a1c',
        900: '#393418',
      },

      gray: {
        50: '#f6f8f9',
        100: '#edf0f3',
        200: '#d7dfe4',
        300: '#b3c1cc',
        400: '#889faf',
        500: '#607c90',
        600: '#435765',
        700: '#2b3740',
        800: '#1d252b',
        900: '#161d22',
      },
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      purple: {
        50: '#fcf6fe',
        100: '#f8edfd',
        200: '#f1dcf9',
        300: '#e2bdef',
        400: '#ce98e1',
        500: '#b470cd',
        600: '#9b4eb7',
        700: '#713e84',
        800: '#5a3767',
        900: '#4f3659',
      },
      orange: colors.orange,
      pink: colors.pink,
      teal: colors.teal,
      // https://colordesigner.io/#29B269-D9CB9E-374140-2A2C2B-BDC3C7
      // https://hihayk.github.io/scale/#4/5/80/96/0/0/-25/25/33B74C/51/183/76/l-1
      green: {
        50: '#f6fbf7',
        100: '#edf7ef',
        200: '#d1ebd6',
        300: '#b5dfbd',
        400: '#7ec68c',
        500: '#47ae5a',
        600: '#409d51',
        700: '#358344',
        800: '#2b6836',
        900: '#23552c',
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
