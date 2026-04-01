import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers';
import {
  transformerCopyButton,
  transformerTitle,
} from './src/lib/shiki-transformers';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://martylouis.com/',

  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        transformerNotationDiff(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
        transformerTitle(),
        transformerCopyButton(),
        {
          name: 'no-lines',
          pre(node) {
            if (this.options.meta?.__raw?.includes('no-lines')) {
              node.properties['data-no-lines'] = '';
            }
          },
        },
      ],
    },
  },

  integrations: [
    mdx(),
    react(),
    icon({
      iconDir: './src/assets/svg',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-sans',
      fallbacks: ['sans-serif'],
      weights: ['100 900'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Crimson Pro',
      cssVariable: '--font-serif',
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      fallbacks: ['monospace'],
    },
  ],
});
