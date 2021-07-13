import Page from '@layouts/Page';
import BlogList from '@components/BlogList';
import { getFilesByFrontMatter } from '@utils/mdx';
import { StyledHeader } from '@components/Prose';
import Container from '@components/Container';

const BlogIndex = ({ posts }) => {
  return (
    <Page>
      <section>
        <Container>
          <StyledHeader
            title="Blog"
            subtitle="Projects, notes, tutorials and other cool things"
          />
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
