/**
 * Formats URL based on given path and trailingSlash parameter.
 * It removes a trailing slash if the URL has query parameters regardless of the trailingSlash parameter.
 *
 * @param path - The specific path to add to the base URL SITE_URL, defaults to empty string.
 * @param base - The base URL to use, defaults to .
 * @param trailingSlash - Optional. A flag to determine if URL should end with a slash, defaults to true.
 * @returns Formatted URL as string.
 */
export const getCanonicalURL = (
  url: string,
  base: URL | undefined,
  trailingSlash: boolean | undefined = false,
): string | URL => {
  const siteURL: URL = new URL(url, base);
  const hasQueryParams: boolean = Boolean(siteURL.search);

  if (hasQueryParams && siteURL.pathname.endsWith("/")) {
    // Remove the trailing slash from the pathname
    siteURL.pathname = siteURL.pathname.slice(0, -1);
  } else if (trailingSlash !== siteURL.pathname.endsWith("/")) {
    // Ensure the pathname has a trailing slash only if trailingSlash argument is true
    siteURL.pathname = trailingSlash
      ? `${siteURL.pathname}/`
      : siteURL.pathname.slice(0, -1);
  }

  // Return the URL
  return siteURL.toString();
};
