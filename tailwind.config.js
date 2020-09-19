const modularLineHeight = 'calc(0.45rem + 1em)';
const mdx = require('@mdx-js/mdx');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
      './blog/**/*.{js,ts,jsx,tsx,md,mdx}',
    ],
    options: {
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      spacing: {
        '16x9': '56.25%',
        fourth: '75%',
        half: '50%',
        full: '100%',
      },
      borderRadius: {
        xl: '1rem',
      },
      fontSize: {
        'sm-mod': ['0.75rem', modularLineHeight],
        'base-mod': ['1.15rem', modularLineHeight],
        'lg-mod': ['1.533rem', modularLineHeight],
        'xl-mod': ['2.043rem', modularLineHeight],
        '2xl-mod': ['2.724rem', modularLineHeight],
        '3xl-mod': ['3.631rem', modularLineHeight],
      },
      colors: {
        gray: {
          100: '#EDEEF0',
          200: '#CCCFD4',
          300: '#ACB1B7',
          400: '#8B929B',
          500: '#6B737E',
          600: '#555C65',
          700: '#40454C',
          800: '#2A2E33',
          900: '#15171A',
        },
        green: {
          100: '#EBFBF2',
          200: '#B0EECE',
          300: '#75DBAD',
          400: '#3BC48D',
          500: '#00a86e',
          600: '#008F56',
          700: '#00713E',
          800: '#005027',
          900: '#002A12',
        },
        blue: {
          100: '#E3EFFC',
          200: '#B1D1F7',
          300: '#80B4EF',
          400: '#5196E6',
          500: '#2479DB',
          600: '#1A61B2',
          700: '#114888',
          800: '#0A305C',
          900: '#04182F',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
