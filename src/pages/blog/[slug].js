import Image from 'next/image';
import hydrate from 'next-mdx-remote/hydrate';
import { getMdxFileBySlug } from '@lib/getMdxFileBySlug';
import { getFiles } from '@lib/getFiles';
import MdxComponents from '@components/MdxComponents';

const fileDir = 'blog';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components: MdxComponents });

  return (
    <div id="blog" frontmatter={frontMatter}>
      <h1>{frontMatter.title}</h1>
      <h1>{frontMatter.date_published}</h1>
      <h1>{frontMatter.intro}</h1>
      {content}
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles(fileDir);

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
  const post = await getMdxFileBySlug(fileDir, params.slug);

  return { props: post };
}

export default Blog;
