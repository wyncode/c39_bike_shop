import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

export default function HeroImage() {
  return (
    <Container>
      <Card className="bg-dark text-white">
        <Card.Img src="https://imgur.com/ky2VSB5.png" alt="Hero Image" />
        <Card.ImgOverlay>
          <Card.Title className="HeroTitle">
            Easily Track My Bike Repairs
          </Card.Title>
          <Button className="btn-pink-lg" variant="danger">
            Start My Bike Repair
          </Button>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}
