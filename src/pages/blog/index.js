import BlogList from '@components/BlogList';
import Container from '@components/Container';
import PageHeader from '@components/PageHeader';
import Page from '@layouts/Page';
import { getAllPosts } from '@utils/mdx';
import Link from 'next/link';

export default function Index({ posts }) {
  return (
    <Page>
      <PageHeader>Blog</PageHeader>
      <Container size="md">
        <BlogList posts={posts} />
      </Container>
    </Page>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
