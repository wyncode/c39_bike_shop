import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HeroImage = ({ history }) => {
  return (
    <Card>
      <Card.Img src="https://imgur.com/ky2VSB5.png" alt="Hero Image" />
      <Card.ImgOverlay className="text-white d-flex flex-column">
        <Card.Title className="HeroTitle">
          Easily Track My Bike Repairs
        </Card.Title>
        <Button
          className="btn-pink-sm btn-holder ml-auto"
          onSubmit={() => {
            history.push('/signup');
          }}
        >
          Get Started
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HeroImage;
