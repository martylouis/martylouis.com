export type SocialLink = {
  platform: string
  href: string
  me?: string
  text: string
  icon: string
  footerOnly?: boolean
}

export type SiteConfig = {
  name: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  socialLinks: SocialLink[]
}

const siteConfig: SiteConfig = {
  name: "Marty Louis | UX Designer & Developer",
  title: "UX Designer & Developer",
  description:
    "I'm a UX Designer & Developer who loves to create beautiful and user-friendly websites.",
  image: {
    src: "/images/og/martylouis.jpg",
    alt: "Let's make your website better",
  },
  socialLinks: [
    {
      platform: "x",
      href: "https://x.com/martylouis",
      me: "https://x.com/martylouis",
      text: "Follow on X",
      icon: "twitter",
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
}

export default siteConfig
