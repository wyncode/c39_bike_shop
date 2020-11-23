import React from 'react';
import { Card } from 'react-bootstrap';

export default function Estimate() {
  return (
    <>
      <Card>
        <Card.Body className="estimate">Estimate</Card.Body>
      </Card>
      <Card>
        <Card.Body className="estimate1">Basic Tune Up $100</Card.Body>
      </Card>
      <hr className="estimateline" />
      <Card>
        <Card.Body className="estimate1">Subtotal: $100</Card.Body>
      </Card>
    </>
  );
}
