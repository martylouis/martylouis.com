import nav from '../data/nav';
import Link from 'next/link';
import ExternalLink from './ExternalLink';
import Logo from './Logo';
import { FeatherIcon } from './Icon';

export default function Footer() {
  const { footer } = nav;
  return (
    <footer className="pt-24 pb-24 mt-24 border-t border-gray-200">
      <div className="container max-w-5xl px-4 mx-auto md:px-8">
        <div className={`md:grid md:gap-x-4 md:grid-cols-${footer.length + 1}`}>
          <div className="mt-2">
            <Logo size="12" className="text-green-500" />
            <p className="mt-12 text-sm text-gray-400">
              &copy; 2020 Marty Louis Co.
            </p>
            <p className="mt-0 text-sm text-gray-400">
              <Link href="/privacy" className="text-blue-500 underline">
                Privacy
              </Link>
            </p>
          </div>
          {footer.map(({ heading, links }) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map(({ title, href, external }) => (
                  <li key="title" className="flex">
                    <FooterLink title={title} href={href} external={external} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export const FooterLink = ({ title, href, external }) => {
  const classes =
    'text-gray-500 font-light border-b-2 border-transparent hover:border-green-600 hover:text-green-600';
  return external ? (
    <ExternalLink href={href} className={classes}>
      <span className="flex items-center">
        {title} <FeatherIcon name="externalLink" className="ml-1" />
      </span>
    </ExternalLink>
  ) : (
    <Link href={href}>
      <a className={classes}>{title}</a>
    </Link>
  );
};
