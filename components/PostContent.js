import site from '../data/site';
import PageLayout from './PageLayout';

import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
// import { useRouter } from 'next/router';

const mdxCodeComponents = {
  // pre: ({ className, ...props }) => ({}),
  // 'pre.code': ({ className, ...props }) => ({}),
};

export default function PostContent({ post }) {
  // const router = useRouter();
  // const postIndex = posts.findIndex((post) => post.link === router.pathname);
  // const prevPost = posts[(postIndex = 1)];
  // const nextPost = posts[postIndex - 1];

  return (
    <PageLayout>
      <Head title={`${post.title} – ${site.author} (${site.name})`} />
      <article className="my-16">
        <div className="container max-w-3xl px-4 mx-auto">
          <header className="my-16 text-center">
            <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
              {post.title}
            </h1>
            <p className="mt-0 text-sm">{post.date}</p>
          </header>
          <MDXProvider components={mdxCodeComponents}>
            {post.content}
          </MDXProvider>
        </div>
      </article>
    </PageLayout>
  );
}
