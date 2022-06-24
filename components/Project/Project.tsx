import { ProjectProps } from '@/data/projects';
import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';
import { ButtonLink } from '@/components/Button';

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
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    )}
    <div className="">
      <h3 className="mb-4 text-2xl font-bold text-gray-high">{title}</h3>
      <div
        className="prose mb-6 prose-p:text-gray-low prose-a:font-bold prose-a:text-gray-high"
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
          <p className="text-sm text-gray-low">Case study coming soon...</p>
        )}
      </div>
    </div>
  </div>
);

export default Project;
