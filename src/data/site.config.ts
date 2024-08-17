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
      platform: "github",
      href: "https://github.com/martylouis/martylouis.com",
      me: "https://github.com/martylouis/",
      text: "Go to Marty's GitHub",
      icon: "social/github",
    },
    {
      platform: "twitter",
      href: "https://twitter.com/martylouis",
      me: "https://twitter.com/martylouis",
      text: "Follow Marty on Twitter",
      icon: "social/twitter",
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/martylouis/",
      me: "https://www.linkedin.com/in/martylouis/",
      text: "Follow Marty on LinkedIn",
      icon: "social/linkedin",
    },
  ],
}

export default siteConfig
