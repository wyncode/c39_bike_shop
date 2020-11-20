import React from 'react';
import HeroImage from '../components/HeroImage';
import InfoCards from '../components/InfoCards';
import FeaturedShops from '../components/FeaturedShops';
import AboutUs from '../components/AboutUs';
import Navigation from '../components/navigation';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navigation />
      <HeroImage />
      <InfoCards />
      <FeaturedShops />
      <AboutUs />
    </>
  );
};

export default Home;
