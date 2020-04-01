import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr-with-less/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>with-jsx-material-ui - @react-ssr-with-less/express</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
