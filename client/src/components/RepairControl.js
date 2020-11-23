import React from 'react';
import { Card } from 'react-bootstrap';
import './styles/repairs.css';

const RepairControl = () => {
  return (
    <Card>
      <Card.Header as="h5" class="d-flex justify-content-center">
        Bike Repair Controls
      </Card.Header>
      <Card.Body>
        <Card.Title class="d-flex justify-content-center">
          Traci #55555
        </Card.Title>
        <Card.Text class="d-flex justify-content-center">
          8-bit gluten-free roof party, drinking vinegar pickled aesthetic.
          Microdosing fixie margarita fashion axe meh live-edge drinking
          vinegar.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RepairControl;
