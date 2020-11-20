import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeroImage() {
  return (
    <Card>
      <Card.Img src="https://imgur.com/ky2VSB5.png" alt="Hero Image" />
      <Card.ImgOverlay className="text-white d-flex flex-column">
        <Card.Title className="HeroTitle">
          Easily Track My Bike Repairs
        </Card.Title>

        <Card className="btn-holder">
          <Button className="btn-pink-md ml-auto" style={{ fontSize: '2vw' }}>
            <Link
              to="/shoplist"
              style={{ color: 'whitesmoke', textDecoration: 'none' }}
            >
              Start My Bike Repair{' '}
            </Link>
          </Button>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
}
