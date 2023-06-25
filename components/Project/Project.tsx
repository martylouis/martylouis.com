import Image from "next/image"
import Link from "next/link"
import { ProjectProps } from "@/data/projects"
import { ArrowUpRight } from "phosphor-react"

import { Button } from "@/components/ui/button"
import { ButtonLink } from "@/components/Button"

const Project = ({
  id,
  title,
  description,
  image,
  case_url,
  url,
}: ProjectProps) => (
  <div className="mb-16">
    {image && (
      <div className="relative mb-8 flex w-full flex-col overflow-hidden rounded-xl">
        <div className="relative aspect-[3/2] h-full w-full border-b border-gray-400">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className=" h-full w-full object-cover object-top"
          />
        </div>
      </div>
    )}
    <div>
      <h3 className="mb-4 text-xl font-medium">{title}</h3>
      <div
        className="mb-8 space-y-4 text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="flex flex-wrap items-center gap-6">
        <Button asChild className="gap-1">
          <Link href={url}>
            <span>Visit Website</span>
            <ArrowUpRight weight="bold" aria-hidden="true" focusable="false" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
)

export default Project
