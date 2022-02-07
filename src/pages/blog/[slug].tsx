import { allPosts } from '.contentlayer/data';
import { Post as PostType } from '.contentlayer/types';
import Container from '@/components/Container';
import MdxComponents from '@/components/MdxComponents';
import PageLayout from '@/components/PageLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const BlogPosts = ({ post }: { post: PostType }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <PageLayout>
      <Container>
        <h1>{post.title}</h1>
        {console.log(post.body.code)}
        <MDXContent components={MdxComponents} />
      </Container>
    </PageLayout>
  );
};

export default BlogPosts;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
};
