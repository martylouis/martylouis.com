import Link from 'next/link';
import SEO from '../components/SEO';
import MartyLouisLogo from '@components/MartyLouisLogo';
import Container from '@components/Container';
import tw, { css } from 'twin.macro';

const Page = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex-shrink-0">
          <header tw="py-[3vh]">
            <Container>
              <Link href="/" passHref>
                <a className="flex items-center max-w-3xl">
                  <span className="w-8 h-8 lg:w-10 lg:h-10">
                    <MartyLouisLogo />
                  </span>
                  <span className="ml-2 span">martylouis.com</span>
                </a>
              </Link>
              {/* PageHeaderNav */}
            </Container>
          </header>
          <main className="pb-[8vh]">{children}</main>
        </div>
        <footer className="py-[8vh] border-t border-gray-200">
          <Container>
            <p
              className="text-sm text-center text-gray-400"
              css={{ gridColumn: ' 1 / -1' }}
            >
              &copy; {new Date().getFullYear()} Marty Louis Co
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Page;
