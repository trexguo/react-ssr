import React from 'react';
import { Head } from '@react-ssr-withLess/express';

const Index = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Home Page - @react-ssr-withLess/express</title>
      </Head>
      <p>{props.message}</p>
      <a href="/about">Go to the about page</a>
    </React.Fragment>
  );
};

export default Index;
