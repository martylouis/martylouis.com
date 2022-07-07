/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from 'phosphor-react';
import { ButtonLink } from '@/components/Button';

export type ProjectProps = {
  title: string;
  description?: any;
  image?: {
    src: string;
    alt: string;
  };
  url?: string;
};

const Project = ({ title, description, image, url }: ProjectProps) => (
  <div className="mb-16">
    {image?.src && (
      <div className="relative mb-8 flex w-full flex-col rounded-xl">
        {url ? (
          <a
            className="relative aspect-[4/3] h-full w-full"
            href={url}
            rel="nofollow noreferrer"
            target="_blank"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full rounded-2xl object-cover object-top"
              width="1600"
              height="1200"
            />
          </a>
        ) : (
          <div className="relative aspect-[4/3] h-full w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full rounded-2xl object-cover object-top"
              width="1600"
              height="1200"
            />
          </div>
        )}
      </div>
    )}
    <div className="">
      <h3 className="mb-4 text-2xl font-bold text-gray-high">{title}</h3>
      <p className="mb-6" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="space-y-6">
        {url && (
          <ButtonLink href={url} rel="nofollow noreferrer">
            <span>Visit Website</span>
            <ArrowUpRight weight="bold" aria-hidden="true" focusable="false" />
          </ButtonLink>
        )}
      </div>
    </div>
  </div>
);

export default Project;
