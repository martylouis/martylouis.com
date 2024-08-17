import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import m2dx from "astro-m2dx";
import { defineConfig } from "astro/config";
const m2dxOptions = {
  exportComponents: true,
  autoImports: true,
};

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
  process.env.VERCEL_ENV !== "production" &&
  process.env.VERCEL_URL &&
  `https://${process.env.VERCEL_URL}`;

// https://astro.build/config
export default defineConfig({
  site: VERCEL_PREVIEW_SITE || "https://martylouis.com",
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
      iconDir: "./src/icons",
    }),
    tailwind(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
