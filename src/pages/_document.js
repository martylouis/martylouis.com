import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="en-US" dir="ltr">
          <Head>
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
