import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function InfoCards() {
  return (
    <CardDeck className="mt-2 mr-2 ml-2">
      <Card className="InfoCard">
        <Link to="/community">
          <Card.Img variant="top" src="https://i.imgur.com/dzTEdUH.png" />
          <Card.ImgOverlay>
            <Card.Title className="imgtitle">Community</Card.Title>
          </Card.ImgOverlay>{' '}
        </Link>
      </Card>

      <Card className="InfoCard">
        <Link to="/events">
          <Card.Img variant="top" src="https://i.imgur.com/tEUFskd.png" />
          <Card.ImgOverlay>
            <Card.Title className="imgtitle">Events</Card.Title>
          </Card.ImgOverlay>{' '}
        </Link>
      </Card>
      <Card className="InfoCard">
        <Link to="/trails">
          <Card.Img variant="top" src="https://i.imgur.com/gADnyXW.png" />
          <Card.ImgOverlay>
            <Card.Title className="imgtitle">Trails & Routes</Card.Title>
          </Card.ImgOverlay>{' '}
        </Link>
      </Card>
    </CardDeck>
  );
}
