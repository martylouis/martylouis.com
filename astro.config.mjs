import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import m2dx from "astro-m2dx";
import { defineConfig } from "astro/config";

const m2dxOptions = {
  exportComponents: true,
  autoImports: true,
};

// https://astro.build/config
export default defineConfig({
  site: "https://martylouis.com",
  trailingSlash: "never",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      remarkPlugins: [[m2dx, m2dxOptions]],
      extendDefaultPlugins: true,
    }),
    react(),
    icon({
      include: {
        "radix-icons": ["*"],
      },
      iconDir: "./src/assets/svg",
    }),
  ],
});
