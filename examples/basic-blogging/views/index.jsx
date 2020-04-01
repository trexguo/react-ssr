import React from 'react';
import { Head } from '@react-ssr-withLess/express';

const Index = ({ posts }) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          basic-blogging
        </title>
      </Head>
      {posts.map((post, index) => {
        return (
          <p key={index}>
            <a href={'/posts/' + post.id}>{post.title}</a>
          </p>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
