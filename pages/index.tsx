import Image from "next/image"
import { homeContent, homeSEO } from "@/data/pages/home.constants"
import { projects } from "@/data/projects"

import { ButtonLink } from "@/components/Button"
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

      <header className="py-24">
        <Container>
          <div className="mb-8 flex w-full items-center gap-10">
            <div className="mr-auto flex shrink items-center rounded-full border border-gray-500 p-0.5">
              <Image
                src={"/images/martylouis-profile.jpg"}
                alt={"Marty Thierry"}
                width={128}
                height={128}
                className="rounded-full"
                role="presentation"
              />
            </div>
            <SocialLinks links={socialLinks} />
            <ThemeToggle size={24} />
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
          <ButtonLink href={url} variant="primary" size="lg">
            <span>Let&rsquo;s work together</span>
            <PaperPlane size={24} />
          </ButtonLink>
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

      <footer className="py-16">
        <Container className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="inline-flex h-16 w-16 rounded-full bg-gray-600 p-2">
              <LogoMartyLouis />
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Marty Louis Co.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <SocialLinks links={socialLinks} />
            <ThemeToggle size={24} />
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

const SocialLinks = ({ links, ...props }: SocialLinkProps) => {
  return (
    <>
      {links.map(({ name, icon: Icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={`Follow @martylouis on ${name}`}
        >
          <Icon size={24} title={`Follow @martylouis on ${name}`} />
        </a>
      ))}
    </>
  )
}
