import Link from 'next/link';
import Logo from './Logo';
import tw, { styled } from 'twin.macro';
import ThemeToggle from './ThemeToggle';
import { header as headerNav } from '@/data/site/nav';
import { useRouter } from 'next/router';
import Container from './Container';

const SiteHeader = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <Container as="nav">
      <div tw="relative flex items-center justify-between py-4">
        <Link href="/" passHref>
          <a tw="inline-block hocus:(outline-none)">
            <span tw="block w-10 h-10">
              <Logo title="Marty Louis logo" />
            </span>
          </a>
        </Link>
        <div tw="flex items-center justify-center space-x-1">
          {headerNav?.map(({ title, url }) => (
            <Link passHref href={url} key={title}>
              <a
                css={{
                  ...tw`inline-flex items-center px-4 text-sm text-gray-500 rounded height[40px] dark:text-gray-400`,
                  ...tw`hocus:(text-gray-900 bg-gray-300 bg-opacity-25 dark:text-gray-100 dark:bg-gray-700 dark:bg-opacity-50 dark:outline-none)`,
                  ...(isActive(url) &&
                    tw`text-gray-800 bg-gray-300 bg-opacity-25 dark:( text-gray-200 bg-gray-700 bg-opacity-50)`),
                }}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </Container>
  );
};

export default SiteHeader;

const StyledLink = styled('a', {
  ...tw`text-gray-600 rounded`,
  ...tw`inline-flex items-center px-6 text-xs tracking-wide cursor-pointer height[40px]`,
  ...tw`hocus:(text-gray-900 bg-gray-300 bg-opacity-25 outline-none)`,
  '.dark &': {
    ...tw`text-gray-400`,
    ...tw`hocus:(text-gray-100 bg-gray-700 bg-opacity-50 outline-none)`,
  },
});
