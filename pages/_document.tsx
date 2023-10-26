/* eslint-disable @next/next/no-page-custom-font */
// Next.js Custom Document: https://nextjs.org/docs/advanced-features/custom-document
// Next.js Custom Font: https://nextjs.org/docs/messages/no-page-custom-font


import { Children } from 'react';
import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';


class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [ ...Children.toArray(initialProps.styles), sheets.getStyleElement() ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.svg' />
          <link
            href='https://fonts.googleapis.com/css2?family=Itim&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
