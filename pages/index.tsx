import { motion } from 'framer-motion';
import Image from 'next/image';
import { PaperPlaneTilt } from 'phosphor-react';
import tw, { styled } from 'twin.macro';
import Container from '@/components/Container';
import Page from '@/components/Page';

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

export default function Index() {
  return (
    <Page>
      <Container>
        <div tw="mt-24 mb-16">
          <FadeInUp tw="w-full">
            <FadeInUpChild>
              <div tw="flex gap-6 items-center mb-8">
                <div tw="flex-shrink-0">
                  <Image
                    width="96"
                    height="96"
                    src="/avatar.jpg"
                    alt="Marty&rsquo;s face"
                    tw="rounded-full border-4 border-gray-200"
                  />
                </div>
                <div>
                  <h1 tw="text-2xl">Marty Thierry</h1>
                  <p>
                    🏝{' '}
                    <span tw="text-black/50 dark:text-white/50">
                      Freelancing from the Emerald Coast in sunny Destin,
                      Florida
                    </span>
                  </p>
                </div>
              </div>
            </FadeInUpChild>
            <FadeInUpChild>
              <h2 tw="text-5xl font-extrabold mb-8 text-gray-900 dark:(text-gray-200)">
                UX designer and developer, passionate about building accessible,
                performant, and beautiful user experiences.
              </h2>
            </FadeInUpChild>
            <FadeInUpChild>
              <p tw="text-xl my-8">
                I&rsquo;ve been helping agencies, startups, and enterprises
                build products, websites, and brands for 10+ years. With a
                proven process and fundamental design principles, I can help
                design a new product, upgrade your user experience, or build a
                design system.
              </p>
            </FadeInUpChild>
            <FadeInUpChild>
              <p tw="my-12">
                <StyledButton href="mailto:hello@martylouis.com">
                  <span>Let&rsquo;s Work Together</span>
                  <PaperPlaneTilt
                    tw="-mr-1"
                    weight="fill"
                    aria-hidden="false"
                    focusable="false"
                  />
                </StyledButton>
              </p>
            </FadeInUpChild>
          </FadeInUp>
        </div>
      </Container>
    </Page>
  );
}
