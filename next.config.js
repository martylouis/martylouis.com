const { withContentlayer } = require('next-contentlayer');

const rewrites = async () => [
  { destination: 'https://cdn.splitbee.io/sb.js', source: '/sb.js' },
  { destination: 'https://hive.splitbee.io/:slug', source: '/sb-api/:slug' },
];

module.exports = withContentlayer()({
  reactStrictMode: true,
  rewrites,
  images: {
    domains: ['static.martylouis.com', 'images.unsplash.com'],
  },
});
