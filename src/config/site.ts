import { Icons } from "@/components/icons"

type SocialLink = {
  platform: string
  href: string
  me?: string
  text: string
  icon: keyof typeof Icons
  footerOnly?: boolean
}

export interface SiteConfig {
  title: {
    template: string
    default: string
  }
  description: string
  image: {
    src: string
    alt: string
  }
  author: {
    name: string
    email: string
  }
  socialLinks: SocialLink[]
}

export const siteConfig = {
  title: {
    template: `%s | Marty Thierry—Web Designer`,
    default: "Marty Thierry - Web Designer in Destin, FL",
  },
  description:
    "15+ years experience as a freelance web designer and developer. WordPress and Shopify expert. Let's make your website better.",
  image: {
    src: "/images/og/martylouis.jpg",
    alt: "Let's make your website better",
  },
  author: {
    name: "Marty Thierry",
    email: "marty@martylouis.com",
  },
  socialLinks: [
    {
      platform: "x",
      href: "https://x.com/martylouis",
      me: "https://x.com/martylouis",
      text: "Follow on X",
      icon: "x",
    },
    {
      platform: "github",
      href: "https://github.com/martylouis/",
      me: "https://github.com/martylouis/",
      text: "Follow on GitHub",
      icon: "github",
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/martylouis/",
      me: "https://www.linkedin.com/in/martylouis/",
      text: "Follow on LinkedIn",
      icon: "linkedin",
    },
  ],
} satisfies SiteConfig
