import React from 'react';

import HeroImage from '../components/HeroImage';
import HowItWorks from '../components/HowItWorks';
import InfoCards from '../components/InfoCards';
import FeaturedShops from '../components/FeaturedShops';
// import AboutUs from '../components/AboutUs';
import Navigation from '../components/navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeroImage />
      <HowItWorks />
      <InfoCards />
      <FeaturedShops />
    </div>
  );
};

export default Home;
