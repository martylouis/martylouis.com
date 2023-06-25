import Image from "next/image"
import Link from "next/link"
import { ProjectProps } from "@/data/projects"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowSquareOut } from "@/components/Icons/arrowSquareOut"

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
          <Link href={url} target="_blank" rel="nofollow noopener noreferrer">
            <span>Visit Website</span>
            <ArrowSquareOut size={16} aria-hidden="true" className="-mr-0.5" />
          </Link>
        </Button>
      </CardContent>
    </div>
  </Card>
)

export default Project
