import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import BlogPostImage from './BlogPostImage';
import { Page } from './layout';
import SEO from './SEO';

const BlogPost = ({ children, frontMatter }) => {
  const {
    title,
    description,
    datePublished,
    readingTime,
    slug,
    image,
    tags,
  } = frontMatter;

  return (
    <Page>
      <SEO
        title={`${title} | martylouis.com`}
        description={description}
        datePublished={datePublished}
        image={image.src}
      />
      <article className="wrapper">
        <div className="my-8">
          <Link href="/blog" passHref>
            <a className="flex items-center space-x-2 text-gray-600">
              <ArrowLeft size="16" /> <span>Blog</span>
            </a>
          </Link>
        </div>

        <header className="mt-10 mb-10">
          <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="space-x-2 text-sm tracking-wide text-gray-600">
            <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
            <span className="text-gray-200">&bull;</span>
            <span>{readingTime.text}</span>
          </p>
        </header>

        <BlogPostImage image={image} />

        {children}
      </article>
    </Page>
  );
};

export default BlogPost;
