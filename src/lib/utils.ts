import type { AstroGlobal } from "astro"
import { cx } from "class-variance-authority"
import type { ClassValue } from "class-variance-authority/types"
import { twMerge } from "tailwind-merge"

/**
 * Returns a string of concatenated class names based on the input values.
 * @param inputs - An array of class names or class name objects.
 * @returns A string of concatenated class names.
 *
 * @example
 * // returns "bg-black text-white text-sm"
 * cn("bg-black", "text-white", { "text-sm": true });
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(cx(inputs))
}

/**
 * Trims the specified string by removing leading and trailing characters.
 *
 * @param string - The string to trim.
 * @param character - The character to remove. If not specified, whitespace characters will be removed.
 * @returns The trimmed string.
 *
 * @example
 * // returns "example"
 * trim("/example/", "/");
 * trim(" example ", " ");
 * trim(" example ");
 *
 * // returns "ample"
 * trim(" example ", "ex")
 */
export const trim = (string = "", character?: string): string => {
  const re = new RegExp(`^${character}|${character}$`, "g")
  return string.replace(re, "")
}

/**
 * Removes leading and trailing slashes from a string.
 *
 * @param string - The string to trim.
 * @returns The trimmed string.
 *
 * @example
 * // returns "path"
 * trimSlash("/path/");
 */
export const trimSlash = (string: string): string => trim(string, "/")

/**
 * Generates a full normalized URL for a given path, with optional base URL and a preference for a trailing slash.
 *
 * @param {string} path - The URL path string to be processed and normalized.
 * @param {string|URL} base - An optional base URL that the input URL will be relative to.
 * @param {boolean} trailingSlash - If true, the pathname in the generated URL will end with a trailing slash. Default is false.
 * @returns The canonical URL as a string or URL object.
 *
 * @example
 * // returns "https://example.com/path"
 * getNormalizedUrl("path", new URL("https://example.com"), false);
 * // returns "https://example.com/path/"
 * getNormalizedUrl("path", new URL("https://example.com"), true);
 */
export const getNormalizedUrl = (
  path: string = "",
  base?: string | URL,
  trailingSlash: boolean = false,
): string => {
  // Generate the full URL from the path and base URL
  const url: string = String(new URL(path, base))

  // Check if trailingSlash is set to false and the URL ends with a slash
  if (path && trailingSlash === false && url.endsWith("/")) {
    // Remove the trailing slash from the URL
    return url.slice(0, -1)
  }
  // Check if trailingSlash is set to true and the URL does not end with a slash
  else if (path && trailingSlash === true && !url.endsWith("/")) {
    // Add a trailing slash to the URL
    return url + "/"
  }

  // Return the URL as is if no modifications are needed
  return url.toString()
}

/**
 * Checks if the provided URL is the current page.
 *
 * @param href - The URL to be checked.
 * @param currentPath - The current page URL.
 * @returns The result of the comparison.
 */
export const isCurrentPage = (
  href: string | URL | undefined | null,
  currentPath: AstroGlobal["request"]["url"],
): boolean => {
  if (!href || href === undefined) return false
  return currentPath === href
}

/**
 * Checks if the the current page URL is the homepage.
 *
 * @param currentPath - The current page URL.
 * @returns The result of the comparison.
 */
export const isHomePage = (
  currentPath: AstroGlobal["request"]["url"],
): boolean => {
  return currentPath === "/"
}
