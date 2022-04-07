import { homeContent, homeSEO } from '@/data/pages/home.constants';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PaperPlaneTilt } from 'phosphor-react';
import tw, { styled } from 'twin.macro';
import Container from '@/components/Container';
import Page from '@/components/Page';
import Project from '@/components/Project';
import { SEOPage } from '@/components/SEO';

const StyledHeading = styled('h2', {
  ...tw`text-3xl font-bold text-gray-900 lg:text-5xl dark:text-gray-100`,
});

const StyledButton = styled('a', {
  ...tw`
    inline-flex font-medium gap-3 items-center relative cursor-pointer text-lg transition-colors duration-200
    h-12 px-8 rounded-full
    text-gray-200 bg-black/80 dark:(text-gray-800 bg-white/90)
    boxShadow[0 15px 20px -10px rgba(0, 0, 0, 0.2)] dark:boxShadow[0 15px 20px -10px rgba(255, 255, 255, 0.2)]
    hover:(bg-black text-white dark:(bg-white text-black))
    focus:(outline-none ring-2 ring-offset-2 ring-black/80 dark:(ring-white/80))
  `,
});

function FadeInUp({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function FadeInUpChild({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const Profile = ({ name, title, image }) => {
  const { src, alt, width, height } = image;
  return (
    <div tw="flex items-center gap-4">
      <div tw="flex-shrink-0">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          tw="border-4 border-gray-200 rounded-full"
          role="presentation"
        />
      </div>
      <div>
        <h1 tw="text-xl font-medium">{name}</h1>
        <h2 tw="font-medium" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
};

export const Hero = ({ title, subtitle, button }) => {
  const { url, text } = button;
  return (
    <Container tw="flex flex-col items-center gap-8">
      <FadeInUpChild>
        <Profile {...homeContent.profile} />
      </FadeInUpChild>
      <FadeInUpChild>
        <p
          tw="text-3xl font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </FadeInUpChild>
      <FadeInUpChild>
        <p tw="text-2xl" dangerouslySetInnerHTML={{ __html: subtitle }} />
      </FadeInUpChild>
      <FadeInUpChild>
        <p>
          <StyledButton href={url} target="_blank">
            <span
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
            <PaperPlaneTilt
              tw="-mr-1"
              weight="fill"
              aria-hidden="false"
              focusable="false"
            />
          </StyledButton>
        </p>
      </FadeInUpChild>
    </Container>
  );
};

export default function Home() {
  return (
    <Page>
      <SEOPage {...homeSEO} />

      <div tw="py-8 lg:py-16">
        <FadeInUp>
          <Hero {...homeContent.hero} />

          <div tw="py-16">
            <div tw="border-t border-gray-900/5 dark:border-gray-100/5" />
          </div>

          <section tw="flex flex-col gap-16 py-8">
            <Container tw="flex flex-col gap-4 text-center">
              <h2
                id="work"
                tw="text-3xl font-bold text-gray-900 lg:text-5xl dark:text-gray-100"
              >
                Featured Work
              </h2>
              <p tw="font-medium lg:text-xl">
                From small to large, here are just a few of the projects
                I&rsquo;ve worked on.
              </p>
            </Container>
            <Container size="lg" tw="grid gap-8 md:grid-cols-2">
              {projects.map(({ ...project }) => (
                <Project key={project.id} {...project} />
              ))}
            </Container>
          </section>
        </FadeInUp>
      </div>
    </Page>
  );
}
