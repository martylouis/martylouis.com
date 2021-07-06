import Page from '@layouts/Page';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import Figure from './Figure';
import SEO from './SEO';
import tw, { styled } from 'twin.macro';
import Badge from './Badge';

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
      <header className="my-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="flex items-center">
          <div className="flex flex-wrap items-center text-sm leading-none tracking-wide text-gray-500">
            <span className="mr-2">
              {format(parseISO(datePublished), 'MMM dd, yyyy')}
            </span>
            <span className="mr-2 text-gray-300">&bull;</span>
            <span className="mr-2">{readingTime.text}</span>
            {tags && (
              <>
                <span className="mr-2 text-gray-300">&bull;</span>
                <span className="sr-only" css={{ '& > span + span': tw`mr-2` }}>
                  Tags:
                </span>
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </>
            )}
          </div>
        </div>
      </header>
      <Figure {...image} />
      <div className="prose">{children}</div>
    </Page>
  );
};

export default BlogPost;
