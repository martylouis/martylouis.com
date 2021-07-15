import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import tw, { styled } from 'twin.macro';
import ThemeToggle from './ThemeToggle';
import { header as headerNav } from '@data/nav';

const SiteHeader = () => {
  return (
    <header tw="py-2 backdrop-filter backdrop-blur w-full fixed z-50">
      <Container size="md" tw="flex items-center justify-between">
        <Link href="/" passHref>
          <a tw="inline-block">
            <span tw="block w-10 h-10">
              <Logo title="Marty Louis logo" />
            </span>
            {/* <span className="ml-2 span">martylouis.com</span> */}
          </a>
        </Link>
        <div tw="flex items-center">
          <div tw="flex mr-6">
            {headerNav?.map(({ title, url }) => (
              <Link passHref href={url} key={title}>
                <StyledLink>{title}</StyledLink>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

export default SiteHeader;

const StyledLink = styled('a', {
  ...tw`text-gray-600`,
  ...tw`inline-flex items-center px-2 h-[32px] text-sm rounded cursor-pointer`,
  ...tw`hover:(text-gray-900 bg-gray-900 bg-opacity-10)`,
  ...tw`focus:(text-gray-900 bg-gray-900 bg-opacity-10 outline-none)`,
  '.dark &': {
    ...tw`text-gray-400`,
    ...tw`hover:(text-gray-100 bg-gray-100 bg-opacity-10)`,
    ...tw`focus:(text-gray-100 bg-gray-100 bg-opacity-10 outline-none)`,
  },
});
