import Image from 'next/image';
import hydrate from 'next-mdx-remote/hydrate';
import { getMdxFileBySlug } from '@lib/getMdxFileBySlug';
import { getFiles } from '@lib/getFiles';
import MdxComponents from '@components/MdxComponents';

import BlogPost from '@components/BlogPost';

const blogContent = 'blog';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components: MdxComponents });

  return <BlogPost frontMatter={frontMatter}>{content}</BlogPost>;
};

export async function getStaticPaths() {
  const posts = await getFiles(blogContent);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getMdxFileBySlug(blogContent, params.slug);

  return { props: post };
}

export default Blog;
