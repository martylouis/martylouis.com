import { pageSchema } from '@/types';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string().max(70),
  description: z.string().min(50).max(160).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  draft: z.boolean().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: pageSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        image: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
        url: z.url().optional(),
        theme: z.string().optional(),
      })
      .extend(entrySchema.shape),
});

export const collections = {
  projects,
  pages,
};
