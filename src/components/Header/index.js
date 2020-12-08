import { header } from '@data/nav';
import Logo from '@components/logo';
import Link from 'next/link';
import Nav from './Nav';

const LOGOSIZE = '48px';

const Header = () => {
  return (
    <header>
      <div className="container py-2 mx-auto md:py-8">
        <div className="flex items-center justify-between">
          <div className="py-4">
            <Link href="/">
              <a
                className="flex text-primary-600"
                style={{
                  width: LOGOSIZE,
                  height: LOGOSIZE,
                }}
              >
                <Logo />
              </a>
            </Link>
          </div>
          <Nav items={header} />
        </div>
      </div>
    </header>
  );
};

export default Header;
