import Page from '@layouts/Page';
import BlogList from '@components/BlogList';
import { getFilesByFrontMatter } from '@utils/mdx';
import Container from '@components/Container';

const BlogIndex = ({ posts }) => {
  return (
    <Page>
      <section>
        <Container>
          <h1>Blog</h1>
          <p>Projects, notes, tutorials and other cool things!</p>
        </Container>
      </section>
      <section>
        <Container>
          <BlogList posts={posts} />
        </Container>
      </section>
    </Page>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const posts = await getFilesByFrontMatter('posts');

  return { props: { posts } };
}
