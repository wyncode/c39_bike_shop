import React from 'react';
import { Carousel } from 'react-bootstrap';

const RepairCarousel = () => {
  return (
    <div>
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
    </div>
  );
};

export default RepairCarousel;
