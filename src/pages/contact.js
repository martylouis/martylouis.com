import { Page } from '@components/layout';
import ContactForm from '@components/contact-form';
import SEO from '@components/SEO';

const meta = {
  title: 'Contact',
  description: 'Let’s work together!',
};

export default function Contact() {
  return (
    <Page>
      <SEO title={`${meta.title} Marty Louis`} description={meta.description} />
      <div className="max-w-4xl px-8 mx-auto my-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">{meta.title}</h1>
            <p className="my-8">{meta.description}</p>
            <div className="my-8">
              <h2 className="my-2 font-medium">Email me:</h2>
              <div className="text-2xl">
                <a className="text-green-700" href="##">
                  hello@martylouis.com
                </a>
              </div>
            </div>

            <h2 className="my-2 font-medium">Connect</h2>
            <ul>
              <li>Twitter &rarr;</li>
              <li>Twitter &rarr;</li>
              <li>Twitter &rarr;</li>
              <li>Twitter &rarr;</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </Page>
  );
}
