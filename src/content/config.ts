import { pageSchema } from "@/types"
import { defineCollection, z } from "astro:content"

const entrySchema = z.object({
  title: z.string().max(70),
  description: z.string().min(50).max(160).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  draft: z.boolean().optional(),
})

const pages = defineCollection({
  type: "content",
  schema: pageSchema,
})

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        image: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
        url: z.string().url().optional(),
      })
      .merge(entrySchema),
})

export const collections = {
  projects,
  pages,
}
