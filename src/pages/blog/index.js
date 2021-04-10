import { useState } from 'react';
import { Page } from '@components/layout';
import Link from 'next/link';
import { getAllFilesByFrontMatter } from '@lib/getMdxFilesByFrontMatter';
import { format, parseISO } from 'date-fns';

const BlogIndex = ({ posts }) => {
  const [searchValue, setSearchValue] = useState(''); // for future search!
  const getSortedBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.date_published)) - Number(new Date(a.date_published))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Page>
      <div className="container">
        <header className="my-16 md:my-24">
          <h1 className="mb-2 text-3xl font-black tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="text-lg text-gray-600">
            Projects, notes, tutorials, and cool things.
          </p>
        </header>

        <ul className="grid gap-12 md:grid-cols-3 sm:grid-cols-2">
          {getSortedBlogPosts.map((frontMatter) => (
            <li key={frontMatter.title}>
              <Link href={`/blog/${frontMatter.slug}`}>
                <a>
                  <div className="mb-4 aspect-w-16 aspect-h-10">
                    <img
                      className="object-cover mb-4 shadow-md rounded-xl"
                      src={`//placehold.it/600x800?text=${frontMatter.title}`}
                      alt={frontMatter.title}
                    />
                  </div>
                  <h2 className="mb-4 font-bold md:text-xl">
                    {frontMatter.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {format(
                      parseISO(frontMatter.date_published),
                      'MMM dd, yyyy'
                    )}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const posts = await getAllFilesByFrontMatter('blog');

  return { props: { posts } };
}
