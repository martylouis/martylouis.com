import { NextSeo } from 'next-seo';
import { Page } from '@components/layout';
import ContactForm from '@components/contact-form';

export default function Contact() {
  return (
    <Page>
      <NextSeo
        title={'Marty Louis'}
        description={'Marty Louis personal blog!'}
      />
      <div className="max-w-4xl px-8 mx-auto my-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">Let’s work together</h1>
            <p className="my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              sit.
            </p>
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
