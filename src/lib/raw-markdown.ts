import fs from 'node:fs';
import { getCollection } from 'astro:content';
import type { CollectionKey } from 'astro:content';

export const draftFilter = ({ data }: { data: { draft?: boolean } }) =>
  import.meta.env.PROD ? data.draft !== true : true;

export async function getRawMarkdownPaths(collection: CollectionKey) {
  const entries = await getCollection(collection, draftFilter);

  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

export function rawMarkdownResponse(entry: { filePath?: string }) {
  if (!entry.filePath) {
    return new Response('Not found', { status: 404 });
  }
  const raw = fs.readFileSync(entry.filePath, 'utf-8');
  return new Response(raw, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
