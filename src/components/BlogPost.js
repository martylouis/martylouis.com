import Page from '@layouts/Page';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Watch } from 'react-feather';
import Figure from './Figure';
import SEO from './SEO';
import tw, { styled } from 'twin.macro';
import Badge from './Badge';
import { ProseHR, ProseText } from './Prose';
import Container from './Container';

const BlogPost = ({ frontMatter, children }) => {
  console.log(frontMatter);
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
      <article id={slug}>
        {/* <StyledHeader title={title} subtitle={description} /> */}
        <header className="mt-16">
          <Container isGrid>
            <ProseText
              as="h1"
              size="lg"
              css={{
                ...tw`mb-4 font-serif text-5xl font-normal`,
                ...tw`text-gray-800 dark:text-gray-200`,
              }}
            >
              {title}
            </ProseText>
            <ProseText
              css={{
                ...tw`mb-6 text-xl font-medium text-gray-600 dark:text-gray-400`,
              }}
            >
              {description}
            </ProseText>
            <div className="flex justify-between px-6 mb-6 space-x-2 text-sm leading-none md:px-0">
              <div className="flex space-x-4">
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
                <div className="flex items-center">
                  <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
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
          </Container>
        </header>

        {/* <ProseHR css={{ ...tw`my-8` }} /> */}

        <Container isGrid>
          <Figure {...image} priority="true" />
          {children}
        </Container>
      </article>
    </Page>
  );
};

export default BlogPost;
