import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Map from '../components/Map';
import BikeShopCard from '../components/BikeShopCard';
import { Link } from 'react-router-dom';
import ShopInfo from '../components/ShopInfo';

const BikeShopPDP = () => {
  return (
    <Container>
      <Map />
      <BikeShopCard />
      <ShopInfo />
      <Container>
        <Button className="btn-pink-lg">Select Repairs</Button>
      </Container>
      <Container>
        <Link className="mt-4" to="/Shoplist">
          Back to Bike Shop List
        </Link>
      </Container>
    </Container>
  );
};

export default BikeShopPDP;
