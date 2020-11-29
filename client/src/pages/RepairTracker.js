import React from 'react';
import { Image, Card } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';

const RepairTracker = () => {
  return (
    <>
      <h1 className="confirmtitle">Repairs Tracker</h1>
      <Image
        src="https://imgur.com/wE9rGJ8.png"
        className="mt-5 mb-5 bicycleImage"
      />
      <h1 className="awaitingtitle">Currently in Repair</h1>
      <Card className="datetime d-flex flex-row"></Card>
      <Card></Card>
      <BikeShopCard />
      <h1>Add service order here</h1>
      <div>
        <h1 className="dropofftitle">Repairs Selected</h1>
        <p className="dropoffp">
          Please note this is an estimated subtotal. Total cost may be more due
          to additional shop fees, taxes or other necessary repairs.
        </p>
      </div>
    </>
  );
};

export default RepairTracker;
