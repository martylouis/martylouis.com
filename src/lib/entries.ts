import { getCollection } from 'astro:content';

export const noteEntries = (await getCollection('notes'))
  .filter((entry) => !entry.data.draft)
  .sort((a, b) => b.data.created_at.getTime() - a.data.created_at.getTime());

export const projectEntries = (await getCollection('projects'))
  .filter((entry) => !entry.data.draft)
  // sort by slug descending
  .sort((a, b) => b.id.localeCompare(a.id))
  .map((entry) => {
    return {
      entry,
    };
  });
