import Page from '@layouts/Page';
import Container from './Container';
import Figure from './Figure';
import PageHeader from './PageHeader';
import SEO from './SEO';

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
        <PageHeader title={title} description={description} {...frontMatter} />
        <Container isGrid>
          <Figure {...image} priority="true" />
          {children}
        </Container>
      </article>
    </Page>
  );
};

export default BlogPost;
