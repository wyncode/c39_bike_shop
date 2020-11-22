import React from 'react';
import { Card } from 'react-bootstrap';

export default function DropOff() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="dropofftitle">Drop Off Instructions</Card.Title>
        <Card.Text className="dropoffp">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
