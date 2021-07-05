import ContactForm from '@components/contact-form';
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
        <h1 className="text-4xl font-bold">{meta.title}</h1>
        <p className="my-8">{meta.description}</p>
        {/* <ContactForm /> */}
      </div>
    </Page>
  );
}
