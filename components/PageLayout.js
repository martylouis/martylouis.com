import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
