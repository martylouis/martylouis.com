import Page from '@layouts/Page';
import Container from './Container';
import Figure from './Figure';
import PageHeader from './PageHeader';
import SEO from './SEO';
import tw, { css } from 'twin.macro';

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
      <article id={slug}>
        <PageHeader description={description} {...frontMatter}>
          {title}
        </PageHeader>
        <Container isGrid>
          <Figure
            {...image}
            priority="true"
            css={{ ...tw`sm:-mx-8 md:-mx-24` }}
          />
          {children}
        </Container>
      </article>
    </Page>
  );
};

export default BlogPost;
