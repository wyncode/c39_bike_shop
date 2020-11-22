import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../App.css';

const BikeShopCard = () => {
  return (
    <div>
      <Card>
        <Container>
          <Card.Img
            className="shopimg1"
            src="https://i.imgur.com/50JZigU.png"
            alt="Bike Shop Logo"
          />
        </Container>
        <Card className="text-center">
          <Card.Body>
            <Card.Title className="shopinfo">City Bikes</Card.Title>
            <Card.Text className="shopinfo">
              888 Bike Chain Road, Miami, Florida, 33137
            </Card.Text>
            <Card.Text className="shopinfo">305-305-3053</Card.Text>
            <Card.Text className="shopinfo">Reviews</Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default BikeShopCard;
