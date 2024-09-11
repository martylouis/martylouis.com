/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: [".*", "*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
  ],
  semi: false,
  singleQuote: false,
  trailingComma: "all",
};

export default config;
