import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import m2dx from 'astro-m2dx'
import react from '@astrojs/react'
const m2dxOptions = {
  exportComponents: true,
  autoImports: true,
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      remarkPlugins: [[m2dx, m2dxOptions]],
      extendDefaultPlugins: true,
    }),
    react(),
  ],
})
