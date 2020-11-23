import React from 'react';
import { Link } from 'react-router-dom';

import { CardDeck, Card, Container } from 'react-bootstrap';

export default function FeaturedShops() {
  return (
    <>
      <h1 className="f-shops">Featured Shops</h1>
      <CardDeck className="ml-2 mr-2">
        <Card className="FeaturedShops">
          <Link to="#">
            <Card.Img variant="top" src="https://i.imgur.com/GmNnvw7.png" />
          </Link>
          <Card.Title>No Boundaries</Card.Title>
        </Card>

        <Card className="FeaturedShops">
          <Link to="#">
            <Card.Img variant="top" src="https://i.imgur.com/oc2roV8.png" />
          </Link>

          <Card.Title>Bike Tech</Card.Title>
        </Card>
        <Card className="FeaturedShops">
          <Link to="#">
            <Card.Img variant="top" src="https://i.imgur.com/k0uHv0t.png" />
          </Link>

          <Card.Title>The Miami Bike Shop</Card.Title>
        </Card>
        <Card className="FeaturedShops">
          <Link to="#">
            <Card.Img variant="top" src="https://i.imgur.com/BoRI9vo.png" />
          </Link>

          <Card.Title>Miami Bikes</Card.Title>
        </Card>
      </CardDeck>
      <h5 className="title">The Bike Shop</h5>
    </>
  );
}
