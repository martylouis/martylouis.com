import { pageSchema } from "@/types"
import { defineCollection, z } from "astro:content"

const pages = defineCollection({
  type: "content",
  schema: pageSchema,
})

const projects = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string().optional(),
      url: z.string().url().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
    })
  ),
})

const uses = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    items: z.array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        url: z.string().url().optional(),
      })
    ),
  }),
})

export const collections = {
  projects,
  pages,
  uses,
}
