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
      <Head>
        <title>
          {heading} – {site.author} ({site.name})
        </title>
      </Head>
      <section className="mt-24">
        <div className="container max-w-3xl px-4 mx-auto">
          <p>
            Hey! I’m @martylouis{' '}
            <span role="img" aria-label="high fives">
              🙌
            </span>
          </p>
          <h1 className="text-3xl font-extrabold">{heading}</h1>
          <p>
            I design, build and maintain websites and brands that people love. I
            work remotely with agencies, startups, and businesses of all sizes.
          </p>
        </div>
      </section>
      <section>
        <div className="container max-w-3xl px-4 mx-auto">
          <header>
            <h2 className="text-xl">Blog</h2>
          </header>
          {morePosts.length > 0 && <PostList posts={allPosts} />}
          <div>
            <Link href="/blog">
              <a>View All Blog Posts »</a>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
}
