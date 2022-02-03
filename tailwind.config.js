module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './data/posts/**/*.mdx',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: {
        50: '#f8f9fa ',
        100: '#f1f3f5 ',
        200: '#e9ecef ',
        300: '#dee2e6 ',
        400: '#ced4da ',
        500: '#adb5bd ',
        600: '#6c757d ',
        700: '#495057 ',
        800: '#343a40 ',
        900: '#212529',
      },
    },
  },
  plugins: [],
};
