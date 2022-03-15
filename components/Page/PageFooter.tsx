import { ArrowUpRight } from 'phosphor-react';
import tw, { styled } from 'twin.macro';
import Container from '@/components/Container';

const social = [
  { title: 'GitHub', href: 'https://github.com/martylouis' },
  { title: 'Twitter', href: 'https://twitter.com/martylouis' },
  { title: 'LinkedIn', href: 'https://linkedin.com/in/martylouis' },
];

const StyledLink = styled('a', {
  ...tw`inline-flex font-medium space-x-0.5 items-center relative cursor-pointer transition-colors h-12 px-8 rounded-md
  text-gray-800 dark:text-gray-200 bg-transparent
  hover:(bg-black/5 text-black/90 dark:(bg-white/10 text-white/90))
  active:(bg-black/5 text-black dark:(bg-white/10 text-white))
  focus:(outline-none text-black/90 ring-2 ring-black/80 dark:(text-white/90 ring-white/80))
  `,
});

function PageFooter() {
  return (
    <footer tw="bg-white border-t border-black/5 dark:(bg-black/10 border-white/5) py-16">
      <Container>
        <ul tw="flex items-center justify-center flex-col flex-wrap gap-2 md:flex-row">
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
        <p tw="mt-8 text-sm text-center text-gray-500 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Marty Louis Co.
        </p>
      </Container>
    </footer>
  );
}
export default PageFooter;
