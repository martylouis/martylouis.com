import Image from 'next/image';
import Container from './Container';
import { ProseText } from './Prose';
import tw, { css } from 'twin.macro';
import { format, parseISO } from 'date-fns';

const PageHeader = ({ title, description, ...meta }) => {
  const { datePublished, readingTime } = meta;

  return (
    <header className="mt-16">
      <Container isGrid tw="mb-8">
        <ProseText
          as="h1"
          size="lg"
          css={{
            ...tw`mb-0 font-serif text-5xl font-normal`,
            ...tw`text-gray-800 dark:text-gray-200`,
          }}
        >
          {title}
        </ProseText>
        <ProseText
          css={{
            ...tw`my-3 text-xl font-light text-gray-600 dark:text-gray-400`,
          }}
        >
          {description}
        </ProseText>
        {datePublished && (
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
              {datePublished && (
                <div className="flex items-center">
                  {format(parseISO(datePublished), 'MMM dd, yyyy')}
                </div>
              )}
            </div>
            {readingTime && (
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <span>{readingTime.text}</span>
              </div>
            )}
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
        )}
      </Container>
    </header>
  );
};

export default PageHeader;
