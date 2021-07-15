import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import tw from 'twin.macro';
import ThemeToggle from './ThemeToggle';

const SiteHeader = () => {
  return (
    <header tw="py-[3vh]">
      <Container size="xl" tw="flex items-center justify-between">
        <Link href="/" passHref>
          <a tw="inline-block">
            <span tw="block w-12 h-12">
              <Logo title="Marty Louis logo" />
            </span>
            {/* <span className="ml-2 span">martylouis.com</span> */}
          </a>
        </Link>
        <div tw="flex items-center">
          <div tw="flex mr-2">
            <div tw="mx-4 text-sm">Work</div>
            <div tw="mx-4 text-sm">Blog</div>
            <div tw="mx-4 text-sm">About</div>
            <div tw="mx-4 text-sm">Contact</div>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

export default SiteHeader;
