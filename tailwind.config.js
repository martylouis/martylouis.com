const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './data/posts/**/*.mdx',
    './data/pages/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Text', ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: {
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6c757d',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      teal: {
        50: '#e6fcf5',
        100: '#c3fae8',
        200: '#96f2d7',
        300: '#63e6be',
        400: '#38d9a9',
        500: '#20c997',
        600: '#12b886',
        700: '#0ca678',
        800: '#099268',
        900: '#087f5b',
      },
      indigo: {
        50: '#edf2ff',
        100: '#dbe4ff',
        200: '#bac8ff',
        300: '#91a7ff',
        400: '#748ffc',
        500: '#5c7cfa',
        600: '#4c6ef5',
        700: '#4263eb',
        800: '#3b5bdb',
        900: '#364fc7',
      },
    },
  },
  plugins: [],
};
