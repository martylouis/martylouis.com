import BlogList from '@components/BlogList';
import Box from '@components/Box';
import Container from '@components/Container';
import Emoji from '@components/emoji';
import Tabs from '@components/tabs';
import { H3 } from '@components/typography';
import { hero, services } from '@data/home';
import Page from '@layouts/Page';
import Image from 'next/image';
import Link from 'next/link';
import tw from 'twin.macro';

const { heading, subheading, photo } = hero;

export default function Index() {
  return (
    <Page>
      <Container size="md">
        <header tw="h-screen flex justify-center flex-col max-w-[60ch]">
          <p tw="text-3xl mb-2 font-light italic">Oh hello&hellip;</p>
          <h1 tw="mb-6 tracking-tight text-5xl text-gray-800 dark:text-gray-100">
            I&rsquo;m Marty &mdash; I make websites, apps, and brands from
            Destin, Florida
          </h1>
        </header>
      </Container>
    </Page>
  );
}

// export const getStaticProps = async () => {
//   const posts = getAllPosts();

//   return {
//     props: { posts },
//   };
// };
