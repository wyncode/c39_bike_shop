import React, { useState } from 'react';
import { Container, FormControl } from 'react-bootstrap';
import axios from 'axios';

const SearchBar = () => {
  const [bikeShops, setBikeShops] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await axios.get(`api/bikeshop`);
      const response = data.json;
      console.log(response);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <Container>
        <FormControl
          onChange={handleSearch}
          type="text"
          placeholder="Enter your zip code"
          size="lg"
        />
      </Container>
    </div>
  );
};

export default SearchBar;
