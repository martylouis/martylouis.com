import nav from '../data/nav';
import Link from 'next/link';
import ExternalLink from './ExternalLink';
import { FeatherIcon } from './Icon';

export default function Footer() {
  const { footer } = nav;
  return (
    <footer className="pt-16 pb-24 bg-gray-900">
      <div className="container">
        {footer.map(({ heading, links }) => (
          <div key={heading} className="md:flex">
            <h4 className="mt-0 mr-8 tracking-wide text-gray-200">{heading}</h4>
            <ul className="md:space-x-8 md:flex">
              {links.map(({ title, href, external }) => (
                <li key="title" className="flex my-0">
                  <FooterLink title={title} href={href} external={external} />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex">
          <p className="text-sm text-gray-500">&copy; 2020 Marty Louis Co.</p>
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
        {title} <FeatherIcon name="externalLink" className="w-4 h-4 ml-1" />
      </span>
    </ExternalLink>
  ) : (
    <Link href={href}>
      <a className={classes}>{title}</a>
    </Link>
  );
};
