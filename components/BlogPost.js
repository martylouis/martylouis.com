import PageLayout from '@components/PageLayout';
import Container from './Container';
import Figure from './Figure';
import PageHeader from './PageHeader';
import SEO from './SEO';
import tw, { css } from 'twin.macro';
import { ProseText } from './Prose';
import { format, parseISO } from 'date-fns';

const BlogPost = ({ frontMatter, children }) => {
  const { title, description, datePublished, readingTime, slug, image, tags } =
    frontMatter;

  return (
    <PageLayout>
      <SEO
        title={`${title} | martylouis.com`}
        description={description}
        datePublished={datePublished}
        image={image.src}
      />

      <Container as="article">
        <PageHeader>{title}</PageHeader>
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
            {readingTime && (
              <>
                <span tw="text-gray-400 dark:text-gray-600">•</span>
                <span>{readingTime.text}</span>
              </>
            )}
          </div>
        )}
        <Figure
          {...image}
          priority="true"
          css={{ ...tw`sm:-mx-8 md:-mx-24` }}
        />
        {children}
      </Container>
    </PageLayout>
  );
};

export default BlogPost;
