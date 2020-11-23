import React from 'react';
import { Card, ListGroup, Container } from 'react-bootstrap';

const CompletedOrders = () => {
  return (
    <div class="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Header>Completed Orders</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Traci Levine #4444</ListGroup.Item>
          <ListGroup.Item>Danny Nieves #7777</ListGroup.Item>
          <ListGroup.Item>Abuela #5555</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CompletedOrders;
