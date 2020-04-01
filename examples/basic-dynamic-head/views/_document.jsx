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
          <title>Default Title</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
