import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

const BikeShopCard = ({ bikeshop }) => {
  return (
    // Can we put an href on the card?
    <div>
      <Card href="/bikeshopPDP" className="d-flex flex-row">
        <Card.Body>
          <Card.Img
            className="shopimg1"
            src="https://i.imgur.com/50JZigU.png"
            alt="Bike Shop Logo"
          />
        </Card.Body>

        <Card.Body>
          <Card.Title>{bikeshop?.shopName}</Card.Title>
          <Card.Text>
            {bikeshop?.shopContact.street} {bikeshop?.shopContact.city}{' '}
            {bikeshop?.shopContact.state} {bikeshop?.shopContact.zipCode}
          </Card.Text>
          <Card.Text>{bikeshop?.shopContact.email}</Card.Text>
          <Card.Text>{bikeshop?.shopContact.website}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BikeShopCard;
