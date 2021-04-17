import { useState } from 'react';
import { Page } from '@components/layout';
import Link from 'next/link';
import { getAllFilesByFrontMatter } from '@lib/getMdxFilesByFrontMatter';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

const BlogIndex = ({ posts }) => {
  const [searchValue, setSearchValue] = useState(''); // for future search!
  const getSortedBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.datePublished)) - Number(new Date(a.datePublished))
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
                <a className="block space-y-3">
                  {frontMatter.image.src && (
                    <figure>
                      <Image
                        src={frontMatter.image.src}
                        width={768}
                        height={400}
                        alt={frontMatter.image.alt}
                        layout="responsive"
                        className="object-cover rounded"
                      />
                    </figure>
                  )}
                  <h2 className="font-bold md:text-xl">{frontMatter.title}</h2>
                  <p className="text-sm text-gray-500">
                    {format(
                      parseISO(frontMatter.datePublished),
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
