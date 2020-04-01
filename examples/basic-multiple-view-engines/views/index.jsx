import React from 'react';
import { Head } from '@react-ssr-with-less/express';

const Index = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Home Page - @react-ssr-with-less/express</title>
      </Head>
      <p>{props.message}</p>
      <a href="/about">Go to the about page</a>
    </React.Fragment>
  );
};

export default Index;
