import React from 'react';
import Content from './Content';
import api from '../api'
import Footer from './Footer';
import Header from './Header';
export default function Home() {
  return (
    <>
    <Header />
      <Content title='Trending now' url={api.fetchTrending} />
      <Content title='Netflix original' url={api.fetchNetflixOriginals} />
      <Content title='Top rated' url={api.fetchTopRated} />
      <Footer />
    </>
  );
}
