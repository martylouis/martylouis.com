import { getCollection } from "astro:content"

export const projectEntries = (await getCollection("projects"))
  .filter((entry) => !entry.data.draft)
  // sort by slug descending
  .sort((a, b) => b.slug.localeCompare(a.slug))
  .map((entry) => {
    return {
      entry,
    }
  })
