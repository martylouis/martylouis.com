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
  PaperPlane,
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
      <header>
        <div className="container">
          <div className="flex h-24 items-center justify-between border-b border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-foreground/5 p-1.5 text-foreground">
                <LogoMartyLouis />
              </div>
              <span className="text-[22px] font-[600] tracking-[-0.86px]">
                MartyLouis
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <EnvelopeClosedIcon />
                Contact Me
              </Button>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </header>
      <header className="py-24">
        <Container>
          <div className="mb-8 flex w-full items-center">
            <div className="mr-auto flex shrink items-center rounded-full border border-border p-0.5">
              <Image
                src={"/images/martylouis-profile.jpg"}
                alt={"Marty Thierry"}
                width={128}
                height={128}
                className="rounded-full"
                role="presentation"
              />
            </div>
            {/* <SocialLinks links={socialLinks} /> */}
          </div>
          <h1 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">
            Hey, I&rsquo;m Marty
          </h1>
          <div className="mb-8 space-y-4">
            <p className="text-xl">
              I&rsquo;m a UX designer and developer based in Destin, Florida. I
              enjoy building beautiful, functional user interfaces that are easy
              to use and simple to understand.
            </p>
            <p className="text-xl">
              I&rsquo;ve been helping small businesses and organizations build
              websites, apps, and brands for over 10 years. Say hello or
              checkout some featured work below.
            </p>
          </div>
          <Button asChild size="lg" className="gap-2">
            <Link href={url}>
              <span>Let&rsquo;s work together</span>
              <PaperPlane size={16} className="-mr-1" />
            </Link>
          </Button>
        </Container>
      </header>

      {/* <div className="mb-16 border border-b border-gray-400" /> */}

      <Container>
        <div className="mb-12">
          <h2 id="work" className="mb-2 text-3xl font-extrabold md:text-4xl">
            Featured Work
          </h2>
          <p className="text-lg">
            From small to large, here are just a few of the projects I&rsquo;ve
            worked on.
          </p>
        </div>
        {projects.map(({ ...project }) => (
          <Project key={project.id} {...project} />
        ))}
      </Container>

      <footer className="border-t border-border py-16">
        <Container className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="inline-flex h-16 w-16 p-2">
              <LogoMartyLouis />
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Marty Louis Co.
            </p>
          </div>
          <SocialLinks links={socialLinks} />
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
    <div className="flex items-center gap-1">
      {links.map(({ name, icon: Icon, href }) => (
        <Button variant="ghost" size="icon" asChild>
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={`Follow @martylouis on ${name}`}
          >
            <Icon size={18} title={`Follow @martylouis on ${name}`} />
          </a>
        </Button>
      ))}
      <ThemeToggle size={18} />
    </div>
  )
}
