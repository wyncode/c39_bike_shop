import React from 'react';
import { Card, Container } from 'react-bootstrap';
// import RepairControl from '../components/RepairControl';
import Orders from '../components/Orders';

import '../components/styles/ownerorderlist.css';

const BikeControl = () => {
  return (
    <>
      <h1 class="d-flex justify-content-center">Bike Repair Controls</h1>
      {/* <RepairControl /> */}
      <h5>Repair Description</h5>
      <p>
        8-bit gluten-free roof party, drinking vinegar pickled aesthetic.
        Microdosing fixie margarita fashion axe meh live-edge drinking vinegar.
      </p>
      <Container>
        <Card.Img
          className="bikepic"
          src="https://i.imgur.com/ty0FCH0.png"
        ></Card.Img>
      </Container>

      <Orders />
    </>
  );
};

export default BikeControl;
