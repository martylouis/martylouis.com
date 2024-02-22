import type { PermalinkPaths, SocialLink } from "@/types";

export const trailingSlash = false;
export const siteURL = "https://martylouis.com";
export const siteURLDev = "http://localhost:4321";

export const metadata = {
  description:
    "Marty Louis is a web designer and frontend developer based in the Destin, FL.",
  name: "martylouis.com",
  siteURL: import.meta.env.DEV ? siteURLDev : siteURL,
  title: "Marty Thierry - Web Designer and Frontend Developer - martylouis.com",
  twitter: "@martylouis",
  author: {
    name: "Marty Thierry",
  },
};

export const permalinkPaths: PermalinkPaths = {
  base: "/",
  page: "/",
  project: "projects",
  post: "blog",
  tag: "tags",
  service: "services",
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/martylouis",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/martylouis/",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/martylouis",
  },
];
