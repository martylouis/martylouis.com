import Container from '@/components/Container';
import tw, { styled } from 'twin.macro';

const SiteFooter = () => {
  return (
    <footer>
      <Container tw="flex flex-col justify-between gap-2 pb-8 my-8">
        <p tw="text-[15px] text-gray-600 dark:(text-gray-500)">
          Built with Next.js, MDX, Tailwind and Stitches. Hosted on Vercel.
        </p>
        <p tw="text-[14px] text-gray-500 dark:(text-gray-600)">
          &copy; {new Date().getFullYear()} Marty Louis Co.{' '}
          <a
            tw="hocus:(text-gray-700 dark:text-gray-500)"
            href="https://github.com/martylouis/martylouis.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source on GitHub.
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
