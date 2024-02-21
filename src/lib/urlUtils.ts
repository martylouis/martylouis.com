import { metadata, permalinkPaths, trailingSlash } from "@/site.config";
import type { PermalinkType } from "@/types";

/**
 * Trims the specified string by removing leading and trailing characters.
 *
 * @param string - The string to trim.
 * @param character - The character to remove. If not specified, whitespace characters will be removed.
 * @returns The trimmed string.
 */
export const trim = (string = "", character?: string): string => {
  const re = new RegExp(`^${character}|${character}$`, "g");
  return string.replace(re, "");
};

/**
 * Removes leading and trailing slashes from a string.
 *
 * @param s - The string to trim.
 * @returns The trimmed string.
 */
export const trimSlash = (s: string): string => trim(s, "/");

/**
 * Creates a path by concatenating the provided parameters.
 *
 * @param params - The parameters to be concatenated.
 * @returns The concatenated path.
 */
const createPath = (...params: string[]): string => {
  const paths = params.map(trimSlash).filter(Boolean).join("/");
  return `/${paths}${trailingSlash && paths ? "/" : ""}`;
};

/**
 * Generates a definitive permalink by combining the base pathname and the provided permalink.
 * @param permalink - The permalink to be combined with the base pathname.
 * @returns The definitive permalink.
 */
const definitivePermalink = (permalink: string): string =>
  createPath(permalinkPaths.base, permalink);

/**
 * Generates a permalink based on the provided slug and type.
 *
 * @param slug - The slug to be included in the permalink.
 * @param type - The type of the permalink.
 * @returns The generated permalink.
 */
export const getPermalink = (
  slug: string = "",
  type: PermalinkType = "page",
): string => {
  const prefixes = ["http", "tel:", "mailto:", "#", "?", "&", "="];

  if (prefixes.some((prefix) => slug.startsWith(prefix))) {
    return slug;
  }

  const permalink = createPath(permalinkPaths[type], slug);

  return definitivePermalink(permalink);
};

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
