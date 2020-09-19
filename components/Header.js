import nav from '../data/nav';
import Logo from '../components/Logo';

import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default function Header() {
  const { header } = nav;

  return (
    <header className="py-8">
      <div className="container">
        <nav className="flex justify-between">
          <Link href="/">
            <a className="flex items-center">
              {' '}
              <Logo className="w-12 h-12 text-green-500" />{' '}
              <div className="ml-4 text-lg font-black leading-none tracking-tight text-gray-700 uppercase">
                Marty Louis
              </div>
            </a>
          </Link>
          <ul className="flex items-center space-x-8">
            {header.map(({ href, title }) => (
              <li key={title}>
                <HeaderLink href={href} title={title} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export const HeaderLink = ({ href, title }) => {
  return (
    <ActiveLink href={href} activeClassName="text-gray-900">
      <a className="font-medium text-gray-500 no-underline">{title}</a>
    </ActiveLink>
  );
};
