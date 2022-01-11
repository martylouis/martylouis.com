import { useMemo } from 'react';
import Link from 'next/link';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '@/utils/mdx';
import ProseComponents from '@/components/Prose';
import BlogPost from '@/components/BlogPost';
import Image from 'next/image';

const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} className="custom-link" />
    </Link>
  );
};

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogPost frontMatter={frontmatter}>
      <Component
        components={{
          ...ProseComponents,
          Image,
        }}
      />
    </BlogPost>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
