import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../App.css';

const BikeShopCard = () => {
  return (
    <div>
      <Container className="shopcard">
        <Card>
          <Container>
            <Card.Img
              src="https://i.imgur.com/f9TIgMc.png"
              alt="Bike Shop Logo"
              className="bikecard"
            />
          </Container>
          <Container>
            <Card.Title>Bike Shop Name</Card.Title>
            <Card.Text>Contact Information</Card.Text>
          </Container>
        </Card>
      </Container>
    </div>
  );
};

export default BikeShopCard;
