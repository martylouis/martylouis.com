import Page from '@layouts/Page';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Watch } from 'react-feather';
import Figure from './Figure';
import SEO from './SEO';
import tw, { styled } from 'twin.macro';
import Badge from './Badge';
import { ProseHR, ProseHeading, ProseContent } from './Prose';

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
      <div as="article">
        {/* <StyledHeader title={title} subtitle={description} /> */}
        <div className="flex items-center max-w-xl mx-auto mt-6 space-x-2 text-sm leading-none text-gray-500 md:space-x-8">
          <div>
            <div className="flex items-center">
              <span className="block mr-1.5 flex-shrink-0">
                <Image
                  src="/avatar.jpg"
                  width="24px"
                  height="24px"
                  alt=""
                  className="rounded-full "
                />
              </span>
              <span>
                <a
                  href="https://twitter.com/martylouis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marty Thierry
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-1 text-gray-400">
              <Calendar size="16" />
            </span>
            <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1 text-gray-400">
              <Watch size="16" />
            </span>
            <span>{readingTime.text}</span>
          </div>
          {/* {tags && (
              <>
                <span className="mr-2 text-gray-300">&bull;</span>
                <span className="sr-only" css={{ '& > span + span': tw`mr-2` }}>
                  Tags:
                </span>
                {tags?.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </>
            )} */}
        </div>

        <ProseHR css={{ ...tw`max-w-xl mx-auto my-8` }} />

        <Figure {...image} priority="true" />
        <ProseContent>{children}</ProseContent>
      </div>
    </Page>
  );
};

export default BlogPost;
