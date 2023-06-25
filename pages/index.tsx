import Image from "next/image"
import Link from "next/link"
import { homeContent, homeSEO } from "@/data/pages/home.constants"
import { projects } from "@/data/projects"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import Container from "@/components/Container"
import {
  IconProps,
  LogoGithub,
  LogoLinkedin,
  LogoMartyLouis,
  LogoTwitter,
} from "@/components/Icons"
import Project from "@/components/Project"
import { SEOPage } from "@/components/SEO"
import ThemeToggle from "@/components/ThemeToggle"

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

export default function Home() {
  const { title, subtitle, button } = homeContent.hero
  const { url, text } = button
  const { src, alt, width, height } = homeContent.profile.image
  return (
    <>
      <SEOPage {...homeSEO} />

      <header id="header">
        <Container>
          <div className="mt-4 flex w-full items-center justify-between">
            <div className="inline-flex h-12 w-12 rounded-full bg-foreground/10 p-1.5">
              <LogoMartyLouis />
            </div>
            <SocialLinks links={socialLinks} />
          </div>
          <Divider />
        </Container>
      </header>

      <section id="intro">
        <Container className="my-16">
          <div className="grid gap-8 sm:grid-cols-4 sm:gap-3">
            <div>
              <div className="w-[120px] rounded-full border border-border p-0.5">
                <Image
                  src={"/images/martylouis-profile.jpg"}
                  alt={"Marty Thierry"}
                  width={120}
                  height={120}
                  className="rounded-full"
                  role="presentation"
                />
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                Hey, I&rsquo;m Marty{" "}
                <span
                  role="img"
                  aria-label="hand raising to give a double high five"
                >
                  🙌
                </span>
              </h1>
              <p className="mb-4">
                I’m a UX designer and developer based in Destin, Florida. For
                the past 15 years, I’ve been helping small businesses and
                organizations create stunning websites, apps, and brands.
              </p>
              <p className="mb-4">
                My specialty is crafting beautiful, intuitive user interfaces
                that are easy to navigate and understand. If you’d like to work
                together, please don’t hesitate to reach out. Or, take a look at
                some of my featured work below!
              </p>
              <Button asChild size="lg" className="mt-2 gap-2">
                <Link href={url}>
                  <EnvelopeClosedIcon className="-ml-2" />
                  <span>Email Me</span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="work">
        <Container className="my-16">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured Work
              </h2>
            </div>
          </div>
          <Divider />
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map(({ ...project }) => (
              <Project key={project.id} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <footer id="footer">
        <Container>
          <Divider />
          <div className="mb-8 flex flex-col-reverse items-center justify-between  gap-8 sm:flex-row">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Marty Louis Co.
              </p>
            </div>
            <SocialLinks links={socialLinks} />
          </div>
        </Container>
      </footer>
    </>
  )
}

type SocialLinkProps = {
  links: {
    name: string
    icon: React.ComponentType<IconProps>
    href: string
  }[]
}

const SocialLinks = ({ links }: SocialLinkProps) => {
  return (
    <div className="flex items-center gap-2">
      {links.map(({ name, icon: Icon, href }) => (
        <Button variant="ghost" size="icon" asChild key={name}>
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={`Follow @martylouis on ${name}`}
          >
            <Icon size={20} title={`Follow @martylouis on ${name}`} />
          </a>
        </Button>
      ))}
      <ThemeToggle size={20} />
    </div>
  )
}

export function Divider() {
  return <div role="none" className="my-4 h-[1px] w-full shrink-0 bg-border" />
}
