import React from 'react';
import {
  Container,
  Button,
  Image,
  CardDeck,
  Card,
  Carousel
} from 'react-bootstrap';

export default function FeaturedShops() {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item interval={3000}>
            <h1>Image 1</h1>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <h1>Image 2</h1>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Card.Img variant="top" src="https://i.imgur.com/gADnyXW.png" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
