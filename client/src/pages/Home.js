import React from 'react';
import HeroImage from '../components/HeroImage';
import InfoCards from '../components/InfoCards';
import FeaturedShops from '../components/FeaturedShops';
import AboutUs from '../components/AboutUs';
import Navigation from '../components/navigation';
import SocialMedia from '../components/SocialMedia';
import '../components/styles/homepage.css';

const Home = () => {
  return (
    <>
      <Navigation />
      <HeroImage />
      <InfoCards />
      <FeaturedShops />
      <AboutUs />
      <SocialMedia />
    </>
  );
};

export default Home;
