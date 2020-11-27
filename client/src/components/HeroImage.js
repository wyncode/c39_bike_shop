import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <Card>
      <Card.Img src="https://imgur.com/ky2VSB5.png" alt="Hero Image" />
      <Card.ImgOverlay className="text-white d-flex flex-column">
        <Card.Title className="HeroTitle">
          Easily Track My Bike Repairs
        </Card.Title>
        <Link to="/signup" className="btn-holder ml-auto">
          <Button className="btn-pink-sm ">Get Started</Button>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HeroImage;
