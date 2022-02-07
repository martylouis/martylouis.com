import { useMDXComponent } from 'next-contentlayer/hooks';
import { Page as PageType } from '.contentlayer/types';
import { allPages } from '.contentlayer/data';
import PageLayout from '@/components/PageLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import MdxComponents from '@/components/MdxComponents';
import Container from '@/components/Container';

const Page = ({ page }: { page: PageType }) => {
  const MDXContent = useMDXComponent(page.body.code);
  return (
    <PageLayout>
      <Container>
        <h1>{page.title}</h1>
        <MDXContent components={MdxComponents} />
      </Container>
    </PageLayout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPages.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const page = allPages.find((post) => post.slug === params.slug);
  return { props: { page } };
};
