import Page from '@layouts/Page';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import Figure from './Figure';
import SEO from './SEO';
import tw, { styled } from 'twin.macro';
import Badge from './Badge';
import { StyledHeader, StyledHeading, StyledHR, StyledText } from './Prose';
import Container from './Container';

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
      <Container as="article">
        <StyledHeader title={title} subtitle={description} />
        <div className="grid items-center max-w-xl grid-cols-3 gap-3 mx-auto my-8 text-sm leading-none text-gray-500">
          <div>
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
            <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
          </div>
          <div>
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

        {/* <StyledHR /> */}

        <Figure {...image} priority="true" />
        {children}
      </Container>
    </Page>
  );
};

export default BlogPost;
