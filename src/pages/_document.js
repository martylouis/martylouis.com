import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="en-US" dir="ltr">
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;800;900&display=swap"
              rel="stylesheet"
            />
            <meta
              httpEquiv="Content-Type"
              content="text/html; charset=ISO-8859-1"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
