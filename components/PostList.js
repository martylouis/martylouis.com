import Link from 'next/link';
import tinytime from 'tinytime';

const dateTemplate = tinytime('{MM} {DD}, {YYYY}');
const dateTimeTemplate = tinytime('{YYYY}-{Mo}-{DD}');

export default function PostList({ posts }) {
  // const postDate = new Date(date);
  return (
    <ol>
      {posts.map(({ title, slug, published, excerpt }) => {
        const date = new Date(published);
        return (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a className="block px-4 pt-2 -mx-4 border-2 border-transparent rounded-lg hover:border-gray-200">
                <h3 className="mt-0 text-3xl font-extrabold tracking-tight">
                  {title}
                </h3>
                <p>
                  <time dateTime={dateTimeTemplate.render(date)}>
                    {published}
                  </time>
                </p>
                <p>{excerpt}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
