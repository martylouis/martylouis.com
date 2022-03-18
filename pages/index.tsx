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
    <div tw="flex gap-6 items-center mb-8">
      <div tw="flex-shrink-0">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          tw="rounded-full border-4 border-gray-200"
          role="presentation"
        />
      </div>
      <div>
        <h1 tw="text-2xl text-black dark:text-white">{name}</h1>
        <p dangerouslySetInnerHTML={{ __html: title }}></p>
      </div>
    </div>
  );
};

export const Hero = ({ title, subtitle, button }) => {
  const { url, text } = button;
  return (
    <>
      <FadeInUpChild>
        <h2
          tw="text-3xl lg:text-5xl font-extrabold mb-8 text-gray-900 dark:(text-gray-200)"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </FadeInUpChild>
      <FadeInUpChild>
        <p tw="text-xl my-8" dangerouslySetInnerHTML={{ __html: subtitle }} />
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
    </>
  );
};

export default function Home() {
  return (
    <Page>
      <SEOPage {...homeSEO} />
      <Container>
        <div tw="mt-24 mb-16">
          <FadeInUp>
            <FadeInUpChild>
              <Profile {...homeContent.profile} />
            </FadeInUpChild>
            <Hero {...homeContent.hero} />
          </FadeInUp>
        </div>
      </Container>
    </Page>
  );
}
