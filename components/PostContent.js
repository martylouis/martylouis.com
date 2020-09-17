import site from '../data/site';
import PageLayout from './PageLayout';

import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
// import { useRouter } from 'next/router';

const mdxCodeComponents = {
  pre: ({ className, ...props }) => ({}),
  'pre.code': ({ className, ...props }) => ({}),
};

export default function PostContent({ post }) {
  // const router = useRouter();
  // const postIndex = posts.findIndex((post) => post.link === router.pathname);
  // const prevPost = posts[(postIndex = 1)];
  // const nextPost = posts[postIndex - 1];

  return (
    <PageLayout>
      <Head>
        <title>{`${post.title} – ${site.author} (${site.name})`}</title>
      </Head>
      <article>
        <div>
          <MDXProvider components={mdxCodeComponents}>
            {post.content}
          </MDXProvider>
        </div>
      </article>
    </PageLayout>
  );
}
