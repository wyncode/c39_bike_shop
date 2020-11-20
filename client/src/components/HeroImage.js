import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

export default function HeroImage() {
  return (
    <Card>
      <Card.Img src="https://imgur.com/ky2VSB5.png" alt="Hero Image" />
      <Card.ImgOverlay className="text-white d-flex flex-column">
        <Card.Title className="HeroTitle">
          Easily Track My Bike Repairs
        </Card.Title>
        <Button className="btn-pink-lg ml-auto">Start My Bike Repair</Button>
      </Card.ImgOverlay>
    </Card>
  );
}
