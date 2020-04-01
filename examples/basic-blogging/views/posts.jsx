import React from 'react';
import { Head } from '@react-ssr-with-less/express';

const Post = ({ post }) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {post.title} - basic-blogging
        </title>
      </Head>
      <h1>
        {post.title}
      </h1>
      <pre>
        {post.body}
      </pre>
    </React.Fragment>
  );
};

export default Post;
