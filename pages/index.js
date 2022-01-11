import Container from '@components/Container';
import PageLayout from '@components/PageLayout';
import { getAllPosts } from '@utils/mdx';
import Link from 'next/link';
import tw from 'twin.macro';

export default function Index({ posts }) {
  return (
    <PageLayout>
      <Container>
        <header tw="flex flex-col justify-center mt-32 max-w-[60ch]">
          <p tw="mb-2 text-3xl italic font-light">Oh hello&hellip;</p>
          <h1 tw="mb-6 text-5xl tracking-tight text-gray-800 dark:text-gray-100">
            I&rsquo;m Marty &mdash; I make websites, apps, and brands from
            Destin, Florida
          </h1>
        </header>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link href={`blog/${post.slug}`}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
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
