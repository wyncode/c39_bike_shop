import React from 'react';
import { Image, Card, Container } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/repairtracker.css';
import ProgressBar from '../components/ProgressBar';

const RepairTracker = () => {
  return (
    <>
      <h1 class="text-center">Repairs Tracker</h1>
      <ProgressBar />
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
      <p>Flat Tire Repair: $20</p>
      <hr className="line" />
      <p>Sub Total: $20</p>
    </>
  );
};

export default RepairTracker;
