import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';

const FilterRepair = () => {
  return (
    <Container className="d-flex flex-column justify-content-center">
      <Container className="d-flex justify-content-between">
        <Button>Frame</Button>
        <Button>Brakes</Button>
      </Container>
      <Image src="https://writemiss.blog/wp-content/uploads/2018/11/36889870_10160707026675061_5741121654017228800_n.png" />
      <Container className="d-flex justify-content-between">
        <Button>Gears</Button>
        <Button>Wheels</Button>
      </Container>
    </Container>
  );
};

export default FilterRepair;
