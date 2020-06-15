import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ColorGallery from '../components/ColorGallery';
import { ButtonLink } from '../components/Buttons';

const HomePage = () => (
  <Layout>
    <SEO keywords={[`martylouis`]} title="Design & Code by Marty Louis" />
    <section>
      <div className="container mx-auto">
        <h1 className="mt-24 font-serif text-6xl font-extrabold text-gray-100">
          Design & Code.
        </h1>
        <p className="max-w-lg text-2xl">
          Hey!{` `}
          <span aria-label="hand wave" role="img">
            👋
          </span>
          {` `}
          I’m Marty Louis, a UX Designer and Front-End Web Developer. Check out
          what I've been working on, writing, or{` `}
          <Link
            className="inline-block font-semibold border-b-2 text-brand-green-600 border-brand-green-600"
            to="/contact"
          >
            get in touch
          </Link>
          .
        </p>
        <p className="mt-8">
          <ButtonLink
            className="bg-brand-green-700 hover:bg-brand-green-800"
            to="/hello-world"
          >
            Hello World »
          </ButtonLink>
          <ButtonLink to="/hello-world">Hello World »</ButtonLink>
        </p>
        <div className="mt-8">
          <div className="inline-block px-2 py-1 text-xs font-bold text-purple-800 bg-purple-300 rounded-full">
            Label
          </div>
          <div className="inline-block px-2 py-1 text-xs font-bold text-gray-900 bg-yellow-300 rounded-full">
            JavaScript
          </div>
        </div>
        <div className="mt-8">
          <ColorGallery color="brand-green" />
          <ColorGallery color="green" />
          <ColorGallery color="gray" />
          <ColorGallery color="brand-purple" />
          <ColorGallery color="purple" />
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
