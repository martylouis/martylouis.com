import Page from '@layouts/Page';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import Figure from './Figure';
import SEO from './SEO';
import tw, { styled } from 'twin.macro';
import Badge from './Badge';
import { StyledHeading, StyledText } from './Prose';

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
      <header className="mb-8">
        <StyledHeading size="xl" css={{ ...tw`mb-2` }}>
          {title}
        </StyledHeading>
        <StyledText
          as="p"
          css={{ ...tw`mb-4 text-lg text-gray-500 md:text-xl` }}
        >
          {description}
        </StyledText>
        <div className="grid grid-cols-3 gap-3 mt-6 text-sm leading-none text-gray-500">
          <div>
            <span className="block mb-1 text-xs text-gray-400">Written by</span>
            <div className="flex items-center pr-2">
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
          <div>
            <span className="block mb-1 text-xs text-gray-400">
              Published on
            </span>
            <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
          </div>
          <div>
            <span className="block mb-1 text-xs text-gray-400">
              Reading time
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
      </header>
      <Figure {...image} priority="true" />
      {children}
    </Page>
  );
};

export default BlogPost;
