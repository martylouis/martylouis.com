import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* Stitches CSS for SSR */}
            <style
              id="stitches"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
          </>
        ),
      };
      // eslint-disable-next-line no-empty
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
