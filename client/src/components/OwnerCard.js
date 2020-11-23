import React from 'react';
import { Card } from 'react-bootstrap';

const OwnerCard = () => {
  return (
    <div class="d-flex justify-content-center">
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/dzTEdUH.png" />
        <Card.Body>
          <Card.Title
            className="ownershopname"
            class="d-flex justify-content-center"
          >
            The Miami Bike Shop
          </Card.Title>
          <Card.Text class="d-flex justify-content-center">Review</Card.Text>
          <hr />
        </Card.Body>
      </Card>
    </div>
  );
};

export default OwnerCard;
