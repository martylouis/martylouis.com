module.exports = {
  theme: {
    container: {
      center: true,
      padding: `1.5rem`,
    },
    extend: {
      colors: {
        'green-100': `#F0FAF4`,
        'green-200': `#B4E4C7`,
        'green-300': `#95DAB1`,
        'green-400': `#77CF9A`,
        'green-500': `#59C584`,
        'green-600': `#40B56F`,
        'green-700': `#2A794A`,
        'green-800': `#153C25`,
        'green-900': `#0B1E12`,
        'purple-100': `#F3F3F6`,
        'purple-200': `#C5C4D4`,
        'purple-300': `#AEACC3`,
        'purple-400': `#9794B2`,
        'purple-500': `#807DA1`,
        'purple-600': `#6A678E`,
        'purple-700': `#47455F`,
        'purple-800': `#23222F`,
        'purple-900': `#121118`,
        'gray-100': `#F4F4F5`,
        'gray-200': `#CACACE`,
        'gray-300': `#B5B5BA`,
        'gray-400': `#A0A0A7`,
        'gray-500': `#8B8A93`,
        'gray-600': `#76767F`,
        'gray-700': `#4F4E55`,
        'gray-800': `#27272A`,
        'gray-900': `#141415`,
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
