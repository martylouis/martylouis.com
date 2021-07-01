import Page from '@layouts/Page';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import BlogPostImage from './BlogPostImage';
import SEO from './SEO';

const BlogPost = ({ frontMatter, children }) => {
  const { title, description, datePublished, readingTime, slug, image, tags } =
    frontMatter;

  return (
    <Page>
      <SEO
        title={`${title} | martylouis.com`}
        description={description}
        datePublished={datePublished}
        image={image.src}
      />
      <article>
        <header className="mt-10 mb-10">
          <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="space-x-2 text-sm tracking-wide text-gray-600">
            <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
            <span className="text-gray-100">&bull;</span>
            <span>{readingTime.text}</span>
          </p>
        </header>

        <BlogPostImage image={image} />

        <div className="prose">{children}</div>
      </article>
    </Page>
  );
};

export default BlogPost;
