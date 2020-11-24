import React from 'react';
import { Container } from 'react-bootstrap';
import Orders from '../components/Orders';
const Order = () => {
  return (
    <Container>
      <h1>Open Orders</h1>
      <Orders />
      <h1>Closed Orders</h1>
      <Orders />
    </Container>
  );
};

export default Order;
