import React from 'react';
import { Container, Button } from 'react-bootstrap';
import RepairCarousel from '../components/RepairCarousel';
import BikeShopCard from '../components/BikeShopCard';
import { Link } from 'react-router-dom';

const BikeShopPDP = () => {
  return (
    <Container>
      <RepairCarousel />
      <BikeShopCard />
      <Container>
        <Button variant="danger">Select Repairs</Button>
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
