import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a key={post.slug}>{post.title}</a>
          </Link>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
