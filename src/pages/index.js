import Container from '@components/Container';
import Page from '@layouts/Page';
import { getAllPosts } from '@utils/mdx';
import Link from 'next/link';

export default function Index({ posts }) {
  return (
    <Page>
      <Container size="md">
        <header tw="mt-32 flex justify-center flex-col max-w-[60ch]">
          <p tw="text-3xl mb-2 font-light italic">Oh hello&hellip;</p>
          <h1 tw="mb-6 tracking-tight text-5xl text-gray-800 dark:text-gray-100">
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
    </Page>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
