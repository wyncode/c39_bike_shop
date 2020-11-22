import React from 'react';
import { Card, Form, Container, ListGroup } from 'react-bootstrap';

const AwaitBike = () => {
  return (
    <div>
      <h1 className="awaitingtitle">Awaiting bike drop off</h1>
      <Card>
        <Card.Header className="datetime">11-22-22 11:11AM</Card.Header>
      </Card>
      <Card>
        <Card.Text>
          Simple repairs may take up to 24-48 hours. In more complex cases,
          repairs may take longer.
        </Card.Text>
      </Card>
    </div>
  );
};

export default AwaitBike;
