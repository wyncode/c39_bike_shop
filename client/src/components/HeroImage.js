import React, { useHistory } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function HeroImage() {
  let history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };

  return (
    <Card>
      <Card.Img src="https://imgur.com/ky2VSB5.png" alt="Hero Image" />
      <Card.ImgOverlay className="text-white d-flex flex-column">
        <Card.Title className="HeroTitle">
          Easily Track My Bike Repairs
        </Card.Title>
        <Button
          className="btn-pink-sm btn-holder ml-auto"
          onClick={handleClick}
        >
          Get Started
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HeroImage;
