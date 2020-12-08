import Head from 'next/head';
import { Hero, Services, Projects, Blog } from '@components/Home';
import { Page } from '@components/Layout';

export default function Index() {
  return (
    <Page>
      <Head>
        <title>Marty Louis</title>
      </Head>
      <Hero />
      <Services />
      <Projects />
      <Blog />
    </Page>
  );
}
