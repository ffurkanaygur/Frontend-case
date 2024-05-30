import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Products from './components/Products';
import WhyJoin from './components/WhyJoin';
import Testimonials from './components/Testimonials';
import Collection from './components/Collection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Products />
      <WhyJoin />
      <Testimonials />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
