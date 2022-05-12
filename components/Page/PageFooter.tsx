import { ArrowUpRight } from 'phosphor-react';
import tw from 'twin.macro';
import Button from '@/components/Button';
import Container from '@/components/Container';

const social = [
  { title: 'GitHub', href: 'https://github.com/martylouis' },
  { title: 'Twitter', href: 'https://twitter.com/martylouis' },
  { title: 'LinkedIn', href: 'https://linkedin.com/in/martylouis' },
];

function PageFooter() {
  return (
    <footer tw="bg-white border-t border-black/5 dark:(bg-black/10 border-white/5) py-16">
      <Container tw="flex flex-col items-center gap-12">
        <ul tw="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
          {social.map((item) => (
            <li key={item.title}>
              <Button
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
              </Button>
            </li>
          ))}
        </ul>
        <p tw="text-center text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Marty Louis Co.
        </p>
      </Container>
    </footer>
  );
}
export default PageFooter;
