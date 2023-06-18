import Image from "next/image"
import { ProjectProps } from "@/data/projects"
import { ArrowUpRight } from "phosphor-react"

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
            layout="fill"
            className=" h-full w-full object-cover object-top"
          />
        </div>
      </div>
    )}
    <div className="">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <div
        className="prose prose-a:font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="space-y-6">
        <ButtonLink href={url}>
          <span>Visit Website</span>
          <ArrowUpRight weight="bold" aria-hidden="true" focusable="false" />
        </ButtonLink>
        {case_url ? (
          <a>Case Study</a>
        ) : (
          <p className="text-sm">Case study coming soon...</p>
        )}
      </div>
    </div>
  </div>
)

export default Project
