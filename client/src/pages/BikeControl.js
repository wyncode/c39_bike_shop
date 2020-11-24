import React from 'react';
import { Card, Container, Button, ProgressBar } from 'react-bootstrap';
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
        <ProgressBar now={60} className="mt-4" />
      </Container>
      <hr style={{ border: '0.5px solid #EC4568' }} />
      <Container className="button d-flex flex-column align-items-center">
        <Button className="btn-pink-sm">Received</Button>
        <br />
        <Button className="btn-pink-sm">Diagnosed</Button>
        <br />
        <Button className="btn-pink-sm">Parts Ordered</Button>
        <br />
        <Button className="btn-pink-sm">Repair in Progress</Button>
        <br />
        <Button className="btn-pink-sm">Delayed</Button>
        <br />
        <Button className="btn-pink-sm">Ready for Pick Up</Button>
      </Container>

      <hr style={{ border: '0.5px solid #EC4568' }} />
    </>
  );
};

export default BikeControl;
