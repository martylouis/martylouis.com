import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import photo from "public/images/martylouis-profile.jpg"

import { Button } from "@/components/ui/button"
import Container from "@/components/Container"
import { Divider } from "@/components/dividers"
import Project from "@/components/Project/Project"
import SocialIconLinks from "@/components/social-icon-links"

export default function Page() {
  return (
    <>
      <section id="intro">
        <Container className="mt-24">
          <div className="grid gap-8 sm:grid-cols-4 sm:gap-3">
            <div>
              <div className="w-[120px] rounded-full border border-border p-0.5">
                <Image
                  src={photo}
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
              <div className="mt-6 flex items-center gap-6">
                <Button asChild size="lg" className="gap-2">
                  <Link href="mailto:hello@martylouis.com">
                    <EnvelopeClosedIcon className="-ml-2" />
                    <span>Contact Me</span>
                  </Link>
                </Button>
                <div className="flex gap-1">
                  <SocialIconLinks />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="work">
        <Container className="my-24">
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
    </>
  )
}
