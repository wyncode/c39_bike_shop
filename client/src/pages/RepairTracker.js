import React from 'react';
import { Image, Card } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';

const RepairTracker = () => {
  return (
    <>
      <h1 className="confirmtitle">You are all set!</h1>
      <Image
        src="https://imgur.com/wE9rGJ8.png"
        className="mt-5 mb-5 bicycleImage"
      />
      <h1 className="awaitingtitle">Awaiting bike drop off</h1>
      <Card className="datetime d-flex flex-row">
        <Card.Body className="dateBody d-flex flex-row">
          <div className="datetime">
            <Card.Text>11-22-22</Card.Text>
            <Card.Text>11:11AM</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Text className="repairtime">
          Simple repairs may take up to 24-48 hours. In more complex cases,
          repairs may take longer.
        </Card.Text>
      </Card>
      <BikeShopCard />
      <h1>Add service order here</h1>
      <div>
        <h1 className="dropofftitle">Drop Off Instructions</h1>
        <p className="dropoffp">
          Please note this is an estimated subtotal. Total cost may be more due
          to additional shop fees, taxes or other necessary repairs.
        </p>
      </div>
    </>
  );
};

export default RepairTracker;
