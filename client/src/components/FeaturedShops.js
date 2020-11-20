import React from 'react';
import { Link } from 'react-router-dom';

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
    <>
      <h1 className="HeroTitle">Featured Shops</h1>
      <CardDeck>
        <Card className="FeaturedShops">
          <Link>
            <Card.Img variant="top" src="https://i.imgur.com/GmNnvw7.png" />
            <Card.Body>
              <Card.Title>No Boundaries</Card.Title>
            </Card.Body>
          </Link>
        </Card>

        <Card className="FeaturedShops">
          <Link>
            <Card.Img variant="top" src="https://i.imgur.com/oc2roV8.png" />
            <Card.Body>
              <Card.Title>Bike Tech</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card className="FeaturedShops">
          <Link>
            <Card.Img variant="top" src="https://i.imgur.com/k0uHv0t.png" />
            <Card.Body>
              <Card.Title>The Miami Bike Shop</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card className="FeaturedShops">
          <Link>
            <Card.Img variant="top" src="https://i.imgur.com/BoRI9vo.png" />
            <Card.Body>
              <Card.Title>Miami Bikes</Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardDeck>
      <h5 className="HeroTitle">The Bike Shop</h5>
    </>
  );
}
