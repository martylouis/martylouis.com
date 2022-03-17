const meta = {
  site: {
    url: 'https://www.martylouis.com',
    title: 'Marty Thierry - Freelance UX Designer in Destin, FL',
    description:
      'UX designer and developer, passionate about building accessible, performant, and beautiful user experiences.',
    banner: '/images/banner.jpg',
    logo: '/images/logo.png',
    twitter: '@martylouis',
    favicons: {
      icons: [
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/favicons/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          type: 'image/png',
          href: '/favicons/apple-touch-icon.png',
        },
      ],
      manifest: {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
    },
  },
};

module.exports = meta;
