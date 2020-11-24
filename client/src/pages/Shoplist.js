import React from 'react';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { Container } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';

const Shoplist = () => {
  return (
    <div>
      <Container>
        <SearchBar />
        <Map />
        <h3>Bike Shops</h3>
        <BikeShopCard />
      </Container>
    </div>
  );
};

export default Shoplist;
