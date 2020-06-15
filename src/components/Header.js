import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Logo from '../components/Logo';

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className="pt-4">
      <div className="flex flex-wrap items-center justify-between px-8">
        <Link
          className="flex items-center no-underline"
          title={site.siteMetadata.title}
          to="/"
        >
          <span className="w-10 h-10">
            <Logo className="w-full h-full" />
          </span>
          <span className="hidden ml-4 font-serif font-bold font-extrabold tracking-tighter text-purple-100 text md:flex">
            MartyLouis.com
          </span>
        </Link>
        <button
          className="block p-4 text-white bg-purple-800 md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 fill-current h3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2h-20v-2Zm0 6h20v2h-20v-2Zm0 6h20v2h-20v-2Z"></path>
          </svg>
        </button>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full md:block md:flex md:items-center md:w-auto md:text-sm`}
        >
          {[
            {
              title: `Services`,
              route: `/services`,
            },
            {
              title: `Projects`,
              route: `/projects`,
            },
            {
              title: `About`,
              route: `/about`,
            },
            {
              title: `Blog`,
              route: `/blog`,
            },
            {
              title: `Contact`,
              route: `/contact`,
            },
          ].map((link) => (
            <Link
              className="block px-1 py-0 text-gray-300 no-underline rounded hover:text-purple-100 hover:bg-gray-800 md:ml-2 md:px-2 md:py-1 focus:bg-purple-700 md:inline-block focus:outline-none"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
