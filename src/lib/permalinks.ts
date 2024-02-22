import { trimSlash } from "@/lib/utils";
import type { PermalinkType } from "@/types";

const PATHS = {
  base: "/",
  page: "/",
  project: "projects",
  post: "blog",
  tag: "tags",
  service: "services",
};

/**
 * Creates a path by concatenating the provided parameters.
 *
 * @param params - The parameters to be concatenated.
 * @param trailingSlash - If true, the permalink will end with a trailing slash. Default is false.
 * @returns The concatenated path.
 *
 * @example
 * // returns "/path/to/somewhere"
 * createPath(false, "path", "to", "somewhere");
 *
 * // returns "/path/to/somewhere/"
 * createPath(true, "path", "to", "somewhere");
 */
const createPath = (
  trailingSlash: boolean = false,
  ...params: string[]
): string => {
  const paths = params.map(trimSlash).filter(Boolean).join("/");
  return `/${paths}${trailingSlash && paths ? "/" : ""}`;
};

/**
 * Generates a definitive permalink by combining the base pathname and the provided permalink.
 *
 * @param permalink - The permalink to be combined with the base pathname.
 * @param trailingSlash - If true, the permalink will end with a trailing slash. Default is false.
 * @returns The definitive permalink.
 *
 * @example
 * // returns "/base/pathname/permalink"
 * definitivePermalink("permalink");
 *
 * // returns "/base/pathname/permalink/"
 * definitivePermalink("permalink", true);
 */
const definitivePermalink = (
  permalink: string,
  trailingSlash: boolean = false,
): string => createPath(trailingSlash, PATHS.base, permalink);

/**
 * Generates a permalink based on the provided slug and type.
 *
 * @param slug - The slug to be included in the permalink.
 * @param type - The type of the permalink.
 * @param trailingSlash - If true, the permalink will end with a trailing slash. Default is false.
 * @returns The generated permalink.
 *
 * @example
 * // returns "/page/slug"
 * getPermalink("slug");
 *
 * // returns "/blog/slug/"
 * getPermalink("slug", "post", true);
 */
export const getPermalink = (
  slug: string = "",
  type: PermalinkType = "page",
  trailingSlash: boolean = false,
): string => {
  const prefixes = ["http", "tel:", "mailto:", "#", "?", "&", "="];

  if (prefixes.some((prefix) => slug.startsWith(prefix))) {
    return slug;
  }

  const permalink = createPath(trailingSlash, PATHS[type], slug);

  return definitivePermalink(permalink, trailingSlash);
};
