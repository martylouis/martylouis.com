import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = (props) => {
  const router = useRouter();
  const meta = {
    title: 'Marty Thierry — Freelance Web Designer in Destin, Florida',
    description:
      'Marty is a web designer, developer, podcaster, writer and creator in Destin, Florida who offers UX design and development for web and mobile products, marketing websites, and mobile apps.',
    image: '/banner.jpg',
    author: 'Marty Thierry',
    url: 'https://martylouis.com',
    site_name: 'martylouis.com',
    copyright: 'Marty Louis LLC',
    twitter_handle: '@martylouis',
    social_urls: {
      twitter: 'https://twitter.com/martylouis',
      instagram: 'https://instagram.com/martylouis',
      linkedin: 'https://linkedin.cmo/martylouis',
    },
    ...props,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={`${router.asPath}`} key="canonical" />
        <meta name="description" content={meta.description} />
        <meta name="author" content="Marty Thierry" />
        <meta name="robots" content="index, follow" />
        {/* Twitter Graph */}
        <meta name="twitter:site" content={meta.twitter_handle} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* OpenGraph */}
        <meta
          property="og:site_name"
          content={meta.site_name}
          key="og_sitename"
        />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <meta property="og:title" content={meta.title} key="og_title" />
        <meta
          property="og:description"
          content={meta.description}
          key="og_description"
        />
        <meta property="og:image" content={`${meta.image}`} key="og_image" />
      </Head>
    </>
  );
};

export default SEO;
