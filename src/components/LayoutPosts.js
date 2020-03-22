import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const LayoutPosts = ({data: { mdx }}) => (
  <div>
    <Header />
    <main>
      <article className="container max-w-4xl">
        <header>
          <h1>{mdx.frontmatter.title}</h1>
        </header>
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </main>
    <Footer />
  </div>
)

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
`
