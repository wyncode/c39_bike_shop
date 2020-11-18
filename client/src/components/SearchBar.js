import React from 'react';
import { Container, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  const handleSearch = () => {};

  return (
    <div>
      <Container>
        <FormControl
          onChange={handleSearch}
          type="text"
          placeholder="Select Your Bike Shop"
          size="lg"
        />
      </Container>
    </div>
  );
};

export default SearchBar;
