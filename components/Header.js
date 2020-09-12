import CustomLink from './CustomLink';
import { SocialIcon } from './Icon';
import { site } from '../lib/constants';

export default function Header() {
  const { header, social } = site.nav;
  return (
    <header className="py-4">
      <div className="container max-w-3xl px-4 mx-auto">
        <nav className="flex space-x-8">
          <ul className="flex space-x-4">
            {header.slice(1).map(({ href, title }) => (
              <li key={title}>
                <CustomLink
                  href={href}
                  title={title}
                  className="text-blue-500 no-underline"
                />
              </li>
            ))}
          </ul>
          <ul className="flex space-x-4">
            {social.slice(0, 2).map(({ href, title }) => (
              <li key={title}>
                <CustomLink href={href} className="block" external={true}>
                  <SocialIcon name={title} title={title} size="5" />
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
