import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const openorders = () => {
  return (
    <div class="d-flex justify-content-center">
      <Card style={{ width: '18rem' }} class="d-flex justify-content-center">
        <Card.Header>Open Orders</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="orderbox">
            Chris Froome #4444
          </ListGroup.Item>
          <ListGroup.Item>Lance Armstrong #7777</ListGroup.Item>
          <ListGroup.Item>Dogs #5555</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default openorders;
