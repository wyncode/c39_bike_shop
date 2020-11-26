import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap';
import '../App.css';

const BikeShopCard = ({ bikeshop }) => {
  const history = useHistory();
  return (
    <div>
      <Container
        className="bikeshopCard"
        onClick={() => history.push(`/bikeshoppdp/${bikeshop._id}`)}
      >
        <Image
          src="https://imgur.com/gADnyXW.png"
          alt="bikeshop logo"
          className="bikeshopLogo"
        />

        <div className="d-flex flex-column align-item-between shopContact">
          <h2 className="shopName">{bikeshop?.shopName}</h2>
          <p className="shopData">
            {bikeshop?.shopContact.street} {bikeshop?.shopContact.city},{' '}
            {bikeshop?.shopContact.state} {bikeshop?.shopContact.zipCode}
          </p>
          <p className="shopData">{bikeshop?.phone}</p>
          <p className="shopData reviewData">Reviews ****</p>
        </div>
      </Container>
    </div>
  );
};

export default BikeShopCard;
