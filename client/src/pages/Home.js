import React from 'react';
import HeroImage from '../components/HeroImage';
import InfoCards from '../components/InfoCards';
import FeaturedShops from '../components/FeaturedShops';
import AboutUs from '../components/AboutUs';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';
import '../components/styles/homepage.css';

const Home = () => {
  return (
    <>
      <Navigation />
      <HeroImage />
      <InfoCards />
      <FeaturedShops />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
