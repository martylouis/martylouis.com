import Head from 'next/head';

interface SEOTwitterCardProps {
  card: string;
  site_handle: string;
  creator_handle: string;
  url: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

export const SEOTwitterCard = ({
  card,
  site_handle,
  creator_handle,
  url,
  title,
  description,
  image,
}: SEOTwitterCardProps) => {
  return (
    <Head>
      <meta name="twitter:card" content={card} />
      <meta name="twitter:site" content={site_handle} />
      <meta name="twitter:creator" content={creator_handle} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
      <meta name="twitter:image:alt" content={image.alt} />
    </Head>
  );
};
