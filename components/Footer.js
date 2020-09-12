import { site } from '../lib/constants';
import CustomLink from './CustomLink';
import Logo from './Logo';

export default function Footer() {
  const { footer, social } = site.nav;
  return (
    <footer className="pt-24 pb-24 mt-24 border-t border-gray-200">
      <div className="container max-w-5xl px-4 mx-auto md:px-8">
        <div className={`md:grid md:gap-x-4 md:grid-cols-${footer.length + 2}`}>
          <div className="mt-2">
            <Logo size="12" className="text-green-500" />
            <p className="mt-12 text-sm text-gray-400">
              &copy; 2020 Marty Louis Co.
            </p>
            <p className="mt-0 text-sm text-gray-400">
              <CustomLink
                title="Privacy"
                href="/privacy"
                className="text-blue-500 underline"
              />
            </p>
          </div>
          {footer.map(({ heading, links }) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map(({ title, href, external }) => (
                  <li key="title">
                    <CustomLink
                      href={href}
                      title={title}
                      external={external}
                      className="px-2 py-1 -mx-2 font-light transition duration-150 ease-in-out bg-transparent border border-transparent rounded-md hover:bg-gray-200 hover:text-gray-900 hover:border-gray-300"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Follow @martylouis</h4>
            <ul>
              {social.map(({ title, href }) => (
                <li key={title} className="flex items-start">
                  <CustomLink
                    href={href}
                    title={title}
                    external={true}
                    className="font-light"
                    icon="externalLink"
                    iconProps={{ title: 'Open Link' }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
