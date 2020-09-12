import PostContent from '../../components/PostContent';
import { getPostBySlug, getAllPosts } from '../../lib/api';

const Post = ({ post }) => <PostContent post={post} />;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'date',
    'excerpt',
    'content',
  ]);

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false,
  };
}

export default Post;
