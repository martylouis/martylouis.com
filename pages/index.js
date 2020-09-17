import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import { getAllPosts } from '../lib/getPosts';
import Link from 'next/link';
import PostList from '../components/PostList';
import site from '../data/site';
import { FeatherIcon } from '../components/Icon';

export default function Home({ allPosts }) {
  const morePosts = allPosts;
  const heading = 'Freelance Web Designer in Destin, Florida';

  return (
    <PageLayout>
      <Head
        title={`${heading} – ${site.author} (${site.name})`}
        description={site.meta.description}
      />

      {/* Intro */}
      <section className="my-24">
        <div className="container max-w-3xl px-4 mx-auto">
          <p className="text-xl">
            Hey! I’m <strong>@martylouis</strong>{' '}
            <span role="img" aria-label="nerd emoji">
              🤓
            </span>
          </p>
          <h1 className="text-5xl font-extrabold leading-tight">{heading}</h1>
          <p className="text-2xl leading-snug">
            I design, build and maintain websites and brands that people love. I
            work remotely with agencies, startups, and businesses of all sizes.
          </p>
        </div>
      </section>
      {/* /Intro */}
      {/* Blog */}
      <section className="my-24">
        <div className="container max-w-3xl px-4 mx-auto">
          <header className="flex items-baseline justify-between mt-24 mb-8 tracking-tight">
            <h2 className="font-extrabold text-green-700">
              From the Blog &hellip;
            </h2>
            <div>
              <Link href="/blog">
                <a className="flex items-center font-extrabold text-green-500">
                  All Posts <FeatherIcon name="arrowRight" className="ml-1" />
                </a>
              </Link>
            </div>
          </header>
          {morePosts.length > 0 && <PostList posts={allPosts} />}
        </div>
      </section>
      {/* /Blog */}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
}
