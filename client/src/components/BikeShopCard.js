import React from 'react';
import { Card, Container } from 'react-bootstrap';

const BikeShopCard = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Img src="holder.js/171x180" alt="Bike Shop Logo" />
          <Card.Title>Bike Shop Name</Card.Title>
          <Card.Text>Contact Information</Card.Text>
        </Card>
      </Container>
    </div>
  );
};

export default BikeShopCard;
