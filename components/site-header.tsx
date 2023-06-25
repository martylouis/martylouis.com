import Link from "next/link"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import Container from "@/components/Container"
import { Divider } from "@/components/dividers"
import { LogoMartyLouis } from "@/components/Icons"
import SocialIconLinks from "@/components/social-icon-links"
import ThemeToggle from "@/components/ThemeToggle"

export default function SiteHeader() {
  return (
    <header id="header">
      <Container>
        <div className="mt-4 flex w-full items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-12 w-12 rounded-full bg-foreground/10 p-1.5"
          >
            <LogoMartyLouis />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="gap-2">
              <Link href="mailto:hello@martylouis.com">
                <EnvelopeClosedIcon className="-ml-0.5" />
                <span>Contact Me</span>
              </Link>
            </Button>
            <ThemeToggle size={18} />
          </div>
        </div>
        <Divider />
      </Container>
    </header>
  )
}
