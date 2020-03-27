import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
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
          <div className="mt-6 text-sm text-purple-300">
            <span>img</span> <span>By Marty Thierry</span>
            {` • `}
            <span>Mar 26, 2020</span>
            {` • `}
            <span>6 min read</span>
          </div>
        </header>
        <section className="markdown">
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </article>
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
