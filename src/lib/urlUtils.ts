import config from '@/data/config'
import type { Paths, PermalinkType } from '@/types'

const TRAILING_SLASH = config.site.trailingSlash || false
const SITE_URL = new URL(config.site.url || 'https://example.com')
const PATHS: Paths = config.site.paths || {
  base: '/',
  page: '/',
  post: 'posts',
  project: 'projects',
  service: 'services',
  tag: 'tags',
}

/**
 * Trims the specified string by removing leading and trailing characters.
 *
 * @param string - The string to trim.
 * @param character - The character to remove. If not specified, whitespace characters will be removed.
 * @returns The trimmed string.
 */
export const trim = (string = '', character?: string): string => {
  const re = new RegExp(`^${character}|${character}$`, 'g')
  return string.replace(re, '')
}

/**
 * Removes leading and trailing slashes from a string.
 *
 * @param s - The string to trim.
 * @returns The trimmed string.
 */
export const trimSlash = (s: string): string => trim(s, '/')

/**
 * Creates a path by concatenating the provided parameters.
 *
 * @param params - The parameters to be concatenated.
 * @returns The concatenated path.
 */
const createPath = (...params: string[]): string => {
  const paths = params.map(trimSlash).filter(Boolean).join('/')
  return `/${paths}${TRAILING_SLASH && paths ? '/' : ''}`
}

/**
 * Generates a definitive permalink by combining the base pathname and the provided permalink.
 * @param permalink - The permalink to be combined with the base pathname.
 * @returns The definitive permalink.
 */
const definitivePermalink = (permalink: string): string =>
  createPath(PATHS.base, permalink)

/**
 * Generates a permalink based on the provided slug and type.
 *
 * @param slug - The slug to be included in the permalink.
 * @param type - The type of the permalink.
 * @returns The generated permalink.
 */
export const getPermalink = (
  slug: string = '',
  type: PermalinkType = 'page'
): string => {
  const prefixes = ['http', 'tel:', 'mailto:', '#', '?', '&', '=']

  if (prefixes.some((prefix) => slug.startsWith(prefix))) {
    return slug
  }

  const permalink = createPath(PATHS[type], slug)

  return definitivePermalink(permalink)
}

/**
 * Formats URL based on given path and trailingSlash parameter.
 * It removes a trailing slash if the URL has query parameters regardless of the trailingSlash parameter.
 *
 * @param path - The specific path to add to the base URL SITE_URL, defaults to empty string.
 * @param trailingSlash - A flag to determine if URL should end with a slash, defaults to true.
 * @returns Formatted URL as string.
 */
export const getCanonicalURL = (
  path = '',
  trailingSlash: boolean = TRAILING_SLASH
): string | URL => {
  const url: URL = new URL(path, SITE_URL)
  const hasQueryParams: boolean = Boolean(url.search)

  if (hasQueryParams && url.pathname.endsWith('/')) {
    // Remove the trailing slash from the pathname
    url.pathname = url.pathname.slice(0, -1)
  } else if (trailingSlash !== url.pathname.endsWith('/')) {
    // Ensure the pathname has a trailing slash only if trailingSlash argument is true
    url.pathname = trailingSlash
      ? `${url.pathname}/`
      : url.pathname.slice(0, -1)
  }

  // Return the URL
  return url.toString()
}

/**
 * Returns the home URL of the site.
 *
 * @returns The home URL.
 */
export const getHomeURL = (): string => getPermalink('/')

/**
 * Generates a project URL based on the provided slug.
 *
 * @param slug - The slug to be included in the URL.
 * @returns The generated project URL.
 */
export const getProjectURL = (slug: string): string => {
  return getPermalink(slug, 'project')
}

/**
 * Generates a post URL based on the provided slug.
 *
 * @param slug - The slug to be included in the URL.
 * @returns The generated post URL.
 */
export const getPostURL = (slug: string): string => {
  return getPermalink(slug, 'post')
}
