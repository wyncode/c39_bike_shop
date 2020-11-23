import React from 'react';
import OwnerCard from '../components/OwnerCard';
import OwnerSearchBar from '../components/OwnerSearchBar';
import Orders from '../components/Orders';
import '../components/styles/ownerorderlist.css';
import { Container } from 'react-bootstrap';

const ShopOwner = () => {
  return (
    <Container>
      <OwnerCard />
      <OwnerSearchBar />
      <h1>Open Orders</h1>
      <Orders />
      <h1>Closed Orders</h1>
      <Orders />
    </Container>
  );
};

export default ShopOwner;
