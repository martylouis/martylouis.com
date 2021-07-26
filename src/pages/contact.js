import ContactForm from '@components/contact-form';
import Container from '@components/Container';
import PageHeader from '@components/PageHeader';
import SEO from '@components/SEO';
import Page from '@layouts/Page';

const meta = {
  title: 'Contact',
  description: 'Let’s work together!',
};

export default function Contact() {
  return (
    <Page>
      <SEO
        title={`${meta.title} - martylouis.com`}
        description={meta.description}
      />
      <div>
        <PageHeader title={meta.title} description={meta.description} />
        <Container isGrid>
          <div>{`{Contact Form goes here!}`}</div>
        </Container>
      </div>
    </Page>
  );
}
