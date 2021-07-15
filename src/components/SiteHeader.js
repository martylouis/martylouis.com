import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import tw from 'twin.macro';

const SiteHeader = () => {
  return (
    <header tw="py-[3vh]">
      <Container size="xl" tw="items-center justify-between">
        <Link href="/" passHref>
          <a tw="flex items-center max-w-3xl">
            <span tw="w-12 h-12">
              <Logo />
            </span>
            {/* <span className="ml-2 span">martylouis.com</span> */}
          </a>
        </Link>
        {/* PageHeaderNav */}
      </Container>
    </header>
  );
};

export default SiteHeader;
