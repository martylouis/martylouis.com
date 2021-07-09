import BlogPost from '@components/BlogPost';
import Figure from '@components/Figure';
import Aside from '@components/Aside';
import { postFilePaths, POSTS_PATH } from '@utils/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import readingTime from 'reading-time';
import Prose from '@components/Prose';
import tw, { styled } from 'twin.macro';

const StyledDiv = styled('div', {});

// include components in scope here
const components = {
  Head,
  Image,
  Link,
  Figure,
  Aside,
  StyledDiv,
  ...Prose,
};

const Blog = ({ source, frontMatter }) => {
  return (
    <BlogPost frontMatter={frontMatter}>
      <MDXRemote {...source} components={components} />
    </BlogPost>
  );
};

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        // [
        //   require('remark-autolink-headings'),
        //   {
        //     linkProperties: {
        //       className: ['anchor'],
        //     },
        //     content: {
        //       type: 'raw',
        //       value: svgIconLink,
        //     },
        //   },
        // ],
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        ...data,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Blog;

const svgIconLink =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-current" viewBox="0 0 16 16"><title>link</title><g fill="fillCurrent"><path d="M4.5,16c-1.2,0-2.3-0.5-3.2-1.3c-1.8-1.8-1.8-4.6,0-6.4L2,7.6L3.4,9L2.7,9.7 c-1,1-1,2.6,0,3.6c1,1,2.6,1,3.6,0l3-3c1-1,1-2.6,0-3.6L8.6,6L10,4.6l0.7,0.7c1.8,1.8,1.8,4.6,0,6.4l-3,3C6.9,15.5,5.7,16,4.5,16z"></path> <path fill="fillCurrent" d="M6,11.4l-0.7-0.7c-1.8-1.8-1.8-4.6,0-6.4l3-3c0.9-0.9,2-1.3,3.2-1.3s2.3,0.5,3.2,1.3c1.8,1.8,1.8,4.6,0,6.4 L14,8.4L12.6,7l0.7-0.7c1-1,1-2.6,0-3.6c-1-1-2.6-1-3.6,0l-3,3c-1,1-1,2.6,0,3.6L7.4,10L6,11.4z"></path></g></svg>';
