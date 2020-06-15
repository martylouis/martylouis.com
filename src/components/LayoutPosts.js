import React from 'react';
import { graphql } from 'gatsby';

import MDX from './MDX';

import Footer from './Footer';
import Header from './Header';

const LayoutPosts = ({ data: { mdx } }) => (
  <div>
    <Header />
    <main>
      <article className="container max-w-2xl">
        <header className="mt-32">
          <h1 className="font-serif text-5xl leading-none text-gray-100">
            {mdx.frontmatter.title}
          </h1>
          <div className="flex items-center mt-16 text-sm text-gray-500">
            <span className="inline-block w-10 h-10 leading-tight rounded-full bg-brand-purple-700"></span>
            {` `}
            <span className="mx-2">By Marty Thierry</span>
            {` • `}
            <span className="mx-2">Jan 2, 2020</span>
            {` • `}
            <span className="mx-2">6 min read</span>
          </div>
        </header>
        <MDX content={mdx.body} />
      </article>
      <section>
        <div className="container">
          <div className="py-16 mt-16 bg-brand-purple-800">
            <div className="max-w-2xl px-8 m-auto">
              <h2 className="font-serif text-3xl leading-tight text-brand-purple-200">
                The Newsletter
              </h2>
              <p className="mt-4 text-sm text-brand-purple-400">
                Get updates from me on what it takes to get better at design,
                code, and business. Promise it’ll be short and sweet.
              </p>
              <div className="mt-8">
                <form action="">
                  <div className="flex">
                    <input
                      className="w-full h-12 px-4 placeholder-gray-400 rounded-l bg-brand-purple-700"
                      placeholder="your@email.com"
                      type="text"
                    />
                    <button className="h-12 px-8 font-bold rounded-r bg-brand-purple-600">
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="flex items-baseline justify-end mt-2 text-xs text-brand-purple-600">
                  <span className="inline-block w-4 h-4 mr-2">
                    <svg
                      className="max-w-full fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
                    </svg>
                  </span>
                  {` `}
                  I’ll keep your email private and never spam you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default LayoutPosts;

export const pageQuery = graphql`
  query ContentPosts($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
