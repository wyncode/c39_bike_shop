import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/repairs.css';
import Orders from './Orders';

const RepairControl = () => {
  return (
    <Container>
      <h1> Repairs Control</h1>
      <Orders />
      <p>Insert description here </p>
      <hr />
      <Button> Received</Button>
    </Container>
  );
};

export default RepairControl;
