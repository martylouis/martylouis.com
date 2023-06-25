import Link from "next/link"

import { Button } from "@/components/ui/button"
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@/components/Icons"

const socialLinks = [
  {
    name: "GitHub",
    icon: LogoGithub,
    href: "https://github.com/martylouis",
  },
  {
    name: "LinkedIn",
    icon: LogoLinkedin,
    href: "https://www.linkedin.com/in/martylouis/",
  },
  {
    name: "Twitter",
    icon: LogoTwitter,
    href: "https://twitter.com/martylouis",
  },
]

export default function SocialIconLinks() {
  return (
    <>
      {socialLinks.map(({ name, icon: Icon, href }) => (
        <Button variant="ghost" size="icon" asChild key={name}>
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
          >
            <Icon size={20} />
            <span className="sr-only">{name}</span>
          </Link>
        </Button>
      ))}
    </>
  )
}
