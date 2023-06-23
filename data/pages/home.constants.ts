import { IHomeContent, IHomeSEO } from './home.types'

export const homeSEO: IHomeSEO = {
  customTitle: 'Marty Louis Thierry — UX Designer in Destin, Florida 🏝',
  description:
    'UX designer and developer, passionate about building accessible, performant, and beautiful user experiences. Follow me → @martylouis on Twitter and GitHub',
}

export const homeContent: IHomeContent = {
  profile: {
    image: {
      src: '/images/martylouis-profile.jpg',
      width: '96px',
      height: '96px',
      alt: "Marty's profile photo",
    },
    name: 'Marty Louis Thierry',
    title: 'UX Designer and Developer in Destin, Florida 🏝',
  },
  hero: {
    title:
      'Marty is a UX designer and developer that loves the challenge of working on design that meets business needs while still being easy to use.',
    subtitle:
      'I design and build with a consistent and iterative process that incorporates the following principles: understand with research, design with structure and evaluate with tests.',
    // 'I&rsquo;ve been helping agencies, startups, non-profits and enterprises build products, websites, and brands for 10+ years. With a proven process and fundamental design principles, I can help design a new product, fix your WordPress site, or upgrade your user experience.',
    button: {
      text: 'Let&rsquo;s work together',
      url: 'mailto:hello@martylouis.com',
    },
  },
}
