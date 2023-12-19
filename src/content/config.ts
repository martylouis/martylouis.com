import { pageSchema, projectSchema } from "@/types";
import { defineCollection } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: pageSchema,
});

const projects = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects,
  pages,
};
