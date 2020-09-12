const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [],
    // rehypePlugins: []
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

module.exports = {
  module: {
    rules: [
      {
        test: /.mdx?$/,
        use: [
          'babel-loader',
          {
            resolve: '@mdx-js/loader',
            options: {
              rehypePlugins: [rehypePrism],
            },
          },
        ],
      },
    ],
  },
};
