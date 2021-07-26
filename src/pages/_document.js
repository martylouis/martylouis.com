import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from 'stitches.config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssString() }}
            />
          </>
        ),
      };
    } finally {
    }
  }

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
