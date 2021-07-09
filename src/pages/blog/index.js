import Page from '@layouts/Page';
import BlogList from '@components/BlogList';
import { getFilesByFrontMatter } from '@utils/mdx';
import { StyledHeader } from '@components/Prose';

const BlogIndex = ({ posts }) => {
  return (
    <Page>
      <div className="container">
        <StyledHeader
          title="Blog"
          subtitle="Projects, notes, tutorials and other cool things"
        />
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
