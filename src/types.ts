import { z } from 'astro:content';

export const permalinkTypeSchema = z.union([
  z.literal('page'),
  z.literal('post'),
  z.literal('project'),
  z.literal('service'),
  z.literal('tag'),
]);
export type PermalinkType = z.infer<typeof permalinkTypeSchema>;

export const permalinkSchema = z.string().url();

export type Permalink = z.infer<typeof permalinkSchema>;

export const dateSchema = z.coerce.date();
export type Date = z.infer<typeof dateSchema>;

export const entrySchema = z.object({
  title: z.string().max(70),
  description: z.string().min(50).max(160).optional(),
  created_at: dateSchema.optional(),
  updated_at: dateSchema.optional(),
  draft: z.boolean().optional(),
});

export type Entry = z.infer<typeof entrySchema>;

export const pageSchema = entrySchema;

export const projectSchema = z
  .object({
    order: z.number(),
    url: z.string().url().optional(),
  })
  .merge(entrySchema);

export type Project = z.infer<typeof projectSchema>;

export type SocialLink = {
  id: string;
  name: string;
  url: string;
};
