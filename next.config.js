module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false };
    return config;
  },
  images: {
    domains: ['static.martylouis.com', 'images.unsplash.com'],
  },
};
