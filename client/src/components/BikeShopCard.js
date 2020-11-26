import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Container, Card } from 'react-bootstrap';
import '../App.css';

const BikeShopCard = ({ bikeshop }) => {
  const history = useHistory();
  return (
    <div>
      <Card
        className="bikeshopCard"
        onClick={() => history.push(`/bikeshoppdp/${bikeshop._id}`)}
      >
        <Image
          src="https://imgur.com/gADnyXW.png"
          alt="bikeshop logo"
          className="bikeshopLogo"
        />

        <Card.Body
          className="d-flex flex-column align-item-between"
          className="shopContact"
        >
          <Card.Title className="shopName">{bikeshop?.shopName}</Card.Title>
          <Card.Text className="shopData">
            {bikeshop?.shopContact.street} {bikeshop?.shopContact.city},{' '}
            {bikeshop?.shopContact.state} {bikeshop?.shopContact.zipCode}
          </Card.Text>
          <Card.Text className="shopData">{bikeshop?.phone}</Card.Text>
          <Card.Text className="shopData reviewData">Reviews ****</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BikeShopCard;
