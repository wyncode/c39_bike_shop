import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function InfoCards() {
  return (
    <CardDeck className="mt-2 mr-2 ml-2">
      <Card className="InfoCard">
        <Link to="#">
          <Card.Img variant="top" src="https://i.imgur.com/dzTEdUH.png" />
        </Link>
        <Card.ImgOverlay>
          <Card.Title className="imgtitle">Community</Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Card className="InfoCard">
        <Link to="#">
          <Card.Img variant="top" src="https://i.imgur.com/tEUFskd.png" />
        </Link>
        <Card.ImgOverlay>
          <Card.Title className="imgtitle">Events</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Card className="InfoCard">
        <Link to="#">
          <Card.Img variant="top" src="https://i.imgur.com/gADnyXW.png" />
        </Link>
        <Card.ImgOverlay>
          <Card.Title className="imgtitle">Trails & Routes</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </CardDeck>
  );
}
