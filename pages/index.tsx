import Logo from '@/components/Logo';
import SEO from '@/components/SEO';
import { ArrowUpRight } from 'phosphor-react';
import tw, { styled } from 'twin.macro';

const social = [
  { title: 'GitHub', href: 'https://github.com/martylouis' },
  { title: 'Twitter', href: 'https://twitter.com/martylouis' },
  { title: 'LinkedIn', href: 'https://linkedin.com/in/martylouis' },
];

const Container = tw.div`flex flex-col min-h-screen`;

const StyledLink = styled('a', {
  ...tw`inline-flex font-bold space-x-0.5 items-center relative cursor-pointer text-gray-800 dark:text-gray-200
  after:(absolute w-full scale-x-0 origin-bottom-right h-[2px] top-[110%] left-0 transition-transform bg-teal-500)
  hocus:(outline-none text-teal-700 dark:text-teal-500 after:(scale-x-100 origin-bottom-left))
  `,
});

export default function Index() {
  return (
    <Container>
      <SEO />
      <main tw="flex-1 flex items-center justify-center">
        <div tw="flex flex-col items-center">
          <Logo tw="w-[80px] h-[35px] text-gray-600 dark:(text-gray-400)" />

          <ul tw="flex space-x-8 mt-8">
            {social.map((item) => (
              <li key={item.title}>
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
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Container>
  );
}
