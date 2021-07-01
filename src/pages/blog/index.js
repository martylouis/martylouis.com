import Page from '@layouts/Page';
import BlogList from '@components/BlogList';
import { getFilesByFrontMatter } from '@utils/mdx';

const BlogIndex = ({ posts }) => {
  return (
    <Page>
      <div className="container">
        <header className="my-16 md:my-24">
          <h1 className="mb-2 text-3xl font-black tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="text-lg text-gray-600">
            Projects, notes, tutorials, and cool things.
          </p>
        </header>
        <BlogList posts={posts} />
      </div>
    </Page>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const posts = await getFilesByFrontMatter('posts');

  return { props: { posts } };
}
