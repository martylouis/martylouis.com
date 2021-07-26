import Page from '@layouts/Page';
import BlogList from '@components/BlogList';
import { getFilesByFrontMatter } from '@utils/mdx';
import Container from '@components/Container';
import { projects } from '@data/home';
import PageHeader from '@components/PageHeader';

const BlogIndex = ({ posts }) => {
  return (
    <Page>
      <PageHeader
        title="Blog"
        description="Latest articles, projects, notes, and other cool stuff"
      />
      <section>
        <Container isGrid>
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
