import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import MDXStyles from './MDXStyles';

import ColorGallery from '../ColorGallery';
import { ButtonLink, ButtonSubmit } from '../Buttons';

const components = { ColorGallery, ButtonLink, ButtonSubmit };

const MDX = ({ content, children, ...props }) => {
  // const [colorMode] = useColorMode();
  return (
    <section className="markdown">
      <MDXProvider components={components}>
        <MDXStyles>
          <MDXRenderer {...props}>{content}</MDXRenderer>
          {children}
        </MDXStyles>
      </MDXProvider>
    </section>
  );
};

export default MDX;
