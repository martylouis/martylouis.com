import Image from 'next/image';
import Container from './Container';
import { ProseText } from './Prose';
import tw, { css } from 'twin.macro';
import { format, parseISO } from 'date-fns';

const PageHeader = ({ title, description, ...meta }) => {
  const { datePublished, readingTime } = meta;

  return (
    <header tw="mt-8 sm:mt-24">
      <Container isGrid tw="mb-6">
        <ProseText
          as="h1"
          size="lg"
          css={{
            ...tw`mb-0 text-5xl font-extrabold tracking-tighter`,
          }}
        >
          {title}
        </ProseText>
        {description && (
          <ProseText
            css={{
              ...tw`mt-3 text-xl font-medium text-gray-500 dark:text-gray-400`,
            }}
          >
            {description}
          </ProseText>
        )}
        {datePublished && (
          <div tw="flex space-x-2 text-sm font-medium text-gray-500">
            <span>{format(parseISO(datePublished), 'MMM dd, yyyy')}</span>
            <span tw="text-gray-400 dark:text-gray-600">•</span>
            {readingTime && <span>{readingTime.text}</span>}
          </div>
        )}
      </Container>
    </header>
  );
};

export default PageHeader;
