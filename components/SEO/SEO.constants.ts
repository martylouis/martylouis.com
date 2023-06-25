interface ISEOConstants {
  site: {
    name: string
    url: string
  }
  image: {
    url: string
    alt: string
  }
  open_graph: {
    type: string
  }
  twitter: {
    card: string
    site: string
    creator: string
  }
  github: {
    url: string
    repo: string
    user: string
    issues: string
  }
}

export const SEOConstants: ISEOConstants = {
  site: {
    name: "Marty Louis Thierry",
    url: "https://www.martylouis.com",
  },
  image: {
    url: "/images/banner.jpg",
    alt: "Marty Louis Thierry - Freelance UX Designer in Destin, FL",
  },
  open_graph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@martylouis",
    creator: "@martylouis",
  },
  github: {
    url: "https://github.com/martylouis",
    user: "martylouis",
    repo: "https://github.com/martylouis/martylouis.com",
    issues: "https://github.com/martylouis/martylouis.com/issues",
  },
}
