import BlogList from '@components/BlogList';
import Container from '@components/Container';
import PageHeader from '@components/PageHeader';
import PageLayout from '@components/PageLayout';
import { getAllPosts } from '@utils/mdx';
import Link from 'next/link';

export default function Index({ posts }) {
  return (
    <PageLayout>
      <PageHeader>Blog</PageHeader>
      <Container>
        <BlogList posts={posts} />
      </Container>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
