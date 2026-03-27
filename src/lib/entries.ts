import { getCollection } from 'astro:content';

export const projectEntries = (await getCollection('projects'))
  .filter((entry) => !entry.data.draft)
  // sort by slug descending
  .sort((a, b) => b.id.localeCompare(a.id))
  .map((entry) => {
    return {
      entry,
    };
  });
