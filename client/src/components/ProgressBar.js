import React from 'react';
import { Card, Container } from 'react-bootstrap';

export const ProgressBar = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src="https://imgur.com/wE9rGJ8.png" alt="Card image" />
        <Container className="tracker">
          <Container>
            <Card.ImgOverlay className="tracker1">1</Card.ImgOverlay>
          </Container>
          <Container>
            <Card.ImgOverlay className="tracker2">2</Card.ImgOverlay>
          </Container>
          <Container>
            <Card.ImgOverlay className="tracker3">3</Card.ImgOverlay>
          </Container>
          <Container>
            <Card.ImgOverlay className="tracker4">4</Card.ImgOverlay>
          </Container>
          <Container>
            <Card.ImgOverlay className="tracker5">5</Card.ImgOverlay>
          </Container>
          <Container>
            <Card.ImgOverlay className="tracker6">6</Card.ImgOverlay>
          </Container>
        </Container>
      </Card>
    </div>
  );
};

export default ProgressBar;
