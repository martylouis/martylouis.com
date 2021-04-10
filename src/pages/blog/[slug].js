import Image from 'next/image';
import hydrate from 'next-mdx-remote/hydrate';
import { getMdxFileBySlug } from '@lib/getMdxFileBySlug';
import { getFiles } from '@lib/getFiles';
import MdxComponents from '@components/MdxComponents';
import { Page } from '@components/layout';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

const fileDir = 'blog';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components: MdxComponents });

  return (
    <Page>
      <article className="container">
        <div id="blog" frontmatter={frontMatter}>
          <div className="my-8">
            <Link href="/blog" passHref>
              <a className="text-gray-600">&larr; Blog</a>
            </Link>
          </div>
          <header className="mt-10 mb-10">
            <h1 className="mb-2 text-3xl font-black tracking-tight md:text-5xl">
              {frontMatter.title}
            </h1>
            <p className="text-sm text-gray-600">
              {format(parseISO(frontMatter.date_published), 'MMM dd, yyyy')}
            </p>
          </header>
          <div className="prose">{content}</div>
        </div>
      </article>
    </Page>
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
