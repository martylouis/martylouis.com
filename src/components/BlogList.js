// import { useState } from 'react';
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
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
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
                {format(parseISO(frontMatter.datePublished), 'MMM dd, yyyy')}
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
