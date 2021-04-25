import { header } from '@data/nav';
// import Logo from '@components/logo';
import Link from 'next/link';
import { logo } from '@data/icons';

export default function SiteHeader({ ...otherProps }) {
  return (
    <header
      id="siteHeader"
      className="py-4 border-b bg-pgray-50 border-pgray-800 md:py-6"
    >
      <div className="px-8 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center">
              <div className="flex w-12 text-green-500 md:mr-4 flex-flex-shrink-0 md:w-12">
                <Icon
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  title="Marty Louis Logo"
                  path={logo}
                />
              </div>
              <div className="flex-col hidden md:flex">
                {/* <div className="-mb-1 font-bold">Marty Louis</div>
                <div className="text-sm text-gray-400">
                  make better websites
                </div> */}
              </div>
            </a>
          </Link>
          <Nav items={header} className="flex justify-end" />
        </div>
      </div>
    </header>
  );
}

const Nav = ({ items, ...rest }) => (
  <nav {...rest}>
    {items.map(({ url, title }) => (
      <div key={title}>
        <Link href={url}>
          <a className="px-3 py-2 text-gray-800 no-underline rounded hover:bg-gray-100 hover:text-gray-900">
            {title}
          </a>
        </Link>
      </div>
    ))}
  </nav>
);

const Icon = ({ title, path, ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="flex w-full h-full"
    {...otherProps}
  >
    <title>{title}</title>
    <path d={path} />
  </svg>
);
