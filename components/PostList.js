import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a className="block px-4 pt-2 -mx-4 border-2 border-transparent rounded-lg hover:border-gray-200">
              <h3 className="mt-0 text-3xl font-extrabold tracking-tight">
                {post.title}
              </h3>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
}
