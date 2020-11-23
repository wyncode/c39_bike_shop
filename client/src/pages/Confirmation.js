import React from 'react';
import BikeImg from '../components/BikeImg';
import AwaitBike from '../components/AwaitBike';
import BikeShopCard from '../components/BikeShopCard';
import Estimate from '../components/Estimate';
import '../components/styles/confirmation.css';
import '../App.css';

const Confirmation = () => {
  return (
    <>
      <h1 className="confirmtitle">You are all set!</h1>
      <BikeImg />
      <AwaitBike />
      <BikeShopCard />
      <Estimate />
      <div>
        <h1 className="dropofftitle">Drop Off Instructions</h1>
        <p className="dropoffp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec non
          suspendisse adipiscing augue sit. Praesent convallis elit tempor
          habitant. Bikes are cool .
        </p>
      </div>
    </>
  );
};

export default Confirmation;
