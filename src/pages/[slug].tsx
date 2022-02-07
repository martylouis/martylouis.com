import { allPages } from '.contentlayer/data';
import { Page as PageType } from '.contentlayer/types';
import Container from '@/components/Container';
import MdxComponents from '@/components/MdxComponents';
import PageLayout from '@/components/PageLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const Pages = ({ page }: { page: PageType }) => {
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

export default Pages;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPages.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const page = allPages.find((page) => page.slug === params.slug);
  return { props: { page } };
};
