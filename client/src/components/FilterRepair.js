import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';

const FilterRepair = () => {
  return (
    <Container className="d-flex flex-column justify-content-center">
      <h2>Filter By Issue</h2>
      <Container className="d-flex justify-content-between">
        <Button className="filBtn mr-2">Frame</Button>
        <Button className="filBtn mr-2">Brakes</Button>
      </Container>
      <Container className="d-flex justify-content-center">
        <Image src="https://imgur.com/wE9rGJ8.png" fluid />
      </Container>

      <Container className="d-flex justify-content-between">
        <Button className="filBtn">Gears</Button>
        <Button className="filBtn">Wheels</Button>
      </Container>
    </Container>
  );
};

export default FilterRepair;
