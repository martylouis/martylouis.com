import SEO from '@/components/SEO';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowUpRight } from 'phosphor-react';
import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

const social = [
  { title: 'GitHub', href: 'https://github.com/martylouis' },
  { title: 'Twitter', href: 'https://twitter.com/martylouis' },
  { title: 'LinkedIn', href: 'https://linkedin.com/in/martylouis' },
];

const Container = tw.div`flex flex-col min-h-screen w-full`;

const StyledLink = styled('a', {
  ...tw`inline-flex font-bold space-x-0.5 items-center relative cursor-pointer text-gray-800 dark:text-gray-200
  after:(absolute w-full scale-x-0 origin-bottom-right h-[2px] top-[110%] left-0 transition-transform bg-teal-500)
  hocus:(outline-none text-teal-700 dark:text-teal-500 after:(scale-x-100 origin-bottom-left))
  `,
});

export default function Index() {
  const animateContent = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const animateListItem = {
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
  };

  return (
    <Container>
      <SEO />
      <main tw="flex-1 flex justify-center">
        <div tw="flex flex-col items-center max-w-3xl w-full">
          <div tw="flex justify-between my-12 w-full">
            {/* <Logo tw="w-[80px] h-[35px] text-gray-600 dark:(text-gray-400)" /> */}
            <div tw="ml-auto">
              <ThemeToggle />
            </div>
          </div>
          <motion.div
            tw="w-full"
            initial="hidden"
            animate="show"
            variants={animateContent}
          >
            <motion.h1 variants={animateListItem} tw="text-4xl font-light mb-4">
              Marty Louis
            </motion.h1>
            <motion.p variants={animateListItem}>
              Freelance UX/UI designer and frontend developer in Destin,
              Florida.
            </motion.p>
            <motion.div tw="my-8" variants={animateListItem}>
              <hr tw="border-gray-200 dark:border-gray-800" />
            </motion.div>
            <motion.ul
              tw="flex space-x-8 mt-8"
              initial="hidden"
              animate="show"
              variants={animateContent}
            >
              {social.map((item) => (
                <motion.li key={item.title} variants={animateListItem}>
                  <StyledLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow @martylouis on ${item.title}`}
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight
                      weight="bold"
                      aria-hidden="true"
                      focusable="false"
                    />
                  </StyledLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </main>
    </Container>
  );
}
