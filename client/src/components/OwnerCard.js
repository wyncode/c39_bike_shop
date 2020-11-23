import React from 'react';
import { Card } from 'react-bootstrap';

const OwnerCard = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="ownercard">
        <Card.Img variant="top" src="https://i.imgur.com/dzTEdUH.png" />
        <Card.Body>
          <Card.Title>The Miami Bike Shop</Card.Title>
          <Card.Text>Review</Card.Text>
          <hr />
        </Card.Body>
      </Card>
    </div>
  );
};

export default OwnerCard;
