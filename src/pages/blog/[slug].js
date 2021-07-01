import BlogPost from '@components/BlogPost';
import { postFilePaths, POSTS_PATH } from '@utils/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import readingTime from 'reading-time';
// import mdxPrism from 'mdx-prism';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeSlug from 'rehype-slug';

// include components in scope here
const components = {
  Head,
  Image,
  Link,
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
      // remarkPlugins: [require('remark-code-titles')],
      // rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
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
