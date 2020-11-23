import React from 'react';
import ConfirmTitle from '../components/ConfirmTitle';
import BikeImg from '../components/BikeImg';
import AwaitBike from '../components/AwaitBike';
import BikeShopCard from '../components/BikeShopCard';
import Estimate from '../components/Estimate';
import DropOff from '../components/DropOff';
// import InfoCards from '../components/InfoCards';
// import FeaturedShops from '../components/FeaturedShops';
// import AboutUs from '../components/AboutUs';
// import Navigation from '../components/navigation';
// import SocialMedia from '../components/SocialMedia';
import '../components/styles/confirmation.css';
import '../App.css';

const Confirmation = () => {
  return (
    <>
      <ConfirmTitle />
      <BikeImg />
      <AwaitBike />
      <BikeShopCard />
      <Estimate />
      <DropOff />
    </>
  );
};

export default Confirmat;
