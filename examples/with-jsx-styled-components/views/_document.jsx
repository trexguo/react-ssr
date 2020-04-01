import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr-with-less/express';
import styled from 'styled-components';

const Body = styled.body`
  margin: 0;
  padding: 0;
`;

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>An example of @react-ssr-with-less/express</title>
        </Head>
        <Body>
          <Main />
        </Body>
      </html>
    );
  }
};
