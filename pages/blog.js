import PageLayout from '../components/PageLayout';
import PostList from '../components/PostList';
import { getAllPosts } from '../lib/getPosts';

export default function BlogPage({ allPosts }) {
  const pageTitle = 'Blog';

  return (
    <PageLayout>
      <section className="my-16 bg-brand-900">
        <div className="container max-w-3xl px-4 mx-auto">
          <header className="my-16 text-center">
            <h1 className="text-5xl font-extrabold leading-snug tracking-tight">
              {pageTitle}
            </h1>
          </header>
          <PostList posts={allPosts} />
        </div>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
}
