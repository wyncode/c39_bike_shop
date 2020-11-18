import React from 'react';
import { Card } from 'react-bootstrap';

const BikeShopCard = () => {
  return (
    <div>
      <Card style={{ width: '16rem' }}>
        <Card.Img src="holder.js/171x180" alt="Bike Shop Logo" />
        <Card.Title>Bike Shop Name</Card.Title>
        <Card.Text>Contact Information</Card.Text>
      </Card>
    </div>
  );
};

export default BikeShopCard;
