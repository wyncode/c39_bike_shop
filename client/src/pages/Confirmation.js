import React from 'react';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/confirmation.css';
import { Image, Card, Container } from 'react-bootstrap';

const Confirmation = () => {
  return (
    <>
      <h1 className="confirmtitle">You are all set!</h1>
      <Image
        src="https://i.imgur.com/UyR3ZxG.png"
        className="mt-5 mb-5 bicycleImage"
      />
      <h1 className="awaitingtitle">Awaiting bike drop off</h1>
      <Card>
        <Container className="DT">
          <Card.Body>12/25/20</Card.Body>
        </Container>
        <Container className="DT">
          <Card.Body>5:00PM</Card.Body>
        </Container>
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
