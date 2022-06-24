const defaultTheme = require('tailwindcss/defaultTheme');

const withOpacityValue =
  (varName) =>
  ({ opacityValue }) =>
    opacityValue === undefined
      ? `hsl(var(--${varName}))`
      : `hsla(var(--${varName}) / ${opacityValue})`;

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/posts/**/*.mdx',
    './data/pages/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Text', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        noise: 'url("/images/noise.svg")',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: {
        100: withOpacityValue('slate1'),
        200: withOpacityValue('slate2'),
        300: withOpacityValue('slate3'),
        400: withOpacityValue('slate4'),
        500: withOpacityValue('slate5'),
        600: withOpacityValue('slate6'),
        700: withOpacityValue('slate7'),
        800: withOpacityValue('slate8'),
        900: withOpacityValue('slate9'),
        1000: withOpacityValue('slate10'),
        low: withOpacityValue('slate11'),
        high: withOpacityValue('slate12'),
      },
      indigo: {
        100: withOpacityValue('indigo1'),
        200: withOpacityValue('indigo2'),
        300: withOpacityValue('indigo3'),
        400: withOpacityValue('indigo4'),
        500: withOpacityValue('indigo5'),
        600: withOpacityValue('indigo6'),
        700: withOpacityValue('indigo7'),
        800: withOpacityValue('indigo8'),
        900: withOpacityValue('indigo9'),
        1000: withOpacityValue('indigo10'),
        low: withOpacityValue('indigo11'),
        high: withOpacityValue('indigo12'),
      },
      green: {
        100: withOpacityValue('green1'),
        200: withOpacityValue('green2'),
        300: withOpacityValue('green3'),
        400: withOpacityValue('green4'),
        500: withOpacityValue('green5'),
        600: withOpacityValue('green6'),
        700: withOpacityValue('green7'),
        800: withOpacityValue('green8'),
        900: withOpacityValue('green9'),
        1000: withOpacityValue('green10'),
        low: withOpacityValue('green11'),
        high: withOpacityValue('green12'),
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
