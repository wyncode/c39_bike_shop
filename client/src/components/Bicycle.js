import React from 'react';
import { Tab, Row, Col, ListGroup, Card } from 'react-bootstrap';
import './styles/profile.css';

const Bicycle = () => {
  return (
    <Card>
      <Card.Title>Bike Name</Card.Title>
      <Card.Text>Bike Model</Card.Text>
      <Card.Text>Bike Type</Card.Text>
    </Card>
  );
};

export default Bicycle;
