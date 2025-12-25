import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import ProductsPreview from '../components/PortfolioPreview';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProductsPreview />
      <About />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;