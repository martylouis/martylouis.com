import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BlogList = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');
  const getSortedBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.datePublished)) - Number(new Date(a.datePublished))
    )
    .filter(({ frontmatter }) =>
      frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <ul className="grid gap-12 md:grid-cols-3 sm:grid-cols-2">
      {getSortedBlogPosts.map(({ frontmatter, slug }) => (
        <li key={frontmatter.title}>
          <Link href={`/blog/${slug}`}>
            <a className="block space-y-3">
              {frontmatter.image.src && (
                <figure>
                  <Image
                    src={frontmatter.image.src}
                    width={768}
                    height={400}
                    alt={frontmatter.image.alt}
                    layout="responsive"
                    className="object-cover rounded"
                  />
                </figure>
              )}
              <h2 className="font-bold md:text-xl">{frontmatter.title}</h2>
              <p className="text-sm text-gray-500">
                {format(parseISO(frontmatter.datePublished), 'MMM dd, yyyy')}
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
