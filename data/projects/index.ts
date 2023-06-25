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
    title: "Wattsware.com",
    description:
      "Brandon Watts, a PR technology expert, needed an update for his startup company website. To achieve this quickly, we set up a WordPress site and customized it.",
    image: {
      src: "/images/wattsware--1600x1200.png",
      alt: "Wattsware.com screenshot",
    },
    case_url: false,
    url: "https://wattsware.com",
  },
  {
    id: 2,
    title: "RedhorseCorp.com",
    description:
      "Government contractor, Redhorse Corp., needed a new website for their rapidly growing company. We refreshed their site to look more modern and professional which helped them to attract the best job candidates.",
    image: {
      src: "/images/redhorsecorp--1600x1200.png",
      alt: "Redhorsecorp.com screenshot",
    },
    case_url: false,
    url: "https://redhorsecorp.com",
  },
  {
    id: 3,
    title: "ManateeAir.com",
    description:
      "Lisa Kelly and her team had been stuck with the same small, static website for years. They desired a revamp and needed a way to collect leads. We collaborated with Lisa to develop a new website with a professional design, simple to update, and custom forms to capture each lead tailored to her customers’ needs.",
    image: {
      src: "/images/manateeair--1600x1200.png",
      alt: "ManateeAir.com screenshot",
    },
    case_url: false,
    url: "https://manateeair.com",
  },
  {
    id: 4,
    title: "GulfRealty30a.com",
    description:
      "Brooks Wade launched Gulf Realty 30A, his real estate brokerage, as the market in Northwest Florida was booming. We designed and built a website, integrating with his IDX platform, and created a logo, signage and business collateral to promote the business.",
    image: {
      src: "/images/gulfrealty30a--1600x1200.png",
      alt: "GulfRealty30a.com screenshot",
    },
    case_url: false,
    url: "https://gulfrealty30a.com",
  },
  {
    id: 5,
    title: "EvansTire.com",
    description:
      "Eddie Valenzuela, Jenny Mendoza, and the Mancuso Media team partnered with Evans Tire & Auto, a chain of tire shops in San Diego, CA, to create a tailored WordPress website. The site featured locations, promotions, services, and custom integrations. We built a custom WordPress site to meet their requirements.",
    image: {
      src: "/images/evanstire--1600x1200.png",
      alt: "Evanstire.com screenshot",
    },
    case_url: false,
    url: "https://evanstire.com",
  },
]
