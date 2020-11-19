import React from 'react';
import RepairCarousel from '../components/RepairCarousel';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { Container } from 'react-bootstrap';

const Shoplist = () => {
  return (
    <div>
      <Container>
        <SearchBar />
        <RepairCarousel />
        <h3>Bike Shops</h3>
        <SearchResults />
      </Container>
    </div>
  );
};

export default Shoplist;
