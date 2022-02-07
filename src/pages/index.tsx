import Container from '@/components/Container';
import Emoji from '@/components/Emoji';
import Logo from '@/components/Logo';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'phosphor-react';
import tw, { styled } from 'twin.macro';

const social = [
  { title: 'GitHub', href: 'https://github.com/martylouis' },
  { title: 'Twitter', href: 'https://twitter.com/martylouis' },
  { title: 'LinkedIn', href: 'https://linkedin.com/in/martylouis' },
];

const HR = tw.hr`my-16 border-gray-300 dark:border-gray-800`;

const StyledLink = styled('a', {
  ...tw`inline-flex space-x-0.5 items-center relative cursor-pointer text-gray-900 dark:text-gray-100
  after:(absolute w-full scale-x-0 origin-bottom-right h-[2px] top-[110%] left-0 transition-transform bg-teal-500)
  hocus:(outline-none text-teal-700 dark:text-teal-500 after:(scale-x-100 origin-bottom-left))
  `,
});

export default function Index({ posts }) {
  return (
    <PageLayout>
      <Container>
        <div tw="flex flex-col w-full gap-4 mt-16">
          <div tw="w-16 h-16">
            <div tw="p-1 rounded-full bg-gradient-to-bl from-indigo-900 to-teal-500">
              <div tw="relative overflow-hidden rounded-full">
                <Image
                  src="https://static.martylouis.com/marty-profile.jpg"
                  alt="Marty Louis"
                  priority
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <p tw="md:text-sm">
            <Emoji label="hand wave">👋</Emoji> Hello, I’m Marty. I’m a
            freelance designer and frontend developer based in Destin, Florida{' '}
            <Emoji label="beach umbella">🏖️</Emoji>. I help agencies, startups,
            and businesses make websites, accessible interfaces, and great user
            experiences.
          </p>
          <ul tw="flex space-x-8 mt-8 text-xs dark:(text-gray-500)">
            {social.map((item) => (
              <li key={item.title}>
                <StyledLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight aria-hidden="true" focusable="false" />
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <HR />
        <div tw="mb-16">
          <h2 tw="my-4 text-sm">Featured Work</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} tw="col-span-1">
                <div tw="rounded-lg aspect-ratio[4/3]">
                  <div tw="flex flex-col items-center justify-center w-full h-full space-y-4 border border-dashed rounded-lg bg-black/10 border-white/10">
                    <div tw="text-gray-700/50">
                      <Clock size={48} />
                    </div>
                    <p tw="text-xs font-light text-gray-600">Coming soon...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}

{
  /* <HR />
        <div>
          <h2 tw="text-sm">Posts</h2>
        </div> */
}
{
  /* <HR />
        <div>
          <h2 tw="my-4 text-sm">Featured Work</h2>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} tw="col-span-1">
                <div tw="rounded-lg aspect-ratio[4/3]">
                  <div tw="flex flex-col items-center justify-center w-full h-full space-y-4 border border-dashed rounded-lg bg-black/10 border-white/10">
                    <div tw="text-gray-700/50">
                      <Clock size={48} />
                    </div>
                    <p tw="text-xs font-light text-gray-600">Coming soon...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */
}
