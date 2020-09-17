const modularLineHeight = 'calc(0.45rem + 1em)';
const mdx = require('@mdx-js/mdx');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
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
          100: '#E7F8EE',
          200: '#BCE9CE',
          300: '#93DAAF',
          400: '#6ACA90',
          500: '#42B871',
          600: '#33955A',
          700: '#257143',
          800: '#184C2D',
          900: '#0B2716',
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
