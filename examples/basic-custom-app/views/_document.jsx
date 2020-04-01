import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr-withLess/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>An example of @react-ssr-withLess/express</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
