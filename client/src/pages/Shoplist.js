import React from 'react';
import RepairCarousel from '../components/RepairCarousel';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const ShopList = () => {
  return (
    <div>
      <SearchBar />
      <RepairCarousel />
      <SearchResult />
    </div>
  );
};

export default ShopList;
