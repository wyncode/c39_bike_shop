import React from 'react';
import { Container, Button, Image, CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function InfoCards() {
  return (
    <CardDeck>
      <Card className="InfoCard">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/dzTEdUH.png" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Community</Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Link>
      </Card>

      <Card className="InfoCard">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/tEUFskd.png" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Events</Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Link>
      </Card>
      <Card className="InfoCard">
        <Link>
          <Card.Img variant="top" src="https://i.imgur.com/gADnyXW.png" />
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
