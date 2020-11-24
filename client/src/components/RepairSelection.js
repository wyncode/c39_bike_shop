import React from 'react';
import { Container, Button } from 'react-bootstrap';

const RepairSelection = () => {
  // you will neeed context

  return (
    <>
      <Container>
        <h1> Bikeshop.name</h1>

        <Image src="https://imgur.com/wE9rGJ8.png" fluid />
      </Container>
      <Container className="mt-4">
        <h2>Select your repairs</h2>
        <Button
          className="d-flex justify-content-between btnRep"
          size="lg"
          block
        >
          <p>Bikeshop.repairs.repair</p>
          <p>bikeshop.repairs.price</p>
        </Button>
      </Container>
    </>
  );
};

export default RepairSelection;
