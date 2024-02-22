import type { SocialLink } from "@/types";

export const TRAILING_SLASH = import.meta.env.TRAILING_SLASH ?? false;
export const SITE_URL = import.meta.env.SITE_URL ?? "https://example.com";
export const SITE_URL_DEV =
  import.meta.env.SITE_URL_DEV ?? "http://localhost:4321";

export const metadata = {
  description:
    "Marty Louis is a web designer and frontend developer based in the Destin, FL.",
  name: "martylouis.com",
  siteURL: import.meta.env.DEV ? SITE_URL_DEV : SITE_URL,
  title: "Marty Thierry - Web Designer and Frontend Developer - martylouis.com",
  twitter: "@martylouis",
  author: {
    name: "Marty Thierry",
  },
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
