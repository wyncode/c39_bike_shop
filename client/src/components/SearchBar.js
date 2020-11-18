import React from 'react';
import { FormControl } from 'react-bootstrap';

const SearchBar = () => {
  const handleSearch = () => {};

  return (
    <div>
      <FormControl
        onChange={handleSearch}
        type="text"
        placeholder="Select Your Bike Shop"
        size="lg"
      />
    </div>
  );
};

export default SearchBar;
