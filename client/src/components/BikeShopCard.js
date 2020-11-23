import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../App.css';

const BikeShopCard = () => {
  return (
    <div>
      <Card className="d-flex flex-row">
        <Card.Body>
          <Card.Img
            className="shopimg1"
            src="https://i.imgur.com/50JZigU.png"
            alt="Bike Shop Logo"
          />
        </Card.Body>

        <Card.Body>
          <Card.Title>City Bikes</Card.Title>
          <Card.Text>888 Bike Chain Road, Miami, Florida, 33137</Card.Text>
          <Card.Text>305-305-3053</Card.Text>
          <Card.Text>305-305-3053</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BikeShopCard;
