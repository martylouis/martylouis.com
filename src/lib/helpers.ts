import { metadata } from "@/site.config";
import { getPermalink } from "@/lib/permalinks";

/**
 * Returns the home URL of the site.
 *
 * @returns The home URL.
 */
export const getHomeURL = (): string => {
  return getPermalink(metadata.siteURL);
};

/**
 * Generates a project URL based on the provided slug.
 *
 * @param slug - The slug to be included in the URL.
 * @returns The generated project URL.
 */
export const getProjectURL = (slug: string): string => {
  return getPermalink(slug, "project");
};

/**
 * Generates a post URL based on the provided slug.
 *
 * @param slug - The slug to be included in the URL.
 * @returns The generated post URL.
 */
export const getPostURL = (slug: string): string => {
  return getPermalink(slug, "post");
};
