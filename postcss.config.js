module.exports = {
  plugins: [
    require(`precss`),
    require(`tailwindcss`)(`./tailwind.config.js`),
    require(`postcss-preset-env`)({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true,
      },
      browsers: [`> 1%`],
    }),
    require(`cssnano`)({
      preset: `default`,
    }),
  ],
};
