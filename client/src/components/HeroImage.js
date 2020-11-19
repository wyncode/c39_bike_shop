import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

export default function HeroImage() {
  return (
    <Container>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Easily Track My Bike Repairs</Card.Title>
          <Button variant="danger">Start My Bike Repair</Button>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}
