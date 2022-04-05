import { homeContent, homeSEO } from '@/data/pages/home.constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PaperPlaneTilt } from 'phosphor-react';
import tw, { styled } from 'twin.macro';
import Container from '@/components/Container';
import Page from '@/components/Page';
import { SEOPage } from '@/components/SEO';

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
    <Container tw="flex items-center gap-6 mb-8">
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
        <h1 tw="text-2xl text-black dark:text-white">{name}</h1>
        <p dangerouslySetInnerHTML={{ __html: title }}></p>
      </div>
    </Container>
  );
};

export const Hero = ({ title, subtitle, button }) => {
  const { url, text } = button;
  return (
    <Container>
      <FadeInUpChild>
        <h2
          tw="text-3xl lg:text-5xl font-extrabold mb-8 text-gray-900 dark:(text-gray-200)"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </FadeInUpChild>
      <FadeInUpChild>
        <p tw="my-8 text-xl" dangerouslySetInnerHTML={{ __html: subtitle }} />
      </FadeInUpChild>
      <FadeInUpChild>
        <p tw="my-12">
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

      <div tw="mt-24 mb-16">
        <FadeInUp>
          <FadeInUpChild>
            <Profile {...homeContent.profile} />
          </FadeInUpChild>
          <Hero {...homeContent.hero} />
          <FadeInUpChild>
            <section tw="flex flex-col gap-8 py-8">
              <header tw="flex flex-col gap-2">
                <Container>
                  <h2 tw="text-2xl font-bold">Work</h2>
                  <p>Some of the latest projects I&rsquo;ve been working on.</p>
                </Container>
              </header>
              <Container size="lg" tw="flex flex-col gap-8">
                <div tw="flex flex-col overflow-hidden border border-gray-800 rounded md:grid md:grid-cols-2 bg-gray-50/5">
                  <div tw="relative aspect-ratio[16/9] md:aspect-ratio[unset]">
                    <Image
                      src="/images/banner.jpg"
                      alt=""
                      layout="fill"
                      tw="object-cover"
                    />
                  </div>
                  <div tw="flex flex-col gap-4 p-8">
                    <h3 tw="text-xl font-bold">Wattsware.com</h3>
                    <p>
                      PR tech expert, Brandon Watts, needed an update for his
                      company website. He really wanted to put something
                      together fast, so we spun up a WordPress site and
                      customized it in no time.
                    </p>
                    <p tw="text-opacity-50">
                      We&rsquo;re currently working on moving his site over to
                      the neat headless CMS,{' '}
                      <a href="https://storyblok.com">Storyblok</a>.
                    </p>
                    <p tw="text-gray-900/50 dark:text-gray-100/50">
                      Case study coming soon.
                    </p>
                    <p>
                      <a href="https://wattsware.com">View website</a>
                    </p>
                  </div>
                </div>
              </Container>
            </section>
          </FadeInUpChild>
        </FadeInUp>
      </div>
    </Page>
  );
}
