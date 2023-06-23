export interface ProjectProps {
  id: number
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
  case_url?: string | boolean
  url: string
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: 'Wattsware.com',
    description:
      '<p>PR tech expert, Brandon Watts, needed an update for his company website. He really wanted to put something together fast, so we spun up a WordPress site and customized it in no time.</p><p>We&rsquo;re currently working on moving his site over to the neat headless CMS, <a href="https://storyblok.com" target="_blank">Storyblok</a>.</p>',
    image: {
      src: '/images/wattsware--1600x1200.png',
      alt: 'Wattsware.com screenshot',
    },
    case_url: false,
    url: 'https://wattsware.com',
  },
  {
    id: 2,
    title: 'RedhorseCorp.com',
    description:
      '<p>Government contractor, Redhorse Corp., needed a new website for their rapidly growing company.</p><p>I refreshed their site to look more modern and professional which helped them to attract the best job candidates.</p>',
    image: {
      src: '/images/redhorsecorp--1600x1200.png',
      alt: 'Redhorsecorp.com screenshot',
    },
    case_url: false,
    url: 'https://redhorsecorp.com',
  },
  {
    id: 3,
    title: 'ManateeAir.com',
    description:
      '<p>Lisa Kelly and her team had been stuck with the same tiny static website for years. They really wanted a refresh, and needed a way to gather leads.</p><p>I worked with Lisa to create a new site with a professional design, easy to update, and custom forms to capture each lead based on her customers needs.</p>',
    image: {
      src: '/images/manateeair--1600x1200.png',
      alt: 'ManateeAir.com screenshot',
    },
    case_url: false,
    url: 'https://manateeair.com',
  },
  {
    id: 4,
    title: 'GulfRealty30a.com',
    description:
      '<p>Brooks Wade started his new real estate brokerage, Gulf Realty 30A, just in time for the real estate boom in North West Florida. He needed a new website and brand to advertise his brokerage and to attract new agents and clients.</p><p>I designed and built a new website, integrated with his IDX platform. I also had the pleasure of working on the brand. I created the logo, signage and business collateral to help promote the new business.</p>',
    image: {
      src: '/images/gulfrealty30a--1600x1200.png',
      alt: 'GulfRealty30a.com screenshot',
    },
    case_url: false,
    url: 'https://gulfrealty30a.com',
  },
  {
    id: 5,
    title: 'EvansTire.com',
    description:
      '<p>Eddie Valenzuela, Jenny Mendoza, and the team at Mancuso Media became the new marketing agency of Evans Tire & Auto, a chain of tire shops located through out San Diego, CA.</p><p>They needed a highly customized WordPress website to promote their locations, promotions, services and custom integrations.</p><p>I built the custom WordPress theme and customized the site to meet their needs.</p>',
    image: {
      src: '/images/evanstire--1600x1200.png',
      alt: 'Evanstire.com screenshot',
    },
    case_url: false,
    url: 'https://evanstire.com',
  },
]
