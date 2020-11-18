import React from 'react';
import RepairCarousel from '../components/RepairCarousel';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Shoplist = () => {
  return (
    <div>
      <SearchBar />
      <RepairCarousel />
      <SearchResults />
    </div>
  );
};

export default Shoplist;
