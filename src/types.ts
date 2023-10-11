import { z } from 'astro:content'

export const dateSchema = z.coerce.date()
export type Date = z.infer<typeof dateSchema>

export const entrySchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  created_at: dateSchema.optional(),
  updated_at: dateSchema.optional(),
  draft: z.boolean().optional(),
})
export type Entry = z.infer<typeof entrySchema>

export const imageSchema = z.object({
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
})

export const pageSchema = entrySchema

export const projectSchema = z
  .object({
    order: z.number(),
    url: z.string().url().optional(),
  })
  .merge(entrySchema)
  .merge(imageSchema)

export type Project = z.infer<typeof projectSchema>
