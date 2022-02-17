const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  reactStrictMode: true,
  images: {
    domains: ['static.martylouis.com', 'images.unsplash.com'],
  },
});
