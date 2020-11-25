import React, { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';

import { AppContext } from '../context/AppContext';

const SearchBar = ({ handleSearchProp }) => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Control
            onChange={handleSearchProp}
            type="number"
            placeholder="Enter your zip code"
            size="lg"
          />
        </Form>
      </Container>
    </div>
  );
};

export default SearchBar;
