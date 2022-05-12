import { homeContent, homeSEO } from '@/data/pages/home.constants';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { PaperPlaneRight } from 'phosphor-react';
import tw from 'twin.macro';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Page from '@/components/Page';
import Project from '@/components/Project';
import { SEOPage } from '@/components/SEO';

export const Profile = ({ name, title, image }) => {
  const { src, alt, width, height } = image;
  return (
    <div tw="flex items-center justify-center w-full gap-4">
      <div tw="flex-shrink-0">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          tw="rounded-full"
          role="presentation"
        />
      </div>
      <div>
        <h1 tw="text-xl font-medium">{name}</h1>
        <h2
          tw="text-sm font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
};

export const Hero = ({ title, subtitle, button }) => {
  const { url, text } = button;
  return (
    <Container tw="flex flex-col gap-8 py-16 md:gap-12 lg:py-24">
      <Profile {...homeContent.profile} />

      <p tw="text-xl lg:text-2xl" dangerouslySetInnerHTML={{ __html: title }} />

      <p
        tw="text-xl lg:text-2xl"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
      <p tw="flex justify-center pt-4">
        <Button href={url} target="_blank" size="lg">
          <span
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
          <PaperPlaneRight
            tw="ml-1"
            weight="fill"
            aria-hidden="false"
            focusable="false"
          />
        </Button>
      </p>
    </Container>
  );
};

export default function Home() {
  return (
    <Page>
      <SEOPage {...homeSEO} />

      <Hero {...homeContent.hero} />

      <div tw="border-t border-gray-900/5 dark:border-gray-100/5" />

      <section tw="flex flex-col gap-16 py-16 lg:py-24">
        <Container tw="flex flex-col gap-4 text-center">
          <h2
            id="work"
            tw="text-3xl font-bold text-gray-900 lg:text-5xl dark:text-gray-100"
          >
            Featured Work
          </h2>
          <p tw="font-medium lg:text-xl">
            From small to large, here are just a few of the projects I&rsquo;ve
            worked on.
          </p>
        </Container>
        <Container size="lg" tw="grid gap-8 md:grid-cols-2">
          {projects.map(({ ...project }) => (
            <Project key={project.id} {...project} />
          ))}
        </Container>
      </section>
    </Page>
  );
}
