import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const HomePage = () => (
  <Layout>
    <SEO keywords={[`martylouis`]} title="Design & Code by Marty Louis" />
    <section>
      <div className="container mx-auto">
        <h1 className="mt-24 text-5xl font-black text-gray-100">
          Design & Code.
        </h1>
        <p className="max-w-lg text-lg">
          Hey! <span aria-label="hand wave" role="img">👋</span> I’m Marty Louis, a UX Designer and Front-End Web Developer. Check out what I've been working on, writing, or <Link className="inline-block text-green-600 border-b-2 border-green-600" to="/contact">get in touch</Link>.
        </p>
      </div>
    </section>
  </Layout>
);

export default HomePage;
