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
    <CardDeck>
      <Card className="InfoCard">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/GmNnvw7.png" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Community</Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Link>
      </Card>

      <Card className="FeaturedShops">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/oc2roV8.png" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Events</Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Link>
      </Card>
      <Card className="FeaturedShops">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/k0uHv0t.png" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Trails & Routes</Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Link>
      </Card>
      <Card className="FeaturedShops">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/BoRI9vo.png" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Trails & Routes</Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Link>
      </Card>
    </CardDeck>
  );
}
