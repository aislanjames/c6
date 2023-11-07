import { Container } from '@mui/material';
import * as React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostGrid from './components/PostGrid';

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <PostGrid />
    </Container>
  );
}
