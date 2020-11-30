import React from 'react';
import Orders from '../components/Orders';
import '../components/styles/ownerorderlist.css';
import { Container, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const ShopOwner = () => {
  const handleSearch = () => {};
  return (
    <Container>
      <h1 class="d-flex flex-column align-items-center">Welcome</h1>
      <Form>
        <Form.Control
          onChange={handleSearch}
          type="text"
          placeholder="Search Orders"
          size="lg"
          name="name"
        />
      </Form>
      <h1>Open Orders</h1>
      <Link to="/repaircontrol">
        <Orders />
      </Link>
      <h1>Closed Orders</h1>
      <Orders />
    </Container>
  );
};

export default ShopOwner;
