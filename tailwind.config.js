const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*{.js,.md,.mdx}'],
  darkMode: 'false',
  theme: {
    fontFamily: {
      // sans: ['Inter var', 'sans-serif'],
      // serif: ['DM Serif Display', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
      mono: ['DM Mono', 'monospace'],
    },
    colors: {
      // https://hihayk.github.io/scale/#4/5/80/96/0/0/-25/25/757880/117/120/128/l-1
      // gray: {
      //   50: '#FAFAFA',
      //   100: '#DFE0E1',
      //   200: '#C5C6C9',
      //   300: '#AAACB0',
      //   400: '#909298',
      //   500: '#757880',
      //   600: '#5D6067',
      //   700: '#46484D',
      //   800: '#2E3034',
      //   900: '#17181A',
      // },
      gray: colors.coolGray,
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      purple: colors.purple,
      orange: colors.orange,
      pink: colors.pink,
      teal: colors.teal,
      yellow: colors.yellow,
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
