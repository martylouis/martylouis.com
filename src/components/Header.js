import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

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
      <div className="flex flex-wrap items-center justify-between px-6">
        <Link className="flex items-center no-underline" title={site.siteMetadata.title} to='/'>
          <span className="flex items-center w-10 h-10 p-1 text-purple-800 bg-green-600 rounded-full">
            <svg className="w-full fill-current" viewBox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M31.7751 19.2888C31.875 19.1137 32.125 19.1137 32.2249 19.2888L38.5729 30.6932C38.6229 30.7683 38.6979 30.8183 38.7978 30.8183H63.7399C63.9398 30.8183 64.0648 30.6182 63.9648 30.4431L58.9164 21.3646C58.8665 21.2896 58.7915 21.2395 58.6915 21.2395H44.1211C44.0212 21.2395 43.9462 21.1895 43.8962 21.1145L32.2249 0.131301C32.125 -0.0437671 31.875 -0.0437671 31.7751 0.131301L24.7773 12.7112C24.6773 12.8863 24.4274 12.8863 24.3274 12.7112L17.3297 0.131301C17.2297 -0.0437671 16.9798 -0.0437671 16.8798 0.131301L0.035184 30.4431C-0.0647842 30.6182 0.0601764 30.8183 0.260113 30.8183H10.3319C10.4319 30.8183 10.5068 30.7683 10.5568 30.6932L16.9048 19.2888C17.0048 19.1137 17.2547 19.1137 17.3547 19.2888L24.3524 31.8687C24.4524 32.0438 24.7023 32.0438 24.8023 31.8687L31.7751 19.2888Z" fillRule="evenodd" />
            </svg>
          </span>
          <span className="hidden ml-4 text-sm font-bold tracking-widest text-purple-100 uppercase md:flex">Marty Louis</span>
        </Link>
        <button className="block p-4 text-white bg-purple-800 md:hidden" onClick={() => toggleExpansion(!isExpanded)}>
          <svg className="w-3 fill-current h3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2h-20v-2Zm0 6h20v2h-20v-2Zm0 6h20v2h-20v-2Z"></path>
          </svg>
        </button>
        <nav className={`${isExpanded ? `block` : `hidden`} w-full md:block md:flex md:items-center md:w-auto md:text-sm`}>
          {[
            {
              title: `Services`,
              route: `/services`
            },
            {
              title: `Projects`,
              route: `/projects`
            },
            {
              title: `About`,
              route: `/about`
            },
            {
              title: `Blog`,
              route: `/blog`
            },
            {
              title: `Contact`,
              route: `/contact`
            }
          ].map(link => (
            <Link
              className="block px-1 py-0 text-gray-300 no-underline rounded-sm hover:text-purple-100 md:ml-2 md:px-2 md:py-1 focus:bg-purple-700 md:inline-block focus:outline-none"
              key={link.title}
              to={link.route}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
