import Image from "next/image"
import { ProjectProps } from "@/data/projects"
import { ArrowUpRight } from "phosphor-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Project = ({
  id,
  title,
  description,
  image,
  case_url,
  url,
}: ProjectProps) => (
  <Card data-component="card" className="flex flex-col overflow-hidden">
    <a
      href={url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="relative aspect-[4/3] w-full shrink-0 overflow-hidden border-b border-border"
    >
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={450}
          className=" h-full w-full object-cover object-top"
          priority={id === 1}
        />
      )}
    </a>
    <div className="flex h-full w-full flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button variant="secondary" asChild className="gap-1">
          <a href={url} target="_blank" rel="nofollow noopener noreferrer">
            <span>Visit Website</span>
            <ArrowUpRight weight="bold" aria-hidden="true" focusable="false" />
          </a>
        </Button>
      </CardContent>
    </div>
  </Card>
)

export default Project
