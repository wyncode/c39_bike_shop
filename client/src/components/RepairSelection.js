import React from 'react';
import { Container, Button } from 'react-bootstrap';

const RepairSelection = () => {
  return (
    <Container className="mt-4">
      <h2>Select your repairs</h2>
      <Button className="d-flex justify-content-between btnRep" size="lg" block>
        <p>Flat Tire Tube Replacement</p>
        <p>$15.00</p>
      </Button>
      <Button className="d-flex justify-content-between btnRep" size="lg" block>
        <p>Wheel Truing(excludes tube price)</p>
        <p>$15.00</p>
      </Button>
      <Button className="d-flex justify-content-between btnRep" size="lg" block>
        <p>Cassette/Cog/Freewheel install or removal</p>
        <p>$15.00</p>
      </Button>
      <Button className="d-flex justify-content-between btnRep" size="lg" block>
        Brake/Gear cable install w/ adjustment
        <p>$15.00</p>
      </Button>
      <Button className="d-flex justify-content-between btnRep" size="lg" block>
        Bike wash and Tune Up
        <p>$15.00</p>
      </Button>
    </Container>
  );
};

export default RepairSelection;
