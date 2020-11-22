import React from 'react';
import BikeShopCard from './BikeShopCard';
import { Container } from 'react-bootstrap';

const SearchResults = () => {
  return (
    <div>
      <Container>
        <BikeShopCard />
        <BikeShopCard />
        <BikeShopCard />
      </Container>
    </div>
  );
};

export default SearchResults;
