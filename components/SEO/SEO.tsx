import Head from "next/head"
import { useRouter } from "next/router"

import { SEOConstants } from "./SEO.constants"

const { site, image, open_graph: og, twitter } = SEOConstants

export interface SEOProps {
  title?: string
  customTitle?: string
  description?: string
  canonicalUrl?: string
  imageUrl?: string
  imageAlt?: string
  ogType?: string
}

export const SEO = ({
  title,
  description,
  canonicalUrl = site.url,
  imageUrl = image.url,
  imageAlt = image.alt,
  ogType = og.type,
}: SEOProps) => {
  const router = useRouter()
  const pageUrl =
    `${canonicalUrl}${router.asPath}` ?? `${site.url}${router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="rating" content="General" />

      {/* Open Graph */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Show only on posts */}
      {/* <meta property="article:author" content="" /> */}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:creator" content={twitter.creator} />
      <meta name="twitter:url" content={site.url} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <link rel="canonical" href={pageUrl} key="canonical" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="author" href="/humans.txt" />
    </Head>
  )
}

export default SEO
