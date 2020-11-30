import React from 'react';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/confirmation.css';
import { Image, Card } from 'react-bootstrap';

const Confirmation = () => {
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
          <Card.Img src="https://imgur.com/mJ2AXNm.png"></Card.Img>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec non
          suspendisse adipiscing augue sit. Praesent convallis elit tempor
          habitant. Bikes are cool .
        </p>
      </div>
    </>
  );
};

export default Confirmation;
