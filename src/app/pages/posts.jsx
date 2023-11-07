import { Container } from '@mui/material';
import * as React from 'react';
import Header from '../components/Header';
import { getPosts } from '../lib/wordpress';

export default function Posts({ posts }) {
  return (
    <Container>
      <Header />
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
