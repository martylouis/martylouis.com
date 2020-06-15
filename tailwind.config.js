module.exports = {
  theme: {
    container: {
      center: true,
      padding: `2rem`,
    },
    extend: {
      colors: {
        'brand-green-100': `hsl(144, 56%, 92%)`,
        'brand-green-200': `hsl(144, 56%, 80%)`,
        'brand-green-300': `hsl(144, 56%, 72%)`,
        'brand-green-400': `hsl(144, 56%, 64%)`,
        'brand-green-500': `hsl(144, 56%, 56%)`,
        'brand-green-600': `hsl(144, 56%, 48%)`,
        'brand-green-700': `hsl(144, 56%, 36%)`,
        'brand-green-800': `hsl(144, 56%, 24%)`,
        'brand-green-900': `hsl(144, 56%, 16%)`,
        'brand-purple-100': `hsl(244, 32%, 96%)`,
        'brand-purple-200': `hsl(244, 32%, 80%)`,
        'brand-purple-300': `hsl(244, 32%, 72%)`,
        'brand-purple-400': `hsl(244, 32%, 64%)`,
        'brand-purple-500': `hsl(244, 32%, 56%)`,
        'brand-purple-600': `hsl(244, 32%, 48%)`,
        'brand-purple-700': `hsl(244, 32%, 32%)`,
        'brand-purple-800': `hsl(244, 32%, 16%)`,
        'brand-purple-900': `hsl(244, 32%, 8%)`,
        'gray-100': `hsl(244, 8%, 96%)`,
        'gray-200': `hsl(244, 8%, 80%)`,
        'gray-300': `hsl(244, 8%, 72%)`,
        'gray-400': `hsl(244, 8%, 64%)`,
        'gray-500': `hsl(244, 8%, 56%)`,
        'gray-600': `hsl(244, 8%, 48%)`,
        'gray-700': `hsl(244, 8%, 32%)`,
        'gray-800': `hsl(244, 8%, 16%)`,
        'gray-900': `hsl(244, 16%, 8%)`,
      },
      fontFamily: {
        sans: [`Inter`, `sans-serif`],
        serif: [`matrix-ii`, `serif;`],
      },
    },
  },
  variants: {
    backgroundColor: [`responsive`, `hover`, `focus`, `active`],
  },
  // plugins: []
};
