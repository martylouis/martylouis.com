import { getPermalink } from '@/lib/permalinks';

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'short',
    timeZone: 'UTC',
  });
}

/**
 * Returns the home URL of the site.
 *
 * @returns The home URL.
 */
export const getHomeURL = (): string => {
  return getPermalink('/');
};

/**
 * Generates a project URL based on the provided slug.
 *
 * @param slug - The slug to be included in the URL.
 * @returns The generated project URL.
 *
 * @example
 * // returns "/project/slug"
 * getProjectURL("slug");
 */
export const getProjectURL = (slug: string): string => {
  return getPermalink(slug, 'project');
};

/**
 * Generates a post URL based on the provided slug.
 *
 * @param slug - The slug to be included in the URL.
 * @returns The generated post URL.
 *
 * @example
 * // returns "/blog/slug"
 * getPostURL("slug");
 */
export const getPostURL = (slug: string): string => {
  return getPermalink(slug, 'post');
};
