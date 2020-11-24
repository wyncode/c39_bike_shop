import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
// import RepairControl from '../components/RepairControl';
import Orders from '../components/Orders';

import '../components/styles/ownerorderlist.css';

const BikeControl = () => {
  return (
    <>
      <h1 class="d-flex justify-content-center">Bike Repair Controls</h1>
      <Orders />
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
      <hr style={{ border: '0.5px solid #EC4568' }} />
      <Container className="button">
        <Button>Received</Button>
        <br />
        <Button>Diagnosed</Button>
        <br />
        <Button>Parts Ordered</Button>
        <br />
        <Button>Repair in Progress</Button>
        <br />
        <Button>Delayed</Button>
        <br />
        <Button>Ready for Pick Up</Button>
      </Container>

      <hr style={{ border: '0.5px solid #EC4568' }} />
    </>
  );
};

export default BikeControl;
