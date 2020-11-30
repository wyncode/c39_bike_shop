import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({ event }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{event.eventName}</Card.Title>
        <Card.Text>{event.eventDate}</Card.Text>
        <Card.Text>{event.eventType}</Card.Text>
        <Card.Text>{event.eventDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
