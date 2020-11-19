import React from 'react';
import { Container, Button, Image, CardDeck, Card } from 'react-bootstrap';

export default function InfoCards() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Trails & Routes</Card.Title>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Community</Card.Title>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Events</Card.Title>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </CardDeck>
  );
}
