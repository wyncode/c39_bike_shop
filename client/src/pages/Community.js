import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';

const Community = () => {
  return (
    <Container>
      <Card>
        <Card.Header className="">Miami's Best Coffee Shop!</Card.Header>
        <Card.Img variant="top" src="https://i.imgur.com/2S31JGZ.jpg" />
        <Card.Body>
          <Card.Text>
            Pay a visit to the Rapha Miami cafe shop for a great post ride
            coffee and firendly service from the top notch Rpaha Staff.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>Cyclist of the Month</Card.Header>
        <Card.Img variant="top" src="https://i.imgur.com/pGczlq2.jpg" />
        <Card.Body>
          <Card.Text>
            Cyclist of the month is JP Castrillon who has been riding in Miami
            for the past 2 years.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Safety Tip of the Month</Card.Header>
        <Card.Img variant="top" src="https://i.imgur.com/FX0vNWp.jpg" />
        <Card.Body>
          <Card.Text>
            Make sure you use left and right hand signals when turning into a
            corner. Avoid blind spots when riding along a car.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Community;
