import SEO, { SEOConstants, SEOProps } from "@/components/SEO"

export const SEOPage = ({
  title,
  customTitle,
  description,
  canonicalUrl,
  imageUrl,
  imageAlt,
}: SEOProps) => {
  // if customTitle is set, use it or fallback to title
  const pageTitle = customTitle ?? `${title} — ${SEOConstants.site.name}`
  return (
    <SEO
      title={pageTitle}
      description={description}
      canonicalUrl={canonicalUrl}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
    />
  )
}

export default SEOPage
