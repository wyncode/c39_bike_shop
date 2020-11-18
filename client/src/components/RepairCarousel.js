import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const RepairCarousel = () => {
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
            <h1>Image 3</h1>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default RepairCarousel;
