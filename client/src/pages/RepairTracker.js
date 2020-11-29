import React from 'react';
import { Image, Card } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/repairtracker.css';

const RepairTracker = () => {
  return (
    <>
      <h1 class="text-center">Repairs Tracker</h1>
      <Image
        src="https://imgur.com/wE9rGJ8.png"
        className="mt-5 mb-5 bicycleImage"
      />
      <h1 class="text-center">Currently in Repair</h1>
      <Card class="text-center"></Card>
      <Card></Card>
      <BikeShopCard />
      <h1 class="text-center">Add service order here</h1>
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
