import React from 'react';
import BestProduct from '../components/BestProduct';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';
import HappenedIssue from '../components/HappenedIssue';
import Header from '../components/Header';
import Intro from '../components/Intro';
import MainBanner from '../components/MainBanner';
import ProductList from '../components/ProductList';
import WhatHappened from '../components/WhatHappened';
import './homepage.css';

function HomePage() {
  return (
    <div className='container'>
      <Header />
      <section id='banner' className='banner'>
        <MainBanner />
      </section>
      <section id='intro' className='intro'>
        <Intro />
      </section>
      <section id='best-product' className='best-product'>
        <BestProduct />
      </section>
      <section id='product-list' className='product-list'>
        <ProductList />
      </section>
      <section id='brand-story' className='brand-story'>
        <BrandStory />
      </section>
      <section id='happened-issue' className='happened-issue'>
        <HappenedIssue />
      </section>
      <section id='what-happened' className='what-happened'>
        <WhatHappened />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
