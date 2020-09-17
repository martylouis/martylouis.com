import nav from '../data/nav';
import Link from 'next/link';
import ExternalLink from './ExternalLink';
import Logo from './Logo';
import { FeatherIcon } from './Icon';

export default function Footer() {
  const { footer } = nav;
  return (
    <footer className="pt-16 pb-24 bg-gray-900">
      <div className="container">
        <div className={`md:grid md:gap-x-4 md:grid-cols-${footer.length + 1}`}>
          <div className="mt-2">
            <Logo size="12" className="text-green-500" />
            <p className="mt-12 mb-0 text-sm text-gray-500">
              &copy; 2020 Marty Louis Co. Built with NextJS and WordPress.
            </p>
            {/* <p className="mt-0 text-sm text-gray-400">
              <Link href="/privacy">
                <a className="text-blue-600">Privacy</a>
              </Link>
            </p> */}
          </div>
          {footer.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-gray-100">{heading}</h4>
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
    'text-gray-400 font-light border-b-2 border-transparent hover:border-green-600 hover:text-green-600';
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
