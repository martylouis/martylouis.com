import Link from 'next/link';

const Nav = ({ items }) => (
  <nav className="flex justify-between">
    <div className="flex items-center">
      {items.map(({ url, title }) => (
        <div key={title}>
          <Link href={url}>
            <a className="p-3 text-gray-800 no-underline rounded-sm hover:bg-gray-100 hover:text-gray-900">
              {title}
            </a>
          </Link>
        </div>
      ))}
    </div>
  </nav>
);

export default Nav;
