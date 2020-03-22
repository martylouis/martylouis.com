import React from "react";
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found!" />
    <div>
      <h1>Page Not Found <span aria-label="open mouth emoji" role="img">😲</span></h1>
    </div>
  </Layout>
);

export default NotFoundPage;
