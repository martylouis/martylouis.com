import nav from '../data/nav';

import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default function Header() {
  const { header } = nav;

  return (
    <header className="py-8">
      <div className="container max-w-3xl px-4 mx-auto">
        <nav className="flex justify-between">
          <Link href="/">
            <a>Marty Louis</a>
          </Link>
          <ul className="flex space-x-4">
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
      <a className="text-gray-500 no-underline">{title}</a>
    </ActiveLink>
  );
};
