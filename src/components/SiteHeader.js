import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import tw, { styled } from 'twin.macro';
import ThemeToggle from './ThemeToggle';
import { header as headerNav } from '@data/nav';
import { useRouter } from 'next/router';

const SiteHeader = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <header tw="fixed z-50 w-full backdrop-filter backdrop-blur-lg">
      <div tw="absolute inset-0 transition-all w-full h-full bg-gray-100 bg-opacity-80 dark:(bg-gray-800 bg-opacity-50)"></div>
      <div tw="py-4 max-w-screen-lg flex items-center justify-between relative mx-auto px-6">
        <Link href="/" passHref>
          <a tw="inline-block hocus:(text-green-500 outline-none)">
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
                  ...tw`inline-flex items-center px-4 height[40px] text-sm text-gray-500 rounded dark:text-gray-400`,
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
    </header>
  );
};

export default SiteHeader;

const StyledLink = styled('a', {
  ...tw`text-gray-600 rounded`,
  ...tw`inline-flex items-center px-6 height[40px] text-xs tracking-wide cursor-pointer`,
  ...tw`hocus:(text-gray-900 bg-gray-300 bg-opacity-25 outline-none)`,
  '.dark &': {
    ...tw`text-gray-400`,
    ...tw`hocus:(text-gray-100 bg-gray-700 bg-opacity-50 outline-none)`,
  },
});
