import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <About />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;