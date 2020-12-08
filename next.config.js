const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
});

module.exports = {
  images: {
    domains: ['static.martylouis.com'],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.mdx?$/,
  //       use: [
  //         'babel-loader',
  //         '@mdx-js/loader',
  //         path.join(__dirname, './lib/frontmatter-loader'),
  //       ],
  //     },
  //   ],
  // },
};
