import Container from '@/components/Container';
import PageLayout from '@/components/PageLayout';
import tw from 'twin.macro';

export default function Index({ posts }) {
  return (
    <PageLayout>
      <Container tw="bg-white dark:bg-gray-800">
        <h1>Homepage</h1>
      </Container>
    </PageLayout>
  );
}
