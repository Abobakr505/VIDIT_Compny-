import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import About from '../components/About';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <About />
      <FAQ />
    </>
  );
};

export default Home;