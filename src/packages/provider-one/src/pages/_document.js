import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { revalidate, flushChunks } from '@module-federation/nextjs-mf/utils';

class MyDocument extends Document {

  static async getInitialProps(ctx) {

    if (process.env.NODE_ENV === 'development' && !ctx.req.url.includes('_next')) {
      await revalidate().then(shouldReload => {
        if (shouldReload) {
          ctx.res.writeHead(302, { Location: ctx.req.url });
          ctx.res.end();
        }
      });
    }
    else {
      ctx?.res?.on('finish', () => {
        revalidate();
      });
    }
    const initialProps = await Document.getInitialProps(ctx);
    const chunks = await flushChunks();

    return {
      ...initialProps,
      chunks,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument