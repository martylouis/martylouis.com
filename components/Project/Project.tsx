import { IProject } from '@/data/projects';
import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';
import tw, { styled } from 'twin.macro';
import Button from '@/components/Button';

const Card = styled('div', {
  ...tw`flex flex-col items-center overflow-hidden border rounded-xl border-gray-500/5 bg-gray-500/10`,
});

const StyledContent = styled('div', {
  ...tw`flex flex-col gap-3 font-medium`,
  p: {
    ...tw`leading-relaxed tracking-wide`,
  },
  a: {
    ...tw`underline transition-colors hover:text-black dark:hover:text-white`,
  },
});

const Project = (project: IProject) => (
  <Card>
    {project.image && (
      <div tw="relative flex flex-col w-full">
        <div tw="relative w-full h-full aspect-ratio[16/12]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            layout="fill"
            tw="object-cover w-full h-full aspect-ratio[16/12]"
          />
        </div>
      </div>
    )}
    <div tw="flex flex-col flex-grow w-full gap-4 p-8">
      <h3 tw="text-xl font-bold text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>
      <StyledContent
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      <div tw="flex flex-wrap items-center justify-center gap-6 pt-4 mt-auto md:justify-between">
        <Button
          target="_blank"
          rel="noopener external nofollow"
          href={project.url}
        >
          <span>Visit Website</span>
          <ArrowUpRight weight="bold" aria-hidden="true" focusable="false" />
        </Button>
        {project.case_url ? (
          <a>Case Study</a>
        ) : (
          <p tw="text-sm text-gray-800 dark:text-gray-200">
            Case study coming soon...
          </p>
        )}
      </div>
    </div>
  </Card>
);

export default Project;
