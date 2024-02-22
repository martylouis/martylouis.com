import { cx } from "class-variance-authority";
import type { ClassValue } from "class-variance-authority/types";
import { twMerge } from "tailwind-merge";

/**
 * Returns a string of concatenated class names based on the input values.
 * @param inputs - An array of class names or class name objects.
 * @returns A string of concatenated class names.
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(cx(inputs));
};

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
  const re = new RegExp(`^${character}|${character}$`, "g");
  return string.replace(re, "");
};

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
export const trimSlash = (string: string): string => trim(string, "/");

/**
 * Generate a full, normalized URL from a provided URL string, with optional base URL and a preference for a trailing slash.
 *
 * @param {string} inputUrl - The URL string to be processed and normalized.
 * @param {URL} [optionalBaseUrl] - An optional base URL that the input URL will be relative to.
 * @param {boolean} [appendTrailingSlash=false] - If true, the pathname in the generated URL will end with a trailing slash. Default is false.
 * @returns {string} - A string representation of the fully processed, normalized URL.
 *
 * @example
 * // returns "https://example.com/path"
 * generateNormalizedUrl("https://example.com/path/?query=param", new URL("https://example.com"), false);
 */
export const generateNormalizedUrl = (
  inputUrl: string,
  optionalBaseUrl?: URL,
  appendTrailingSlash: boolean = false,
): string => {
  const processedUrl = new URL(
    inputUrl,
    optionalBaseUrl?.toString().replace(/\/$/, ""),
  );

  if (
    (processedUrl.search && processedUrl.pathname.endsWith("/")) ||
    appendTrailingSlash !== processedUrl.pathname.endsWith("/")
  ) {
    processedUrl.pathname =
      processedUrl.pathname.replace(/\/$/, "") +
      (appendTrailingSlash ? "/" : "");
  }

  return processedUrl.toString();
};
