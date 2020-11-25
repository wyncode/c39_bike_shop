import React from 'react';
import { Card } from 'react-bootstrap';

const AwaitBike = () => {
  return (
    <div>
      <h1 className="awaitingtitle">Awaiting bike drop off</h1>
      <Card className="datetime d-flex flex-row">
        <Card.Body className="dateBody d-flex flex-row">
          <Card.Img src="https://imgur.com/mJ2AXNm.png"></Card.Img>
          <div className="datetime">
            <Card.Text>11-22-22</Card.Text>
            <Card.Text>11:11AM</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Text className="repairtime">
          Simple repairs may take up to 24-48 hours. In more complex cases,
          repairs may take longer.
        </Card.Text>
      </Card>
    </div>
  );
};

export default AwaitBike;
