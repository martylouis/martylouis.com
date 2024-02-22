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
