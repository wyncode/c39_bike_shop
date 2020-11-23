import React from 'react';
import { Card, Image } from 'react-bootstrap';

const OwnerCard = () => {
  return (
    <div class="d-flex justify-content-center">
      <Card>
        <Image
          style={{ height: '250px', width: '300px' }}
          variant="top"
          src="https://i.imgur.com/dzTEdUH.png"
          thumbnail
        />
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
